const products = [
  {
    id: 1,
    name: 'فستان وردي مبطّن',
    description: 'تصميم راقٍ بخامة مبطّنة ناعمة، مناسب للخروجات والمناسبات المميزة.',
    price: 1300,
    image: 'images/1.jpeg',
    tags: ['شيك', 'مناسبة', 'جريء', 'فاتح']
  },
  {
    id: 2,
    name: 'بدلة رسمية فخمة',
    description: 'سيت كامل بتصميم عصري جريء، يليق على أرقى المناسبات وأجمل الخروجات.',
    price: 1800,
    image: 'images/2.jpeg',
    tags: ['رسمي', 'شغل', 'جريء', 'شيك']
  },
  {
    id: 3,
    name: 'جاكيت كلاسيك أنيق',
    description: 'بدلة أسود وأبيض بتصميم كلاسيكي راقٍ، مثالية للشغل والخروجات.',
    price: 950,
    image: 'images/3.jpeg',
    tags: ['شيك', 'شغل', 'غامق', 'رسمي']
  },
  {
    id: 4,
    name: 'فستان سهرة بوردو',
    description: 'فستان سهرة فخم باللون البوردو، مناسب لأرقى المناسبات الخاصة.',
    price: 2200,
    image: 'images/4.jpeg',
    tags: ['رسمي', 'مناسبة', 'غامق', 'جريء']
  },
  {
    id: 5,
    name: 'بنطلون كاجوال شيك',
    description: 'لوك عصري كاجوال، سهل التنسيق لأي يوم.',
    price: 540,
    image: 'images/5.jpeg',
    tags: ['كاجوال', 'جامعة', 'خروج', 'فاتح']
  },
  {
    id: 6,
    name: 'لوك أسود أنيق',
    description: 'بنطلون جلد أسود مع توب أبيض، تنسيق جريء ومميز لأي خروجة.',
    price: 1100,
    image: 'images/6.jpeg',
    tags: ['شيك', 'خروج', 'غامق', 'جريء']
  },

  // 👇 باقي العناصر

  { id: 7, name: 'لوك جينز يومي', description: 'إطلالة بسيطة ومريحة مناسبة للجامعة والخروجات اليومية.', price: 650, image: 'images/7.jpeg', tags: ['كاجوال','جامعة','فاتح'] },
  { id: 8, name: 'سيت أخضر جريء', description: 'طقم بلون أخضر مميز يعطيك حضور قوي وجذاب.', price: 1200, image: 'images/8.jpeg', tags: ['جريء','شيك','خروج'] },
  { id: 9, name: 'لوك بيج هادي', description: 'ستايل هادي بألوان نيوترال يناسب كل الأوقات.', price: 700, image: 'images/9.jpeg', tags: ['كاجوال','فاتح','شيك'] },
  { id: 10, name: 'بلوزة أوف شولدر', description: 'تصميم أنثوي جذاب مناسب للخروجات والمناسبات.', price: 850, image: 'images/10.jpeg', tags: ['خروج','شيك','جريء'] },
  { id: 11, name: 'فستان برتقالي مشرق', description: 'فستان بلون حيوي يضيف طاقة لإطلالتك.', price: 1000, image: 'images/11.jpeg', tags: ['جريء','فاتح','خروج'] },

  { id: 12, name: 'فستان أسود كلاسيك', description: 'قطعة أساسية أنيقة لكل مناسبة.', price: 900, image: 'images/14.jpeg', tags: ['رسمي','شيك','غامق'] },
  { id: 13, name: 'لوك أحمر قوي', description: 'إطلالة جريئة باللون الأحمر لمظهر لافت.', price: 1400, image: 'images/15.jpeg', tags: ['جريء','مناسبة','غامق'] },
  { id: 14, name: 'فستان أبيض بسيط', description: 'أناقة ناعمة تناسب كل يوم.', price: 800, image: 'images/18.jpeg', tags: ['فاتح','كاجوال','شيك'] },
  { id: 15, name: 'فستان سواريه طويل', description: 'إطلالة ملكية للسهرات والمناسبات الكبيرة.', price: 2500, image: 'images/19.jpeg', tags: ['مناسبة','رسمي','غامق'] },
  { id: 16, name: 'فستان أسود جريء', description: 'ستايل عصري بتفاصيل مميزة.', price: 1500, image: 'images/20.jpeg', tags: ['جريء','خروج','غامق'] },

  { id: 17, name: 'لوك جلد فاخر', description: 'تصميم جريء بلمسة فخامة.', price: 1700, image: 'images/21.jpeg', tags: ['جريء','شيك','غامق'] },
  { id: 18, name: 'فستان مطبوع ملون', description: 'إطلالة مرحة ومميزة بألوان جذابة.', price: 1100, image: 'images/23.jpeg', tags: ['فاتح','جريء','خروج'] },
  { id: 19, name: 'لوك يومي بسيط', description: 'ستايل مريح مناسب للمشاوير اليومية.', price: 600, image: 'images/24.jpeg', tags: ['كاجوال','جامعة'] },
  { id: 20, name: 'فستان بيج ناعم', description: 'أناقة هادئة بألوان طبيعية.', price: 900, image: 'images/25.jpeg', tags: ['شيك','فاتح'] },

  { id: 21, name: 'لوك شتوي أنيق', description: 'إطلالة دافئة ومميزة للشتاء.', price: 1200, image: 'images/26.jpeg', tags: ['كاجوال','شيك'] },
  { id: 22, name: 'فستان خمري ضيق', description: 'تصميم أنثوي يبرز جمال الإطلالة.', price: 1300, image: 'images/28.jpeg', tags: ['شيك','مناسبة'] },
  { id: 23, name: 'فستان بنفسجي راقي', description: 'لون مميز ولمسة فخامة.', price: 1400, image: 'images/29.jpeg', tags: ['مناسبة','شيك'] },
  { id: 24, name: 'فستان بني أنيق', description: 'ستايل دافئ يناسب الخروجات.', price: 1000, image: 'images/30.jpeg', tags: ['كاجوال','شيك'] },
  { id: 25, name: 'فستان سواريه بوردو', description: 'تصميم فخم للمناسبات الكبرى.', price: 2300, image: 'images/31.jpeg', tags: ['رسمي','مناسبة'] },

  { id: 26, name: 'فستان أسود شفاف', description: 'إطلالة جريئة ومميزة.', price: 1600, image: 'images/32.jpeg', tags: ['جريء','غامق'] },
  { id: 27, name: 'فستان بيج طبقات', description: 'تصميم فاخر بطبقات أنيقة.', price: 2100, image: 'images/33.jpeg', tags: ['مناسبة','شيك'] },
  { id: 28, name: 'فستان زفاف ناعم', description: 'إطلالة حالمة بيضاء.', price: 3000, image: 'images/34.jpeg', tags: ['رسمي','مناسبة'] },
  { id: 29, name: 'فستان أبيض بسيط', description: 'أناقة كلاسيكية هادئة.', price: 1200, image: 'images/35.jpeg', tags: ['شيك','فاتح'] },
  { id: 30, name: 'فستان أبيض مودرن', description: 'ستايل عصري بلمسة ناعمة.', price: 1500, image: 'images/36.jpeg', tags: ['شيك','مناسبة'] },

  { id: 31, name: 'فستان بنفسجي سهره', description: 'تصميم فاخر لإطلالة جذابة.', price: 1800, image: 'images/37.jpeg', tags: ['مناسبة','غامق'] },
  { id: 32, name: 'فستان تركواز', description: 'لون منعش يناسب الصيف.', price: 900, image: 'images/38.jpeg', tags: ['فاتح','خروج'] },
  { id: 33, name: 'فستان أصفر فخم', description: 'إطلالة مشرقة ومميزة.', price: 1600, image: 'images/39.jpeg', tags: ['جريء','فاتح'] },
  { id: 34, name: 'فستان بني بسيط', description: 'ستايل يومي مريح.', price: 800, image: 'images/41.jpeg', tags: ['كاجوال'] },

  { id: 35, name: 'فستان يومي كاجوال', description: 'إطلالة سهلة ومريحة لكل يوم.', price: 650, image: 'images/50.jpeg', tags: ['كاجوال','جامعة'] },
  { id: 36, name: 'فستان بنفسجي واسع', description: 'تصميم واسع مريح وأنيق.', price: 1100, image: 'images/51.jpeg', tags: ['شيك'] },
  { id: 37, name: 'فستان أحمر سواريه', description: 'إطلالة ساحرة باللون الأحمر.', price: 2200, image: 'images/52.jpeg', tags: ['مناسبة','جريء'] },
  { id: 38, name: 'فستان بوردو فاخر', description: 'تصميم راقي يناسب المناسبات الكبرى.', price: 2400, image: 'images/53.jpeg', tags: ['رسمي','مناسبة'] }
];
const bags = [
  {
    name: 'شنطة وردية كلاسيك',
    description: 'شنطة أنثوية بلون وردي ناعم، مثالية لإطلالات راقية ومميزة.',
    price: 780,
    image: 'images/12.jpeg',
    tags: ['مناسبة', 'شيك', 'فاتح']
  },
  {
    name: 'شنطة جلد بني يومية',
    description: 'تصميم عملي بخامة جلد قوية، مناسبة للشغل والاستخدام اليومي.',
    price: 490,
    image: 'images/13.jpeg',
    tags: ['كاجوال', 'شغل', 'محايد']
  },
  {
    name: 'شنطة Navy فاخرة',
    description: 'شنطة أنيقة بلون داكن مع تفاصيل ذهبية تعكس الفخامة.',
    price: 1200,
    image: 'images/16.jpeg',
    tags: ['رسمي', 'مناسبة', 'غامق', 'شيك']
  },
  {
    name: 'شنطة فرو أبيض ناعم',
    description: 'شنطة فرو مميزة تضيف لمسة دافئة وأنيقة لأي لوك.',
    price: 950,
    image: 'images/40.jpeg',
    tags: ['فاتح', 'شيك', 'خروج']
  },
  {
    name: 'شنطة Structured حديثة',
    description: 'تصميم عصري بستايل هندسي يناسب الإطلالات الجريئة.',
    price: 900,
    image: 'images/42.jpeg',
    tags: ['جريء', 'شيك', 'خروج']
  },
  {
    name: 'شنطة بيج أنيقة',
    description: 'لون بيج هادي سهل التنسيق مع أغلب الملابس اليومية.',
    price: 870,
    image: 'images/43.jpeg',
    tags: ['محايد', 'كاجوال', 'شيك']
  },
  {
    name: 'شنطة Mini فخمة',
    description: 'شنطة صغيرة بحجم عملي ولمسة فخامة مناسبة للخروجات.',
    price: 820,
    image: 'images/45.jpeg',
    tags: ['مناسبة', 'شيك', 'خفيف']
  },
  {
    name: 'شنطة كروس عصرية',
    description: 'ستايل كروس مريح مناسب للحركة والخروجات اليومية.',
    price: 760,
    image: 'images/46.jpeg',
    tags: ['كاجوال', 'خروج', 'عملي']
  },
  {
    name: 'شنطة كلاسيك فاخرة',
    description: 'تصميم راقي يجمع بين البساطة والفخامة في نفس الوقت.',
    price: 990,
    image: 'images/48.jpeg',
    tags: ['رسمي', 'شيك', 'محايد']
  }
];

const questions = [
  { key: 'style',    title: '١. اختاري ستايلك',      options: ['كاجوال', 'رسمي', 'سبور', 'شيك'] },
  { key: 'occasion', title: '٢. المناسبة',             options: ['جامعة', 'شغل', 'خروج', 'مناسبة خاصة'] },
  { key: 'colors',   title: '٣. الألوان المفضلة',     options: ['ألوان فاتحة', 'ألوان غامقة', 'محايد (أبيض / أسود / بيج)', 'جريء'] },
  { key: 'budget',   title: '٤. ميزانيتك',            options: ['أقل من 500', '500 – 1000', '1000+'] }
];

const state = { step: 0, answers: {} };

const productsGrid  = document.getElementById('productsGrid');
const bagsGrid      = document.getElementById('bagsGrid');
const startAiBtn    = document.getElementById('startAiBtn');
const quizPanel     = document.getElementById('quizPanel');
const resultPanel   = document.getElementById('resultPanel');
const questionTitle = document.getElementById('questionTitle');
const answersBox    = document.getElementById('answersBox');
const stepLabel     = document.getElementById('stepLabel');
const progressFill  = document.getElementById('progressFill');
const backBtn       = document.getElementById('backBtn');
const retryBtn      = document.getElementById('retryBtn');

function currency(v) { return v.toLocaleString('ar-EG') + ' ج.م'; }

function renderProducts() {
  productsGrid.innerHTML = products.map(item => `
    <article class="product-card">
      <div class="product-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">${currency(item.price)}</div>
        <button class="btn btn-secondary full-width">أضف إلى السلة</button>
      </div>
    </article>
  `).join('');

  bagsGrid.innerHTML = bags.map(item => `
    <article class="bag-card">
      <div class="bag-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="bag-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <strong>${currency(item.price)}</strong>
      </div>
    </article>
  `).join('');
}

function showQuiz() {
  quizPanel.classList.remove('hidden');
  resultPanel.classList.add('hidden');
  renderQuestion();
}

function renderQuestion() {
  const current = questions[state.step];
  stepLabel.textContent = 'السؤال ' + (state.step + 1) + ' من ' + questions.length;
  questionTitle.textContent = current.title;
  progressFill.style.width = (((state.step + 1) / questions.length) * 100) + '%';
  answersBox.innerHTML = current.options.map(option =>
    '<button class="answer-btn" data-value="' + option + '">' + option + '</button>'
  ).join('');
  answersBox.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.answers[current.key] = btn.dataset.value;
      if (state.step < questions.length - 1) { state.step++; renderQuestion(); }
      else generateResult();
    });
  });
  backBtn.style.visibility = state.step === 0 ? 'hidden' : 'visible';
}

function normalizeAnswers(a) {
  const map = { 'مناسبة خاصة': 'مناسبة', 'ألوان فاتحة': 'فاتح', 'ألوان غامقة': 'غامق', 'محايد (أبيض / أسود / بيج)': 'محايد' };
  return { style: a.style, occasion: map[a.occasion] || a.occasion, colors: map[a.colors] || a.colors, budget: a.budget };
}

function getBudgetLimit(label) {
  if (label === 'أقل من 500') return 500;
  if (label === '500 – 1000') return 1000;
  return Infinity;
}

function scoreItem(item, n) {
  let s = 0;
  if (item.tags.includes(n.style))    s += 3;
  if (item.tags.includes(n.occasion)) s += 2;
  if (item.tags.includes(n.colors))   s += 2;
  return s;
}

function pickLook(n) {
  const budget = getBudgetLimit(n.budget);
  const ranked = [...products].map(i => ({ ...i, score: scoreItem(i, n) })).sort((a, b) => b.score - a.score);
  const rankedBags = [...bags].map(i => ({ ...i, score: scoreItem(i, n) })).sort((a, b) => b.score - a.score);
  let selected = [], total = 0;
  for (const item of ranked) {
    if (selected.length >= 3) break;
    if (total + item.price <= budget || budget === Infinity) { selected.push(item); total += item.price; }
  }
  const bestBag = rankedBags.find(i => total + i.price <= budget) || rankedBags[0];
  selected.push(bestBag); total += bestBag.price;
  return { selected, total };
}

function getStyleName(n) {
  if (n.style === 'شيك' || n.occasion === 'مناسبة') return { title: 'Soft Elegance ✨', desc: 'تنسيق يجمع بين الأناقة والراحة، مناسب لذوقك والمناسبة اللي حددتيها.' };
  if (n.style === 'رسمي' || n.occasion === 'شغل')   return { title: 'Classic Boss 💼', desc: 'ستايل مرتب وعملي بلمسة فخمة، مثالي للشغل والخروجات الراقية.' };
  return { title: 'Minimal Chic 🤍', desc: 'لوك هادئ وعصري، بسيط لكن لافت، وسهل تلبسيه في أكتر من مناسبة.' };
}

function generateResult() {
  const n = normalizeAnswers(state.answers);
  const look = pickLook(n);
  const meta = getStyleName(n);
  document.getElementById('resultStyle').textContent = 'اللوك المثالي ليك: ' + meta.title;
  document.getElementById('resultDesc').textContent  = meta.desc;
  document.getElementById('resultProducts').innerHTML = look.selected.map(item =>
    '<div class="result-item"><div class="result-item-info"><img src="' + item.image + '" alt="' + item.name + '" class="result-thumb" /><span>' + item.name + '</span></div><strong>' + currency(item.price) + '</strong></div>'
  ).join('');
  document.getElementById('totalPrice').textContent = currency(look.total);
  quizPanel.classList.add('hidden');
  resultPanel.classList.remove('hidden');
}

function resetQuiz() { state.step = 0; state.answers = {}; showQuiz(); }

startAiBtn.addEventListener('click', showQuiz);
backBtn.addEventListener('click', () => { if (state.step > 0) { state.step--; renderQuestion(); } });
retryBtn.addEventListener('click', resetQuiz);

renderProducts();

/* ══════════════════════════════════════════
   PRODUCT MODAL LOGIC
══════════════════════════════════════════ */
const allItems = [
  ...products.map(p => ({ ...p, category: 'ملابس' })),
  ...bags.map(b => ({ ...b, id: 'bag_' + b.name, category: 'شنط' }))
];

const modal        = document.getElementById('productModal');
const modalClose   = document.getElementById('modalClose');
const modalImg     = document.getElementById('modalImg');
const modalName    = document.getElementById('modalName');
const modalDesc    = document.getElementById('modalDesc');
const modalPrice   = document.getElementById('modalPrice');
const modalTags    = document.getElementById('modalTags');
const modalBadge   = document.getElementById('modalBadge');
const modalCategory= document.getElementById('modalCategory');
const modalAddCart = document.getElementById('modalAddCart');
const qtyVal       = document.getElementById('qtyVal');
const qtyMinus     = document.getElementById('qtyMinus');
const qtyPlus      = document.getElementById('qtyPlus');
let   currentQty   = 1;

function openModal(item) {
  // populate
  modalImg.src        = item.image;
  modalImg.alt        = item.name;
  modalName.textContent     = item.name;
  modalDesc.textContent     = item.description;
  modalPrice.textContent    = currency(item.price);
  modalCategory.textContent = item.category || 'منتج';
  modalBadge.textContent    = item.category === 'شنط' ? 'حصري' : 'New Drop';

  // tags
  modalTags.innerHTML = (item.tags || []).map(t =>
    '<span class="modal-tag">' + t + '</span>'
  ).join('');

  // reset qty
  currentQty = 1;
  qtyVal.textContent = '1';

  // reset cart btn
  modalAddCart.classList.remove('added');
  modalAddCart.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
    أضف إلى السلة`;

  // reset size buttons
  document.querySelectorAll('.size-btn').forEach((b, i) => {
    b.classList.toggle('active', i === 1);
  });

  // open
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Close triggers
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Qty controls
qtyMinus.addEventListener('click', () => {
  if (currentQty > 1) { currentQty--; qtyVal.textContent = currentQty; }
});
qtyPlus.addEventListener('click', () => {
  if (currentQty < 10) { currentQty++; qtyVal.textContent = currentQty; }
});

// Size buttons
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Add to cart button flash
modalAddCart.addEventListener('click', () => {
  modalAddCart.classList.add('added');
  modalAddCart.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    تمت الإضافة!`;
  setTimeout(() => {
    modalAddCart.classList.remove('added');
    modalAddCart.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      أضف إلى السلة`;
  }, 2000);
});

// ── Attach click to product cards ──
function attachCardClicks() {
  // Products
  document.querySelectorAll('#productsGrid .product-card').forEach((card, i) => {
    card.style.cursor = 'pointer';
    card.querySelector('.product-image').addEventListener('click', () => openModal({ ...products[i], category: 'ملابس' }));
  });
  // Bags
  document.querySelectorAll('#bagsGrid .bag-card').forEach((card, i) => {
    card.style.cursor = 'pointer';
    card.querySelector('.bag-image').addEventListener('click', () => openModal({ ...bags[i], category: 'شنط' }));
  });
}

// Re-attach after render
const _origRenderProducts = renderProducts;
function renderProductsWithModal() {
  renderProducts();
  attachCardClicks();
}

// Override the initial call
document.addEventListener('DOMContentLoaded', () => {
  attachCardClicks();
});
// Also attach now (renderProducts already ran above)
attachCardClicks();
