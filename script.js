const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sign',
  'first',
  'going',
  'break',
  'demand',
  'think',
  'after',
  'though',
  'during',
  'step',
  'reach',
  'drive',
  'laugh',
  'among',
  'perhaps',
  'abjure',
  'craven',
  'demure',
  'dirge',
  'fawn',
  'glower',
  'iniquity',
  'kindle',
  'missive',
  'slake',
  'specified',
  'restaurant',
  'procedures',
  'relationship',
  'traditional',
  'sometimes',
  'themselves',
  'transport',
  'interesting',
  'evaluation',
  'implementation',
  'galleries',
  'references',
  'presented',
  'literature',
  'respective',
  'definition',
  'secretary',
  'networking',
  'australian',
  'magazines',
  'francisco',
  'individuals',
  'guidelines',
  'installation',
  'described',
  'attention',
  'difference',
  'regulations',
  'certificate',
  'directions',
  'documentation',
  'automotive',
  'successful',
  'communities',
  'situation',
  'publishing',
  'emergency',
  'developing',
  'determine',
  'temperature',
  'announcements',
  'historical',
  'ringtones',
  'difficult',
  'scientific',
  'satellite',
  'particularly',
  'functional',
  'monitoring',
  'architecture',
  'recommend',
  'dictionary',
  'accounting',
  'manufacturing',
  'professor',
  'generally',
  'continued',
  'techniques',
  'permission',
  'generation',
  'component',
  'guarantee',
  'processes',
  'interests',
  'paperback',
  'classifieds',
  'supported',
  'competition',
  'providers',
  'characters',
  'thousands',
  'apartments',
  'generated',
  'administrative',
  'practices',
  'reporting',
  'essential',
  'affiliate',
  'immediately',
  'designated',
  'integrated',
  'configuration',
  'comprehensive',
  'universal',
  'presentation',
  'languages',
  'compliance',
  'improvement',
  'pennsylvania',
  'challenge',
  'acceptance',
  'strategies',
  'affiliates',
  'multimedia',
  'certified',
  'computing',
  'interactive',
  'procedure',
  'leadership',
  'religious',
  'breakfast',
  'developer',
  'approximately',
  'recommendations',
  'comparison',
  'automatically',
  'minnesota',
  'adventure',
  'institutions',
  'assistant',
  'advertisement',
  'headlines',
  'yesterday',
  'determined',
  'wholesale',
  'extension',
  'statements',
  'completely',
  'electrical',
  'applicable',
  'manufacturers',
  'classical',
  'dedicated',
  'direction',
  'basketball',
  'wisconsin',
  'personnel',
  'identified',
  'professionals',
  'advantage',
  'newsletters',
  'estimated',
  'anonymous',
  'miscellaneous',
  'integration',
  'interview',
  'framework',
  'installed',
  'massachusetts',
  'associate',
  'frequently',
  'discussions',
  'laboratory',
  'destination',
  'intelligence',
  'specifications',
  'tripadvisor',
  'residential',
  'decisions',
  'industries',
  'partnership',
  'editorial',
  'expression',
  'provisions',
  'principles',
  'suggestions',
  'replacement',
  'strategic',
  'economics',
  'compatible',
  'apartment',
  'netherlands',
  'consulting',
  'recreation',
  'participants',
  'favorites',
  'translation',
  'estimates',
  'protected',
  'philadelphia',
  'officials',
  'contained',
  'legislation',
  'parameters',
  'relationships',
  'tennessee',
  'representative',
  'frequency',
  'introduced',
  'departments',
  'residents',
  'displayed',
  'performed',
  'administrator',
  'addresses',
  'permanent',
  'agriculture',
  'constitutes',
  'portfolio',
  'practical',
  'delivered',
  'collectibles',
  'infrastructure',
  'exclusive',
  'originally',
  'utilities',
  'philosophy',
  'regulation',
  'reduction',
  'nutrition',
  'recording',
  'secondary',
  'wonderful',
  'announced',
  'prevention',
  'mentioned',
  'automatic',
  'healthcare',
  'maintained',
  'increasing',
  'connected',
  'directors',
  'participation',
  'containing',
  'combination',
  'amendment',
  'guaranteed',
  'libraries',
  'distributed',
  'singapore',
  'enterprises',
  'convention',
  'principal',
  'certification',
  'previously',
  'buildings',
  'household',
  'batteries',
  'positions',
  'subscription',
  'contemporary',
  'panasonic',
  'permalink',
  'signature',
  'provision',
  'certainly',
  'newspaper',
  'liability',
  'trademark',
  'trackback',
  'americans',
  'promotion',
  'conversion',
  'reasonable',
  'broadband',
  'influence',
  'importance',
  'webmaster',
  'prescription',
  'specifically',
  'represent',
  'conservation',
  'louisiana',
  'javascript',
  'marketplace',
  'evolution',
  'certificates',
  'objectives',
  'suggested',
  'concerned',
  'structures',
  'encyclopedia',
  'continuing',
  'interracial',
  'competitive',
  'suppliers',
  'preparation',
  'receiving',
  'accordance',
  'discussed',
  'elizabeth',
  'reservations',
  'playstation',
  'instruction',
  'annotation',
  'differences',
  'establish',
  'expressed',
  'paragraph',
  'mathematics',
  'compensation',
  'conducted',
  'percentage',
  'mississippi',
  'requested',
  'connecticut',
  'personals',
  'immediate',
  'agricultural',
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Sorry Your Time has finished</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 1;
    } else if (difficulty === 'medium') {
      time += 5;
    } else {
      time += 10;
    }

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});