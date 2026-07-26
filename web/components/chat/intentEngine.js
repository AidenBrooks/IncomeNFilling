// Deterministic rule-based intent matcher for Ira, the compliance concierge.
// No live backend — matched topics hand off to a real advisor on WhatsApp.

const KB = [
  { id: "gst", title: "GST Registration & Returns", emoji: "🧾", kw: ["gst", "goods and service", "gstr", "return", "refund", "e-way", "einvoice", "e-invoice", "itc", "input tax"], reply: "Sure! 🧾 We handle everything GST — new registration, monthly GSTR-1 & 3B, annual returns, reconciliation and refunds. What kind of business is it?" },
  { id: "itr", title: "Income Tax / ITR Filing", emoji: "💰", kw: ["itr", "income tax", "tax return", "file tax", "salary", "capital gain", "tds", "tcs", "form 16", "advance tax"], reply: "Happy to help you file! 💰 We do all ITR types — salaried, capital gains, business and presumptive — plus TDS. What’s your main income source?" },
  { id: "inc", title: "Company / LLP Incorporation", emoji: "🏢", kw: ["company", "incorporat", "register a", "pvt ltd", "private limited", "llp", "opc", "startup", "partnership", "proprietor", "section 8"], reply: "Exciting! 🏢 We register Pvt Ltd, LLP, OPC and more — with PAN, TAN, DSC and GST all set up for you. Which type were you thinking of?" },
  { id: "roc", title: "ROC & Corporate Compliance", emoji: "📋", kw: ["roc", "annual return", "mgt", "aoc", "director", "din", "kyc", "share transfer", "board resolution", "auditor"], reply: "We’ve got your ROC compliance covered 📋 — annual returns (MGT-7, AOC-4), director changes, DIR-3 KYC and more. What’s coming up for you?" },
  { id: "acc", title: "Accounting & Bookkeeping", emoji: "📊", kw: ["account", "bookkeep", "payroll", "mis", "ledger", "balance sheet", "reconcil", "cfo", "books"], reply: "Absolutely 📊 — monthly bookkeeping, payroll, MIS reports and audit support, even virtual CFO. Roughly how many transactions a month?" },
  { id: "lic", title: "Licenses & Registrations", emoji: "📜", kw: ["license", "licence", "msme", "udyam", "fssai", "iec", "import export", "trade license", "pf", "esi", "shop"], reply: "Yes! 📜 MSME/Udyam, FSSAI, IEC, PF/ESI, trade and shop licenses — all available. Which one do you need?" },
  { id: "notice", title: "Tax Notices & Advisory", emoji: "🛡️", kw: ["notice", "scrutiny", "assessment", "appeal", "advisory", "nri", "penalty", "defective", "demand"], reply: "Don’t worry — we handle this every day 🛡️. Income-tax & GST notices, scrutiny, appeals and NRI advisory. Do you have the notice with you?" },
];

function findKB(t) {
  const s = t.toLowerCase();
  return KB.find((k) => k.kw.some((w) => s.includes(w)));
}

export function botReply(text) {
  const s = text.toLowerCase().trim();
  if (/^(hi|hey|hello|good (morning|evening|afternoon)|namaste|hii?|start)\b/.test(s) || s === "") {
    return { text: "Hello! 👋 Welcome to Income N Filing. How can we help you today? Just tap a topic or type your question below 😊", chips: ["GST registration", "File my ITR", "Start a company", "I got a tax notice"] };
  }
  if (/(price|cost|fee|charge|quote|how much|rate|kitna|kitne)/.test(s)) {
    return { text: "Great question! 😊 We don’t have fixed prices — every case is different, so we scope it on a free call and you only pay for what you need. Shall I set that up?", wa: true, chips: ["Yes, book a free call", "See all services"] };
  }
  if (/(thank|thanks|thx|great|ok|okay|cool|got it|nice|good)/.test(s)) {
    return { text: "You’re most welcome! 🙏 Whenever you’re ready, tap the green button and our advisor will continue with you on WhatsApp.", wa: true };
  }
  if (/(human|advisor|agent|person|talk to|call|whatsapp|expert)/.test(s)) {
    return { text: "Of course! 👩‍💼 Our advisors usually reply within a few working hours. Let me connect you on WhatsApp.", wa: true, chips: ["Chat on WhatsApp"] };
  }
  const kb = findKB(s);
  if (kb) return { text: kb.reply, service: kb, wa: true, chips: ["Book a free call", "Ask about something else"] };
  return { text: "Got it 👍 We help with GST, income tax, starting a company, accounting, licenses and tax notices. Pick one below or tell me in your own words!", chips: ["GST registration", "File my ITR", "Start a company", "Accounting help", "Tax notice"] };
}

export function nowTime() {
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes();
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${ap}`;
}

export const TILES = [
  { emoji: "🧾", title: "GST Registration & Returns", sub: "New GSTIN, GSTR-1 & 3B, refunds", send: "GST registration" },
  { emoji: "💰", title: "Income Tax / ITR Filing", sub: "Salaried, capital gains, business", send: "File my ITR" },
  { emoji: "🏢", title: "Start a Company", sub: "Pvt Ltd, LLP, OPC — fully set up", send: "Start a company" },
  { emoji: "🛡️", title: "I Got a Tax Notice", sub: "Scrutiny, appeals, advisory", send: "I got a tax notice" },
];
