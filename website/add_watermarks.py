import os
import glob
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import arabic_reshaper
from bidi.algorithm import get_display

def get_arabic_font(size):
    font_paths = [
        "C:/Windows/Fonts/arialbd.ttf",
        "C:/Windows/Fonts/tahomabd.ttf",
        "C:/Windows/Fonts/tahoma.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/calibrib.ttf",
        "C:/Windows/Fonts/seguiemj.ttf"
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

def format_arabic(text):
    reshaped_text = arabic_reshaper.reshape(text)
    bidi_text = get_display(reshaped_text)
    return bidi_text

def add_watermark(image_path, logo_path, output_path, corner="top-right"):
    img = Image.open(image_path).convert("RGBA")
    w, h = img.size
    
    # Scale badge based on image dimensions
    scale = max(w, h) / 1024.0
    
    logo_size = int(60 * scale)
    badge_h = int(76 * scale)
    pad = int(14 * scale)
    corner_margin = int(24 * scale)
    
    font_title = get_arabic_font(int(22 * scale))
    font_sub = get_arabic_font(int(12 * scale))
    
    title_text = format_arabic("معرض الخليل")
    sub_text = format_arabic("للأدوات المنزلية والمفروشات وتجهيز العرائس")
    
    # Measure text
    dummy_draw = ImageDraw.Draw(img)
    t_bbox = dummy_draw.textbbox((0, 0), title_text, font=font_title)
    s_bbox = dummy_draw.textbbox((0, 0), sub_text, font=font_sub)
    
    text_w = max(t_bbox[2] - t_bbox[0], s_bbox[2] - s_bbox[0])
    badge_w = logo_size + text_w + (pad * 3) + int(10 * scale)
    
    # Create Badge Layer
    badge = Image.new("RGBA", (badge_w, badge_h), (0, 0, 0, 0))
    bdraw = ImageDraw.Draw(badge)
    
    # Rounded badge background with luxury gradient / dark navy glass
    r = int(14 * scale)
    # Background
    bdraw.rounded_rectangle([0, 0, badge_w, badge_h], radius=r, fill=(15, 23, 42, 220), outline=(212, 175, 55, 230), width=max(1, int(2 * scale)))
    
    # Load and draw logo if exists
    if os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path).convert("RGBA")
            logo = logo.resize((logo_size - int(10 * scale), logo_size - int(10 * scale)), Image.Resampling.LANCZOS)
            
            # Mask rounded logo
            mask = Image.new("L", logo.size, 0)
            mdraw = ImageDraw.Draw(mask)
            mdraw.rounded_rectangle([0, 0, logo.size[0], logo.size[1]], radius=int(8 * scale), fill=255)
            
            logo_x = badge_w - pad - logo.size[0]
            logo_y = (badge_h - logo.size[1]) // 2
            badge.paste(logo, (logo_x, logo_y), mask)
            
            # Gold border around logo
            bdraw.rounded_rectangle([logo_x, logo_y, logo_x + logo.size[0], logo_y + logo.size[1]], radius=int(8 * scale), outline=(212, 175, 55, 255), width=max(1, int(1.5 * scale)))
        except Exception as e:
            print("Logo load error:", e)
            logo_x = badge_w - pad
    else:
        logo_x = badge_w - pad
        
    # Draw texts (RTL alignment)
    text_right_x = logo_x - int(8 * scale)
    
    # Title
    t_w = t_bbox[2] - t_bbox[0]
    tx = text_right_x - t_w
    ty = int(10 * scale)
    bdraw.text((tx, ty), title_text, fill=(245, 197, 66, 255), font=font_title)
    
    # Subtitle
    s_w = s_bbox[2] - s_bbox[0]
    sx = text_right_x - s_w
    sy = ty + (t_bbox[3] - t_bbox[0]) + int(4 * scale)
    bdraw.text((sx, sy), sub_text, fill=(241, 245, 249, 230), font=font_sub)
    
    # Compute position on main image
    if corner == "top-right":
        pos_x = w - badge_w - corner_margin
        pos_y = corner_margin
    elif corner == "top-left":
        pos_x = corner_margin
        pos_y = corner_margin
    elif corner == "bottom-right":
        pos_x = w - badge_w - corner_margin
        pos_y = h - badge_h - corner_margin
    else:
        pos_x = corner_margin
        pos_y = h - badge_h - corner_margin
        
    # Add subtle drop shadow to badge
    shadow = Image.new("RGBA", (badge_w + 20, badge_h + 20), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.rounded_rectangle([10, 10, badge_w + 10, badge_h + 10], radius=r, fill=(0, 0, 0, 120))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=int(6 * scale)))
    
    # Paste shadow then badge
    img.paste(shadow, (pos_x - 10, pos_y - 10), shadow)
    img.paste(badge, (pos_x, pos_y), badge)
    
    # Save back
    final_img = img.convert("RGB")
    final_img.save(output_path, quality=95)
    print(f"Watermarked: {output_path}")

def main():
    assets_dir = "assets/images"
    logo_path = os.path.join(assets_dir, "logo.jpg")
    
    images_to_watermark = [
        "hero-bridal.jpg",
        "cookware.jpg",
        "bedding.jpg",
        "dinnerware.jpg",
        "appliances.jpg"
    ]
    
    for img_name in images_to_watermark:
        img_path = os.path.join(assets_dir, img_name)
        if os.path.exists(img_path):
            add_watermark(img_path, logo_path, img_path, corner="top-right")

if __name__ == "__main__":
    main()
