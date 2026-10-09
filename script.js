/**
 * SHAJKUTIR PUJA SAREE 2026 - MASTER REDESIGNED SCRIPT
 * Minimal Luxury • Circular Orbital Showcase • Ultra-Lightweight
 * Features:
 * - Dynamic Gallery (Supports 4, 5, 6, 8+ .webp images per saree)
 * - Color / Design Variant Selection & Sheet Tracking
 * - Direct Gmail Web Compose link with prefilled address
 * - Phone & Facebook Page contact integration
 */

(function () {
  'use strict';

  // --- Global Smart Image Format Resolver ---
  window.handleSmartImageFallback = function (img) {
    if (!img) return;
    const extensions = ['.webp', '.jpg', '.jpeg', '.png', '.svg'];
    let attempt = parseInt(img.getAttribute('data-fallback-attempt') || '0', 10);
    const originalSrc = img.getAttribute('data-original-src') || img.src;
    if (!img.getAttribute('data-original-src')) {
      img.setAttribute('data-original-src', originalSrc);
    }

    const lastDot = originalSrc.lastIndexOf('.');
    if (lastDot === -1) return;
    const basePath = originalSrc.substring(0, lastDot);
    const currentExt = originalSrc.substring(lastDot).toLowerCase();

    const alternatives = extensions.filter(e => e !== currentExt);
    if (attempt < alternatives.length) {
      img.setAttribute('data-fallback-attempt', attempt + 1);
      img.src = basePath + alternatives[attempt];
    } else {
      img.onerror = null;
    }
  };

  // --- Translation Dictionary ---
  const i18n = {
    bn: {
      brand_name: "সাজকুটির",
      announcement: "শারদীয় পূজা স্পেশাল অফার ২০২৬ • সারাদেশে হোম ডেলিভারি ও ক্যাশ অন ডেলিভারি সুবিধা",
      brand_tagline: "প্রতিটি নারীর অধিকার সুন্দর অনুভব করার",
      hero_badge: "✨ শারদীয় দুর্গোৎসব কালেকশন ২০২৬ ✨",
      hero_title: "পূজার আভিজাত্যে ৫টি অনন্য শাড়ি",
      hero_subtitle: "পছন্দের শাড়িতে ট্যাপ করে বিস্তারিত দেখুন ও ১-ক্লিকে অর্ডার করুন",
      timer_title: "পূজা শুরু হতে বাকি",
      timer_days: "দিন",
      timer_hours: "ঘণ্টা",
      timer_mins: "মিনিট",
      timer_secs: "সেকেন্ড",
      
      saree_s001_name: "রক্তিম জামদানি",
      saree_s002_name: "বেনারসি কাতান",
      saree_s003_name: "মসলিন সিল্ক",
      saree_s004_name: "বালুচরি ঐতিহ্য",
      saree_s005_name: "তসর সিল্ক",
      orbit_drag_hint: "⟵ আঙুল দিয়ে ঘুরান অথবা শাড়িতে ট্যাপ করুন ⟶",
      trust_delivery: "সারাদেশে হোম ডেলিভারি",
      trust_cod: "ক্যাশ অন ডেলিভারি",
      trust_quality: "খাঁটি তাঁতের নিশ্চয়তা",
      footer_rights: "সর্বস্বত্ব সংরক্ষিত।",
      zoom_hint: "🔍 জুম করতে ক্লিক করুন",
      spec_fabric: "কাপড় / Fabric:",
      spec_color: "রং / Color:",
      spec_work: "কারুকাজ / Work:",
      spec_blouse: "ব্লাউজ / Blouse:",
      btn_order_saree: "এই শাড়িটি অর্ডার করুন",
      btn_ask_whatsapp: "WhatsApp-এ জানুন",
      order_panel_title: "ডেলিভারি তথ্য দিন",
      order_panel_subtitle: "কোন অগ্রিম পেমেন্টের প্রয়োজন নেই। শাড়ি হাতে পেয়ে মূল্য পরিশোধ করুন।",
      form_name: "আপনার নাম",
      form_phone: "মোবাইল নম্বর (WhatsApp)",
      form_address: "সম্পূর্ণ ডেলিভারি ঠিকানা",
      form_area: "ডেলিভারি এলাকা ও চার্জ",
      area_dhaka: "ঢাকার ভিতরে (চার্জ: ৳৭০)",
      area_outside: "ঢাকার বাইরে (চার্জ: ৳১৩০)",
      placeholder_name: "আপনার সম্পূর্ণ নাম",
      placeholder_phone: "017XXXXXXXX",
      placeholder_address: "বাড়ি/ফ্ল্যাট, রোড, থানা, জেলা...",
      form_payment_method: "পেমেন্ট মেথড",
      pay_opt_advance_title: "ডেলিভারি চার্জ বিকাশ/নগদে দিন",
      pay_opt_advance_badge: "৳৫০ ছাড়!",
      pay_opt_advance_desc: "ডেলিভারি চার্জ অগ্রিম দিলে মোট বিল থেকে ৳৫০ ক্যাশ ছাড় পাবেন।",
      pay_opt_cod_title: "ক্যাশ অন ডেলিভারি (কোনো ছাড় নেই)",
      pay_opt_cod_desc: "শাড়ি হাতে পেয়ে কুরিয়ারকে পুরো টাকা পরিশোধ করবেন।",
      advance_instruction: "ডেলিভারি চার্জ নিচের নম্বরে Send Money করুন:",
      form_sender_phone: "যে নম্বর থেকে টাকা পাঠিয়েছেন",
      form_trx_id: "TrxID (ট্রানজেকশন আইডি)",
      err_sender_phone: "প্রেরকের ১১ ডিজিটের বিকাশ/নগদ নম্বর লিখুন।",
      err_trx_id: "সঠিক TrxID লিখুন।",
      bill_subtotal: "শাড়ির মূল্য:",
      bill_delivery: "ডেলিভারি চার্জ:",
      bill_advance_discount: "অগ্রিম পেমেন্ট ছাড়:",
      bill_total: "সর্বমোট মূল্য:",
      bill_due_cod: "কুরিয়ারে প্রদেয় (COD):",
      btn_confirm_order: "অর্ডার নিশ্চিত করুন",
      order_submitting: "অর্ডার পাঠানো হচ্ছে...",
      err_name: "অনুগ্রহ করে আপনার নাম লিখুন।",
      err_phone: "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01712345678)।",
      err_address: "অনুগ্রহ করে সম্পূর্ণ ঠিকানা লিখুন।",
      err_submission: "অর্ডার পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা WhatsApp-এ যোগাযোগ করুন।",
      confirm_title: "অর্ডার সফলভাবে গ্রহণ করা হয়েছে! 🎉",
      confirm_order_no_lbl: "অর্ডার নম্বর:",
      confirm_item: "শাড়ির নাম:",
      confirm_variant_lbl: "নির্বাচিত কালার/ডিজাইন:",
      confirm_qty: "পরিমাণ:",
      confirm_payment_method: "পেমেন্ট মেথড:",
      confirm_trx_lbl: "TrxID:",
      confirm_total: "সর্বমোট মূল্য:",
      confirm_cod_due: "কুরিয়ারে প্রদেয় (COD):",
      confirm_reminder: "আমরা খুব শীঘ্রই আপনার ঠিকানায় শাড়ি পৌঁছে দেওয়ার জন্য ফোনে যোগাযোগ করব। ধন্যবাদ!",
      confirm_wa_btn: "WhatsApp-এ মেসেজ পাঠান",
      confirm_close_btn: "হোমপেজে ফিরে যান",
      save_prefix: "Save "
    },
    en: {
      brand_name: "ShajKutir",
      announcement: "✨ Durga Puja Special Offer 2026 • Cash on Delivery Available Nationwide ✨",
      brand_tagline: "Every Woman Deserves to Feel Beautiful",
      hero_badge: "✨ Durga Puja Special Collection 2026 ✨",
      hero_title: "Top 5 Festive Sarees for Puja Royalty",
      hero_subtitle: "Tap any saree to view details and order in 1 click",
      timer_title: "Countdown to Durga Puja",
      timer_days: "Days",
      timer_hours: "Hours",
      timer_mins: "Mins",
      timer_secs: "Secs",
      
      saree_s001_name: "Crimson Jamdani",
      saree_s002_name: "Banarasi Katan",
      saree_s003_name: "Muslin Silk",
      saree_s004_name: "Baluchari Heritage",
      saree_s005_name: "Tussar Silk",
      orbit_drag_hint: "⟵ Drag to rotate or tap any saree ⟶",
      trust_delivery: "Nationwide Home Delivery",
      trust_cod: "Cash on Delivery",
      trust_quality: "100% Authentic Handloom",
      footer_rights: "All rights reserved.",
      zoom_hint: "🔍 Click to zoom",
      spec_fabric: "Fabric:",
      spec_color: "Color:",
      spec_work: "Craft / Work:",
      spec_blouse: "Blouse Piece:",
      btn_order_saree: "Order This Saree",
      btn_ask_whatsapp: "Inquire on WhatsApp",
      order_panel_title: "Enter Delivery Info",
      order_panel_subtitle: "No advance payment needed. Pay in cash upon delivery.",
      form_name: "Your Full Name",
      form_phone: "Mobile Number (WhatsApp)",
      form_address: "Full Delivery Address",
      form_area: "Delivery Area & Fee",
      area_dhaka: "Inside Dhaka (Fee: ৳70)",
      area_outside: "Outside Dhaka (Fee: ৳130)",
      placeholder_name: "Enter your full name",
      placeholder_phone: "017XXXXXXXX",
      placeholder_address: "House/Flat, Road, Thana, District...",
      form_payment_method: "Payment Method",
      pay_opt_advance_title: "Pay Delivery Fee via bKash/Nagad",
      pay_opt_advance_badge: "৳50 Discount!",
      pay_opt_advance_desc: "Get an instant ৳50 cash discount by paying delivery fee in advance.",
      pay_opt_cod_title: "Cash on Delivery (No Discount)",
      pay_opt_cod_desc: "Pay full amount to courier upon delivery.",
      advance_instruction: "Send delivery fee to the bKash or Nagad number below:",
      form_sender_phone: "Sender Mobile Number",
      form_trx_id: "Transaction ID (TrxID)",
      err_sender_phone: "Enter valid 11-digit sender number.",
      err_trx_id: "Enter valid TrxID.",
      bill_subtotal: "Saree Price:",
      bill_delivery: "Delivery Fee:",
      bill_advance_discount: "Advance Discount:",
      bill_total: "Total Payable:",
      bill_due_cod: "Payable on Delivery (COD):",
      btn_confirm_order: "Confirm Order",
      order_submitting: "Submitting order...",
      err_name: "Please enter your name.",
      err_phone: "Please enter valid 11-digit mobile number.",
      err_address: "Please enter full address.",
      err_submission: "Error submitting order. Please try again or order on WhatsApp.",
      confirm_title: "Order received successfully! 🎉",
      confirm_order_no_lbl: "Order Number:",
      confirm_item: "Product Name:",
      confirm_variant_lbl: "Selected Color/Design:",
      confirm_qty: "Quantity:",
      confirm_payment_method: "Payment Method:",
      confirm_trx_lbl: "TrxID:",
      confirm_total: "Total Payable:",
      confirm_cod_due: "Payable on Delivery:",
      confirm_reminder: "We will contact you shortly to arrange delivery. Thank you!",
      confirm_wa_btn: "Send Message on WhatsApp",
      confirm_close_btn: "Back to Home",
      save_prefix: "Save "
    }
  };

  // --- State ---
  const state = {
    lang: localStorage.getItem('shajkutir_lang') || 'bn',
    selectedProduct: null,
    selectedVariantIndex: 0,
    selectedVariantName: '',
    selectedVariantImg: '',
    orderQuantity: 1,
    deliveryArea: 'inside',
    paymentMethod: 'advance',
    activeImageIndex: 0,
    isSubmitting: false,
    lightboxOpen: false,

    // Orbital State
    orbitAngle: -Math.PI / 2, // Starts top item at 12 o'clock
    isOrbitPaused: false,
    isDragging: false,
    dragStartAngle: 0,
    orbitSpeed: 0.0035 // Smooth, gentle rotation
  };

  // --- DOM Elements ---
  const el = {
    body: document.body,
    btnLangBn: document.getElementById('btnLangBn'),
    btnLangEn: document.getElementById('btnLangEn'),

    // Puja Countdown Timer
    timerDays: document.getElementById('timerDays'),
    timerHours: document.getElementById('timerHours'),
    timerMins: document.getElementById('timerMins'),
    timerSecs: document.getElementById('timerSecs'),

    // Orbit
    orbitStageContainer: document.getElementById('orbitStageContainer'),
    orbitCardsWrapper: document.getElementById('orbitCardsWrapper'),
    orbitCenterHub: document.getElementById('orbitCenterHub'),
    orbitCards: document.querySelectorAll('.orbit-card'),

    // Product Modal
    productModal: document.getElementById('productModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    btnModalClose: document.getElementById('btnModalClose'),
    mainImageContainer: document.getElementById('mainImageContainer'),
    modalMainImg: document.getElementById('modalMainImg'),
    selectedVariantText: document.getElementById('selectedVariantText'),
    thumbnailsRow: document.getElementById('thumbnailsRow'),
    modalProductName: document.getElementById('modalProductName'),
    modalCategoryCrumb: document.getElementById('modalCategoryCrumb'),
    modalPrice: document.getElementById('modalPrice'),
    modalOldPrice: document.getElementById('modalOldPrice'),
    modalDiscount: document.getElementById('modalDiscount'),
    modalStock: document.getElementById('modalStock'),
    modalDescription: document.getElementById('modalDescription'),
    specFabric: document.getElementById('specFabric'),
    specColor: document.getElementById('specColor'),
    specWork: document.getElementById('specWork'),
    specBlouse: document.getElementById('specBlouse'),
    btnOpenOrderForm: document.getElementById('btnOpenOrderForm'),
    modalWhatsAppInquiryBtn: document.getElementById('modalWhatsAppInquiryBtn'),

    // Order Modal
    orderModal: document.getElementById('orderModal'),
    orderModalBackdrop: document.getElementById('orderModalBackdrop'),
    btnOrderModalClose: document.getElementById('btnOrderModalClose'),
    orderProductImg: document.getElementById('orderProductImg'),
    orderProductCode: document.getElementById('orderProductCode'),
    orderProductName: document.getElementById('orderProductName'),
    orderVariantBadge: document.getElementById('orderVariantBadge'),
    orderUnitPrice: document.getElementById('orderUnitPrice'),
    btnQtyMinus: document.getElementById('btnQtyMinus'),
    btnQtyPlus: document.getElementById('btnQtyPlus'),
    orderQtyVal: document.getElementById('orderQtyVal'),
    orderForm: document.getElementById('orderForm'),
    customerName: document.getElementById('customerName'),
    customerPhone: document.getElementById('customerPhone'),
    customerAddress: document.getElementById('customerAddress'),
    deliveryAreaSelect: document.getElementById('deliveryArea'),
    errName: document.getElementById('errName'),
    errPhone: document.getElementById('errPhone'),
    errAddress: document.getElementById('errAddress'),

    // Payment Options & Advance Inputs
    payOptionAdvance: document.getElementById('payOptionAdvance'),
    payOptionCod: document.getElementById('payOptionCod'),
    advancePayBox: document.getElementById('advancePayBox'),
    bkashNumDisplay: document.getElementById('bkashNumDisplay'),
    nagadNumDisplay: document.getElementById('nagadNumDisplay'),
    btnCopyBkash: document.getElementById('btnCopyBkash'),
    btnCopyNagad: document.getElementById('btnCopyNagad'),
    senderPhone: document.getElementById('senderPhone'),
    trxId: document.getElementById('trxId'),
    errSenderPhone: document.getElementById('errSenderPhone'),
    errTrxId: document.getElementById('errTrxId'),

    // Bill
    billSubtotal: document.getElementById('billSubtotal'),
    billDelivery: document.getElementById('billDelivery'),
    billDiscountRow: document.getElementById('billDiscountRow'),
    billDiscountVal: document.getElementById('billDiscountVal'),
    billTotal: document.getElementById('billTotal'),
    billCodDueRow: document.getElementById('billCodDueRow'),
    billDueCodVal: document.getElementById('billDueCodVal'),
    orderStatusBanner: document.getElementById('orderStatusBanner'),
    orderSpinner: document.getElementById('orderSpinner'),
    orderStatusMsg: document.getElementById('orderStatusMsg'),
    btnSubmitOrder: document.getElementById('btnSubmitOrder'),

    // Confirm Modal
    confirmModal: document.getElementById('confirmModal'),
    confirmModalBackdrop: document.getElementById('confirmModalBackdrop'),
    confirmOrderCode: document.getElementById('confirmOrderCode'),
    confirmItemName: document.getElementById('confirmItemName'),
    confirmVariantVal: document.getElementById('confirmVariantVal'),
    confirmQty: document.getElementById('confirmQty'),
    confirmPayMethod: document.getElementById('confirmPayMethod'),
    confirmTrxRow: document.getElementById('confirmTrxRow'),
    confirmTrxVal: document.getElementById('confirmTrxVal'),
    confirmTotalBill: document.getElementById('confirmTotalBill'),
    confirmCodDueRow: document.getElementById('confirmCodDueRow'),
    confirmCodDueVal: document.getElementById('confirmCodDueVal'),
    confirmWABtn: document.getElementById('confirmWABtn'),
    btnConfirmClose: document.getElementById('btnConfirmClose'),

    // Lightbox
    lightboxOverlay: document.getElementById('lightboxOverlay'),
    lightboxImg: document.getElementById('lightboxImg'),
    btnLightboxClose: document.getElementById('btnLightboxClose'),
    btnLightboxPrev: document.getElementById('btnLightboxPrev'),
    btnLightboxNext: document.getElementById('btnLightboxNext'),
    lightboxCounter: document.getElementById('lightboxCounter'),

    // Footer Contacts
    footerPhoneLink: document.getElementById('footerPhoneLink'),
    footerPhoneDisplay: document.getElementById('footerPhoneDisplay'),
    footerEmailLink: document.getElementById('footerEmailLink'),
    footerEmailDisplay: document.getElementById('footerEmailDisplay'),
    footerFbLink: document.getElementById('footerFbLink'),

    // Floating WhatsApp
    floatingWABtn: document.getElementById('floatingWABtn'),

    // Size Guide Modal
    btnOpenSizeGuide: document.getElementById('btnOpenSizeGuide'),
    sizeGuideModal: document.getElementById('sizeGuideModal'),
    sizeGuideBackdrop: document.getElementById('sizeGuideBackdrop'),
    btnSizeGuideClose: document.getElementById('btnSizeGuideClose'),
    btnCloseSizeGuideModal: document.getElementById('btnCloseSizeGuideModal'),

    // Live Order Ticker Toast
    liveOrderToast: document.getElementById('liveOrderToast'),
    liveToastText: document.getElementById('liveToastText'),
    liveToastItem: document.getElementById('liveToastItem'),
    btnCloseToast: document.getElementById('btnCloseToast'),
    confirmPhoneBtn: document.getElementById('confirmPhoneBtn')
  };

  // --- Currency Helper ---
  function formatMoney(amount) {
    const sym = '৳';
    if (state.lang === 'bn') {
      const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return sym + amount.toLocaleString('en-US').replace(/\d/g, d => bnDigits[d]);
    }
    return sym + amount.toLocaleString('en-US');
  }

  function getDeliveryCharge() {
    return state.deliveryArea === 'inside'
      ? (window.siteSettings?.deliveryFees?.insideDhaka || 70)
      : (window.siteSettings?.deliveryFees?.outsideDhaka || 130);
  }

  function getAdvanceDiscount() {
    return window.siteSettings?.paymentSettings?.advanceDiscount || 50;
  }

  // --- Language Engine ---
  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('shajkutir_lang', lang);
    el.body.className = `lang-${lang}`;

    if (lang === 'bn') {
      el.btnLangBn.classList.add('active');
      el.btnLangBn.setAttribute('aria-pressed', 'true');
      el.btnLangEn.classList.remove('active');
      el.btnLangEn.setAttribute('aria-pressed', 'false');
    } else {
      el.btnLangEn.classList.add('active');
      el.btnLangEn.setAttribute('aria-pressed', 'true');
      el.btnLangBn.classList.remove('active');
      el.btnLangBn.setAttribute('aria-pressed', 'false');
    }

    const dict = i18n[lang] || i18n.bn;
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (dict[key]) {
        elem.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
      const key = elem.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        elem.setAttribute('placeholder', dict[key]);
      }
    });

    updatePujaCountdown();
    if (state.selectedProduct) {
      populateProductModal(state.selectedProduct);
      updateBillSummary();
    }
    updateOrbitLabels();
  }

  // --- Orbit Label Update ---
  function updateOrbitLabels() {
    const cards = (el.orbitCards && el.orbitCards.length) ? el.orbitCards : document.querySelectorAll('.orbit-card');
    const isBn = state.lang === 'bn';

    cards.forEach((card) => {
      const productId = card.getAttribute('data-id');
      const product = window.ProductStore?.getById(productId) || (window.products && window.products.find(p => p.id === productId));
      if (!product) return;

      const labelName = card.querySelector('.label-name');
      if (!labelName) return;

      if (isBn) {
        labelName.textContent = product.category_bn || product.name_bn || '';
      } else {
        labelName.textContent = product.category_en || product.name_en || '';
      }
    });
  }

  // --- ORBITAL CIRCULATING SHOWCASE ENGINE ---
  function getOrbitRadii() {
    const w = window.innerWidth;
    if (w >= 768) {
      return { rx: 220, ry: 165 };
    } else if (w <= 360) {
      return { rx: 110, ry: 115 };
    } else {
      return { rx: 125, ry: 130 };
    }
  }

  function updateOrbitPositions() {
    const cards = (el.orbitCards && el.orbitCards.length) ? el.orbitCards : document.querySelectorAll(".orbit-card");
    const total = cards.length;
    const { rx, ry } = getOrbitRadii();
    const angleStep = (2 * Math.PI) / total;

    cards.forEach((card, idx) => {
      const angle = state.orbitAngle + idx * angleStep;
      const x = Math.cos(angle) * rx;
      const y = Math.sin(angle) * ry;

            // Realistic 3D depth perception & z-index stacking
      const sinVal = Math.sin(angle); // -1 (top/back) to +1 (bottom/front)
      const scale = 0.88 + 0.22 * ((sinVal + 1) / 2); // 0.88 (back) to 1.10 (front)
      const zIndex = Math.round(10 + 10 * sinVal);
      const opacity = 0.85 + 0.15 * ((sinVal + 1) / 2);

      card.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px), 0) scale(${scale.toFixed(3)})`;
      card.style.zIndex = zIndex;
      card.style.opacity = opacity.toFixed(2);
    });
  }

  function startOrbitLoop() {
    function tick() {
      if (!state.isOrbitPaused && !state.isDragging && el.productModal.classList.contains('hidden') && el.orderModal.classList.contains('hidden') && !state.lightboxOpen) {
        state.orbitAngle += state.orbitSpeed;
        updateOrbitPositions();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initOrbitGestures() {
    const stage = el.orbitStageContainer;
    if (!stage) return;

    let startX = 0;
    let startY = 0;
    let lastAngle = 0;

    stage.addEventListener('mouseenter', () => { state.isOrbitPaused = true; });
    stage.addEventListener('mouseleave', () => { state.isOrbitPaused = false; });

    stage.addEventListener('touchstart', (e) => {
      state.isOrbitPaused = true;
      state.isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      lastAngle = Math.atan2(startY - centerY, startX - centerX);
    }, { passive: true });

    stage.addEventListener('touchmove', (e) => {
      if (!state.isDragging) return;
      const curX = e.touches[0].clientX;
      const curY = e.touches[0].clientY;
      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const curAngle = Math.atan2(curY - centerY, curX - centerX);
      const delta = curAngle - lastAngle;

      state.orbitAngle += delta;
      lastAngle = curAngle;
      updateOrbitPositions();
    }, { passive: true });

    stage.addEventListener('touchend', () => {
      state.isDragging = false;
      setTimeout(() => { state.isOrbitPaused = false; }, 2500);
    }, { passive: true });

    // Desktop mouse drag rotation support
    let isMouseDown = false;
    stage.addEventListener('mousedown', (e) => {
      if (e.target.closest('.orbit-card') || e.target.closest('.orbit-center-hub')) return;
      isMouseDown = true;
      state.isOrbitPaused = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      lastAngle = Math.atan2(startY - centerY, startX - centerX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      const curX = e.clientX;
      const curY = e.clientY;
      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const curAngle = Math.atan2(curY - centerY, curX - centerX);
      const delta = curAngle - lastAngle;

      state.orbitAngle += delta;
      lastAngle = curAngle;
      updateOrbitPositions();
    });

    window.addEventListener('mouseup', () => {
      if (isMouseDown) {
        isMouseDown = false;
        setTimeout(() => { state.isOrbitPaused = false; }, 2000);
      }
    });

    if (el.orbitCenterHub) {
      el.orbitCenterHub.addEventListener('click', () => {
        const firstProd = window.products && window.products[0];
        if (firstProd) openProductModal(firstProd.id);
      });
    }

    el.orbitCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = card.getAttribute('data-id');
        openProductModal(prodId);
      });
    });

    window.addEventListener('resize', updateOrbitPositions);
    updateOrbitPositions();
    startOrbitLoop();
  }

  // --- Product Modal & Dynamic Variant Selector ---
  function openProductModal(productId) {
    const product = window.ProductStore?.getById(productId) || (window.products && window.products.find(p => p.id === productId));
    if (!product) return;

    state.selectedProduct = product;
    state.activeImageIndex = 0;
    populateProductModal(product);

    el.productModal.classList.remove('hidden');
    el.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    el.productModal.classList.add('hidden');
    el.body.style.overflow = '';
  }

  function populateProductModal(product) {
    const isBn = state.lang === 'bn';
    const title = isBn ? product.name_bn : product.name_en;
    const category = isBn ? product.category_bn : product.category_en;
    const fabric = isBn ? product.fabric_bn : product.fabric_en;
    const color = isBn ? product.color_bn : product.color_en;
    const work = isBn ? product.work_bn : product.work_en;
    const blouse = isBn ? product.blouse_bn : product.blouse_en;
    const discount = product.oldPrice ? product.oldPrice - product.price : 0;

    el.modalProductName.textContent = title;
    if (el.modalCategoryCrumb) {
      el.modalCategoryCrumb.textContent = isBn ? `শারদীয় পূজা কালেকশন • ${category}` : `Puja Special Collection • ${category}`;
    }

    el.modalPrice.textContent = formatMoney(product.price);
    el.modalOldPrice.textContent = product.oldPrice ? formatMoney(product.oldPrice) : '';
    el.modalOldPrice.style.display = product.oldPrice ? 'inline' : 'none';

    if (discount > 0) {
      el.modalDiscount.textContent = (i18n[state.lang].save_prefix || 'Save ') + formatMoney(discount);
      el.modalDiscount.style.display = 'inline-block';
    } else {
      el.modalDiscount.style.display = 'none';
    }

    el.modalStock.textContent = isBn ? `স্টক: ${product.stock} টি বাকি` : `Stock: ${product.stock} left`;
    el.modalDescription.textContent = isBn ? product.description_bn : product.description_en;

    el.specFabric.textContent = fabric;
    el.specColor.textContent = color;
    el.specWork.textContent = work;
    el.specBlouse.textContent = blouse;

    // Build Dynamic Thumbnails Row (Supports 4, 5, 6, 8+ images smoothly!)
    el.thumbnailsRow.innerHTML = '';
    product.images.forEach((item, idx) => {
      const imgUrl = window.ProductStore?.getImageUrl(item) || (typeof item === 'string' ? item : item.url);
      const varName = window.ProductStore?.getImageName(item, state.lang) || `${idx + 1} নং ডিজাইন`;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `thumb-btn ${idx === state.activeImageIndex ? 'active' : ''}`;
      btn.setAttribute('aria-label', varName);
      btn.setAttribute('title', varName);
      btn.innerHTML = `<img src="${imgUrl}" alt="${title} - ${varName}" onerror="window.handleSmartImageFallback(this)">`;
      btn.addEventListener('click', () => updateModalMainImage(idx));
      el.thumbnailsRow.appendChild(btn);
    });

    // Set initial active variant view
    updateModalMainImage(state.activeImageIndex || 0);

    // WhatsApp Inquiry link
    const waNumber = window.siteSettings?.whatsappNumber || '8801712345678';
    const waMsg = isBn
      ? `হ্যালো ShajKutir, আমি ${product.name_bn} (${product.id}) শাড়িটি সম্পর্কে জানতে চাই।`
      : `Hello ShajKutir, I am interested in ${product.name_en} (${product.id}).`;
    if (el.modalWhatsAppInquiryBtn) { el.modalWhatsAppInquiryBtn.setAttribute('href', `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`); }
  }

  function updateModalMainImage(index) {
    if (!state.selectedProduct) return;
    const images = state.selectedProduct.images;
    state.activeImageIndex = index;
    const curItem = images[index];
    const imgUrl = window.ProductStore?.getImageUrl(curItem) || (typeof curItem === 'string' ? curItem : curItem.url);
    const varName = window.ProductStore?.getImageName(curItem, state.lang) || `${index + 1} নং ডিজাইন`;

    state.selectedVariantName = varName;
    state.selectedVariantImg = imgUrl;

    el.modalMainImg.src = imgUrl;
    el.modalMainImg.onerror = function () { window.handleSmartImageFallback(this); };

    if (el.selectedVariantText) {
      el.selectedVariantText.textContent = (state.lang === 'bn' ? 'নির্বাচিত: ' : 'Selected: ') + varName;
    }

    const thumbs = el.thumbnailsRow.querySelectorAll('.thumb-btn');
    thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
    
    if (thumbs[index]) {
      thumbs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  async function autoDetectExtraProductImages(product, onFound) {
    const baseUrl = `images/products/${product.id}/`;
    let detectedCount = 0;
    const maxAttempts = 25;
    const existingCount = product.images ? product.images.length : 0;
    
    for (let i = existingCount + 1; i <= existingCount + maxAttempts; i++) {
      const imgUrl = `${baseUrl}${i}.webp`;
      try {
        const response = await fetch(imgUrl, { method: 'HEAD' });
        if (response.ok || response.status === 200) {
          detectedCount++;
          const newItem = { 
            url: imgUrl, 
            name_bn: `${i} নং ডিজাইন`, 
            name_en: `Design ${i}` 
          };
          if (onFound) onFound(newItem);
        } else if (response.status === 404) {
          break;
        }
      } catch (e) {
        break;
      }
    }
    return detectedCount > 0;
  }

  // --- Lightbox ---
  function openLightbox(index) {
    if (!state.selectedProduct) return;
    state.lightboxOpen = true;
    state.activeImageIndex = index;
    updateLightboxImage();
    el.lightboxOverlay.classList.remove('hidden');
  }

  function closeLightbox() {
    state.lightboxOpen = false;
    el.lightboxOverlay.classList.add('hidden');
  }

  function updateLightboxImage() {
    if (!state.selectedProduct) return;
    const total = state.selectedProduct.images.length;
    const curItem = state.selectedProduct.images[state.activeImageIndex];
    const imgUrl = window.ProductStore?.getImageUrl(curItem) || (typeof curItem === 'string' ? curItem : curItem.url);
    el.lightboxImg.src = imgUrl;
    el.lightboxCounter.textContent = `${state.activeImageIndex + 1} / ${total}`;
  }

  // --- Order Form Modal ---
  function openOrderModal() {
    if (!state.selectedProduct) return;

    state.orderQuantity = 1;
    el.orderQtyVal.textContent = '1';

    const p = state.selectedProduct;
    const isBn = state.lang === 'bn';
    
    // Exact selected variant image and name!
    const activeImg = state.selectedVariantImg || window.ProductStore?.getImageUrl(p.images[0]);
    const activeVarName = state.selectedVariantName || (isBn ? '১ নং ডিজাইন' : 'Design 1');

    el.orderProductImg.src = activeImg;
    el.orderProductCode.textContent = `Code: ${p.id} • ${isBn ? p.category_bn : p.category_en}`;
    el.orderProductName.textContent = isBn ? p.name_bn : p.name_en;
    
    if (el.orderVariantBadge) {
      el.orderVariantBadge.textContent = `${isBn ? 'ডিজাইন/কালার: ' : 'Variant: '}${activeVarName}`;
    }

    el.orderUnitPrice.textContent = formatMoney(p.price);

    const mfs = window.siteSettings?.paymentSettings;
    if (el.bkashNumDisplay) el.bkashNumDisplay.textContent = mfs?.bkashNumber || '01712345678';
    if (el.nagadNumDisplay) el.nagadNumDisplay.textContent = mfs?.nagadNumber || '01812345678';

    setPaymentMethod('advance');
    updateBillSummary();

    el.orderStatusBanner.className = 'order-status-banner hidden';
    el.errName.classList.add('hidden');
    el.errPhone.classList.add('hidden');
    el.errAddress.classList.add('hidden');
    if (el.errSenderPhone) el.errSenderPhone.classList.add('hidden');
    if (el.errTrxId) el.errTrxId.classList.add('hidden');

    el.orderModal.classList.remove('hidden');
    el.customerName.focus();
  }

  function closeOrderModal() {
    el.orderModal.classList.add('hidden');
  }

  function setPaymentMethod(method) {
    state.paymentMethod = method;
    if (method === 'advance') {
      if (el.payOptionAdvance) el.payOptionAdvance.classList.add('active');
      if (el.payOptionCod) el.payOptionCod.classList.remove('active');
      if (el.advancePayBox) el.advancePayBox.classList.remove('hidden');
      const radio = document.querySelector('input[name="paymentMethodRadio"][value="advance"]');
      if (radio) radio.checked = true;
    } else {
      if (el.payOptionAdvance) el.payOptionAdvance.classList.remove('active');
      if (el.payOptionCod) el.payOptionCod.classList.add('active');
      if (el.advancePayBox) el.advancePayBox.classList.add('hidden');
      const radio = document.querySelector('input[name="paymentMethodRadio"][value="cod"]');
      if (radio) radio.checked = true;
    }
    updateBillSummary();
  }

  function updateBillSummary() {
    if (!state.selectedProduct) return;
    const subtotal = state.selectedProduct.price * state.orderQuantity;
    const delivery = getDeliveryCharge();
    const isAdv = state.paymentMethod === 'advance';
    const discount = isAdv ? getAdvanceDiscount() : 0;
    const total = subtotal + delivery - discount;
    const dueCod = isAdv ? (total - delivery) : total;

    el.billSubtotal.textContent = formatMoney(subtotal);
    el.billDelivery.textContent = formatMoney(delivery);

    if (el.billDiscountRow) {
      if (isAdv) {
        el.billDiscountRow.style.display = 'flex';
        el.billDiscountVal.textContent = `-${formatMoney(discount)}`;
      } else {
        el.billDiscountRow.style.display = 'none';
      }
    }

    el.billTotal.textContent = formatMoney(total);

    if (el.billCodDueRow) {
      if (isAdv) {
        el.billCodDueRow.style.display = 'flex';
        el.billDueCodVal.textContent = formatMoney(dueCod);
      } else {
        el.billCodDueRow.style.display = 'none';
      }
    }
  }

  // --- Order Submission ---
  async function handleOrderSubmit(e) {
    e.preventDefault();

    let isValid = true;
    const name = el.customerName.value.trim();
    const phone = el.customerPhone.value.trim();
    const address = el.customerAddress.value.trim();
    const isAdv = state.paymentMethod === 'advance';

    if (!name) {
      el.errName.classList.remove('hidden');
      isValid = false;
    } else {
      el.errName.classList.add('hidden');
    }

    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
      el.errPhone.classList.remove('hidden');
      isValid = false;
    } else {
      el.errPhone.classList.add('hidden');
    }

    if (!address) {
      el.errAddress.classList.remove('hidden');
      isValid = false;
    } else {
      el.errAddress.classList.add('hidden');
    }

    let senderNum = 'N/A';
    let trxIdVal = 'N/A';

    if (isAdv) {
      const senderVal = el.senderPhone ? el.senderPhone.value.trim() : '';
      const trxVal = el.trxId ? el.trxId.value.trim() : '';

      if (!senderVal || !phoneRegex.test(senderVal.replace(/[\s-]/g, ''))) {
        if (el.errSenderPhone) el.errSenderPhone.classList.remove('hidden');
        isValid = false;
      } else {
        if (el.errSenderPhone) el.errSenderPhone.classList.add('hidden');
        senderNum = senderVal;
      }

      if (!trxVal || trxVal.length < 4) {
        if (el.errTrxId) el.errTrxId.classList.remove('hidden');
        isValid = false;
      } else {
        if (el.errTrxId) el.errTrxId.classList.add('hidden');
        trxIdVal = trxVal.toUpperCase();
      }
    }

    if (!isValid) return;

    const orderId = 'SW-' + Math.floor(1000 + Math.random() * 9000);
    const subtotal = state.selectedProduct.price * state.orderQuantity;
    const delivery = getDeliveryCharge();
    const discount = isAdv ? getAdvanceDiscount() : 0;
    const totalAmount = subtotal + delivery - discount;
    const remainingCod = isAdv ? (totalAmount - delivery) : totalAmount;
    const districtText = state.deliveryArea === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka';
    const activeVariant = state.selectedVariantName || (state.lang === 'bn' ? '১ নং ডিজাইন' : 'Design 1');
    const activeImgUrl = state.selectedVariantImg || window.ProductStore?.getImageUrl(state.selectedProduct.images[0]);

    const orderData = {
      orderId: orderId,
      dateTime: new Date().toISOString(),
      customerName: name,
      phone: phone,
      address: address,
      district: districtText,
      productId: state.selectedProduct.id,
      productName: state.selectedProduct.name_en + ' (' + state.selectedProduct.name_bn + ')',
      selectedVariant: activeVariant,
      productPrice: state.selectedProduct.price,
      quantity: state.orderQuantity,
      totalAmount: totalAmount,
      paymentMethod: isAdv ? 'Advance bKash/Nagad' : 'Cash on Delivery',
      advancePaid: isAdv ? delivery : 0,
      discountApplied: discount,
      remainingCod: remainingCod,
      senderNumber: senderNum,
      trxId: trxIdVal,
      verificationStatus: isAdv ? 'Pending Verification' : 'Full COD',
      productImageUrl: window.location.origin + '/' + activeImgUrl,
      language: state.lang,
      status: 'New'
    };

    state.isSubmitting = true;
    el.btnSubmitOrder.disabled = true;
    el.orderSpinner.classList.remove('hidden');
    el.orderStatusBanner.className = 'order-status-banner';
    el.orderStatusMsg.textContent = i18n[state.lang].order_submitting;

    try {
      const scriptUrl = window.siteSettings?.googleAppsScriptUrl;
      const isPlaceholder = !scriptUrl || scriptUrl.includes('PLACEHOLDER');

      if (!isPlaceholder) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData)
        });
      } else {
        await new Promise(r => setTimeout(r, 600));
      }

      closeOrderModal();
      closeProductModal();
      showConfirmationModal(orderData);
      el.orderForm.reset();

      // Track Meta Pixel Purchase Event
      trackPurchaseEvent(orderData);

    } catch (err) {
      console.error('Order error:', err);
      el.orderSpinner.classList.add('hidden');
      el.orderStatusBanner.className = 'order-status-banner error';
      el.orderStatusMsg.textContent = i18n[state.lang].err_submission;
    } finally {
      state.isSubmitting = false;
      el.btnSubmitOrder.disabled = false;
    }
  }

  function showConfirmationModal(data) {
    el.confirmOrderCode.textContent = data.orderId;
    el.confirmItemName.textContent = state.lang === 'bn' ? state.selectedProduct.name_bn : state.selectedProduct.name_en;
    
    // Show selected variant in confirmation
    if (el.confirmVariantVal) {
      el.confirmVariantVal.textContent = data.selectedVariant;
    }

    el.confirmQty.textContent = `${data.quantity} ${state.lang === 'bn' ? 'টি' : 'pcs'}`;

    const isAdv = data.paymentMethod.includes('Advance');
    el.confirmPayMethod.textContent = isAdv
      ? (state.lang === 'bn' ? 'বিকাশ/নগদ অগ্রিম (৳৫০ ছাড়)' : 'Advance bKash/Nagad (৳50 Off)')
      : (state.lang === 'bn' ? 'ক্যাশ অন ডেলিভারি' : 'Cash on Delivery');

    if (el.confirmTrxRow) {
      if (isAdv && data.trxId !== 'N/A') {
        el.confirmTrxRow.style.display = 'flex';
        el.confirmTrxVal.textContent = data.trxId;
      } else {
        el.confirmTrxRow.style.display = 'none';
      }
    }

    el.confirmTotalBill.textContent = formatMoney(data.totalAmount);

    if (el.confirmCodDueRow) {
      if (isAdv) {
        el.confirmCodDueRow.style.display = 'flex';
        el.confirmCodDueVal.textContent = formatMoney(data.remainingCod);
      } else {
        el.confirmCodDueRow.style.display = 'none';
      }
    }

    const waNum = window.siteSettings?.whatsappNumber || '8801712345678';
    const waText = state.lang === 'bn'
      ? `*নতুন শাড়ি অর্ডার (ShajKutir)*\nঅর্ডার কোড: ${data.orderId}\nশাড়ি: ${data.productName}\nনির্বাচিত ডিজাইন: ${data.selectedVariant}\nমোট বিল: ${formatMoney(data.totalAmount)}\nগ্রাহক: ${data.customerName}\nফোন: ${data.phone}`
      : `*New Saree Order (ShajKutir)*\nOrder ID: ${data.orderId}\nProduct: ${data.productName}\nSelected Variant: ${data.selectedVariant}\nTotal: ${formatMoney(data.totalAmount)}\nName: ${data.customerName}\nPhone: ${data.phone}`;

    if (el.confirmWABtn) {
      el.confirmWABtn.setAttribute('href', `https://wa.me/${waNum}?text=${encodeURIComponent(waText)}`);
    }
    if (el.confirmPhoneBtn) {
      const phone = window.siteSettings?.supportPhone || '+8801712345678';
      el.confirmPhoneBtn.setAttribute('href', `tel:${phone}`);
    }
    el.confirmModal.classList.remove('hidden');
  }

  function closeConfirmationModal() {
    el.confirmModal.classList.add('hidden');
  }

  // --- Global Event Binding ---
    // --- Size & Measurement Guide Modal ---
  function openSizeGuideModal() {
    if (el.sizeGuideModal) el.sizeGuideModal.classList.remove('hidden');
  }

  function closeSizeGuideModal() {
    if (el.sizeGuideModal) el.sizeGuideModal.classList.add('hidden');
  }

  // --- Live Social Proof / Recent Order Ticker ---
  const RECENT_ORDERS = [
    { item: 'সিঁদুর লাল বালুচরি ঐতিহ্য শাড়ি', location: 'ধানমন্ডি, ঢাকা', mins: '৩' },
    { item: 'নীলপদ্ম বেনারসি কাতান', location: 'গুলশান, ঢাকা', mins: '৭' },
    { item: 'অগ্নিঝরা তসর সিল্ক', location: 'চট্টগ্রাম সদর', mins: '১২' },
    { item: 'মায়াবতী জামদানি শাড়ি', location: 'উত্তরা, ঢাকা', mins: '১৮' },
    { item: 'স্বর্ণলতা ব্রাইডাল কাঞ্জিভরম', location: 'সিলেট', mins: '২৪' },
    { item: 'সিঁদুর লাল বালুচরি ঐতিহ্য শাড়ি', location: 'রাজশাহী', mins: '৩১' }
  ];

  let toastTimer = null;
  let toastHideTimer = null;
  let toastIndex = 0;

  function isAnyModalOpen() {
    const pModal = el.productModal && !el.productModal.classList.contains('hidden');
    const oModal = el.orderModal && !el.orderModal.classList.contains('hidden');
    const cModal = el.confirmModal && !el.confirmModal.classList.contains('hidden');
    const sModal = el.sizeGuideModal && !el.sizeGuideModal.classList.contains('hidden');
    const lModal = el.lightboxOverlay && !el.lightboxOverlay.classList.contains('hidden');
    return pModal || oModal || cModal || sModal || lModal;
  }

  function showNextLiveOrderToast() {
    if (!el.liveOrderToast || isAnyModalOpen()) return;

    const data = RECENT_ORDERS[toastIndex % RECENT_ORDERS.length];
    toastIndex++;

    if (el.liveToastItem) el.liveToastItem.textContent = data.item;
    if (el.liveToastText) {
      el.liveToastText.innerHTML = `${data.mins} মিনিট আগে ${data.location} থেকে একজন <strong>${data.item}</strong> অর্ডার করেছেন`;
    }

    el.liveOrderToast.classList.remove('hidden');
    void el.liveOrderToast.offsetWidth; // Force reflow
    el.liveOrderToast.classList.add('visible');

    clearTimeout(toastHideTimer);
    toastHideTimer = setTimeout(() => {
      hideLiveOrderToast();
    }, 5000);
  }

  function hideLiveOrderToast() {
    if (!el.liveOrderToast) return;
    el.liveOrderToast.classList.remove('visible');
    setTimeout(() => {
      if (!el.liveOrderToast.classList.contains('visible')) {
        el.liveOrderToast.classList.add('hidden');
      }
    }, 400);
  }

  function initLiveOrderTicker() {
    if (el.btnCloseToast) {
      el.btnCloseToast.addEventListener('click', hideLiveOrderToast);
    }
    setTimeout(() => {
      showNextLiveOrderToast();
      toastTimer = setInterval(showNextLiveOrderToast, 35000);
    }, 4000);
  }

  function initEvents() {
    el.btnLangBn.addEventListener('click', () => setLanguage('bn'));
    el.btnLangEn.addEventListener('click', () => setLanguage('en'));

    el.btnModalClose.addEventListener('click', closeProductModal);
    el.modalBackdrop.addEventListener('click', closeProductModal);

    el.btnOrderModalClose.addEventListener('click', closeOrderModal);
    el.orderModalBackdrop.addEventListener('click', closeOrderModal);

    el.btnConfirmClose.addEventListener('click', closeConfirmationModal);
    el.confirmModalBackdrop.addEventListener('click', closeConfirmationModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (state.lightboxOpen) closeLightbox();
        else if (el.sizeGuideModal && !el.sizeGuideModal.classList.contains('hidden')) closeSizeGuideModal();
        else if (!el.confirmModal.classList.contains('hidden')) closeConfirmationModal();
        else if (!el.orderModal.classList.contains('hidden')) closeOrderModal();
        else if (!el.productModal.classList.contains('hidden')) closeProductModal();
      }
    });

    el.mainImageContainer.addEventListener('click', () => {
      openLightbox(state.activeImageIndex);
    });

    el.btnLightboxClose.addEventListener('click', closeLightbox);
    el.btnLightboxPrev.addEventListener('click', () => {
      const len = state.selectedProduct.images.length;
      state.activeImageIndex = (state.activeImageIndex - 1 + len) % len;
      updateLightboxImage();
    });
    el.btnLightboxNext.addEventListener('click', () => {
      const len = state.selectedProduct.images.length;
      state.activeImageIndex = (state.activeImageIndex + 1) % len;
      updateLightboxImage();
    });

    el.btnOpenOrderForm.addEventListener('click', openOrderModal);

    if (el.btnOpenSizeGuide) el.btnOpenSizeGuide.addEventListener('click', openSizeGuideModal);
    if (el.btnSizeGuideClose) el.btnSizeGuideClose.addEventListener('click', closeSizeGuideModal);
    if (el.btnCloseSizeGuideModal) el.btnCloseSizeGuideModal.addEventListener('click', closeSizeGuideModal);
    if (el.sizeGuideBackdrop) el.sizeGuideBackdrop.addEventListener('click', closeSizeGuideModal);

    el.btnQtyMinus.addEventListener('click', () => {
      if (state.orderQuantity > 1) {
        state.orderQuantity--;
        el.orderQtyVal.textContent = state.orderQuantity;
        updateBillSummary();
      }
    });

    el.btnQtyPlus.addEventListener('click', () => {
      if (state.orderQuantity < (state.selectedProduct?.stock || 10)) {
        state.orderQuantity++;
        el.orderQtyVal.textContent = state.orderQuantity;
        updateBillSummary();
      }
    });

    el.deliveryAreaSelect.addEventListener('change', (e) => {
      state.deliveryArea = e.target.value;
      updateBillSummary();
    });

    if (el.payOptionAdvance) el.payOptionAdvance.addEventListener('click', () => setPaymentMethod('advance'));
    if (el.payOptionCod) el.payOptionCod.addEventListener('click', () => setPaymentMethod('cod'));

    // Copy MFS buttons
    if (el.btnCopyBkash) {
      el.btnCopyBkash.addEventListener('click', (e) => {
        e.preventDefault();
        const num = window.siteSettings?.paymentSettings?.bkashNumber || '01712345678';
        navigator.clipboard.writeText(num).then(() => {
          el.btnCopyBkash.classList.add('copied');
          el.btnCopyBkash.textContent = 'কপি হয়েছে!';
          setTimeout(() => {
            el.btnCopyBkash.classList.remove('copied');
            el.btnCopyBkash.textContent = 'কপি';
          }, 2000);
        });
      });
    }

    if (el.btnCopyNagad) {
      el.btnCopyNagad.addEventListener('click', (e) => {
        e.preventDefault();
        const num = window.siteSettings?.paymentSettings?.nagadNumber || '01812345678';
        navigator.clipboard.writeText(num).then(() => {
          el.btnCopyNagad.classList.add('copied');
          el.btnCopyNagad.textContent = 'কপি হয়েছে!';
          setTimeout(() => {
            el.btnCopyNagad.classList.remove('copied');
            el.btnCopyNagad.textContent = 'কপি';
          }, 2000);
        });
      });
    }

    el.orderForm.addEventListener('submit', handleOrderSubmit);

    // Meta Pixel Purchase Event Tracking
    function trackPurchaseEvent(orderData) {
      if (typeof window.fbq !== 'function') return;
      const val = typeof orderData.total === 'number' ? orderData.total : parseFloat(String(orderData.total).replace(/[^\d.]/g, ''));
      window.fbq('track', 'Purchase', {
        value: val || 0,
        currency: 'BDT',
        content_type: 'product'
      });
      console.log('Meta Pixel Purchase fired:', val);
    }

    // Setup Footer Contacts: Phone, Direct Gmail Compose, Facebook
    const phone = window.siteSettings?.supportPhone || '+880 1712-345678';
    const email = window.siteSettings?.ownerEmail || 'shajkutir@gmail.com';
    const fbUrl = window.siteSettings?.facebookPage || 'https://facebook.com/shajkutir';

    if (el.footerPhoneLink) {
      el.footerPhoneLink.href = 'tel:' + phone.replace(/[\s-]/g, '');
    }
    if (el.footerPhoneDisplay) {
      el.footerPhoneDisplay.textContent = phone;
    }
    if (el.footerEmailLink) {
      // Direct Gmail Web Compose link with prefilled To & Subject!
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent('ShajKutir Puja Saree Inquiry')}`;
      el.footerEmailLink.href = gmailComposeUrl;
    }
    if (el.footerEmailDisplay) {
      el.footerEmailDisplay.textContent = email;
    }
    if (el.footerFbLink) {
      el.footerFbLink.href = fbUrl;
    }

    // Floating WhatsApp
    const waNum = window.siteSettings?.whatsappNumber || '8801712345678';
    if (el.floatingWABtn) el.floatingWABtn.setAttribute('href', `https://wa.me/${waNum}`);
  }

  // --- Initializer ---
    // --- PUJA COUNTDOWN TIMER ---
  const PUJA_TARGET_DATE = new Date('2026-10-16T00:00:00+06:00').getTime();

  function updatePujaCountdown() {
    const now = new Date().getTime();
    let diff = PUJA_TARGET_DATE - now;
    if (diff <= 0) {
      // Rolling fallback: always keeps an active festive countdown visible
      diff = (8 * 86400000) + (3 * 3600000) + (31 * 60000) + (50 * 1000);
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    const toDigits = (numStr) => {
      if (state.lang === 'bn') {
        const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return String(numStr).replace(/\d/g, d => bnDigits[d]);
      }
      return String(numStr);
    };

    if (el.timerDays) el.timerDays.textContent = toDigits(pad(days));
    if (el.timerHours) el.timerHours.textContent = toDigits(pad(hours));
    if (el.timerMins) el.timerMins.textContent = toDigits(pad(mins));
    if (el.timerSecs) el.timerSecs.textContent = toDigits(pad(secs));
  }

  function init() {
    updatePujaCountdown();
    setInterval(updatePujaCountdown, 1000);
    setLanguage(state.lang);
    updateOrbitLabels();
    initOrbitGestures();
    initLiveOrderTicker();
    initEvents();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    console.log('ShajKutir Minimal Saree Experience Ready.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
