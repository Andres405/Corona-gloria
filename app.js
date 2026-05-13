// =====================================================
// FIREBASE CONFIGURATION
// Replace with your Firebase project config
// Reemplaza con tu configuración de Firebase
// =====================================================
const firebaseConfig = {
  apiKey: "AIzaSyAzkA9GNlxDr2qGor2t1GWVDvLBwoZgF60",
  authDomain: "corona-gloria.firebaseapp.com",
  databaseURL: "https://corona-gloria-default-rtdb.firebaseio.com",
  projectId: "corona-gloria",
  storageBucket: "corona-gloria.firebasestorage.app",
  messagingSenderId: "693322053843",
  appId: "1:693322053843:web:61dd7bb53cbe32e3953c26"
};

// =====================================================
// GAME DATA — 52 Biblical Phrases
// =====================================================
const PHRASES = [
  {es:"ENEMISTAD ENTRE EL DRAGON Y LA MUJER", en:"ENMITY BETWEEN THE DRAGON AND THE WOMAN", cat_es:"Promesa del Génesis", cat_en:"Promise of Genesis"},
  {es:"EUTICO CAYO POR UNA VENTANA", en:"EUTYCHUS FELL FROM A WINDOW", cat_es:"Historia N.T.", cat_en:"N.T. History"},
  {es:"JUSTIFICACION POR LA FE", en:"JUSTIFICATION BY FAITH", cat_es:"Tema Central", cat_en:"Central Theme"},
  {es:"AMIGOS DE DANIEL EN EL HORNO DE FUEGO", en:"DANIEL'S FRIENDS IN THE FIERY FURNACE", cat_es:"Historia A.T.", cat_en:"O.T. History"},
  {es:"PARABOLA DE LAS DIEZ VIRGENES", en:"PARABLE OF THE TEN VIRGINS", cat_es:"Enseñanzas de Jesús", cat_en:"Teachings of Jesus"},
  {es:"JUAN PRISIONERO EN LA ISLA DE PATMOS", en:"JOHN PRISONER ON THE ISLE OF PATMOS", cat_es:"Personaje / Momento", cat_en:"Character / Moment"},
  {es:"PABLO FUE MORDIDO POR UNA SERPIENTE", en:"PAUL WAS BITTEN BY A SNAKE", cat_es:"Hechos de Apóstoles", cat_en:"Acts of Apostles"},
  {es:"JESUS NAZARENO REY DE LOS JUDIOS", en:"JESUS OF NAZARETH KING OF THE JEWS", cat_es:"Inscripción", cat_en:"Inscription"},
  {es:"OFRECEME A ISAAC EN SACRIFICIO", en:"OFFER ISAAC AS A SACRIFICE", cat_es:"Mandato a Abraham", cat_en:"God's Command to Abraham"},
  {es:"SIMON DE CIRENE LLEVO LA CRUZ", en:"SIMON OF CYRENE CARRIED THE CROSS", cat_es:"Portador de la Cruz", cat_en:"Cross Bearer"},
  {es:"ELIAS Y EL CARRO DE FUEGO", en:"ELIJAH AND THE CHARIOT OF FIRE", cat_es:"Personaje Bíblico", cat_en:"Biblical Character"},
  {es:"SAUL ARROJO UNA LANZA A DAVID", en:"SAUL THREW A SPEAR AT DAVID", cat_es:"Después de Goliat", cat_en:"After Goliath"},
  {es:"LLOVIO CUARENTA DIAS Y CUARENTA NOCHES", en:"IT RAINED FORTY DAYS AND FORTY NIGHTS", cat_es:"El Diluvio", cat_en:"The Flood"},
  {es:"EL ESTANQUE DE BETESDA SE MOVIA", en:"THE POOL OF BETHESDA WAS STIRRED", cat_es:"Los enfermos sanaban si...", cat_en:"The sick were healed if..."},
  {es:"LEVANTATE TOMA TU LECHO Y ANDA", en:"GET UP TAKE YOUR MAT AND WALK", cat_es:"Palabras de Jesús", cat_en:"Words of Jesus"},
  {es:"ZAQUEO SUBIO AL SICOMORO", en:"ZACCHAEUS CLIMBED THE SYCAMORE", cat_es:"Personaje Bíblico", cat_en:"Biblical Character"},
  {es:"LUCAS ERA MEDICO", en:"LUKE WAS A DOCTOR", cat_es:"Personaje y Profesión", cat_en:"Character and Profession"},
  {es:"EL ESPIRITU DESCENDIO SOBRE ELLOS", en:"THE SPIRIT DESCENDED UPON THEM", cat_es:"Hechos de Apóstoles", cat_en:"Acts of Apostles"},
  {es:"ES SEMEJANTE A UN SEMBRADOR", en:"IT IS LIKE A SOWER", cat_es:"El Reino de los Cielos", cat_en:"Kingdom of Heaven"},
  {es:"MARANATA CRISTO VIENE", en:"MARANATHA CHRIST IS COMING", cat_es:"Saludo Cristiano", cat_en:"Christian Greeting"},
  {es:"AMIGO HAY MAS UNIDO QUE UN HERMANO", en:"A FRIEND IS CLOSER THAN A BROTHER", cat_es:"Vínculos de Amor", cat_en:"Bonds of Love"},
  {es:"TU PALABRA ES LAMPARA A MIS PIES", en:"YOUR WORD IS A LAMP TO MY FEET", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"},
  {es:"JONAS Y EL GRAN PEZ", en:"JONAH AND THE GREAT FISH", cat_es:"Historia Conocida", cat_en:"Well-Known Story"},
  {es:"LA FAMILIA DE LOT HUYO DE SODOMA", en:"LOT'S FAMILY FLED FROM SODOM", cat_es:"Historia A.T.", cat_en:"O.T. History"},
  {es:"ESTATUA DE METALES DE DANIEL", en:"DANIEL'S STATUE OF METALS", cat_es:"Visión de Daniel", cat_en:"Daniel's Vision"},
  {es:"AMA A TU PROJIMO", en:"LOVE YOUR NEIGHBOR", cat_es:"Mandamiento Divino", cat_en:"Divine Commandment"},
  {es:"SANTIFICA EL SABADO", en:"KEEP THE SABBATH HOLY", cat_es:"Mandamiento Divino", cat_en:"Divine Commandment"},
  {es:"EL PADRE DE JESUS ERA CARPINTERO", en:"THE FATHER OF JESUS WAS A CARPENTER", cat_es:"Dato Histórico", cat_en:"Historical Fact"},
  {es:"PILATO SE LAVO LAS MANOS", en:"PILATE WASHED HIS HANDS", cat_es:"Dato Histórico", cat_en:"Historical Fact"},
  {es:"LOS REYES MAGOS DE ORIENTE", en:"THE WISE MEN FROM THE EAST", cat_es:"Personajes Bíblicos", cat_en:"Biblical Characters"},
  {es:"Y JESUS LLORO", en:"AND JESUS WEPT", cat_es:"Versículo Bíblico", cat_en:"Biblical Verse"},
  {es:"JUSTIFICADOS PUES POR LA FE EN JESUCRISTO", en:"JUSTIFIED BY FAITH IN JESUS CHRIST", cat_es:"Versículo Bíblico", cat_en:"Biblical Verse"},
  {es:"JESUS TE AMA", en:"JESUS LOVES YOU", cat_es:"Afirmación", cat_en:"Affirmation"},
  {es:"DIOS ES AMOR", en:"GOD IS LOVE", cat_es:"Afirmación", cat_en:"Affirmation"},
  {es:"LOS CIELOS CUENTAN LA GLORIA DE DIOS Y SU OBRA", en:"THE HEAVENS DECLARE THE GLORY OF GOD", cat_es:"Salmo", cat_en:"Psalm"},
  {es:"YO SOY EL CAMINO LA VERDAD Y LA VIDA", en:"I AM THE WAY THE TRUTH AND THE LIFE", cat_es:"Palabras de Jesús", cat_en:"Words of Jesus"},
  {es:"DIOS ES TU AMPARO Y AUXILIO EN LA TRIBULACION", en:"GOD IS YOUR REFUGE AND STRENGTH IN TROUBLE", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"},
  {es:"CON AMOR ETERNO TE HE AMADO", en:"WITH EVERLASTING LOVE I HAVE LOVED YOU", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"},
  {es:"TODA LA ESCRITURA ES INSPIRADA POR DIOS", en:"ALL SCRIPTURE IS INSPIRED BY GOD", cat_es:"Afirmación", cat_en:"Affirmation"},
  {es:"LAMPARA ES A MIS PIES TU PALABRA", en:"YOUR WORD IS A LAMP TO MY FEET", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"},
  {es:"TODO REINO DIVIDIDO CONTRA SI ES ASOLADO", en:"A KINGDOM DIVIDED AGAINST ITSELF IS RUINED", cat_es:"Palabras de Jesús", cat_en:"Words of Jesus"},
  {es:"LA PALABRA DE DIOS PERMANECE PARA SIEMPRE", en:"THE WORD OF GOD ENDURES FOREVER", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"},
  {es:"PERO SIN FE ES IMPOSIBLE AGRADAR A DIOS", en:"WITHOUT FAITH IT IS IMPOSSIBLE TO PLEASE GOD", cat_es:"Afirmación", cat_en:"Affirmation"},
  {es:"ORAD SIN CESAR", en:"PRAY WITHOUT CEASING", cat_es:"Versículo General", cat_en:"General Verse"},
  {es:"CLAMARE Y EL OIRA MI VOZ", en:"I WILL CRY OUT AND HE WILL HEAR MY VOICE", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"},
  {es:"VELAD Y ORAD PARA QUE NO ENTREIS EN TENTACION", en:"WATCH AND PRAY THAT YOU DO NOT FALL INTO TEMPTATION", cat_es:"Exhortación", cat_en:"Exhortation"},
  {es:"LA ORACION EFICAZ DEL JUSTO PUEDE MUCHO", en:"THE PRAYER OF A RIGHTEOUS PERSON IS POWERFUL", cat_es:"Afirmación", cat_en:"Affirmation"},
  {es:"LLAMAD Y SE OS ABRIRA", en:"KNOCK AND IT SHALL BE OPENED TO YOU", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"},
  {es:"EN LA CASA DE MI PADRE MUCHAS MORADAS HAY", en:"IN MY FATHER'S HOUSE THERE ARE MANY ROOMS", cat_es:"Palabras de Jesús", cat_en:"Words of Jesus"},
  {es:"VIENE EN LAS NUBES Y TODO OJO LE VERA", en:"HE IS COMING WITH THE CLOUDS AND EVERY EYE WILL SEE HIM", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"},
  {es:"VENDRA EN UNA NUBE CON PODER Y GRAN GLORIA", en:"HE WILL COME IN A CLOUD WITH POWER AND GREAT GLORY", cat_es:"Promesa del Cielo", cat_en:"Heavenly Promise"}
];

const WHEEL_VALUES = [100, 200, 300, 500, 200, 100, 300, 200];
const WHEEL_COLORS = ['#e74c3c','#f39c12','#2980b9','#FFD700','#8e44ad','#e74c3c','#27ae60','#f39c12'];
const TEAM_COLORS = ['#e74c3c','#2980b9','#27ae60','#8e44ad'];
const TEAM_BG = ['rgba(192,57,43,0.3)','rgba(26,82,118,0.3)','rgba(30,132,73,0.3)','rgba(108,52,131,0.3)'];
const TEAM_EMOJIS = ['🔴','🔵','🟢','🟣'];
const CROWNS = ['👑','🥈','🥉',''];

// =====================================================
// STATE
// =====================================================
let db, gameRef;
let myRole = null; // 'projector' | 'moderator' | 'player'
let myTeamIdx = -1;
let myLang = 'en';
let currentState = null;
let wheelAngle = 0;
let wheelSpinning = false;
let timerInterval = null;
let usedKeys = {};

// =====================================================
// FIREBASE INIT
// =====================================================
function initFirebase() {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    gameRef = db.ref('corona_gloria_game');
    return true;
  } catch(e) {
    showToast('⚠️ Firebase not configured / Firebase no configurado');
    return false;
  }
}

function listenGame() {
  gameRef.on('value', snap => {
    const data = snap.val();
    if (!data) return;
    currentState = data;
    renderFromState(data);
  });
}

function updateGame(patch) {
  if (!gameRef) return;
  gameRef.update(patch);
}

// =====================================================
// ROLE SELECT
// =====================================================
function selectRole(role) {
  myRole = role;
  if (!initFirebase()) return;

  if (role === 'projector') {
    showScreen('projector');
    listenGame();
    drawWheelIdle();
  } else if (role === 'moderator') {
    showScreen('moderator');
    listenGame();
    // Init game if not exists or reset needed
    gameRef.once('value', snap => {
      if (!snap.val() || !snap.val().status || snap.val().status === 'gameover') {
        initGameState();
      }
    });
  } else if (role === 'player') {
    showScreen('team');
    listenGame();
  }
}

function openProjector() {
  const base = window.location.href.split('?')[0];
  window.open(base + '?role=projector', '_blank',
    'width=1280,height=720,menubar=no,toolbar=no,location=no,status=no');
}

// Auto-detect role from URL
(function() {
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role');
  if (role === 'projector') {
    // Wait for Firebase to load then go projector
    window.addEventListener('load', () => {
      setTimeout(() => selectRole('projector'), 500);
    });
  }
})();

function resetGame() {
  if (confirm('¿Reiniciar el juego? Se borrarán todos los puntos y equipos.\nReset game? All points and teams will be cleared.')) {
    initGameState();
    showToast('¡Juego reiniciado! / Game reset!');
  }
}

// =====================================================
// GAME STATE INIT
// =====================================================
function initGameState() {
  const shuffled = [...PHRASES].sort(() => Math.random() - 0.5);
  gameRef.set({
    status: 'waiting',
    round: 1,
    phraseIdx: 0,
    phrases: shuffled.map(p => ({es:p.es, en:p.en, cat_es:p.cat_es, cat_en:p.cat_en})),
    currentPhrase: shuffled[0],
    revealedLetters: [],
    wrongLetters: [],
    currentTeamTurn: 0,
    spinValue: null,
    wheelSpun: false,
    teams: {
      0: {name:'Team 1', points:0, active:false, lang:'en'},
      1: {name:'Team 2', points:0, active:false, lang:'en'},
      2: {name:'Team 3', points:0, active:false, lang:'en'},
      3: {name:'Team 4', points:0, active:false, lang:'en'},
    },
    statusMsg: '',
    statusType: '',
    timerStart: null,
    timerDuration: 0,
  });
}

// =====================================================
// SCREENS
// =====================================================
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
}

// =====================================================
// PLAYER FLOW
// =====================================================
let selectedTeamIdx = -1;

function setLang(lang, btn) {
  myLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateTeamLabels();
}

function updateTeamLabels() {
  const labels = myLang === 'es'
    ? ['Equipo 1','Equipo 2','Equipo 3','Equipo 4']
    : ['Team 1','Team 2','Team 3','Team 4'];
  labels.forEach((l,i) => {
    const el = document.getElementById('tname-' + i);
    if (el) el.textContent = l;
  });
  document.getElementById('team-select-title').textContent = myLang === 'es' ? 'Elige tu Equipo' : 'Choose Your Team';
  document.getElementById('team-select-sub').textContent = myLang === 'es' ? 'Selecciona tu equipo e ingresa tu nombre' : 'Select your team and enter your name';
  document.getElementById('player-name-input').placeholder = myLang === 'es' ? 'Nombre del equipo' : 'Team name';
  document.getElementById('join-btn').textContent = myLang === 'es' ? 'Unirse al Juego →' : 'Join Game →';
}

function selectTeam(idx) {
  if (!currentState) return;
  const teams = currentState.teams || {};
  if (teams[idx] && teams[idx].active) { showToast(myLang === 'es' ? 'Ese equipo ya está tomado' : 'That team is already taken'); return; }
  selectedTeamIdx = idx;
  document.querySelectorAll('.team-btn').forEach((b,i) => {
    b.style.outline = i === idx ? '4px solid var(--gold)' : 'none';
  });
  document.getElementById('join-btn').disabled = false;
}

function joinGame() {
  const name = document.getElementById('player-name-input').value.trim();
  if (!name) { showToast(myLang === 'es' ? 'Ingresa el nombre de tu equipo' : 'Enter your team name'); return; }
  if (selectedTeamIdx < 0) { showToast(myLang === 'es' ? 'Elige un equipo' : 'Choose a team'); return; }
  myTeamIdx = selectedTeamIdx;

  updateGame({
    [`teams/${myTeamIdx}/name`]: name,
    [`teams/${myTeamIdx}/active`]: true,
    [`teams/${myTeamIdx}/lang`]: myLang,
    [`teams/${myTeamIdx}/points`]: 0,
  });

  showScreen('waiting');
  renderWaiting();
}

// =====================================================
// RENDER FROM STATE
// =====================================================
function renderFromState(state) {
  if (!state) return;

  // Update waiting screen
  if (myRole === 'player') renderWaiting(state);

  // Projector
  if (myRole === 'projector') renderProjector(state);

  // Moderator
  if (myRole === 'moderator') renderModerator(state);

  // Player
  if (myRole === 'player' && state.status === 'playing') {
    showScreen('player');
    renderPlayer(state);
  }

  // Game over
  if (state.status === 'gameover') {
    setTimeout(() => {
      showScreen('gameover');
      renderGameOver(state);
    }, 1000);
  }
}

// =====================================================
// PROJECTOR RENDER
// =====================================================
function renderProjector(state) {
  if (!state) return;
  const teams = state.teams || {};
  const lang = 'en'; // projector shows both

  // Teams bar
  const bar = document.getElementById('teams-bar');
  bar.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const t = teams[i] || {name:'–',points:0,active:false};
    if (!t.active) continue;
    const card = document.createElement('div');
    card.className = `team-score-card tsc-t${i+1}${state.currentTeamTurn === i ? ' active-turn' : ''}`;
    card.id = `tsc-${i}`;

    // Crown for leader
    const pts = Object.values(teams).map(t=>t.points||0);
    const maxPts = Math.max(...pts);
    const showCrown = t.points > 0 && t.points === maxPts;

    card.innerHTML = `
      <div class="tsc-crown ${showCrown ? 'visible' : ''}">👑</div>
      <div class="tsc-name">${TEAM_EMOJIS[i]} ${t.name}</div>
      <div class="tsc-points">${t.points||0}</div>
      <div class="tsc-pts-label">pts</div>
    `;
    bar.appendChild(card);
  }

  // Round
  document.getElementById('proj-round').textContent = `Round ${state.round || 1} · Q${(state.phraseIdx||0)+1}/${(state.phrases||[]).length}`;

  // Phrase
  const phrase = state.currentPhrase;
  if (phrase) {
    const text = phrase.es; // always use Spanish text
    const catEs = phrase.cat_es || '';
    const catEn = phrase.cat_en || '';
    document.getElementById('proj-category').textContent = `${catEs} · ${catEn}`;
    renderPhraseBoard('proj-phrase-words', text, state.revealedLetters || [], 'proj');
  }

  // Turn label
  const ct = teams[state.currentTeamTurn];
  const ctName = ct ? ct.name : '–';
  document.getElementById('proj-turn-label').innerHTML =
    state.status === 'waiting' ? 'Waiting to start... / Esperando...' :
    state.status === 'playing' ? `<span>${TEAM_EMOJIS[state.currentTeamTurn]} ${ctName}</span>'s turn` :
    state.status === 'spinning' ? `🎡 ${TEAM_EMOJIS[state.currentTeamTurn]} ${ctName} spinning...` : '';

  // Points badge
  document.getElementById('proj-points-badge').textContent = state.spinValue ? `+${state.spinValue}` : '?';

  // Status message
  const sm = document.getElementById('proj-status');
  sm.textContent = state.statusMsg || '';
  sm.className = 'status-msg ' + (state.statusType || '');

  // Timer
  if (state.timerStart && state.timerDuration) {
    const elapsed = (Date.now() - state.timerStart) / 1000;
    const left = Math.max(0, state.timerDuration - elapsed);
    const tc = document.getElementById('proj-timer');
    tc.textContent = Math.ceil(left);
    tc.className = 'timer-circle' + (left <= 5 ? ' urgent' : '');
  } else {
    document.getElementById('proj-timer').textContent = '–';
    document.getElementById('proj-timer').className = 'timer-circle';
  }

  // Wheel spin trigger
  if (state.wheelSpun && state.spinValue && !wheelSpinning) {
    spinWheelTo(state.spinValue);
  }
}

// =====================================================
// PHRASE BOARD RENDER
// =====================================================
function renderPhraseBoard(containerId, text, revealed, prefix) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const words = text.split(' ');
  words.forEach(word => {
    const wg = document.createElement('div');
    wg.className = prefix === 'proj' ? 'word-group' : 'ppm-word';
    word.split('').forEach(ch => {
      const lb = document.createElement('div');
      lb.className = prefix === 'proj' ? 'letter-box' : 'ppm-letter';
      const norm = ch.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase();
      if (revealed.includes(norm) || revealed.includes(ch.toUpperCase())) {
        lb.textContent = ch.toUpperCase();
        lb.classList.add('revealed');
      }
      wg.appendChild(lb);
    });
    container.appendChild(wg);
  });
}

// =====================================================
// MODERATOR RENDER
// =====================================================
function renderModerator(state) {
  if (!state) return;
  const teams = state.teams || {};

  // Teams
  const td = document.getElementById('mod-teams-display');
  td.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const t = teams[i] || {name:`Team ${i+1}`, points:0, active:false};
    const card = document.createElement('div');
    card.className = `mod-team-card mtc-t${i+1}${state.currentTeamTurn === i ? ' active-t' : ''}`;
    card.innerHTML = `
      <div class="mtc-left">
        <div class="mtc-dot" style="background:${TEAM_COLORS[i]}"></div>
        <div class="mtc-name">${t.active ? (TEAM_EMOJIS[i]+' '+t.name) : '–'}</div>
      </div>
      <div class="mtc-pts">${t.points||0}</div>
    `;
    td.appendChild(card);
  }

  // Phrase
  const p = state.currentPhrase;
  if (p) {
    document.getElementById('mod-phrase-text').textContent = p.es;
    document.getElementById('mod-category-text').textContent = p.cat_es + ' · ' + p.cat_en;
  }

  // Turn info
  const ct = teams[state.currentTeamTurn];
  document.getElementById('mod-turn-info').innerHTML =
    `Turn: <strong>${ct ? ct.name : '–'}</strong> · Points value: <span class="mod-points">${state.spinValue ? '+'+state.spinValue : '?'}</span>`;

  // Timer
  if (state.timerStart && state.timerDuration) {
    const elapsed = (Date.now() - state.timerStart) / 1000;
    const left = Math.max(0, Math.ceil(state.timerDuration - elapsed));
    document.getElementById('mod-timer-display').textContent = `⏱ ${left}s`;
  } else {
    document.getElementById('mod-timer-display').textContent = '⏱ –';
  }

  // Button states
  const spinning = state.status === 'spinning' || state.status === 'waiting';
  const canAnswer = state.status === 'playing' && state.wheelSpun;
  document.getElementById('btn-spin').disabled = state.status !== 'waiting' && state.status !== 'nextup';
  document.getElementById('btn-correct').disabled = !canAnswer;
  document.getElementById('btn-wrong').disabled = !canAnswer;
  document.getElementById('btn-next-phrase').disabled = state.status !== 'rounddone';

  document.getElementById('mod-game-code').textContent =
    `Game Room: corona_gloria_game · Firebase`;
}

// =====================================================
// PLAYER RENDER
// =====================================================
function renderPlayer(state) {
  if (!state || myTeamIdx < 0) return;
  const teams = state.teams || {};
  const myTeam = teams[myTeamIdx] || {};
  const lang = myLang;

  // Header
  document.getElementById('ph-dot').style.background = TEAM_COLORS[myTeamIdx];
  document.getElementById('ph-name').textContent = myTeam.name || '–';
  document.getElementById('ph-pts').textContent = (myTeam.points||0) + ' pts';

  // Phrase mini
  const p = state.currentPhrase;
  if (p) {
    document.getElementById('ppm-cat').textContent = lang === 'es' ? p.cat_es : p.cat_en;
    renderPhraseBoard('ppm-phrase', p.es, state.revealedLetters || [], 'player');
  }

  // My turn?
  const isMyTurn = state.currentTeamTurn === myTeamIdx && state.status === 'playing' && state.wheelSpun;
  document.getElementById('my-turn-banner').style.display = isMyTurn ? 'block' : 'none';
  document.getElementById('waiting-turn-banner').style.display = isMyTurn ? 'none' : 'block';

  document.getElementById('mtb-title').textContent = lang === 'es' ? '🎯 ¡Tu turno!' : '🎯 Your Turn!';
  document.getElementById('mtb-sub').textContent = lang === 'es' ? 'Elige una letra' : 'Choose a letter';
  document.getElementById('wb-title').textContent = lang === 'es' ? '⏳ Esperando tu turno...' : '⏳ Waiting for your turn...';
  document.getElementById('wb-sub').textContent = lang === 'es' ? 'Mira la pantalla del proyector' : 'Watch the projector screen';

  // Build keyboard if not built
  if (!document.getElementById('kb-row-1').children.length) {
    buildKeyboard();
  }

  // BUG 3 FIX: limpiar y repintar teclado desde estado Firebase (no desde variable local)
  const revealed = state.revealedLetters || [];
  document.querySelectorAll('.kb-key').forEach(btn => {
    const letter = btn.dataset.letter;
    // Resetear primero
    btn.className = 'kb-key';
    btn.disabled = true;

    // Marcar usadas como correctas si están en revealedLetters
    if (revealed.includes(letter)) {
      btn.className = 'kb-key used-correct';
      return;
    }
    // Marcar usadas como incorrectas si están en wrongLetters
    const wrong = state.wrongLetters || [];
    if (wrong.includes(letter)) {
      btn.className = 'kb-key used-wrong';
      return;
    }
    // Habilitar solo si es mi turno
    if (isMyTurn) {
      btn.disabled = false;
    }
  });

  // Botón resolver frase: visible solo cuando es mi turno y hay al menos una letra revelada
  const solveBtn = document.getElementById('solve-btn');
  if (solveBtn) {
    solveBtn.disabled = !isMyTurn;
    solveBtn.style.display = 'block';
  }
  // Ocultar panel de resolver si no es mi turno
  if (!isMyTurn) {
    cancelSolve();
  }
}

function buildKeyboard() {
  const rows = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L','Ñ'],
    ['Z','X','C','V','B','N','M']
  ];
  rows.forEach((row, ri) => {
    const rowEl = document.getElementById(`kb-row-${ri+1}`);
    rowEl.innerHTML = '';
    row.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'kb-key';
      btn.textContent = letter;
      btn.dataset.letter = letter;
      btn.onclick = () => playerGuessLetter(letter, btn);
      rowEl.appendChild(btn);
    });
  });
}

function playerGuessLetter(letter, btn) {
  if (!currentState) return;
  if (currentState.currentTeamTurn !== myTeamIdx) return;
  if (currentState.status !== 'playing' || !currentState.wheelSpun) return;

  const phrase = currentState.currentPhrase.es.toUpperCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const normLetter = letter.normalize('NFD').replace(/[\u0300-\u036f]/g,'');

  btn.disabled = true;

  if (phrase.includes(normLetter)) {
    // ✅ Letra correcta
    const newRevealed = [...(currentState.revealedLetters || []), normLetter];
    const pts = (currentState.teams[myTeamIdx].points||0) + (currentState.spinValue||100);

    // Verificar si la frase está completamente revelada
    const phraseLetters = [...new Set(phrase.replace(/ /g,'').split(''))];
    const allRevealed = phraseLetters.every(l => newRevealed.includes(l));

    if (allRevealed) {
      // Frase completamente revelada — ronda terminada
      updateGame({
        revealedLetters: newRevealed,
        [`teams/${myTeamIdx}/points`]: pts,
        statusMsg: `🎉 ¡Frase completa! ${currentState.teams[myTeamIdx].name} +${currentState.spinValue} pts`,
        statusType: 'correct',
        status: 'rounddone',
        wheelSpun: false,
        spinValue: null,
        timerStart: null,
      });
      btn.className = 'kb-key used-correct';
      confetti();
    } else {
      // ✅ Letra correcta pero frase incompleta → debe girar de nuevo
      updateGame({
        revealedLetters: newRevealed,
        [`teams/${myTeamIdx}/points`]: pts,
        statusMsg: `✅ ¡${letter} encontrada! +${currentState.spinValue} pts — Gira de nuevo / Spin again`,
        statusType: 'correct',
        wheelSpun: false,   // <-- obliga a girar antes de elegir otra letra
        spinValue: null,
        status: 'nextup',   // el moderador deberá presionar Spin para que siga el mismo equipo
        timerStart: null,
      });
      btn.className = 'kb-key used-correct';
      // Nota: status 'nextup' con el MISMO equipo en currentTeamTurn = equipo sigue su turno
    }
  } else {
    // ❌ Letra no encontrada — pasa turno al siguiente
    btn.className = 'kb-key used-wrong';
    const nextTeam = getNextActiveTeam(currentState);
    const newWrong = [...(currentState.wrongLetters || []), normLetter];
    updateGame({
      wrongLetters: newWrong,
      statusMsg: `❌ ${letter} no está. Turno para ${currentState.teams[nextTeam]?.name || '–'} / Not there. Turn passes to ${currentState.teams[nextTeam]?.name || '–'}`,
      statusType: 'wrong',
      currentTeamTurn: nextTeam,
      wheelSpun: false,
      spinValue: null,
      status: 'nextup',
      timerStart: null,
    });
  }
}

// =====================================================
// BUG 2: RESOLVER FRASE COMPLETA
// =====================================================
function playerSolvePhrase() {
  if (!currentState) return;
  if (currentState.currentTeamTurn !== myTeamIdx) return;
  const panel = document.getElementById('solve-panel');
  const btn = document.getElementById('solve-btn');
  panel.style.display = 'block';
  btn.style.display = 'none';
  document.getElementById('solve-input').value = '';
  document.getElementById('solve-input').focus();
}

function cancelSolve() {
  document.getElementById('solve-panel').style.display = 'none';
  document.getElementById('solve-btn').style.display = '';
}

function playerSubmitSolve() {
  if (!currentState) return;
  const input = document.getElementById('solve-input').value.trim().toUpperCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const correct = currentState.currentPhrase.es.toUpperCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'');

  cancelSolve();

  if (input === correct) {
    // 🎉 Respuesta correcta
    const bonus = currentState.spinValue || 200;
    const pts = (currentState.teams[myTeamIdx].points||0) + bonus;
    // Revelar todas las letras
    const allLetters = [...new Set(correct.replace(/ /g,'').split(''))];
    updateGame({
      revealedLetters: allLetters,
      [`teams/${myTeamIdx}/points`]: pts,
      statusMsg: `🏆 ¡${currentState.teams[myTeamIdx].name} resolvió la frase! +${bonus} pts`,
      statusType: 'correct',
      status: 'rounddone',
      wheelSpun: false,
      spinValue: null,
      timerStart: null,
    });
    confetti();
  } else {
    // ❌ Respuesta incorrecta — pierde turno
    const nextTeam = getNextActiveTeam(currentState);
    updateGame({
      statusMsg: `❌ Respuesta incorrecta. Turno para ${currentState.teams[nextTeam]?.name || '–'}`,
      statusType: 'wrong',
      currentTeamTurn: nextTeam,
      wheelSpun: false,
      spinValue: null,
      status: 'nextup',
      timerStart: null,
    });
    showToast('❌ Respuesta incorrecta / Wrong answer');
  }
}

function getNextActiveTeam(state) {
  const teams = state.teams || {};
  let next = (state.currentTeamTurn + 1) % 4;
  let tries = 0;
  while (tries < 4) {
    if (teams[next] && teams[next].active) return next;
    next = (next + 1) % 4;
    tries++;
  }
  return state.currentTeamTurn;
}

// =====================================================
// MODERATOR ACTIONS
// =====================================================
function modSpin() {
  if (!currentState) return;
  const val = WHEEL_VALUES[Math.floor(Math.random() * WHEEL_VALUES.length)];
  const teamName = currentState?.teams?.[currentState.currentTeamTurn]?.name || '–';
  updateGame({
    spinValue: val,
    wheelSpun: false,
    status: 'spinning',
    statusMsg: '',
  });
  setTimeout(() => {
    updateGame({
      wheelSpun: true,
      status: 'playing',
      statusMsg: `${teamName} — Elige una letra / Pick a letter`,
      statusType: '',
      timerStart: Date.now(),
      timerDuration: 20,
    });
  }, 3500);
}

function modCorrect() {
  if (!currentState) return;
  const pts = (currentState.teams[currentState.currentTeamTurn].points||0) + (currentState.spinValue||100);
  updateGame({
    [`teams/${currentState.currentTeamTurn}/points`]: pts,
    statusMsg: `✅ +${currentState.spinValue} pts — ${currentState.teams[currentState.currentTeamTurn].name}`,
    statusType: 'correct',
    status: 'rounddone',
    timerStart: null,
  });
  confetti();
}

function modWrong() {
  if (!currentState) return;
  const next = getNextActiveTeam(currentState);
  updateGame({
    statusMsg: `❌ Turn passes to ${currentState.teams[next]?.name || '–'}`,
    statusType: 'wrong',
    currentTeamTurn: next,
    wheelSpun: false,
    spinValue: null,
    status: 'nextup',
    timerStart: null,
  });
}

function modNextPhrase() {
  if (!currentState) return;
  const phrases = currentState.phrases || [];
  const nextIdx = (currentState.phraseIdx||0) + 1;
  if (nextIdx >= phrases.length) {
    modEndGame(); return;
  }
  // Next team turn
  const next = getNextActiveTeam(currentState);
  updateGame({
    phraseIdx: nextIdx,
    currentPhrase: phrases[nextIdx],
    revealedLetters: [],
    wrongLetters: [],
    currentTeamTurn: next,
    spinValue: null,
    wheelSpun: false,
    status: 'nextup',
    statusMsg: '',
    statusType: '',
    timerStart: null,
    round: Math.floor(nextIdx / 4) + 1,
  });
}

function modEndGame() {
  updateGame({ status: 'gameover', timerStart: null });
}

// =====================================================
// WAITING ROOM RENDER
// =====================================================
function renderWaiting(state) {
  if (!state) return;
  const teams = state.teams || {};
  const list = document.getElementById('teams-joined-list');
  if (!list) return;
  list.innerHTML = '';

  for (let i = 0; i < 4; i++) {
    const t = teams[i];
    const row = document.createElement('div');
    row.className = `team-joined-row${t && t.active && i === myTeamIdx ? ' active' : ''}`;
    row.innerHTML = `
      <div class="tj-dot" style="background:${TEAM_COLORS[i]}"></div>
      <div class="tj-name">${TEAM_EMOJIS[i]} ${t && t.active ? t.name : (myLang === 'es' ? 'Esperando...' : 'Waiting...')}</div>
      <div class="tj-status">${t && t.active ? '✅' : '⏳'}</div>
    `;
    list.appendChild(row);
  }

  if (state.status === 'playing' || state.status === 'nextup') {
    showScreen('player');
    renderPlayer(state);
  }
}

// =====================================================
// GAME OVER
// =====================================================
function renderGameOver(state) {
  const teams = state.teams || {};
  const sorted = Object.entries(teams)
    .filter(([,t]) => t.active)
    .sort(([,a],[,b]) => (b.points||0) - (a.points||0));

  const podium = document.getElementById('podium');
  podium.innerHTML = '';

  // Arrange: 2nd, 1st, 3rd
  const order = sorted.length >= 3
    ? [sorted[1], sorted[0], sorted[2]]
    : sorted.length === 2
    ? [sorted[1], sorted[0]]
    : [sorted[0]];

  const placeClass = sorted.length >= 3 ? ['p2','p1','p3'] : ['p2','p1'];

  order.forEach((entry, oi) => {
    if (!entry) return;
    const [idx, t] = entry;
    const place = sorted.findIndex(([i]) => i === idx) + 1;
    const div = document.createElement('div');
    div.className = `podium-place ${placeClass[oi] || 'p3'}`;
    div.style.background = `linear-gradient(135deg, ${TEAM_COLORS[idx]}88, ${TEAM_COLORS[idx]}44)`;
    div.innerHTML = `
      <div class="pod-crown">${CROWNS[place-1] || ''}</div>
      <div class="pod-name">${TEAM_EMOJIS[idx]} ${t.name}</div>
      <div class="pod-pts">${t.points||0} pts</div>
      <div class="pod-rank">#${place}</div>
    `;
    podium.appendChild(div);
  });

  confetti();
  confetti();
}

// =====================================================
// WHEEL CANVAS
// =====================================================
function drawWheelIdle() {
  drawWheel(0);
}

function drawWheel(angle) {
  const canvas = document.getElementById('wheel-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 90, cy = 90, r = 82;
  const n = WHEEL_VALUES.length;
  ctx.clearRect(0, 0, 180, 180);

  // Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(255,215,0,0.3)';
  ctx.shadowBlur = 20;

  for (let i = 0; i < n; i++) {
    const start = angle + (i / n) * Math.PI * 2 - Math.PI/2;
    const end = angle + ((i+1) / n) * Math.PI * 2 - Math.PI/2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = WHEEL_COLORS[i];
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Label
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle + ((i + 0.5) / n) * Math.PI * 2 - Math.PI/2);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 13px Nunito';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(WHEEL_VALUES[i], r * 0.62, 0);
    ctx.restore();
  }

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 18, 0, Math.PI*2);
  ctx.fillStyle = 'var(--navy, #0d1f3c)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,215,0,0.8)';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = 'var(--gold, #FFD700)';
  ctx.font = 'bold 14px Nunito';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('★', cx, cy);

  ctx.restore();
  wheelAngle = angle;
}

function spinWheelTo(targetValue) {
  if (wheelSpinning) return;
  wheelSpinning = true;
  // Find segment for target value
  const n = WHEEL_VALUES.length;
  const targetIdx = WHEEL_VALUES.indexOf(targetValue);
  const targetAngle = (2 * Math.PI * targetIdx / n);
  const totalRotations = Math.PI * 2 * (5 + Math.random() * 3);
  const finalAngle = totalRotations + targetAngle;

  let start = null;
  const duration = 3000;
  const startAngle = wheelAngle;

  function frame(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const current = startAngle + finalAngle * ease;
    drawWheel(current);
    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      wheelSpinning = false;
      drawWheel(current);
    }
  }
  requestAnimationFrame(frame);
}

// =====================================================
// CONFETTI
// =====================================================
function confetti() {
  const colors = ['#FFD700','#FF6B35','#4CAF50','#2196F3','#E91E63','#9C27B0'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.cssText = `
        left: ${Math.random()*100}vw;
        width: ${6+Math.random()*8}px;
        height: ${6+Math.random()*8}px;
        background: ${colors[Math.floor(Math.random()*colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        animation-duration: ${1.5+Math.random()*2}s;
        animation-delay: 0s;
      `;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 3500);
    }, i * 30);
  }
}

// =====================================================
// TOAST
// =====================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// =====================================================
// TIMER LOOP (client side display)
// =====================================================
setInterval(() => {
  if (!currentState || !currentState.timerStart) return;
  const elapsed = (Date.now() - currentState.timerStart) / 1000;
  const left = Math.max(0, currentState.timerDuration - elapsed);

  if (myRole === 'projector') {
    const tc = document.getElementById('proj-timer');
    if (tc) {
      tc.textContent = Math.ceil(left);
      tc.className = 'timer-circle' + (left <= 5 ? ' urgent' : '');
    }
  }
  if (myRole === 'moderator') {
    const md = document.getElementById('mod-timer-display');
    if (md) md.textContent = `⏱ ${Math.ceil(left)}s`;
  }

  // Auto timeout
  if (left <= 0 && currentState.status === 'playing' && myRole === 'moderator') {
    const next = getNextActiveTeam(currentState);
    updateGame({
      statusMsg: `⏰ Time out! Turn passes to ${currentState.teams[next]?.name || '–'}`,
      statusType: 'timeout',
      currentTeamTurn: next,
      wheelSpun: false,
      spinValue: null,
      status: 'nextup',
      timerStart: null,
    });
  }
}, 500);

// Auto draw wheel on projector
setTimeout(() => {
  if (myRole === 'projector') drawWheelIdle();
}, 200);
