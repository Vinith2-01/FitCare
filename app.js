/**
 * FitCare — Friendly Health & Fitness Hub
 * Main Application Script
 */

// ===================================================================
// 1. DATA MODELS & INITIAL STATE
// ===================================================================

const DEFAULT_HABITS = [
  { id: 'h1', text: '🚶 Walk 7,500+ steps', completed: false },
  { id: 'h2', text: '💧 Drink 2 Liters of fresh water', completed: false },
  { id: 'h3', text: '🥦 Eat at least 2 portions of colorful plants', completed: false },
  { id: 'h4', text: '🧘 5 Minutes of mindful breathing or stretching', completed: false },
  { id: 'h5', text: '😴 7 to 8 Hours of restorative sleep', completed: false },
];

const FAMOUS_QUOTES_DATABASE = [
  {
    id: 'q1',
    quote: "Let food be thy medicine and medicine be thy food.",
    author: "Hippocrates",
    title: "Father of Western Medicine (c. 460 – 370 BC)",
    avatar: "🏛️",
    category: "medicine",
    categoryLabel: "Ancient Medicine"
  },
  {
    id: 'q2',
    quote: "Take care of your body. It's the only place you have to live.",
    author: "Jim Rohn",
    title: "Philosopher & Personal Growth Pioneer",
    avatar: "🌱",
    category: "mindset",
    categoryLabel: "Mindset & Growth"
  },
  {
    id: 'q3',
    quote: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Gautama Buddha",
    title: "Spiritual Teacher & Sage (c. 5th Century BC)",
    avatar: "☸️",
    category: "mindset",
    categoryLabel: "Spiritual Harmony"
  },
  {
    id: 'q4',
    quote: "Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend.",
    author: "Lao Tzu",
    title: "Ancient Philosopher & Author of Tao Te Ching",
    avatar: "☯️",
    category: "mindset",
    categoryLabel: "Taoist Wisdom"
  },
  {
    id: 'q5',
    quote: "Health is not everything, but without health, everything is nothing.",
    author: "Arthur Schopenhauer",
    title: "Influential 19th Century Philosopher",
    avatar: "📚",
    category: "vitality",
    categoryLabel: "Life Perspective"
  },
  {
    id: 'q6',
    quote: "The doctor of the future will give no medicine, but will instruct his patients in care of the human frame, in diet, and in prevention.",
    author: "Thomas A. Edison",
    title: "Prolific Inventor & Visionary",
    avatar: "💡",
    category: "medicine",
    categoryLabel: "Preventive Health"
  },
  {
    id: 'q7',
    quote: "It is health that is real wealth and not pieces of gold and silver.",
    author: "Mahatma Gandhi",
    title: "Global Humanitarian & Peace Advocate",
    avatar: "🕊️",
    category: "mindset",
    categoryLabel: "True Wealth"
  },
  {
    id: 'q8',
    quote: "A vigorous mind requires a healthy body.",
    author: "Thomas Jefferson",
    title: "3rd U.S. President & Founding Thinker",
    avatar: "🏛️",
    category: "vitality",
    categoryLabel: "Mental & Physical"
  },
  {
    id: 'q9',
    quote: "Those who think they have no time for bodily exercise will sooner or later have to find time for illness.",
    author: "Edward Stanley",
    title: "British Statesman & Earl of Derby",
    avatar: "⏱️",
    category: "vitality",
    categoryLabel: "Priority of Movement"
  },
  {
    id: 'q10',
    quote: "The groundwork for all happiness is good health.",
    author: "Leigh Hunt",
    title: "Literary Essayist & Poet",
    avatar: "🌻",
    category: "mindset",
    categoryLabel: "Foundation of Joy"
  },
  {
    id: 'q11',
    quote: "Almost everything will work again if you unplug it for a few minutes, including you.",
    author: "Anne Lamott",
    title: "Bestselling Author & Speaker",
    avatar: "🔌",
    category: "mindset",
    categoryLabel: "Rest & Recharge"
  },
  {
    id: 'q12',
    quote: "Caring for myself is not self-indulgence, it is self-preservation.",
    author: "Audre Lorde",
    title: "Acclaimed Writer & Human Rights Champion",
    avatar: "❤️",
    category: "mindset",
    categoryLabel: "Radical Self-Care"
  },
  {
    id: 'q13',
    quote: "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.",
    author: "John F. Kennedy",
    title: "35th President of the United States",
    avatar: "🇺🇸",
    category: "vitality",
    categoryLabel: "Dynamic Intellect"
  },
  {
    id: 'q14',
    quote: "You can't control what goes on outside, but you can always control what goes on inside.",
    author: "Wayne Dyer",
    title: "Spiritual Author & Motivation Teacher",
    avatar: "🧘",
    category: "mindset",
    categoryLabel: "Internal Control"
  },
  {
    id: 'q15',
    quote: "Small daily, seemingly insignificant improvements, when done consistently over time, yield staggering results.",
    author: "Robin Sharma",
    title: "Leadership & Performance Mentor",
    avatar: "📈",
    category: "vitality",
    categoryLabel: "Micro-Habits"
  },
  {
    id: 'q16',
    quote: "You have power over your mind, not outside events. Realize this, and you will find radiant strength.",
    author: "Marcus Aurelius",
    title: "Roman Emperor & Stoic Philosopher",
    avatar: "⚔️",
    category: "mindset",
    categoryLabel: "Stoic Resilience"
  }
];

const FRUITS_DATABASE = [
  {
    id: 'f_apple',
    name: 'Crisp Red Apple',
    emoji: '🍎',
    category: ['orchard', 'high-fiber', 'heart-brain'],
    portionGrams: 100,
    calories: 52,
    carbs: 14.0,
    fiber: 2.4,
    sugar: 10.3,
    fat: 0.2,
    protein: 0.3,
    gi: 'Low (36)',
    giLevel: 'low',
    vitamins: 'Vitamin C, Potassium, Quercetin Flavonoids',
    gradient: 'linear-gradient(135deg, #fee2e2, #fecaca)',
    benefits: [
      'Pectin soluble fiber nourishes beneficial gut microbiota, improving gut barrier integrity.',
      'Quercetin flavonoid reduces systemic vascular inflammation and supports lung vitality.',
      'Antioxidant polyphenols help shield LDL cholesterol from oxidative degradation.'
    ],
    pairing: 'Slice with creamy peanut/almond butter or dice into cinnamon steel-cut oatmeal.',
    extraTags: ['Gut Microbiome', 'Heart Shield', 'Anti-Inflammatory', 'Low GI']
  },
  {
    id: 'f_banana',
    name: 'Golden Ripe Banana',
    emoji: '🍌',
    category: ['tropical', 'hydration', 'heart-brain'],
    portionGrams: 100,
    calories: 89,
    carbs: 23.0,
    fiber: 2.6,
    sugar: 12.2,
    fat: 0.3,
    protein: 1.1,
    gi: 'Low (51)',
    giLevel: 'low',
    vitamins: 'Potassium (358mg), Vitamin B6 (20% DV), Vitamin C',
    gradient: 'linear-gradient(135deg, #fef9c3, #fef08a)',
    benefits: [
      'High potassium balances sodium levels to support healthy resting blood pressure.',
      'Vitamin B6 acts as an essential coenzyme for serotonin and dopamine neurotransmitter synthesis.',
      'Rapidly digestible natural carbohydrates quickly restore depleted muscle glycogen post-workout.'
    ],
    pairing: 'Blend into post-workout protein smoothies or slice over warm whole grain sourdough.',
    extraTags: ['Pre-Workout Fuel', 'Blood Pressure', 'Neurotransmitter Support']
  },
  {
    id: 'f_avocado',
    name: 'Hass Creamy Avocado',
    emoji: '🥑',
    category: ['tropical', 'low-carb', 'heart-brain'],
    portionGrams: 100,
    calories: 160,
    carbs: 8.5,
    fiber: 6.7,
    sugar: 0.7,
    fat: 14.7,
    protein: 2.0,
    gi: 'Very Low (15)',
    giLevel: 'low',
    vitamins: 'Vitamin K (26% DV), Folate (20% DV), Vitamin E, Potassium',
    gradient: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
    benefits: [
      'Monounsaturated oleic acid supports arterial health and reduces systemic inflammation.',
      'Exceptional 6.7g fiber with only 1.8g net carbs makes it a world-class keto superfood.',
      'Triples biological absorption of fat-soluble vitamins (A, D, E, K) from companion greens.'
    ],
    pairing: 'Smash with freshly squeezed lime juice and pink Himalayan salt on artisan toast.',
    extraTags: ['Keto Superstar', 'Heart Essential', 'Deep Satiety', 'High Healthy Fat']
  },
  {
    id: 'f_blueberry',
    name: 'Wild Blueberries',
    emoji: '🫐',
    category: ['berry', 'antioxidant', 'heart-brain', 'low-carb'],
    portionGrams: 100,
    calories: 57,
    carbs: 14.5,
    fiber: 2.4,
    sugar: 9.9,
    fat: 0.3,
    protein: 0.7,
    gi: 'Low (53)',
    giLevel: 'low',
    vitamins: 'Anthocyanins, Vitamin K (24% DV), Manganese, Vitamin C',
    gradient: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
    benefits: [
      'Highest total antioxidant capacity among common fruits; protects cellular DNA from damage.',
      'Anthocyanins cross the blood-brain barrier to support memory retention and neuroplasticity.',
      'Improves endothelial nitric oxide synthesis and supports healthy insulin response.'
    ],
    pairing: 'Fold into creamy Greek yogurt, chia pudding, or top protein oat pancakes.',
    extraTags: ['Brain Superfood', 'DNA Defense', 'Anti-Aging', 'Cognitive Focus']
  },
  {
    id: 'f_strawberry',
    name: 'Organic Sweet Strawberry',
    emoji: '🍓',
    category: ['berry', 'vitamin-c', 'antioxidant', 'low-carb'],
    portionGrams: 100,
    calories: 32,
    carbs: 7.7,
    fiber: 2.0,
    sugar: 4.9,
    fat: 0.3,
    protein: 0.7,
    gi: 'Low (41)',
    giLevel: 'low',
    vitamins: 'Vitamin C (98% DV!), Manganese, Folate, Ellagic Acid',
    gradient: 'linear-gradient(135deg, #ffe4e6, #fecdd3)',
    benefits: [
      'Delivers more Vitamin C per 100g than whole oranges, accelerating dermal collagen synthesis.',
      'Ellagitannins and anthocyanins fight free radical stress to promote radiant skin tone.',
      'Extremely low calorie density (32 kcal/100g) satisfies sweet cravings on fat-loss phases.'
    ],
    pairing: 'Combine with 85% dark chocolate cacao nibs or toss into fresh spinach walnut salad.',
    extraTags: ['Collagen Synthesis', 'Immune Shield', 'Low Calorie', 'Skin Radiance']
  },
  {
    id: 'f_orange',
    name: 'Valencia Juicy Orange',
    emoji: '🍊',
    category: ['citrus', 'vitamin-c', 'hydration', 'heart-brain'],
    portionGrams: 100,
    calories: 47,
    carbs: 11.8,
    fiber: 2.4,
    sugar: 9.4,
    fat: 0.1,
    protein: 0.9,
    gi: 'Low (43)',
    giLevel: 'low',
    vitamins: 'Vitamin C (89% DV), Hesperidin, Thiamine, Folate',
    gradient: 'linear-gradient(135deg, #ffedd5, #fed7aa)',
    benefits: [
      'Hesperidin bioflavonoid improves endothelial arterial flexibility and microcirculation.',
      'Potent immune ally that stimulates white blood cell phagocytosis during cold seasons.',
      'Natural citric acid boosts the bioavailability and absorption of non-heme plant iron.'
    ],
    pairing: 'Pair with raw walnuts or slice into crisp fennel and arugula summer salads.',
    extraTags: ['Immune Booster', 'Arterial Health', 'Iron Enhancer']
  },
  {
    id: 'f_watermelon',
    name: 'Crisp Ruby Watermelon',
    emoji: '🍉',
    category: ['melon', 'hydration', 'vitamin-c'],
    portionGrams: 100,
    calories: 30,
    carbs: 7.6,
    fiber: 0.4,
    sugar: 6.2,
    fat: 0.2,
    protein: 0.6,
    gi: 'Medium (72)',
    giLevel: 'med',
    vitamins: 'Lycopene, L-Citrulline, Vitamin A, Vitamin C',
    gradient: 'linear-gradient(135deg, #fee2e2, #fca5a5)',
    benefits: [
      '92% water content delivers deep cellular fluid replenishment and assists kidney filtration.',
      'Abundant in L-Citrulline, an amino acid shown to reduce delayed onset muscle soreness (DOMS).',
      'Concentrated lycopene helps defend cutaneous skin cells from solar UV oxidative stress.'
    ],
    pairing: 'Sprinkle with fresh spearmint leaves, lime zest, and crumbled feta cheese.',
    extraTags: ['Ultra Hydration', 'Muscle Recovery', 'Skin Photoprotection']
  },
  {
    id: 'f_mango',
    name: 'Alphonso Tropical Mango',
    emoji: '🥭',
    category: ['tropical', 'vitamin-c', 'antioxidant'],
    portionGrams: 100,
    calories: 60,
    carbs: 15.0,
    fiber: 1.6,
    sugar: 13.7,
    fat: 0.4,
    protein: 0.8,
    gi: 'Medium (51)',
    giLevel: 'med',
    vitamins: 'Vitamin A (21% DV), Vitamin C (60% DV), Folate, Zeaxanthin',
    gradient: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    benefits: [
      'Lutein and zeaxanthin accumulate in the macula to shield eyes from blue-light strain.',
      'Amylase digestive enzymes facilitate efficient breakdown of complex food macromolecules.',
      'Mangiferin bioactive compound demonstrates powerful cellular antioxidant defense.'
    ],
    pairing: 'Dice into black bean cilantro salsa or blend into coconut chia protein bowls.',
    extraTags: ['Eye Health', 'Digestive Enzymes', 'Tropical Immunity']
  },
  {
    id: 'f_pineapple',
    name: 'Golden Sweet Pineapple',
    emoji: '🍍',
    category: ['tropical', 'vitamin-c', 'hydration'],
    portionGrams: 100,
    calories: 50,
    carbs: 13.1,
    fiber: 1.4,
    sugar: 9.9,
    fat: 0.1,
    protein: 0.5,
    gi: 'Medium (59)',
    giLevel: 'med',
    vitamins: 'Bromelain, Vitamin C (79% DV), Manganese (44% DV)',
    gradient: 'linear-gradient(135deg, #fef9c3, #fde047)',
    benefits: [
      'Bromelain proteolytic enzyme breaks down protein meals and soothes joint inflammation.',
      'High manganese content supports bone mineral matrix formation and connective tissue repair.',
      'Accelerates tissue healing and athletic recovery following high-impact training.'
    ],
    pairing: 'Lightly grill with ground Ceylon cinnamon or pair alongside wild salmon fillets.',
    extraTags: ['Bromelain Enzyme', 'Joint Relief', 'Bone Strength']
  },
  {
    id: 'f_kiwi',
    name: 'Emerald Green Kiwi',
    emoji: '🥝',
    category: ['tropical', 'vitamin-c', 'high-fiber', 'heart-brain'],
    portionGrams: 100,
    calories: 61,
    carbs: 14.7,
    fiber: 3.0,
    sugar: 9.0,
    fat: 0.5,
    protein: 1.1,
    gi: 'Low (52)',
    giLevel: 'low',
    vitamins: 'Vitamin C (155% DV!), Vitamin K, Actinidain, Serotonin',
    gradient: 'linear-gradient(135deg, #ecfccb, #d9f99d)',
    benefits: [
      'Over 150% daily Vitamin C in 100g—surpasses citrus in total ascorbate density.',
      'Contains actinidain, a natural proteolytic enzyme that alleviates gastrointestinal bloating.',
      'Clinical studies show 2 kiwis before bed promotes faster sleep onset and longer deep sleep.'
    ],
    pairing: 'Scoop fresh with a spoon, or eat skin-on (fuzzy skin is rich in prebiotic fiber!).',
    extraTags: ['Sleep Quality', 'Super Vitamin C', 'Bloat Eraser']
  },
  {
    id: 'f_papaya',
    name: 'Red Queen Papaya',
    emoji: '🍈',
    category: ['tropical', 'vitamin-c', 'hydration'],
    portionGrams: 100,
    calories: 43,
    carbs: 10.8,
    fiber: 1.7,
    sugar: 7.8,
    fat: 0.3,
    protein: 0.5,
    gi: 'Medium (60)',
    giLevel: 'med',
    vitamins: 'Papain Enzyme, Vitamin C (62mg), Vitamin A, Folate',
    gradient: 'linear-gradient(135deg, #ffedd5, #fdba74)',
    benefits: [
      'Papain digestive enzyme dissolves stubborn proteins to soothe acid reflux and indigestion.',
      'Carotenoids in papaya are up to 3x more bioavailable than those found in raw carrots.',
      'Rich in vitamin C and lycopene, promoting skin elasticity and cellular regeneration.'
    ],
    pairing: 'Squeeze fresh lime juice over chilled slices for an invigorating tropical breakfast.',
    extraTags: ['Digestive Relief', 'Lycopene', 'Gentle on Stomach']
  },
  {
    id: 'f_pomegranate',
    name: 'Ruby Jewel Pomegranate',
    emoji: '🔴',
    category: ['orchard', 'antioxidant', 'heart-brain', 'high-fiber'],
    portionGrams: 100,
    calories: 83,
    carbs: 18.7,
    fiber: 4.0,
    sugar: 13.7,
    fat: 1.2,
    protein: 1.7,
    gi: 'Low (53)',
    giLevel: 'low',
    vitamins: 'Punicalagins, Punicic Acid, Vitamin K, Potassium',
    gradient: 'linear-gradient(135deg, #ffe4e6, #fda4af)',
    benefits: [
      'Punicalagins provide 3x the antioxidant activity of green tea and red wine combined.',
      'Stimulates endogenous nitric oxide synthesis to enhance athletic pump and arterial flow.',
      'Demonstrates marked cardioprotective actions against atherosclerotic plaque formation.'
    ],
    pairing: 'Toss arils into warm quinoa grain bowls, hummus plates, or over roasted vegetables.',
    extraTags: ['Nitric Oxide Booster', 'Cardiovascular Guard', 'Elite Antioxidant']
  },
  {
    id: 'f_grapes',
    name: 'Concord Red Grapes',
    emoji: '🍇',
    category: ['berry', 'antioxidant', 'heart-brain'],
    portionGrams: 100,
    calories: 69,
    carbs: 18.1,
    fiber: 0.9,
    sugar: 15.5,
    fat: 0.2,
    protein: 0.7,
    gi: 'Low (53)',
    giLevel: 'low',
    vitamins: 'Resveratrol, Vitamin K, Potassium, Quercetin',
    gradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
    benefits: [
      'Skin contains resveratrol, which activates SIRT1 longevity sirtuins and mitochondrial health.',
      'Polyphenols promote healthy endothelial vasodilation and normal platelet aggregation.',
      'Contains bioavailable melatonin that helps synchronize healthy circadian sleep patterns.'
    ],
    pairing: 'Freeze for a frosty sorbet-like summer treat or pair with aged hard cheeses.',
    extraTags: ['Resveratrol', 'Longevity Sirtuins', 'Circulatory Health']
  },
  {
    id: 'f_peach',
    name: 'Velvet Sweet Peach',
    emoji: '🍑',
    category: ['stone', 'vitamin-c', 'hydration'],
    portionGrams: 100,
    calories: 39,
    carbs: 9.5,
    fiber: 1.5,
    sugar: 8.4,
    fat: 0.3,
    protein: 0.9,
    gi: 'Low (42)',
    giLevel: 'low',
    vitamins: 'Vitamin C, Beta-Carotene, Lutein, Potassium',
    gradient: 'linear-gradient(135deg, #ffedd5, #fbcfe8)',
    benefits: [
      'Alkalizing, gentle, and non-irritating for people with sensitive gastrointestinal tracts.',
      'Caffeic acid and carotenoids improve moisture retention in the dermis.',
      'Natural potassium assists neuromuscular firing and cellular electrolyte balance.'
    ],
    pairing: 'Slice into warm breakfast oats or grill lightly with a sprig of fresh garden rosemary.',
    extraTags: ['Skin Hydration', 'Gentle Digestion', 'Low Calorie']
  },
  {
    id: 'f_cherry',
    name: 'Montmorency Sweet Cherry',
    emoji: '🍒',
    category: ['stone', 'antioxidant', 'heart-brain'],
    portionGrams: 100,
    calories: 63,
    carbs: 16.0,
    fiber: 2.1,
    sugar: 12.8,
    fat: 0.2,
    protein: 1.1,
    gi: 'Very Low (22)',
    giLevel: 'low',
    vitamins: 'Melatonin, Anthocyanins, Cyanidin, Vitamin C',
    gradient: 'linear-gradient(135deg, #fce7f3, #f472b6)',
    benefits: [
      'One of the few foods containing genuine melatonin to support natural sleep onset.',
      'Clinically documented in sports science to hasten muscle force recovery post-exercise.',
      'Reduces circulating uric acid levels, providing immense relief against gout flares.'
    ],
    pairing: 'Enjoy 1 cup 45 minutes before sleep or add to bedtime chamomile herbal infusions.',
    extraTags: ['Deep Sleep', 'Uric Acid Flush', 'Muscle Recovery', 'Ultra Low GI']
  },
  {
    id: 'f_raspberry',
    name: 'Wild Red Raspberry',
    emoji: '🍧',
    category: ['berry', 'high-fiber', 'antioxidant', 'low-carb'],
    portionGrams: 100,
    calories: 52,
    carbs: 11.9,
    fiber: 6.5,
    sugar: 4.4,
    fat: 0.7,
    protein: 1.2,
    gi: 'Very Low (26)',
    giLevel: 'low',
    vitamins: 'Ellagitannins, Vitamin C (32mg), Manganese, Folate',
    gradient: 'linear-gradient(135deg, #ffe4e6, #fb7185)',
    benefits: [
      'Unmatched fiber powerhouse: 6.5g fiber per 100g leaves only 5.4g net carbs!',
      'Contains ellagitannins that inhibit carbohydrate digestive enzymes, stabilizing glucose.',
      'Supports healthy body composition and metabolic rate through polyphenol pathways.'
    ],
    pairing: 'Fold into creamy overnight oats, chia seed pudding, or high-protein smoothies.',
    extraTags: ['Fiber Champion', 'Keto Approved', 'Blood Sugar Guard']
  },
  {
    id: 'f_blackberry',
    name: 'Forest Blackberry',
    emoji: '🫐',
    category: ['berry', 'high-fiber', 'antioxidant', 'low-carb'],
    portionGrams: 100,
    calories: 43,
    carbs: 9.6,
    fiber: 5.3,
    sugar: 4.9,
    fat: 0.5,
    protein: 1.4,
    gi: 'Very Low (25)',
    giLevel: 'low',
    vitamins: 'Vitamin K (25% DV), Vitamin C (35% DV), Gallic Acid',
    gradient: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
    benefits: [
      'High Vitamin K supports osteocalcin binding for stronger bone mineral density.',
      'Potent antimicrobial phenolics help defend oral tissues from cavity-causing bacteria.',
      'Insoluble fiber promotes bowel motility while soluble fiber feeds friendly colon microbes.'
    ],
    pairing: 'Layer with whipped cottage cheese or blend into antioxidant-rich purple bowls.',
    extraTags: ['Bone Density', 'Oral Health', 'High Fiber Superfood']
  },
  {
    id: 'f_grapefruit',
    name: 'Pink Ruby Grapefruit',
    emoji: '🩷',
    category: ['citrus', 'vitamin-c', 'low-carb', 'heart-brain'],
    portionGrams: 100,
    calories: 42,
    carbs: 10.7,
    fiber: 1.6,
    sugar: 6.9,
    fat: 0.1,
    protein: 0.8,
    gi: 'Low (25)',
    giLevel: 'low',
    vitamins: 'Naringenin, Vitamin C (52% DV), Vitamin A, Lycopene',
    gradient: 'linear-gradient(135deg, #ffe4e6, #fca5a5)',
    benefits: [
      'Naringenin flavonoid improves cellular insulin sensitivity and supports hepatic metabolism.',
      'High water-to-fiber ratio prolongs satiety signals without spiking daily caloric totals.',
      'Assists healthy lipid profiles by reducing elevated circulating triglycerides.'
    ],
    pairing: 'Warm gently under a broiler with cinnamon or toss into avocado citrus salads.',
    extraTags: ['Insulin Sensitivity', 'Metabolic Boost', 'Low Calorie']
  },
  {
    id: 'f_lemon',
    name: 'Fresh Lemon & Lime',
    emoji: '🍋',
    category: ['citrus', 'vitamin-c', 'low-carb', 'hydration'],
    portionGrams: 100,
    calories: 29,
    carbs: 9.3,
    fiber: 2.8,
    sugar: 2.5,
    fat: 0.3,
    protein: 1.1,
    gi: 'Very Low (20)',
    giLevel: 'low',
    vitamins: 'Citric Acid, Vitamin C (88% DV), Hesperidin, Limonene',
    gradient: 'linear-gradient(135deg, #fef9c3, #fef08a)',
    benefits: [
      'High citric acid increases urinary citrate, defending against calcium oxalate kidney stones.',
      'Stimulates hepatic bile secretion to improve digestion of dietary fats and fat-soluble vitamins.',
      'Zero glucose spike; perfect for infusing plain water to meet daily hydration quotas.'
    ],
    pairing: 'Squeeze into morning mineral water or whisk into extra virgin olive oil vinaigrettes.',
    extraTags: ['Kidney Health', 'Bile Flow', 'Zero Sugar Spike']
  },
  {
    id: 'f_guava',
    name: 'Tropical Pink Guava',
    emoji: '🍈',
    category: ['tropical', 'vitamin-c', 'high-fiber', 'antioxidant'],
    portionGrams: 100,
    calories: 68,
    carbs: 14.3,
    fiber: 5.4,
    sugar: 8.9,
    fat: 1.0,
    protein: 2.6,
    gi: 'Low (31)',
    giLevel: 'low',
    vitamins: 'Vitamin C (228mg - 4x Orange!), Lycopene, Potassium',
    gradient: 'linear-gradient(135deg, #dcfce7, #fbcfe8)',
    benefits: [
      'Staggering 228mg Vitamin C per 100g (over 250% DV) — reigning king of vitamin C fruits!',
      'Rare combination of 5.4g fiber and 2.6g protein blunts glycemic impact dramatically.',
      'Lycopene content protects cardiac cells and supports healthy prostate function.'
    ],
    pairing: 'Eat raw with a dusting of pink salt and smoked paprika, or blend into vibrant juice.',
    extraTags: ['Vitamin C Champion', 'High Protein Fruit', 'Immune Fortress']
  },
  {
    id: 'f_dragon',
    name: 'Pitaya Dragon Fruit',
    emoji: '🐉',
    category: ['tropical', 'antioxidant', 'hydration'],
    portionGrams: 100,
    calories: 60,
    carbs: 13.0,
    fiber: 2.9,
    sugar: 7.7,
    fat: 0.6,
    protein: 1.2,
    gi: 'Low (48)',
    giLevel: 'low',
    vitamins: 'Prebiotic Oligosaccharides, Betalains, Iron, Magnesium',
    gradient: 'linear-gradient(135deg, #fce7f3, #f472b6)',
    benefits: [
      'Prebiotic oligosaccharides stimulate the proliferation of friendly gut Bifidobacteria.',
      'Provides bioavailable non-heme iron to combat daily fatigue and optimize hemoglobin.',
      'Betalain pigments scavenge oxidative free radicals and promote dermal luminosity.'
    ],
    pairing: 'Slice into colorful tropical fruit salads or blend into vivid magenta smoothie bowls.',
    extraTags: ['Prebiotic Flora', 'Iron Booster', 'Skin Glow']
  },
  {
    id: 'f_fig',
    name: 'Fresh Black Fig',
    emoji: '🌱',
    category: ['orchard', 'high-fiber', 'heart-brain'],
    portionGrams: 100,
    calories: 74,
    carbs: 19.2,
    fiber: 2.9,
    sugar: 16.3,
    fat: 0.3,
    protein: 0.8,
    gi: 'Low (51)',
    giLevel: 'low',
    vitamins: 'Calcium (35mg), Magnesium, Potassium, Ficin',
    gradient: 'linear-gradient(135deg, #ede9fe, #c4b5fd)',
    benefits: [
      'One of the highest plant-based fruit sources of calcium for bone density and teeth.',
      'Ficin proteolytic enzyme and natural mucilage lubricate and calm the digestive tract.',
      'High potassium and magnesium content work synergistically to relax vascular tension.'
    ],
    pairing: 'Roast with creamy goat cheese, cracked black pepper, and crushed walnuts.',
    extraTags: ['Bone Calcium', 'Digestive Mucilage', 'Ancient Energy']
  },
  {
    id: 'f_pear',
    name: 'Anjou Crisp Pear',
    emoji: '🍐',
    category: ['orchard', 'high-fiber', 'heart-brain'],
    portionGrams: 100,
    calories: 57,
    carbs: 15.2,
    fiber: 3.1,
    sugar: 9.8,
    fat: 0.1,
    protein: 0.4,
    gi: 'Low (38)',
    giLevel: 'low',
    vitamins: 'Pectin Fiber, Vitamin C, Vitamin K, Copper',
    gradient: 'linear-gradient(135deg, #ecfccb, #d9f99d)',
    benefits: [
      'Rich in soluble pectin that binds to bile salts, aiding natural cholesterol excretion.',
      'Copper functions as a mandatory enzyme cofactor in mitochondrial energy production.',
      'Remarkably hypoallergenic; gentle on the most delicate infant or adult digestive systems.'
    ],
    pairing: 'Thinly slice into baby spinach pecan salad or poach gently with vanilla pods.',
    extraTags: ['Cholesterol Binding', 'Hypoallergenic', 'Gentle Fiber']
  },
  {
    id: 'f_plum',
    name: 'Black Amber Plum',
    emoji: '🟣',
    category: ['stone', 'antioxidant', 'heart-brain'],
    portionGrams: 100,
    calories: 46,
    carbs: 11.4,
    fiber: 1.4,
    sugar: 9.9,
    fat: 0.3,
    protein: 0.7,
    gi: 'Low (39)',
    giLevel: 'low',
    vitamins: 'Chlorogenic Acid, Vitamin C, Vitamin K, Potassium',
    gradient: 'linear-gradient(135deg, #f3e8ff, #d8b4fe)',
    benefits: [
      'Chlorogenic acid helps modulate post-meal glucose absorption and insulin surges.',
      'Contains phenolic compounds that promote osteoblast bone-building activity.',
      'Antioxidant polyphenols safeguard neuron membranes from oxidative deterioration.'
    ],
    pairing: 'Bake with warm cardamom or chop into savory wild rice grain salads.',
    extraTags: ['Cognitive Vitality', 'Glucose Modulation', 'Bone Health']
  },
  {
    id: 'f_cantaloupe',
    name: 'Sweet Cantaloupe Melon',
    emoji: '🍈',
    category: ['melon', 'hydration', 'vitamin-c'],
    portionGrams: 100,
    calories: 34,
    carbs: 8.2,
    fiber: 0.9,
    sugar: 7.9,
    fat: 0.2,
    protein: 0.8,
    gi: 'Medium (65)',
    giLevel: 'med',
    vitamins: 'Beta-Carotene (67% DV), Vitamin C (61% DV), Potassium',
    gradient: 'linear-gradient(135deg, #ffedd5, #fed7aa)',
    benefits: [
      'Ultra-hydrating 90% water profile replenishes lost sweat electrolytes efficiently.',
      'Dense in provitamin A beta-carotene, supporting mucous membrane immune defenses.',
      'Natural choline content aids cellular membrane maintenance and transmission.'
    ],
    pairing: 'Wrap thin prosciutto slices around melon spears or blend into chilled gazpacho.',
    extraTags: ['Provitamin A', 'Electrolyte Balance', 'Cooling Hydration']
  },
  {
    id: 'f_apricot',
    name: 'Golden Royal Apricot',
    emoji: '🍑',
    category: ['stone', 'antioxidant', 'heart-brain'],
    portionGrams: 100,
    calories: 48,
    carbs: 11.1,
    fiber: 2.0,
    sugar: 9.2,
    fat: 0.4,
    protein: 1.4,
    gi: 'Low (34)',
    giLevel: 'low',
    vitamins: 'Vitamins A, C, E, Lutein, Zeaxanthin',
    gradient: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    benefits: [
      'Synergistic trio of Vitamins A, C, and E defends lipids from free radical oxidation.',
      'Protects optic macula and lens tissue from cumulative photochemical stress.',
      'Soluble fiber delays gastric emptying to provide clean, sustained physical energy.'
    ],
    pairing: 'Pair with raw activated almonds or dice into grain-free Moroccan chicken tagines.',
    extraTags: ['Ocular Health', 'Lipid Protection', 'Sustained Energy']
  },
  {
    id: 'f_coconut',
    name: 'Fresh Coconut Meat',
    emoji: '🥥',
    category: ['tropical', 'low-carb', 'hydration'],
    portionGrams: 100,
    calories: 354,
    carbs: 15.2,
    fiber: 9.0,
    sugar: 6.2,
    fat: 33.5,
    protein: 3.3,
    gi: 'Very Low (35)',
    giLevel: 'low',
    vitamins: 'Medium Chain Triglycerides (MCTs), Lauric Acid, Manganese',
    gradient: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
    benefits: [
      'MCT fats bypass normal digestion and head straight to the liver for quick ketone fuel.',
      'Massive 9.0g dietary fiber delivers prolonged satiety and gut fullness.',
      'Lauric acid converts to monolaurin in the body, providing antimicrobial support.'
    ],
    pairing: 'Shave fresh onto overnight chia puddings or blend into post-workout recovery shakes.',
    extraTags: ['MCT Energy', 'Ketogenic Fuel', 'Immune Lauric Acid']
  },
  {
    id: 'f_dates',
    name: 'Medjool Royal Dates',
    emoji: '🌴',
    category: ['tropical', 'high-fiber', 'heart-brain'],
    portionGrams: 100,
    calories: 277,
    carbs: 75.0,
    fiber: 6.7,
    sugar: 66.5,
    fat: 0.2,
    protein: 1.8,
    gi: 'Low-Med (42)',
    giLevel: 'med',
    vitamins: 'Potassium (696mg!), Copper, Magnesium, Vitamin B6',
    gradient: 'linear-gradient(135deg, #fed7aa, #fb923c)',
    benefits: [
      'Nature\'s ultimate pre-workout fuel: instant clean glycogen for heavy athletic sets.',
      'Huge 696mg potassium and 6.7g fiber buffers blood sugar response despite natural sweetness.',
      'Rich in flavonoids and phenolic acids that support brain health and cognitive clarity.'
    ],
    pairing: 'Stuff with 100% crunchy almond butter and top with a flake of flaky sea salt.',
    extraTags: ['Pre-Workout Carb', 'Electrolyte Dense', 'Clean Fuel']
  },
  {
    id: 'f_cranberry',
    name: 'Fresh Ruby Cranberry',
    emoji: '🍒',
    category: ['berry', 'antioxidant', 'low-carb'],
    portionGrams: 100,
    calories: 46,
    carbs: 12.2,
    fiber: 4.6,
    sugar: 4.0,
    fat: 0.1,
    protein: 0.4,
    gi: 'Low (45)',
    giLevel: 'low',
    vitamins: 'A-Type PACs (Proanthocyanidins), Vitamin C, Manganese',
    gradient: 'linear-gradient(135deg, #ffe4e6, #fda4af)',
    benefits: [
      'Unique A-type proanthocyanidins prevent E. coli bacteria from adhering to the bladder lining.',
      'Anti-adhesion properties protect oral teeth and gums from bacterial biofilm buildup.',
      'Selectively feeds beneficial Akkermansia muciniphila bacteria in the mucosal gut barrier.'
    ],
    pairing: 'Simmer with sweet orange peel and Ceylon cinnamon into a tart morning compote.',
    extraTags: ['Urinary Health', 'Anti-Adhesion', 'Gut Barrier Support']
  },
  {
    id: 'f_passion',
    name: 'Tropical Purple Passion Fruit',
    emoji: '💜',
    category: ['tropical', 'high-fiber', 'antioxidant'],
    portionGrams: 100,
    calories: 97,
    carbs: 23.4,
    fiber: 10.4,
    sugar: 11.2,
    fat: 0.7,
    protein: 2.2,
    gi: 'Low (30)',
    giLevel: 'low',
    vitamins: 'Piceatannol, Harman Alkaloids, Vitamin C, Iron',
    gradient: 'linear-gradient(135deg, #f3e8ff, #d8b4fe)',
    benefits: [
      'Record-breaking 10.4g dietary fiber per 100g—the undisputed fiber crown among all fruits!',
      'Piceatannol polyphenol improves insulin sensitivity and cellular metabolic function.',
      'Harman alkaloids deliver a natural, gentle soothing sensation to the central nervous system.'
    ],
    pairing: 'Drizzle the crunchy fragrant seed pulp directly over Greek yogurt or fresh fruit bowls.',
    extraTags: ['Fiber World Record', 'Nervous Calm', 'Metabolic Boost']
  }
];

const EXERCISES_DATABASE = [
  {
    id: 'ex1',
    name: 'Bodyweight Squats',
    category: ['strength', 'beginner', 'bodyweight'],
    muscle: 'Quadriceps, Glutes & Core',
    icon: '🦵',
    level: 'beginner',
    cals: 35,
    desc: 'The fundamental lower-body movement. Builds functional leg strength and hip mobility.',
    cue: 'Keep chest proud, sit back like into an invisible chair, knees tracking over toes.'
  },
  {
    id: 'ex2',
    name: 'Push-Ups (or Knee Push-Ups)',
    category: ['strength', 'beginner', 'bodyweight'],
    muscle: 'Chest, Triceps & Core',
    icon: '💪',
    level: 'beginner',
    cals: 40,
    desc: 'The gold standard upper body pushing exercise. Beginners can perform on knees or wall.',
    cue: 'Elbows at a 45-degree angle, glutes engaged, body forming a straight plank.'
  },
  {
    id: 'ex3',
    name: 'Plank Hold',
    category: ['core', 'beginner', 'bodyweight'],
    muscle: 'Deep Core & Transverse Abdominis',
    icon: '🛡️',
    level: 'beginner',
    cals: 25,
    desc: 'Isometric core strengthening that supports your lower back and posture.',
    cue: 'Do not let hips sag or hike up high; actively press elbows into the floor.'
  },
  {
    id: 'ex4',
    name: 'Jumping Jacks',
    category: ['cardio', 'beginner', 'bodyweight'],
    muscle: 'Full Body & Heart Rate',
    icon: '⭐',
    level: 'beginner',
    cals: 50,
    desc: 'Classic cardiovascular activator that gently boosts circulation and lymphatic flow.',
    cue: 'Land softly on the balls of your feet with a slight bend in your knees.'
  },
  {
    id: 'ex5',
    name: 'Glute Bridges',
    category: ['strength', 'beginner', 'bodyweight', 'core'],
    muscle: 'Glutes, Hamstrings & Lower Back',
    icon: '🍑',
    level: 'beginner',
    cals: 30,
    desc: 'Wakes up dormant glutes caused by prolonged sitting and eases lower back tightness.',
    cue: 'Drive through heels, squeeze glutes at the top without hyperextending ribs.'
  },
  {
    id: 'ex6',
    name: 'Cat-Cow Spinal Flow',
    category: ['flexibility', 'beginner', 'bodyweight'],
    muscle: 'Spine, Neck & Core Mobility',
    icon: '🐱',
    level: 'beginner',
    cals: 20,
    desc: 'Gentle spinal mobilization that relieves stiffness, calms the mind, and decompresses vertebrae.',
    cue: 'Inhale into Cow (belly dips, gaze gently up); exhale into Cat (arch back, round spine).'
  },
  {
    id: 'ex7',
    name: 'Mountain Climbers',
    category: ['cardio', 'core'],
    muscle: 'Abs, Shoulders & Cardio',
    icon: '🏔️',
    level: 'intermediate',
    cals: 55,
    desc: 'Dynamic plank-based drill that torches calories while challenging shoulder and core stability.',
    cue: 'Keep hands directly under shoulders; alternate driving knees toward chest smoothly.'
  },
  {
    id: 'ex8',
    name: 'Forward Lunges',
    category: ['strength', 'beginner'],
    muscle: 'Quadriceps, Glutes & Balance',
    icon: '🚶',
    level: 'beginner',
    cals: 42,
    desc: 'Unilateral leg strength builder that improves hip balance, stability, and coordination.',
    cue: 'Step forward smoothly, dropping back knee gently toward the floor at 90 degrees.'
  },
  {
    id: 'ex9',
    name: 'Downward-Facing Dog',
    category: ['flexibility', 'beginner'],
    muscle: 'Hamstrings, Calves & Shoulder Lat Stretch',
    icon: '🐕',
    level: 'beginner',
    cals: 22,
    desc: 'Classic yoga posture that elongates the posterior chain and refreshes cerebral blood flow.',
    cue: 'Lengthen your spine first; soften knees if hamstrings feel tight.'
  },
  {
    id: 'ex10',
    name: 'Burpees (Full or Low-Impact)',
    category: ['cardio', 'strength'],
    muscle: 'Full Body High Energy',
    icon: '🔥',
    level: 'advanced',
    cals: 65,
    desc: 'High-intensity conditioning movement combining squat, plank, and optional jump.',
    cue: 'Maintain a tight core during transition; step back rather than jumping for low-impact.'
  },
  {
    id: 'ex11',
    name: 'Dead Bug',
    category: ['core', 'beginner', 'bodyweight'],
    muscle: 'Deep Abdominals & Stability',
    icon: '🐞',
    level: 'beginner',
    cals: 28,
    desc: 'Safe and immensely effective anti-extension core drill that protects the lower back.',
    cue: 'Press your lower back firmly into the mat as opposite arm and leg extend.'
  },
  {
    id: 'ex12',
    name: 'Dumbbell or Water-Bottle Rows',
    category: ['strength'],
    muscle: 'Upper Back, Rhomboids & Biceps',
    icon: '🚣',
    level: 'beginner',
    cals: 38,
    desc: 'Builds posture-correcting back strength to counteract slouching over phones and computers.',
    cue: 'Hinge at hips, flat back, pull elbows toward hips and squeeze shoulder blades.'
  }
];

const RECIPES_DATABASE = [
  {
    id: 'r1',
    name: 'Berry Protein Chia Overnight Oats',
    category: 'breakfast',
    time: '5 mins prep',
    cals: 380,
    protein: 26,
    carbs: 48,
    fat: 9,
    icon: '🥣',
    desc: 'Creamy, chilled, high-fiber breakfast loaded with antioxidants and gut-friendly probiotics.',
    ingredients: ['1/2 cup rolled oats', '1 scoop protein powder (vanilla or unflavored)', '1 tbsp chia seeds', '1/2 cup Greek yogurt or almond milk', '1/2 cup mixed berries'],
    instructions: 'Mix ingredients together in a mason jar, refrigerate overnight, and top with fresh berries.'
  },
  {
    id: 'r2',
    name: 'Rainbow Mediterranean Quinoa Bowl',
    category: 'lunch',
    time: '15 mins',
    cals: 440,
    protein: 18,
    carbs: 56,
    fat: 16,
    icon: '🥗',
    desc: 'Vibrant plate loaded with colorful crisp vegetables, Kalamata olives, chickpeas, and lemon tahini dressing.',
    ingredients: ['1 cup cooked fluffy quinoa', '1/2 cup rinsed chickpeas', 'Diced cucumber & cherry tomatoes', '2 tbsp feta or hemp seeds', 'Extra virgin olive oil & lemon juice'],
    instructions: 'Toss vegetables, chickpeas, and warm quinoa together. Drizzle with cold-pressed olive oil, lemon, oregano, and salt.'
  },
  {
    id: 'r3',
    name: 'Sheet-Pan Lemon Herb Salmon & Veggies',
    category: 'dinner',
    time: '20 mins',
    cals: 490,
    protein: 38,
    carbs: 22,
    fat: 26,
    icon: '🐟',
    desc: 'Rich in anti-inflammatory omega-3 fatty acids, vibrant roasted asparagus, and sweet baby potatoes.',
    ingredients: ['1 wild salmon fillet (approx 160g)', '1 bunch fresh green asparagus', 'Sliced baby potatoes', 'Fresh garlic, rosemary & lemon slices', '1 tbsp olive oil'],
    instructions: 'Arrange salmon and veggies on a baking sheet. Season with herbs, oil, and lemon slices. Bake at 200°C (400°F) for 15 minutes.'
  },
  {
    id: 'r4',
    name: 'Creamy Avocado Cacao Power Smoothie',
    category: 'snack',
    time: '3 mins',
    cals: 320,
    protein: 20,
    carbs: 28,
    fat: 14,
    icon: '🥑',
    desc: 'Tastes like chocolate pudding while delivering magnesium, healthy brain fats, and silky protein.',
    ingredients: ['1/2 ripe avocado', '1 scoop chocolate protein powder', '1 tbsp raw cacao powder', '1 frozen banana', '1 cup unsweetened almond or oat milk'],
    instructions: 'Blend on high speed until velvety smooth. Enjoy immediately for afternoon vitality!'
  },
  {
    id: 'r5',
    name: 'Golden Turmeric Tofu Veggie Stir-Fry',
    category: 'vegan',
    time: '18 mins',
    cals: 390,
    protein: 24,
    carbs: 35,
    fat: 17,
    icon: '🌱',
    desc: 'Anti-inflammatory golden turmeric and crispy tofu cubes tossed with broccoli, carrots, and sesame ginger sauce.',
    ingredients: ['200g firm organic tofu (cubed)', '1 cup broccoli florets', 'Sliced bell peppers & snap peas', '1 tsp turmeric & minced ginger', 'Tamari soy sauce & sesame oil'],
    instructions: 'Pan-sear tofu cubes until golden. Add veggies and turmeric ginger glaze; stir-fry for 5 minutes until tender-crisp.'
  },
  {
    id: 'r6',
    name: 'Crispy Cinnamon Apple & Greek Yogurt Parfait',
    category: 'snack',
    time: '4 mins',
    cals: 260,
    protein: 22,
    carbs: 32,
    fat: 4,
    icon: '🍎',
    desc: 'High protein sweet craving crusher with blood sugar-regulating Ceylon cinnamon.',
    ingredients: ['1 cup plain non-fat or low-fat Greek yogurt', '1 diced crisp Honeycrisp apple', '1 tsp ground cinnamon', '1 tsp raw honey or pure maple syrup', 'Handful of crushed walnuts'],
    instructions: 'Layer yogurt in a bowl, top with cinnamon-dusted diced apples, honey drizzle, and walnuts.'
  }
];

const HEALTHY_SWAPS = [
  {
    from: 'Sugary Soda & Energy Drinks',
    to: 'Sparkling Water with Fresh Lemon & Mint',
    benefit: 'Saves 40g of empty refined liquid sugar; deeply hydrates kidneys and skin.'
  },
  {
    from: 'Deep Fried Potato Chips',
    to: 'Air-popped Popcorn or Roasted Spiced Chickpeas',
    benefit: 'Packed with prebiotic fiber and plant protein; avoids inflammatory trans-fats.'
  },
  {
    from: 'Heavy Mayonnaise Dressing',
    to: 'Greek Yogurt Herb Dressing or Fresh Guacamole',
    benefit: 'Triple the protein, gut-nourishing probiotics, and heart-healthy monounsaturated fats.'
  },
  {
    from: 'Processed Milk Chocolate Bars',
    to: '75%+ Dark Chocolate with Raw Almonds',
    benefit: 'Abundant polyphenols, antioxidant flavanols, and natural magnesium for calm muscles.'
  },
  {
    from: 'Sweetened Fruit Flavored Yogurts',
    to: 'Plain Greek Yogurt with Real Handful of Berries',
    benefit: 'Eliminates 18g added corn syrup while retaining real fruit fiber and vitamins.'
  },
  {
    from: 'Refined White Bagel / Toast',
    to: 'Whole Grain Sourdough or Sprouted Grain Bread',
    benefit: 'Lower glycemic impact, gentle on digestion, keeps energy steady for hours.'
  }
];

const MYTH_BUSTERS = [
  {
    myth: "Lifting weights makes women look bulky.",
    fact: "Lifting weights builds lean, sculpted muscle, boosts bone mineral density, and elevates metabolic rate. Women naturally have a fraction of the testosterone needed for excessive hypertrophy.",
    category: "Fitness"
  },
  {
    myth: "Eating carbohydrates after 6:00 PM turns straight into body fat.",
    fact: "Your metabolism does not shut down when the clock strikes 6 PM. What determines fat gain or loss is your overall 24-hour caloric and energy balance over weeks, not the specific hour of dinner.",
    category: "Nutrition"
  },
  {
    myth: "You can spot-reduce fat from your belly by doing 100 crunches daily.",
    fact: "Spot reduction is a myth. Crunches strengthen abdominal muscles, but fat loss occurs systemically across the entire body through a sustainable caloric deficit and general movement.",
    category: "Fitness"
  },
  {
    myth: "You need detox teas, juices, or cleanses to remove toxins.",
    fact: "Your body already has the ultimate detox system: your magnificent liver and kidneys! Fresh water, fiber, sleep, and whole foods are all they need to thrive.",
    category: "Health"
  },
  {
    myth: "Sweating a lot during a workout means you burned more fat.",
    fact: "Sweat is simply your body's cooling mechanism (thermoregulation). Sweating heavily only means water fluid loss; fat oxidation is driven by energy output and cellular respiration.",
    category: "Fitness"
  },
  {
    myth: "Dietary fat is evil and will make you gain weight automatically.",
    fact: "Essential healthy fats (omega-3s, monounsaturated fats from olive oil and avocados) are mandatory for hormone synthesis, vitamin absorption, and cognitive clarity.",
    category: "Nutrition"
  }
];

const DAILY_WELLNESS_FOCUS_DATABASE = [
  {
    title: "Food Sequencing: Eat Veggies & Protein First",
    text: "Eating fiber-rich vegetables before carbohydrates forms a viscous mesh in the small intestine, slowing gastric emptying and reducing post-meal insulin spikes by up to 35%."
  },
  {
    title: "The 30-Plant-a-Week Rule for Gut Immunity",
    text: "Clinical microbiome studies show individuals who consume 30+ diverse plant species per week harbor significantly richer microbial colonies producing anti-inflammatory short-chain fatty acids (SCFAs)."
  },
  {
    title: "Zone 2 Cardio: The Mitochondrial Fountain of Youth",
    text: "Exercising at 60–70% of max heart rate builds mitochondrial density, optimizes cellular fat oxidation, and enhances aerobic base without overtaxing the central nervous system."
  },
  {
    title: "Morning Sunlight: Anchor Your Master Clock",
    text: "Viewing natural outdoor daylight for 10–15 minutes within an hour of waking resets the suprachiasmatic nucleus (SCN), ensuring peak morning alertness and natural melatonin release 14 hours later."
  },
  {
    title: "Electrolytes & Deep Cellular Hydration",
    text: "Your cells require sodium, potassium, and magnesium to maintain cellular osmosis. Drinking pure water without adequate minerals during physical sweat can lead to intracellular dehydration."
  },
  {
    title: "The 10-3-2-1-0 Formula for Restorative Delta Sleep",
    text: "10 hours no caffeine, 3 hours no heavy meals/alcohol, 2 hours no stressful work, 1 hour no blue screens, and 0 snooze hits in the morning ensures deep ultradian REM recovery."
  }
];

const WHOLE_FOODS_DATABASE = [
  {
    id: 'wf_broccoli',
    name: 'Organic Broccoli',
    emoji: '🥦',
    category: 'cruciferous',
    categoryLabel: 'Cruciferous & Greens',
    calories: 34,
    protein: 2.8,
    carbs: 6.6,
    fiber: 2.6,
    fat: 0.4,
    gi: 'Low (GI 15)',
    vitamins: 'Sulforaphane, Vitamin C, Vitamin K1, Folate',
    benefits: [
      'Sulforaphane stimulates Nrf2 cellular detoxification pathway.',
      'Prebiotic fiber feeds Akkermansia muciniphila to fortify gut lining.',
      'High Vitamin K1 activates osteocalcin for bone mineral density.'
    ],
    pairing: 'Steam lightly for 3-4 minutes, toss with extra virgin olive oil and crushed garlic to maximize sulforaphane activation.',
    extraTags: ['Detox Superstar', 'Sulforaphane', 'Gut Health', 'Low Carb']
  },
  {
    id: 'wf_spinach',
    name: 'Baby Spinach',
    emoji: '🥬',
    category: 'cruciferous',
    categoryLabel: 'Cruciferous & Greens',
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fiber: 2.2,
    fat: 0.4,
    gi: 'Low (GI 15)',
    vitamins: 'Lutein, Zeaxanthin, Iron, Dietary Nitrates',
    benefits: [
      'Dietary nitrates convert to nitric oxide, improving endothelial blood flow.',
      'Lutein and zeaxanthin shield retinal cells from harmful blue light.',
      'High magnesium supports muscle relaxation and nerve conduction.'
    ],
    pairing: 'Sauté in cold-pressed olive oil with a squeeze of fresh lemon juice; vitamin C triples non-heme iron absorption.',
    extraTags: ['Nitric Oxide', 'Eye Defense', 'Magnesium Rich', 'Alkalizing']
  },
  {
    id: 'wf_kale',
    name: 'Curly Green Kale',
    emoji: '🥗',
    category: 'cruciferous',
    categoryLabel: 'Cruciferous & Greens',
    calories: 49,
    protein: 4.3,
    carbs: 8.8,
    fiber: 3.6,
    fat: 0.9,
    gi: 'Low (GI 15)',
    vitamins: 'Quercetin, Kaempferol, Calcium, Vitamin C',
    benefits: [
      'Abundant quercetin and kaempferol combat oxidative arterial stress.',
      'Bioavailable plant calcium supports teeth and skeletal strength.',
      'Binds bile acids in the digestive tract to naturally support cholesterol health.'
    ],
    pairing: 'Massage with avocado and sea salt for 2 minutes to break down fibrous cellulose for silky digestion.',
    extraTags: ['Flavonoid King', 'Plant Calcium', 'Bile Binding', 'Super Green']
  },
  {
    id: 'wf_brussels',
    name: 'Brussels Sprouts',
    emoji: '🌱',
    category: 'cruciferous',
    categoryLabel: 'Cruciferous & Greens',
    calories: 43,
    protein: 3.4,
    carbs: 9.0,
    fiber: 3.8,
    fat: 0.3,
    gi: 'Low (GI 15)',
    vitamins: 'Alpha-Lipoic Acid, Glucosinolates, Vitamin K',
    benefits: [
      'Alpha-lipoic acid helps increase insulin sensitivity in muscle cells.',
      'Glucosinolates support hepatic phase II liver detoxification enzymes.',
      'High soluble fiber slows digestive transit for steady satiety.'
    ],
    pairing: 'Roast with balsamic glaze and toasted walnuts until crispy and caramelized.',
    extraTags: ['Insulin Support', 'Liver Health', 'High Fiber', 'Antioxidant']
  },
  {
    id: 'wf_asparagus',
    name: 'Tender Asparagus',
    emoji: '🌿',
    category: 'cruciferous',
    categoryLabel: 'Cruciferous & Greens',
    calories: 20,
    protein: 2.2,
    carbs: 3.9,
    fiber: 2.1,
    fat: 0.1,
    gi: 'Low (GI 15)',
    vitamins: 'Asparagine, Glutathione, Inulin, Folate',
    benefits: [
      'High inulin prebiotic fiber selectively nourishes beneficial Bifidobacteria.',
      'Natural asparagine amino acid acts as a gentle, safe fluid balance diuretic.',
      'Rich in master antioxidant glutathione for cellular longevity.'
    ],
    pairing: 'Grill with lemon zest, cracked pepper, and pasture-raised poached eggs.',
    extraTags: ['Prebiotic Inulin', 'Natural Diuretic', 'Glutathione', 'Keto']
  },
  {
    id: 'wf_bellpepper',
    name: 'Rainbow Bell Peppers',
    emoji: '🫑',
    category: 'cruciferous',
    categoryLabel: 'Cruciferous & Greens',
    calories: 31,
    protein: 1.0,
    carbs: 6.0,
    fiber: 2.1,
    fat: 0.3,
    gi: 'Low (GI 15)',
    vitamins: 'Vitamin C (300% DV), Beta-Carotene, Capsanthin',
    benefits: [
      'Provides 300% daily Vitamin C for optimal collagen synthesis.',
      'Capsanthin and capsorubin antioxidants defend skin against UV damage.',
      'Crisp hydration with minimal caloric load.'
    ],
    pairing: 'Dip raw strips into homemade garlic hummus or guacamole.',
    extraTags: ['Vitamin C Bomb', 'Collagen Booster', 'Hydrating', 'Low Calorie']
  },
  {
    id: 'wf_walnuts',
    name: 'Raw English Walnuts',
    emoji: '🌰',
    category: 'nuts-seeds',
    categoryLabel: 'Nuts & Healthy Fats',
    calories: 654,
    protein: 15.2,
    carbs: 13.7,
    fiber: 6.7,
    fat: 65.2,
    gi: 'Low (GI 15)',
    vitamins: 'Plant Omega-3 (ALA), Polyphenols, Copper, Melatonin',
    benefits: [
      'Highest plant Omega-3 (ALA) of any tree nut, protecting cerebral blood vessels.',
      'Polyphenols reduce neuro-inflammation and enhance memory retention.',
      'Natural food source of melatonin supporting circadian sleep onset.'
    ],
    pairing: 'Combine with fresh berries and dark chocolate nibs for an anti-inflammatory brain snack.',
    extraTags: ['Brain Food', 'Omega-3 ALA', 'Neuroprotective', 'Healthy Fat']
  },
  {
    id: 'wf_chia',
    name: 'Organic Chia Seeds',
    emoji: '✨',
    category: 'nuts-seeds',
    categoryLabel: 'Nuts & Healthy Fats',
    calories: 486,
    protein: 16.5,
    carbs: 42.1,
    fiber: 34.4,
    fat: 30.7,
    gi: 'Low (GI 10)',
    vitamins: 'Soluble Mucilage Fiber, Calcium, Phosphorus, ALA',
    benefits: [
      'Absorbs 10-12x its weight in water, creating a slow-hydrating gel matrix.',
      'Packed with 34g of fiber per 100g to eliminate hunger spikes.',
      'High bioavailable plant calcium supporting bone density.'
    ],
    pairing: 'Soak overnight in unsweetened almond milk with vanilla and blueberries for chia pudding.',
    extraTags: ['Fiber Giant', 'Hydration Gel', 'Plant Calcium', 'Omega-3']
  },
  {
    id: 'wf_flax',
    name: 'Golden Flaxseeds',
    emoji: '🌾',
    category: 'nuts-seeds',
    categoryLabel: 'Nuts & Healthy Fats',
    calories: 534,
    protein: 18.3,
    carbs: 28.9,
    fiber: 27.3,
    fat: 42.2,
    gi: 'Low (GI 10)',
    vitamins: 'Lignans (Phytoestrogens), ALA Omega-3, Magnesium',
    benefits: [
      'Contains 800x more cancer-preventive lignans than any other plant food.',
      'Improves hormonal balance in both men and women.',
      'Significantly lowers diastolic and systolic blood pressure markers.'
    ],
    pairing: 'Grind freshly and sprinkle over oatmeal, smoothies, or whole grain toast.',
    extraTags: ['Hormone Balancer', 'Lignan Superfood', 'Heart Shield', 'Fiber Rich']
  },
  {
    id: 'wf_almonds',
    name: 'Raw Whole Almonds',
    emoji: '🥜',
    category: 'nuts-seeds',
    categoryLabel: 'Nuts & Healthy Fats',
    calories: 579,
    protein: 21.2,
    carbs: 21.6,
    fiber: 12.5,
    fat: 49.9,
    gi: 'Low (GI 15)',
    vitamins: 'Vitamin E (Alpha-tocopherol), Magnesium, Riboflavin',
    benefits: [
      'Alpha-tocopherol Vitamin E shields cellular membranes from lipid peroxidation.',
      'Abundant magnesium helps modulate blood sugar and reduce muscle cramps.',
      'Prebiotic skin polyphenols nourish beneficial gut microflora.'
    ],
    pairing: 'Pair with crisp apple slices or organic dark berries.',
    extraTags: ['Vitamin E', 'Magnesium', 'Skin Glow', 'Heart Healthy']
  },
  {
    id: 'wf_pumpkin',
    name: 'Raw Pumpkin Seeds (Pepitas)',
    emoji: '🎃',
    category: 'nuts-seeds',
    categoryLabel: 'Nuts & Healthy Fats',
    calories: 559,
    protein: 30.2,
    carbs: 10.7,
    fiber: 6.0,
    fat: 49.0,
    gi: 'Low (GI 10)',
    vitamins: 'Zinc, Magnesium, L-Tryptophan, Phytosterols',
    benefits: [
      'Unsurpassed natural zinc source supporting testosterone and immune defense.',
      'High L-Tryptophan converts to serotonin and sleep-inducing melatonin.',
      'Phytosterols lower intestinal absorption of dietary LDL cholesterol.'
    ],
    pairing: 'Lightly toast on a dry skillet with smoked paprika and sea salt.',
    extraTags: ['Zinc Powerhouse', 'Deep Sleep', '30g Protein', 'Immunity']
  },
  {
    id: 'wf_oliveoil',
    name: 'Extra Virgin Olive Oil',
    emoji: '🫒',
    category: 'nuts-seeds',
    categoryLabel: 'Nuts & Healthy Fats',
    calories: 884,
    protein: 0.0,
    carbs: 0.0,
    fiber: 0.0,
    fat: 100.0,
    gi: 'Zero GI',
    vitamins: 'Oleocanthal, Oleic Acid (73%), Hydroxytyrosol, Vitamin E',
    benefits: [
      'Oleocanthal polyphenol acts as a natural COX-1 and COX-2 anti-inflammatory.',
      'Oleic acid monounsaturated fat maintains vascular endothelial flexibility.',
      'Cornerstone of Mediterranean longevity and cognitive health.'
    ],
    pairing: 'Drizzle unheated over salads, roasted vegetables, or whole grain sourdough.',
    extraTags: ['Liquid Gold', 'Oleocanthal', 'Longevity', 'Anti-Inflammatory']
  },
  {
    id: 'wf_lentils',
    name: 'Black Beluga Lentils',
    emoji: '🫘',
    category: 'grains-legumes',
    categoryLabel: 'Legumes & Grains',
    calories: 116,
    protein: 9.0,
    carbs: 20.1,
    fiber: 7.9,
    fat: 0.4,
    gi: 'Low (GI 22)',
    vitamins: 'Anthocyanins, Folate, Iron, Resistant Starch',
    benefits: [
      'Beluga black pigment is packed with rare anti-inflammatory anthocyanins.',
      'Resistant starch ferments into butyrate, the primary energy source for colon cells.',
      'Slow digestion eliminates afternoon energy slumps and cravings.'
    ],
    pairing: 'Toss with diced roasted sweet potato, baby spinach, and lemon-tahini dressing.',
    extraTags: ['Resistant Starch', 'Butyrate Booster', 'Iron & Folate', 'Slow Carb']
  },
  {
    id: 'wf_chickpeas',
    name: 'Organic Chickpeas (Garbanzo)',
    emoji: '🥣',
    category: 'grains-legumes',
    categoryLabel: 'Legumes & Grains',
    calories: 164,
    protein: 8.9,
    carbs: 27.4,
    fiber: 7.6,
    fat: 2.6,
    gi: 'Low (GI 28)',
    vitamins: 'Saponins, Choline, Manganese, Folate',
    benefits: [
      'Stimulates satiety hormones GLP-1 and CCK for prolonged fullness.',
      'Choline supports cellular membrane signaling and liver lipid clearance.',
      'Manganese acts as an essential cofactor for superoxide dismutase (SOD).'
    ],
    pairing: 'Air-fry with cumin and olive oil for a crunchy high-protein snack.',
    extraTags: ['GLP-1 Satiety', 'Choline', 'Plant Protein', 'Versatile']
  },
  {
    id: 'wf_blackbeans',
    name: 'Black Turtle Beans',
    emoji: '🥘',
    category: 'grains-legumes',
    categoryLabel: 'Legumes & Grains',
    calories: 132,
    protein: 8.9,
    carbs: 23.7,
    fiber: 8.7,
    fat: 0.5,
    gi: 'Low (GI 30)',
    vitamins: 'Quercetin, Kaempferol, Molybdenum, Iron',
    benefits: [
      'Anthocyanin flavonoids rival blueberries in total antioxidant concentration.',
      'Molybdenum breaks down toxic sulfites found in prepared foods.',
      '8.7g soluble & insoluble fiber promotes regular intestinal motility.'
    ],
    pairing: 'Combine with brown rice or quinoa for a complete amino acid profile.',
    extraTags: ['Antioxidant Bean', 'Fiber Heavy', 'Detox Cofactor', 'Heart Fuel']
  },
  {
    id: 'wf_quinoa',
    name: 'Tri-Color Quinoa',
    emoji: '🍚',
    category: 'grains-legumes',
    categoryLabel: 'Legumes & Grains',
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fiber: 2.8,
    fat: 1.9,
    gi: 'Low (GI 53)',
    vitamins: 'All 9 Essential Amino Acids, Quercetin, Magnesium',
    benefits: [
      'Complete plant protein featuring ideal lysine and isoleucine ratios.',
      'Naturally gluten-free ancient Andean pseudocereal.',
      'Packed with magnesium to support over 300 enzymatic bodily reactions.'
    ],
    pairing: 'Use as a nutrient-dense base for power bowls with grilled salmon and avocado.',
    extraTags: ['Complete Protein', 'Gluten Free', 'Ancient Seed', 'Clean Energy']
  },
  {
    id: 'wf_oats',
    name: 'Steel-Cut Oats',
    emoji: '🌾',
    category: 'grains-legumes',
    categoryLabel: 'Legumes & Grains',
    calories: 379,
    protein: 13.2,
    carbs: 67.7,
    fiber: 10.1,
    fat: 6.5,
    gi: 'Low (GI 52)',
    vitamins: 'Beta-Glucan, Avenanthramides, Phosphorus, B1',
    benefits: [
      'Beta-glucan soluble fiber forms a gel that traps cholesterol and stabilizes glucose.',
      'Avenanthramide antioxidants are unique to oats, soothing arterial walls.',
      'Minimal mechanical processing preserves the intact whole grain bran and germ.'
    ],
    pairing: 'Cook in almond milk, top with Ceylon cinnamon, chia seeds, and raw walnuts.',
    extraTags: ['Beta-Glucan', 'Cholesterol Care', 'Unprocessed', 'Prebiotic']
  },
  {
    id: 'wf_wildrice',
    name: 'Wild Aquatic Grass Rice',
    emoji: '🌾',
    category: 'grains-legumes',
    categoryLabel: 'Legumes & Grains',
    calories: 101,
    protein: 4.0,
    carbs: 21.3,
    fiber: 1.8,
    fat: 0.3,
    gi: 'Low (GI 45)',
    vitamins: 'B-Complex Vitamins, Phosphorus, Zinc, Folate',
    benefits: [
      'Technically an aquatic grass with double the protein of white or brown rice.',
      'Rich in B vitamins essential for cellular ATP energy production.',
      'Satisfying nutty flavor with a low glycemic load.'
    ],
    pairing: 'Toss with roasted mushrooms, cranberries, and fresh thyme.',
    extraTags: ['Aquatic Grass', 'B-Complex', 'Double Protein', 'Low Glycemic']
  },
  {
    id: 'wf_salmon',
    name: 'Wild Alaskan Sockeye Salmon',
    emoji: '🐟',
    category: 'protein',
    categoryLabel: 'Clean Proteins',
    calories: 208,
    protein: 22.1,
    carbs: 0.0,
    fiber: 0.0,
    fat: 12.4,
    gi: 'Zero GI',
    vitamins: 'Marine EPA & DHA Omega-3, Astaxanthin, Vitamin D3, B12',
    benefits: [
      'Rich in marine EPA & DHA that integrate into brain neuronal membranes.',
      'Natural red astaxanthin is 6,000x stronger than Vitamin C against singlet oxygen.',
      'High biological value complete protein for lean muscle repair.'
    ],
    pairing: 'Pan-sear in olive oil with dill, fresh lemon, and steamed asparagus.',
    extraTags: ['Marine Omega-3', 'Astaxanthin', 'Brain Fuel', 'High Protein']
  },
  {
    id: 'wf_eggs',
    name: 'Pasture-Raised Organic Eggs',
    emoji: '🍳',
    category: 'protein',
    categoryLabel: 'Clean Proteins',
    calories: 143,
    protein: 12.6,
    carbs: 0.7,
    fiber: 0.0,
    fat: 9.5,
    gi: 'Zero GI',
    vitamins: 'Choline (147mg), Lutein, Zeaxanthin, Vitamin D3, B12',
    benefits: [
      'Gold standard DIAAS amino acid digestibility score (1.18).',
      'Choline is the essential precursor for neurotransmitter acetylcholine (focus).',
      'Yolk phospholipids improve high-density lipoprotein (HDL) particle quality.'
    ],
    pairing: 'Poach over avocado and sprouted whole grain sourdough with a pinch of red pepper flakes.',
    extraTags: ['Choline Rich', 'Perfect Protein', 'Brain Neurotransmitters', 'Vitamin D']
  },
  {
    id: 'wf_tempeh',
    name: 'Fermented Organic Tempeh',
    emoji: '🫘',
    category: 'protein',
    categoryLabel: 'Clean Proteins',
    calories: 192,
    protein: 20.3,
    carbs: 7.6,
    fiber: 4.8,
    fat: 10.8,
    gi: 'Low (GI 15)',
    vitamins: 'Fermented Isoflavones, Probiotics, Prebiotics, Calcium',
    benefits: [
      'Whole soybean fermentation with Rhizopus oligosporus breaks down phytates.',
      'Provides 20g of clean plant protein and 5g fiber per serving.',
      'Fermented isoflavones support bone density and vascular health.'
    ],
    pairing: 'Marinate in coconut aminos, ginger, and garlic, then pan-sear until golden.',
    extraTags: ['Fermented Protein', 'Gut Friendly', '20g Protein', 'Plant Power']
  },
  {
    id: 'wf_greekyogurt',
    name: 'Authentic Plain Greek Yogurt',
    emoji: '🥛',
    category: 'protein',
    categoryLabel: 'Clean Proteins',
    calories: 97,
    protein: 10.0,
    carbs: 3.6,
    fiber: 0.0,
    fat: 5.0,
    gi: 'Low (GI 14)',
    vitamins: 'Live Probiotics (L. bulgaricus, S. thermophilus), Calcium, B12',
    benefits: [
      'Straining removes excess whey, resulting in double the protein and lower lactose.',
      'Live active cultures support gut barrier function and competitive bacterial exclusion.',
      'High calcium and casein protein provide prolonged muscular satiety.'
    ],
    pairing: 'Top with wild blueberries, pumpkin seeds, and a dash of raw organic honey.',
    extraTags: ['Probiotic Live', 'High Protein', 'Gut Flora', 'Satiating']
  },
  {
    id: 'wf_edamame',
    name: 'Steamed Organic Edamame',
    emoji: '🌱',
    category: 'protein',
    categoryLabel: 'Clean Proteins',
    calories: 121,
    protein: 11.9,
    carbs: 8.9,
    fiber: 5.2,
    fat: 5.2,
    gi: 'Low (GI 18)',
    vitamins: 'Complete Plant Protein, Folate, Vitamin K1, Isoflavones',
    benefits: [
      'Rare whole plant food containing all 9 essential amino acids in optimal ratios.',
      'Rich in prebiotic fiber that supports digestive regularity.',
      'Supports healthy endothelial elasticity and cholesterol profiles.'
    ],
    pairing: 'Steam in pods and toss with coarse sea salt and sesame seeds.',
    extraTags: ['Complete Protein', 'Quick Snack', 'Fiber Rich', 'Plant Power']
  },
  {
    id: 'wf_tofu',
    name: 'Sprouted Extra-Firm Tofu',
    emoji: '🧊',
    category: 'protein',
    categoryLabel: 'Clean Proteins',
    calories: 83,
    protein: 10.0,
    carbs: 1.9,
    fiber: 0.9,
    fat: 5.3,
    gi: 'Low (GI 15)',
    vitamins: 'Plant Calcium, Iron, Magnesium, Isoflavones',
    benefits: [
      'Sprouting significantly reduces anti-nutrients and increases mineral bioavailability.',
      'Very low in carbohydrates with high protein-to-calorie ratio.',
      'Culinary chameleon that absorbs rich herbs, spices, and dressings.'
    ],
    pairing: 'Cube and bake with turmeric, nutritional yeast, and tamari for crispy protein bites.',
    extraTags: ['Sprouted Clean', 'Low Carb', 'High Calcium', 'Versatile']
  }
];

const BLOG_ARTICLES_DATABASE = [
  {
    id: 'blog_upf',
    title: 'The Hidden Impact of Ultra-Processed Foods (UPF) on Human Biology',
    category: 'upf',
    categoryLabel: 'Ultra-Processed Foods (UPF)',
    readTime: '6 min read',
    author: 'FitCare Clinical Research Board',
    authorAvatar: '🔬',
    date: 'October 2026',
    emoji: '⚠️',
    summary: 'Why artificial emulsifiers, hyper-palatable ratios of refined fat and sugar, and missing food matrixes confuse your hunger hormones and degrade the intestinal mucosal barrier.',
    takeaways: [
      'NOVA Group 4 ultra-processed foods are engineered to bypass natural satiety signaling (leptin).',
      'Industrial emulsifiers (polysorbate-80, carboxymethylcellulose) can erode the gut protective mucosal layer.',
      'Switching to whole, minimally processed food restores natural caloric regulation within 14 days.'
    ],
    contentHtml: `
      <p>In modern supermarket aisles, over 60% of calories consumed in industrialized nations come from <strong>NOVA Group 4 Ultra-Processed Foods (UPFs)</strong>. These are not simply "food with additives"—they are industrial formulations manufactured from substances extracted from foods (fats, starches, added sugars, isolates) combined with synthetic flavor enhancers, colorings, and emulsifiers.</p>
      
      <h3>1. The Destruction of the "Food Matrix"</h3>
      <p>In whole foods like an apple or an almond, nutrients are locked inside complex cellular walls of fiber and protein (the <em>food matrix</em>). Your digestive system must expend metabolic energy to break these cells down, leading to slow, sustained nutrient absorption. UPFs have had this matrix completely pulverized, resulting in rapid blood sugar spikes and hyper-rapid gastrointestinal transit.</p>
      
      <h3>2. Emulsifiers and the Intestinal Barrier</h3>
      <p>Industrial emulsifiers like carboxymethylcellulose and polysorbate-80 are added to prevent separation and create a creamy mouthfeel. Research shows these compounds act like detergents inside the digestive tract, thinning the protective mucosal lining that separates gut bacteria from the bloodstream, triggering low-grade systemic inflammation.</p>
      
      <h3>3. The 80/20 Sustainable Solution</h3>
      <p>Total elimination isn't necessary for radiant health. Strive for the <strong>80/20 Rule</strong>: ensure 80%+ of your weekly grocery basket comes from single-ingredient whole foods (vegetables, fruits, nuts, legumes, eggs, clean proteins), leaving room for enjoyable flexibility without metabolic compromise.</p>
    `
  },
  {
    id: 'blog_30plants',
    title: 'The 30-Plant-a-Week Rule: The True Pillar of Immune Defense & Gut Diversity',
    category: 'gut',
    categoryLabel: 'Gut Microbiome & Immunity',
    readTime: '5 min read',
    author: 'Dr. Elena Vance, Microbiome Science',
    authorAvatar: '🧬',
    date: 'October 2026',
    emoji: '🌿',
    summary: 'Groundbreaking research from the American Gut Project reveals that eating 30 unique plant species per week is the single strongest predictor of a resilient, disease-resistant microbiome.',
    takeaways: [
      'Each distinct plant family contains unique prebiotic fibers that feed different beneficial bacterial phyla.',
      'Herbs, spices, seeds, nuts, whole grains, and fruits all count toward your 30 weekly plant goal.',
      'High microbial diversity correlates directly with lower systemic inflammation and enhanced serotonin production.'
    ],
    contentHtml: `
      <p>For decades, nutritional advice focused narrowly on single macronutrients: "cut fat", "eat more protein", or "count calories". However, the <strong>American Gut Project</strong> (analyzing over 15,000 human stool samples) discovered something far more profound: <em>the diversity of plants you eat matters more than whether you are vegan, keto, or omnivorous.</em></p>
      
      <h3>1. Why Diversity Trumps Quantity</h3>
      <p>Different gut microbes (such as <em>Bifidobacterium</em>, <em>Faecalibacterium prausnitzii</em>, and <em>Akkermansia</em>) feed on distinct fiber polymers and polyphenols. Eating 5 apples a day feeds only one subset of bacteria. Eating an apple, a handful of walnuts, pumpkin seeds, lentils, and fresh cilantro feeds dozens of specialized microbial colonies simultaneously.</p>
      
      <h3>2. How to Hit 30 Plants Without Stress</h3>
      <p>Hitting 30 is easier than you think because <strong>every plant category counts</strong>:</p>
      <ul>
        <li><strong>Fruits:</strong> Blueberries, apples, avocados, bananas, lemons.</li>
        <li><strong>Vegetables:</strong> Spinach, broccoli, garlic, onions, bell peppers.</li>
        <li><strong>Nuts & Seeds:</strong> Chia, flax, walnuts, almonds, pumpkin seeds.</li>
        <li><strong>Legumes & Grains:</strong> Lentils, chickpeas, quinoa, oats, black beans.</li>
        <li><strong>Herbs & Spices:</strong> Cinnamon, turmeric, rosemary, ginger, parsley.</li>
      </ul>
      <p>A simple morning oatmeal with chia, walnuts, blueberries, and cinnamon already scores 5 distinct plants before 9:00 AM!</p>
    `
  },
  {
    id: 'blog_glucose',
    title: 'The Glucose Curve: Why Food Sequencing Tames Spikes by up to 35%',
    category: 'glucose',
    categoryLabel: 'Glucose & Sequencing',
    readTime: '5 min read',
    author: 'FitCare Clinical Research Board',
    authorAvatar: '🥗',
    date: 'October 2026',
    emoji: '📈',
    summary: 'Science confirms that the order in which you eat the components of your meal changes the post-meal glucose and insulin response without reducing a single calorie.',
    takeaways: [
      'Eat Fiber/Veggies FIRST, followed by Protein & Fats, and save Starches/Sugars for LAST.',
      'Fiber creates a protective viscous gel mesh in the upper digestive tract.',
      'Lower postprandial glucose variability prevents energy crashes, brain fog, and chronic cravings.'
    ],
    contentHtml: `
      <p>When you eat a meal consisting of a salad, grilled chicken, and rice, your body processes those foods completely differently depending on the order they enter your stomach. Clinical trials published in <em>Diabetes Care</em> demonstrated that changing food order alone reduced postprandial glucose spikes by up to <strong>35%</strong> and insulin release by <strong>48%</strong>.</p>
      
      <h3>1. The Mechanism: The Intestinal Fiber Mesh</h3>
      <p>When you eat fiber first (such as a starter salad or steamed broccoli), the soluble fiber dissolves into a thick, viscous mesh lining the walls of your duodenum. When carbohydrates arrive later in the meal, this gel mesh slows down the enzymatic breakdown of starch into glucose, ensuring a gentle rolling curve rather than a sharp spike.</p>
      
      <h3>2. Why Avoiding the "Spike & Crash" Matters</h3>
      <p>A sharp glucose spike forces the pancreas to pump out massive amounts of insulin. This rapid clearance causes "reactive hypoglycemia"—a steep plunge below baseline that triggers intense cravings for sugar 90 minutes after eating. By flattening the curve, you maintain laser-sharp mental focus and steady all-day energy.</p>
    `
  },
  {
    id: 'blog_hydration',
    title: 'Hydration Science: Why Plain Water Isn’t Enough (Cellular Osmosis)',
    category: 'hydration',
    categoryLabel: 'Hydration & Circadian',
    readTime: '6 min read',
    author: 'Dr. Marcus Thorne, Sports Physiology',
    authorAvatar: '💧',
    date: 'October 2026',
    emoji: '🌊',
    summary: 'Understanding the sodium-potassium pump, intracellular vs extracellular fluid balance, and why chugging gallons of distilled water can actually leave your cells dehydrated.',
    takeaways: [
      'Hydration is about cellular mineral transport, not just the volume of water you drink.',
      'Sodium, potassium, and magnesium are required to pull water across cellular membranes.',
      'Front-load your hydration in the first 8–10 hours of the day to protect nighttime sleep architecture.'
    ],
    contentHtml: `
      <p>Many people diligently drink 3 liters of filtered water daily, yet still experience morning headaches, brain fog, and afternoon lethargy. The reason? <strong>Water cannot enter your cells without electrolytes.</strong></p>
      
      <h3>1. The Sodium-Potassium Cellular Gatekeeper</h3>
      <p>Every cell in your body relies on the <em>sodium-potassium ATPase pump</em>. Sodium sits primarily in extracellular fluid, while potassium resides inside cells. When you drink large volumes of demineralized water without food or electrolytes, you dilute extracellular sodium. Your kidneys respond by flushing out water, leaving your cells thirsty.</p>
      
      <h3>2. Practical Daily Hydration Strategy</h3>
      <ul>
        <li><strong>Morning Jumpstart:</strong> Drink 500ml of water with a pinch of Himalayan pink salt and lemon upon waking.</li>
        <li><strong>Electrolyte Whole Foods:</strong> Incorporate potassium-rich avocados, bananas, and coconut water into your routine.</li>
        <li><strong>Circadian Taper:</strong> Consume 75% of your daily fluid target before 5:00 PM so nocturnal urination (nocturia) doesn't interrupt critical deep sleep.</li>
      </ul>
    `
  },
  {
    id: 'blog_protein',
    title: 'Clean Protein Masterclass: DIAAS Scores, Leucine Threshold & Muscle Satiety',
    category: 'protein',
    categoryLabel: 'Clean Protein & Muscle',
    readTime: '7 min read',
    author: 'FitCare Performance Nutrition',
    authorAvatar: '🥩',
    date: 'October 2026',
    emoji: '💪',
    summary: 'A deep dive into protein bioavailability, the 2.5g leucine trigger for muscle protein synthesis (MPS), and how plant-based and omnivorous eaters can hit optimal targets.',
    takeaways: [
      'Target 1.6 to 2.2 grams of protein per kilogram of body weight for optimal body recomposition.',
      'Each main meal should provide at least 2.5g of leucine to trigger the mTOR muscle repair pathway.',
      'Protein has the highest Thermic Effect of Food (TEF), burning 20-30% of its calories during digestion.'
    ],
    contentHtml: `
      <p>Protein is the structural foundation of human physiology. It builds muscle contractile tissue, neurotransmitters, enzymes, and immune antibodies. Yet protein remains one of the most misunderstood nutrients in modern fitness.</p>
      
      <h3>1. The Leucine Threshold for Muscle Protein Synthesis (MPS)</h3>
      <p>To stimulate muscle repair and growth, a meal must contain approximately <strong>2.5 to 3.0 grams of the essential amino acid leucine</strong>. In animal proteins (wild salmon, eggs, Greek yogurt), this is achieved with 25–30g of total protein. For plant proteins (tofu, tempeh, lentils), aim for 35–40g per meal or combine diverse sources.</p>
      
      <h3>2. The Thermic Satiety Advantage</h3>
      <p>Protein stimulates the release of peptide YY (PYY) and cholecystokinin (CCK) while suppressing ghrelin (the hunger hormone). Furthermore, digesting protein expends 20–30% of its energy content as heat (TEF), compared to just 5–10% for carbohydrates and 0–3% for dietary fats.</p>
    `
  },
  {
    id: 'blog_circadian',
    title: 'Circadian Meal Timing: Why Eating with the Sun Optimizes Metabolic Health',
    category: 'hydration',
    categoryLabel: 'Hydration & Circadian',
    readTime: '5 min read',
    author: 'Circadian Biology Research Group',
    authorAvatar: '⏰',
    date: 'October 2026',
    emoji: '☀️',
    summary: 'Your pancreas, liver, and gut have internal circadian clocks synchronized with daylight. Discover why the same meal eaten at 1:00 PM produces a very different metabolic response than at 10:00 PM.',
    takeaways: [
      'Insulin sensitivity is naturally highest in the morning and early afternoon.',
      'Melatonin release in the evening signals beta-cells to reduce insulin secretion.',
      'A 10–12 hour daily eating window supports autophagy and gut microbiome circadian rhythmicity.'
    ],
    contentHtml: `
      <p>Chronobiology has proven that <em>when</em> you eat is almost as critical as <em>what</em> you eat. Every peripheral metabolic organ (liver, pancreas, adipose tissue) contains autonomous circadian clock genes synchronized with the central clock in your brain.</p>
      
      <h3>1. Evening Melatonin and Insulin Resistance</h3>
      <p>As darkness falls and your brain begins secreting melatonin to prepare for sleep, pancreatic beta-cells express melatonin receptors that naturally shut down insulin output. Consuming high-glycemic carbohydrates late at night when insulin sensitivity is low leads to prolonged glucose elevation and impairs fat oxidation during sleep.</p>
      
      <h3>2. The Ideal 10–12 Hour Eating Window</h3>
      <p>You don't need extreme 20-hour fasts. Simply finishing dinner 3 hours before sleep and waiting 12 hours before breakfast (e.g. 8:00 AM to 7:00 PM) allows the gut migratory motor complex (MMC) to clean debris and optimizes nighttime growth hormone release.</p>
    `
  }
];

const SEVEN_MIN_WORKOUT = [
  { name: 'Jumping Jacks', duration: 30, cue: 'Get heart rate up, land softly on balls of feet.' },
  { name: 'Rest & Breathe', duration: 10, cue: 'Catch your breath, prepare for wall sit or squat hold.' },
  { name: 'Wall Sit / Squat Hold', duration: 30, cue: 'Thighs parallel to floor, press back into wall or keep chest proud.' },
  { name: 'Rest & Breathe', duration: 10, cue: 'Shake out your legs.' },
  { name: 'Push-Ups (or Knee Push-Ups)', duration: 30, cue: 'Keep core braced and spine neutral throughout.' },
  { name: 'Rest & Breathe', duration: 10, cue: 'Inhale deep through your nose, exhale mouth.' },
  { name: 'Abdominal Crunches / Dead Bug', duration: 30, cue: 'Engage core, do not pull on your neck.' },
  { name: 'Rest & Breathe', duration: 10, cue: 'Prepare for step-ups or alternating lunges.' },
  { name: 'Alternating Forward Lunges', duration: 30, cue: 'Keep front knee behind toes, torso upright.' },
  { name: 'Rest & Breathe', duration: 10, cue: 'Catch breath, hydrate if needed.' },
  { name: 'Tricep Dips or Plank Hold', duration: 30, cue: 'Strong shoulders, stay steady and calm.' },
  { name: 'Rest & Breathe', duration: 10, cue: 'Almost there! 2 moves left.' },
  { name: 'High Knees / Marching in Place', duration: 30, cue: 'Pump arms, drive knees up with rhythm.' },
  { name: 'Rest & Breathe', duration: 10, cue: 'Final exercise coming up!' },
  { name: 'Forearm Plank Hold', duration: 30, cue: 'Squeeze glutes and hold solid like a rock!' }
];

// ===================================================================
// 2. STATE PERSISTENCE MANAGER
// ===================================================================

const AppState = {
  theme: 'light',
  soundEnabled: true,
  streak: 1,
  lastActiveDate: '',
  waterCurrentMl: 0,
  waterTargetMl: 2000,
  habits: DEFAULT_HABITS,
  selectedMood: '',
  gratitudeNote: '',
  loggedFoods: [],
  routineQueue: [],
  user: null, // { name: '', email: '', avatar: '🌟', goal: '', memberSince: '2026' }

  init() {
    // Load from localStorage
    try {
      const savedTheme = localStorage.getItem('vp_theme');
      if (savedTheme) this.theme = savedTheme;

      const savedSound = localStorage.getItem('vp_sound');
      if (savedSound !== null) this.soundEnabled = savedSound === 'true';

      const savedWater = localStorage.getItem('vp_water');
      if (savedWater) this.waterCurrentMl = parseInt(savedWater, 10) || 0;

      const savedWaterTarget = localStorage.getItem('vp_water_target');
      if (savedWaterTarget) this.waterTargetMl = parseInt(savedWaterTarget, 10) || 2000;

      const savedHabits = localStorage.getItem('vp_habits');
      if (savedHabits) {
        this.habits = JSON.parse(savedHabits);
      }

      const savedFoods = localStorage.getItem('vp_foods');
      if (savedFoods) {
        this.loggedFoods = JSON.parse(savedFoods);
      }

      const savedMood = localStorage.getItem('vp_mood');
      if (savedMood) this.selectedMood = savedMood;

      const savedNote = localStorage.getItem('vp_gratitude');
      if (savedNote) this.gratitudeNote = savedNote;

      const savedRoutine = localStorage.getItem('vp_routine');
      if (savedRoutine) this.routineQueue = JSON.parse(savedRoutine);

      const savedUser = localStorage.getItem('fitcare_user');
      if (savedUser) {
        this.user = JSON.parse(savedUser);
      }

      // Streak logic
      const todayStr = new Date().toISOString().split('T')[0];
      const savedDate = localStorage.getItem('vp_last_date');
      const savedStreak = parseInt(localStorage.getItem('vp_streak') || '1', 10);

      if (savedDate) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (savedDate === todayStr) {
          this.streak = savedStreak;
        } else if (savedDate === yesterday) {
          this.streak = savedStreak + 1;
          localStorage.setItem('vp_streak', this.streak.toString());
          localStorage.setItem('vp_last_date', todayStr);
        } else {
          // Missed more than a day
          this.streak = 1;
          localStorage.setItem('vp_streak', '1');
          localStorage.setItem('vp_last_date', todayStr);
        }
      } else {
        localStorage.setItem('vp_last_date', todayStr);
        localStorage.setItem('vp_streak', '1');
        this.streak = 1;
      }
    } catch (e) {
      console.warn('Storage access fallback:', e);
    }
  },

  save() {
    try {
      localStorage.setItem('vp_theme', this.theme);
      localStorage.setItem('vp_sound', this.soundEnabled.toString());
      localStorage.setItem('vp_water', this.waterCurrentMl.toString());
      localStorage.setItem('vp_water_target', this.waterTargetMl.toString());
      localStorage.setItem('vp_habits', JSON.stringify(this.habits));
      localStorage.setItem('vp_foods', JSON.stringify(this.loggedFoods));
      localStorage.setItem('vp_mood', this.selectedMood);
      localStorage.setItem('vp_gratitude', this.gratitudeNote);
      localStorage.setItem('vp_routine', JSON.stringify(this.routineQueue));
      if (this.user) {
        localStorage.setItem('fitcare_user', JSON.stringify(this.user));
      } else {
        localStorage.removeItem('fitcare_user');
      }
    } catch (e) {
      console.warn('Failed saving state to localStorage', e);
    }
  }
};

// ===================================================================
// 3. SOUND SYNTHESIS ENGINE (Web Audio API - Zero External Audio)
// ===================================================================

const SoundEngine = {
  ctx: null,
  activeAmbientNodes: null,
  activeAmbientType: null,

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  },

  playChime() {
    if (!AppState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.5);
  },

  playBeep(isHigh = false) {
    if (!AppState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(isHigh ? 880 : 440, now);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (isHigh ? 0.35 : 0.15));

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + (isHigh ? 0.35 : 0.15));
  },

  // Ambient Synthetic Sound Generator
  toggleAmbient(type) {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    if (this.activeAmbientType === type) {
      this.stopAmbient();
      return false;
    }

    this.stopAmbient();
    this.activeAmbientType = type;

    const masterGain = this.ctx.createGain();
    const volInput = document.getElementById('ambientVolume');
    const vol = (volInput ? parseInt(volInput.value, 10) : 70) / 100 * 0.2;
    masterGain.gain.setValueAtTime(vol, this.ctx.currentTime);
    masterGain.connect(this.ctx.destination);

    if (type === 'rain' || type === 'ocean' || type === 'wind') {
      // Noise buffer synthesis
      const bufferSize = this.ctx.sampleRate * 3;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Pinkish noise filter
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();

      if (type === 'rain') {
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.ctx.currentTime);
        noise.connect(filter);
        filter.connect(masterGain);
      } else if (type === 'ocean') {
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(450, this.ctx.currentTime);
        filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

        // LFO for surf waves
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.value = 0.12; // 8-second wave swells
        lfoGain.gain.value = 0.15;

        lfo.connect(lfoGain.gain);
        noise.connect(filter);
        filter.connect(masterGain);
        lfo.start();
      } else if (type === 'wind') {
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(300, this.ctx.currentTime);
        filter.Q.setValueAtTime(2.5, this.ctx.currentTime);
        noise.connect(filter);
        filter.connect(masterGain);
      }

      noise.start();
      this.activeAmbientNodes = { noise, masterGain };
    } else if (type === 'zen') {
      // Harmonic 432 Hz + 216 Hz gentle sine chords
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(216, this.ctx.currentTime);
      osc2.frequency.setValueAtTime(432, this.ctx.currentTime);

      osc1.connect(masterGain);
      osc2.connect(masterGain);
      osc1.start();
      osc2.start();

      this.activeAmbientNodes = { osc1, osc2, masterGain };
    }

    return true;
  },

  stopAmbient() {
    if (this.activeAmbientNodes) {
      try {
        if (this.activeAmbientNodes.noise) this.activeAmbientNodes.noise.stop();
        if (this.activeAmbientNodes.osc1) this.activeAmbientNodes.osc1.stop();
        if (this.activeAmbientNodes.osc2) this.activeAmbientNodes.osc2.stop();
      } catch (e) {
        // Ignored
      }
      this.activeAmbientNodes = null;
    }
    this.activeAmbientType = null;
  },

  setVolume(volumePercent) {
    if (this.activeAmbientNodes && this.activeAmbientNodes.masterGain) {
      const vol = (volumePercent / 100) * 0.2;
      this.activeAmbientNodes.masterGain.gain.setValueAtTime(vol, this.ctx.currentTime);
    }
  }
};

// ===================================================================
// 4. CELEBRATION EFFECTS
// ===================================================================

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// ===================================================================
// 5. NAVIGATION CONTROLLER
// ===================================================================

function toggleMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) {
    const isOpen = drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function openMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function navigateTo(sectionId) {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));

  // Show selected section
  const targetSection = document.getElementById(`section-${sectionId}`);
  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update header desktop nav active styles
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.dataset.target === sectionId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update mobile drawer active styles
  document.querySelectorAll('.drawer-item').forEach(btn => {
    if (btn.dataset.target === sectionId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update mobile bottom nav dock active styles
  document.querySelectorAll('.mobile-nav-tab').forEach(btn => {
    if (btn.dataset.target === sectionId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Close mobile drawer if opened
  closeMobileDrawer();
}

window.navigateTo = navigateTo;
window.toggleMobileDrawer = toggleMobileDrawer;
window.closeMobileDrawer = closeMobileDrawer;
window.openMobileDrawer = openMobileDrawer;

// ===================================================================
// 6. DASHBOARD & HABITS LOGIC
// ===================================================================

function renderHabits() {
  const container = document.getElementById('habitsList');
  if (!container) return;

  container.innerHTML = '';
  let completedCount = 0;

  AppState.habits.forEach((habit, index) => {
    if (habit.completed) completedCount++;

    const row = document.createElement('div');
    row.className = `habit-row ${habit.completed ? 'completed' : ''}`;

    row.innerHTML = `
      <label class="habit-label-group">
        <input type="checkbox" class="habit-checkbox" ${habit.completed ? 'checked' : ''} data-id="${habit.id}">
        <span class="habit-text">${habit.text}</span>
      </label>
      <button class="habit-delete-btn" data-id="${habit.id}" title="Remove habit">&times;</button>
    `;

    // Checkbox toggle
    const checkbox = row.querySelector('.habit-checkbox');
    checkbox.addEventListener('change', () => {
      habit.completed = checkbox.checked;
      AppState.save();
      if (checkbox.checked) {
        SoundEngine.playChime();
      }
      renderHabits();
      updateVitalityScore();
    });

    // Delete button
    const delBtn = row.querySelector('.habit-delete-btn');
    delBtn.addEventListener('click', () => {
      AppState.habits.splice(index, 1);
      AppState.save();
      renderHabits();
      updateVitalityScore();
    });

    container.appendChild(row);
  });

  const counterEl = document.getElementById('habitsCompletedCounter');
  if (counterEl) {
    counterEl.textContent = `${completedCount}/${AppState.habits.length} Done`;
  }
}

function updateWaterVisual() {
  const currentEl = document.getElementById('currentWaterMl');
  const wave = document.getElementById('waterWaveLevel');
  const badge = document.getElementById('waterPercentageBadge');
  const cupsContainer = document.getElementById('waterCupsContainer');

  const target = AppState.waterTargetMl || 2000;
  const current = AppState.waterCurrentMl || 0;
  const percent = Math.min(100, Math.round((current / target) * 100));

  if (currentEl) currentEl.textContent = current.toLocaleString();
  if (wave) wave.style.height = `${percent}%`;
  if (badge) badge.textContent = `${percent}%`;

  if (cupsContainer) {
    cupsContainer.innerHTML = '';
    const totalCups = 8;
    const cupsFilled = Math.min(totalCups, Math.floor((current / target) * totalCups));

    for (let i = 0; i < totalCups; i++) {
      const cup = document.createElement('div');
      cup.className = `cup-item ${i < cupsFilled ? 'filled' : ''}`;
      cup.innerHTML = '💧';
      cup.title = `Cup ${i + 1} (250 ml)`;
      cup.addEventListener('click', () => {
        // Toggle cup filling
        const newMl = (i + 1) * (target / totalCups);
        AppState.waterCurrentMl = Math.round(newMl);
        AppState.save();
        SoundEngine.playChime();
        updateWaterVisual();
        updateVitalityScore();
      });
      cupsContainer.appendChild(cup);
    }
  }

  if (percent >= 100 && current > 0) {
    triggerConfetti();
  }
}

function updateVitalityScore() {
  const habitsTotal = AppState.habits.length || 1;
  const habitsDone = AppState.habits.filter(h => h.completed).length;
  const habitRatio = habitsDone / habitsTotal;

  const waterTarget = AppState.waterTargetMl || 2000;
  const waterRatio = Math.min(1, AppState.waterCurrentMl / waterTarget);

  const moodScore = AppState.selectedMood ? 1 : 0.5;

  // Composite Score
  const totalScore = Math.round((habitRatio * 0.5 + waterRatio * 0.35 + moodScore * 0.15) * 100);

  const scoreText = document.getElementById('vitalityScoreNumber');
  const scoreCircle = document.getElementById('scoreCircle');
  const levelBadge = document.getElementById('userLevelBadge');

  if (scoreText) scoreText.textContent = `${totalScore}%`;

  if (scoreCircle) {
    // Circle circumference for r=50 is 2 * PI * 50 = 314.15
    const circumference = 314;
    const offset = circumference - (totalScore / 100) * circumference;
    scoreCircle.style.strokeDashoffset = offset;
  }

  if (levelBadge) {
    if (totalScore >= 90) {
      levelBadge.textContent = '🌟 Vitality Master';
      levelBadge.style.background = 'rgba(255, 230, 0, 0.3)';
    } else if (totalScore >= 60) {
      levelBadge.textContent = '⚡ Wellness Champion';
      levelBadge.style.background = 'rgba(16, 185, 129, 0.3)';
    } else if (totalScore >= 30) {
      levelBadge.textContent = '🌿 Blooming Habit';
      levelBadge.style.background = 'rgba(14, 165, 233, 0.3)';
    } else {
      levelBadge.textContent = '🌱 Fresh Starter';
      levelBadge.style.background = 'rgba(255, 255, 255, 0.25)';
    }
  }
}

function setMood(moodKey) {
  AppState.selectedMood = moodKey;
  AppState.save();

  document.querySelectorAll('.mood-btn').forEach(btn => {
    if (btn.dataset.mood === moodKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const adviceEl = document.getElementById('moodAdviceText');
  if (!adviceEl) return;

  const suggestions = {
    energized: "Wonderful energy! Channel it into a fun brisk walk, dancing, or trying a new workout routine!",
    happy: "Keep that radiant positivity flowing! Spread a friendly compliment or record today's gratitude.",
    calm: "Peaceful balance is true wealth. Perfect time for deep reading, gentle stretching, or peaceful tea.",
    tired: "Your body is asking for gentleness. Drink a tall glass of water, dim bright screens, and head to bed early tonight.",
    stressed: "Inhale through your nose for 4 seconds, exhale slowly for 7 seconds. You are safe, resilient, and capable."
  };

  adviceEl.textContent = suggestions[moodKey] || "Choose a mood above to receive friendly personalized wellness guidance.";
  SoundEngine.playChime();
  updateVitalityScore();
}

// ===================================================================
// TOAST NOTIFICATION SYSTEM
// ===================================================================

function showToast(message, icon = '✨') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ===================================================================
// FAMOUS QUOTES LOGIC & WISDOM WALL
// ===================================================================

let currentFamousQuoteIndex = 0;

function renderFamousQuoteInBanner(index = currentFamousQuoteIndex) {
  const quoteEl = document.getElementById('motivationalQuote');
  const authorEl = document.getElementById('quoteAuthor');
  const titleEl = document.getElementById('quoteAuthorTitle');

  const q = FAMOUS_QUOTES_DATABASE[index % FAMOUS_QUOTES_DATABASE.length];
  if (quoteEl) quoteEl.textContent = `"${q.quote}"`;
  if (authorEl) authorEl.textContent = `— ${q.author}`;
  if (titleEl) titleEl.textContent = q.title;
}

function nextFamousQuote() {
  currentFamousQuoteIndex = (currentFamousQuoteIndex + 1) % FAMOUS_QUOTES_DATABASE.length;
  renderFamousQuoteInBanner(currentFamousQuoteIndex);
  SoundEngine.playChime();
}

function copyQuoteToClipboard(text, author) {
  const full = `"${text}" — ${author}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(full).then(() => {
      showToast(`Quote by ${author} copied to clipboard!`, '📋');
    }).catch(() => {
      fallbackCopy(full, author);
    });
  } else {
    fallbackCopy(full, author);
  }
}

function fallbackCopy(fullText, author) {
  const ta = document.createElement('textarea');
  ta.value = fullText;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast(`Quote by ${author} copied!`, '📋');
}

function renderFamousQuotesWall(filterCategory = 'all') {
  const container = document.getElementById('famousQuotesGrid');
  if (!container) return;

  container.innerHTML = '';
  const filtered = FAMOUS_QUOTES_DATABASE.filter(q => filterCategory === 'all' || q.category === filterCategory);

  filtered.forEach(q => {
    const card = document.createElement('div');
    card.className = 'famous-quote-card';
    card.innerHTML = `
      <span class="quote-category-tag">${q.categoryLabel}</span>
      <p class="quote-body-text">"${q.quote}"</p>
      <div class="quote-card-footer">
        <div class="quote-author-info">
          <div class="author-avatar-circle">${q.avatar}</div>
          <div class="author-meta-text">
            <span class="author-name">${q.author}</span>
            <span class="author-credentials">${q.title}</span>
          </div>
        </div>
        <div class="quote-actions-row">
          <button class="btn btn-outline btn-sm copy-wall-quote-btn" title="Copy quote">
            📋 Copy
          </button>
        </div>
      </div>
    `;

    card.querySelector('.copy-wall-quote-btn').addEventListener('click', () => {
      copyQuoteToClipboard(q.quote, q.author);
    });

    container.appendChild(card);
  });
}

// ===================================================================
// FRUIT & SUPERFOOD ENCYCLOPEDIA LOGIC
// ===================================================================

let currentFruitPortionRatio = 1.0;
let activeFruitCategory = 'all';

function renderFruitGrid(filterCategory = activeFruitCategory, searchQuery = '') {
  const container = document.getElementById('fruitGrid');
  if (!container) return;

  container.innerHTML = '';

  const filtered = FRUITS_DATABASE.filter(fruit => {
    const matchesCategory = filterCategory === 'all' || fruit.category.includes(filterCategory);
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch = searchLower === '' ||
      fruit.name.toLowerCase().includes(searchLower) ||
      fruit.vitamins.toLowerCase().includes(searchLower) ||
      fruit.benefits.some(b => b.toLowerCase().includes(searchLower)) ||
      fruit.extraTags.some(t => t.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        No fruits found matching "${searchQuery}". Try searching "Vitamin C", "Potassium", "Keto", or "Berry"!
      </div>
    `;
    return;
  }

  const portionGrams = Math.round(100 * currentFruitPortionRatio);

  filtered.forEach(fruit => {
    const scaledCals = Math.round(fruit.calories * currentFruitPortionRatio);
    const scaledCarbs = (fruit.carbs * currentFruitPortionRatio).toFixed(1);
    const scaledFiber = (fruit.fiber * currentFruitPortionRatio).toFixed(1);
    const scaledFat = (fruit.fat * currentFruitPortionRatio).toFixed(1);
    const scaledProt = (fruit.protein * currentFruitPortionRatio).toFixed(1);

    const card = document.createElement('div');
    card.className = 'fruit-card';
    card.innerHTML = `
      <div class="fruit-header-banner" style="background: ${fruit.gradient};">
        <div class="fruit-icon-box">${fruit.emoji}</div>
        <span class="fruit-category-pill">${fruit.category[0]}</span>
      </div>

      <div class="fruit-card-body">
        <div class="fruit-title-row">
          <h4 class="fruit-name">${fruit.name}</h4>
          <span class="fruit-serving-tag">Serving: ${portionGrams}g</span>
        </div>

        <div class="fruit-macros-grid">
          <div class="macro-box-item cal">
            <span class="macro-tag">Calories</span>
            <span class="macro-val">${scaledCals}</span>
          </div>
          <div class="macro-box-item carb">
            <span class="macro-tag">Carbs</span>
            <span class="macro-val">${scaledCarbs}g</span>
          </div>
          <div class="macro-box-item fat">
            <span class="macro-tag">Fat</span>
            <span class="macro-val">${scaledFat}g</span>
          </div>
          <div class="macro-box-item prot">
            <span class="macro-tag">Protein</span>
            <span class="macro-val">${scaledProt}g</span>
          </div>
        </div>

        <div class="fruit-fiber-row">
          <span>🥦 Dietary Fiber: <strong class="fiber-badge">${scaledFiber}g</strong></span>
          <span class="gi-badge gi-${fruit.giLevel}">GI: ${fruit.gi}</span>
        </div>

        <div class="fruit-vitamins-line">
          <strong>Key Nutrients:</strong> ${fruit.vitamins}
        </div>

        <div class="fruit-benefits-section">
          <h5>Clinical Health Benefits:</h5>
          <ul class="fruit-benefits-bullets">
            ${fruit.benefits.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>

        <div class="fruit-card-actions">
          <button class="btn btn-outline btn-sm quick-fruit-details-btn" data-id="${fruit.id}" style="flex: 1;">
            🔍 Pairing Tips
          </button>
          <button class="btn btn-primary btn-sm quick-log-fruit-btn" data-id="${fruit.id}" style="flex: 1.3;">
            + Log to Meals
          </button>
        </div>
      </div>
    `;

    // Quick log action
    card.querySelector('.quick-log-fruit-btn').addEventListener('click', () => {
      logFruitToDiary(fruit.id);
    });

    // Details modal action
    card.querySelector('.quick-fruit-details-btn').addEventListener('click', () => {
      openFruitModal(fruit.id);
    });

    container.appendChild(card);
  });
}

function logFruitToDiary(fruitId) {
  const fruit = FRUITS_DATABASE.find(f => f.id === fruitId);
  if (!fruit) return;

  const portionGrams = Math.round(100 * currentFruitPortionRatio);
  const scaledCals = Math.round(fruit.calories * currentFruitPortionRatio);
  const scaledCarbs = Math.round(fruit.carbs * currentFruitPortionRatio);
  const scaledFat = Math.round(fruit.fat * currentFruitPortionRatio);
  const scaledProt = Math.round(fruit.protein * currentFruitPortionRatio);

  AppState.loggedFoods.push({
    name: `${fruit.emoji} ${fruit.name} (${portionGrams}g)`,
    calories: scaledCals,
    protein: scaledProt,
    carbs: scaledCarbs,
    fat: scaledFat
  });

  AppState.save();
  SoundEngine.playChime();
  renderLoggedFoods();
  showToast(`${fruit.name} (${portionGrams}g) logged to Food Diary!`, fruit.emoji);
}

let activeModalFruitId = null;

function openFruitModal(fruitId) {
  const fruit = FRUITS_DATABASE.find(f => f.id === fruitId);
  if (!fruit) return;

  activeModalFruitId = fruitId;
  const portionGrams = Math.round(100 * currentFruitPortionRatio);

  document.getElementById('modalFruitEmoji').textContent = fruit.emoji;
  document.getElementById('modalFruitName').textContent = `${fruit.name} (${portionGrams}g)`;
  document.getElementById('modalFruitCategory').textContent = fruit.category[0].toUpperCase();

  document.getElementById('modalFruitCals').textContent = `${Math.round(fruit.calories * currentFruitPortionRatio)} kcal`;
  document.getElementById('modalFruitCarbs').textContent = `${(fruit.carbs * currentFruitPortionRatio).toFixed(1)}g`;
  document.getElementById('modalFruitFiber').textContent = `${(fruit.fiber * currentFruitPortionRatio).toFixed(1)}g`;
  document.getElementById('modalFruitFat').textContent = `${(fruit.fat * currentFruitPortionRatio).toFixed(1)}g`;
  document.getElementById('modalFruitProtein').textContent = `${(fruit.protein * currentFruitPortionRatio).toFixed(1)}g`;

  const benefitsUl = document.getElementById('modalFruitBenefitsList');
  benefitsUl.innerHTML = fruit.benefits.map(b => `<li>${b}</li>`).join('');

  document.getElementById('modalFruitPairingText').textContent = fruit.pairing;

  const tagsContainer = document.getElementById('modalFruitExtraTags');
  tagsContainer.innerHTML = [
    `<span class="fruit-extra-pill">Glycemic Index: ${fruit.gi}</span>`,
    `<span class="fruit-extra-pill">Nutrients: ${fruit.vitamins}</span>`,
    ...fruit.extraTags.map(t => `<span class="fruit-extra-pill">${t}</span>`)
  ].join('');

  const modal = document.getElementById('fruitDetailsModal');
  if (modal) modal.classList.add('open');
}

function closeFruitModal() {
  const modal = document.getElementById('fruitDetailsModal');
  if (modal) modal.classList.remove('open');
  activeModalFruitId = null;
}

// ===================================================================
// 6.2. DAILY WELLNESS FOCUS & DASHBOARD MACRO SUMMARY
// ===================================================================

let currentDailyFocusIndex = 0;

function renderDailyFocus(index = currentDailyFocusIndex) {
  const titleEl = document.getElementById('dailyFocusTitle');
  const textEl = document.getElementById('dailyFocusText');
  if (!DAILY_WELLNESS_FOCUS_DATABASE || DAILY_WELLNESS_FOCUS_DATABASE.length === 0) return;
  
  const focus = DAILY_WELLNESS_FOCUS_DATABASE[index % DAILY_WELLNESS_FOCUS_DATABASE.length];
  if (titleEl) titleEl.textContent = focus.title;
  if (textEl) textEl.textContent = focus.text;
}

function nextDailyFocus() {
  currentDailyFocusIndex = (currentDailyFocusIndex + 1) % DAILY_WELLNESS_FOCUS_DATABASE.length;
  renderDailyFocus(currentDailyFocusIndex);
  SoundEngine.playChime();
}

function renderDashboardMacroSummary() {
  let totalCals = 0;
  let totalProt = 0;
  let totalCarbs = 0;
  let totalFat = 0;
  let totalFiber = 0;

  AppState.loggedFoods.forEach(f => {
    totalCals += parseInt(f.calories, 10) || 0;
    totalProt += parseInt(f.protein, 10) || 0;
    totalCarbs += parseInt(f.carbs, 10) || 0;
    totalFat += parseInt(f.fat, 10) || 0;
    if (f.fiber) {
      totalFiber += parseFloat(f.fiber) || 0;
    } else {
      totalFiber += Math.round((parseInt(f.carbs, 10) || 0) * 0.18);
    }
  });

  const calsEl = document.getElementById('dashTotalCals');
  const protEl = document.getElementById('dashTotalProt');
  const carbsEl = document.getElementById('dashTotalCarbs');
  const fatEl = document.getElementById('dashTotalFat');
  const fiberEl = document.getElementById('dashTotalFiber');

  if (calsEl) calsEl.textContent = `${totalCals} kcal`;
  if (protEl) protEl.textContent = `${totalProt}g`;
  if (carbsEl) carbsEl.textContent = `${totalCarbs}g`;
  if (fatEl) fatEl.textContent = `${totalFat}g`;
  if (fiberEl) fiberEl.textContent = `${totalFiber.toFixed(1)}g`;
}

// ===================================================================
// 6.3. WHOLE FOODS & SUPERFOODS GUIDE LOGIC
// ===================================================================

let currentWholeFoodPortionRatio = 1.0;
let activeWholeFoodCategory = 'all';
let activeModalWholeFoodId = null;

function renderWholeFoodsGrid(filterCategory = activeWholeFoodCategory, searchQuery = '') {
  const container = document.getElementById('wholeFoodsGrid');
  if (!container) return;

  container.innerHTML = '';

  const filtered = WHOLE_FOODS_DATABASE.filter(food => {
    let matchesCategory = true;
    if (filterCategory === 'all') {
      matchesCategory = true;
    } else if (filterCategory === 'high-protein') {
      matchesCategory = food.protein >= 15;
    } else if (filterCategory === 'anti-inflammatory') {
      matchesCategory = food.benefits.some(b => b.toLowerCase().includes('inflammatory') || b.toLowerCase().includes('antioxidant') || b.toLowerCase().includes('nrf2') || b.toLowerCase().includes('omega-3'));
    } else {
      matchesCategory = food.category === filterCategory;
    }

    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch = searchLower === '' ||
      food.name.toLowerCase().includes(searchLower) ||
      food.vitamins.toLowerCase().includes(searchLower) ||
      food.benefits.some(b => b.toLowerCase().includes(searchLower)) ||
      food.extraTags.some(t => t.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        No whole foods found matching "${searchQuery}". Try "Broccoli", "Salmon", "Chia", or "Protein"!
      </div>
    `;
    return;
  }

  const portionGrams = Math.round(100 * currentWholeFoodPortionRatio);

  filtered.forEach(food => {
    const scaledCals = Math.round(food.calories * currentWholeFoodPortionRatio);
    const scaledProt = (food.protein * currentWholeFoodPortionRatio).toFixed(1);
    const scaledCarbs = (food.carbs * currentWholeFoodPortionRatio).toFixed(1);
    const scaledFiber = (food.fiber * currentWholeFoodPortionRatio).toFixed(1);
    const scaledFat = (food.fat * currentWholeFoodPortionRatio).toFixed(1);

    const card = document.createElement('div');
    card.className = 'wholefood-card';
    card.innerHTML = `
      <div class="wf-card-header">
        <div class="wf-icon-box">${food.emoji}</div>
        <div class="wf-header-text">
          <h4 class="wf-name">${food.name}</h4>
          <span class="wf-category-tag">${food.categoryLabel}</span>
        </div>
      </div>

      <div class="wf-card-body">
        <div class="wf-serving-badge">Serving Size: ${portionGrams}g</div>

        <div class="wf-macros-grid">
          <div class="wf-macro-box cal">
            <span class="macro-label">Calories</span>
            <span class="macro-val">${scaledCals}</span>
          </div>
          <div class="wf-macro-box prot">
            <span class="macro-label">Protein</span>
            <span class="macro-val">${scaledProt}g</span>
          </div>
          <div class="wf-macro-box carb">
            <span class="macro-label">Carbs</span>
            <span class="macro-val">${scaledCarbs}g</span>
          </div>
          <div class="wf-macro-box fiber">
            <span class="macro-label">Fiber</span>
            <span class="macro-val">${scaledFiber}g</span>
          </div>
          <div class="wf-macro-box fat">
            <span class="macro-label">Fat</span>
            <span class="macro-val">${scaledFat}g</span>
          </div>
        </div>

        <div class="wf-vitamins-row">
          <strong>Key Actives:</strong> ${food.vitamins}
        </div>

        <div class="wf-benefits-list">
          <h5>Clinical Benefits:</h5>
          <ul>
            ${food.benefits.slice(0, 2).map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>

        <div class="wf-card-actions">
          <button class="btn btn-outline btn-sm wf-inspect-btn" data-id="${food.id}" style="flex: 1;">
            🔍 Full Profile
          </button>
          <button class="btn btn-primary btn-sm wf-log-btn" data-id="${food.id}" style="flex: 1.2;">
            + Log Food
          </button>
        </div>
      </div>
    `;

    card.querySelector('.wf-inspect-btn').addEventListener('click', () => {
      openWholeFoodModal(food.id);
    });

    card.querySelector('.wf-log-btn').addEventListener('click', () => {
      logWholeFoodToDiary(food.id);
    });

    container.appendChild(card);
  });
}

function logWholeFoodToDiary(foodId) {
  const food = WHOLE_FOODS_DATABASE.find(f => f.id === foodId);
  if (!food) return;

  const portionGrams = Math.round(100 * currentWholeFoodPortionRatio);
  const scaledCals = Math.round(food.calories * currentWholeFoodPortionRatio);
  const scaledProt = Math.round(food.protein * currentWholeFoodPortionRatio);
  const scaledCarbs = Math.round(food.carbs * currentWholeFoodPortionRatio);
  const scaledFiber = Math.round(food.fiber * currentWholeFoodPortionRatio);
  const scaledFat = Math.round(food.fat * currentWholeFoodPortionRatio);

  AppState.loggedFoods.push({
    name: `${food.emoji} ${food.name} (${portionGrams}g)`,
    calories: scaledCals,
    protein: scaledProt,
    carbs: scaledCarbs,
    fiber: scaledFiber,
    fat: scaledFat
  });

  AppState.save();
  SoundEngine.playChime();
  renderLoggedFoods();
  showToast(`${food.name} (${portionGrams}g) logged to Food Diary!`, food.emoji);
}

function openWholeFoodModal(foodId) {
  const food = WHOLE_FOODS_DATABASE.find(f => f.id === foodId);
  if (!food) return;

  activeModalWholeFoodId = foodId;
  const portionGrams = Math.round(100 * currentWholeFoodPortionRatio);

  const emojiEl = document.getElementById('modalWfEmoji');
  const nameEl = document.getElementById('modalWfName');
  const catEl = document.getElementById('modalWfCategory');
  const calsEl = document.getElementById('modalWfCals');
  const protEl = document.getElementById('modalWfProtein');
  const carbsEl = document.getElementById('modalWfCarbs');
  const fiberEl = document.getElementById('modalWfFiber');
  const fatEl = document.getElementById('modalWfFat');
  const benefitsEl = document.getElementById('modalWfBenefitsList');
  const pairingEl = document.getElementById('modalWfPairingText');
  const tagsEl = document.getElementById('modalWfExtraTags');

  if (emojiEl) emojiEl.textContent = food.emoji;
  if (nameEl) nameEl.textContent = `${food.name} (${portionGrams}g)`;
  if (catEl) catEl.textContent = food.categoryLabel;

  if (calsEl) calsEl.textContent = `${Math.round(food.calories * currentWholeFoodPortionRatio)} kcal`;
  if (protEl) protEl.textContent = `${(food.protein * currentWholeFoodPortionRatio).toFixed(1)}g`;
  if (carbsEl) carbsEl.textContent = `${(food.carbs * currentWholeFoodPortionRatio).toFixed(1)}g`;
  if (fiberEl) fiberEl.textContent = `${(food.fiber * currentWholeFoodPortionRatio).toFixed(1)}g`;
  if (fatEl) fatEl.textContent = `${(food.fat * currentWholeFoodPortionRatio).toFixed(1)}g`;

  if (benefitsEl) {
    benefitsEl.innerHTML = food.benefits.map(b => `<li>${b}</li>`).join('');
  }

  if (pairingEl) pairingEl.textContent = food.pairing;

  if (tagsEl) {
    tagsEl.innerHTML = [
      `<span class="fruit-extra-pill">Glycemic Profile: ${food.gi}</span>`,
      `<span class="fruit-extra-pill">Actives: ${food.vitamins}</span>`,
      ...food.extraTags.map(t => `<span class="fruit-extra-pill">${t}</span>`)
    ].join('');
  }

  const modal = document.getElementById('wholeFoodDetailsModal');
  if (modal) modal.classList.add('open');
}

function closeWholeFoodModal() {
  const modal = document.getElementById('wholeFoodDetailsModal');
  if (modal) modal.classList.remove('open');
  activeModalWholeFoodId = null;
}

// ===================================================================
// 6.4. NUTRITION & FOOD AWARENESS BLOG LOGIC
// ===================================================================

let activeBlogCategory = 'all';
let activeModalArticleId = null;

function renderBlogArticles(filterCategory = activeBlogCategory, searchQuery = '') {
  const container = document.getElementById('blogArticlesGrid');
  if (!container) return;

  container.innerHTML = '';

  const filtered = BLOG_ARTICLES_DATABASE.filter(art => {
    const matchesCat = filterCategory === 'all' || art.category === filterCategory;
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch = searchLower === '' ||
      art.title.toLowerCase().includes(searchLower) ||
      art.summary.toLowerCase().includes(searchLower) ||
      art.author.toLowerCase().includes(searchLower) ||
      art.takeaways.some(t => t.toLowerCase().includes(searchLower));

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        No articles found matching "${searchQuery}". Try searching "UPF", "Microbiome", "Glucose", or "Protein"!
      </div>
    `;
    return;
  }

  filtered.forEach(article => {
    const card = document.createElement('div');
    card.className = 'blog-article-card';
    card.innerHTML = `
      <div class="blog-card-header">
        <span class="blog-category-badge">${article.categoryLabel}</span>
        <span class="blog-read-time">⏱️ ${article.readTime}</span>
      </div>

      <div class="blog-card-body">
        <div class="blog-article-icon">${article.emoji}</div>
        <h3 class="blog-article-title">${article.title}</h3>
        <p class="blog-article-summary">${article.summary}</p>
        
        <div class="blog-takeaways-preview">
          <strong>Key Clinical Insights:</strong>
          <ul>
            ${article.takeaways.slice(0, 2).map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="blog-card-footer">
        <div class="blog-author-meta">
          <span class="blog-author-avatar">${article.authorAvatar}</span>
          <span class="blog-author-name">${article.author}</span>
        </div>
        <button class="btn btn-primary btn-sm read-article-btn" data-id="${article.id}">
          Read Masterclass 📖
        </button>
      </div>
    `;

    card.querySelector('.read-article-btn').addEventListener('click', () => {
      openBlogModal(article.id);
    });

    container.appendChild(card);
  });
}

function openBlogModal(articleId) {
  const article = BLOG_ARTICLES_DATABASE.find(a => a.id === articleId);
  if (!article) return;

  activeModalArticleId = articleId;

  const catEl = document.getElementById('blogModalCategory');
  const readEl = document.getElementById('blogModalReadTime');
  const titleEl = document.getElementById('blogModalTitle');
  const authorAvatarEl = document.getElementById('blogModalAuthorAvatar');
  const authorEl = document.getElementById('blogModalAuthor');
  const dateEl = document.getElementById('blogModalDate');
  const takeawaysEl = document.getElementById('blogModalTakeawaysList');
  const contentEl = document.getElementById('blogModalContent');

  if (catEl) catEl.textContent = article.categoryLabel;
  if (readEl) readEl.textContent = article.readTime;
  if (titleEl) titleEl.textContent = article.title;
  if (authorAvatarEl) authorAvatarEl.textContent = article.authorAvatar;
  if (authorEl) authorEl.textContent = article.author;
  if (dateEl) dateEl.textContent = article.date;

  if (takeawaysEl) {
    takeawaysEl.innerHTML = article.takeaways.map(t => `<li>${t}</li>`).join('');
  }

  if (contentEl) {
    contentEl.innerHTML = article.contentHtml;
  }

  const modal = document.getElementById('blogReaderModal');
  if (modal) modal.classList.add('open');
}

function closeBlogModal() {
  const modal = document.getElementById('blogReaderModal');
  if (modal) modal.classList.remove('open');
  activeModalArticleId = null;
}


// ===================================================================
// 7. EXERCISE EXPLORER & ROUTINE BUILDER
// ===================================================================

function renderExerciseGrid(filterCategory = 'all', searchQuery = '') {
  const container = document.getElementById('exerciseGrid');
  if (!container) return;

  container.innerHTML = '';

  const filtered = EXERCISES_DATABASE.filter(item => {
    const matchesCategory = filterCategory === 'all' || item.category.includes(filterCategory);
    const matchesSearch = searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.muscle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        No movements matched your search. Try "squat", "pushup", or select "All Movements".
      </div>
    `;
    return;
  }

  filtered.forEach(ex => {
    const inRoutine = AppState.routineQueue.some(r => r.id === ex.id);

    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.innerHTML = `
      <div class="exercise-card-header">
        <div class="exercise-icon-badge">${ex.icon}</div>
        <span class="exercise-level-tag tag-${ex.level}">${ex.level}</span>
      </div>
      <div class="exercise-card-body">
        <h4 class="exercise-name">${ex.name}</h4>
        <div class="exercise-meta-row">
          <span>🎯 ${ex.muscle}</span>
          <span>🔥 ~${ex.cals} kcal/set</span>
        </div>
        <p class="exercise-description">${ex.desc}</p>
        <div class="exercise-cue-box">
          <strong>Form Cue:</strong> ${ex.cue}
        </div>
      </div>
      <div class="exercise-card-footer">
        <button class="btn btn-sm ${inRoutine ? 'btn-secondary' : 'btn-outline'} add-routine-btn" data-id="${ex.id}">
          ${inRoutine ? '✓ In Routine' : '+ Add to Routine'}
        </button>
      </div>
    `;

    const addBtn = card.querySelector('.add-routine-btn');
    addBtn.addEventListener('click', () => {
      toggleExerciseInRoutine(ex);
      renderExerciseGrid(filterCategory, searchQuery);
    });

    container.appendChild(card);
  });
}

function toggleExerciseInRoutine(exercise) {
  const index = AppState.routineQueue.findIndex(r => r.id === exercise.id);
  if (index > -1) {
    AppState.routineQueue.splice(index, 1);
  } else {
    AppState.routineQueue.push(exercise);
    SoundEngine.playChime();
  }
  AppState.save();
  updateRoutineTray();
}

function updateRoutineTray() {
  const countEl = document.getElementById('routineCount');
  const previewEl = document.getElementById('routineNamesPreview');
  const startBtn = document.getElementById('startCustomRoutineBtn');

  const count = AppState.routineQueue.length;
  if (countEl) countEl.textContent = count.toString();

  if (previewEl) {
    if (count === 0) {
      previewEl.textContent = 'Click "+ Add to Routine" on any exercise to assemble your customized workout.';
    } else {
      previewEl.textContent = AppState.routineQueue.map(e => e.name).join(' • ');
    }
  }

  if (startBtn) {
    startBtn.disabled = count === 0;
  }
}

// ===================================================================
// 8. 7-MINUTE WORKOUT & HIIT TIMERS
// ===================================================================

const SevenMinCoach = {
  currentIndex: 0,
  secondsLeft: 30,
  timerInterval: null,
  isRunning: false,

  openModal() {
    const modal = document.getElementById('sevenMinModal');
    if (modal) modal.classList.add('open');
    this.currentIndex = 0;
    this.secondsLeft = SEVEN_MIN_WORKOUT[0].duration;
    this.isRunning = false;
    this.updateUI();
  },

  closeModal() {
    this.pause();
    const modal = document.getElementById('sevenMinModal');
    if (modal) modal.classList.remove('open');
  },

  togglePlay() {
    if (this.isRunning) {
      this.pause();
    } else {
      this.start();
    }
  },

  start() {
    this.isRunning = true;
    const btn = document.getElementById('coachTogglePlayBtn');
    if (btn) btn.textContent = '⏸️ Pause';
    SoundEngine.playBeep(true);

    this.timerInterval = setInterval(() => {
      this.secondsLeft--;
      if (this.secondsLeft <= 3 && this.secondsLeft > 0) {
        SoundEngine.playBeep(false);
      }

      if (this.secondsLeft <= 0) {
        SoundEngine.playBeep(true);
        this.next();
      } else {
        this.updateUI();
      }
    }, 1000);
    this.updateUI();
  },

  pause() {
    this.isRunning = false;
    clearInterval(this.timerInterval);
    const btn = document.getElementById('coachTogglePlayBtn');
    if (btn) btn.textContent = '▶️ Resume';
    this.updateUI();
  },

  next() {
    if (this.currentIndex < SEVEN_MIN_WORKOUT.length - 1) {
      this.currentIndex++;
      this.secondsLeft = SEVEN_MIN_WORKOUT[this.currentIndex].duration;
      this.updateUI();
    } else {
      this.pause();
      triggerConfetti();
      alert("🎉 Fantastic job! You crushed your 7-Minute Workout! Drink some water and celebrate!");
      this.closeModal();
    }
  },

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.secondsLeft = SEVEN_MIN_WORKOUT[this.currentIndex].duration;
      this.updateUI();
    }
  },

  updateUI() {
    const current = SEVEN_MIN_WORKOUT[this.currentIndex];
    const isRest = current.name.includes('Rest');

    const badge = document.getElementById('coachStageBadge');
    const title = document.getElementById('coachExerciseTitle');
    const cue = document.getElementById('coachExerciseCue');
    const clock = document.getElementById('coachCountdown');
    const nextPreview = document.getElementById('coachNextTitle');
    const progressFill = document.getElementById('coachProgressBar');

    if (badge) {
      badge.textContent = isRest ? 'REST & RECHARGE' : `EXERCISE ${Math.floor(this.currentIndex / 2) + 1} OF 8`;
      badge.style.background = isRest ? '#e0f2fe' : 'var(--color-primary-light)';
      badge.style.color = isRest ? '#0284c7' : 'var(--color-primary)';
    }

    if (title) title.textContent = current.name;
    if (cue) cue.textContent = current.cue;
    if (clock) clock.textContent = this.secondsLeft < 10 ? `0${this.secondsLeft}` : this.secondsLeft;

    if (nextPreview) {
      const nextEx = SEVEN_MIN_WORKOUT[this.currentIndex + 1];
      nextPreview.textContent = nextEx ? nextEx.name : 'Finish & Stretch!';
    }

    if (progressFill) {
      const pct = (this.currentIndex / SEVEN_MIN_WORKOUT.length) * 100;
      progressFill.style.width = `${pct}%`;
    }
  }
};

const HiitTimer = {
  workTime: 30,
  restTime: 15,
  totalRounds: 8,
  prepTime: 5,

  currentRound: 1,
  currentPhase: 'prep', // 'prep', 'work', 'rest'
  secondsLeft: 5,
  interval: null,
  isPaused: false,

  openModal() {
    const modal = document.getElementById('hiitTimerModal');
    if (modal) modal.classList.add('open');
    document.getElementById('hiitSetupView').classList.remove('hidden');
    document.getElementById('hiitRunningView').classList.add('hidden');
    this.stop();
  },

  closeModal() {
    this.stop();
    const modal = document.getElementById('hiitTimerModal');
    if (modal) modal.classList.remove('open');
  },

  launch() {
    this.workTime = parseInt(document.getElementById('hiitWorkSeconds').value, 10) || 30;
    this.restTime = parseInt(document.getElementById('hiitRestSeconds').value, 10) || 15;
    this.totalRounds = parseInt(document.getElementById('hiitRounds').value, 10) || 8;
    this.prepTime = parseInt(document.getElementById('hiitPrepSeconds').value, 10) || 5;

    this.currentRound = 1;
    this.currentPhase = 'prep';
    this.secondsLeft = this.prepTime;
    this.isPaused = false;

    document.getElementById('hiitSetupView').classList.add('hidden');
    document.getElementById('hiitRunningView').classList.remove('hidden');

    this.updateUI();
    SoundEngine.playBeep(true);

    this.interval = setInterval(() => {
      if (this.isPaused) return;

      this.secondsLeft--;
      if (this.secondsLeft <= 3 && this.secondsLeft > 0) {
        SoundEngine.playBeep(false);
      }

      if (this.secondsLeft <= 0) {
        SoundEngine.playBeep(true);
        this.advancePhase();
      } else {
        this.updateUI();
      }
    }, 1000);
  },

  advancePhase() {
    if (this.currentPhase === 'prep') {
      this.currentPhase = 'work';
      this.secondsLeft = this.workTime;
    } else if (this.currentPhase === 'work') {
      if (this.currentRound >= this.totalRounds) {
        // Workout Finished!
        this.stop();
        triggerConfetti();
        alert('🔥 Incredble effort! HIIT Workout Completed!');
        this.closeModal();
        return;
      }
      this.currentPhase = 'rest';
      this.secondsLeft = this.restTime;
    } else if (this.currentPhase === 'rest') {
      this.currentRound++;
      this.currentPhase = 'work';
      this.secondsLeft = this.workTime;
    }
    this.updateUI();
  },

  togglePause() {
    this.isPaused = !this.isPaused;
    const btn = document.getElementById('hiitPauseResumeBtn');
    if (btn) btn.textContent = this.isPaused ? 'Resume' : 'Pause';
  },

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    document.getElementById('hiitSetupView').classList.remove('hidden');
    document.getElementById('hiitRunningView').classList.add('hidden');
  },

  updateUI() {
    const badge = document.getElementById('hiitPhaseBadge');
    const clock = document.getElementById('hiitClockDisplay');
    const roundCur = document.getElementById('hiitCurrentRound');
    const roundTot = document.getElementById('hiitTotalRounds');

    if (badge) {
      badge.className = `hiit-phase-badge ${this.currentPhase}`;
      badge.textContent = this.currentPhase.toUpperCase();
    }

    if (clock) {
      clock.textContent = this.secondsLeft < 10 ? `0${this.secondsLeft}` : this.secondsLeft;
    }

    if (roundCur) roundCur.textContent = this.currentRound.toString();
    if (roundTot) roundTot.textContent = this.totalRounds.toString();
  }
};

// ===================================================================
// 9. NUTRITION LOGGER & RECIPES
// ===================================================================

let macroChartInstance = null;

function renderLoggedFoods() {
  const container = document.getElementById('loggedFoodsContainer');
  if (!container) return;

  container.innerHTML = '';

  if (AppState.loggedFoods.length === 0) {
    container.innerHTML = '<div class="empty-state">No foods logged today yet. Add your breakfast or snack above!</div>';
  } else {
    AppState.loggedFoods.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'logged-food-row';
      row.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <div class="food-meta">${item.calories} kcal • P: ${item.protein}g | C: ${item.carbs}g | F: ${item.fat}g</div>
        </div>
        <button class="habit-delete-btn" title="Remove food" data-index="${index}">&times;</button>
      `;

      row.querySelector('.habit-delete-btn').addEventListener('click', () => {
        AppState.loggedFoods.splice(index, 1);
        AppState.save();
        renderLoggedFoods();
      });

      container.appendChild(row);
    });
  }

  updateNutritionChart();
  renderDashboardMacroSummary();
}

function updateNutritionChart() {
  let totalCals = 0;
  let totalProt = 0;
  let totalCarbs = 0;
  let totalFat = 0;

  AppState.loggedFoods.forEach(f => {
    totalCals += parseInt(f.calories, 10) || 0;
    totalProt += parseInt(f.protein, 10) || 0;
    totalCarbs += parseInt(f.carbs, 10) || 0;
    totalFat += parseInt(f.fat, 10) || 0;
  });

  const calsEl = document.getElementById('totalCaloriesDisplay');
  const protEl = document.getElementById('totalProteinDisplay');
  const carbsEl = document.getElementById('totalCarbsDisplay');
  const fatEl = document.getElementById('totalFatDisplay');

  if (calsEl) calsEl.textContent = `${totalCals} kcal`;
  if (protEl) protEl.textContent = `${totalProt} g`;
  if (carbsEl) carbsEl.textContent = `${totalCarbs} g`;
  if (fatEl) fatEl.textContent = `${totalFat} g`;

  // Draw or update Chart.js
  const canvas = document.getElementById('macroDonutChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const dataValues = [
    totalProt * 4,
    totalCarbs * 4,
    totalFat * 9
  ];

  // If all zero, default to small placeholder
  const isZero = totalProt === 0 && totalCarbs === 0 && totalFat === 0;
  const chartData = isZero ? [30, 40, 30] : dataValues;

  if (macroChartInstance) {
    macroChartInstance.data.datasets[0].data = chartData;
    macroChartInstance.update();
  } else {
    macroChartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Protein', 'Carbs', 'Healthy Fat'],
        datasets: [{
          data: chartData,
          backgroundColor: ['#e11d48', '#f59e0b', '#0ea5e9'],
          borderWidth: 0,
          cutout: '70%'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.raw} kcal`;
              }
            }
          }
        }
      }
    });
  }
}

function renderRecipes(filter = 'all') {
  const container = document.getElementById('recipeGrid');
  if (!container) return;

  container.innerHTML = '';

  const filtered = RECIPES_DATABASE.filter(r => filter === 'all' || r.category === filter);

  filtered.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <div class="recipe-header-banner">
        <span class="recipe-banner-icon">${recipe.icon}</span>
        <span class="recipe-time-tag">⏱️ ${recipe.time}</span>
      </div>
      <div class="recipe-body">
        <h4>${recipe.name}</h4>
        <div class="recipe-macros-strip">
          <span>🔥 ${recipe.cals} kcal</span>
          <span>🥩 P: ${recipe.protein}g</span>
          <span>🌾 C: ${recipe.carbs}g</span>
          <span>🥑 F: ${recipe.fat}g</span>
        </div>
        <p style="font-size: 0.85rem; margin-bottom: 0.75rem;">${recipe.desc}</p>
        <div class="recipe-ingredients-list">
          <strong>Key Ingredients:</strong>
          <div>${recipe.ingredients.join(', ')}</div>
        </div>
        <div style="font-size: 0.8rem; background: var(--bg-subtle); padding: 0.65rem; border-radius: var(--radius-sm);">
          <strong>How to Prepare:</strong> ${recipe.instructions}
        </div>
      </div>
      <div style="padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-light);">
        <button class="btn btn-outline btn-sm btn-block log-recipe-btn" data-id="${recipe.id}">
          + Quick-Log to My Food Diary
        </button>
      </div>
    `;

    card.querySelector('.log-recipe-btn').addEventListener('click', () => {
      AppState.loggedFoods.push({
        name: recipe.name,
        calories: recipe.cals,
        protein: recipe.protein,
        carbs: recipe.carbs,
        fat: recipe.fat
      });
      AppState.save();
      SoundEngine.playChime();
      renderLoggedFoods();
      alert(`🥗 "${recipe.name}" was added to your daily food log!`);
    });

    container.appendChild(card);
  });
}

function renderHealthySwaps() {
  const container = document.getElementById('swapsGrid');
  if (!container) return;

  container.innerHTML = '';
  HEALTHY_SWAPS.forEach(swap => {
    const item = document.createElement('div');
    item.className = 'swap-item';
    item.innerHTML = `
      <div class="swap-from">❌ ${swap.from}</div>
      <div class="swap-arrow">⬇️ Upgrade to...</div>
      <div class="swap-to">✅ ${swap.to}</div>
      <div class="swap-benefit">${swap.benefit}</div>
    `;
    container.appendChild(item);
  });
}

// ===================================================================
// 10. HEALTH CALCULATORS SUITE
// ===================================================================

function calculateBMI() {
  const isMetric = document.getElementById('bmiMetricBtn').classList.contains('active');
  let weightKg = 0;
  let heightM = 0;

  if (isMetric) {
    weightKg = parseFloat(document.getElementById('bmiWeightKg').value) || 0;
    const heightCm = parseFloat(document.getElementById('bmiHeightCm').value) || 0;
    heightM = heightCm / 100;
  } else {
    const weightLbs = parseFloat(document.getElementById('bmiWeightLbs').value) || 0;
    const feet = parseFloat(document.getElementById('bmiHeightFt').value) || 0;
    const inches = parseFloat(document.getElementById('bmiHeightIn').value) || 0;
    const totalInches = (feet * 12) + inches;

    weightKg = weightLbs * 0.453592;
    heightM = (totalInches * 2.54) / 100;
  }

  if (weightKg <= 0 || heightM <= 0) return;

  const bmi = (weightKg / (heightM * heightM)).toFixed(1);
  const num = parseFloat(bmi);

  const scoreText = document.getElementById('bmiScoreText');
  const catText = document.getElementById('bmiCategoryText');
  const pointer = document.getElementById('bmiMeterPointer');

  if (scoreText) scoreText.textContent = bmi;

  let category = '';
  let pointerPercent = 50;

  if (num < 18.5) {
    category = 'Underweight';
    pointerPercent = Math.min(20, (num / 18.5) * 25);
  } else if (num < 25) {
    category = 'Normal Weight (Healthy Range)';
    pointerPercent = 25 + ((num - 18.5) / (24.9 - 18.5)) * 25;
  } else if (num < 30) {
    category = 'Overweight';
    pointerPercent = 50 + ((num - 25) / (29.9 - 25)) * 25;
  } else {
    category = 'Obesity Range';
    pointerPercent = Math.min(95, 75 + ((num - 30) / 15) * 20);
  }

  if (catText) catText.textContent = category;
  if (pointer) pointer.style.left = `${pointerPercent}%`;
}

function calculateBmrTdee() {
  const gender = document.getElementById('bmrGender').value;
  const age = parseFloat(document.getElementById('bmrAge').value) || 28;
  const weight = parseFloat(document.getElementById('bmrWeight').value) || 65;
  const height = parseFloat(document.getElementById('bmrHeight').value) || 168;
  const activity = parseFloat(document.getElementById('bmrActivity').value) || 1.375;

  // Mifflin-St Jeor Formula
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  if (gender === 'male') {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  bmr = Math.round(bmr);
  const tdee = Math.round(bmr * activity);

  const loss = Math.max(1200, tdee - 400);
  const gain = tdee + 300;

  const bmrDisp = document.getElementById('bmrValueDisplay');
  const tdeeDisp = document.getElementById('tdeeValueDisplay');
  const lossDisp = document.getElementById('targetLossDisplay');
  const mainDisp = document.getElementById('targetMaintainDisplay');
  const gainDisp = document.getElementById('targetGainDisplay');

  if (bmrDisp) bmrDisp.textContent = `${bmr.toLocaleString()} kcal/day`;
  if (tdeeDisp) tdeeDisp.textContent = `${tdee.toLocaleString()} kcal/day`;
  if (lossDisp) lossDisp.textContent = `${loss.toLocaleString()} kcal/day`;
  if (mainDisp) mainDisp.textContent = `${tdee.toLocaleString()} kcal/day`;
  if (gainDisp) gainDisp.textContent = `${gain.toLocaleString()} kcal/day`;

  // Auto-fill macro calculator calorie input
  const macroInput = document.getElementById('macroCalorieInput');
  if (macroInput) macroInput.value = tdee;
}

function calculateMacros() {
  const calories = parseFloat(document.getElementById('macroCalorieInput').value) || 2000;
  const goal = document.getElementById('macroGoalSelect').value;

  let protPct = 0.3;
  let carbPct = 0.4;
  let fatPct = 0.3;

  if (goal === 'high-protein') {
    protPct = 0.4; carbPct = 0.35; fatPct = 0.25;
  } else if (goal === 'fat-loss') {
    protPct = 0.4; carbPct = 0.3; fatPct = 0.3;
  } else if (goal === 'low-carb') {
    protPct = 0.3; carbPct = 0.1; fatPct = 0.6;
  }

  const protCals = calories * protPct;
  const carbCals = calories * carbPct;
  const fatCals = calories * fatPct;

  const protGrams = Math.round(protCals / 4);
  const carbGrams = Math.round(carbCals / 4);
  const fatGrams = Math.round(fatCals / 9);

  document.getElementById('resMacroProtein').textContent = `${protGrams} g`;
  document.getElementById('resMacroProteinCals').textContent = `(${Math.round(protCals)} kcal)`;

  document.getElementById('resMacroCarbs').textContent = `${carbGrams} g`;
  document.getElementById('resMacroCarbsCals').textContent = `(${Math.round(carbCals)} kcal)`;

  document.getElementById('resMacroFat').textContent = `${fatGrams} g`;
  document.getElementById('resMacroFatCals').textContent = `(${Math.round(fatCals)} kcal)`;
}

function calculateWaterIntake() {
  const weight = parseFloat(document.getElementById('waterWeight').value) || 70;
  const exerciseMins = parseFloat(document.getElementById('waterExerciseMins').value) || 45;
  const climate = document.getElementById('waterClimate').value;

  // Base: 35ml per kg of bodyweight
  let ml = weight * 35;

  // Plus 350ml per 30 mins workout
  ml += (exerciseMins / 30) * 350;

  if (climate === 'warm') ml += 300;
  if (climate === 'hot') ml += 600;

  ml = Math.round(ml / 50) * 50; // round to nearest 50
  const cups = (ml / 250).toFixed(1);

  document.getElementById('waterResultNumber').textContent = `${ml.toLocaleString()} ml`;
  document.getElementById('waterCupsCount').textContent = `~ ${cups} Standard Glasses (250 ml each)`;

  // Store calculated target for easy apply
  window._lastCalculatedWaterTarget = ml;
}

function calculateHeartRateZones() {
  const age = parseFloat(document.getElementById('hrAge').value) || 30;
  const maxHr = 220 - age;

  document.getElementById('hrMaxDisplay').textContent = `${maxHr} BPM`;

  document.getElementById('hrZone1').textContent = `${Math.round(maxHr * 0.50)} - ${Math.round(maxHr * 0.60)} BPM`;
  document.getElementById('hrZone2').textContent = `${Math.round(maxHr * 0.60)} - ${Math.round(maxHr * 0.70)} BPM`;
  document.getElementById('hrZone3').textContent = `${Math.round(maxHr * 0.70)} - ${Math.round(maxHr * 0.80)} BPM`;
  document.getElementById('hrZone4').textContent = `${Math.round(maxHr * 0.80)} - ${Math.round(maxHr * 0.90)} BPM`;
  document.getElementById('hrZone5').textContent = `${Math.round(maxHr * 0.90)} - ${maxHr} BPM`;
}

function calculateBedtimes() {
  const wakeTime = document.getElementById('sleepTargetTime').value || "07:00";
  const [hours, mins] = wakeTime.split(':').map(Number);

  const container = document.getElementById('bedtimeResultsContainer');
  if (!container) return;

  container.innerHTML = '';

  // 90 minutes = 1.5 hours per cycle, plus 15 mins to fall asleep
  const cycles = [
    { count: 6, label: '6 Cycles (9 Hours) - Maximum Restorative' },
    { count: 5, label: '5 Cycles (7.5 Hours) - Optimal Balance' },
    { count: 4, label: '4 Cycles (6 Hours) - Minimum for Functional Rest' }
  ];

  cycles.forEach((c, idx) => {
    const totalMinutes = c.count * 90 + 15;
    let bedMinuteOfDay = (hours * 60 + mins) - totalMinutes;
    if (bedMinuteOfDay < 0) bedMinuteOfDay += 24 * 60;

    const bedH = Math.floor(bedMinuteOfDay / 60);
    const bedM = bedMinuteOfDay % 60;

    const ampm = bedH >= 12 ? 'PM' : 'AM';
    const displayH = bedH % 12 === 0 ? 12 : bedH % 12;
    const displayM = bedM < 10 ? `0${bedM}` : bedM;
    const timeFormatted = `${displayH}:${displayM} ${ampm}`;

    const card = document.createElement('div');
    card.className = `bedtime-card ${idx <= 1 ? 'top-choice' : ''}`;
    card.innerHTML = `
      <div class="cycle-tag">${c.label}</div>
      <div class="bedtime-time">${timeFormatted}</div>
    `;
    container.appendChild(card);
  });
}

// ===================================================================
// 11. MINDFULNESS & BREATHING COACH
// ===================================================================

const BreathingCoach = {
  pattern: 'box', // 'box' (4-4-4-4), 'relax' (4-7-8), 'calm' (4-6)
  isRunning: false,
  stepTimeout: null,
  currentPhaseIndex: 0,
  countdownInterval: null,
  secondsRemaining: 4,

  phases: {
    box: [
      { action: 'Inhale...', duration: 4, anim: 'inhale' },
      { action: 'Hold...', duration: 4, anim: 'hold' },
      { action: 'Exhale...', duration: 4, anim: 'exhale' },
      { action: 'Hold...', duration: 4, anim: 'hold' }
    ],
    relax: [
      { action: 'Inhale...', duration: 4, anim: 'inhale' },
      { action: 'Hold...', duration: 7, anim: 'hold' },
      { action: 'Exhale...', duration: 8, anim: 'exhale' }
    ],
    calm: [
      { action: 'Inhale...', duration: 4, anim: 'inhale' },
      { action: 'Exhale...', duration: 6, anim: 'exhale' }
    ]
  },

  start() {
    this.isRunning = true;
    this.currentPhaseIndex = 0;
    document.getElementById('startBreathingBtn').disabled = true;
    document.getElementById('stopBreathingBtn').disabled = false;
    this.runPhase();
  },

  stop() {
    this.isRunning = false;
    clearTimeout(this.stepTimeout);
    clearInterval(this.countdownInterval);

    document.getElementById('startBreathingBtn').disabled = false;
    document.getElementById('stopBreathingBtn').disabled = true;

    const circle = document.getElementById('breathingCircle');
    const instruction = document.getElementById('breathInstruction');
    const counter = document.getElementById('breathCounter');

    if (circle) circle.className = 'breathing-circle';
    if (instruction) instruction.textContent = 'Paused';
    if (counter) counter.textContent = '--';
  },

  runPhase() {
    if (!this.isRunning) return;

    const currentPatternPhases = this.phases[this.pattern];
    const current = currentPatternPhases[this.currentPhaseIndex];

    const circle = document.getElementById('breathingCircle');
    const instruction = document.getElementById('breathInstruction');
    const counter = document.getElementById('breathCounter');

    if (circle) {
      circle.className = `breathing-circle ${current.anim}`;
      circle.style.transitionDuration = `${current.duration}s`;
    }

    if (instruction) instruction.textContent = current.action;

    this.secondsRemaining = current.duration;
    if (counter) counter.textContent = this.secondsRemaining.toString();

    clearInterval(this.countdownInterval);
    this.countdownInterval = setInterval(() => {
      this.secondsRemaining--;
      if (counter && this.secondsRemaining > 0) {
        counter.textContent = this.secondsRemaining.toString();
      }
    }, 1000);

    this.stepTimeout = setTimeout(() => {
      this.currentPhaseIndex = (this.currentPhaseIndex + 1) % currentPatternPhases.length;
      this.runPhase();
    }, current.duration * 1000);
  }
};

// ===================================================================
// 12. WISDOM & MYTH BUSTERS
// ===================================================================

function renderMythBusters() {
  const container = document.getElementById('mythCardsGrid');
  if (!container) return;

  container.innerHTML = '';
  MYTH_BUSTERS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'myth-card';
    card.innerHTML = `
      <div class="myth-badge">Busted Myth • ${item.category}</div>
      <div class="myth-question">"${item.myth}"</div>
      <div class="fact-box">
        <span class="fact-tag">The Scientific Reality:</span>
        <div class="fact-text">${item.fact}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===================================================================
// 12.5. FITCARE AUTHENTICATION & USER PROFILE MANAGER
// ===================================================================

const AuthManager = {
  currentTab: 'signin',

  init() {
    this.updateAuthUI();
    this.bindEvents();
  },

  updateAuthUI() {
    const authHeaderText = document.getElementById('authHeaderText');
    const authHeaderAvatar = document.getElementById('authHeaderAvatar');
    const authHeaderBtn = document.getElementById('authHeaderBtn');
    const drawerAuthText = document.getElementById('drawerAuthText');
    const drawerAuthIcon = document.getElementById('drawerAuthIcon');
    const greetingMsg = document.getElementById('greetingMessage');
    const tabProfileBtn = document.getElementById('tabProfileBtn');
    const tabSignInBtn = document.getElementById('tabSignInBtn');
    const tabSignUpBtn = document.getElementById('tabSignUpBtn');

    if (AppState.user) {
      // User is logged in
      const firstName = AppState.user.name.split(' ')[0] || 'Member';
      if (authHeaderText) authHeaderText.textContent = firstName;
      if (authHeaderAvatar) authHeaderAvatar.textContent = AppState.user.avatar || '🌟';
      if (authHeaderBtn) authHeaderBtn.classList.add('is-logged-in');

      if (drawerAuthText) drawerAuthText.textContent = `Profile: ${AppState.user.name}`;
      if (drawerAuthIcon) drawerAuthIcon.textContent = AppState.user.avatar || '🌟';

      if (greetingMsg) greetingMsg.textContent = `Welcome back, ${firstName}! ✨`;

      if (tabProfileBtn) tabProfileBtn.classList.remove('hidden');
      if (tabSignInBtn) tabSignInBtn.classList.add('hidden');
      if (tabSignUpBtn) tabSignUpBtn.classList.add('hidden');

      this.updateProfileTab();
    } else {
      // Guest state
      if (authHeaderText) authHeaderText.textContent = 'Sign In';
      if (authHeaderAvatar) authHeaderAvatar.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      `;
      if (authHeaderBtn) authHeaderBtn.classList.remove('is-logged-in');

      if (drawerAuthText) drawerAuthText.textContent = 'Sign In / Join FitCare';
      if (drawerAuthIcon) drawerAuthIcon.textContent = '👤';

      if (greetingMsg) greetingMsg.textContent = 'Good day, Wellness Explorer!';

      if (tabProfileBtn) tabProfileBtn.classList.add('hidden');
      if (tabSignInBtn) tabSignInBtn.classList.remove('hidden');
      if (tabSignUpBtn) tabSignUpBtn.classList.remove('hidden');
    }
  },

  updateProfileTab() {
    if (!AppState.user) return;
    const nameEl = document.getElementById('profileDisplayName');
    const emailEl = document.getElementById('profileDisplayEmail');
    const avatarEl = document.getElementById('profileAvatarDisplay');
    const goalEl = document.getElementById('profileGoalBadge');
    const streakEl = document.getElementById('profileStreakVal');
    const vitalityEl = document.getElementById('profileVitalityVal');
    const waterEl = document.getElementById('profileWaterVal');
    const mealsEl = document.getElementById('profileMealsVal');

    if (nameEl) nameEl.textContent = AppState.user.name;
    if (emailEl) emailEl.textContent = AppState.user.email;
    if (avatarEl) avatarEl.textContent = AppState.user.avatar || '🌟';
    if (goalEl) goalEl.textContent = AppState.user.goal || '🌿 Everyday Vitality & Energy';

    if (streakEl) streakEl.textContent = AppState.streak.toString();
    const vitalityScore = document.getElementById('vitalityScoreNumber');
    if (vitalityEl && vitalityScore) vitalityEl.textContent = vitalityScore.textContent;
    if (waterEl) waterEl.textContent = `${AppState.waterCurrentMl} / ${AppState.waterTargetMl} ml`;
    if (mealsEl) mealsEl.textContent = AppState.loggedFoods.length.toString();
  },

  openModal(defaultTab) {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.add('open');

    if (AppState.user) {
      this.switchTab('profile');
    } else {
      this.switchTab(defaultTab || 'signin');
    }
  },

  closeModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('open');
  },

  openGoogleModal() {
    const modal = document.getElementById('googleOAuthModal');
    if (modal) modal.classList.add('open');
  },

  closeGoogleModal() {
    const modal = document.getElementById('googleOAuthModal');
    if (modal) modal.classList.remove('open');
  },

  switchTab(tabName) {
    this.currentTab = tabName;

    document.querySelectorAll('.auth-tab-btn').forEach(btn => {
      if (btn.dataset.tab === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const viewSignIn = document.getElementById('viewSignIn');
    const viewSignUp = document.getElementById('viewSignUp');
    const viewProfile = document.getElementById('viewProfile');
    const titleEl = document.getElementById('authModalTitle');
    const subtitleEl = document.getElementById('authModalSubtitle');

    if (viewSignIn) viewSignIn.classList.toggle('active', tabName === 'signin');
    if (viewSignUp) viewSignUp.classList.toggle('active', tabName === 'signup');
    if (viewProfile) viewProfile.classList.toggle('active', tabName === 'profile');

    if (tabName === 'signin') {
      if (titleEl) titleEl.textContent = 'Welcome Back to FitCare';
      if (subtitleEl) subtitleEl.textContent = 'Sign in to access your saved wellness journey';
    } else if (tabName === 'signup') {
      if (titleEl) titleEl.textContent = 'Create Your FitCare Profile';
      if (subtitleEl) subtitleEl.textContent = 'Join millions living healthier, happier lives';
    } else if (tabName === 'profile') {
      if (titleEl) titleEl.textContent = 'Your FitCare Sanctuary & Profile';
      if (subtitleEl) subtitleEl.textContent = 'Manage your wellness preferences & data';
      this.updateProfileTab();
    }
  },

  updatePasswordStrength(pwd) {
    const fill = document.getElementById('strengthBarFill');
    const text = document.getElementById('strengthText');
    if (!fill || !text) return;

    fill.className = 'strength-bar-fill';

    if (!pwd) {
      fill.style.width = '0%';
      text.textContent = 'Password strength: Enter password';
      return;
    }

    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 10) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 1) {
      fill.classList.add('weak');
      text.textContent = 'Password strength: ⚠️ Weak (add letters, numbers)';
      text.style.color = 'var(--color-rose)';
    } else if (score === 2 || score === 3) {
      fill.classList.add('fair');
      text.textContent = 'Password strength: 👍 Fair / Good';
      text.style.color = 'var(--color-amber)';
    } else if (score === 4) {
      fill.classList.add('good');
      text.textContent = 'Password strength: 🛡️ Strong password!';
      text.style.color = 'var(--color-accent)';
    } else {
      fill.classList.add('strong');
      text.textContent = 'Password strength: 🔒 Rock-solid & secure!';
      text.style.color = 'var(--color-primary)';
    }
  },

  togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      btn.textContent = '🙈';
    } else {
      input.type = 'password';
      btn.textContent = '👁️';
    }
  },

  signIn(email, password) {
    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }

    const username = email.split('@')[0];
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);

    AppState.user = {
      name: formattedName,
      email: email,
      avatar: '🌟',
      goal: 'Everyday Vitality & Energy',
      memberSince: new Date().getFullYear().toString()
    };
    AppState.save();

    // Log to coder account registry
    try {
      let accounts = JSON.parse(localStorage.getItem('fitcare_coder_registered_accounts') || '[]');
      const existing = accounts.find(a => a.email === email);
      if (!existing) {
        accounts.push({
          id: 'usr_' + Date.now(),
          name: formattedName,
          email: email,
          password: password,
          goal: 'Everyday Vitality & Energy',
          lastLogin: new Date().toISOString()
        });
        localStorage.setItem('fitcare_coder_registered_accounts', JSON.stringify(accounts, null, 2));
      }
      // Attempt backend persist
      fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name: formattedName, lastLogin: new Date().toISOString() })
      }).catch(() => {});
    } catch (e) {
      console.warn('Coder user store:', e);
    }

    SoundEngine.playChime();
    triggerConfetti();
    this.updateAuthUI();
    this.closeModal();
    showToast(`Welcome back to FitCare, ${formattedName}! ✨`, '🌿');
  },

  signUp(name, email, password, goal) {
    if (!name || !email || !password) {
      alert('Please fill in all required registration fields.');
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    AppState.user = {
      name: trimmedName,
      email: trimmedEmail,
      avatar: '🌟',
      goal: goal || 'Everyday Vitality & Energy',
      memberSince: new Date().getFullYear().toString()
    };
    AppState.save();

    // Persist to coder accounts file and registry
    const userData = {
      id: 'usr_' + Date.now(),
      name: trimmedName,
      email: trimmedEmail,
      password: password,
      goal: goal || 'Everyday Vitality & Energy',
      registeredAt: new Date().toISOString()
    };

    try {
      let accounts = JSON.parse(localStorage.getItem('fitcare_coder_registered_accounts') || '[]');
      accounts.push(userData);
      localStorage.setItem('fitcare_coder_registered_accounts', JSON.stringify(accounts, null, 2));

      // Attempt backend sync to users.json
      fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      }).catch(() => {});
    } catch (e) {
      console.warn('Coder user store:', e);
    }

    SoundEngine.playChime();
    triggerConfetti();
    this.updateAuthUI();
    this.closeModal();
    showToast(`Account successfully created! Welcome, ${trimmedName}! 🎉`, '🌟');
  },

  selectGoogleAccount(name, email, avatar) {
    AppState.user = {
      name: name,
      email: email,
      avatar: avatar || '⚡',
      goal: 'Everyday Vitality & Energy',
      memberSince: new Date().getFullYear().toString(),
      authProvider: 'Google'
    };
    AppState.save();

    // Persist Google sign-in to coder registry
    try {
      let accounts = JSON.parse(localStorage.getItem('fitcare_coder_registered_accounts') || '[]');
      if (!accounts.some(a => a.email === email)) {
        accounts.push({
          id: 'usr_' + Date.now(),
          name: name,
          email: email,
          authProvider: 'Google OAuth',
          registeredAt: new Date().toISOString()
        });
        localStorage.setItem('fitcare_coder_registered_accounts', JSON.stringify(accounts, null, 2));
      }
      fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, authProvider: 'Google OAuth', registeredAt: new Date().toISOString() })
      }).catch(() => {});
    } catch (e) {}

    this.closeGoogleModal();
    this.closeModal();
    SoundEngine.playChime();
    triggerConfetti();
    this.updateAuthUI();
    showToast(`Signed in with Google as ${name}! 🌿`, '✅');
  },

  promptCustomGoogleAccount() {
    const email = prompt('Enter your Gmail address to sign in with Google:');
    if (email && email.includes('@')) {
      const username = email.split('@')[0];
      const name = username.charAt(0).toUpperCase() + username.slice(1);
      this.selectGoogleAccount(name, email, '🌟');
    }
  },

  setAvatar(emoji) {
    if (!AppState.user) return;
    AppState.user.avatar = emoji;
    AppState.save();
    this.updateAuthUI();
    showToast(`Avatar updated to ${emoji}!`, emoji);
  },

  editGoal() {
    if (!AppState.user) return;
    const newGoal = prompt('Enter your new primary fitness & wellness goal:', AppState.user.goal);
    if (newGoal && newGoal.trim()) {
      AppState.user.goal = newGoal.trim();
      AppState.save();
      this.updateProfileTab();
      showToast('Fitness goal updated successfully!', '🎯');
    }
  },

  exportWellnessData() {
    const backupData = {
      appName: 'FitCare Hub',
      exportDate: new Date().toISOString(),
      user: AppState.user,
      streak: AppState.streak,
      waterIntakeMl: AppState.waterCurrentMl,
      waterTargetMl: AppState.waterTargetMl,
      habits: AppState.habits,
      loggedFoods: AppState.loggedFoods,
      mood: AppState.selectedMood,
      gratitudeNote: AppState.gratitudeNote
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `FitCare_Wellness_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    showToast('Wellness data exported successfully!', '💾');
  },

  signOut() {
    if (confirm('Are you sure you want to sign out of FitCare?')) {
      AppState.user = null;
      AppState.save();
      this.updateAuthUI();
      this.closeModal();
      showToast('You have been safely signed out.', '👋');
    }
  },

  bindEvents() {
    const authHeaderBtn = document.getElementById('authHeaderBtn');
    if (authHeaderBtn) {
      authHeaderBtn.addEventListener('click', () => {
        this.openModal(AppState.user ? 'profile' : 'signin');
      });
    }

    const drawerAuthBtn = document.getElementById('drawerAuthBtn');
    if (drawerAuthBtn) {
      drawerAuthBtn.addEventListener('click', () => {
        this.openModal(AppState.user ? 'profile' : 'signin');
        const drawer = document.getElementById('mobileDrawer');
        if (drawer) drawer.classList.remove('open');
      });
    }

    const closeBtn = document.getElementById('closeAuthModal');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());

    const closeGoogleBtn = document.getElementById('closeGoogleOAuthBtn');
    if (closeGoogleBtn) closeGoogleBtn.addEventListener('click', () => this.closeGoogleModal());

    const tabSignInBtn = document.getElementById('tabSignInBtn');
    if (tabSignInBtn) tabSignInBtn.addEventListener('click', () => this.switchTab('signin'));

    const tabSignUpBtn = document.getElementById('tabSignUpBtn');
    if (tabSignUpBtn) tabSignUpBtn.addEventListener('click', () => this.switchTab('signup'));

    const tabProfileBtn = document.getElementById('tabProfileBtn');
    if (tabProfileBtn) tabProfileBtn.addEventListener('click', () => this.switchTab('profile'));

    const goToSignUpLink = document.getElementById('goToSignUpLink');
    if (goToSignUpLink) goToSignUpLink.addEventListener('click', () => this.switchTab('signup'));

    const goToSignInLink = document.getElementById('goToSignInLink');
    if (goToSignInLink) goToSignInLink.addEventListener('click', () => this.switchTab('signin'));

    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', () => {
        alert('🔒 Password Reset Demo: A password recovery link has been simulated for your email!');
      });
    }

    const toggleSignInPwdBtn = document.getElementById('toggleSignInPasswordBtn');
    if (toggleSignInPwdBtn) {
      toggleSignInPwdBtn.addEventListener('click', () => {
        this.togglePasswordVisibility('signInPassword', toggleSignInPwdBtn);
      });
    }

    const toggleSignUpPwdBtn = document.getElementById('toggleSignUpPasswordBtn');
    if (toggleSignUpPwdBtn) {
      toggleSignUpPwdBtn.addEventListener('click', () => {
        this.togglePasswordVisibility('signUpPassword', toggleSignUpPwdBtn);
      });
    }

    const signUpPasswordInput = document.getElementById('signUpPassword');
    if (signUpPasswordInput) {
      signUpPasswordInput.addEventListener('input', (e) => {
        this.updatePasswordStrength(e.target.value);
      });
    }

    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
      signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signInEmail').value.trim();
        const password = document.getElementById('signInPassword').value;
        this.signIn(email, password);
      });
    }

    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
      signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signUpName').value.trim();
        const email = document.getElementById('signUpEmail').value.trim();
        const password = document.getElementById('signUpPassword').value;
        const goal = document.getElementById('signUpGoal').value;
        this.signUp(name, email, password, goal);
      });
    }

    const googleSignInBtn = document.getElementById('googleSignInBtn');
    if (googleSignInBtn) {
      googleSignInBtn.addEventListener('click', () => this.openGoogleModal());
    }

    const googleSignUpBtn = document.getElementById('googleSignUpBtn');
    if (googleSignUpBtn) {
      googleSignUpBtn.addEventListener('click', () => this.openGoogleModal());
    }

    const googleAcc1 = document.getElementById('googleAcc1');
    if (googleAcc1) {
      googleAcc1.addEventListener('click', () => {
        this.selectGoogleAccount('Alex Morgan', 'alex.morgan@gmail.com', '⚡');
      });
    }

    const googleAcc2 = document.getElementById('googleAcc2');
    if (googleAcc2) {
      googleAcc2.addEventListener('click', () => {
        this.selectGoogleAccount('Sam Taylor', 'sam.taylor@gmail.com', '🥑');
      });
    }

    const googleAccCustom = document.getElementById('googleAccCustom');
    if (googleAccCustom) {
      googleAccCustom.addEventListener('click', () => {
        this.promptCustomGoogleAccount();
      });
    }

    const avatarOpts = document.querySelectorAll('.avatar-opt');
    avatarOpts.forEach(opt => {
      opt.addEventListener('click', () => this.setAvatar(opt.dataset.avatar));
    });

    const editGoalBtn = document.getElementById('editGoalBtn');
    if (editGoalBtn) {
      editGoalBtn.addEventListener('click', () => this.editGoal());
    }

    const exportDataBtn = document.getElementById('exportDataBtn');
    if (exportDataBtn) {
      exportDataBtn.addEventListener('click', () => this.exportWellnessData());
    }

    const signOutBtn = document.getElementById('signOutBtn');
    if (signOutBtn) {
      signOutBtn.addEventListener('click', () => this.signOut());
    }
  }
};

// ===================================================================
// 12.8. FITBOT — MINI AI HEALTH & FITNESS COACH
// ===================================================================

const FitBot = {
  isOpen: false,
  voiceEnabled: false,
  isTyping: false,

  init() {
    this.bindEvents();
  },

  toggleWindow() {
    if (this.isOpen) {
      this.closeWindow();
    } else {
      this.openWindow();
    }
  },

  openWindow() {
    const win = document.getElementById('fitbotWindow');
    if (!win) return;
    win.classList.add('open');
    win.setAttribute('aria-hidden', 'false');
    this.isOpen = true;

    // Focus on input
    setTimeout(() => {
      const input = document.getElementById('fitbotInput');
      if (input) input.focus();
    }, 200);

    SoundEngine.playChime();
  },

  closeWindow() {
    const win = document.getElementById('fitbotWindow');
    if (!win) return;
    win.classList.remove('open');
    win.setAttribute('aria-hidden', 'true');
    this.isOpen = false;
  },

  toggleVoice() {
    this.voiceEnabled = !this.voiceEnabled;
    const icon = document.getElementById('fitbotVoiceIcon');
    const btn = document.getElementById('fitbotVoiceToggleBtn');
    if (this.voiceEnabled) {
      if (icon) icon.textContent = '🔊';
      if (btn) btn.classList.add('voice-active');
      showToast('FitBot Voice Read-Aloud Enabled 🔊', '🤖');
    } else {
      if (icon) icon.textContent = '🔇';
      if (btn) btn.classList.remove('voice-active');
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      showToast('FitBot Voice Read-Aloud Disabled', '🔇');
    }
  },

  clearChat() {
    const container = document.getElementById('fitbotMessages');
    if (!container) return;
    const userName = AppState.user ? AppState.user.name.split(' ')[0] : 'there';
    container.innerHTML = `
      <div class="fitbot-msg fitbot-msg-bot">
        <div class="fitbot-msg-avatar">🤖</div>
        <div class="fitbot-msg-content">
          <div class="fitbot-bubble">
            <p>🧹 Chat cleared! What would you like to explore next, ${userName}?</p>
            <div class="fitbot-quick-actions">
              <button class="btn btn-outline-light btn-xs" onclick="FitBot.sendQuickPrompt('How is my health dashboard looking today?')">📊 Check My Stats</button>
              <button class="btn btn-outline-light btn-xs" onclick="FitBot.sendQuickPrompt('Recommend a healthy high-energy snack')">🥑 Snack Ideas</button>
              <button class="btn btn-outline-light btn-xs" onclick="FitBot.sendQuickPrompt('How does the 7-minute workout work?')">⚡ 7-Min Workout</button>
            </div>
          </div>
          <span class="fitbot-msg-time">Just now</span>
        </div>
      </div>
    `;
    showToast('Chat history cleared', '🗑️');
  },

  sendQuickPrompt(promptText) {
    const input = document.getElementById('fitbotInput');
    if (input) input.value = promptText;
    this.handleUserSubmit(promptText);
  },

  handleUserSubmit(customText) {
    if (this.isTyping) return;
    const input = document.getElementById('fitbotInput');
    const text = customText || (input ? input.value.trim() : '');
    if (!text) return;

    if (input) input.value = '';

    // Append user message
    this.appendMessage('user', text);

    // Show typing indicator
    this.isTyping = true;
    const typingIndicator = document.getElementById('fitbotTypingIndicator');
    if (typingIndicator) typingIndicator.classList.remove('hidden');
    this.scrollToBottom();

    // Natural simulated AI response delay
    const delay = Math.min(1100, Math.max(450, text.length * 15));
    setTimeout(() => {
      const response = this.generateAIResponse(text);
      if (typingIndicator) typingIndicator.classList.add('hidden');
      this.appendMessage('bot', response.html, response.plainText, response.quickActions);
      this.isTyping = false;
      this.scrollToBottom();

      SoundEngine.playChime();

      // Read aloud if enabled
      if (this.voiceEnabled && ('speechSynthesis' in window)) {
        this.speakText(response.plainText || text);
      }
    }, delay);
  },

  appendMessage(sender, contentHtml, plainText, quickActions) {
    const container = document.getElementById('fitbotMessages');
    if (!container) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userAvatar = (AppState.user && AppState.user.avatar) ? AppState.user.avatar : '👤';
    const avatar = sender === 'user' ? userAvatar : '🤖';

    const msgDiv = document.createElement('div');
    msgDiv.className = `fitbot-msg fitbot-msg-${sender}`;

    let actionsHtml = '';
    if (quickActions && quickActions.length > 0) {
      actionsHtml = `
        <div class="fitbot-quick-actions">
          ${quickActions.map(a => `<button class="btn btn-outline-light btn-xs" onclick="${a.action}">${a.label}</button>`).join('')}
        </div>
      `;
    }

    msgDiv.innerHTML = `
      <div class="fitbot-msg-avatar">${avatar}</div>
      <div class="fitbot-msg-content">
        <div class="fitbot-bubble">
          ${contentHtml}
          ${actionsHtml}
        </div>
        <span class="fitbot-msg-time">${timeStr}</span>
      </div>
    `;

    container.appendChild(msgDiv);
  },

  scrollToBottom() {
    const container = document.getElementById('fitbotMessages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  },

  speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleaned = text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').replace(/[*_#`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  },

  generateAIResponse(rawQuery) {
    const query = rawQuery.toLowerCase().trim();
    const userName = AppState.user ? AppState.user.name.split(' ')[0] : 'friend';
    const userGoal = AppState.user ? AppState.user.goal : 'Everyday Vitality & Health';

    // 1. STATS / DASHBOARD / PROGRESS
    if (query.includes('how am i doing') || query.includes('check my stats') || query.includes('my stats') || query.includes('my progress') || query.includes('dashboard')) {
      const habitsDone = AppState.habits.filter(h => h.completed).length;
      const totalHabits = AppState.habits.length;
      const waterPct = Math.min(100, Math.round((AppState.waterCurrentMl / AppState.waterTargetMl) * 100));
      const mealsCount = AppState.loggedFoods.length;

      return {
        html: `
          <p>📊 <strong>Here is your live FitCare Wellness Summary, ${userName}:</strong></p>
          <ul>
            <li>🔥 <strong>Active Streak:</strong> ${AppState.streak} Day(s)</li>
            <li>💧 <strong>Hydration:</strong> ${AppState.waterCurrentMl} / ${AppState.waterTargetMl} ml (${waterPct}%)</li>
            <li>✅ <strong>Micro-Habits:</strong> ${habitsDone} of ${totalHabits} completed today</li>
            <li>🥗 <strong>Food Diary:</strong> ${mealsCount} meal item(s) logged today</li>
            <li>🎯 <strong>Target Focus:</strong> ${userGoal}</li>
          </ul>
          <p>${waterPct < 50 ? "💡 Tip: You're halfway through your water target. Grab a refreshing glass!" : "🌟 Fantastic pace today! Keep that radiant momentum going."}</p>
        `,
        plainText: `Here is your live summary ${userName}. Your streak is ${AppState.streak} days, hydration is at ${waterPct} percent, and you have completed ${habitsDone} of ${totalHabits} habits.`,
        quickActions: [
          { label: '💧 Add 250ml Water', action: 'document.getElementById("addWaterGlassBtn").click(); FitBot.sendQuickPrompt("Check my hydration");' },
          { label: '🏠 Go to Dashboard', action: 'navigateTo("dashboard"); FitBot.closeWindow();' }
        ]
      };
    }

    // 2. HYDRATION SPECIFIC
    if (query.includes('water') || query.includes('hydration') || query.includes('thirst') || query.includes('fluid')) {
      const remaining = Math.max(0, AppState.waterTargetMl - AppState.waterCurrentMl);
      return {
        html: `
          <p>💧 <strong>Hydration Status:</strong></p>
          <p>You have logged <strong>${AppState.waterCurrentMl} ml</strong> out of your <strong>${AppState.waterTargetMl} ml</strong> daily goal.</p>
          <p>${remaining === 0 ? "🎉 Amazing! You've met your daily hydration target!" : `You have <strong>${remaining} ml</strong> remaining to hit 100%. Adequate water optimizes cellular energy, digestion, and skin radiance.`}</p>
        `,
        plainText: `You have logged ${AppState.waterCurrentMl} milliliters of water out of ${AppState.waterTargetMl}.`,
        quickActions: [
          { label: '+250ml Glass', action: 'document.getElementById("addWaterGlassBtn").click(); FitBot.sendQuickPrompt("Check my hydration");' },
          { label: '+500ml Bottle', action: 'document.getElementById("addWater500Btn").click(); FitBot.sendQuickPrompt("Check my hydration");' },
          { label: '🧮 Water Calculator', action: 'navigateTo("calculators"); FitBot.closeWindow();' }
        ]
      };
    }

    // 3. FRUIT & SUPERFOOD ENCYCLOPEDIA LOOKUPS
    const matchedFruit = FRUITS_DATABASE.find(f => {
      const fName = f.name.toLowerCase();
      const fId = f.id.toLowerCase();
      return query.includes(fName) || query.includes(fId.replace('f_', '')) || (fName.includes(query) && query.length > 3);
    });

    if (matchedFruit) {
      return {
        html: `
          <p>${matchedFruit.emoji} <strong>${matchedFruit.name}</strong> (${matchedFruit.category[0].toUpperCase()})</p>
          <p><strong>Macros per 100g:</strong> ${matchedFruit.calories} kcal | ${matchedFruit.carbs}g Carbs | ${matchedFruit.fiber}g Fiber | ${matchedFruit.protein}g Protein | ${matchedFruit.fat}g Fat</p>
          <p><strong>🧬 Glycemic Profile:</strong> ${matchedFruit.gi} | <strong>Nutrients:</strong> ${matchedFruit.vitamins}</p>
          <p><strong>🌟 Clinical Highlights:</strong></p>
          <ul>${matchedFruit.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
          <p><strong>💡 Pairing Idea:</strong> ${matchedFruit.pairing}</p>
        `,
        plainText: `${matchedFruit.name} has ${matchedFruit.calories} calories per 100 grams, with ${matchedFruit.fiber} grams of fiber and ${matchedFruit.carbs} grams of carbs.`,
        quickActions: [
          { label: `+ Log ${matchedFruit.name}`, action: `logFruitToDiary("${matchedFruit.id}");` },
          { label: '🍎 View All 30 Fruits', action: 'navigateTo("fruits"); FitBot.closeWindow();' }
        ]
      };
    }

    // 4. FRUIT GENERAL
    if (query.includes('fruit') || query.includes('superfood')) {
      if (query.includes('fat loss') || query.includes('weight loss') || query.includes('low sugar') || query.includes('low carb')) {
        return {
          html: `
            <p>🍎 <strong>Top Fruits for Fat Loss & Blood Sugar Balance:</strong></p>
            <ul>
              <li><strong>Wild Blueberries / Strawberries / Raspberries:</strong> High in polyphenols and fiber, low glycemic index (GI &lt; 40).</li>
              <li><strong>Hass Avocado:</strong> Rich in monounsaturated oleic acid and 6.7g fiber to prolong fullness.</li>
              <li><strong>Grapefruit:</strong> Naringenin bioflavonoid supports insulin sensitivity.</li>
              <li><strong>Crisp Apples & Pears:</strong> High pectin prebiotic fiber promotes gut satiety.</li>
            </ul>
          `,
          plainText: 'For fat loss, focus on berries, avocado, grapefruit, and apples due to their high fiber and low glycemic index.',
          quickActions: [
            { label: 'Explore Fruit Hub', action: 'navigateTo("fruits"); FitBot.closeWindow();' }
          ]
        };
      }
      if (query.includes('workout') || query.includes('muscle') || query.includes('energy') || query.includes('pre workout')) {
        return {
          html: `
            <p>⚡ <strong>Top Fruits for Athletic Performance & Energy:</strong></p>
            <ul>
              <li><strong>Golden Banana:</strong> Rapidly digestible carbs + potassium to prevent cramps.</li>
              <li><strong>Medjool Dates:</strong> Nature's natural energy gel before high-intensity training.</li>
              <li><strong>Ruby Watermelon:</strong> Rich in L-Citrulline to boost nitric oxide and blood flow.</li>
              <li><strong>Montmorency Cherries & Blueberries:</strong> Anthocyanins speed up post-exercise muscle recovery.</li>
            </ul>
          `,
          plainText: 'Bananas and dates provide rapid pre-workout energy, while watermelon and tart cherries accelerate recovery.',
          quickActions: [
            { label: 'Explore Fruit Hub', action: 'navigateTo("fruits"); FitBot.closeWindow();' }
          ]
        };
      }
    }

    // 5. CALORIES, TDEE, BMR & MACROS
    if (query.includes('tdee') || query.includes('bmr') || query.includes('calorie') || query.includes('macro') || query.includes('protein') || query.includes('deficit') || query.includes('surplus')) {
      return {
        html: `
          <p>🧮 <strong>Energy & Macro Balance Science:</strong></p>
          <ul>
            <li><strong>BMR (Basal Metabolic Rate):</strong> Calories burned just keeping vital organs functioning at complete rest.</li>
            <li><strong>TDEE (Total Daily Energy Expenditure):</strong> BMR multiplied by your physical activity factor.</li>
            <li><strong>Fat Loss:</strong> Maintain a gentle, sustainable 300–500 kcal deficit below TDEE.</li>
            <li><strong>Protein Target:</strong> Aim for <strong>1.6 – 2.2g per kg</strong> of bodyweight for muscle retention/growth, or <strong>1.2 – 1.6g</strong> for general vitality.</li>
            <li><strong>Fiber:</strong> Strive for 25g (women) to 38g (men) daily for gut microbiome and cardiovascular health.</li>
          </ul>
        `,
        plainText: 'Your TDEE is your total daily calorie expenditure. Aim for a 300 to 500 calorie deficit for sustainable fat loss, and 1.6 to 2.2 grams of protein per kilogram of body weight.',
        quickActions: [
          { label: '🧮 Open TDEE Calculator', action: 'navigateTo("calculators"); document.querySelector("[data-calc=\'bmr\']").click(); FitBot.closeWindow();' },
          { label: '📊 Open Macro Splitter', action: 'navigateTo("calculators"); document.querySelector("[data-calc=\'macros\']").click(); FitBot.closeWindow();' }
        ]
      };
    }

    // 6. WORKOUTS, HIIT & 7-MINUTE COACH
    if (query.includes('workout') || query.includes('hiit') || query.includes('7 minute') || query.includes('exercise') || query.includes('squat') || query.includes('pushup') || query.includes('cardio') || query.includes('zone 2')) {
      return {
        html: `
          <p>🏋️ <strong>FitCare Movement Recommendations:</strong></p>
          <ul>
            <li><strong>7-Minute Science Coach:</strong> High-intensity interval circuit scientifically proven to boost VO2 max and metabolic rate in minimal time.</li>
            <li><strong>Zone 2 Cardio:</strong> Steady conversational pace (60–70% max HR) to build mitochondrial density and oxidize fat.</li>
            <li><strong>Strength Fundamentals:</strong> Progressive overload on compound moves (Squats, Push-Ups, Lunges, Planks).</li>
            <li><strong>Rest Intervals:</strong> 30–60s for muscular endurance, 90–120s for strength hypertrophy.</li>
          </ul>
        `,
        plainText: 'FitCare features guided 7-minute full body coach and HIIT timers. Focus on progressive overload and Zone 2 cardio.',
        quickActions: [
          { label: '⚡ Launch 7-Min Coach', action: 'SevenMinCoach.openModal(); FitBot.closeWindow();' },
          { label: '⏱️ Launch HIIT Timer', action: 'HiitTimer.openModal(); FitBot.closeWindow();' },
          { label: '🏋️ Exercise Explorer', action: 'navigateTo("workouts"); FitBot.closeWindow();' }
        ]
      };
    }

    // 7. SLEEP & 10-3-2-1-0 FORMULA
    if (query.includes('sleep') || query.includes('rem') || query.includes('insomnia') || query.includes('bedtime') || query.includes('10-3-2-1-0') || query.includes('rest')) {
      return {
        html: `
          <p>😴 <strong>The Science of Restorative Sleep:</strong></p>
          <p><strong>The 10-3-2-1-0 Rule for Deep REM & Delta Sleep:</strong></p>
          <ul>
            <li>☕ <strong>10 Hours Before Bed:</strong> Cut off all caffeine.</li>
            <li>🍽️ <strong>3 Hours Before Bed:</strong> Finish heavy food and alcohol.</li>
            <li>💼 <strong>2 Hours Before Bed:</strong> Stop intense work & stressful tasks.</li>
            <li>📱 <strong>1 Hour Before Bed:</strong> Turn off all blue-light screens.</li>
            <li>⏰ <strong>0:</strong> The number of times you hit snooze in the morning!</li>
          </ul>
          <p>Sleep occurs in <strong>90-minute REM cycles</strong>. Aim for 5 full cycles (7.5 hours) or 6 cycles (9.0 hours).</p>
        `,
        plainText: 'Follow the 10-3-2-1-0 rule: 10 hours no caffeine, 3 hours no heavy meals, 2 hours no work, 1 hour no screens, and 0 snooze hits.',
        quickActions: [
          { label: '🧮 Sleep Cycle Calculator', action: 'navigateTo("calculators"); document.querySelector("[data-calc=\'sleep\']").click(); FitBot.closeWindow();' },
          { label: '🎵 Ambient Sound Machine', action: 'navigateTo("mindfulness"); FitBot.closeWindow();' }
        ]
      };
    }

    // 8. MINDFULNESS, BREATHING & STRESS
    if (query.includes('breath') || query.includes('box breathing') || query.includes('4-7-8') || query.includes('calm') || query.includes('stress') || query.includes('anxiety') || query.includes('meditat')) {
      return {
        html: `
          <p>🧘 <strong>Mindful Breathing Protocols:</strong></p>
          <ul>
            <li><strong>Box Breathing (4-4-4-4):</strong> Inhale 4s, Hold 4s, Exhale 4s, Hold 4s. Used by elite performers to restore autonomic balance under pressure.</li>
            <li><strong>4-7-8 Relaxation (Dr. Weil):</strong> Inhale 4s, Hold 7s, Exhale 8s through mouth. Stimulates the vagus nerve to induce sleepiness.</li>
            <li><strong>Deep Calm (4-6):</strong> Inhale 4s, Exhale 6s. Longer exhalations lower heart rate instantly.</li>
          </ul>
        `,
        plainText: 'Try Box Breathing (4-4-4-4) for focus or 4-7-8 for sleep relaxation. Long exhalations trigger the vagus nerve to calm heart rate.',
        quickActions: [
          { label: '🧘 Start Breathing Coach', action: 'navigateTo("mindfulness"); BreathingCoach.start(); FitBot.closeWindow();' },
          { label: '🌧️ Nature Sounds', action: 'navigateTo("mindfulness"); SoundEngine.toggleAmbient("rain"); FitBot.closeWindow();' }
        ]
      };
    }

    // 9. HEALTH MYTHS
    if (query.includes('myth') || query.includes('carbs at night') || query.includes('detox') || query.includes('spot reduction') || query.includes('fasting')) {
      return {
        html: `
          <p>💡 <strong>Evidence-Based Myth Busters:</strong></p>
          <ul>
            <li>❌ <em>"Eating carbs past 6 PM turns directly to fat."</em><br>
            ✔️ <strong>Fact:</strong> Total 24-hour energy balance determines fat storage, not the clock.</li>
            <li>❌ <em>"Doing 1,000 crunches burns belly fat."</em><br>
            ✔️ <strong>Fact:</strong> Spot reduction is biologically impossible. Fat loss occurs systemically through a caloric deficit.</li>
            <li>❌ <em>"You need expensive detox teas to cleanse toxins."</em><br>
            ✔️ <strong>Fact:</strong> Your liver, kidneys, and lungs are the ultimate natural detoxification organs.</li>
          </ul>
        `,
        plainText: 'Spot reduction and detox teas are fitness myths. Sustainable energy balance, hydration, and progressive overload produce real results.',
        quickActions: [
          { label: '💡 Myth Busters Wall', action: 'navigateTo("wisdom"); FitBot.closeWindow();' }
        ]
      };
    }

    // 10. RECIPES & SNACKS
    if (query.includes('snack') || query.includes('recipe') || query.includes('meal') || query.includes('breakfast') || query.includes('lunch') || query.includes('dinner')) {
      return {
        html: `
          <p>🥗 <strong>Quick Nutrient-Dense FitCare Ideas:</strong></p>
          <ul>
            <li>🥑 <strong>Power Snack:</strong> Apple slices with natural almond butter + sprinkle of chia seeds.</li>
            <li>🍓 <strong>Recovery Bowl:</strong> Greek yogurt topped with wild blueberries, pumpkin seeds, and a dash of raw honey.</li>
            <li>🥣 <strong>Energizing Breakfast:</strong> Overnight steel-cut oats with chia seeds, banana, and plant protein.</li>
            <li>🥗 <strong>Balanced Meal:</strong> Quinoa bowl with grilled salmon/tofu, avocado, spinach, and lemon-tahini dressing.</li>
          </ul>
        `,
        plainText: 'Great snack ideas include apple with almond butter, Greek yogurt with berries, or overnight oats with chia seeds.',
        quickActions: [
          { label: '🥗 View 6 Wholesome Recipes', action: 'navigateTo("nutrition"); FitBot.closeWindow();' },
          { label: '🍎 Check Superfoods', action: 'navigateTo("fruits"); FitBot.closeWindow();' }
        ]
      };
    }

    // 11. WHOLE FOODS & SUPERFOODS LOOKUPS
    const matchedWholeFood = WHOLE_FOODS_DATABASE.find(wf => {
      const wfName = wf.name.toLowerCase();
      const wfId = wf.id.toLowerCase();
      return query.includes(wfName) || query.includes(wfId.replace('wf_', '')) || (wfName.includes(query) && query.length > 3);
    });

    if (matchedWholeFood) {
      return {
        html: `
          <p>${matchedWholeFood.emoji} <strong>${matchedWholeFood.name}</strong> (${matchedWholeFood.categoryLabel})</p>
          <p><strong>Macros per 100g:</strong> ${matchedWholeFood.calories} kcal | 🥩 Protein: ${matchedWholeFood.protein}g | 🌾 Carbs: ${matchedWholeFood.carbs}g | 🥦 Fiber: ${matchedWholeFood.fiber}g | 🥑 Fat: ${matchedWholeFood.fat}g</p>
          <p><strong>🧬 Glycemic Profile:</strong> ${matchedWholeFood.gi} | <strong>Actives:</strong> ${matchedWholeFood.vitamins}</p>
          <p><strong>🌟 Clinical Highlights:</strong></p>
          <ul>${matchedWholeFood.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
          <p><strong>💡 Synergy & Prep:</strong> ${matchedWholeFood.pairing}</p>
        `,
        plainText: `${matchedWholeFood.name} provides ${matchedWholeFood.calories} calories, ${matchedWholeFood.protein} grams of protein, and ${matchedWholeFood.fiber} grams of fiber per 100g.`,
        quickActions: [
          { label: `+ Log ${matchedWholeFood.name}`, action: `logWholeFoodToDiary("${matchedWholeFood.id}");` },
          { label: '🥦 Whole Foods Guide', action: 'navigateTo("wholefoods"); FitBot.closeWindow();' }
        ]
      };
    }

    // 12. NUTRITION BLOG & CLINICAL ARTICLES LOOKUPS
    const matchedArticle = BLOG_ARTICLES_DATABASE.find(art => {
      const artTitle = art.title.toLowerCase();
      const artId = art.id.toLowerCase();
      return query.includes(artId.replace('blog_', '')) || artTitle.includes(query) || (query.length > 4 && art.summary.toLowerCase().includes(query));
    });

    if (matchedArticle) {
      return {
        html: `
          <p>${matchedArticle.emoji} <strong>FitCare Masterclass:</strong> <em>${matchedArticle.title}</em></p>
          <p>${matchedArticle.summary}</p>
          <p><strong>🌟 Clinical Takeaways:</strong></p>
          <ul>${matchedArticle.takeaways.map(t => `<li>${t}</li>`).join('')}</ul>
        `,
        plainText: `In "${matchedArticle.title}", key clinical insights include: ${matchedArticle.takeaways.join(' ')}`,
        quickActions: [
          { label: '📖 Read Full Masterclass', action: `openBlogModal("${matchedArticle.id}"); FitBot.closeWindow();` },
          { label: '📚 View All 6 Articles', action: 'navigateTo("blog"); FitBot.closeWindow();' }
        ]
      };
    }

    // 13. ULTRA-PROCESSED FOODS (UPF) / EMULSIFIERS
    if (query.includes('upf') || query.includes('ultra processed') || query.includes('ultra-processed') || query.includes('processed food') || query.includes('emulsifier') || query.includes('food matrix')) {
      return {
        html: `
          <p>⚠️ <strong>Ultra-Processed Foods (UPF) & Human Biology:</strong></p>
          <ul>
            <li><strong>NOVA Group 4:</strong> Industrial formulations combining refined starch, sugar, seed oils, and synthetic emulsifiers (e.g. carboxymethylcellulose, polysorbate-80).</li>
            <li><strong>Destroyed Food Matrix:</strong> In UPFs, intact cellular fiber is obliterated, leading to rapid hyper-glycemic spikes and confused leptin/ghrelin satiety signaling.</li>
            <li><strong>Gut Mucosa Deterioration:</strong> Emulsifiers act like mild detergents, thinning the intestinal mucosal barrier and promoting low-grade systemic inflammation.</li>
            <li><strong>The 80/20 Target:</strong> Build 80%+ of your grocery cart from single-ingredient whole foods (greens, nuts, seeds, legumes, eggs, clean fish).</li>
          </ul>
        `,
        plainText: 'Ultra-processed foods lack an intact cellular food matrix and contain emulsifiers that degrade the gut barrier. Aim for the 80/20 whole foods rule.',
        quickActions: [
          { label: '📖 Read UPF Masterclass', action: 'openBlogModal("blog_upf"); FitBot.closeWindow();' },
          { label: '🥦 Whole Foods Guide', action: 'navigateTo("wholefoods"); FitBot.closeWindow();' }
        ]
      };
    }

    // 14. 30 PLANTS A WEEK / GUT MICROBIOME / SCFAS
    if (query.includes('30 plant') || query.includes('gut') || query.includes('microbiome') || query.includes('prebiotic') || query.includes('probiotic') || query.includes('butyrate') || query.includes('akkermansia') || query.includes('flora')) {
      return {
        html: `
          <p>🧬 <strong>The 30-Plant-a-Week Rule & Gut Microbiome:</strong></p>
          <ul>
            <li><strong>American Gut Project:</strong> Eating 30+ distinct plant species weekly is the single highest predictor of a rich, resilient microbiome.</li>
            <li><strong>Microbial SCFA Synthesis:</strong> Different bacterial phyla feed on diverse fiber polymers to produce <em>butyrate</em>, <em>acetate</em>, and <em>propionate</em> (anti-inflammatory fatty acids that fuel colon cells).</li>
            <li><strong>Everything Counts:</strong> Fruits, vegetables, nuts, seeds, legumes, ancient grains, and even culinary herbs (cinnamon, turmeric, rosemary, garlic) count toward your 30!</li>
          </ul>
        `,
        plainText: 'Eating 30 diverse plant species weekly maximizes gut microbial diversity, generating short-chain fatty acids like butyrate that fight inflammation.',
        quickActions: [
          { label: '📖 Read 30-Plant Article', action: 'openBlogModal("blog_30plants"); FitBot.closeWindow();' },
          { label: '🥦 Whole Foods Guide', action: 'navigateTo("wholefoods"); FitBot.closeWindow();' }
        ]
      };
    }

    // 15. FOOD SEQUENCING & GLUCOSE CURVE
    if (query.includes('sequencing') || query.includes('glucose') || query.includes('spike') || query.includes('order of eat') || query.includes('insulin')) {
      return {
        html: `
          <p>🥗 <strong>Food Sequencing: Flatten Your Glucose Curve:</strong></p>
          <ul>
            <li><strong>The Golden Order:</strong> 1️⃣ <strong>Fiber/Veggies First</strong> ➔ 2️⃣ <strong>Proteins & Fats</strong> ➔ 3️⃣ <strong>Starches & Sugars Last</strong>.</li>
            <li><strong>The Fiber Viscous Mesh:</strong> Soluble fiber lines the duodenum, delaying carbohydrate gastric emptying and blunting post-meal glucose surges by up to 35%.</li>
            <li><strong>Preventing Brain Fog:</strong> Avoiding sharp glucose spikes prevents "reactive hypoglycemia", keeping afternoon focus and energy rock steady.</li>
          </ul>
        `,
        plainText: 'Eat vegetables and fiber first, protein and fats second, and starches last. This sequencing reduces post-meal glucose spikes by up to 35%.',
        quickActions: [
          { label: '📖 Read Glucose Masterclass', action: 'openBlogModal("blog_glucose"); FitBot.closeWindow();' },
          { label: '🥦 Cruciferous Greens', action: 'navigateTo("wholefoods"); FitBot.closeWindow();' }
        ]
      };
    }

    // 16. ELECTROLYTES & CELLULAR HYDRATION OSMOSIS
    if (query.includes('electrolyte') || query.includes('osmosis') || query.includes('potassium') || query.includes('sodium') || query.includes('mineral water')) {
      return {
        html: `
          <p>🌊 <strong>Cellular Osmosis & Electrolyte Science:</strong></p>
          <ul>
            <li><strong>The Na+/K+ ATPase Gate:</strong> Water cannot cross cellular membranes without sodium in the extracellular space and potassium inside cells.</li>
            <li><strong>Overhydration Risk:</strong> Chugging large volumes of pure demineralized water flushes out sodium, paradoxically dehydrating cells.</li>
            <li><strong>Daily Protocol:</strong> Morning water with a pinch of Himalayan pink salt + lemon, paired with potassium-dense foods (avocados, bananas, spinach).</li>
          </ul>
        `,
        plainText: 'Hydration requires mineral electrolytes like sodium and potassium to pull water across cell membranes via cellular osmosis.',
        quickActions: [
          { label: '📖 Hydration Masterclass', action: 'openBlogModal("blog_hydration"); FitBot.closeWindow();' },
          { label: '💧 Check Hydration Tracker', action: 'navigateTo("dashboard"); FitBot.closeWindow();' }
        ]
      };
    }

    // 17. DIAAS PROTEIN BIOAVAILABILITY & LEUCINE
    if (query.includes('diaas') || query.includes('leucine') || query.includes('mps') || query.includes('muscle protein synthesis') || query.includes('mtor') || query.includes('amino acid')) {
      return {
        html: `
          <p>🥩 <strong>Protein Quality, DIAAS & The Leucine Trigger:</strong></p>
          <ul>
            <li><strong>DIAAS (Digestible Indispensable Amino Acid Score):</strong> Evaluates true ileal amino acid absorption (Eggs: 1.18, Greek yogurt: 1.15, Tempeh: 0.90).</li>
            <li><strong>The 2.5g–3.0g Leucine Threshold:</strong> Essential branched-chain amino acid trigger required to activate the mTOR pathway for muscle repair.</li>
            <li><strong>Target Intake:</strong> 1.6 to 2.2g of protein per kg of bodyweight daily for active individuals.</li>
          </ul>
        `,
        plainText: 'To stimulate muscle protein synthesis, aim for 2.5 to 3 grams of leucine per meal and a total of 1.6 to 2.2 grams of protein per kilogram of body weight.',
        quickActions: [
          { label: '📖 Read Protein Masterclass', action: 'openBlogModal("blog_protein"); FitBot.closeWindow();' },
          { label: '🥩 Clean Proteins Guide', action: 'navigateTo("wholefoods"); FitBot.closeWindow();' }
        ]
      };
    }

    // 18. CIRCADIAN MEAL TIMING & FASTING
    if (query.includes('circadian') || query.includes('fasting') || query.includes('intermittent') || query.includes('16:8') || query.includes('eating window') || query.includes('autophagy')) {
      return {
        html: `
          <p>⏰ <strong>Circadian Meal Timing & Chronobiology:</strong></p>
          <ul>
            <li><strong>Daylight Insulin Sensitivity:</strong> Pancreatic beta-cells and peripheral tissue insulin receptors are most active during morning daylight.</li>
            <li><strong>Evening Melatonin Shift:</strong> In darkness, melatonin signals beta-cells to reduce insulin secretion. Heavy late meals produce extended glucose elevation.</li>
            <li><strong>The 10–12h Window:</strong> Eating within a daylight window (e.g. 8:00 AM – 7:00 PM) allows nighttime gut Migratory Motor Complex (MMC) housekeeping and cellular autophagy.</li>
          </ul>
        `,
        plainText: 'Eat with the sun: insulin sensitivity peaks in daylight. Keep a 10 to 12-hour eating window and finish dinner 3 hours before sleep.',
        quickActions: [
          { label: '📖 Circadian Masterclass', action: 'openBlogModal("blog_circadian"); FitBot.closeWindow();' },
          { label: '😴 Sleep Hygiene Protocol', action: 'navigateTo("mindfulness"); FitBot.closeWindow();' }
        ]
      };
    }

    // 19. VITAMINS & MINERALS
    if (query.includes('vitamin') || query.includes('magnesium') || query.includes('zinc') || query.includes('omega 3') || query.includes('omega-3') || query.includes('supplement') || query.includes('d3') || query.includes('b12') || query.includes('iron')) {
      return {
        html: `
          <p>💊 <strong>Evidence-Based Micronutrient Guide:</strong></p>
          <ul>
            <li>☀️ <strong>Vitamin D3 + K2:</strong> Essential for immune modulation, bone mineralization, and mood regulation. Best absorbed with dietary fat.</li>
            <li>🧘 <strong>Magnesium (Glycinate / Malate):</strong> Cofactor for 300+ enzymatic reactions; relaxes muscle tone and facilitates deep GABA sleep. Found in pumpkin seeds, spinach, almonds.</li>
            <li>🐟 <strong>Marine Omega-3 (EPA/DHA):</strong> Structural component of brain neuronal membranes and cardiovascular anti-inflammatory. Found in wild salmon.</li>
            <li>⚡ <strong>Zinc:</strong> Vital for cellular immunity and DNA synthesis. Found in pumpkin seeds, chickpeas, and lentils.</li>
          </ul>
        `,
        plainText: 'Essential micronutrients include Vitamin D3, Magnesium for cellular calm, Marine Omega-3 (EPA/DHA) for brain and heart, and Zinc for immunity.',
        quickActions: [
          { label: '🥦 Whole Foods Guide', action: 'navigateTo("wholefoods"); FitBot.closeWindow();' },
          { label: '🍎 Superfood Guide', action: 'navigateTo("fruits"); FitBot.closeWindow();' }
        ]
      };
    }

    // 20. GREETINGS & CHIT-CHAT
    if (query.includes('hi') || query.includes('hello') || query.includes('hey') || query.includes('good morning') || query.includes('good evening') || query === 'help') {
      return {
        html: `
          <p>👋 Hello ${userName}! I'm FitBot, your dedicated FitCare AI Wellness Guide.</p>
          <p>I can answer questions on:</p>
          <ul>
            <li>🍎 30 Superfruits & 24 Whole Foods with clinical benefits</li>
            <li>📖 6 Scientific Nutrition Masterclasses (UPF, Gut, Glucose, Protein, Hydration)</li>
            <li>🧮 TDEE, BMR, BMI, Heart Rate & Sleep calculations</li>
            <li>🏋️ Workout interval coaching & form cues</li>
            <li>💧 Hydration tracking & Daily Micro-Habits</li>
            <li>🧘 Guided breathing techniques & sleep hygiene</li>
          </ul>
          <p>What would you like to explore or optimize today?</p>
        `,
        plainText: `Hello ${userName}! I am FitBot, your AI wellness coach. Ask me about superfoods, whole foods, UPF impact, glucose curves, workouts, calories, or sleep.`,
        quickActions: [
          { label: '📊 Check My Stats', action: 'FitBot.sendQuickPrompt("Check my stats");' },
          { label: '🥦 Whole Foods Guide', action: 'navigateTo("wholefoods"); FitBot.closeWindow();' },
          { label: '📖 Nutrition Blog', action: 'navigateTo("blog"); FitBot.closeWindow();' },
          { label: '🧮 Calculators', action: 'navigateTo("calculators"); FitBot.closeWindow();' }
        ]
      };
    }

    // 21. GENERAL / FALLBACK AI RESPONSE
    return {
      html: `
        <p>🤖 <strong>FitBot Guidance:</strong></p>
        <p>Regarding "<em>${rawQuery}</em>":</p>
        <p>In evidence-based health science, sustainable vitality relies on the <strong>4 Pillars of FitCare</strong>:</p>
        <ul>
          <li>🌿 <strong>Whole Food Nourishment:</strong> High micronutrient diversity (30+ plants/week), 25g+ fiber, minimal UPFs, and clean protein.</li>
          <li>💧 <strong>Cellular Hydration:</strong> Mineral-balanced fluid intake tailored to bodyweight and activity level.</li>
          <li>🏃‍♂️ <strong>Daily Functional Movement:</strong> Combining Zone 2 aerobic base work with compound resistance training.</li>
          <li>😴 <strong>Restorative Recovery:</strong> 7–9 hours of deep sleep and daily vagus nerve relaxation.</li>
        </ul>
        <p>Feel free to ask for specific food stats, articles, calorie math, workout timers, or breathing techniques!</p>
      `,
      plainText: `For ${rawQuery}, sustainable wellness relies on whole foods, proper hydration, functional movement, and restorative sleep.`,
      quickActions: [
        { label: '🥦 Whole Foods Encyclopedia', action: 'navigateTo("wholefoods"); FitBot.closeWindow();' },
        { label: '📖 Nutrition Masterclasses', action: 'navigateTo("blog"); FitBot.closeWindow();' },
        { label: '🏋️ Workout Coach', action: 'navigateTo("workouts"); FitBot.closeWindow();' },
        { label: '🧮 Health Calculators', action: 'navigateTo("calculators"); FitBot.closeWindow();' }
      ]
    };
  },

  bindEvents() {
    const fab = document.getElementById('fitbotFab');
    if (fab) fab.addEventListener('click', () => this.toggleWindow());

    const minimizeBtn = document.getElementById('fitbotMinimizeBtn');
    if (minimizeBtn) minimizeBtn.addEventListener('click', () => this.closeWindow());

    const voiceBtn = document.getElementById('fitbotVoiceToggleBtn');
    if (voiceBtn) voiceBtn.addEventListener('click', () => this.toggleVoice());

    const clearBtn = document.getElementById('fitbotClearChatBtn');
    if (clearBtn) clearBtn.addEventListener('click', () => this.clearChat());

    const form = document.getElementById('fitbotForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleUserSubmit();
      });
    }

    // Quick suggestion chips
    document.querySelectorAll('.fitbot-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.dataset.prompt;
        this.sendQuickPrompt(prompt);
      });
    });
  }
};

// ===================================================================
// 13. EVENT LISTENERS & APPLICATION INITIALIZATION
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize State
  AppState.init();

  // Initialize Auth & Profile
  AuthManager.init();

  // Initialize FitBot AI Coach
  FitBot.init();

  // Apply Theme
  document.body.dataset.theme = AppState.theme;
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');
  if (AppState.theme === 'dark') {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  }

  // Apply Sound button state
  const soundOnIcon = document.getElementById('soundOnIcon');
  const soundOffIcon = document.getElementById('soundOffIcon');
  if (!AppState.soundEnabled) {
    soundOnIcon.classList.add('hidden');
    soundOffIcon.classList.remove('hidden');
  }

  // Update Streak counter badge
  const streakText = document.getElementById('streakCount');
  if (streakText) streakText.textContent = AppState.streak.toString();

  // 2. Render initial components
  renderHabits();
  updateWaterVisual();
  updateVitalityScore();
  renderFamousQuoteInBanner(0);
  renderDailyFocus(0);
  renderDashboardMacroSummary();
  renderFruitGrid('all', '');
  renderWholeFoodsGrid('all', '');
  renderBlogArticles('all', '');
  renderFamousQuotesWall('all');
  renderExerciseGrid();
  updateRoutineTray();
  renderLoggedFoods();
  renderRecipes();
  renderHealthySwaps();
  renderMythBusters();

  // Calculate default values for calculators
  calculateBMI();
  calculateBmrTdee();
  calculateMacros();
  calculateWaterIntake();
  calculateHeartRateZones();
  calculateBedtimes();

  // If saved gratitude note exists
  const noteBox = document.getElementById('gratitudeNote');
  if (noteBox && AppState.gratitudeNote) {
    noteBox.value = AppState.gratitudeNote;
  }

  // If saved mood exists
  if (AppState.selectedMood) {
    setMood(AppState.selectedMood);
  }

  // 3. Theme Toggle
  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = AppState.theme;
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
    AppState.save();
    AppState.save();
    updateDrawerControlsUI();
  });

  // Sound Toggle
  document.getElementById('soundToggleBtn').addEventListener('click', () => {
    AppState.soundEnabled = !AppState.soundEnabled;
    soundOnIcon.classList.toggle('hidden');
    soundOffIcon.classList.toggle('hidden');
    AppState.save();
    if (!AppState.soundEnabled) {
      SoundEngine.stopAmbient();
    }
    updateDrawerControlsUI();
  });

  // Drawer Quick Controls Helper
  function updateDrawerControlsUI() {
    const drawerThemeIcon = document.getElementById('drawerThemeIcon');
    const drawerThemeLabel = document.getElementById('drawerThemeLabel');
    if (drawerThemeIcon && drawerThemeLabel) {
      if (AppState.theme === 'dark') {
        drawerThemeIcon.textContent = '☀️';
        drawerThemeLabel.textContent = 'Light Theme';
      } else {
        drawerThemeIcon.textContent = '🌙';
        drawerThemeLabel.textContent = 'Dark Theme';
      }
    }

    const drawerSoundIcon = document.getElementById('drawerSoundIcon');
    const drawerSoundLabel = document.getElementById('drawerSoundLabel');
    if (drawerSoundIcon && drawerSoundLabel) {
      drawerSoundIcon.textContent = AppState.soundEnabled ? '🔊' : '🔇';
      drawerSoundLabel.textContent = AppState.soundEnabled ? 'Sound: On' : 'Sound: Muted';
    }
  }

  updateDrawerControlsUI();

  const drawerThemeBtn = document.getElementById('drawerThemeBtn');
  if (drawerThemeBtn) {
    drawerThemeBtn.addEventListener('click', () => {
      AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
      document.body.dataset.theme = AppState.theme;
      moonIcon.classList.toggle('hidden');
      sunIcon.classList.toggle('hidden');
      AppState.save();
      updateDrawerControlsUI();
    });
  }

  const drawerSoundBtn = document.getElementById('drawerSoundBtn');
  if (drawerSoundBtn) {
    drawerSoundBtn.addEventListener('click', () => {
      AppState.soundEnabled = !AppState.soundEnabled;
      soundOnIcon.classList.toggle('hidden');
      soundOffIcon.classList.toggle('hidden');
      AppState.save();
      if (!AppState.soundEnabled) {
        SoundEngine.stopAmbient();
      }
      updateDrawerControlsUI();
    });
  }

  // Mobile Drawer Events
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => openMobileDrawer());
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => closeMobileDrawer());
  }
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', () => closeMobileDrawer());
  }

  // Famous Quote Buttons
  const newQuoteBtn = document.getElementById('newQuoteBtn');
  if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', () => {
      nextFamousQuote();
    });
  }

  const copyQuoteBtn = document.getElementById('copyQuoteBtn');
  if (copyQuoteBtn) {
    copyQuoteBtn.addEventListener('click', () => {
      const q = FAMOUS_QUOTES_DATABASE[currentFamousQuoteIndex % FAMOUS_QUOTES_DATABASE.length];
      copyQuoteToClipboard(q.quote, q.author);
    });
  }

  // Daily Focus Button
  const nextFocusBtn = document.getElementById('nextFocusBtn');
  if (nextFocusBtn) {
    nextFocusBtn.addEventListener('click', () => {
      nextDailyFocus();
    });
  }

  // Water Tracker Buttons
  document.getElementById('addWaterGlassBtn').addEventListener('click', () => {
    AppState.waterCurrentMl += 250;
    AppState.save();
    SoundEngine.playChime();
    updateWaterVisual();
    updateVitalityScore();
  });

  document.getElementById('addWater500Btn').addEventListener('click', () => {
    AppState.waterCurrentMl += 500;
    AppState.save();
    SoundEngine.playChime();
    updateWaterVisual();
    updateVitalityScore();
  });

  document.getElementById('resetWaterBtn').addEventListener('click', () => {
    AppState.waterCurrentMl = 0;
    AppState.save();
    updateWaterVisual();
    updateVitalityScore();
  });

  // Add Habit Form
  document.getElementById('addHabitForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newHabitInput');
    const text = input.value.trim();
    if (!text) return;

    AppState.habits.push({
      id: `h_${Date.now()}`,
      text: text,
      completed: false
    });
    AppState.save();
    SoundEngine.playChime();
    input.value = '';
    renderHabits();
    updateVitalityScore();
  });

  // Mood Buttons
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => setMood(btn.dataset.mood));
  });

  // Gratitude Note Save
  document.getElementById('saveGratitudeBtn').addEventListener('click', () => {
    const val = document.getElementById('gratitudeNote').value;
    AppState.gratitudeNote = val;
    AppState.save();
    SoundEngine.playChime();
    alert('✨ Your thoughtful gratitude note was safely saved!');
  });

  // Exercise Search & Filters
  const searchInput = document.getElementById('exerciseSearchInput');
  const filterPills = document.getElementById('exerciseFilterPills');

  let activeExerciseCategory = 'all';

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderExerciseGrid(activeExerciseCategory, e.target.value);
    });
  }

  if (filterPills) {
    filterPills.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeExerciseCategory = btn.dataset.category;
        renderExerciseGrid(activeExerciseCategory, searchInput ? searchInput.value : '');
      });
    });
  }

  // Routine Clear & Start
  document.getElementById('clearRoutineBtn').addEventListener('click', () => {
    AppState.routineQueue = [];
    AppState.save();
    updateRoutineTray();
    renderExerciseGrid(activeExerciseCategory, searchInput ? searchInput.value : '');
  });

  document.getElementById('startCustomRoutineBtn').addEventListener('click', () => {
    if (AppState.routineQueue.length === 0) return;
    SevenMinCoach.openModal();
  });

  // 7-Min Workout Coach Modal Controls
  document.getElementById('openSevenMinBtn').addEventListener('click', () => SevenMinCoach.openModal());
  document.getElementById('closeSevenMinModal').addEventListener('click', () => SevenMinCoach.closeModal());
  document.getElementById('coachTogglePlayBtn').addEventListener('click', () => SevenMinCoach.togglePlay());
  document.getElementById('coachNextBtn').addEventListener('click', () => SevenMinCoach.next());
  document.getElementById('coachPrevBtn').addEventListener('click', () => SevenMinCoach.prev());

  // HIIT Timer Controls
  document.getElementById('openHiitTimerBtn').addEventListener('click', () => HiitTimer.openModal());
  document.getElementById('closeHiitModal').addEventListener('click', () => HiitTimer.closeModal());
  document.getElementById('startHiitWorkoutBtn').addEventListener('click', () => HiitTimer.launch());
  document.getElementById('hiitPauseResumeBtn').addEventListener('click', () => HiitTimer.togglePause());
  document.getElementById('hiitStopResetBtn').addEventListener('click', () => HiitTimer.stop());

  // Food Logging Form
  document.getElementById('addFoodForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('foodName').value.trim();
    const cals = parseInt(document.getElementById('foodCalories').value, 10) || 0;
    const prot = parseInt(document.getElementById('foodProtein').value, 10) || 0;
    const carbs = parseInt(document.getElementById('foodCarbs').value, 10) || 0;
    const fat = parseInt(document.getElementById('foodFat').value, 10) || 0;

    AppState.loggedFoods.push({ name, calories: cals, protein: prot, carbs, fat });
    AppState.save();
    SoundEngine.playChime();

    // Reset inputs
    document.getElementById('foodName').value = '';
    document.getElementById('foodCalories').value = '';
    document.getElementById('foodProtein').value = '0';
    document.getElementById('foodCarbs').value = '0';
    document.getElementById('foodFat').value = '0';

    renderLoggedFoods();
  });

  document.getElementById('resetFoodLogBtn').addEventListener('click', () => {
    if (confirm("Reset today's food log?")) {
      AppState.loggedFoods = [];
      AppState.save();
      renderLoggedFoods();
    }
  });

  // Recipe Category Filter Pills
  const recipeFilterPills = document.getElementById('recipeFilterPills');
  if (recipeFilterPills) {
    recipeFilterPills.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        recipeFilterPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderRecipes(btn.dataset.recipe);
      });
    });
  }

  // Calculators Tabs
  const calcTabs = document.getElementById('calcTabs');
  if (calcTabs) {
    calcTabs.querySelectorAll('.calc-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        calcTabs.querySelectorAll('.calc-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.calc-panel').forEach(p => p.classList.remove('active'));
        const panel = document.getElementById(`calc-${btn.dataset.calc}`);
        if (panel) panel.classList.add('active');
      });
    });
  }

  // Calculator Form Action Listeners
  // BMI Unit Toggle
  const bmiMetricBtn = document.getElementById('bmiMetricBtn');
  const bmiImperialBtn = document.getElementById('bmiImperialBtn');
  const bmiMetricInputs = document.getElementById('bmiMetricInputs');
  const bmiImperialInputs = document.getElementById('bmiImperialInputs');

  bmiMetricBtn.addEventListener('click', () => {
    bmiMetricBtn.classList.add('active');
    bmiImperialBtn.classList.remove('active');
    bmiMetricInputs.classList.remove('hidden');
    bmiImperialInputs.classList.add('hidden');
  });

  bmiImperialBtn.addEventListener('click', () => {
    bmiImperialBtn.classList.add('active');
    bmiMetricBtn.classList.remove('active');
    bmiImperialInputs.classList.remove('hidden');
    bmiMetricInputs.classList.add('hidden');
  });

  document.getElementById('calculateBmiBtn').addEventListener('click', calculateBMI);
  document.getElementById('calculateBmrBtn').addEventListener('click', calculateBmrTdee);
  document.getElementById('calculateMacrosBtn').addEventListener('click', calculateMacros);
  document.getElementById('calculateWaterIntakeBtn').addEventListener('click', calculateWaterIntake);
  document.getElementById('calculateHrZonesBtn').addEventListener('click', calculateHeartRateZones);
  document.getElementById('calculateBedtimesBtn').addEventListener('click', calculateBedtimes);

  // Apply Calculated Water to Hydration Tracker
  document.getElementById('applyWaterToTrackerBtn').addEventListener('click', () => {
    if (window._lastCalculatedWaterTarget) {
      AppState.waterTargetMl = window._lastCalculatedWaterTarget;
      AppState.save();
      SoundEngine.playChime();
      updateWaterVisual();
      updateVitalityScore();
      alert(`💧 Success! Your daily hydration target is now set to ${AppState.waterTargetMl.toLocaleString()} ml!`);
      navigateTo('dashboard');
    }
  });

  // Breathing Coach Controls
  document.getElementById('startBreathingBtn').addEventListener('click', () => BreathingCoach.start());
  document.getElementById('stopBreathingBtn').addEventListener('click', () => BreathingCoach.stop());

  document.querySelectorAll('.breathing-pattern-select .btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.breathing-pattern-select .btn-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      BreathingCoach.stop();
      BreathingCoach.pattern = btn.dataset.pattern;
    });
  });

  // Ambient Sound Controls
  document.querySelectorAll('.sound-play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.sound;
      const isPlaying = SoundEngine.toggleAmbient(type);

      document.querySelectorAll('.sound-play-btn').forEach(b => {
        b.textContent = 'Play';
        b.closest('.sound-track-item').classList.remove('playing');
      });

      if (isPlaying) {
        btn.textContent = 'Playing';
        btn.closest('.sound-track-item').classList.add('playing');
      }
    });
  });

  const ambientVolumeSlider = document.getElementById('ambientVolume');
  if (ambientVolumeSlider) {
    ambientVolumeSlider.addEventListener('input', (e) => {
      SoundEngine.setVolume(parseInt(e.target.value, 10));
    });
  }

  // Fruit Portion Slider & Search
  const fruitPortionSlider = document.getElementById('fruitPortionSlider');
  const portionGramsDisplay = document.getElementById('portionGramsDisplay');
  const fruitSearchInput = document.getElementById('fruitSearchInput');

  if (fruitPortionSlider) {
    fruitPortionSlider.addEventListener('input', (e) => {
      const grams = parseInt(e.target.value, 10);
      currentFruitPortionRatio = grams / 100;
      if (portionGramsDisplay) portionGramsDisplay.textContent = `${grams}g`;
      renderFruitGrid(activeFruitCategory, fruitSearchInput ? fruitSearchInput.value : '');
    });
  }

  if (fruitSearchInput) {
    fruitSearchInput.addEventListener('input', (e) => {
      renderFruitGrid(activeFruitCategory, e.target.value);
    });
  }

  const fruitFilterPills = document.getElementById('fruitFilterPills');
  if (fruitFilterPills) {
    fruitFilterPills.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        fruitFilterPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFruitCategory = btn.dataset.fruitcat;
        renderFruitGrid(activeFruitCategory, fruitSearchInput ? fruitSearchInput.value : '');
      });
    });
  }

  // Fruit Details Modal Actions
  const closeFruitModalBtn1 = document.getElementById('closeFruitModal');
  const closeFruitModalBtn2 = document.getElementById('closeFruitModalBtn');
  const modalLogFruitBtn = document.getElementById('modalLogFruitBtn');

  if (closeFruitModalBtn1) closeFruitModalBtn1.addEventListener('click', closeFruitModal);
  if (closeFruitModalBtn2) closeFruitModalBtn2.addEventListener('click', closeFruitModal);

  if (modalLogFruitBtn) {
    modalLogFruitBtn.addEventListener('click', () => {
      if (activeModalFruitId) {
        logFruitToDiary(activeModalFruitId);
        closeFruitModal();
      }
    });
  }

  // Whole Foods Portion Slider, Search & Filters
  const wholeFoodPortionSlider = document.getElementById('wholeFoodPortionSlider');
  const wholeFoodPortionDisplay = document.getElementById('wholeFoodPortionDisplay');
  const wholeFoodSearchInput = document.getElementById('wholeFoodSearchInput');
  const wholeFoodFilterPills = document.getElementById('wholeFoodFilterPills');

  if (wholeFoodPortionSlider) {
    wholeFoodPortionSlider.addEventListener('input', (e) => {
      const grams = parseInt(e.target.value, 10);
      currentWholeFoodPortionRatio = grams / 100;
      if (wholeFoodPortionDisplay) wholeFoodPortionDisplay.textContent = `${grams}g`;
      renderWholeFoodsGrid(activeWholeFoodCategory, wholeFoodSearchInput ? wholeFoodSearchInput.value : '');
    });
  }

  if (wholeFoodSearchInput) {
    wholeFoodSearchInput.addEventListener('input', (e) => {
      renderWholeFoodsGrid(activeWholeFoodCategory, e.target.value);
    });
  }

  if (wholeFoodFilterPills) {
    wholeFoodFilterPills.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        wholeFoodFilterPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeWholeFoodCategory = btn.dataset.wfcat;
        renderWholeFoodsGrid(activeWholeFoodCategory, wholeFoodSearchInput ? wholeFoodSearchInput.value : '');
      });
    });
  }

  // Whole Food Details Modal Actions
  const closeWfModal1 = document.getElementById('closeWfModal');
  const closeWfModal2 = document.getElementById('closeWfModalBtn');
  const modalLogWfBtn = document.getElementById('modalLogWfBtn');

  if (closeWfModal1) closeWfModal1.addEventListener('click', closeWholeFoodModal);
  if (closeWfModal2) closeWfModal2.addEventListener('click', closeWholeFoodModal);

  if (modalLogWfBtn) {
    modalLogWfBtn.addEventListener('click', () => {
      if (activeModalWholeFoodId) {
        logWholeFoodToDiary(activeModalWholeFoodId);
        closeWholeFoodModal();
      }
    });
  }

  // Blog Articles Search & Filters
  const blogSearchInput = document.getElementById('blogSearchInput');
  const blogFilterPills = document.getElementById('blogFilterPills');

  if (blogSearchInput) {
    blogSearchInput.addEventListener('input', (e) => {
      renderBlogArticles(activeBlogCategory, e.target.value);
    });
  }

  if (blogFilterPills) {
    blogFilterPills.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        blogFilterPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeBlogCategory = btn.dataset.blogcat;
        renderBlogArticles(activeBlogCategory, blogSearchInput ? blogSearchInput.value : '');
      });
    });
  }

  // Blog Reader Modal Actions
  const closeBlogModal1 = document.getElementById('closeBlogModal');
  const closeBlogModal2 = document.getElementById('closeBlogModalBtn');
  const askFitbotAboutArticleBtn = document.getElementById('askFitbotAboutArticleBtn');

  if (closeBlogModal1) closeBlogModal1.addEventListener('click', closeBlogModal);
  if (closeBlogModal2) closeBlogModal2.addEventListener('click', closeBlogModal);

  if (askFitbotAboutArticleBtn) {
    askFitbotAboutArticleBtn.addEventListener('click', () => {
      if (activeModalArticleId) {
        const article = BLOG_ARTICLES_DATABASE.find(a => a.id === activeModalArticleId);
        closeBlogModal();
        FitBot.openWindow();
        if (article) {
          FitBot.sendQuickPrompt(`Explain key clinical takeaways from "${article.title}"`);
        }
      }
    });
  }

  // Hall of Famous Quotes Filter Pills
  const quoteFilterPills = document.getElementById('quoteFilterPills');
  if (quoteFilterPills) {
    quoteFilterPills.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        quoteFilterPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFamousQuotesWall(btn.dataset.qfilter);
      });
    });
  }

  // Backdrop click dismiss for all modals
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        if (modal.id === 'sevenMinModal' && typeof SevenMinCoach !== 'undefined') SevenMinCoach.pause();
        if (modal.id === 'hiitTimerModal' && typeof HiitTimer !== 'undefined') HiitTimer.stop();
        if (modal.id === 'fruitDetailsModal') activeModalFruitId = null;
        if (modal.id === 'wholeFoodDetailsModal') activeModalWholeFoodId = null;
        if (modal.id === 'blogReaderModal') activeModalArticleId = null;
      }
    });
  });
});

// Expose modules and interactive methods to global window
window.FitBot = FitBot;
window.AuthManager = AuthManager;
window.SevenMinCoach = SevenMinCoach;
window.HiitTimer = HiitTimer;
window.BreathingCoach = BreathingCoach;
window.SoundEngine = SoundEngine;
window.openFruitModal = openFruitModal;
window.closeFruitModal = closeFruitModal;
window.openWholeFoodModal = openWholeFoodModal;
window.closeWholeFoodModal = closeWholeFoodModal;
window.openBlogModal = openBlogModal;
window.closeBlogModal = closeBlogModal;
window.showToast = showToast;
window.renderHabits = renderHabits;
window.renderFruitGrid = renderFruitGrid;
window.renderWholeFoodsGrid = renderWholeFoodsGrid;
window.renderBlogArticles = renderBlogArticles;
window.renderExerciseGrid = renderExerciseGrid;
window.renderRecipes = renderRecipes;
window.calculateBMI = calculateBMI;
window.calculateBmrTdee = calculateBmrTdee;
window.calculateMacros = calculateMacros;
window.calculateWaterIntake = calculateWaterIntake;
window.calculateHeartRateZones = calculateHeartRateZones;
window.calculateBedtimes = calculateBedtimes;
