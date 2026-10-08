if (typeof window === 'undefined') { var window = global; }
/**
 * SHAJKUTIR PUJA SAREE 2026 - PRODUCT CATALOG
 * 
 * - Only high-performance, ultra-lightweight .webp images are used.
 * - Dynamic image support: You can add 4, 5, 6, 8, or more .webp images per saree!
 * - Color / Design Variant Support: When customer taps a photo, that specific color/design
 *   is selected and its exact photo & name is recorded in Google Sheets and WhatsApp!
 */

window.products = [
  {
    id: "S001",
    active: true,
    category_bn: "ইন্ডিয়ান শাড়ি",
    category_en: "Indian Saree",
    name_bn: "ইন্ডিয়ান সিমার সিল্ক শাড়ি",
    name_en: "Indian Simar Silk Saree",
    price: 1799,
    oldPrice: 2200,
    // Add as many .webp images as you want (4, 5, 6, 8+ images supported!)
    images: [
      { url: "images/products/S001/1.webp", name_bn: "১ নং ডিজাইন (লাইট পার্পল)", name_en: "Design 1 (Light Purple)" },
      { url: "images/products/S001/2.webp", name_bn: "২ নং ডিজাইন (কুঁচি ও পাড়)", name_en: "Design 2 (Pleats)" },
      { url: "images/products/S001/3.webp", name_bn: "৩ নং ডিজাইন (আঁচল)", name_en: "Design 3 (Pallu)" },
      { url: "images/products/S001/4.webp", name_bn: "৪ নং ডিজাইন (ব্লাউজ পিস)", name_en: "Design 4 (Blouse)" },
      { url: "images/products/S001/5.webp", name_bn: "৫ নং ডিজাইন (ব্লাউজ পিস)", name_en: "Design 5 (Blouse)" },
      { url: "images/products/S001/6.webp", name_bn: "৬ নং ডিজাইন (ব্লাউজ পিস)", name_en: "Design 6 (Blouse)" },
      { url: "images/products/S001/7.webp", name_bn: "৭ নং ডিজাইন (ব্লাউজ পিস)", name_en: "Design 7 (Blouse)" }
    ],
    description_bn: "শারদীয় দুর্গোৎসবের অষ্টমী কিংবা বিজয়ার সন্ধ্যায় নিজেকে মোহময়ী সাজে সাজিয়ে তুলতে দারুণ একটি পছন্দ। প্রিমিয়াম শিমার ফিনিশিং ও ঝলমলে টেক্সচারের এই শাড়িটি উৎসবের আলোয় আপনাকে দেবে নিখুঁত আভিজাত্য।",
    description_en: "A perfect drape for the radiant evenings of Durga Puja. Crafted from premium Indian shimmer silk, its luminous sheen and elegant drape ensure a graceful festive presence.",
    fabric_bn: "ইন্ডিয়ান ফেন্ডি / সিমার সিল্ক",
    fabric_en: "Indian Fendi / Shimmer Silk",
    color_bn: "পছন্দ অনুযায়ী নির্বাচন করুন",
    color_en: "Select as per your choice",
    work_bn: "ঝলমলে শিমার ও গর্জিয়াস টেক্সচার",
    work_en: "Luminous Shimmer Texture",
    blouse_bn: "রানিং ব্লাউজ পিস অন্তর্ভুক্ত",
    blouse_en: "Running Blouse Piece Included",
    stock: 56,
    featured: true
  },
  {
    id: "S002",
    active: true,
    category_bn: "বেনারসি কাতান",
    category_en: "Banarasi Katan",
    name_bn: "নীলপদ্ম বেনারসি কাতান শাড়ি",
    name_en: "Royal Neelpadma Katan Saree",
    price: 2450,
    oldPrice: 2950,
    images: [
      { url: "images/products/S002/1.webp", name_bn: "১ নং ডিজাইন (রয়্যাল ব্লু)", name_en: "Design 1 (Royal Blue)" },
      { url: "images/products/S002/2.webp", name_bn: "২ নং ডিজাইন (মীনাকারি বুনন)", name_en: "Design 2 (Meenakari)" },
      { url: "images/products/S002/3.webp", name_bn: "৩ নং ডিজাইন (গ্র্যান্ড আঁচল)", name_en: "Design 3 (Aanchal)" },
      { url: "images/products/S002/4.webp", name_bn: "৪ নং ডিজাইন (ব্রোকেড ব্লাউজ)", name_en: "Design 4 (Brocade Blouse)" }
    ],
    description_bn: "গভীর রাজকীয় নীল জমিনে নিখুঁত এন্টিক গোল্ড জরি ও রঙিন মীনাকারি ফুল-লতাপাতার কাজ। রাতের আলোকোজ্জ্বল পূজা মণ্ডপ কিংবা জমকালো পারিবারিক অনুষ্ঠানে আপনি থাকবেন মধ্যমণি।",
    description_en: "Imbued with royal elegance, this midnight blue Katan saree showcases lustrous antique zari craftsmanship complemented by subtle Meenakari floral detailing.",
    fabric_bn: "খাঁটি সিল্ক কাতান",
    fabric_en: "Pure Silk Katan",
    color_bn: "রয়্যাল মিডনাইট ব্লু ও স্বর্ণালী",
    color_en: "Royal Midnight Blue & Antique Gold",
    work_bn: "ঘন মীনাকারি ফুল ও লতাপাতার কাজ",
    work_en: "Dense Meenakari Floral & Vine Weave",
    blouse_bn: "কনট্রাস্ট ব্রোকেড ব্লাউজ পিসসহ (৮৫ সেমি)",
    blouse_en: "Contrast Brocade Blouse Piece (85 cm)",
    stock: 5,
    featured: true
  },
  {
    id: "S003",
    active: true,
    category_bn: "মসলিন সিল্ক",
    category_en: "Muslin Silk",
    name_bn: "পান্না সবুজ মসলিন সিল্ক শাড়ি",
    name_en: "Emerald Green Muslin Silk Saree",
    price: 2150,
    oldPrice: 2600,
    images: [
      { url: "images/products/S003/1.webp", name_bn: "১ নং ডিজাইন (পান্না সবুজ)", name_en: "Design 1 (Emerald Green)" },
      { url: "images/products/S003/2.webp", name_bn: "২ নং ডিজাইন (সফট সিল্ক ফোল্ড)", name_en: "Design 2 (Silk Folds)" },
      { url: "images/products/S003/3.webp", name_bn: "৩ নং ডিজাইন (সূক্ষ্ম আঁচল)", name_en: "Design 3 (Fine Pallu)" },
      { url: "images/products/S003/4.webp", name_bn: "৪ নং ডিজাইন (রানিং ব্লাউজ)", name_en: "Design 4 (Running Blouse)" }
    ],
    description_bn: "অতুলনীয় মসৃণ ও বাতাসে ওড়ার মতো হালকা মসলিন সিল্ক। কোমল পান্না সবুজ রঙের সাথে ম্যাট গোল্ডেন বুটি ও নিখুঁত আঁচলের কারুকাজ দিনের বেলার উৎসবের জন্য দারুণ স্বাচ্ছন্দ্যময়।",
    description_en: "Featherlight and exceptionally soft muslin silk featuring delicate all-over golden bootis with a statement aanchal. Provides effortless grace for daytime puja festivities.",
    fabric_bn: "সফট মসলিন সিল্ক",
    fabric_en: "Soft Muslin Silk",
    color_bn: "পান্না সবুজ ও ম্যাট গোল্ড",
    color_en: "Emerald Green & Matte Gold",
    work_bn: "হালকা জরি বুটি ও সূক্ষ্ম আঁচল ডিজাইন",
    work_en: "Delicate Zari Buti & Fine Pallu Work",
    blouse_bn: "রানিং ব্লাউজ পিসসহ (৮০ সেমি)",
    blouse_en: "Running Blouse Piece Included (80 cm)",
    stock: 6,
    featured: true
  },
  {
    id: "S004",
    active: true,
    category_bn: "বালুচরি ঐতিহ্য",
    category_en: "Heritage Baluchari",
    name_bn: "সিঁদুর লাল বালুচরি ঐতিহ্য শাড়ি",
    name_en: "Sindoor Red Baluchari Heritage Saree",
    price: 2750,
    oldPrice: 3300,
    images: [
      { url: "images/products/S004/1.webp", name_bn: "১ নং ডিজাইন (সিঁদুর লাল)", name_en: "Design 1 (Sindoor Red)" },
      { url: "images/products/S004/2.webp", name_bn: "২ নং ডিজাইন (রেশম বুনন)", name_en: "Design 2 (Silk Weave)" },
      { url: "images/products/S004/3.webp", name_bn: "৩ নং ডিজাইন (ঐতিহাসিক মোটিফ)", name_en: "Design 3 (Heritage Motif)" },
      { url: "images/products/S004/4.webp", name_bn: "৪ নং ডিজাইন (ডিজাইনার ব্লাউজ)", name_en: "Design 4 (Designer Blouse)" }
    ],
    description_bn: "বাঙালিয়ানার খাঁটি প্রতিচ্ছবি সিঁদুর লাল বালুচরি। আঁচলে বোনা সূক্ষ্ম রেশম সুতার ঐতিহ্যবাহী মোটিফ এবং কপার জরি পার শারদীয় দেবী বন্দনার মহিমাকে নিখুঁতভাবে ফুটিয়ে তোলে।",
    description_en: "A tribute to classical Bengali heritage in sacred sindoor red. Highlighted by intricately woven pallu motifs depicting timeless cultural tales with rich copper zari borders.",
    fabric_bn: "প্রিমিয়াম বালুচরি সিল্ক",
    fabric_en: "Premium Baluchari Silk",
    color_bn: "সিঁদুর লাল ও কপার গোল্ড",
    color_en: "Sindoor Red & Copper Gold",
    work_bn: "ঐতিহাসিক রেশমি সুতা ও জরি বুনন",
    work_en: "Heritage Silk Thread & Zari Motifs",
    blouse_bn: "ডিজাইনার রেশম ব্লাউজ পিসসহ (৮৫ সেমি)",
    blouse_en: "Designer Silk Blouse Piece Included (85 cm)",
    stock: 4,
    featured: true
  },
  {
    id: "S005",
    active: true,
    category_bn: "খাঁটি তসর সিল্ক",
    category_en: "Pure Tussar Silk",
    name_bn: "স্বর্ণাভ তসর সিল্ক শাড়ি",
    name_en: "Champagne Gold Tussar Silk Saree",
    price: 1950,
    oldPrice: 2350,
    images: [
      { url: "images/products/S005/1.webp", name_bn: "১ নং ডিজাইন (শ্যাম্পেন গোল্ড)", name_en: "Design 1 (Champagne Gold)" },
      { url: "images/products/S005/2.webp", name_bn: "২ নং ডিজাইন (কাঁথাকোরি কাজ)", name_en: "Design 2 (Kantha Stitch)" },
      { url: "images/products/S005/3.webp", name_bn: "৩ নং ডিজাইন (জরি পার)", name_en: "Design 3 (Zari Border)" },
      { url: "images/products/S005/4.webp", name_bn: "৪ নং ডিজাইন (মেরুন সিল্ক ব্লাউজ)", name_en: "Design 4 (Maroon Blouse)" }
    ],
    description_bn: "প্রাকৃতিক তসরের রাজকীয় আভা এবং গাঢ় মেরুন বর্ডারের সাথে ঐতিহ্যবাহী কাঁথাকোরি হাতের কাজের ছোঁয়া। যারা ক্লাসিক এবং পরিশীলিত সাজ পছন্দ করেন তাদের জন্য এটি আদর্শ।",
    description_en: "Subtle luxury in natural champagne gold tussar silk. Contrasted with deep maroon borders and authentic handcrafted Kantha stitch accents for discerning tastes.",
    fabric_bn: "খাঁটি তসর সিল্ক",
    fabric_en: "Pure Tussar Silk",
    color_bn: "শ্যাম্পেন গোল্ড ও মেরুন বর্ডার",
    color_en: "Champagne Gold & Maroon Border",
    work_bn: "হস্তনির্মিত কাঁথাকোরি ও জরি পার",
    work_en: "Handcrafted Kantha Embroidery & Zari",
    blouse_bn: "কনট্রাস্ট মেরুন সিল্ক ব্লাউজ পিসসহ",
    blouse_en: "Contrast Maroon Silk Blouse Piece",
    stock: 7,
    featured: true
  }
];

window.ProductStore = {
  getAll: () => window.products.filter(p => p.active),
  getFeatured: () => window.products.filter(p => p.active && p.featured),
  getById: (id) => window.products.find(p => p.id === id),
  // Helper to extract clean image url whether items are strings or objects
  getImageUrl: (item) => (typeof item === 'string' ? item : item.url),
  getImageName: (item, lang = 'bn') => {
    if (typeof item === 'string') {
      const parts = item.split('/');
      return parts[parts.length - 1];
    }
    return lang === 'bn' ? (item.name_bn || item.name_en || 'ডিজাইন') : (item.name_en || item.name_bn || 'Design');
  }
};

var products = window.products;
var ProductStore = window.ProductStore;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products, ProductStore };
}
