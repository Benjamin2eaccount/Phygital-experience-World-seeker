// classic challenges (fixed order)
const CLASSIC_CHALLENGES = [
  {
    id: 'c1', title: "Something Alive", keyword: "LIFE", category: "everyday",
    description: "Find something in the real world that is alive — a plant, tree, flower, animal, or even moss. Photograph it so that its life force is clearly visible.",
    example: "E.g. a houseplant, a flower in the garden, an insect, or a branch with leaves.",
    emoji: "🌿"
  },
  {
    id: 'c2', title: "Something Wooden", keyword: "WOOD", category: "everyday",
    description: "Find an object made of wood — something that was once part of a tree but now has a new life as furniture, a tool, or decoration.",
    example: "E.g. a wooden chair, a branch, a pencil, a cutting board, or a wooden frame.",
    emoji: "🪵"
  },
  {
    id: 'c3', title: "Water in the Wild", keyword: "WATER", category: "everyday",
    description: "Find water in your surroundings. Still or flowing, in a container or in nature. Photograph it in a creative way.",
    example: "E.g. a glass of water, a pond, a puddle on the street, a tap, or raindrops.",
    emoji: "💧"
  },
  {
    id: 'c4', title: "Source of Light", keyword: "LIGHT", category: "everyday",
    description: "Find something that radiates or reflects light. Artificial light or sunlight — take a photo where light plays the leading role.",
    example: "E.g. a lamp, a candle, sunlight through a window, a reflection in glass, or a street light.",
    emoji: "✨"
  },
  {
    id: 'c5', title: "Food for Thought", keyword: "FOOD", category: "everyday",
    description: "Find something you can eat or drink — fresh, prepared, or packaged. Frame it beautifully and turn it into a little work of art.",
    example: "E.g. a piece of fruit, a sandwich, a cup of tea, vegetables, or a snack.",
    emoji: "🍎"
  },
  {
    id: 'c6', title: "Motion & Time", keyword: "TIME", category: "everyday",
    description: "Find something that moves or tracks time. It could be a clock, something in the wind, a wheel, or even a shadow shifting across a surface.",
    example: "E.g. a clock, a fan, leaves in the wind, a bicycle wheel, or an hourglass.",
    emoji: "⏰"
  }
];

// full challenge pool (speed hunt + daily)
const CHALLENGE_POOL = [
  // everyday objects
  { id: 'e1', title: "Bicycle", keyword: "BIKE", category: "everyday", emoji: "🚲",
    description: "Find a bicycle — parked, locked, or in motion. Capture it from an interesting angle.",
    example: "E.g. a bike rack, handlebars, a wheel close-up, or a full bicycle shot." },
  { id: 'e2', title: "Something to Drink", keyword: "DRINK", category: "everyday", emoji: "☕",
    description: "Find any drink — hot, cold, in a cup, bottle, or glass. Make it look good.",
    example: "E.g. coffee, tea, a water bottle, juice, or a soft drink." },
  { id: 'e3', title: "Keys", keyword: "KEYS", category: "everyday", emoji: "🔑",
    description: "Find a set of keys — hanging, lying on a surface, or in someone's hand.",
    example: "E.g. house keys, car keys, or a key on a keychain." },
  { id: 'e4', title: "A Bag", keyword: "BAG", category: "everyday", emoji: "🎒",
    description: "Find a bag, backpack, or purse. Show its character — worn-in or brand new.",
    example: "E.g. a school backpack, a tote bag, or a sports bag." },
  { id: 'e5', title: "A Door", keyword: "DOOR", category: "everyday", emoji: "🚪",
    description: "Find an interesting door — old, colorful, or with a unique design or knocker.",
    example: "E.g. a painted front door, a shop entrance, or an old wooden gate." },
  { id: 'e6', title: "Shoes", keyword: "SHOES", category: "everyday", emoji: "👟",
    description: "Photograph shoes — worn, lined up, or left behind somewhere.",
    example: "E.g. sneakers, boots, sandals left at the door, or shoes on a rack." },
  { id: 'e7', title: "A Window", keyword: "WINDOW", category: "everyday", emoji: "🪟",
    description: "Frame a window in your shot — what's inside, outside, or reflected in it?",
    example: "E.g. a window with curtains, a shop display, or a foggy window." },
  { id: 'e8', title: "Something Old", keyword: "OLD", category: "everyday", emoji: "🏚️",
    description: "Find something that looks old, worn, or weathered. Age has its own beauty.",
    example: "E.g. a rusty fence, a cracked wall, an old book, or peeling paint." },

  // colors & shapes
  { id: 's1', title: "Something Red", keyword: "RED", category: "shapes", emoji: "🔴",
    description: "Find anything that is predominantly red. Color is the entire subject here.",
    example: "E.g. a red car, a stop sign, a flower, a coat, or a red door." },
  { id: 's2', title: "A Perfect Circle", keyword: "CIRCLE", category: "shapes", emoji: "⭕",
    description: "Find a circular shape in the real world — in everyday objects or architecture.",
    example: "E.g. a wheel, a clock face, a plate, a manhole cover, or a ring." },
  { id: 's3', title: "A Triangle", keyword: "TRIANGLE", category: "shapes", emoji: "🔺",
    description: "Spot a triangle in your environment — in buildings, signs, or everyday objects.",
    example: "E.g. a rooftop, a traffic sign, a folded piece of paper, or a ramp." },
  { id: 's4', title: "Symmetry", keyword: "SYMMETRY", category: "shapes", emoji: "🪞",
    description: "Find something perfectly symmetrical and frame it so the symmetry is the star.",
    example: "E.g. a building facade, a bridge reflection, a hallway, or a leaf." },
  { id: 's5', title: "Something Blue", keyword: "BLUE", category: "shapes", emoji: "🔵",
    description: "Photograph something strikingly blue — whether from nature or man-made.",
    example: "E.g. the sky, a door, a car, a water surface, or a blue jacket." },
  { id: 's6', title: "A Straight Line", keyword: "LINE", category: "shapes", emoji: "📏",
    description: "Find a powerful straight line — roads, fences, horizon, or edges of buildings.",
    example: "E.g. a road stretching ahead, a fence, a railway track, or a wall edge." },

  // abstract
  { id: 'a1', title: "Freedom", keyword: "FREEDOM", category: "abstract", emoji: "🕊️",
    description: "Capture what freedom looks like to you. There is no wrong answer — trust your instinct.",
    example: "E.g. open sky, an empty road, an open field, or someone running." },
  { id: 'a2', title: "Peace", keyword: "PEACE", category: "abstract", emoji: "🌅",
    description: "Find a moment or scene that feels calm and peaceful. Slow down and look carefully.",
    example: "E.g. a still pond, an empty bench, a sleeping pet, or morning light." },
  { id: 'a3', title: "Chaos", keyword: "CHAOS", category: "abstract", emoji: "🌀",
    description: "Photograph something that feels chaotic, busy, or messy — controlled or not.",
    example: "E.g. a crowded street, tangled wires, a messy desk, or overlapping signs." },
  { id: 'a4', title: "Connection", keyword: "CONNECT", category: "abstract", emoji: "🔗",
    description: "Show two or more things that are connected — physically, visually, or conceptually.",
    example: "E.g. intertwined roots, plugged-in cables, touching hands, or two fences meeting." },
  { id: 'a5', title: "Alone", keyword: "ALONE", category: "abstract", emoji: "🫥",
    description: "Find something that looks isolated or alone in its environment.",
    example: "E.g. a single chair, one tree in a field, a lone streetlight, or one shoe." },

  // wild cards
  { id: 'w1', title: "Forced Perspective", keyword: "ILLUSION", category: "crazy", emoji: "🎭",
    description: "Create a perspective trick — make something appear bigger, smaller, or out of place.",
    example: "E.g. 'holding' the sun, squishing a building, or standing on a tiny object." },
  { id: 'w2', title: "Jump Shot", keyword: "JUMP", category: "crazy", emoji: "🦘",
    description: "Photograph yourself or someone else mid-jump. Timing is everything.",
    example: "E.g. jumping in front of a landmark, over a puddle, or between two surfaces." },
  { id: 'w3', title: "Two Objects, One Shot", keyword: "COMBINE", category: "crazy", emoji: "🤝",
    description: "Find two completely unrelated objects and photograph them together creatively.",
    example: "E.g. a shoe next to a plant, sunglasses on a statue, or keys balanced on a bottle." },
  { id: 'w4', title: "Reflection", keyword: "REFLECT", category: "crazy", emoji: "🪩",
    description: "Use a reflective surface to create an unexpected or artistic image.",
    example: "E.g. your reflection in a puddle, a building in a car window, or the sky in glasses." },
  { id: 'w5', title: "Tiny World", keyword: "TINY", category: "crazy", emoji: "🔬",
    description: "Get up close to something small and make it feel monumental in your photo.",
    example: "E.g. a coin on pavement, an ant, a pebble, or a flower bud from ground level." }
];

const SPEED_HUNT_DURATION = 300; // 5 minutes in seconds

// state
let state = {
  username: '',
  mode: 'classic',
  currentIndex: 0,
  activeChallenges: [],
  submittedPhotos: [],
  photoFile: null,
  photoPreviewUrl: null,
  timeRemaining: SPEED_HUNT_DURATION,
  timerInterval: null
};

// screens
const screens = {
  welcome:     document.getElementById('screen-welcome'),
  modes:       document.getElementById('screen-modes'),
  challenge:   document.getElementById('screen-challenge'),
  upload:      document.getElementById('screen-upload'),
  analyzing:   document.getElementById('screen-analyzing'),
  success:     document.getElementById('screen-success'),
  complete:    document.getElementById('screen-complete'),
  leaderboard: document.getElementById('screen-leaderboard')
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

// progress dots
function updateProgress() {
  const dots = document.getElementById('progress-dots');
  dots.innerHTML = state.activeChallenges.map((_, i) => {
    let cls = 'progress-dot';
    if (i < state.currentIndex)        cls += ' done';
    else if (i === state.currentIndex) cls += ' current';
    return `<div class="${cls}" title="Challenge ${i + 1}"></div>`;
  }).join('');
}

// render current challenge
function renderChallenge() {
  const ch = state.activeChallenges[state.currentIndex];
  if (!ch) return;

  const total = state.activeChallenges.length;
  document.getElementById('challenge-number').textContent  = `Challenge ${state.currentIndex + 1} of ${total}`;
  document.getElementById('challenge-emoji').textContent   = ch.emoji;
  document.getElementById('challenge-title').textContent   = ch.title;
  document.getElementById('challenge-keyword').textContent = ch.keyword;
  document.getElementById('challenge-desc').textContent    = ch.description;
  document.getElementById('challenge-example').textContent = ch.example;

  const catEl = document.getElementById('challenge-category');
  const catLabels = { everyday: 'Everyday', shapes: 'Colors & Shapes', abstract: 'Abstract', crazy: 'Wild Card' };
  catEl.textContent = catLabels[ch.category] || ch.category;
  catEl.className = `category-badge cat-${ch.category}`;

  updateProgress();
  showScreen('challenge');
}

// timer (speed hunt only)
function startTimer() {
  state.timeRemaining = SPEED_HUNT_DURATION;
  const display = document.getElementById('timer-display');
  display.hidden = false;
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimerDisplay();
    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      timeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const min = Math.floor(state.timeRemaining / 60);
  const sec = state.timeRemaining % 60;
  const text = `${min}:${sec.toString().padStart(2, '0')}`;
  const isDanger = state.timeRemaining < 60;

  const timerText = document.getElementById('timer-text');
  const timerFill = document.getElementById('timer-fill');

  timerText.textContent = text;
  timerText.className = isDanger ? 'timer-text danger' : 'timer-text';
  timerFill.style.width = `${(state.timeRemaining / SPEED_HUNT_DURATION) * 100}%`;
  timerFill.className = isDanger ? 'timer-fill danger' : 'timer-fill';
}

function stopTimer() {
  clearInterval(state.timerInterval);
  document.getElementById('timer-display').hidden = true;
}

function timeUp() {
  showCompleteScreen();
}

// scoring
function calculateScore() {
  return state.submittedPhotos.length * 100 + state.timeRemaining;
}

// leaderboard (localStorage)
function saveScore(name, score, completed) {
  const board = JSON.parse(localStorage.getItem('ws_scores') || '[]');
  board.push({ name, score, completed, date: new Date().toLocaleDateString('en-GB') });
  board.sort((a, b) => b.score - a.score);
  board.splice(10);
  localStorage.setItem('ws_scores', JSON.stringify(board));
}

function renderLeaderboard() {
  const board = JSON.parse(localStorage.getItem('ws_scores') || '[]');
  const list  = document.getElementById('leaderboard-list');
  const empty = document.getElementById('lb-empty');

  if (board.length === 0) {
    empty.hidden = false;
    list.innerHTML = '';
    return;
  }

  empty.hidden = true;
  const rankClass = i => ['gold', 'silver', 'bronze'][i] || '';
  list.innerHTML = board.map((e, i) => `
    <div class="lb-entry">
      <span class="lb-rank ${rankClass(i)}">#${i + 1}</span>
      <span class="lb-name">${e.name}</span>
      <span class="lb-score">${e.score} pts</span>
      <span class="lb-detail">${e.completed}/5 · ${e.date}</span>
    </div>
  `).join('');
}

// daily: pick challenge based on today's date
function getDailyChallenge() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return { ...CHALLENGE_POOL[dayOfYear % CHALLENGE_POOL.length], id: 'd_daily' };
}

// random pick without duplicates
function pickRandom(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// start game by mode
function startMode(mode) {
  state.mode = mode;
  state.currentIndex = 0;
  state.submittedPhotos = [];

  if (mode === 'classic') {
    state.activeChallenges = CLASSIC_CHALLENGES;
    renderChallenge();
  } else if (mode === 'speed') {
    state.activeChallenges = pickRandom(CHALLENGE_POOL, 5);
    renderChallenge();
    startTimer();
  } else if (mode === 'daily') {
    state.activeChallenges = [getDailyChallenge()];
    renderChallenge();
  }
}

// complete screen
function showCompleteScreen() {
  stopTimer();

  const score = state.mode === 'speed' ? calculateScore() : null;

  document.getElementById('complete-name').textContent =
    state.mode === 'daily'
      ? `Well done, ${state.username}!`
      : `Amazing work, ${state.username}!`;

  if (state.mode === 'speed') {
    const scoreEl = document.getElementById('score-display');
    scoreEl.hidden = false;
    document.getElementById('score-number').textContent = score;
    document.getElementById('score-detail').textContent =
      `${state.submittedPhotos.length} of 5 completed · ${Math.floor((SPEED_HUNT_DURATION - state.timeRemaining) / 60)}m ${(SPEED_HUNT_DURATION - state.timeRemaining) % 60}s used`;

    saveScore(state.username, score, state.submittedPhotos.length);
    document.getElementById('btn-view-leaderboard').hidden = false;
    document.getElementById('complete-message').textContent = 'Your score has been saved to the leaderboard.';
  } else {
    document.getElementById('score-display').hidden = true;
    document.getElementById('btn-view-leaderboard').hidden = true;
    document.getElementById('complete-message').textContent =
      state.mode === 'daily'
        ? 'Come back tomorrow for a new challenge!'
        : 'You have successfully bridged the digital and physical world!';
  }

  const grid = document.getElementById('photos-grid');
  grid.innerHTML = state.submittedPhotos.map((url, i) =>
    `<img src="${url}" alt="Challenge ${i + 1}">`
  ).join('');

  showScreen('complete');
}

// upload helpers
function handleFile(file) {
  if (!file || !file.type.startsWith('image/')) return;

  state.photoFile = file;
  if (state.photoPreviewUrl) URL.revokeObjectURL(state.photoPreviewUrl);
  state.photoPreviewUrl = URL.createObjectURL(file);

  const preview = document.getElementById('preview-image');
  preview.src = state.photoPreviewUrl;
  preview.hidden = false;

  document.getElementById('upload-placeholder').style.display = 'none';
  document.getElementById('initial-actions').classList.add('hidden');
  document.getElementById('photo-actions').classList.remove('hidden');
}

function resetUpload() {
  state.photoFile = null;
  if (state.photoPreviewUrl) {
    URL.revokeObjectURL(state.photoPreviewUrl);
    state.photoPreviewUrl = null;
  }

  const preview = document.getElementById('preview-image');
  preview.hidden = true;
  preview.src = '';

  document.getElementById('upload-placeholder').style.display = '';
  document.getElementById('photo-actions').classList.add('hidden');
  document.getElementById('initial-actions').classList.remove('hidden');
}

function openFilePicker(useCamera = false) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  if (useCamera) input.capture = 'environment';
  input.onchange = e => handleFile(e.target.files[0]);
  input.click();
}

function submitPhoto() {
  if (!state.photoFile) return;

  showScreen('analyzing');

  const photoUrl = state.photoPreviewUrl;
  state.submittedPhotos.push(photoUrl);

  setTimeout(() => {
    document.getElementById('success-photo').src = photoUrl;

    const isLast = state.currentIndex === state.activeChallenges.length - 1;
    const nextBtn = document.getElementById('btn-next');

    if (isLast) {
      document.getElementById('success-message').textContent =
        state.mode === 'speed'
          ? `Last photo in! Final score: ${calculateScore()} pts`
          : "Last photo approved! You've completed all challenges!";
      nextBtn.textContent = 'See your results';
      nextBtn.onclick = showCompleteScreen;
    } else {
      document.getElementById('success-message').textContent = 'Photo approved. Move on to the next challenge!';
      nextBtn.textContent = 'Next challenge';
      nextBtn.onclick = () => {
        state.currentIndex++;
        resetUpload();
        renderChallenge();
      };
    }

    showScreen('success');
  }, 2000);
}

// drag & drop
const uploadArea = document.getElementById('upload-area');

uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('drag-over'); });
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
uploadArea.addEventListener('drop', e => {
  e.preventDefault();
  uploadArea.classList.remove('drag-over');
  handleFile(e.dataTransfer.files[0]);
});
uploadArea.addEventListener('click', () => { if (!state.photoFile) openFilePicker(false); });

// button events
document.getElementById('btn-start').addEventListener('click', () => {
  const name = document.getElementById('username').value.trim();
  if (!name) {
    document.getElementById('username').focus();
    document.getElementById('username').style.borderColor = '#889063';
    return;
  }
  state.username = name;
  document.getElementById('modes-name').textContent = name;
  showScreen('modes');
});

document.getElementById('username').addEventListener('keypress', e => {
  if (e.key === 'Enter') document.getElementById('btn-start').click();
});

document.getElementById('btn-leaderboard-home').addEventListener('click', () => {
  renderLeaderboard();
  showScreen('leaderboard');
});

document.getElementById('btn-modes-back').addEventListener('click', () => showScreen('welcome'));

document.getElementById('mode-classic').addEventListener('click', () => startMode('classic'));
document.getElementById('mode-speed').addEventListener('click',   () => startMode('speed'));
document.getElementById('mode-daily').addEventListener('click',   () => startMode('daily'));

document.getElementById('btn-exit-challenge').addEventListener('click', () => {
  stopTimer();
  resetUpload();
  showScreen('modes');
});

document.getElementById('btn-go-upload').addEventListener('click', () => {
  const ch = state.activeChallenges[state.currentIndex];
  document.getElementById('upload-desc').textContent = `Take a photo of: ${ch.title.toLowerCase()}`;
  resetUpload();
  showScreen('upload');
});

document.getElementById('btn-back').addEventListener('click',    () => showScreen('challenge'));
document.getElementById('btn-camera').addEventListener('click',  () => openFilePicker(true));
document.getElementById('btn-gallery').addEventListener('click', () => openFilePicker(false));
document.getElementById('btn-retake').addEventListener('click',  () => resetUpload());
document.getElementById('btn-submit').addEventListener('click',  submitPhoto);

document.getElementById('btn-view-leaderboard').addEventListener('click', () => {
  renderLeaderboard();
  showScreen('leaderboard');
});

document.getElementById('btn-lb-back').addEventListener('click', () => showScreen('complete'));

document.getElementById('btn-restart').addEventListener('click', () => {
  stopTimer();
  state = {
    username: state.username, mode: 'classic', currentIndex: 0,
    activeChallenges: [], submittedPhotos: [],
    photoFile: null, photoPreviewUrl: null,
    timeRemaining: SPEED_HUNT_DURATION, timerInterval: null
  };
  document.getElementById('modes-name').textContent = state.username;
  resetUpload();
  showScreen('modes');
});
