// Data & State
const state = {
  cart: [],
  theme: localStorage.getItem('el_khalil_theme') || 'light',
  currentCategory: 'all',
  searchQuery: '',
  checklistState: JSON.parse(localStorage.getItem('el_khalil_checklist')) || {}
};

// WhatsApp Phone Number
const STORE_PHONE = "201090799599";

// Products Dataset
const products = [
  {
    id: 1,
    title: "طقم حلل جرانيت تركي 15 قطعة - أخضر زمردي ملكي",
    category: "cookware",
    categoryName: "أدوات المطبخ والطهي",
    price: 4850,
    oldPrice: 6200,
    discount: "22%",
    rating: 5.0,
    image: "assets/images/cookware.jpg",
    features: "7 طبقات جرانيت صخري • غير لاصق • خالي من PFOA • أيدي ذهبية عازلة للحرارة",
    description: "أرقى أطقم الطهي التركية لعروسة 2026، يشمل 4 حلل بمقاسات مختلفة مع أغطية زجاجية حرارية، كسرولة، طاسة قلي، صينية فرن، وطقم توزيع سيليكون كامل."
  },
  {
    id: 2,
    title: "طقم مفرش ولحاف عروسة فندقي جاكار 8 قطع - شامبين مطرز",
    category: "bedding",
    categoryName: "مفروشات ومنسوجات",
    price: 3600,
    oldPrice: 4800,
    discount: "25%",
    rating: 4.9,
    image: "assets/images/bedding.jpg",
    features: "قطيفة جاكار ملكي • تطريز ذهبي يدوي • حشوة مايكروفايبر مضغوطة • ملاية سرير قطن مصري",
    description: "طقم فاخر يشمل لحاف كينج سايز مطرز، ملاية سرير بأستك قطن مصري نقي، 4 خداديات مطرزة، و2 كوشن ديكور فاخر."
  },
  {
    id: 3,
    title: "طقم صيني وسفرة ملكي كامل 124 قطعة - مذهب 24 قيراط",
    category: "dinnerware",
    categoryName: "أطقم النيش والسفرة",
    price: 14500,
    oldPrice: 18500,
    discount: "21%",
    rating: 5.0,
    image: "assets/images/dinnerware.jpg",
    features: "بورسلين بون تشاينا • نقشة ماء الذهب 24K • مقاوم للحرارة وغسالة الأطباق • للنيش والعزومات",
    description: "تحفة فنية تخطف الأنظار في نيش العروسة وسفرة الضيوف. يحتوي على أطباق التقديم، شوربة، أطقم شاي وجاتوه، طقم قهوة، وحوامل ملاعق."
  },
  {
    id: 4,
    title: "طقم أجهزة المطبخ الذكية للعروسة 4 في 1",
    category: "appliances",
    categoryName: "أجهزة كهربائية",
    price: 8900,
    oldPrice: 11200,
    discount: "20%",
    rating: 4.8,
    image: "assets/images/appliances.jpg",
    features: "قلاية هوائية ديجيتال 8L • عجان ستاند 7L • خلاط زجاجي قوي • كبة فرم اللحوم والخضار",
    description: "باقة الأجهزة الذكية التي تجمع بين الأناقة والسرعة لتجهيز أشهى الوجبات في دقائق، بضمان معتمد لمدة سنتين."
  },
  {
    id: 5,
    title: "الباقة الملكية المتكاملة لتجهيز العروسة VIP",
    category: "packages",
    categoryName: "باقات تجهيز العرائس",
    price: 32000,
    oldPrice: 42000,
    discount: "24%",
    rating: 5.0,
    image: "assets/images/hero-bridal.jpg",
    features: "طقم جرانيت + طقم صيني + مفروشات فندقية + أجهزة كهربائية + شنطة ملاعق ألماني هدية",
    description: "الباقة الأكثر طلباً للعرائس، تشمل كل أساسيات المطبخ، النيش، غرف النوم، والأجهزة الكهربائية بخصم استثنائي وهدايا فورية."
  },
  {
    id: 6,
    title: "طقم ملايات قطن مصري 100% تطريز كمبيوتر 6 قطع",
    category: "bedding",
    categoryName: "مفروشات ومنسوجات",
    price: 1150,
    oldPrice: 1500,
    discount: "23%",
    rating: 4.9,
    image: "assets/images/bedding.jpg",
    features: "قطن مصري طويل التيلة • نعومة فائقة • ألوان ثابتة لا تبهت • تطريز حريري أنيق",
    description: "طقم ملايات سرير كينج مع 2 كيس مخدة و2 كيس خدادية وكوشن مطرز بأعلى دقة."
  },
  {
    id: 7,
    title: "قلاية هوائية ديجيتال سعة مزدوجة Air Fryer 9L",
    category: "appliances",
    categoryName: "أجهزة كهربائية",
    price: 3850,
    oldPrice: 4900,
    discount: "21%",
    rating: 4.8,
    image: "assets/images/appliances.jpg",
    features: "حلتين منفصلتين • 12 برنامج طهي ذكي • شاشة لمس LED • طبخ بدون زيت",
    description: "تحمير وشوي وقلي صحي بدون زيوت مع إمكانية طهي صنفين في نفس الوقت بدرجات حرارة مختلفة."
  },
  {
    id: 8,
    title: "شنطة ملاعق وسكاكين استانلس 18/10 ألماني 86 قطعة مذهبة",
    category: "dinnerware",
    categoryName: "أطقم النيش والسفرة",
    price: 4400,
    oldPrice: 5600,
    discount: "21%",
    rating: 5.0,
    image: "assets/images/dinnerware.jpg",
    features: "استانلس ستيل طبي 18/10 • مطلي ماء الذهب • شنطة جلدية هيدروليك 3 أدوار",
    description: "طقم أدوات مائدة فاخر لا يصدأ ولا يتغير لونه، مصمم ليدوم مدى الحياة ويزين سفرتك في كل مناسبة."
  }
];

// 10 Social Media Posts Dataset
const socialPosts = [
  {
    id: 1,
    title: "البوست 1: الإطلاق والترحيب بالجمهور",
    badge: "انطلاقة وترحيب",
    icon: "fa-bullhorn",
    text: `👑 بيتك الجديد يستاهل الفخامة.. ومعرض الخليل جابلك كل اللي تحلمي بيه في مكان واحد! ✨🏠

لكل عروسة بتجهز فرحها، ولكل ست بيت بتدور على التجديد والرقي.. نرحب بكم في:
🌟 ✨ معرض الخليل للأدوات المنزلية والمفروشات وتجهيز العرائس ✨ 🌟

من النهاردة، مش هتحتاجي تلفي كتير وتحتاري! وفرنالك في معرض الخليل أكبر تشكيلة متكاملة:
🍳 أرقى أطقم الطهي والمطبخ العالمية (جرانيت، سافلون، تيفال، ستانلس، وسيراميك).
🛏️ أفخم مفروشات غرف النوم والعرائس بخامات قطن مصري 100% وأطقم لحاف فندقية تطريز يدوي.
🍽️ أرقى أطقم النيش والسفرة، الصيني الفاخر، الكريستال، وشنط الملاعق الذهبية.
⚡ أحدث الأجهزة الكهربائية والمطابخ الذكية اللي هتسهل عليكي يومك وتعيش معاكي سنين.

🎁 بمناسبة الانطلاقة: عروض حصرية وهدايا فورية لكل عروسة تشرفنا في المعرض! 👰‍♀️💖

📍 العنوان: شابور - بجوار مركز الشباب - شارع معرض الخليل.
📞 للحجز والاستفسار وطلب الكتالوج عبر الواتساب: 01090799599
✨ تفضلوا بزيارتنا في المعرض لاختيار أرقى التشكيلات وأحدث الموديلات.

#معرض_الخليل #تجهيز_عرائس #ادوات_منزلية #مفروشات #جهاز_العروسة #فخامة_المنزل #عروض_العرائس`
  },
  {
    id: 2,
    title: "البوست 2: باقة جهاز العروسة الملكية الشاملة",
    badge: "عرض التوفير للعروسة",
    icon: "fa-crown",
    text: `👰‍♀️💍 شيلنا عنك هم اللف والحيرة! باقة جهاز العروسة الملكية من "معرض الخليل" بأعلى جودة وأوفر سعر! 💰✨

لكل عروسة فرحها قرب وعايزة جهاز يشرف قدام الكل وبأفضل ماركات:
وفرنالك الباقة الشاملة VIP بخصم يصل إلى 35% + طقم هدية فاخر مجاناً! 🎁

📦 محتويات الباقة الملكية:
1️⃣ طقم حلل جرانيت تركي أصلي 15 قطعة غير لاصق + طقم مقالي وصواني فرن.
2️⃣ طقم صيني ملكي كامل 124 قطعة بأطراف مذهبة عيار 24 مطرز بالكامل للنيش والسفرة.
3️⃣ طقم لحاف عروسة قطيفة جاكار مطرز 8 قطع فندقي فاخر.
4️⃣ طقم ملايات قطن مصري 100% تطريز كمبيوتر 6 قطع (3 أطقم متنوعة).
5️⃣ شنطة ملاعق وسكاكين استانلس ستيل ألماني 86 قطعة في شنطة جلد فاخرة.
6️⃣ قلاية هوائية ذكية ديجيتال Air Fryer سعة عائلية + خلاط وكبة متعددة الاستخدامات.

💥 كل ده مع إمكانية التقسيط المريح وبدون فوائد لفترة محدودة! 💳

💬 ابعتيلنا كلمة "باقة العروسة" على الواتساب 01090799599 وهنبعتلك صور ومحتويات الباقة والأسعار بالتفصيل فوراً!

#جهاز_العروسة #عروض_العرائس #معرض_الخليل #تجهيز_شقق #ادوات_مطبخ #مفروشات_عرائس #تخفيضات`
  },
  {
    id: 3,
    title: "البوست 3: أطقم المطبخ والطهي الحديثة",
    badge: "مطبخ وأواني طهي",
    icon: "fa-utensils",
    text: `🍳 الطبخ بقى متعة مع أطقم حلل الجرانيت التركي من معرض الخليل! شياكة في مطبخك وصحة لعيلتك 💚✨

وداعاً لالتصاق الأكل أو تقشير الحلل! بنقدملك طقم الجرانيت الملكي 15 قطعة:
💎 مصنوع من 7 طبقات جرانيت صخري طبيعي مقاوم للخدش والتآكل تماماً.
🌿 خالي 100% من مادة PFOA والمواد الضارة (طبخ صحي بنقطة زيت واحدة).
🔥 توزيع حراري متساوي وموفر للطاقة والغاز.
👌 أيدي مقاومة للحرارة بتصميم ذهبي شيك يضفي لمسة ملكية على بوتاجازك.
🧼 سهولة فائقة في التنظيف وآمن تماماً في غسالة الأطباق.

🎨 متوفر بأحدث ألوان 2026: (الزمردي الملكي، الروز جولد، الأسود المات، والبيج الرخامي).
🎁 اطلبيه النهاردة واحصلي على طقم توزيع سيليكون حراري 7 قطع هدية مجانية!

📲 للاستفسار والحجز المسبق: ابعتي لنا على الواتساب 01090799599
✨ المعاينة لجميع المنتجات متوفرة داخل المعرض.

#ادوات_منزلية #حلل_جرانيت #مطبخ_عصري #تجهيز_عرائس #معرض_الخليل #مطبخك_احلى #عروض_المطبخ`
  },
  {
    id: 4,
    title: "البوست 4: مفروشات غرف النوم الفندقية",
    badge: "مفروشات ولحاف",
    icon: "fa-bed",
    text: `✨ نومة فندقية 7 نجوم في بيتك كل ليلة مع أرقى تشكيلة مفروشات من معرض الخليل! 🛏️☁️

سرك لغرفة نوم ساحرة هو مفرش راقي ومريح يريح عينك وجسمك.. عشان كده وفرنالك:
🌸 أطقم لحاف العروسة الجاكار والقطيفة المطرزة بأرقى الخيوط الذهبية والحريرية.
🌿 ملايات قطن مصري 100% طويل التيلة فائق النعومة (ثابت الألوان ومبيوبرش أبداً).
☁️ مخدات فندقية بحشوة مايكروفايبر مضادة للحساسية ومريحة للرقبة والظهر.
🎀 بطانيات تركي حفر ليزر وأطقم روب العروسة والبشاكير القطنية الفاخرة.

كل خامة تم اختيارها بعناية عشان تديكي الإحساس الملكي اللي تستحقيه كل يوم 👑

✨ شوفي أحدث كولكشن مفروشات متوفر الآن بالمعرض واختاري الألوان اللي تناسب ديكور أوضتك.
💬 تواصلي معنا الآن واحجزي مفرش أحلامك عبر الواتساب: 01090799599

#مفروشات_عرائس #لحاف_فندقي #قطن_مصري #غرف_نوم_مودرن #معرض_الخليل #مفروشات_راقية #تجهيز_عروسة`
  },
  {
    id: 5,
    title: "البوست 5: الأجهزة المنزلية الذكية للمطبخ",
    badge: "أجهزة كهربائية",
    icon: "fa-blender",
    text: `⚡ مطبخك هيبقى أذكى وأسرع مع أجهزة "معرض الخليل" الكهربائية! وفري وقتك ومجهودك واستمتعي 👩‍🍳⏱️

لأن وقتك غالي، وفرنالك في معرض الخليل أقوى تشكيلة أجهزة كهربائية صغيرة من كبرى الماركات العالمية:
🍟 القلاية الهوائية Air Fryer ديجيتال بحجم عائلي (أكل مقرمش ولذيذ بدهون أقل 90%).
🍰 عجان ستاند احترافي متعدد السرعات سعة 7 لتر لكل أنواع المخبوزات والحلويات.
🥤 خلاط زجاجي قوي وسريع لجرش الثلج والعصائر الطازجة.
🥩 كبة فرم اللحوم والخضروات ستانلس ستيل شفرات تيتانيوم حادة وسريعة.

🛡️ كل الأجهزة بضمان معتمد حقيقي لمدة عامين + خدمة استبدال فوري عند وجود أي عيب صناعة.
🏷️ خصم خاص 20% عند شراء أكثر من جهازين من المعرض!

📲 للطلب والاستفسار أو لمعرفة الأسعار والمواصفات: راسلونا عبر الواتساب 01090799599

#اجهزة_منزلية #قلاية_هوائية #عجان #خلاط #مطبخ_ذكي #معرض_الخليل #عروض_الاجهزة`
  },
  {
    id: 6,
    title: "البوست 6: أطقم النيش والسفرة والضيافة",
    badge: "صيني ونيش",
    icon: "fa-wine-glass",
    text: `🌟 سفرتك هي عنوان كرمك وشياكتك قدام ضيوفك في كل عزومة! 🍽️✨

في "معرض الخليل"، النيش بتاعك مش مجرد ديكور.. ده تحفة فنية تخطف الأنظار 🤩:
👑 أطقم صيني كاملة بنقوشات ملكية ماء الذهب عيار 24 مقاومة للغسيل والبهتان.
💎 أطقم كاسات وكريستال بوهيمي أصلي بصوت الرنين الفريد وبريق لا ينطفئ.
🍴 شنط ملاعق وسكاكين استانلس 18/10 مطلية ذهب في شنطة خشبية أو جلدية هيدروليك فاخرة.
☕ أطقم شاي وجاتوه وأطقم قهوة تركي بورسلين مميزة بأشكال مودرن وكلاسيك.

اجعلي بيتك يشع فخامة وانبهار مع كل قطعة تقتنيها من الخليل ✨

📞 زورينا بالمعرض وشاهدي التشكيلة على الطبيعة، أو احجزي الطقم عبر الواتساب: 01090799599

#اطقم_صيني #نيش_العروسة #سفرة_مودرن #كريستال #اطقم_ضيافة #معرض_الخليل #عزومات_شيك`
  },
  {
    id: 7,
    title: "البوست 7: عرض الويك إند الخاطف ⚡",
    badge: "فلاش سيل",
    icon: "fa-bolt",
    text: `🚨🚨 تخفيضات مجنونة لمدة 48 ساعة فقط! عرض الويك إند في معرض الخليل جه يكسر الأسعار! 💥🔥

من يوم الخميس وحتى مساء السبت:
خصومات فورية من 25% إلى 40% على جميع المفروشات وتلبيسات الركنة والأنتريه وأدوات المطبخ! 😱

🔥 عروض نارية لفترة محدودة أو حتى نفاد الكمية:
🔹 اشتري 2 طقم ملايات واحصلي على الثالث بنصف السعر!
🔹 طقم طاسات تيفال غير لاصقة 3 قطع بسعر خيالي لا يقبل المنافسة!
🔹 هدية مجانية فورية مع كل فاتورة مشتريات تتجاوز 5000 جنيه!

⏳ الوقت بيجري والكميات محدودة جداً! 
🏃‍♀️ الحقي العرض في المعرض أو احجزي أونلاين عبر الواتساب فوراً: 01090799599

#تخفيضات #عروض_الويك_اند #خصم_خاص #معرض_الخليل #الحق_العرض #اوكازيون #تجهيز_عرائس`
  },
  {
    id: 8,
    title: "البوست 8: مسابقة وجيف أواي العرائس",
    badge: "مسابقة وتفاعل",
    icon: "fa-gift",
    text: `🎉🎁 مـسـابـقـة مـعـرض الـخـلـيـل الكبرى لكل العرائس ومتابعينا الكرام! 💖👑

جالك فرصة تكسبي معانا "طقم حلل جرانيت تركي فاخر 15 قطعة" أو "قسيمة مشتريات بقيمة 2000 جنيه" مجاناً تماماً! 🥳

الشروط سهلة وبسيطة جداً:
1️⃣ لايك لصفحة معرض الخليل والمتابعة وتفعيل جرس الإشعارات 🔔.
2️⃣ اعملي لايك وشير للبوست ده عندك (Public).
3️⃣ اعملي منشن لـ 3 من صاحباتك أو قرايبك العرائس في كومنت.
4️⃣ اكتبي في كومنت: أكتر قسم نفسك تشوفي عروض عليه في معرض الخليل؟

🏆 السحب هيكون عشوائي من الكومنتات في بث مباشر نهاية الشهر!
كل ما تكتبي كومنتات وتعملي منشن أكتر، كل ما فرصتك في الفوز تزيد! 🚀

يلا مستنية إيه؟ شاركي دلوقتي ومنشني صحابك وكوني أنتِ الكسبانة! 💃

#مسابقة_الخليل #جيف_اواي #اربح_معنا #معرض_الخليل #هدايا_عرائس #مسابقات_انستجرام #تجهيز_عروسة`
  },
  {
    id: 9,
    title: "البوست 9: آراء العرائس وتجارب الشراء",
    badge: "تقييمات وثقة",
    icon: "fa-star",
    text: `🥰 "الحمد لله جهازي كله كان من معرض الخليل ومفيش حد دخل شقتي إلا وانبهر بالذوق والخامة!" 👰‍♀️💖

مفيش حاجة بتسعدنا أكتر من رسائلكم وفرحتكم لما تستلموا جهازكم وتشكروا في جودة وأسعار معرض الخليل ✨

⭐ ليه أكتر من 5,000 عروسة وأم اختاروا يجهزوا من معرض الخليل؟
✔️ مصداقية وأمانة كاملة في وصف المنتجات وخامات أصلية 100%.
✔️ أسعار جملة ومباشرة بأعلى جودة.
✔️ تغليف فاخر وآمن ضد الكسر مع المعاينة عند الاستلام.
✔️ معاملة راقية وتسهيلات في السداد وتبديل المنتجات بكل سهولة.

شكراً لثقتكم الغالية اللي بنعتز بيها ودايماً عند حسن ظنكم ❤️

📩 شاركينا برأيك لو كنتِ جهزتي من عندنا، أو ابعتيلنا لتجهيز بيتك الجديد عبر الواتساب: 01090799599

#اراء_العملاء #ريفيوهات #معرض_الخليل #ثقة_وامانة #جهاز_العروسة #فرحة_العروسة #تجربتي_مع_الخليل`
  },
  {
    id: 10,
    title: "البوست 10: زيارة المعرض وسهولة الحجز",
    badge: "زيارة وحجز فوري",
    icon: "fa-store",
    text: `🏪 تفضلوا بزيارة معرض الخليل واستمتعوا بتجربة تسوق متكاملة! 🛍️✨

شاهدي أحدث تشكيلات الأدوات المنزلية والمفروشات وأطقم العرائس على الطبيعة:
✅ معاينة كاملة لجميع الخامات والماركات قبل الشراء.
✅ تغليف محكم ومبطن ضد الصدمات والكسر للأطقم الزجاجية والصيني والكريستال.
✅ إمكانية حجز المنتجات والاستلام المباشر من المعرض.
✅ تسهيلات وطرق دفع ميسرة تناسب الجميع.

📲 للحجز والاستفسار المسبق:
1. اختاري المنتج من كتالوج الموقع أو الصفحة.
2. ابعتي رسالة على واتساب: 01090799599
3. فريقنا هيجهزلك طلبك فوراً!

📍 العنوان: شابور - بجوار مركز الشباب - شارع معرض الخليل.
⏰ مواعيد العمل: يومياً من الساعة 10 صباحاً وحتى 11 مساءً.

#معرض_الخليل #تجهيز_عرائس #ادوات_منزلية #مفروشات #خدمة_العملاء #حجز_فوري`
  }
];

// Bridal Checklist Items
const checklistData = {
  kitchen: {
    title: "أدوات المطبخ والطهي",
    icon: "fa-utensils",
    items: [
      "طقم حلل جرانيت أو تيفال (12-15 قطعة)",
      "طقم حلل ستانلس ستيل تركي أصلي",
      "طقم صواني فرن ومقالي تيفال",
      "طقم سكاكين احترافي مع ستاند",
      "طقم توزيع سيليكون وملاعق خشبية",
      "حلة ضغط كهربائية أو ستانلس",
      "طقم توابل دوار زجاج أو بورسلين",
      "مصفاة ومصافي ستانلس مقاسات متنوعة"
    ]
  },
  bedding: {
    title: "المفروشات وغرف النوم",
    icon: "fa-bed",
    items: [
      "طقم لحاف ومفرش عروسة فندقي مطرز",
      "عدد 4 إلى 6 أطقم ملايات قطن مصري 100%",
      "عدد 2 بطانية تركي حفر ليزر شتوي",
      "أطقم مخدات وخداديات مايكروفايبر",
      "طقم روب وبشاكير العروسة والعريس",
      "طقم فوط قطنية متنوعة (12 فوطة)",
      "كوفرتة صيفي خفيفة قطنية"
    ]
  },
  dining: {
    title: "أطقم النيش والسفرة والضيافة",
    icon: "fa-wine-glass",
    items: [
      "طقم صيني كامل مطرز مذهب (124 قطعة)",
      "طقم أركوبال أو بورسلين للاستخدام اليومي",
      "شنطة ملاعق وشوك وسكاكين ألماني 86 قطعة",
      "طقم كاسات وكريستال بوهيمي للنيش",
      "طقم شاي وجاتوه بورسلين مودرن",
      "طقم كاسات مياه وعصائر يومي",
      "طقم صواني تقديم ستانلس وخشب فاخرة"
    ]
  },
  appliances: {
    title: "الأجهزة الكهربائية المنزلية",
    icon: "fa-plug",
    items: [
      "قلاية هوائية ذكية ديجيتال Air Fryer",
      "عجان ستاند احترافي متعدد السرعات",
      "خلاط ومطحنة توابل قوية",
      "كبة فرم اللحوم والخضروات",
      "مكواة بخار عامودية للملابس والستائر",
      "غلاية مياه كهربائية ستانلس",
      "مضرب بيض كهربائي وخافق نسكافيه"
    ]
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts();
  renderSocialPosts();
  renderChecklist();
  initCalculator();
  initCountdown();
  initEventListeners();
  updateCartUI();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeIcon = document.querySelector('#themeToggle i');
  if (themeIcon) {
    themeIcon.className = state.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('el_khalil_theme', state.theme);
  initTheme();
}

// Render Products
function renderProducts() {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  const filtered = products.filter(product => {
    const matchesCategory = state.currentCategory === 'all' || product.category === state.currentCategory;
    const matchesSearch = product.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          product.features.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3>لم نجد منتجات مطابقة لبحثك</h3>
        <p style="color: var(--text-muted);">جرب البحث بكلمات أخرى أو تصفح جميع الأقسام.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => `
    <div class="product-card">
      <div class="product-img-wrapper">
        <span class="discount-tag">خصم ${product.discount}</span>
        <span class="category-tag">${product.categoryName}</span>
        <img src="${product.image}" alt="${product.title}" loading="lazy">
      </div>
      <div class="product-body">
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <span>${product.rating} (تقييم ممتاز)</span>
        </div>
        <h4 class="product-title">${product.title}</h4>
        <p class="product-features">${product.features}</p>
        <div class="product-pricing">
          <span class="current-price">${product.price.toLocaleString()} ج.م</span>
          <span class="old-price">${product.oldPrice.toLocaleString()} ج.م</span>
        </div>
        <div class="product-actions">
          <button class="gold-btn" onclick="addToCart(${product.id})">
            <i class="fas fa-cart-plus"></i> إضافة للسلة
          </button>
          <button class="outline-btn" onclick="openProductModal(${product.id})">
            <i class="fas fa-eye"></i> تفاصيل
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render 10 Social Media Posts
function renderSocialPosts() {
  const container = document.getElementById('socialPostsContainer');
  if (!container) return;

  container.innerHTML = socialPosts.map(post => `
    <div class="post-preview-card">
      <div class="post-header">
        <span class="post-badge"><i class="fas ${post.icon}"></i> ${post.badge}</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">منشور #${post.id}</span>
      </div>
      <div class="post-content-body" id="post-text-${post.id}">
        ${post.text}
      </div>
      <div class="post-footer">
        <button class="gold-btn" style="flex: 1; padding: 0.5rem;" onclick="copyPostText(${post.id})">
          <i class="fas fa-copy"></i> نسخ البوست
        </button>
        <button class="whatsapp-btn" style="flex: 1; padding: 0.5rem;" onclick="shareOnWhatsApp(${post.id})">
          <i class="fab fa-whatsapp"></i> مشاركة
        </button>
      </div>
    </div>
  `).join('');
}

// Copy Post Text
function copyPostText(postId) {
  const post = socialPosts.find(p => p.id === postId);
  if (!post) return;

  navigator.clipboard.writeText(post.text).then(() => {
    showToast(`تم نسخ البوست رقم (${postId}) بنجاح إلى الحافظة! ✨`);
  }).catch(() => {
    showToast('يرجى تحديد النص ونسخه يدوياً.');
  });
}

// Share on WhatsApp
function shareOnWhatsApp(postId) {
  const post = socialPosts.find(p => p.id === postId);
  if (!post) return;

  const url = `https://wa.me/?text=${encodeURIComponent(post.text)}`;
  window.open(url, '_blank');
}

// Render Bridal Checklist
function renderChecklist() {
  const container = document.getElementById('checklistContainer');
  if (!container) return;

  let totalItems = 0;
  let checkedItems = 0;

  const html = Object.entries(checklistData).map(([key, category]) => {
    const listHtml = category.items.map((item, index) => {
      const itemId = `${key}-${index}`;
      const isChecked = !!state.checklistState[itemId];
      totalItems++;
      if (isChecked) checkedItems++;

      return `
        <li class="${isChecked ? 'checked' : ''}">
          <input type="checkbox" id="${itemId}" ${isChecked ? 'checked' : ''} onchange="toggleChecklistItem('${itemId}')">
          <label for="${itemId}"><span>${item}</span></label>
        </li>
      `;
    }).join('');

    return `
      <div class="checklist-card">
        <h4><i class="fas ${category.icon}"></i> ${category.title}</h4>
        <ul>${listHtml}</ul>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  // Update Progress
  const percent = totalItems === 0 ? 0 : Math.round((checkedItems / totalItems) * 100);
  const progressBar = document.getElementById('checklistProgress');
  const progressText = document.getElementById('checklistProgressText');
  if (progressBar) progressBar.style.width = `${percent}%`;
  if (progressText) progressText.innerText = `تم إنجاز ${percent}% من قائمة جهازك (${checkedItems} من إجمالي ${totalItems} عنصر)`;
}

function toggleChecklistItem(itemId) {
  state.checklistState[itemId] = !state.checklistState[itemId];
  localStorage.setItem('el_khalil_checklist', JSON.stringify(state.checklistState));
  renderChecklist();
}

function resetChecklist() {
  if (confirm("هل أنتِ متأكدة من إعادة ضبط قائمة تجهيز العروسة؟")) {
    state.checklistState = {};
    localStorage.removeItem('el_khalil_checklist');
    renderChecklist();
    showToast("تم إعادة ضبط القائمة بنجاح.");
  }
}

// Bride Budget Calculator
function initCalculator() {
  const checkboxes = document.querySelectorAll('.calc-checkbox');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', calculateBudget);
  });
  calculateBudget();
}

function calculateBudget() {
  let baseTotal = 0;
  const selectedItems = [];

  const tier = document.querySelector('input[name="calc-tier"]:checked')?.value || 'medium';
  let tierMultiplier = 1.0;
  if (tier === 'economy') tierMultiplier = 0.75;
  if (tier === 'luxury') tierMultiplier = 1.45;

  document.querySelectorAll('.calc-checkbox:checked').forEach(cb => {
    const val = parseFloat(cb.dataset.price || 0);
    const name = cb.dataset.name;
    baseTotal += val;
    selectedItems.push(name);
  });

  const estimatedTotal = Math.round(baseTotal * tierMultiplier);
  const discountAmount = Math.round(estimatedTotal * 0.15); // 15% bridal package discount
  const finalTotal = estimatedTotal - discountAmount;

  const totalEl = document.getElementById('calcFinalTotal');
  const oldTotalEl = document.getElementById('calcOldTotal');
  const discountEl = document.getElementById('calcDiscountVal');

  if (totalEl) totalEl.innerText = `${finalTotal.toLocaleString()} ج.م`;
  if (oldTotalEl) oldTotalEl.innerText = `${estimatedTotal.toLocaleString()} ج.م`;
  if (discountEl) discountEl.innerText = `${discountAmount.toLocaleString()} ج.م (وفرتي 15%)`;
}

function sendCalculatorQuote() {
  const tier = document.querySelector('input[name="calc-tier"]:checked')?.value || 'medium';
  let tierName = "المتوسطة الملكية";
  if (tier === 'economy') tierName = "الاقتصادية التوفيرية";
  if (tier === 'luxury') tierName = "الفاخرة VIP Diamond";

  const selectedItems = [];
  document.querySelectorAll('.calc-checkbox:checked').forEach(cb => {
    selectedItems.push(`- ${cb.dataset.name}`);
  });

  const finalTotal = document.getElementById('calcFinalTotal')?.innerText || "0 ج.م";

  const message = `مرحباً معرض الخليل،
أرغب في الاستفسار وحجز باقة جهاز العروسة المخصصة:
الفئة المختارة: ${tierName}

الأقسام المختارة:
${selectedItems.join('\n')}

إجمالي التكلفة التقريبية بعد الخصم: ${finalTotal}

أرجو التواصل معي لتفاصيل الباقة وطرق التقسيط والاستلام. شكراً لكم!`;

  const url = `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Shopping Cart Functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCartDrawer();
  showToast(`تمت إضافة "${product.title}" إلى السلة ✨`);
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const itemsContainer = document.getElementById('cartItemsList');
  const totalEl = document.getElementById('cartTotalPrice');

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (badge) badge.innerText = totalCount;
  if (totalEl) totalEl.innerText = `${totalPrice.toLocaleString()} ج.م`;

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
        <i class="fas fa-shopping-bag" style="font-size: 2.5rem; margin-bottom: 0.75rem; opacity: 0.5;"></i>
        <p>سلة التسوق فارغة حالياً</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-details" style="flex-grow: 1;">
        <h5>${item.title}</h5>
        <span style="color: var(--accent-gold-dark); font-weight: 700; font-size: 0.9rem;">
          ${(item.price * item.quantity).toLocaleString()} ج.م
        </span>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.3rem;">
          <button style="width: 24px; height: 24px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-card); cursor: pointer;" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span style="font-weight: 700; font-size: 0.85rem;">${item.quantity}</span>
          <button style="width: 24px; height: 24px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-card); cursor: pointer;" onclick="updateQuantity(${item.id}, 1)">+</button>
          <button style="margin-right: auto; background: none; border: none; color: var(--accent-rose); cursor: pointer; font-size: 0.85rem;" onclick="removeFromCart(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCartDrawer() {
  document.getElementById('cartDrawer')?.classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cartDrawer')?.classList.remove('open');
}

function checkoutWhatsApp() {
  if (state.cart.length === 0) {
    alert("سلة التسوق فارغة!");
    return;
  }

  const itemsList = state.cart.map(item => `- ${item.title} (العدد: ${item.quantity}) = ${(item.price * item.quantity).toLocaleString()} ج.م`).join('\n');
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const message = `مرحباً معرض الخليل،
أود تأكيد طلب المنتجات التالية من موقعكم:

${itemsList}

💰 الإجمالي: ${totalPrice.toLocaleString()} ج.م

الاسم: 
رقم الهاتف: 
عنوان التوصيل: 

أرجو تأكيد توفر المنتجات وتجهيز الطلب للاستلام. شكراً!`;

  const url = `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Product Quick View Modal
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modalBody = document.getElementById('productModalBody');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: center;">
      <div style="border-radius: var(--radius-md); overflow: hidden; height: 280px;">
        <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <span class="post-badge" style="margin-bottom: 0.5rem; display: inline-block;">${product.categoryName}</span>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.75rem; color: var(--text-main);">${product.title}</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.6;">${product.description}</p>
        <div style="background: var(--bg-main); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
          <strong style="color: var(--accent-gold-dark); font-size: 0.85rem;">المميزات الرئيسية:</strong>
          <p style="font-size: 0.85rem; margin-top: 0.2rem;">${product.features}</p>
        </div>
        <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.25rem;">
          <span style="font-size: 1.5rem; font-weight: 900; color: var(--accent-gold-dark);">${product.price.toLocaleString()} ج.م</span>
          <span style="text-decoration: line-through; color: var(--text-muted); font-size: 1rem;">${product.oldPrice.toLocaleString()} ج.م</span>
          <span class="discount-tag" style="position: static;">خصم ${product.discount}</span>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <button class="gold-btn" style="flex: 1;" onclick="addToCart(${product.id}); closeProductModal();">
            <i class="fas fa-cart-plus"></i> إضافة للسلة
          </button>
          <a class="whatsapp-btn" style="flex: 1; text-align: center; justify-content: center;" href="https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(`مرحباً معرض الخليل، أرغب بالاستفسار عن ${product.title}`)}" target="_blank">
            <i class="fab fa-whatsapp"></i> استفسار
          </a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('productModal')?.classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModal')?.classList.remove('active');
}

// Flash Deals Countdown Timer
function initCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dEl = document.getElementById('timerDays');
    const hEl = document.getElementById('timerHours');
    const mEl = document.getElementById('timerMinutes');
    const sEl = document.getElementById('timerSeconds');

    if (dEl) dEl.innerText = String(days).padStart(2, '0');
    if (hEl) hEl.innerText = String(hours).padStart(2, '0');
    if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
    if (sEl) sEl.innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// Event Listeners
function initEventListeners() {
  // Theme Toggle
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

  // Mobile Menu Toggle
  document.getElementById('menuToggle')?.addEventListener('click', () => {
    document.getElementById('navLinks')?.classList.toggle('show');
  });

  // Cart Drawer Toggle
  document.getElementById('cartBtn')?.addEventListener('click', openCartDrawer);
  document.getElementById('closeCart')?.addEventListener('click', closeCartDrawer);

  // Category Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.currentCategory = e.target.dataset.category || 'all';
      renderProducts();
    });
  });

  // Search Input
  document.getElementById('productSearch')?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderProducts();
  });

  // Close modals when clicking overlay
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  // Contact Form Submit
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value;
    const phone = document.getElementById('contactPhone')?.value;
    const msg = document.getElementById('contactMsg')?.value;

    const whatsappUrl = `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(`رسالة تواصل من موقع المعرض:\nالاسم: ${name}\nالهاتف: ${phone}\nالرسالة: ${msg}`)}`;
    window.open(whatsappUrl, '_blank');
    showToast("جاري توجيهك إلى محادثة الواتساب للتواصل الفوري! ✨");
  });
}

// Simple Toast Notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '90px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#0f172a';
  toast.style.color = '#fef08a';
  toast.style.border = '1px solid #d4af37';
  toast.style.padding = '0.75rem 1.5rem';
  toast.style.borderRadius = '30px';
  toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)';
  toast.style.zIndex = '9999';
  toast.style.fontSize = '0.9rem';
  toast.style.fontWeight = '700';
  toast.style.transition = 'all 0.3s ease';
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
