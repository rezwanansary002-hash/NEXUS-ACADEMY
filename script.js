const CONFIG = {
  schoolName: 'NEXUS ACADEMY',
  whatsappNumber: '919101149119',
  upiId: '9101149119@upi',
  qrImagePath: 'qr.png',
};

function select(el, sel) {
  return (el || document).querySelector(sel);
}
function selectAll(el, sel) {
  return Array.from((el || document).querySelectorAll(sel));
}

const overlay = select(null, '#payment-overlay');
const qrImg = select(overlay, '#qr-img');
const orderSummary = select(overlay, '#order-summary');
const waBtn = select(overlay, '#wa-btn');
const closeBtn = select(overlay, '.close');

function openOverlay(subject, price) {
  const upiPayload = `upi://pay?pa=${encodeURIComponent(CONFIG.upiId)}&pn=${encodeURIComponent(CONFIG.schoolName)}&am=${encodeURIComponent(price)}&cu=INR&tn=${encodeURIComponent(subject)}`
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(upiPayload)}`;
  qrImg.onerror = () => {
    qrImg.src = qrUrl;
  };
  qrImg.src = CONFIG.qrImagePath || qrUrl;
    orderSummary.textContent = `${subject} (Class 5-10) - ₹${price}`;
    const waText = `Hello, I have paid for ${subject} (Rs ${price}/month). Please send the class link.`;
  const waHref = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
  waBtn.href = waHref;
  overlay.classList.remove('hidden');
  overlay.setAttribute('aria-hidden', 'false');
}
function closeOverlay() {
  overlay.classList.add('hidden');
  overlay.setAttribute('aria-hidden', 'true');
}

selectAll(null, '.enroll-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.currentTarget.closest('.card');
    const subject = card.getAttribute('data-subject');
    const price = card.getAttribute('data-price');
    openOverlay(subject, price);
  });
});
closeBtn.addEventListener('click', closeOverlay);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeOverlay();
});



