/**
 * SHAJKUTIR PUJA SAREE 2026 - GOOGLE APPS SCRIPT BACKEND
 * File: Code.gs
 * 
 * Supports:
 * - Order Logging with Advance Delivery Payment (bKash/Nagad)
 * - Selected Color / Design Variant Tracking
 * - Mandatory Sender Number & TrxID Recording
 * - Instant Owner Email Notification with Verification Highlights
 * - Image Thumbnail Formula (=IMAGE())
 * - CORS-compliant JSON Output
 */

var OWNER_EMAIL = "shajkutir@gmail.com"; // 👈 আপনার সক্রিয় জিমেইল দিন
var SHEET_NAME = "Puja Orders 2026";

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
  } catch (lockError) {
    return createJsonResponse({
      success: false,
      error: "Server is busy. Please try again or contact via phone."
    });
  }

  try {
    var payload;
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        payload = e.parameter;
      }
    } else if (e && e.parameter) {
      payload = e.parameter;
    } else {
      payload = {};
    }

    var customerName = sanitize(payload.customerName);
    var phone = sanitize(payload.phone);
    var address = sanitize(payload.address);
    var orderId = sanitize(payload.orderId) || ("SW-" + Math.floor(1000 + Math.random() * 9000));
    var dateTime = payload.dateTime || new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    var district = sanitize(payload.district) || "Inside Dhaka";
    var productId = sanitize(payload.productId) || "N/A";
    var productName = sanitize(payload.productName) || "Festive Saree";
    var selectedVariant = sanitize(payload.selectedVariant) || "ডিজাইন ১";
    var productPrice = Number(payload.productPrice) || 0;
    var quantity = Number(payload.quantity) || 1;
    var totalAmount = Number(payload.totalAmount) || (productPrice * quantity);
    
    // Payment & Verification fields
    var paymentMethod = sanitize(payload.paymentMethod) || "Cash on Delivery";
    var advancePaid = Number(payload.advancePaid) || 0;
    var discountApplied = Number(payload.discountApplied) || 0;
    var remainingCod = Number(payload.remainingCod) || totalAmount;
    var senderNumber = sanitize(payload.senderNumber) || "N/A";
    var trxId = sanitize(payload.trxId) || "N/A";
    var verificationStatus = sanitize(payload.verificationStatus) || (advancePaid > 0 ? "Pending Verification" : "Full COD");
    
    var productImageUrl = sanitize(payload.productImageUrl) || "";
    var language = sanitize(payload.language) || "bn";
    var orderStatus = "New";

    if (!customerName || !phone || !address) {
      return createJsonResponse({
        success: false,
        error: "Missing required customer details."
      });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      setupSheetHeaders(sheet);
    }

    var nextRow = sheet.getLastRow() + 1;
    
    // Formula for thumbnail preview in column W (Column 23) referencing Column T (Product Image URL)
    var imageFormula = productImageUrl ? '=IF(ISBLANK(T' + nextRow + '), "", IMAGE(T' + nextRow + ', 1))' : "";

    // Append Row to Google Sheet
    sheet.appendRow([
      orderId,            // A: Order ID
      dateTime,           // B: Date & Time
      customerName,       // C: Customer Name
      phone,              // D: Phone
      address,            // E: Address
      district,           // F: District / Area
      productId,          // G: Product ID
      productName,        // H: Product Name
      selectedVariant,    // I: Selected Color / Design
      productPrice,       // J: Unit Price
      quantity,           // K: Quantity
      totalAmount,        // L: Total Payable
      paymentMethod,      // M: Payment Method
      advancePaid,        // N: Advance Paid
      discountApplied,    // O: Discount Given
      remainingCod,       // P: Remaining COD (Courier)
      senderNumber,       // Q: Sender Number
      trxId,              // R: TrxID
      verificationStatus, // S: Verification Status
      productImageUrl,    // T: Image URL
      language,           // U: Language
      orderStatus,        // V: Order Status
      imageFormula        // W: Image Thumbnail
    ]);

    sheet.setRowHeight(nextRow, 60);

    // Highlight row if verification is pending (Columns Q, R, S: Sender, TrxID, Status)
    if (verificationStatus === "Pending Verification") {
      sheet.getRange(nextRow, 17, 1, 3).setBackground("#FFF3CD");
    }

    sendOwnerNotification({
      orderId: orderId,
      dateTime: dateTime,
      customerName: customerName,
      phone: phone,
      address: address,
      district: district,
      productId: productId,
      productName: productName,
      selectedVariant: selectedVariant,
      quantity: quantity,
      totalAmount: totalAmount,
      paymentMethod: paymentMethod,
      advancePaid: advancePaid,
      discountApplied: discountApplied,
      remainingCod: remainingCod,
      senderNumber: senderNumber,
      trxId: trxId,
      verificationStatus: verificationStatus,
      productImageUrl: productImageUrl
    });

    return createJsonResponse({
      success: true,
      orderId: orderId,
      message: "Order placed successfully."
    });

  } catch (error) {
    return createJsonResponse({
      success: false,
      error: error.toString()
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return createJsonResponse({
    status: "ok",
    service: "ShajKutir Puja Saree 2026 API",
    time: new Date().toISOString()
  });
}

function setupSheetHeaders(sheet) {
  var headers = [
    "Order ID",                 // 1 (A)
    "Date & Time",              // 2 (B)
    "Customer Name",            // 3 (C)
    "Phone",                    // 4 (D)
    "Address",                  // 5 (E)
    "District",                 // 6 (F)
    "Product ID",               // 7 (G)
    "Product Name",             // 8 (H)
    "Selected Color / Design",  // 9 (I)
    "Product Price",            // 10 (J)
    "Quantity",                 // 11 (K)
    "Total Payable",            // 12 (L)
    "Payment Method",           // 13 (M)
    "Advance Paid",             // 14 (N)
    "Discount Given",           // 15 (O)
    "Remaining COD (Courier)",  // 16 (P)
    "Sender Number",            // 17 (Q)
    "TrxID",                    // 18 (R)
    "Verification Status",      // 19 (S)
    "Product Image URL",        // 20 (T)
    "Language",                 // 21 (U)
    "Order Status",             // 22 (V)
    "Image Thumbnail"           // 23 (W)
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#4A0E17");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setFontWeight("bold");
  headerRange.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);

  sheet.setColumnWidth(1, 110); // Order ID
  sheet.setColumnWidth(2, 160); // Date & Time
  sheet.setColumnWidth(3, 170); // Name
  sheet.setColumnWidth(4, 130); // Phone
  sheet.setColumnWidth(5, 240); // Address
  sheet.setColumnWidth(6, 120); // District
  sheet.setColumnWidth(7, 90);  // Product ID
  sheet.setColumnWidth(8, 190); // Product Name
  sheet.setColumnWidth(9, 160); // Selected Color / Design
  sheet.setColumnWidth(10, 90); // Price
  sheet.setColumnWidth(11, 70); // Qty
  sheet.setColumnWidth(12, 110);// Total
  sheet.setColumnWidth(13, 150);// Payment Method
  sheet.setColumnWidth(14, 100);// Advance Paid
  sheet.setColumnWidth(15, 100);// Discount Given
  sheet.setColumnWidth(16, 140);// Remaining COD
  sheet.setColumnWidth(17, 130);// Sender Number
  sheet.setColumnWidth(18, 120);// TrxID
  sheet.setColumnWidth(19, 140);// Verification Status
  sheet.setColumnWidth(20, 150);// Image URL
  sheet.setColumnWidth(21, 80); // Lang
  sheet.setColumnWidth(22, 90); // Status
  sheet.setColumnWidth(23, 90); // Thumbnail
}

function sendOwnerNotification(order) {
  if (!OWNER_EMAIL || OWNER_EMAIL.indexOf("@") === -1 || OWNER_EMAIL.indexOf("owner@shajkutir.com") !== -1) {
    return;
  }

  var isAdv = order.advancePaid > 0;
  var subject = "🎉 New Puja Saree Order: " + order.orderId + (isAdv ? " [ADVANCE MFS PAID: ৳" + order.advancePaid + "]" : " [FULL COD]");
  
  var paymentDetails = isAdv
    ? "\n--- 💳 ADVANCE PAYMENT DETAILS ---\n" +
      "Payment Method: " + order.paymentMethod + "\n" +
      "Advance Paid: ৳" + order.advancePaid + "\n" +
      "Discount Applied: ৳" + order.discountApplied + "\n" +
      "Due COD to Collect by Courier: ৳" + order.remainingCod + "\n" +
      "Sender Mobile Number: " + order.senderNumber + "\n" +
      "Transaction ID (TrxID): " + order.trxId + "\n" +
      "Status: " + order.verificationStatus + " (Please verify statement in bKash/Nagad app)\n"
    : "\n--- PAYMENT METHOD ---\nFull Cash on Delivery (Courier collects ৳" + order.totalAmount + ")\n";

  var body = "Hello ShajKutir Team,\n\n" +
    "A new order has been received for Puja Saree Collection 2026!\n\n" +
    "--- ORDER SUMMARY ---\n" +
    "Order ID: " + order.orderId + "\n" +
    "Time: " + order.dateTime + "\n" +
    "Product: " + order.productName + "\n" +
    "Selected Color / Design: " + (order.selectedVariant || "ডিজাইন ১") + "\n" +
    "Quantity: " + order.quantity + "\n" +
    "Total Payable: ৳" + order.totalAmount + "\n" +
    (order.productImageUrl ? ("Selected Image URL: " + order.productImageUrl + "\n") : "") +
    paymentDetails + "\n" +
    "--- CUSTOMER DETAILS ---\n" +
    "Name: " + order.customerName + "\n" +
    "Phone: " + order.phone + "\n" +
    "Delivery Address: " + order.address + "\n" +
    "Delivery Area: " + order.district + "\n\n" +
    "Best regards,\nShajKutir Store Automated System";

  try {
    MailApp.sendEmail(OWNER_EMAIL, subject, body);
  } catch (e) {
    Logger.log("Email notification error: " + e.message);
  }
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function sanitize(str) {
  if (!str) return "";
  return String(str).trim();
}
