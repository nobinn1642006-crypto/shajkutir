if (typeof window === 'undefined') { var window = global; }
/**
 * SHAJKUTIR PUJA SAREE 2026
 * Central Configuration File
 * 
 * Edit this file to customize brand details, contact info, campaign dates,
 * advance discount, bKash/Nagad numbers, and backend Google Apps Script integration.
 */

window.siteSettings = {

  // Brand Details
  brandName: "ShajKutir",
  brandName_bn: "সাজকুটির",
  brandTagline_bn: "প্রতিটি নারীর অধিকার সুন্দর অনুভব করার",
  brandTagline_en: "Every Woman Deserves to Feel Beautiful",

  // Contact Information
  // Phone: mobile clickable (tel:+88017...)
  supportPhone: "+880 1341078165",
  supportPhoneDisplay: "+880 1341078165",

  // Official Store Email (Clicking opens Gmail compose with this address prefilled)
  ownerEmail: "helloshajkutir@gmail.com",

  // Official Facebook Page
  facebookPage: "https://www.facebook.com/shajkutir.store",
  messengerUsername: "shajkutir",
  messengerUrl: "https://m.me/shajkutir.store",

  // WhatsApp Support Number (without +, e.g. 8801712345678)
  whatsappNumber: "8801712345678",

  // Currency Symbols
  currency_bn: "৳",
  currency_en: "৳",

  // Default Language: 'bn' (Bangla) or 'en' (English)
  defaultLanguage: "bn",

  // Backend Integration: Google Apps Script Web App Deployment URL
  // Paste your published Web App URL here after deploying backend/Code.gs
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbyMUD5muApkp6m9B_3ji-HTsPjkjG51bUKntzKh7xcVzJtJRhmT9tgxAxTqY1AaCt2zww/exec",

  // Social Channels
  socialLinks: {
    facebook: "https://facebook.com/shajkutir",
    instagram: "https://instagram.com/shajkutir"
  },

  // Delivery Charges (in BDT)
  deliveryFees: {
    insideDhaka: 70,
    outsideDhaka: 130
  },

  // Payment & Advance Delivery Charge Configuration
  paymentSettings: {
    // Discount in BDT when customer pays advance delivery charge (Easily editable!)
    advanceDiscount: 50,

    // If true, customer MUST pay advance delivery charge for every order.
    // If false, customer can choose between Advance Payment (with ৳50 discount) or Full COD.
    advanceDeliveryOnly: false,

    // Your bKash and Nagad numbers for receiving advance delivery charge
    bkashNumber: "01569136184",
    nagadNumber: "01569136184",
    accountType: "Personal (Send Money)"
  }
};

var siteSettings = window.siteSettings;

// Export for module environments if needed, while remaining available globally in browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteSettings;
}
