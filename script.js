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
    description: 'بدلة أسود وأبيض بتصميم كلاسيكي راقٍ، مثالية للشغل والخروجات المميزة.',
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
    image: 'images/9.jpeg',
    tags: ['كاجوال', 'جامعة', 'خروج', 'فاتح']
  },
  {
    id: 6,
    name: 'لوك أسود أنيق',
    description: 'بنطلون جلد أسود مع توب أبيض، تنسيق جريء ومميز لأي خروجة.',
    price: 1100,
    image: 'images/10.jpeg',
    tags: ['شيك', 'خروج', 'غامق', 'جريء']
  }
];

const bags = [
  {
    name: 'شنطة وردية Structured',
    description: 'شنطة جلد وردي بتفاصيل ذهبية فاخرة، مثالية للمناسبات.',
    price: 780,
    image: 'images/12.jpeg',
    tags: ['مناسبة', 'شيك', 'فاتح']
  },
  {
    name: 'شنطة جلد كلاسيك',
    description: 'شنطة جلد بني كلاسيكية، عملية وأنيقة للشغل واليوم اليومي.',
    price: 490,
    image: 'images/13.jpeg',
    tags: ['كاجوال', 'شغل', 'محايد']
  },
  {
    name: 'شنطة 3S Navy فاخرة',
    description: 'شنطة بشعار 3sTiTcH بتصميم فاخر وتفاصيل ذهبية مميزة.',
    price: 1200,
    image: 'images/48.jpeg',
    tags: ['رسمي', 'مناسبة', 'غامق', 'شيك']
  },
  {
    name: 'شنطة 3S Fluffy White',
    description: 'شنطة بيضاء فروية بشعار 3sTiTcH الذهبي، بيس لأي لوك.',
    price: 950,
    image: 'images/45.jpeg',
    tags: ['فاتح', 'محايد', 'شيك', 'خروج']
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
