// constants
const SPEED_HUNT_DURATION = 300;
const XP_PER_CHALLENGE    = 10;
const XP_PER_LEVEL        = 50;

// classic challenges
const CLASSIC_CHALLENGES = [
  { id: 'c1', title: "Something Alive",   keyword: "LIFE",  description: "Find something in the real world that is alive — a plant, tree, flower, animal, or even moss.", example: "E.g. a houseplant, a flower in the garden, an insect, or a branch with leaves." },
  { id: 'c2', title: "Something Wooden",  keyword: "WOOD",  description: "Find an object made of wood — something that was once part of a tree but now has a new life.", example: "E.g. a wooden chair, a branch, a pencil, a cutting board, or a wooden frame." },
  { id: 'c3', title: "Water in the Wild", keyword: "WATER", description: "Find water in your surroundings. Still or flowing, in a container or in nature.", example: "E.g. a glass of water, a pond, a puddle, a tap, or raindrops." },
  { id: 'c4', title: "Source of Light",   keyword: "LIGHT", description: "Find something that radiates or reflects light. Make light the main subject.", example: "E.g. a lamp, a candle, sunlight through a window, or a reflection in glass." },
  { id: 'c5', title: "Food for Thought",  keyword: "FOOD",  description: "Find something you can eat or drink — fresh, prepared, or packaged. Frame it beautifully.", example: "E.g. a piece of fruit, a sandwich, a cup of tea, or a snack." },
  { id: 'c6', title: "Motion & Time",     keyword: "TIME",  description: "Find something that moves or tracks time — a clock, something in the wind, or a shifting shadow.", example: "E.g. a clock, a fan, leaves in the wind, a bicycle wheel, or an hourglass." }
];

// challenge pool for speed hunt + daily
const CHALLENGE_POOL = [
  { id: 'e1', title: "Bicycle",            keyword: "BIKE",     description: "Find a bicycle — parked, locked, or in motion. Capture it from an interesting angle.", example: "E.g. a bike rack, handlebars, a wheel close-up, or a full bicycle shot." },
  { id: 'e2', title: "Something to Drink", keyword: "DRINK",    description: "Find any drink — hot, cold, in a cup, bottle, or glass. Make it look good.", example: "E.g. coffee, tea, a water bottle, juice, or a soft drink." },
  { id: 'e3', title: "Keys",               keyword: "KEYS",     description: "Find a set of keys — hanging, lying on a surface, or in someone's hand.", example: "E.g. house keys, car keys, or a key on a keychain." },
  { id: 'e4', title: "A Bag",              keyword: "BAG",      description: "Find a bag, backpack, or purse. Show its character — worn-in or brand new.", example: "E.g. a school backpack, a tote bag, or a sports bag." },
  { id: 'e5', title: "A Door",             keyword: "DOOR",     description: "Find an interesting door — old, colorful, or with a unique design.", example: "E.g. a painted front door, a shop entrance, or an old wooden gate." },
  { id: 'e6', title: "Shoes",              keyword: "SHOES",    description: "Photograph shoes — worn, lined up, or left behind somewhere.", example: "E.g. sneakers, boots, sandals left at the door, or shoes on a rack." },
  { id: 'e7', title: "A Window",           keyword: "WINDOW",   description: "Frame a window in your shot — what's inside, outside, or reflected in it?", example: "E.g. a window with curtains, a shop display, or a foggy window." },
  { id: 'e8', title: "Something Old",      keyword: "OLD",      description: "Find something that looks old, worn, or weathered. Age has its own beauty.", example: "E.g. a rusty fence, a cracked wall, an old book, or peeling paint." },
  { id: 's1', title: "Something Red",      keyword: "RED",      description: "Find anything predominantly red. Color is the entire subject.", example: "E.g. a red car, a stop sign, a flower, a coat, or a red door." },
  { id: 's2', title: "A Perfect Circle",   keyword: "CIRCLE",   description: "Find a circular shape in the real world — in everyday objects or architecture.", example: "E.g. a wheel, a clock face, a plate, a manhole cover, or a ring." },
  { id: 's3', title: "A Triangle",         keyword: "TRIANGLE", description: "Spot a triangle in your environment — in buildings, signs, or everyday objects.", example: "E.g. a rooftop, a traffic sign, a folded piece of paper, or a ramp." },
  { id: 's4', title: "Symmetry",           keyword: "SYMMETRY", description: "Find something perfectly symmetrical and frame it so symmetry is the star.", example: "E.g. a building facade, a bridge reflection, a hallway, or a leaf." },
  { id: 's5', title: "Something Blue",     keyword: "BLUE",     description: "Photograph something strikingly blue — nature or man-made.", example: "E.g. the sky, a door, a car, a water surface, or a blue jacket." },
  { id: 's6', title: "A Straight Line",    keyword: "LINE",     description: "Find a powerful straight line — roads, fences, horizon, or building edges.", example: "E.g. a road stretching ahead, a fence, a railway track, or a wall edge." },
  { id: 'a1', title: "Freedom",            keyword: "FREEDOM",  description: "Capture what freedom looks like to you. There is no wrong answer.", example: "E.g. open sky, an empty road, an open field, or someone running." },
  { id: 'a2', title: "Peace",              keyword: "PEACE",    description: "Find a moment or scene that feels calm and peaceful. Slow down and look.", example: "E.g. a still pond, an empty bench, a sleeping pet, or morning light." },
  { id: 'a3', title: "Chaos",              keyword: "CHAOS",    description: "Photograph something that feels chaotic, busy, or messy.", example: "E.g. a crowded street, tangled wires, a messy desk, or overlapping signs." },
  { id: 'a4', title: "Connection",         keyword: "CONNECT",  description: "Show two or more things that are connected — physically or conceptually.", example: "E.g. intertwined roots, plugged-in cables, touching hands, or two fences meeting." },
  { id: 'a5', title: "Alone",              keyword: "ALONE",    description: "Find something that looks isolated in its environment.", example: "E.g. a single chair, one tree in a field, a lone streetlight, or one shoe." },
  { id: 'w1', title: "Forced Perspective", keyword: "ILLUSION", description: "Create a perspective trick — make something appear bigger, smaller, or out of place.", example: "E.g. 'holding' the sun, squishing a building, or standing on a tiny object." },
  { id: 'w2', title: "Jump Shot",          keyword: "JUMP",     description: "Photograph yourself or someone else mid-jump. Timing is everything.", example: "E.g. jumping in front of a landmark, over a puddle, or between two surfaces." },
  { id: 'w3', title: "Two Objects",        keyword: "COMBINE",  description: "Find two completely unrelated objects and photograph them together creatively.", example: "E.g. a shoe next to a plant, sunglasses on a statue, or keys on a bottle." },
  { id: 'w4', title: "Reflection",         keyword: "REFLECT",  description: "Use a reflective surface to create an unexpected or artistic image.", example: "E.g. your reflection in a puddle, a building in a car window, or sky in glasses." },
  { id: 'w5', title: "Tiny World",         keyword: "TINY",     description: "Get up close to something small and make it feel monumental.", example: "E.g. a coin on pavement, an ant, a pebble, or a flower bud from ground level." }
];

// state
let state = {
  username: '',
  mode: 'classic',
  currentIndex: 0,
  activeChallenges: [],
  submittedPhotos: [],
  photoFile: null,
  photoPreviewUrl: null,
  elapsedSeconds: 0,
  clockInterval: null,
  clockRunning: false,
  speedTimerInterval: null,
  speedTimeRemaining: SPEED_HUNT_DURATION,
  totalElapsed: 0
};

let leaderboardFrom = 'welcome';
let activeTab = 'daily';

// screens
const screens = {
  welcome:     document.getElementById('screen-welcome'),
  modes:       document.getElementById('screen-modes'),
  challenge:   document.getElementById('screen-challenge'),
  upload:      document.getElementById('screen-upload'),
  analyzing:   document.getElementById('screen-analyzing'),
  levelup:     document.getElementById('screen-levelup'),
  complete:    document.getElementById('screen-complete'),
  leaderboard: document.getElementById('screen-leaderboard')
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'challenge') {
    setTimeout(() => {
      if (!challengeMap) initMap();
      else challengeMap.invalidateSize();
    }, 150);
  }
}

// map
let challengeMap = null;
let userMarker   = null;

function initMap() {
  if (challengeMap) return;
  challengeMap = L.map('challenge-map', { zoomControl: false }).setView([52.3676, 4.9041], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors', maxZoom: 19
  }).addTo(challengeMap);
  L.control.zoom({ position: 'topright' }).addTo(challengeMap);
  findUserLocation();
}

function findUserLocation() {
  if (!challengeMap || !navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(pos => {
    const latlng = [pos.coords.latitude, pos.coords.longitude];
    challengeMap.setView(latlng, 16);
    if (userMarker) userMarker.setLatLng(latlng);
    else userMarker = L.circleMarker(latlng, {
      radius: 10, fillColor: '#354024', color: '#E5D7C4', weight: 3, fillOpacity: 0.9
    }).addTo(challengeMap);
  });
}

// level system
function getXP()       { return parseInt(localStorage.getItem('ws_xp') || '0'); }
function getLevel(xp)  { return Math.floor((xp ?? getXP()) / XP_PER_LEVEL) + 1; }
function addXP(amount) {
  const before = getXP(), after = before + amount;
  localStorage.setItem('ws_xp', after.toString());
  return { before, after, levelBefore: getLevel(before), levelAfter: getLevel(after), leveledUp: getLevel(after) > getLevel(before) };
}

// elapsed clock
function startClock() {
  if (state.clockRunning) return;
  state.clockRunning = true;
  state.clockInterval = setInterval(() => { state.elapsedSeconds++; updateClockDisplay(); }, 1000);
  document.getElementById('btn-start-timer').textContent = 'Stop';
}

function stopClock() {
  clearInterval(state.clockInterval);
  state.clockRunning = false;
  const btn = document.getElementById('btn-start-timer');
  if (btn) btn.textContent = 'Start';
}

function resetClock() {
  stopClock();
  state.elapsedSeconds = 0;
  updateClockDisplay();
}

function formatTime(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function updateClockDisplay() {
  const el = document.getElementById('elapsed-timer');
  if (el) el.textContent = formatTime(state.elapsedSeconds);
}

// speed hunt countdown
function startSpeedTimer() {
  state.speedTimeRemaining = SPEED_HUNT_DURATION;
  document.getElementById('speed-timer-bar').hidden = false;
  updateSpeedDisplay();
  state.speedTimerInterval = setInterval(() => {
    state.speedTimeRemaining--;
    updateSpeedDisplay();
    if (state.speedTimeRemaining <= 0) { clearInterval(state.speedTimerInterval); showCompleteScreen(); }
  }, 1000);
}

function stopSpeedTimer() {
  clearInterval(state.speedTimerInterval);
  const bar = document.getElementById('speed-timer-bar');
  if (bar) bar.hidden = true;
}

function updateSpeedDisplay() {
  const min = Math.floor(state.speedTimeRemaining / 60);
  const sec = state.speedTimeRemaining % 60;
  const danger = state.speedTimeRemaining < 60;
  document.getElementById('timer-text').textContent = `${min}:${sec.toString().padStart(2,'0')}`;
  document.getElementById('timer-text').className   = danger ? 'timer-text danger' : 'timer-text';
  document.getElementById('timer-fill').style.width = `${(state.speedTimeRemaining / SPEED_HUNT_DURATION) * 100}%`;
  document.getElementById('timer-fill').className   = danger ? 'timer-fill danger' : 'timer-fill';
}

// hint
function toggleHint() {
  const box = document.getElementById('hint-box');
  const btn = document.getElementById('btn-hint');
  box.hidden = !box.hidden;
  btn.classList.toggle('active', !box.hidden);
}

// progress dots
function updateProgress() {
  document.getElementById('progress-dots').innerHTML = state.activeChallenges.map((_, i) => {
    let cls = 'progress-dot';
    if (i < state.currentIndex)        cls += ' done';
    else if (i === state.currentIndex) cls += ' current';
    return `<div class="${cls}"></div>`;
  }).join('');
}

// render challenge
function renderChallenge() {
  const ch = state.activeChallenges[state.currentIndex];
  if (!ch) return;
  document.getElementById('challenge-keyword').textContent = ch.keyword;
  document.getElementById('challenge-desc').textContent    = ch.description;
  document.getElementById('challenge-example').textContent = ch.example;
  document.getElementById('hint-box').hidden = true;
  document.getElementById('btn-hint').classList.remove('active');
  updateProgress();
  resetClock();
  showScreen('challenge');
}

// modes
function pickRandom(arr, n) { return [...arr].sort(() => Math.random() - 0.5).slice(0, n); }

function getDailyChallenge() {
  const now = new Date(), start = new Date(now.getFullYear(), 0, 0);
  return { ...CHALLENGE_POOL[Math.floor((now - start) / 86400000) % CHALLENGE_POOL.length] };
}

function startMode(mode) {
  state.mode = mode;
  state.currentIndex = 0;
  state.submittedPhotos = [];
  state.totalElapsed = 0;
  if (mode === 'classic')     state.activeChallenges = CLASSIC_CHALLENGES;
  else if (mode === 'speed')  { state.activeChallenges = pickRandom(CHALLENGE_POOL, 5); startSpeedTimer(); }
  else if (mode === 'daily')  state.activeChallenges = [getDailyChallenge()];
  renderChallenge();
}

// upload
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
  if (state.photoPreviewUrl) { URL.revokeObjectURL(state.photoPreviewUrl); state.photoPreviewUrl = null; }
  const p = document.getElementById('preview-image');
  p.hidden = true; p.src = '';
  document.getElementById('upload-placeholder').style.display = '';
  document.getElementById('photo-actions').classList.add('hidden');
  document.getElementById('initial-actions').classList.remove('hidden');
}

function openFilePicker(useCamera = false) {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  if (useCamera) input.capture = 'environment';
  input.onchange = e => handleFile(e.target.files[0]);
  input.click();
}

function submitPhoto() {
  if (!state.photoFile) return;
  stopClock();
  state.totalElapsed += state.elapsedSeconds;
  showScreen('analyzing');
  const photoUrl = state.photoPreviewUrl;
  state.submittedPhotos.push(photoUrl);
  setTimeout(() => { const xp = addXP(XP_PER_CHALLENGE); showLevelUp(xp, photoUrl); }, 2000);
}

function showLevelUp(xp, photoUrl) {
  const isLast = state.currentIndex === state.activeChallenges.length - 1;
  document.getElementById('levelup-heading').textContent = xp.leveledUp ? 'LEVEL UP!' : 'CHALLENGE COMPLETE!';
  document.getElementById('levelup-number').textContent  = xp.levelAfter;
  document.getElementById('xp-gain').textContent         = `+${XP_PER_CHALLENGE} XP`;
  document.getElementById('levelup-time').textContent    = `Time: ${formatTime(state.elapsedSeconds)}`;
  document.getElementById('levelup-photo').src           = photoUrl;
  const btn = document.getElementById('btn-levelup-next');
  btn.textContent = isLast ? 'See Results' : 'Next Challenge';
  btn.onclick = isLast ? showCompleteScreen : () => { state.currentIndex++; resetUpload(); renderChallenge(); };
  showScreen('levelup');
}

function showCompleteScreen() {
  stopClock(); stopSpeedTimer();
  const score = state.mode === 'speed' ? state.submittedPhotos.length * 100 + state.speedTimeRemaining : null;
  document.getElementById('complete-name').textContent = `Great job, ${state.username}!`;
  document.getElementById('final-time').textContent    = formatTime(state.totalElapsed).slice(3);
  document.getElementById('final-level').textContent   = getLevel(getXP());
  if (score !== null) saveScore(state.username, score, state.submittedPhotos.length, state.submittedPhotos);
  document.getElementById('photos-grid').innerHTML = state.submittedPhotos.map((url, i) =>
    `<img src="${url}" alt="Challenge ${i + 1}">`).join('');
  showScreen('complete');
}

// leaderboard
function saveScore(name, score, completed, photos) {
  const board = JSON.parse(localStorage.getItem('ws_scores') || '[]');
  board.push({ name, score, completed, photos: photos.slice(0, 3),
    date: new Date().toLocaleDateString('en-GB'),
    month: `${new Date().getFullYear()}-${new Date().getMonth() + 1}` });
  board.sort((a, b) => b.score - a.score);
  board.splice(20);
  localStorage.setItem('ws_scores', JSON.stringify(board));
}

function renderLeaderboard() {
  const all   = JSON.parse(localStorage.getItem('ws_scores') || '[]');
  const today = new Date().toLocaleDateString('en-GB');
  const month = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`;
  const board = activeTab === 'daily' ? all.filter(e => e.date === today) :
                activeTab === 'monthly' ? all.filter(e => e.month === month) : all;
  const list  = document.getElementById('leaderboard-list');
  const empty = document.getElementById('lb-empty');
  if (board.length === 0) { empty.hidden = false; list.innerHTML = ''; return; }
  empty.hidden = true;
  const rankClass = i => ['gold', 'silver', 'bronze'][i] || '';
  list.innerHTML = board.map((e, i) => `
    <div class="lb-entry">
      <span class="lb-rank ${rankClass(i)}">#${i + 1}</span>
      <div class="lb-player">
        <span class="lb-name">${e.name}</span>
        <span class="lb-detail">${e.score} pts · ${e.completed} found · ${e.date}</span>
      </div>
      <div class="lb-photos">
        ${(e.photos || []).map(url => `<img src="${url}" alt="" onerror="this.style.display='none'">`).join('')}
      </div>
    </div>`).join('');
}

function openLeaderboard(from) {
  leaderboardFrom = from;
  renderLeaderboard();
  showScreen('leaderboard');
}

// drag & drop
const uploadArea = document.getElementById('upload-area');
uploadArea.addEventListener('dragover',  e => { e.preventDefault(); uploadArea.classList.add('drag-over'); });
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
uploadArea.addEventListener('drop',      e => { e.preventDefault(); uploadArea.classList.remove('drag-over'); handleFile(e.dataTransfer.files[0]); });
uploadArea.addEventListener('click',     () => { if (!state.photoFile) openFilePicker(false); });

// button events
document.getElementById('btn-start').addEventListener('click', () => {
  const name = document.getElementById('username').value.trim();
  if (!name) { document.getElementById('username').focus(); return; }
  state.username = name;
  document.getElementById('modes-name').textContent = name;
  showScreen('modes');
});

document.getElementById('username').addEventListener('keypress', e => {
  if (e.key === 'Enter') document.getElementById('btn-start').click();
});

document.getElementById('btn-leaderboard-home').addEventListener('click', () => openLeaderboard('welcome'));
document.getElementById('btn-modes-back').addEventListener('click', () => showScreen('welcome'));

document.getElementById('mode-classic').addEventListener('click', () => startMode('classic'));
document.getElementById('mode-speed').addEventListener('click',   () => startMode('speed'));
document.getElementById('mode-daily').addEventListener('click',   () => startMode('daily'));

document.getElementById('btn-exit-challenge').addEventListener('click', () => {
  stopClock(); stopSpeedTimer(); resetUpload(); showScreen('modes');
});

document.getElementById('btn-findme').addEventListener('click', findUserLocation);
document.getElementById('btn-hint').addEventListener('click',   toggleHint);

document.getElementById('btn-start-timer').addEventListener('click', () => {
  if (state.clockRunning) stopClock(); else startClock();
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

document.getElementById('btn-view-leaderboard').addEventListener('click', () => openLeaderboard('complete'));
document.getElementById('btn-lb-back').addEventListener('click',          () => showScreen(leaderboardFrom));

document.getElementById('btn-restart').addEventListener('click', () => {
  stopClock(); stopSpeedTimer();
  state = {
    username: state.username, mode: 'classic', currentIndex: 0,
    activeChallenges: [], submittedPhotos: [], photoFile: null, photoPreviewUrl: null,
    elapsedSeconds: 0, clockInterval: null, clockRunning: false,
    speedTimerInterval: null, speedTimeRemaining: SPEED_HUNT_DURATION, totalElapsed: 0
  };
  document.getElementById('modes-name').textContent = state.username;
  resetUpload();
  showScreen('modes');
});

document.querySelectorAll('.lb-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    activeTab = tab.dataset.tab;
    document.querySelectorAll('.lb-tab').forEach(t => t.classList.toggle('active', t === tab));
    renderLeaderboard();
  });
});
