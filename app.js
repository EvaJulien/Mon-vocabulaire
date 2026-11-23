/* Mon vocabulaire — toutes les données restent sur l'appareil (localStorage). */
{
const APP_VERSION = '3.5.2';
const DAY = 86400000;
const INTER = [0, 1, 3, 7, 16, 35, 90];
const PTS = [0, 1, 2, 4, 8, 16, 40];
const BOXL = ['Nouv.', '1 j', '3 j', '1 sem', '2 sem', '1 mois', '3 mois'];
const TOP = INTER.length - 1;
// link of the support page (Ko-fi, Buy Me a Coffee, PayPal…); empty = no support button
const SUPPORT_URL = '';
const PRESETS = {
  foret: { name: 'Forêt', main: '#14613f', accent: '#c8f169' },
  cobalt: { name: 'Cobalt', main: '#1f3fd1', accent: '#ffd84a' },
  seoul: { name: 'Séoul', main: '#c60c30', accent: '#ffe9a8' },
  corail: { name: 'Corail', main: '#e0533b', accent: '#fff1a8' },
  prune: { name: 'Prune', main: '#5e1d52', accent: '#ffb3d1' },
  nuit: { name: 'Nuit', main: '#10141f', accent: '#7cc4ff', btn: '#2f6bff' }
};
const LANG_PRESETS = [['Anglais', 'en'], ['Coréen', 'ko'], ['Espagnol', 'es'], ['Italien', 'it'], ['Allemand', 'de'], ['Portugais', 'pt'], ['Japonais', 'ja'], ['Chinois', 'zh']];
const STARTER = `to work = travailler
to live = habiter / vivre
to speak = parler
to like = aimer
to drive = conduire
to go = aller
to study = étudier
every day = tous les jours
girlfriend = petite amie / copine
relationship = relation / couple
truck = camion
to build = construire
construction = bâtiment / construction
to be hungry = avoir faim
to be cold = avoir froid
today = aujourd'hui
Saturday = samedi`;
const THEMES = [
  ['Politesse et expressions',
   "bonjour salut merci s'il vous plait s'il te plait pardon excusez moi excuse moi au revoir bienvenue oui non d'accord bonsoir bonne nuit de rien felicitations bravo enchante desole bonne journee a bientot a plus tard ca va comment ca va peut etre bien sur",
   "hello hi thanks thank you please sorry excuse me goodbye bye welcome yes no okay ok good morning good evening good night you're welcome congratulations nice to meet you how are you maybe of course"],
  ['Chiffres et nombres',
   "zero un deux trois quatre cinq six sept huit neuf dix onze douze treize quatorze quinze seize vingt trente quarante cinquante soixante cent cents mille million milliard premier premiere deuxieme troisieme quatrieme cinquieme dernier moitie quart double nombre numero chiffre douzaine",
   "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand million billion first second third fourth fifth last half quarter number dozen"],
  ['Temps et calendrier',
   "lundi mardi mercredi jeudi vendredi samedi dimanche janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre aujourd'hui demain hier semaine mois annee an ans jour jours matin apres midi soir soiree nuit midi minuit heure heures minute seconde week end saison printemps ete automne hiver tous les jours toujours jamais souvent parfois maintenant tard tot bientot date anniversaire calendrier horaire",
   "monday tuesday wednesday thursday friday saturday sunday january february march april may june july august september october november december today tomorrow yesterday week month year day morning afternoon evening night noon midnight hour minute second weekend season spring summer autumn fall winter always never often sometimes now late early soon date birthday o'clock"],
  ['Famille et relations',
   "mere pere maman papa frere soeur fils fille enfant enfants bebe mari femme epouse copine copain petite amie petit ami ami amie amis parents grand mere grand pere oncle tante cousin cousine neveu niece famille relation couple mariage marie voisin voisine homme garcon gens personne",
   "mother father mom mum dad brother sister son daughter child children baby husband wife girlfriend boyfriend friend friends parents grandmother grandfather uncle aunt cousin nephew niece family relationship couple wedding married neighbour neighbor man woman boy girl people person"],
  ['Travail et chantier',
   "travail boulot travailler batiment construction chantier ouvrier electricien plombier macon patron chef collegue client outil outils marteau perceuse tournevis cable fil mur toit beton ciment brique echelle casque bureau reunion salaire entreprise societe metier apprenti apprentissage plan electricite prise interrupteur tableau electrique gaine securite contrat stage formation bts vis clou scie metre niveau peinture",
   "work job worker building construction site electrician plumber mason boss manager colleague coworker customer client tool tools hammer drill screwdriver cable wire wall roof concrete cement brick ladder helmet office meeting salary company business apprentice plan electricity socket outlet switch safety contract training screw nail saw tape paint"],
  ['Maison',
   "maison appartement chambre cuisine salle de bain salon toilettes porte fenetre lit table chaise canape cle loyer jardin garage escalier etage lumiere meuble placard frigo douche lampe sol plafond",
   "house home flat apartment bedroom kitchen bathroom living room toilet door window bed table chair sofa couch key rent garden yard garage stairs floor light furniture cupboard fridge shower lamp ceiling"],
  ['Nourriture et boissons',
   "eau pain viande poisson poulet boeuf porc riz fruit fruits legume legumes pomme banane orange cafe the biere vin lait oeuf oeufs fromage repas petit dejeuner dejeuner diner restaurant faim soif sucre sel poivre soupe gateau nouilles kimchi boisson nourriture manger boire",
   "water bread meat fish chicken beef pork rice fruit vegetable vegetables apple banana orange coffee tea beer wine milk egg eggs cheese meal breakfast lunch dinner restaurant hungry thirsty sugar salt pepper soup cake noodles drink food eat"],
  ['Transports et voyage',
   "voiture camion bus train avion metro velo moto gare aeroport billet route rue autoroute passeport visa valise hotel voyage voyager taxi vol arret station trajet essence parking conduire",
   "car truck lorry bus train plane airplane subway underground metro bike bicycle motorbike station airport ticket road street highway motorway passport visa suitcase luggage hotel trip travel journey taxi flight stop fuel petrol gas parking drive"],
  ['Corps et santé',
   "tete main mains pied pieds bras jambe jambes oeil yeux bouche dent dents dos coeur ventre nez oreille oreilles cheveux malade maladie medecin docteur hopital douleur pharmacie medicament sante fievre rhume blessure",
   "head hand hands foot feet arm leg legs eye eyes mouth tooth teeth back heart stomach belly nose ear ears hair sick ill illness doctor hospital pain pharmacy medicine health fever cold injury"],
  ['Couleurs',
   "rouge bleu bleue vert verte jaune noir noire blanc blanche gris grise rose violet marron couleur",
   "red blue green yellow black white grey gray pink purple brown colour color"],
  ['Argent et achats',
   "argent banque prix euro euros won compte carte bancaire magasin marche supermarche cher chere bon marche monnaie facture ticket caisse acheter payer vendre",
   "money bank price euro euros won account card shop store market supermarket expensive cheap change bill receipt cashier buy pay sell"],
  ['Pays et langues',
   "france coree anglais anglaise francais francaise coreen coreenne pays ville langue nationalite seoul marseille angleterre amerique etats unis europe asie japon chine",
   "france korea english french korean country city town language nationality seoul marseille england america usa europe asia japan china"]
];
const ADJ = "grand grande petit petite bon bonne mauvais mauvaise beau belle joli jolie nouveau nouvelle vieux vieille jeune facile difficile heureux heureuse triste fatigue fatiguee content contente chaud chaude froid froide rapide lent lente fort forte faible gentil gentille mechant drole calme occupe libre long longue court courte haut haute bas basse proche loin";
const ADJ_EN = "big large small little good bad beautiful pretty nice new old young easy difficult hard happy sad tired glad hot warm cold fast quick slow strong weak kind funny calm busy free long short high low near far";
const deaccent = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
const joinDigits = s => String(s).replace(/(\d)[\s.,\u00a0\u202f'’](?=\d{3}(?!\d))/g, '$1').replace(/(\d)[\s.,\u00a0\u202f'’](?=\d{3}(?!\d))/g, '$1');
const frKey = s => deaccent(joinDigits(s).toLowerCase()).replace(/[’‘`´]/g, "'").replace(/œ/g, 'oe').replace(/æ/g, 'ae').replace(/[^a-z0-9' -]/g, ' ').replace(/\s+/g, ' ').trim();
// tokens: lower, no accents, hyphens/apostrophes as spaces, leading article removed when something follows
const tok = (s, en) => {
  let t = ' ' + frKey(s).replace(/[-']/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  t = en ? t.replace(/^ (to|a|an|the) (?=\S)/, ' ') : t.replace(/^ (le|la|les|l|un|une|des|du|de la|d) (?=\S)/, ' ');
  return t;
};
function splitKeys(list) {
  // multi-word keys are the known phrases; everything else is one word
  const phrases = ["s'il vous plait", "s'il te plait", 'excusez moi', 'excuse moi', 'au revoir', "d'accord", 'bonne nuit', 'de rien', 'bonne journee', 'a bientot', 'a plus tard', 'ca va', 'comment ca va', 'peut etre', 'bien sur', 'thank you', 'excuse me', 'good morning', 'good evening', 'good night', "you're welcome", 'nice to meet you', 'how are you', 'of course', 'apres midi', 'week end', 'tous les jours', 'petite amie', 'petit ami', 'grand mere', 'grand pere', 'tableau electrique', 'salle de bain', 'living room', 'petit dejeuner', 'carte bancaire', 'bon marche', 'etats unis'];
  let rest = ' ' + list + ' ';
  const keys = [];
  phrases.forEach(p => { if (rest.includes(' ' + p + ' ')) { keys.push(p); rest = rest.replace(' ' + p + ' ', ' '); } });
  return keys.concat(rest.split(' ').filter(Boolean)).map(k => k.replace(/'/g, ' '));
}
const THEME_SETS = THEMES.map(([name, fr, en]) => [name, splitKeys(fr), splitKeys(en)]);
const ADJ_SET = splitKeys(ADJ), ADJ_EN_SET = splitKeys(ADJ_EN);
function guessTheme(w, langCode) {
  const learned = cfg.learn || {};
  for (const f of w.fr) { const k = frKey(f); if (learned[k]) return learned[k]; }
  const frs = w.fr.map(f => tok(f, false));
  const ens = langCode === 'en' ? w.en.map(t => tok(t, true)) : [];
  const hit = (arr, k) => arr.some(t => t.includes(' ' + k + ' '));
  if ([...w.fr, ...w.en].some(x => /\d/.test(x))) return 'Chiffres et nombres';
  if (langCode === 'en' && w.en.some(t => /^to\s/i.test(t.trim()))) return 'Verbes';
  let best = null, bestN = 0;
  for (const [name, fk, ek] of THEME_SETS) {
    const n = fk.filter(k => hit(frs, k)).length + ek.filter(k => hit(ens, k)).length;
    if (n > bestN) { best = name; bestN = n; }
  }
  if (best) return best;
  const plain = w.fr.map(frKey);
  if (plain.some(f => /^(avoir|etre|faire|aller|se|s') /.test(f) || (!f.includes(' ') && /(er|ir|oir|re)$/.test(f) && f.length > 3))) return 'Verbes';
  if (ADJ_SET.some(k => hit(frs, k)) || ADJ_EN_SET.some(k => hit(ens, k))) return 'Adjectifs';
  return 'Divers';
}
// French answers: tolerant (accents, articles, plurals, small typos)
const frLoose = s => frKey(s).replace(/^(le|la|les|un|une|des|du|de la|de l'|l'|d')\s*/, '').replace(/[-']/g, ' ').replace(/\s+/g, ' ').trim().split(' ').map(x => x.length > 3 ? x.replace(/[sx]$/, '') : x).join(' ').replace(/(.)\1+/g, '$1');
function lev(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 9;
  let p = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const c = [i];
    for (let j = 1; j <= b.length; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    p = c;
  }
  return p[b.length];
}
// typo tolerance: same first letter, long enough word, and not another French word the user knows
function frClose(given, target, known) {
  const g = frLoose(given), t = frLoose(target);
  if (!g) return false;
  if (g === t) return true;
  const tol = t.length >= 10 ? 2 : t.length >= 6 ? 1 : 0;
  if (!tol || g[0] !== t[0] || (known && known.has(g))) return false;
  return lev(g, t) <= tol;
}

const defaultCfg = () => ({
  rev: 0,
  langs: [{ id: 'en', name: 'Anglais', code: 'en' }],
  libs: [{ id: 'default', lang: 'en', name: 'Premières leçons' }],
  theme: { preset: 'foret', mode: 'auto', main: '#14613f', accent: '#c8f169' },
  filt: { on: ['en'], to: ['fr', 'en'], mix: true, theme: 'all' },
  stats: { day: '', streak: 0, best: 0, bestScore: 0, goal: 20, days: {}, sprintBest: 0, bossWins: 0, duels: 0, bestCombo: 0 },
  badges: {},
  duelNames: ['Joueur 1', 'Joueur 2']
});

let words = new Map();
let cfg = defaultCfg();
let view = 'rev';
let backend = null;
let framed = false;
let session = null;
const sessions = { w: null, e: null };
const isPlay = () => view === 'rev' || view === 'ear' || view === 'hunt';
// switching between plume and oreille keeps each its own review session
function setTrack(t) {
  if (t === TR) return;
  sessions[TR] = session; TR = t; session = sessions[t];
  if (typeof stopSprint === 'function') stopSprint();
  ui.sprint = null; ui.duel = null;
}
let popBox = -1, popScore = false;
const ui = { theme: 'all', q: '', libLang: null, openId: null, importText: '', addLang: 'en', addLib: '__auto', addNew: false, editLib: null, confirm: null, newLib: false, restore: null, backupText: '' };

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => joinDigits(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, ' ').trim().replace(/[.!?;,]+$/, '').trim();
const split = s => String(s).split(/[\/;]/).map(x => x.trim()).filter(Boolean);
const midnight = t => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
const ymd = t => { const d = new Date(t); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
// two tracks on the same words: 'w' = plume (written), 'e' = oreille (listening, stored in w.e)
let TR = 'w';
const ST = w => TR === 'e' ? (w.e || { lvl: 0, due: 0, ok: 0, ko: 0 }) : w;
const lvlOf = w => ST(w).lvl || 0;
function upd(w, p) { return TR === 'e' ? update(w, { e: { ...ST(w), ...p } }) : update(w, p); }
const isDue = w => (ST(w).due || 0) <= Date.now();
const wLang = w => w.lang || 'en';
const wLib = w => w.lib || 'default';
const getLang = id => cfg.langs.find(l => l.id === id) || { id, name: id, code: '' };
const getLib = id => cfg.libs.find(l => l.id === id) || { id, name: 'Sans thème', lang: '' };
const lower = s => s.toLowerCase();
const normT = (s, lang) => getLang(lang).code === 'en' ? norm(s).replace(/^to /, '') : norm(s);
const scoreW = () => [...words.values()].reduce((s, w) => s + PTS[w.lvl], 0);
const scoreE = () => [...words.values()].reduce((s, w) => s + PTS[w.e?.lvl || 0], 0);
const score = () => scoreW() + scoreE();
const plural = (n, a, b) => n + ' ' + (n > 1 ? b : a);
const fmt = n => n.toLocaleString('fr-FR');

/* ---------- config ---------- */
function mergeCfg(d) {
  d = JSON.parse(JSON.stringify(d || {}));
  const c = defaultCfg();
  const out = { ...c, ...d, theme: { ...c.theme, ...(d.theme || {}) }, stats: { ...c.stats, ...(d.stats || {}) }, langs: d.langs?.length ? d.langs : c.langs, libs: (d.libs || c.libs).map(l => ({ id: l.id, lang: l.lang, name: l.name })) };
  const f = d.filt || {};
  const ids = out.langs.map(l => l.id);
  let on = Array.isArray(f.on) ? f.on : (f.lang && f.lang !== 'all' ? [f.lang] : ids);
  on = on.filter(x => ids.includes(x));
  if (!on.length) on = ids.slice();
  let ans = f.ans;
  if (typeof ans === 'string' || !ans) { const v = typeof ans === 'string' ? ans : 'mix'; ans = {}; ids.forEach(i => ans[i] = v); }
  let to = Array.isArray(f.to) ? f.to : null, mix = !!f.mix;
  if (!to) {
    const own = Array.isArray(f.own) ? f.own : (f.mode && ids.includes(f.mode) ? [f.mode] : []);
    mix = Array.isArray(f.own) ? !!f.mix : (f.mode ? f.mode === 'mix' : true);
    to = own.length ? own.slice() : ['fr'];
    if (own.length && on.some(x => !own.includes(x))) to.unshift('fr');
  }
  to = to.filter(x => x === 'fr' || ids.includes(x));
  if (!to.length) to = ['fr'];
  out.filt = { on, to, mix, hide: !!f.hide, theme: f.theme && f.theme !== 'all' && out.libs.some(l => l.id === f.theme) ? f.theme : (f.lib && f.lib !== 'all' && out.libs.some(l => l.id === f.lib) ? f.lib : 'all') };
  return out;
}

/* ---------- storage ---------- */
function localBackend() {
  const KEY = 'vocab-anglais-v1', CK = 'vocab-config-v1';
  try { JSON.parse(localStorage.getItem(KEY) || '[]').forEach(w => words.set(w.id, w)); } catch (e) {}
  try { const c = localStorage.getItem(CK); if (c) cfg = mergeCfg(JSON.parse(c)); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify([...words.values()])); } catch (e) { toast('Mémoire du téléphone pleine : fais une sauvegarde.'); } };
  return { put: save, del: save, cfg: () => { try { localStorage.setItem(CK, JSON.stringify(cfg)); } catch (e) {} } };
}
function remoteBackend(db, id) {
  const col = db.collection('data/users/' + id);
  const chain = {};
  const queue = (key, fn) => {
    chain[key] = (chain[key] || Promise.resolve()).then(fn).catch(e => {
      toast(e && e.code === 'quota_exceeded' ? 'Espace plein : supprime quelques mots.' : "Enregistrement impossible pour l'instant.");
    });
  };
  let first = true;
  const timer = setTimeout(() => setStatus('Connexion lente : tes mots arrivent…'), 10000);
  col.onSnapshot(snap => {
    if (!snap.metadata.fromCache) { clearTimeout(timer); setStatus(''); }
    const m = new Map();
    snap.docs.forEach(d => {
      if (!d.exists) return;
      if (d.id === '_config') { const data = d.data(); if ((data.rev || 0) >= (cfg.rev || 0)) cfg = mergeCfg(data); }
      else m.set(d.id, { ...JSON.parse(JSON.stringify(d.data())), id: d.id });
    });
    words = m;
    applyTheme();
    if (first) { first = false; startSessionIfNeeded(); installCheck(); firstRun(); }
    render(true);
  }, () => { clearTimeout(timer); setStatus('Mots indisponibles pour le moment.'); });
  return {
    put: w => { const { id: wid, ...data } = w; queue(wid, () => col.doc(wid).set(data)); },
    del: w => queue(w.id, () => col.doc(w.id).delete()),
    cfg: () => { const c = JSON.parse(JSON.stringify(cfg)); queue('_config', () => col.doc('_config').set(c)); }
  };
}
const saveCfg = () => { cfg.rev = (cfg.rev || 0) + 1; backend?.cfg(); };
function setStatus(t) { $('#status').textContent = t; }

const canUpdate = () => !framed && /^https?:$/.test(location.protocol);
async function latestVersion() {
  try { const r = await fetch('version.json?t=' + Date.now(), { cache: 'no-store' }); return r.ok ? (await r.json()).version : null; } catch (e) { return null; }
}
async function hardUpdate() {
  toast('Mise à jour en cours…');
  try { if (ui.newVersion) localStorage.setItem('vocab-upd-tried', ui.newVersion); } catch (e) {}
  try { const regs = await navigator.serviceWorker?.getRegistrations(); await Promise.all((regs || []).map(r => r.unregister())); } catch (e) {}
  try { const keys = await caches.keys(); await Promise.all(keys.map(k => caches.delete(k))); } catch (e) {}
  location.replace(location.pathname + '?v=' + Date.now());
}
async function checkUpdate(manual) {
  if (!canUpdate()) return;
  const v = await latestVersion();
  let tried = null; try { tried = localStorage.getItem('vocab-upd-tried'); } catch (e) {}
  if (v && v !== APP_VERSION) { ui.newVersion = v; ui.updFailed = tried === v; render(); }
  else if (v) { try { localStorage.removeItem('vocab-upd-tried'); } catch (e) {} }
  else if (manual) toast(v ? 'Tu as la dernière version.' : 'Impossible de vérifier (pas de connexion ?).');
}
async function boot() {
  let db = null, user = null, id = null;
  try { framed = window.top !== window; } catch (e) { framed = true; }
  if (framed) for (let i = 0; i < 20 && !window.claude?.use; i++) await new Promise(r => setTimeout(r, 100));
  try {
    if (window.claude?.use) {
      [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      id = user ? await user.id() : null;
    }
  } catch (e) { db = null; }
  if (db && id) { backend = remoteBackend(db, id); setStatus('Chargement de tes mots…'); }
  else {
    backend = localBackend();
    setStatus(framed ? 'Mode hors ligne : les mots restent sur cet appareil.' : '');
    applyTheme(); startSessionIfNeeded(); checkBadges(); installCheck(); firstRun(); render();
    checkUpdate(false);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) checkUpdate(false); });
  }
}

/* ---------- theme ---------- */
function lum(hex) {
  const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; });
  return .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
}
/* dark theme: badges and monsters drawn on the card colour (#161b2e), file name ending in -d.webp.
   Only the images listed here exist in a dark version; the others keep their white version. */
// every badge has its dark version; monsters are added here as they are made
const DARK_BOSS = new Set([]);
const hasDark = base => base.startsWith('badge-') || DARK_BOSS.has(base);
const isDark = () => cfg.theme.mode === 'dark' || (cfg.theme.mode !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
function swapDark(root) {
  const dark = isDark();
  root.querySelectorAll('img[src^="badge-"],img[src^="boss-"]').forEach(im => {
    const src = im.getAttribute('src'), base = src.replace(/(-d)?\.webp$/, '');
    const want = dark && hasDark(base) ? base + '-d.webp' : base + '.webp';
    if (src !== want) {
      // if the dark file is missing (not uploaded yet), fall back to the light one
      if (want.endsWith('-d.webp')) im.onerror = () => { im.onerror = null; im.setAttribute('src', base + '.webp'); };
      im.setAttribute('src', want);
    }
  });
}
try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (cfg.theme.mode === 'auto') render(); }); } catch (e) {}
function applyTheme() {
  if (!['auto', 'light', 'dark'].includes(cfg.theme.mode)) cfg.theme.mode = 'auto';
  const t = cfg.theme, p = t.preset === 'custom' ? { main: t.main, accent: t.accent } : (PRESETS[t.preset] || PRESETS.foret);
  const r = document.documentElement.style;
  r.setProperty('--main', p.main);
  r.setProperty('--accent', p.accent);
  r.setProperty('--btn', p.btn || (lum(p.main) > .45 ? '#121626' : p.main));
  r.setProperty('--bandInk', lum(p.main) > .45 ? '#121626' : '#ffffff');
  if (t.mode === 'auto') r.removeProperty('color-scheme'); else r.setProperty('color-scheme', t.mode);
  const m = document.querySelector('meta[name=theme-color]'); if (m) m.content = p.main;
}

/* ---------- words ---------- */
function themeId(lang, name) {
  let l = cfg.libs.find(x => x.lang === lang && norm(x.name) === norm(name));
  if (!l) { l = { id: uid(), lang, name }; cfg.libs.push(l); cfg._dirty = true; }
  return l.id;
}
function addWords(pairs, lang, lib) {
  let added = 0, merged = 0;
  const code = getLang(lang).code;
  const key = w => wLang(w) + '|' + normT(w.en[0], wLang(w));
  const byKey = new Map([...words.values()].map(w => [key(w), w]));
  for (const [t, fr] of pairs) {
    const k = lang + '|' + normT(t[0], lang);
    const ex = byKey.get(k);
    if (ex) {
      const all = [...ex.fr];
      fr.forEach(f => { if (!all.some(a => norm(a) === norm(f))) all.push(f); });
      if (all.length !== ex.fr.length) { update(ex, { fr: all }); merged++; }
      continue;
    }
    const forced = pairs.themes?.get(t);
    const wl = forced ? themeId(lang, forced) : lib === '__auto' ? themeId(lang, guessTheme({ en: t, fr }, code)) : lib;
    const w = { id: uid(), en: t, fr, lang, lib: wl, lvl: 0, due: Date.now(), ok: 0, ko: 0, added: Date.now() };
    words.set(w.id, w); byKey.set(k, w); backend.put(w); added++;
  }
  if (cfg._dirty) { delete cfg._dirty; saveCfg(); }
  if (added) { const t0 = midnight(Date.now()); if ([...words.values()].filter(w => (w.added || 0) >= t0).length >= 100) award('boulimique'); }
  return { added, merged };
}
function parseImport(text) {
  const pairs = [], bad = [];
  pairs.themes = new Map();
  let cur = null;
  text.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
    const h = l.match(/^(?:#+|th[eè]me\s*:)\s*(.+)$/i);
    if (h) { cur = h[1].trim(); return; }
    const m = l.match(/^(.+?)\s*(?:=|\t)\s*(.+)$/);
    if (!m) { bad.push(l); return; }
    const t = split(m[1]), fr = split(m[2]);
    if (t.length && fr.length) { pairs.push([t, fr]); if (cur) pairs.themes.set(t, cur); } else bad.push(l);
  });
  return { pairs, bad };
}
function update(w, patch) { const n = { ...w, ...patch }; words.set(n.id, n); backend.put(n); return n; }
function autoSort(lang) {
  const code = getLang(lang).code, before = [];
  const hadWords = new Set([...words.values()].filter(w => wLang(w) === lang).map(wLib));
  let moved = 0;
  [...words.values()].filter(w => wLang(w) === lang).forEach(w => {
    const id = themeId(lang, guessTheme(w, code));
    if (id !== wLib(w)) { before.push([w.id, wLib(w)]); update(w, { lib: id }); moved++; }
  });
  const used = new Set([...words.values()].map(wLib));
  const removed = cfg.libs.filter(l => l.lang === lang && hadWords.has(l.id) && !used.has(l.id));
  cfg.libs = cfg.libs.filter(l => !removed.includes(l));
  delete cfg._dirty; saveCfg();
  return { moved, undo: () => { cfg.libs.push(...removed); before.forEach(([id, lib]) => { const w = words.get(id); if (w) update(w, { lib }); }); saveCfg(); } };
}
function libsOf(lang) { return cfg.libs.filter(l => l.lang === lang).sort((a, b) => a.name.localeCompare(b.name)); }
function ensureLib(lang) {
  let l = libsOf(lang)[0];
  if (!l) { l = { id: uid(), lang, name: 'Général' }; cfg.libs.push(l); saveCfg(); }
  return l.id;
}
function addLanguage(name, code) {
  const l = { id: uid(), name, code };
  cfg.langs.push(l);
  cfg.libs.push({ id: uid(), lang: l.id, name: 'Général' });
  cfg.filt.on.push(l.id);
  saveCfg();
  return l;
}

/* ---------- progress ---------- */
// the last title is hidden: it is never announced before being reached
const TITLES = [[0, 'Débutant'], [50, 'Apprenti'], [150, 'Explorateur'], [400, 'Voyageur'], [1000, 'Polyglotte'], [2500, 'Maître des mots'], [5000, 'Légende'], [20000, 'Immortel', true]];
const titleOf = sc => { let t = TITLES[0]; for (const x of TITLES) if (sc >= x[0]) t = x; return t[1]; };
const nextTitle = sc => TITLES.find(x => x[0] > sc && !x[2]);
const goalOf = () => cfg.stats.goal || 20;
const todayCount = () => (cfg.stats.days || {})[ymd(Date.now())] || 0;
// goal of a given day (remembered for each day, so changing the goal does not rewrite the past)
const dayGoal = k => k === ymd(Date.now()) ? goalOf() : ((cfg.stats.goals || {})[k] || goalOf());
function streakNow() {
  const d = cfg.stats.days || {};
  let t = Date.now();
  if ((d[ymd(t)] || 0) < dayGoal(ymd(t))) t -= DAY;
  let n = 0;
  while ((d[ymd(t)] || 0) >= dayGoal(ymd(t))) { n++; t -= DAY; }
  return n;
}
function addDay() {
  const st = cfg.stats, k = ymd(Date.now());
  st.days = { ...(st.days || {}) };
  st.days[k] = (st.days[k] || 0) + 1;
  st.goals = { ...(st.goals || {}), [k]: goalOf() };
  if (st.days[k] === goalOf()) ui.goalDone = true;
  const keys = Object.keys(st.days);
  if (keys.length > 420) { const lim = Date.now() - 400 * DAY; keys.forEach(x => { const [y, m, dd] = x.split('-').map(Number); if (new Date(y, m - 1, dd).getTime() < lim) { delete st.days[x]; delete st.goals[x]; } }); }
  const sk = streakNow(); if (sk > (st.best || 0)) st.best = sk;
}
const ring = (p, size, sw, col) => { const r = (size - sw) / 2, c = 2 * Math.PI * r, v = Math.max(0, Math.min(1, p)); return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="${sw}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${col || 'var(--accent)'}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c * v} ${c}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>`; };

/* ---------- badges ---------- */
// 10 families of 6 tiers; each tier has its own name and picture (badge-<img>-<tier>.webp)
const ACH_VER = 3;
const ACH = [
  { id: 'goal', label: 'Défis du jour réussis', unit: 'défis réussis', steps: [1, 10, 50, 100, 365, 730], names: ['Premier défi', 'Assidu', 'Acharné', 'Infatigable', 'Légende du quotidien', 'Éternel'], img: 'defis' },
  { id: 'streak', label: 'Jours d\'affilée', unit: 'jours d\'affilée', steps: [3, 7, 30, 100, 200, 365], names: ['Petite flamme', 'Brasier', 'Incendie', 'Volcan', 'Soleil', 'Supernova'], img: 'serie' },
  { id: 'combo', label: 'Bonnes réponses d\'affilée', unit: 'bonnes réponses d\'affilée', steps: [10, 25, 50, 100, 200, 500], names: ['En rythme', 'Sur sa lancée', 'Inarrêtable', 'Machine', 'Perfection', 'Dieu vivant'], img: 'combo' },
  { id: 'total', label: 'Ascension', unit: 'bonnes réponses au total', steps: [100, 500, 2000, 5000, 15000, 30000], names: ['Caillou', 'Rocher', 'Colline', 'Montagne', 'Sommet enneigé', 'Olympe'], img: 'ascension' },
  { id: 'words', label: 'Mots dans une bibliothèque', unit: 'mots dans une même langue', steps: [250, 1000, 2500, 5000, 8000, 12000], names: ['Carnet', 'Cahier', 'Dictionnaire', 'Encyclopédie', 'Grande bibliothèque', 'Bibliothèque d\'Alexandrie'], img: 'mots' },
  { id: 'mastered', label: 'Mots maîtrisés', unit: 'mots maîtrisés dans une même langue', steps: [1, 100, 500, 1500, 3000, 6000], names: ['Première graine', 'Jeune pousse', 'Arbuste', 'Grand arbre', 'Forêt', 'Arbre-monde'], img: 'maitrise' },
  { id: 'sprint', label: 'Sprint 60 s', unit: 'bonnes réponses en 60 s', steps: [10, 15, 20, 25, 30, 40], names: ['Étincelle', 'Double éclair', 'Boule de foudre', 'Orage', 'Tempête', 'Foudre divine'], img: 'sprint' },
  { id: 'boss', label: 'Boss battus', unit: 'boss battus (un seul compte par jour)', steps: [1, 10, 50, 150, 300, 500], names: ['Genin', 'Chūnin', 'Jōnin', 'Rōnin', 'Shōgun', 'Kami'], img: 'boss' },
  { id: 'duels', label: 'Duels joués', unit: 'duels joués', steps: [1, 5, 20, 50, 100, 500], names: ['Challenger', 'Rival', 'Duelliste', 'Gladiateur', 'Maître d\'armes', 'Gladiateur invaincu'], img: 'duels' },
  { id: 'langs', label: 'Polyglotte', unit: 'langues parlées', hint: 'Le français compte pour une langue, puis chaque langue où tu maîtrises au moins 500 mots.', steps: [2, 3, 4, 5, 6, 8], names: ['Bilingue', 'Trilingue', 'Polyglotte', 'Interprète', 'Bâtisseur', 'Tour de Babel'], img: 'langues' }
];
// secret badges: hidden ("?") until found
const SECRETS = [
  ['oiseau-nuit', 'Oiseau de nuit', 'Réviser entre minuit et 4 h du matin.'],
  ['leve-tot', 'Lève-tôt', 'Réviser entre 4 h et 6 h du matin.'],
  ['phenix', 'Phénix', 'Battre un boss avec une seule vie restante.'],
  ['fair-play', 'Fair-play', 'Perdre un duel 0 à 10.'],
  ['marathonien', 'Marathonien', 'Faire 300 bonnes réponses dans la journée.'],
  ['retour-heros', 'Le retour du héros', 'Revenir réviser après plus de 30 jours d\'absence.'],
  ['sans-filet', 'Sans filet', 'Faire au moins 20 bonnes réponses dans la journée sans aucune erreur.'],
  ['photo-finish', 'Photo finish', 'Trouver une bonne réponse dans la dernière seconde d\'un sprint.'],
  ['meteore', 'Météore', 'Faire 10 bonnes réponses en 15 secondes pendant un sprint.'],
  ['vengeance', 'Vengeance', 'Battre un boss juste après avoir perdu contre lui.'],
  ['jour-an', 'Jour de l\'an', 'Réviser le 1er janvier.'],
  ['lutin', 'Lutin studieux', 'Réviser le 25 décembre.'],
  ['grand-ecart', 'Grand écart', 'Répondre dans 3 langues différentes le même jour.'],
  ['feu-sacre', 'Feu sacré', 'Réussir un défi de 50 sept jours de suite.'],
  ['collectionneur', 'Collectionneur', 'Obtenir le premier niveau de toutes les familles de succès.'],
  ['faucheuse', 'La Faucheuse', 'Réviser le soir d\'Halloween, le 31 octobre.'],
  ['coeur', 'Cœur d\'artichaut', 'Réviser le jour de la Saint-Valentin.'],
  ['poisson-avril', 'Poisson d\'avril', 'Réviser le 1er avril.'],
  ['seollal', 'Seollal', 'Réviser du coréen pendant le Nouvel An coréen.'],
  ['un-an', 'Un an déjà', 'Utiliser l\'appli un an après avoir ajouté ton premier mot.'],
  ['sisyphe', 'Sisyphe', 'Rater le même mot 10 fois.'],
  ['elephant', 'Mémoire d\'éléphant', 'Amener un mot jusqu\'à la case 3 mois sans jamais le rater.'],
  ['insomniaque', 'Insomniaque', 'Réviser entre minuit et 4 h trois nuits dans la même semaine.'],
  ['boulimique', 'Boulimique', 'Ajouter 100 mots dans la même journée.'],
  ['perfectionniste', 'Perfectionniste', 'Réussir un défi de 50 sans aucune erreur dans la journée.'],
  ['escargot', 'Escargot', 'Finir un sprint sans aucune bonne réponse.']
];
const SEOLLAL = ['2026-02-17', '2027-02-06', '2028-01-26', '2029-02-13', '2030-02-03', '2031-01-23', '2032-02-11', '2033-01-31', '2034-02-19', '2035-02-08', '2036-01-28'];
// calendar colours for the 10 / 20 / 30 / 50 goals, by theme (chosen in the settings)
const CAL_THEMES = {
  feu: ['Feu', ['#f2b33d', '#ec7a1c', '#d23a22', '#8e1b2e']],
  foret: ['Forêt', ['#8fcf7a', '#3fa34d', '#1e6b3a', '#0f3b24']],
  ocean: ['Océan', ['#5fd3c9', '#2a9fd6', '#1f5fae', '#16306e']],
  crepuscule: ['Crépuscule', ['#f29ac1', '#c96bd1', '#8a4fc0', '#4d2a7c']],
  classique: ['Classique', ['#3b82f6', '#16a34a', '#f59e0b', '#e11d48']]
};
const goalCol = v => (CAL_THEMES[cfg.calTheme] || CAL_THEMES.feu)[1][[10, 20, 30, 50].indexOf(v) < 0 ? 1 : [10, 20, 30, 50].indexOf(v)];
const TIER_COL = ['#c4874f', '#9aa7b8', '#e8b923', '#5cc6cf', '#a77bf0', '#1b1b22'];
const isKorean = id => { const l = id && id !== 'fr' && getLang(id); return !!l && (l.code === 'ko' || /cor/i.test(l.name)); };
function achValues() {
  const all = [...words.values()], st = cfg.stats, days = st.days || {};
  const perLang = f => Math.max(0, ...cfg.langs.map(l => all.filter(w => wLang(w) === l.id && f(w)).length));
  const sumOk = all.reduce((n, w) => n + (w.ok || 0) + (w.e?.ok || 0), 0);
  if (sumOk > (st.totalOk || 0)) st.totalOk = sumOk;
  return {
    goal: Object.keys(days).filter(k => days[k] >= dayGoal(k)).length,
    streak: Math.max(streakNow(), st.best || 0),
    combo: st.bestCombo || 0,
    total: st.totalOk || 0,
    words: perLang(() => true),
    mastered: perLang(w => w.lvl === TOP),
    sprint: st.sprintBest || 0,
    boss: st.bossDays ?? (st.bossWins || 0),
    duels: st.duels || 0,
    langs: 1 + cfg.langs.filter(l => all.filter(w => wLang(w) === l.id && w.lvl === TOP).length >= 500).length
  };
}
const tierOf = (a, v) => a.steps.filter(x => v >= x).length;
const secretOf = id => SECRETS.find(x => x[0] === id);
// gives a secret badge once; it is announced by celebrate()
function award(id) {
  cfg.secrets = cfg.secrets || {};
  if (cfg.secrets[id] || !secretOf(id)) return;
  cfg.secrets = { ...cfg.secrets, [id]: Date.now() };
  cfg.lastBadge = { img: 'secret-' + id, name: secretOf(id)[1], t: Date.now() };
  (ui.newSecrets = ui.newSecrets || []).push(id);
  saveCfg();
}
// returns the newly reached tiers; the first time (or after a badge rework) it records the current state silently
function checkBadges() {
  const v = achValues(), first = !cfg.tiers || cfg.achVer !== ACH_VER, prev = cfg.tiers || {}, now = {}, nw = [];
  ACH.forEach(a => { now[a.id] = tierOf(a, v[a.id]); if (!first && now[a.id] > (prev[a.id] || 0)) nw.push([a, now[a.id]]); });
  if (first || ACH.some(a => now[a.id] !== (prev[a.id] || 0))) {
    cfg.tiers = now; cfg.achVer = ACH_VER;
    const dates = { ...(cfg.tierDates || {}) };
    nw.forEach(([a, t]) => { for (let i = (prev[a.id] || 0) + 1; i <= t; i++) dates[a.id + '-' + i] = Date.now(); });
    cfg.tierDates = dates;
    if (nw.length) { const [a, t] = nw[nw.length - 1]; cfg.lastBadge = { img: a.img + '-' + t, name: a.names[t - 1], t: Date.now() }; }
    saveCfg();
  }
  if (ACH.every(a => now[a.id] >= 1)) award('collectionneur');
  return nw;
}
// secret badges checked after each answer (ev: { ok, q, mode })
function secretsAfterAnswer(ev) {
  const st = cfg.stats, now = new Date(), h = now.getHours(), k = ymd(Date.now()), md = String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0'), today = midnight(Date.now());
  // absence of more than 30 days (lastSeen = last answer)
  if (st.lastSeen && Date.now() - st.lastSeen > 30 * DAY) award('retour-heros');
  st.lastSeen = Date.now();
  const timeOk = clockOk(); st.maxSeen = Math.max(st.maxSeen || 0, Date.now());
  if (!ev.ok) {
    st.wrongDays = { ...(st.wrongDays || {}), [k]: ((st.wrongDays || {})[k] || 0) + 1 };
    const wd = Object.keys(st.wrongDays); if (wd.length > 40) wd.sort().slice(0, wd.length - 40).forEach(x => delete st.wrongDays[x]);
    const w = ev.q && words.get(ev.q.id); if (w && w.ko >= 10) award('sisyphe');
    return;
  }
  if (!timeOk) return;
  if (h < 4) {
    award('oiseau-nuit');
    const nights = [...new Set([...(st.nights || []), today])].filter(x => today - x < 7 * DAY);
    st.nights = nights; if (nights.length >= 3) award('insomniaque');
  } else if (h < 6) award('leve-tot');
  if (md === '01-01') award('jour-an');
  if (md === '12-25') award('lutin');
  if (md === '10-31') award('faucheuse');
  if (md === '02-14') award('coeur');
  if (md === '04-01') award('poisson-avril');
  if (ev.q && (isKorean(ev.q.pl) || isKorean(ev.q.al)) && SEOLLAL.some(d => { const [y, m, dd] = d.split('-').map(Number); return Math.abs(new Date(y, m - 1, dd).getTime() - today) <= 1.5 * DAY; })) award('seollal');
  if (ev.q) { const al = st.alDay && st.alDay.d === k ? st.alDay.l : []; if (!al.includes(ev.q.al)) st.alDay = { d: k, l: [...al, ev.q.al] }; if (st.alDay.l.length >= 3) award('grand-ecart'); }
  const n = todayCount(), wrong = (st.wrongDays || {})[k] || 0;
  if (n >= 300) award('marathonien');
  if (n >= 20 && !wrong) award('sans-filet');
  if (dayGoal(k) === 50 && n >= 50 && !wrong) award('perfectionniste');
  if (dayGoal(k) === 50 && n >= 50) { let ok7 = true; for (let i = 0; i < 7; i++) { const d = ymd(Date.now() - i * DAY); if (dayGoal(d) !== 50 || ((st.days || {})[d] || 0) < 50) ok7 = false; } if (ok7) award('feu-sacre'); }
  const w = ev.q && words.get(ev.q.id);
  if (w && w.lvl === TOP && !w.ko) award('elephant');
  const all = [...words.values()], first = Math.min(...all.map(x => x.added || Date.now()));
  if (all.length && Date.now() - first >= 365 * DAY) award('un-an');
}
// after any answer: daily goal, new badges, mastered word → message + confetti
function celebrate() {
  const nb = checkBadges(), msg = [];
  let fx = false;
  if (ui.fxMastered) { ui.fxMastered = false; fx = true; }
  if (ui.goalDone) { ui.goalDone = false; msg.push('Défi du jour réussi !'); }
  if (nb.length) msg.push((nb.length > 1 ? 'Nouveaux succès : ' : 'Nouveau succès : ') + nb.map(([a, t]) => `${a.names[t - 1]} (${a.label})`).join(', '));
  if (ui.newSecrets?.length) { msg.push((ui.newSecrets.length > 1 ? 'Badges secrets : ' : 'Badge secret : ') + ui.newSecrets.map(id => secretOf(id)[1]).join(', ') + ' !'); ui.newSecrets = []; }
  if (msg.length) { saveCfg(); toast(msg.join(' · ')); fx = true; }
  if (fx) confetti();
  if (msg.length) renderHeader();
}
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = document.createElement('div');
  box.className = 'confetti';
  const cols = ['var(--accent)', 'var(--main)', '#ffffff', 'var(--green)', '#ff8a5b'];
  box.innerHTML = Array.from({ length: 46 }, (_, i) => `<i style="left:${Math.random() * 100}%;background:${cols[i % cols.length]};animation-delay:${(Math.random() * .3).toFixed(2)}s;animation-duration:${(1.1 + Math.random() * .9).toFixed(2)}s"></i>`).join('');
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 2600);
}

/* ---------- review ---------- */
const inScope = w => cfg.filt.on.includes(wLang(w)) && (ui.theme === 'all' || cfg.filt.on.length !== 1 || wLib(w) === ui.theme);
const answerLangs = () => { const f = cfg.filt; if (f.mix) return ['fr', ...f.on]; const t = f.to.filter(x => x === 'fr' || f.on.includes(x)); return t.length ? t : ['fr']; };
const langName = id => id === 'fr' ? 'français' : lower(getLang(id).name);
const langCode = id => id === 'fr' ? 'fr' : getLang(id).code;
const uniq = a => [...new Set(a)];
function cpIndex() {
  const m = new Map();
  for (const w of words.values()) if (cfg.filt.on.includes(wLang(w))) for (const f of w.fr) { const k = wLang(w) + '|' + frLoose(f); if (!m.has(k)) m.set(k, []); m.get(k).push(w); }
  return m;
}
const counterparts = (w, lang, idx) => uniq(w.fr.flatMap(f => idx.get(lang + '|' + frLoose(f)) || [])).filter(x => x !== w);
// every way this word can be asked, given the chosen answer languages
function questions(w, S, idx) {
  const L = wLang(w), res = [];
  if (S.includes('fr')) res.push({ prompt: w.en, pl: L, answers: w.fr, al: 'fr', addTo: 'fr' });
  if (S.includes(L)) {
    res.push({ prompt: w.fr, pl: 'fr', answers: w.en, al: L, addTo: 'en' });
    cfg.filt.on.filter(x => x !== L).forEach(L1 => { const c = counterparts(w, L1, idx); if (c.length) res.push({ prompt: uniq(c.flatMap(x => x.en)), pl: L1, answers: w.en, al: L, addTo: 'en' }); });
  }
  S.filter(x => x !== 'fr' && x !== L).forEach(L2 => { const c = counterparts(w, L2, idx); if (c.length) res.push({ prompt: w.en, pl: L, answers: uniq(c.flatMap(x => x.en)), al: L2, addTo: null }); });
  return res;
}
// at the oreille, the foreign word is heard; answering in its own language = dictation
const hasVoice = id => { if (!canSpeak() || id === 'fr') return false; const v = speechSynthesis.getVoices(); return !v.length || v.some(x => x.lang && x.lang.toLowerCase().startsWith(langCode(id).toLowerCase())); };
function earQs(w, S, idx) {
  const L = wLang(w), res = [];
  if (!hasVoice(L)) return res;
  if (S.includes('fr')) res.push({ prompt: w.en, pl: L, answers: w.fr, al: 'fr', addTo: 'fr' });
  if (S.includes(L)) res.push({ prompt: w.en, pl: L, answers: w.en, al: L, addTo: null, dict: true });
  S.filter(x => x !== 'fr' && x !== L).forEach(L2 => { const c = counterparts(w, L2, idx); if (c.length) res.push({ prompt: w.en, pl: L, answers: uniq(c.flatMap(x => x.en)), al: L2, addTo: null }); });
  return res;
}
const qsFor = (w, S, idx) => TR === 'e' ? earQs(w, S, idx) : questions(w, S, idx);
function askable() { const S = answerLangs(), idx = cpIndex(); return w => inScope(w) && qsFor(w, S, idx).length > 0; }
const inFilter = w => askable()(w);
function dueList() {
  const ok = askable();
  const ids = [...words.values()].filter(w => isDue(w) && ok(w)).map(w => w.id);
  for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
  return ids;
}
const newSession = extra => ({ queue: extra ? [] : dueList(), extra, cur: null, state: 'ask', missed: session?.missed || new Set(), done: 0, good: 0, combo: 0, bestCombo: 0, gained: 0, last: [] });
function startSessionIfNeeded() {
  if (session || !words.size) return;
  session = newSession(false);
  next();
}
function restartSession() { session = null; startSessionIfNeeded(); }
function pickExtra() {
  const ok = askable();
  const cands = [...words.values()].filter(ok);
  const fresh = cands.filter(w => !session.last.includes(w.id));
  const pool = fresh.length ? fresh : cands;
  const wt = w => 1 / (lvlOf(w) + 1) + (ST(w).ko || 0) * .15;
  let r = Math.random() * pool.reduce((s, w) => s + wt(w), 0);
  for (const w of pool) { r -= wt(w); if (r <= 0) return w.id; }
  return pool[0]?.id;
}
function next() {
  const s = session, ok = askable();
  let id = null;
  if (!s.extra) {
    while (s.queue.length && !(words.has(s.queue[0]) && ok(words.get(s.queue[0])))) s.queue.shift();
    if (!s.queue.length) s.queue = dueList().filter(x => x !== s.cur?.id);
    const cw = s.cur && words.get(s.cur.id);
    if (!s.queue.length && cw && isDue(cw) && ok(cw)) s.queue = [cw.id];
    id = s.queue.shift() || null;
  } else id = pickExtra();
  if (!id) { s.cur = null; s.state = 'done'; return; }
  s.last = [id, ...s.last].slice(0, 3);
  const qs = qsFor(words.get(id), answerLangs(), cpIndex());
  const q = qs[Math.floor(Math.random() * qs.length)];
  s.cur = { id, ...q, given: '', delta: 0, from: 0, to: 0 };
  ui.toCard = s.done > 0;
  s.state = 'ask';
}
const variants = t => { const v = String(t).replace(/\([^)]*\)/g, ' ').split(/[,\/;]/).map(x => x.trim()).filter(Boolean); return v.length ? v : [t]; };
function check(given, q) {
  const parts = String(given).replace(/\([^)]*\)/g, ' ').split(/[,\/;]/).map(x => x.trim()).filter(Boolean);
  const all = homo(q.answers.flatMap(variants), q.al);
  const known = q.al === 'fr' ? new Set([...words.values()].flatMap(w => w.fr.flatMap(variants)).map(frLoose)) : null;
  const one = g => all.some(t => q.al === 'fr' ? frClose(g, t, known) : normT(t, q.al) === normT(g, q.al));
  return one(given) || (parts.length > 1 && parts.every(one));
}
const mustRetype = q => q.al !== 'fr';
// words that sound the same are accepted at the oreille
const HOMO = ['there their they\'re', 'to too two', 'right write rite', 'see sea', 'hear here', 'know no', 'knew new', 'buy by bye', 'for four', 'one won', 'eight ate', 'son sun', 'meet meat', 'week weak', 'road rode', 'flower flour', 'pair pear', 'piece peace', 'hole whole', 'hour our', 'wear where', 'weather whether', 'which witch', 'mail male', 'tail tale', 'plain plane', 'sail sale', 'blue blew', 'red read', 'night knight', 'not knot', 'whose who\'s', 'its it\'s', 'your you\'re', 'bare bear', 'break brake', 'cell sell', 'dear deer', 'fair fare', 'flew flu', 'heal heel', 'made maid', 'way weigh', 'wood would', 'steal steel', 'stair stare', 'sweet suite', 'threw through', 'waist waste', 'wait weight', 'allowed aloud', 'board bored', 'cent scent sent', 'die dye', 'feat feet', 'groan grown', 'hair hare', 'higher hire', 'hymn him', 'idle idol', 'in inn', 'lead led', 'loan lone', 'medal meddle', 'missed mist', 'morning mourning', 'peak peek', 'principal principle', 'rain reign rein', 'role roll', 'root route', 'sole soul', 'some sum', 'stationary stationery', 'tide tied', 'toe tow', 'vain vein', 'wail whale', 'war wore'].map(x => x.split(' '));
function homo(list, al) {
  if (TR !== 'e' || langCode(al) !== 'en') return list;
  const out = [...list];
  list.forEach(t => { const n = normT(t, al); HOMO.forEach(g => { if (g.some(x => normT(x, al) === n)) out.push(...g); }); });
  return uniq(out);
}
function submit(val) {
  const s = session, w = words.get(s.cur.id);
  if (!w) return;
  if (s.state === 'right' || (s.state === 'wrong' && !mustRetype(s.cur))) { next(); render(); return; }
  if (s.state === 'wrong') {
    if (check(val, s.cur)) { next(); render(); }
    else { const i = $('#ans'); i.value = ''; i.placeholder = 'Pas tout à fait, recopie-la'; i.focus(); }
    return;
  }
  if (!val.trim()) return;
  if (s.state === 'ask') {
    s.cur.given = val;
    if (check(val, s.cur)) { s.cur.loose = s.cur.al === 'fr' && !s.cur.answers.flatMap(variants).some(t => norm(t) === norm(val)); grade(w, true); s.state = 'right'; }
    else { grade(w, false); s.state = 'wrong'; }
    secretsAfterAnswer({ ok: s.state === 'right', q: s.cur });
    render();
    celebrate();
  }
}
function touchDay() {
  const st = cfg.stats, today = ymd(Date.now());
  if (st.day === today) return false;
  st.streak = st.day === ymd(Date.now() - DAY) ? st.streak + 1 : 1;
  st.best = Math.max(st.best, st.streak);
  st.day = today;
  return true;
}
function grade(w, good) {
  const s = session, from = lvlOf(w);
  s.done++;
  let to = from;
  if (good) {
    s.good++; s.combo++; s.bestCombo = Math.max(s.bestCombo, s.combo);
    addDay();
    if (s.combo > (cfg.stats.bestCombo || 0)) cfg.stats.bestCombo = s.combo;
    if (s.extra && !isDue(w)) upd(w, { ok: (ST(w).ok || 0) + 1 });
    else {
      to = s.missed.has(w.id) ? 1 : Math.min(from + 1, TOP);
      upd(w, { lvl: to, due: midnight(Date.now() + INTER[to] * DAY), ok: (ST(w).ok || 0) + 1 });
    }
  } else {
    s.combo = 0; s.missed.add(w.id); to = 0;
    upd(w, { lvl: 0, due: Date.now(), ko: (ST(w).ko || 0) + 1 });
    // a missed word comes back 8 to 12 words later (or at the end of the round)
    if (!s.extra) s.queue.splice(Math.min(8 + Math.floor(Math.random() * 5), s.queue.length), 0, w.id);
  }
  s.cur.from = from; s.cur.to = to; s.cur.delta = PTS[to] - PTS[from]; s.gained += s.cur.delta;
  popBox = to !== from ? to : -1;
  popScore = s.cur.delta > 0;
  const sc = score();
  if (sc > cfg.stats.bestScore) cfg.stats.bestScore = sc;
  if (to === TOP && from !== TOP) { ui.fxMastered = true; if (!cfg.stats.firstMastered) { cfg.stats.firstMastered = Date.now(); ui.celebrate = true; } }
  saveCfg();
}
function acceptMine() {
  const s = session, w = words.get(s.cur.id), key = s.cur.addTo;
  if (!key) return;
  let restored = update(w, { [key]: [...w[key], s.cur.given.trim()] });
  restored = upd(restored, { lvl: s.cur.from, ko: Math.max(0, (ST(restored).ko || 0) - 1), due: Date.now() });
  s.cur.answers = [...s.cur.answers, s.cur.given.trim()];
  s.missed.delete(w.id); s.done--; s.gained -= s.cur.delta;
  const qi = s.queue.indexOf(w.id); if (qi >= 0) s.queue.splice(qi, 1);
  grade(restored, true); s.state = 'right'; render();
}

/* ---------- games: sprint, boss, duel ---------- */
const MODES = [['rev', 'Révision'], ['sprint', 'Sprint 60 s'], ['duel', 'Duel']];
const flagOf = q => TR === 'e' ? 'Écoute → ' + langName(q.al) + (q.dict ? ' (dictée)' : '') : (q.pl === 'fr' ? 'Français' : getLang(q.pl).name) + ' → ' + langName(q.al);
function pickQ(exclude) {
  const S = answerLangs(), idx = cpIndex();
  let pool = [...words.values()].filter(w => inScope(w) && qsFor(w, S, idx).length);
  const fresh = pool.filter(w => !exclude.includes(w.id));
  if (fresh.length) pool = fresh;
  if (!pool.length) return null;
  const w = pool[Math.floor(Math.random() * pool.length)], qs = qsFor(w, S, idx);
  return { id: w.id, ...qs[Math.floor(Math.random() * qs.length)] };
}
// result of an answer outside the normal review (sprint, boss): same rules, no retype
function applyResult(w, good) {
  const from = lvlOf(w);
  let to = from;
  if (good) {
    addDay();
    if (isDue(w)) { to = Math.min(from + 1, TOP); upd(w, { lvl: to, due: midnight(Date.now() + INTER[to] * DAY), ok: (ST(w).ok || 0) + 1 }); }
    else upd(w, { ok: (ST(w).ok || 0) + 1 });
  } else { to = 0; upd(w, { lvl: 0, due: Date.now(), ko: (ST(w).ko || 0) + 1 }); }
  if (to === TOP && from !== TOP) ui.fxMastered = true;
  popBox = to !== from ? to : -1;
  popScore = PTS[to] > PTS[from];
  const sc = score(); if (sc > cfg.stats.bestScore) cfg.stats.bestScore = sc;
  saveCfg();
}
const answerInput = (q, ph, hint) => `<input id="ans" lang="${esc(langCode(q.al))}" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="${hint || 'done'}" placeholder="${esc(ph)}" aria-label="Ta réponse en ${esc(langName(q.al))}">`;
const resultBox = (q, ok) => ok
  ? `<div class="fb ok">Juste !${q.answers.length > 1 ? `<small>Toutes les réponses : ${esc(q.answers.join(' ou '))}</small>` : ''}</div>`
  : `<div class="fb ko">Ta réponse : <span class="yours">${esc(q.given)}</span><span class="right">${esc(q.answers.join(' ou '))}</span></div>`;

/* sprint */
let sprintTimer = null;
function stopSprint() { clearInterval(sprintTimer); sprintTimer = null; }
function sprintStart() {
  stopSprint();
  const sp = ui.sprint = { state: 'run', end: Date.now() + 60000, score: 0, wrong: 0, combo: 0, last: [] };
  sp.cur = pickQ([]);
  if (!sp.cur) { ui.sprint = { state: 'ready' }; toast('Aucun mot dans cette sélection.'); render(); return; }
  sprintTimer = setInterval(sprintTick, 200);
  ui.toCard = true;
  render();
}
function sprintTick() {
  const sp = ui.sprint;
  if (!sp || sp.state !== 'run') return stopSprint();
  const left = Math.max(0, (sp.end - Date.now()) / 1000);
  const t = $('#stime'), b = $('#tbar');
  if (t) t.textContent = Math.ceil(left);
  if (b) { b.style.width = (left / 60 * 100) + '%'; b.classList.toggle('low', left <= 10); }
  if (left <= 0) sprintEnd();
}
function sprintEnd() {
  stopSprint();
  const sp = ui.sprint;
  sp.state = 'end';
  sp.record = sp.score > (cfg.stats.sprintBest || 0);
  if (sp.record) { cfg.stats.sprintBest = sp.score; saveCfg(); confetti(); }
  if (!sp.score) award('escargot');
  if ((view === 'rev' || view === 'ear') && ui.mode === 'sprint') { document.activeElement?.blur?.(); render(); }
  celebrate();
}
function sprintAnswer(val) {
  const sp = ui.sprint;
  if (!sp || sp.state !== 'run' || !val.trim()) return;
  const q = sp.cur, w = words.get(q.id), ok = check(val, q);
  if (w) applyResult(w, ok);
  if (ok) { sp.score++; sp.combo++; if (sp.combo > (cfg.stats.bestCombo || 0)) cfg.stats.bestCombo = sp.combo; } else { sp.wrong++; sp.combo = 0; }
  if (ok) {
    if (sp.end - Date.now() < 1000) award('photo-finish');
    sp.hits = [...(sp.hits || []), Date.now()].slice(-10);
    if (sp.hits.length >= 10 && sp.hits[9] - sp.hits[0] <= 15000) award('meteore');
  }
  secretsAfterAnswer({ ok, q });
  sp.flash = { ok, p: q.prompt.join(' / '), a: q.answers.join(' ou ') };
  sp.last = [q.id, ...sp.last].slice(0, 6);
  sp.cur = pickQ(sp.last) || q;
  render();
  celebrate();
}
function renderSprint() {
  const sp = ui.sprint || (ui.sprint = { state: 'ready' }), best = cfg.stats.sprintBest || 0;
  const bolt = `<svg width="46" height="46" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="var(--accent)" stroke="var(--btn)" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
  if (sp.state === 'ready') return `<div class="card done game">${bolt}<b class="big">Sprint 60 secondes</b><p>Un maximum de bonnes réponses en une minute. Pas besoin de recopier : on enchaîne.</p><p class="hint">Ton record : <b>${best}</b></p><div class="row center"><button class="btn" data-a="sprintgo">Démarrer</button></div></div>`;
  if (sp.state === 'end') return `<div class="card done game">${bolt}<b class="big">${sp.score}</b><p>${plural(sp.score, 'bonne réponse', 'bonnes réponses')} en 60 secondes${sp.record ? ' · <b>nouveau record !</b>' : ` · record ${best}`}</p><p class="hint">${plural(sp.wrong, 'erreur', 'erreurs')}</p><div class="row center"><button class="btn" data-a="sprintgo">Rejouer</button></div></div>`;
  const q = sp.cur, left = Math.max(0, Math.ceil((sp.end - Date.now()) / 1000));
  const flash = sp.flash ? `<div class="flash ${sp.flash.ok ? 'ok' : 'ko'}">${sp.flash.ok ? 'Juste' : 'Raté'} : ${esc(sp.flash.p)} = <b>${esc(sp.flash.a)}</b></div>` : '';
  return `<div class="card">
    <div class="dir"><span class="flag">${esc(flagOf(q))}</span><span><b id="stime" class="big2">${left}</b> s · <b>${sp.score}</b> ${sp.score > 1 ? 'justes' : 'juste'}</span></div>
    <div class="tbar"><i id="tbar" style="width:${left / 60 * 100}%"></i></div>
    ${promptBox(q, 's' + sp.score + '-' + sp.wrong + q.id, false)}
    <form id="sf" autocomplete="off" style="margin-top:14px">${answerInput(q, 'En ' + langName(q.al) + '…')}<div class="row"><button class="btn grow" type="submit">Valider</button></div></form>
    ${flash}
  </div>`;
}

/* monsters: creatures of the world's folklore, collected in the bestiary */
// mode: 'both' (plume and oreille), 'w' (plume only) or 'e' (oreille only)
// rar sets the hidden chance of appearing; cond: always, night, fullmoon, winter, winternight, summer, halloween, december, lunarny, korean
const BEASTS = [
  { id: 'gobelin', name: 'Gobelin', from: 'Europe', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['classic'], mode: 'both',
    story: 'Les gobelins sont de petits êtres de la terre, laids et malicieux, qui vivent sous les collines, dans les mines et les recoins sombres des maisons. On les accusait de tout ce qui tournait mal : le lait qui tourne, les outils qui disparaissent, les chevaux retrouvés épuisés au matin, la crinière pleine de nœuds. Ils détestent la lumière et sortent la nuit, en bande, en ricanant. Certains se glissaient dans les fermes et y semaient le désordre tant qu\'on ne les avait pas chassés. Dans les mines, on les entendait frapper la roche au loin, sans jamais les voir.',
    fact: 'Le mot « gobelin » viendrait du grec kobalos, « fripon ». Le métal cobalt tient son nom d\'un cousin allemand, le Kobold, accusé de gâcher le minerai des mineurs.',
    meaning: 'Le gobelin donnait un visage aux petits malheurs du quotidien : quand une chose disparaissait ou se cassait sans raison, c\'était sa faute. Il exprime aussi la peur de ce qui vit sous terre et dans le noir, là où les hommes ne voient pas.',
    origin: 'Du folklore d\'Europe de l\'Ouest, surtout français, anglais et germanique, depuis le Moyen Âge. Le mot apparaît en ancien français (gobelin) au XIIe siècle.',
    tip: 'C\'est souvent le premier adversaire d\'un chasseur : reste concentré et il ne fera pas long feu.' },
  { id: 'kappa', name: 'Kappa', from: 'Japon', reg: 'Asie', rar: 'Commun', cond: 'always', rules: ['classic'], mode: 'both',
    story: 'Le kappa vit dans les rivières, les étangs et les marais du Japon. Il a la taille d\'un enfant, une carapace de tortue, des mains palmées et un bec. Sur le sommet du crâne, il porte un creux rempli d\'eau, la source de toute sa force. Il guette au bord de l\'eau, attire les imprudents, les nageurs ou même les chevaux, et les entraîne au fond pour les noyer. Mais il est aussi très poli : si on le salue en s\'inclinant, il s\'incline à son tour, l\'eau de son crâne se renverse, et il perd ses forces. Un kappa vaincu ou pris en pitié peut alors devenir un allié fidèle, et il apprend parfois aux hommes l\'art de soigner les os.',
    fact: 'Il adore les concombres : au Japon, on en jette encore dans les rivières pour l\'amadouer, et les sushis au concombre s\'appellent des kappa-maki.',
    meaning: 'Le kappa servait d\'avertissement : il rappelait aux enfants de ne pas jouer seuls près de l\'eau, où les noyades étaient fréquentes. Sa politesse fatale reflète aussi une valeur japonaise : même un monstre respecte les règles du savoir-vivre.',
    origin: 'Du folklore japonais. Il fait partie des yōkai, les créatures surnaturelles, et ses histoires sont déjà nombreuses à l\'époque d\'Edo (XVIIe-XIXe siècles).',
    tip: 'Reste poli et concentré : un combat classique, mais le kappa ne pardonne pas les erreurs répétées.' },
  { id: 'troll', name: 'Troll', from: 'Scandinavie', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Les trolls sont des géants anciens qui vivaient dans le Nord bien avant les hommes. Ils habitent les montagnes, les forêts profondes et le dessous des ponts. Énormes, lents et pas très malins, ils sont aussi rancuniers et d\'une force terrible. La nuit, ils rôdent autour des fermes pour voler le bétail, ou parfois les enfants. Ils amassent de l\'or dans leurs grottes et détestent le son des cloches d\'église. Mais leur plus grand ennemi, c\'est le soleil : un troll surpris dehors par l\'aube se change en pierre pour toujours.',
    fact: 'En Norvège, on montre encore aux enfants des rochers aux formes étranges en racontant qu\'il s\'agit de trolls surpris par l\'aube.',
    meaning: 'La légende des trolls expliquait le paysage du Nord : chaque rocher bizarre ou montagne en forme de visage pouvait être un troll pétrifié. Ils incarnent aussi la nature sauvage, puissante et hostile, qui commence là où s\'arrêtent les champs. Leur peur des cloches montre comment les vieilles croyances ont reculé devant le christianisme.',
    origin: 'Des croyances nordiques (Norvège, Suède, Islande). Ils apparaissent dans les sagas du Moyen Âge, et les contes norvégiens recueillis par Asbjørnsen et Moe au XIXe siècle les ont rendus célèbres.',
    tip: 'Il est solide : 20 mots à abattre, mais tu as 5 vies. Garde ton calme jusqu\'au bout.' },
  { id: 'golem', name: 'Golem', from: 'Europe centrale', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'w',
    story: 'À Prague, au XVIe siècle, la communauté juive vivait dans la peur des persécutions. Le grand rabbin Loew aurait alors façonné, avec l\'argile de la rivière Vltava, un géant de terre. Il lui écrivit sur le front le mot hébreu emet, « vérité », et la créature s\'éveilla. Le golem était muet, immensément fort et obéissait à son maître : il protégeait le quartier juif et faisait les travaux les plus durs. Mais il grandissait sans cesse et devint incontrôlable. Pour l\'arrêter, le rabbin effaça la première lettre du mot, qui devint met, « mort ». Le golem retomba en poussière. On dit que ses restes reposent toujours dans le grenier de la vieille synagogue de Prague.',
    fact: 'Le mot gravé était « emet », « vérité » en hébreu. En effaçant la première lettre, on obtient « met » : « mort ».',
    meaning: 'Le golem pose une question très moderne : que se passe-t-il quand l\'homme crée un être qu\'il ne maîtrise plus ? On le considère souvent comme un ancêtre des robots et de Frankenstein. Il symbolise aussi la protection d\'une communauté menacée.',
    origin: 'Du folklore juif d\'Europe centrale. L\'idée d\'un être d\'argile animé par des mots sacrés est ancienne, mais la légende du golem de Prague s\'est surtout répandue au XIXe siècle.',
    tip: 'Le golem vit par l\'écrit : il ne se combat qu\'à vue. Un colosse, alors économise tes vies.' },
  { id: 'minotaure', name: 'Minotaure', from: 'Grèce', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['classic'], mode: 'both',
    story: 'Le roi Minos de Crète avait promis de sacrifier au dieu Poséidon un magnifique taureau blanc, mais il le garda pour lui. Pour le punir, le dieu rendit la reine Pasiphaé amoureuse de l\'animal, et de cette union naquit le Minotaure : un corps d\'homme surmonté d\'une tête de taureau. Il devint si féroce qu\'il fallut l\'enfermer. L\'architecte Dédale construisit pour lui le Labyrinthe, un palais aux couloirs si embrouillés que nul ne pouvait en sortir. Chaque année, Athènes devait envoyer en Crète sept jeunes gens et sept jeunes filles, livrés au monstre. Le héros Thésée finit par entrer dans le Labyrinthe, guidé par le fil que lui avait donné la princesse Ariane, et tua le Minotaure.',
    fact: 'Le « fil d\'Ariane » est devenu une expression pour parler de ce qui guide dans une situation compliquée.',
    meaning: 'Le Minotaure est né d\'une faute qui n\'était pas la sienne : la tricherie d\'un roi envers un dieu. Enfermé et nourri de victimes, il incarne la part bestiale cachée au cœur du pouvoir. Le Labyrinthe est resté le symbole de tout ce dont on ne trouve pas la sortie.',
    origin: 'De la mythologie grecque, liée à la Crète. On a longtemps rapproché le Labyrinthe de l\'immense palais de Cnossos, avec ses centaines de pièces et ses fresques de taureaux.',
    tip: 'Avance mot après mot, comme Thésée dans le Labyrinthe, sans perdre le fil.' },
  { id: 'harpie', name: 'Harpie', from: 'Grèce', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['chrono'], mode: 'e',
    story: 'Les harpies sont des créatures au visage de femme et au corps d\'oiseau de proie, avec des serres crochues. On les appelait « les ravisseuses ». Rapides comme le vent, elles fondaient sur leurs victimes et les emportaient. Les dieux s\'en servaient pour punir : le roi Phinée, qui avait trop dévoilé les secrets de l\'avenir, était condamné à ce que les harpies volent ou souillent sa nourriture à chaque repas, si bien qu\'il mourait de faim. Elles furent finalement chassées par deux héros ailés, les fils du vent du Nord, jusqu\'aux îles Strophades, où elles s\'installèrent.',
    fact: 'Leur nom vient du grec harpazein, « arracher, saisir ». Le grand aigle harpie d\'Amérique du Sud leur doit son nom.',
    meaning: 'Les harpies étaient d\'abord les esprits des vents de tempête, ceux qui emportent les choses et les gens sans laisser de trace. Quand quelqu\'un disparaissait soudain, on disait que les harpies l\'avaient enlevé. Avec le temps, elles sont devenues le symbole de la cupidité et de la méchanceté.',
    origin: 'De la mythologie grecque. Hésiode les cite vers 700 avant J.-C., et elles apparaissent dans l\'histoire des Argonautes partis chercher la Toison d\'or.',
    tip: 'On la repère à ses cris : elle ne se chasse qu\'à l\'ouïe, et il faut répondre vite.' },
  { id: 'tengu', name: 'Tengu', from: 'Japon', reg: 'Asie', rar: 'Commun', cond: 'always', rules: ['chrono'], mode: 'both',
    story: 'Les tengu vivent au cœur des montagnes boisées du Japon. Les plus anciens ressemblaient à des rapaces, avec un bec et des ailes. Plus tard, on les a représentés comme des hommes au visage rouge et au très long nez, vêtus en moines des montagnes. Fiers et farouches, ils punissent les moines vaniteux et égarent les voyageurs. On les accusait aussi d\'enlever des enfants, qui revenaient des jours plus tard sans souvenir. Mais ce sont aussi de redoutables guerriers : selon la légende, le roi des tengu aurait appris le maniement du sabre au jeune Minamoto no Yoshitsune, qui devint un célèbre héros.',
    fact: 'Les premiers tengu ressemblaient à des oiseaux de proie. Le long nez n\'est apparu qu\'au fil des siècles.',
    meaning: 'Le tengu incarne la montagne, sauvage et pleine de mystères, et l\'orgueil qu\'il faut savoir dompter. D\'abord démon, il est peu à peu devenu un protecteur et un maître d\'arts martiaux : la frontière entre monstre et esprit gardien est souvent mince au Japon.',
    origin: 'Du folklore japonais, avec des racines dans un démon chinois en forme de chien céleste. On les trouve dans les textes japonais dès le VIIIe siècle.',
    tip: 'Le tengu frappe vite : 10 secondes par mot. Ne réfléchis pas trop longtemps.' },
  { id: 'chupacabra', name: 'Chupacabra', from: 'Amérique latine', reg: 'Amériques', rar: 'Commun', cond: 'always', rules: ['classic'], mode: 'both',
    story: 'En 1995, à Porto Rico, des fermiers retrouvent des chèvres et des poules mortes d\'une étrange façon : vidées de leur sang par de petites plaies au cou. Une habitante raconte avoir vu la créature responsable : un être de la taille d\'un enfant, debout sur deux pattes, avec de grands yeux et des épines le long du dos. Les journaux l\'appellent chupacabras, « suceur de chèvres ». En quelques mois, les témoignages se multiplient au Mexique, au Chili, puis jusqu\'au sud des États-Unis. Là-bas, il change d\'apparence : on le décrit plutôt comme un animal à quatre pattes, ressemblant à un chien sans poils.',
    fact: 'C\'est l\'un des rares monstres « modernes » : sa légende a à peine trente ans.',
    meaning: 'Le chupacabra montre comment une légende peut naître et se répandre à l\'époque moderne, grâce aux journaux, à la télévision puis à Internet. Les animaux retrouvés au Texas se sont souvent révélés être des coyotes malades, qui avaient perdu leurs poils à cause de la gale.',
    origin: 'De Porto Rico, en 1995. C\'est l\'une des très rares créatures dont on connaît la date de naissance.',
    tip: 'Une chasse classique : sois aussi patient que les fermiers qui le guettent la nuit.' },
  { id: 'kelpie', name: 'Kelpie', from: 'Écosse', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['fragile'], mode: 'both',
    story: 'Le kelpie hante les rivières et les lochs d\'Écosse. Il prend la forme d\'un magnifique cheval, souvent noir ou gris, à la crinière toujours humide, qui attend sagement au bord de l\'eau. Il semble avoir besoin d\'un cavalier. Mais quiconque monte sur son dos ne peut plus en descendre : sa peau devient collante comme de la glu. Le kelpie se jette alors dans l\'eau profonde et noie son cavalier. On disait qu\'on entendait parfois sa queue frapper l\'eau comme un coup de tonnerre. Il pouvait aussi prendre forme humaine, mais il gardait des algues dans les cheveux, ce qui le trahissait.',
    fact: 'Deux sculptures géantes de têtes de chevaux, « The Kelpies », hautes de 30 mètres, se dressent près de Falkirk en Écosse.',
    meaning: 'Le kelpie mettait en garde contre les dangers des rivières en crue et des lochs aux eaux froides et profondes. Il apprenait aussi aux enfants à se méfier de ce qui paraît trop beau ou trop facile.',
    origin: 'Du folklore écossais. Le nom viendrait du gaélique cailpeach, « génisse » ou « poulain », et ses histoires sont surtout recueillies aux XVIIIe et XIXe siècles.',
    tip: 'Une seule erreur et il t\'entraîne au fond : tu n\'as qu\'une vie.' },
  { id: 'dokkaebi', name: 'Dokkaebi', from: 'Corée', reg: 'Asie', rar: 'Commun', cond: 'korean', rules: ['classic'], mode: 'both',
    story: 'Les dokkaebi sont des esprits espiègles, nés dit-on de vieux objets abandonnés : un balai usé, une chaussure, une louche, imprégnés pendant des années du contact des humains. La nuit, ils prennent vie. Ils adorent la musique, la fête, les jeux et surtout la lutte, et ils défient souvent les voyageurs à un combat. Ils possèdent un gourdin magique, le dokkaebi bangmangi : quand on le frappe sur le sol, il fait apparaître tout ce qu\'on souhaite, de l\'or comme de la nourriture. Ils récompensent les gens honnêtes et punissent les menteurs et les gourmands. Ils sont aussi un peu naïfs, et on peut parfois les duper.',
    fact: 'L\'équipe de football de Corée du Sud était surnommée les « Diables rouges », et leur symbole s\'inspire souvent du dokkaebi.',
    meaning: 'Le dokkaebi n\'est pas vraiment méchant : c\'est un farceur qui rétablit la justice à sa façon. Les contes où un homme bon est récompensé par eux, alors que son voisin avide est puni, enseignent la générosité et l\'honnêteté.',
    origin: 'Du folklore coréen, dans les contes populaires transmis à l\'oral depuis des siècles. Ils sont bien plus amusants que les démons des autres pays.',
    tip: 'Il n\'apparaît que si tu révises le coréen. Un combat classique, joue franc-jeu.' },
  { id: 'hydre', name: 'Hydre', from: 'Grèce', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['hydra'], mode: 'both',
    story: 'L\'hydre de Lerne vivait dans les marais près d\'Argos, en Grèce. C\'était un serpent d\'eau gigantesque à plusieurs têtes, neuf selon la plupart des récits. Son haleine était si toxique qu\'elle tuait ceux qui s\'approchaient, et son sang était un poison mortel. Pire encore, chaque fois qu\'on lui coupait une tête, deux autres repoussaient à la place. Pour son deuxième travail, Hercule l\'affronta. Son neveu Iolaos eut l\'idée de brûler chaque cou tranché avec une torche, pour empêcher les têtes de repousser. La dernière tête, immortelle, fut enterrée sous un énorme rocher. Hercule trempa ensuite ses flèches dans le sang de l\'hydre, qui devinrent mortelles.',
    fact: 'Les biologistes ont donné le nom d\'hydre à un minuscule animal d\'eau douce capable de se régénérer entièrement.',
    meaning: 'L\'hydre est le symbole d\'un problème qui s\'aggrave quand on l\'attaque mal : on l\'utilise encore aujourd\'hui pour parler d\'un fléau qui renaît sans cesse. Certains y voient aussi le souvenir des marais insalubres qu\'il fallait assécher pour vivre.',
    origin: 'De la mythologie grecque. Le marais de Lerne existe vraiment, près de la ville d\'Argos, dans le Péloponnèse.',
    tip: 'Chaque erreur fait pousser une tête, donc un mot de plus. Évite les fautes dès le début.' },
  { id: 'meduse', name: 'Méduse', from: 'Grèce', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['chrono'], mode: 'w',
    story: 'Méduse n\'est pas née monstre. C\'était une jeune femme d\'une beauté célèbre, prêtresse dans le temple d\'Athéna, et sa chevelure faisait l\'admiration de tous. Le dieu de la mer, Poséidon, la prit de force dans le temple même. Athéna, furieuse que son sanctuaire soit souillé, s\'en prit à Méduse : elle changea ses cheveux en serpents et maudit son regard, qui changerait désormais en pierre tout être vivant. Rejetée de tous, Méduse s\'exila au bout du monde avec ses deux sœurs Gorgones. Son repaire se remplit peu à peu de statues : les hommes venus la tuer, figés pour toujours. Elle finit décapitée par Persée. Mais même morte, sa tête garda son pouvoir, et Athéna la fixa sur son bouclier.',
    fact: 'De son sang serait né Pégase, le cheval ailé.',
    meaning: 'L\'histoire de Méduse est celle d\'une victime devenue monstre, et c\'est pour ça qu\'on la relit beaucoup aujourd\'hui. Pour les Grecs, sa tête était surtout une protection : on la peignait sur les boucliers et les portes pour faire fuir le mal.',
    origin: 'De la mythologie grecque. Le poète Hésiode la cite vers 700 avant J.-C., et le Romain Ovide raconte son histoire complète dans les Métamorphoses, au Ier siècle.',
    tip: 'On l\'affronte du regard, donc à vue, et vite : 10 secondes par mot avant d\'être pétrifié.' },
  { id: 'sphinx', name: 'Sphinx', from: 'Égypte', reg: 'Afrique et Moyen-Orient', rar: 'Rare', cond: 'always', rules: ['strict'], mode: 'w',
    story: 'Le sphinx est une créature au corps de lion et à tête humaine. En Égypte, c\'est un gardien bienveillant : il représente le pharaon, avec la force du lion et l\'intelligence de l\'homme, et veille sur les tombeaux et les temples. Le plus célèbre veille encore aujourd\'hui sur les pyramides de Gizeh. Les Grecs en ont fait un monstre bien plus inquiétant, avec des ailes et un visage de femme. Installé près de la ville de Thèbes, il posait une énigme à chaque passant : « Quel être marche à quatre pattes le matin, sur deux à midi et sur trois le soir ? » Ceux qui se trompaient étaient dévorés. Quand Œdipe répondit enfin « l\'homme », le sphinx se jeta du haut de son rocher.',
    fact: 'Le grand Sphinx de Gizeh, en Égypte, mesure 73 mètres de long et a plus de 4 500 ans.',
    meaning: 'Le sphinx est le gardien de ce qui est secret : il faut être sage pour passer. En Égypte, il protège ; en Grèce, il met à l\'épreuve. Dans les deux cas, il rappelle que l\'intelligence vaut plus que la force.',
    origin: 'D\'Égypte ancienne, où on en sculpte depuis plus de 4 500 ans, puis de la mythologie grecque, qui en a fait le monstre de l\'énigme.',
    tip: 'Le maître des énigmes écrites ne tolère aucune faute : orthographe parfaite exigée.' },
  { id: 'djinn', name: 'Djinn', from: 'Arabie', reg: 'Afrique et Moyen-Orient', rar: 'Rare', cond: 'always', rules: ['trick'], mode: 'both',
    story: 'Selon la tradition arabe, Dieu a créé les anges avec de la lumière, les hommes avec de la terre, et les djinns avec un feu sans fumée. Ils vivent dans un monde parallèle au nôtre, invisibles la plupart du temps, surtout dans les déserts, les ruines et les lieux abandonnés. Comme les humains, ils mangent, se marient, ont des enfants et peuvent être bons ou mauvais. Ils sont capables de prendre toutes les formes : un animal, un tourbillon de sable, un être humain. Les plus puissants peuvent être enfermés dans des objets et forcés de servir celui qui les libère, mais leurs vœux sont souvent pleins de pièges.',
    fact: 'Le mot « génie » en français vient en partie de « djinn », par les traductions des Mille et Une Nuits.',
    meaning: 'Les djinns expliquaient tout ce qui semblait mystérieux dans le désert : les mirages, les bruits de la nuit, les tempêtes de sable soudaines. Ce sont des êtres libres et ambigus, ni anges ni démons, qui rappellent qu\'il existe un monde caché à côté du nôtre.',
    origin: 'D\'Arabie, avant même l\'islam, puis du Coran qui en parle à plusieurs reprises. Les Mille et Une Nuits les ont fait connaître dans le monde entier.',
    tip: 'Le djinn brouille les pistes : la langue de réponse change à chaque mot. Lis bien la consigne.' },
  { id: 'babayaga', name: 'Baba Yaga', from: 'Russie', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['greedy'], mode: 'both',
    story: 'Baba Yaga est une vieille sorcière qui vit au plus profond de la forêt russe, dans une cabane perchée sur des pattes de poule. La cabane tourne sur elle-même et ne présente sa porte qu\'à ceux qui connaissent la formule. Autour, la palissade est faite d\'os humains et surmontée de crânes aux yeux brillants. Baba Yaga a des dents de fer, un nez si long qu\'il touche le plafond, et elle se déplace dans un mortier en bois en ramant avec un pilon, effaçant ses traces avec un balai. Elle dévore les imprudents. Mais elle peut aussi aider les héros courageux et polis, en leur confiant des objets magiques ou des conseils précieux.',
    fact: 'Le compositeur Moussorgski lui a consacré un morceau célèbre : « La Cabane sur des pattes de poule ».',
    meaning: 'Baba Yaga est un personnage double : terrifiante, mais aussi juste et sage. Aller chez elle est une épreuve qui fait grandir, et ceux qui la traversent avec courage et respect en ressortent changés. Elle incarne la forêt, la nature et peut-être une très ancienne déesse.',
    origin: 'Du folklore slave, surtout russe. Elle est célèbre grâce aux contes recueillis par Alexandre Afanassiev au XIXe siècle, comme Vassilissa la Très Belle.',
    tip: 'Chaque erreur la nourrit : le mot raté revient à la fin du combat.' },
  { id: 'gumiho', name: 'Gumiho', from: 'Corée', reg: 'Asie', rar: 'Rare', cond: 'korean', rules: ['trick'], mode: 'both',
    story: 'Un renard qui vit très longtemps accumule une force magique. Au bout de mille ans, il a neuf queues et peut prendre forme humaine, le plus souvent celle d\'une jeune femme d\'une grande beauté. Mais il reste à moitié bête et rêve de devenir humain pour de bon. Pour y parvenir, il doit dévorer le foie ou le cœur de cent hommes, ou, selon une autre version, ne tuer personne pendant mille jours. Dans la plupart des contes, il échoue au dernier moment : son secret est découvert juste avant la fin, et il reste renard à jamais.',
    fact: 'Le gumiho est l\'héroïne de nombreuses séries coréennes, souvent en personnage attachant plutôt qu\'en monstre.',
    meaning: 'Le gumiho met en garde contre les apparences trompeuses. Mais c\'est aussi une histoire triste : celle d\'une créature qui veut changer de nature sans jamais y parvenir. C\'est sans doute pour ça qu\'elle touche autant aujourd\'hui.',
    origin: 'Le renard à neuf queues apparaît en Chine il y a plus de 2 000 ans, dans le Classique des monts et des mers. La Corée en a fait sa propre version, plus sombre, transmise par les contes populaires.',
    tip: 'Il n\'apparaît que si tu révises le coréen, et il change la langue de réponse à chaque mot.' },
  { id: 'banshee', name: 'Banshee', from: 'Irlande', reg: 'Europe', rar: 'Nocturne', cond: 'night', rules: ['fragile'], mode: 'e',
    story: 'La banshee est une fée qui annonce la mort. On l\'entend avant de la voir : un long cri, un gémissement déchirant qui monte dans la nuit, près de la maison d\'une famille. Ce cri signifie qu\'un de ses membres va bientôt mourir. Certains l\'ont vue : une femme aux longs cheveux blancs ou roux, vêtue de gris ou de vert, les yeux rouges d\'avoir trop pleuré. Parfois, on la surprend au bord d\'une rivière, lavant les vêtements tachés de sang de celui qui va mourir. On disait qu\'elle ne suivait que les familles irlandaises les plus anciennes, celles dont le nom commence par « O\' » ou « Mac ».',
    fact: 'En gaélique, son nom s\'écrit bean sí, « femme du tertre des fées ».',
    meaning: 'La banshee n\'est pas méchante : elle ne tue pas, elle prévient et pleure. Elle rappelle une vieille coutume irlandaise : les pleureuses, des femmes qu\'on payait pour chanter des lamentations aux enterrements. Elle accompagne les familles dans le deuil.',
    origin: 'Du folklore irlandais, et aussi écossais. Les récits de banshees sont très anciens et ont été beaucoup recueillis aux XVIIIe et XIXe siècles.',
    tip: 'On l\'entend avant de la voir : elle ne se chasse qu\'à l\'ouïe, la nuit, et sans droit à l\'erreur.' },
  { id: 'strigoi', name: 'Strigoï', from: 'Roumanie', reg: 'Europe', rar: 'Nocturne', cond: 'night', rules: ['greedy'], mode: 'both',
    story: 'En Roumanie, on croyait que certains morts ne reposaient pas en paix. Ceux qui avaient vécu une vie mauvaise, été maudits, ou étaient nés avec une coiffe sur la tête pouvaient devenir des strigoï. La nuit, ils sortent de leur tombe pour rendre visite à leurs proches, boire leur sang ou leur voler leur force vitale. Les victimes s\'affaiblissent jour après jour. Certains strigoï seraient même vivants : des sorciers qui quittent leur corps pendant leur sommeil. Pour se protéger, on accrochait de l\'ail aux portes et aux fenêtres, et on retournait parfois les tombes pour planter un pieu dans le cœur du mort.',
    fact: 'Ces légendes roumaines ont inspiré l\'écrivain Bram Stoker pour son roman Dracula.',
    meaning: 'Les strigoï permettaient d\'expliquer les épidémies qui tuaient plusieurs membres d\'une même famille, les unes après les autres. Ils montrent aussi la peur que les morts ne soient pas vraiment partis, et les rites très stricts qu\'on suivait pour les enterrer.',
    origin: 'Du folklore roumain. Le nom viendrait du latin strix, une chouette de nuit qui suçait le sang selon les Romains.',
    tip: 'Il ne sort que la nuit, et chaque erreur le nourrit : le mot raté revient.' },
  { id: 'loupgarou', name: 'Loup-garou', from: 'Europe', reg: 'Europe', rar: 'Nocturne', cond: 'fullmoon', rules: ['colossus', 'regen'], mode: 'both',
    story: 'Le loup-garou est un homme qui se transforme en loup. Les nuits de pleine lune, il est pris d\'une fièvre étrange : son corps se couvre de poils, ses dents s\'allongent et il part courir les campagnes, attaquant les troupeaux et parfois les hommes. Au matin, il redevient humain, épuisé, souvent sans aucun souvenir. On le devenait de bien des façons : par une malédiction, par la morsure d\'un autre loup-garou, ou par un pacte avec le diable. On disait qu\'on pouvait le reconnaître le jour à des sourcils qui se rejoignent ou à des poils sous la langue. Pour le délivrer, il fallait le blesser et faire couler son sang.',
    fact: 'La peur des loups-garous a donné lieu à de vrais procès en France aux XVIe et XVIIe siècles.',
    meaning: 'Le loup-garou est né de la vraie peur des loups, qui attaquaient les troupeaux et parfois les gens. Il exprime aussi l\'idée que chacun cache une part sauvage et dangereuse, qui peut se réveiller. En France, des hommes ont même été jugés et condamnés comme loups-garous.',
    origin: 'De toute l\'Europe, depuis l\'Antiquité : les Grecs racontaient déjà l\'histoire du roi Lycaon changé en loup. Le mot « garou » vient du francique werwolf, « homme-loup ».',
    tip: 'Seulement les soirs de pleine lune : un colosse rapide. Une vraie épreuve d\'endurance.' },
  { id: 'yeti', name: 'Yéti', from: 'Himalaya', reg: 'Asie', rar: 'Saisonnier', cond: 'winter', rules: ['colossus'], mode: 'both',
    story: 'Le yéti vivrait dans les neiges éternelles de l\'Himalaya. Les sherpas et les habitants des montagnes le décrivent comme un grand singe couvert de poils roux ou gris, qui marche debout et pousse des cris aigus. On ne le voit presque jamais, mais on retrouve ses traces : d\'immenses empreintes de pieds dans la neige. Dans les traditions locales, il est parfois dangereux, parfois simplement farouche, et on raconte aux enfants de ne pas s\'aventurer seuls trop haut. Des monastères bouddhistes ont même prétendu conserver des reliques : un scalp ou une main de yéti.',
    fact: 'En 1951, l\'alpiniste Eric Shipton a photographié une empreinte de 33 cm, qui a fait le tour du monde.',
    meaning: 'Le yéti incarne le mystère des hautes montagnes, là où l\'homme est fragile et où tout peut exister. Les reliques analysées se sont révélées être des poils d\'ours ou de chèvre sauvage, mais la légende continue de fasciner les explorateurs.',
    origin: 'De l\'Himalaya, au Népal et au Tibet. Il est connu en Occident depuis les années 1920-1950, grâce aux expéditions d\'alpinistes, qui l\'ont surnommé « l\'abominable homme des neiges ».',
    tip: 'Il ne se montre qu\'en hiver : un colosse, alors garde tes forces.' },
  { id: 'wendigo', name: 'Wendigo', from: 'Amérique du Nord', reg: 'Amériques', rar: 'Saisonnier', cond: 'winternight', rules: ['greedy'], mode: 'both',
    story: 'Dans les forêts glacées du nord de l\'Amérique, quand l\'hiver est trop long et que la nourriture vient à manquer, rôde le wendigo. C\'est un être immense et décharné, aux os qui percent la peau, aux lèvres déchiquetées, qui sent la mort. Autrefois, c\'était un homme. Poussé par la famine, il a mangé de la chair humaine, et cette faute l\'a transformé. Depuis, il a toujours faim : plus il dévore, plus il grandit, et plus sa faim grandit avec lui. Il ne sera jamais rassasié. On dit qu\'il peut aussi posséder un humain et le changer peu à peu en wendigo.',
    fact: 'Pour ces peuples, le wendigo symbolise aussi l\'égoïsme et l\'avidité qui menacent une communauté en temps de famine.',
    meaning: 'Le wendigo était un avertissement contre le pire des tabous, le cannibalisme, que la famine pouvait pousser à commettre. Il symbolise aussi l\'égoïsme et l\'avidité qui détruisent une communauté quand chacun ne pense qu\'à soi.',
    origin: 'Des peuples algonquiens d\'Amérique du Nord (comme les Ojibwés et les Cris), dans les régions des Grands Lacs et du Canada.',
    tip: 'Uniquement les nuits d\'hiver, et chaque erreur le nourrit.' },
  { id: 'cavalier', name: 'Cavalier sans tête', from: 'Irlande et Amérique', reg: 'Europe', rar: 'Saisonnier', cond: 'halloween', rules: ['fragile', 'chrono'], mode: 'both',
    story: 'Le cavalier sans tête parcourt les routes la nuit, monté sur un cheval noir aux yeux de feu. En Irlande, on l\'appelle le Dullahan : il tient sa propre tête sous le bras, une tête au sourire effrayant qui voit dans le noir, et il fouette son cheval avec une colonne vertébrale humaine. Quand il s\'arrête devant une maison et prononce un nom, la personne meurt aussitôt. Aucune porte fermée ne peut l\'arrêter. Sa seule faiblesse : l\'or, qu\'il craint. En Amérique, le cavalier est devenu le fantôme d\'un soldat dont la tête a été emportée par un boulet de canon, et qui chevauche chaque nuit à sa recherche.',
    fact: 'La Légende de Sleepy Hollow, écrite par Washington Irving en 1820, est l\'une des plus anciennes histoires de fantômes américaines.',
    meaning: 'Le cavalier sans tête est un messager de la mort : il ne combat pas, il vient chercher. Ce mélange de cavalier fantôme et de tête coupée fait de lui l\'une des images les plus fortes de l\'horreur, et un personnage central d\'Halloween.',
    origin: 'Du folklore irlandais (le Dullahan), puis américain avec La Légende de Sleepy Hollow de Washington Irving, en 1820.',
    tip: 'Seulement la semaine d\'Halloween : rapide et sans pitié, une seule vie et 10 secondes par mot.' },
  { id: 'krampus', name: 'Krampus', from: 'Alpes', reg: 'Europe', rar: 'Saisonnier', cond: 'december', rules: ['hydra'], mode: 'both',
    story: 'Dans les Alpes, saint Nicolas ne voyage pas seul. Le soir du 5 décembre, il est accompagné du Krampus, une créature mi-chèvre mi-démon, couverte de poils noirs, avec de grandes cornes, des sabots fendus et une longue langue rouge. Il fait tinter des chaînes et des cloches et porte une poignée de branches de bouleau. Pendant que saint Nicolas récompense les enfants sages, le Krampus s\'occupe des autres : il les menace avec ses verges et, dans les histoires les plus terribles, il les fourre dans sa hotte pour les emporter.',
    fact: 'Chaque 5 décembre, des défilés de Krampus, les Krampuslauf, ont encore lieu en Autriche.',
    meaning: 'Le Krampus forme un couple avec saint Nicolas : la récompense d\'un côté, la punition de l\'autre. Il sert à faire peur aux enfants pour qu\'ils soient sages. Ses racines remontent sans doute à de vieilles fêtes d\'hiver d\'avant le christianisme, où des hommes masqués chassaient les mauvais esprits.',
    origin: 'Des Alpes : Autriche, Bavière, Tyrol. La tradition est très ancienne, et le Krampus est devenu célèbre sur les cartes de vœux du XIXe siècle.',
    tip: 'Uniquement en décembre : chaque erreur ajoute un mot au combat.' },
  { id: 'kraken', name: 'Kraken', from: 'Scandinavie', reg: 'Europe', rar: 'Légendaire', cond: 'always', rules: ['colossus', 'hydra'], mode: 'both',
    story: 'Au large de la Norvège et de l\'Islande vivrait un monstre si énorme qu\'on le prend pour une île. Le kraken flotte immobile, et des marins seraient même descendus sur son dos pour y allumer un feu, avant qu\'il ne plonge. Quand il remonte, il soulève de tels courants qu\'il peut engloutir un navire. Ses bras immenses, garnis de ventouses, enlacent les coques et les entraînent par le fond. Les pêcheurs disaient pourtant qu\'il attirait aussi les poissons : quand la pêche était exceptionnelle, c\'est que le kraken dormait juste en dessous.',
    fact: 'Le calmar géant, qui a sans doute inspiré la légende, n\'a été filmé vivant pour la première fois qu\'en 2004.',
    meaning: 'Le kraken donnait une forme aux dangers inconnus de la haute mer, à ses tourbillons et à ses naufrages inexpliqués. Il a sans doute été inspiré par de vrais calmars géants, qui peuvent dépasser 12 mètres, vus échoués ou à la surface.',
    origin: 'Du folklore scandinave. Il est décrit en détail en 1752 par l\'évêque norvégien Erik Pontoppidan, et ressemble à des monstres marins plus anciens des sagas islandaises.',
    tip: 'Une rencontre très rare. Colosse et hydre à la fois : le combat le plus long de la mer.' },
  { id: 'dragon', name: 'Dragon', from: 'Partout dans le monde', reg: 'Monde entier', rar: 'Légendaire', cond: 'always', rules: ['colossus', 'rush', 'regen'], mode: 'both',
    story: 'On trouve des dragons sur presque tous les continents. En Europe, c\'est un immense reptile ailé qui crache du feu, garde un trésor au fond de sa grotte et terrorise les villages, jusqu\'à ce qu\'un chevalier vienne l\'affronter, comme saint Georges. En Chine, au contraire, le dragon est sans ailes, long comme un serpent, et c\'est un être sage et bienfaisant : il commande la pluie, les rivières et les mers, et il était le symbole de l\'empereur. Entre ces deux extrêmes, chaque peuple a son dragon : serpent géant, gardien de sources, ou monstre de la fin du monde.',
    fact: 'Le mot vient du grec drakôn, « serpent », de la même racine que « voir clairement » : le dragon est celui qui voit tout.',
    meaning: 'Le dragon rassemble ce qui impressionnait le plus les hommes : le serpent, le rapace, le feu et l\'eau. En Occident, il représente le mal et le chaos qu\'il faut vaincre ; en Asie, la force de la nature qu\'il faut respecter. Les ossements géants découverts par les anciens ont sans doute nourri sa légende.',
    origin: 'De partout dans le monde : Mésopotamie, Chine, Grèce, Scandinavie… C\'est l\'une des créatures légendaires les plus anciennes et les plus répandues.',
    tip: 'Le plus rare de tous. 20 mots, 10 secondes chacun : il faudra être au sommet.' },
  { id: 'oni', name: 'Oni', from: 'Japon', reg: 'Asie', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Les oni sont des démons géants au corps rouge ou bleu, avec des cornes sur le front, des crocs et une crinière ébouriffée. Ils portent un pagne en peau de tigre et une lourde massue en fer garnie de pointes. Ils vivent dans les montagnes, sur des îles lointaines ou en enfer, où ils punissent les âmes des méchants. Ils descendent parfois dans les villages pour piller, enlever des gens et semer la terreur. Dans le célèbre conte de Momotarō, un garçon né d\'une pêche part avec un chien, un singe et un faisan pour vaincre les oni de l\'île d\'Onigashima et ramener leur trésor.',
    fact: 'Chaque année au Setsubun, les Japonais lancent des haricots en criant « Oni wa soto ! », « Les démons dehors ! ».',
    meaning: 'Les oni incarnent les malheurs qui viennent de l\'extérieur : maladies, catastrophes, bandits. Les chasser, c\'est protéger la maison. Avec le temps, certains sont devenus plus sympathiques, voire protecteurs, comme les tuiles d\'oni placées sur les toits des temples.',
    origin: 'Du folklore japonais, avec des influences du bouddhisme venu de Chine et d\'Inde. On parle d\'eux dans les textes japonais depuis plus de mille ans.',
    tip: 'Fort comme un colosse : 20 mots, 5 vies.' },
  { id: 'cyclope', name: 'Cyclope', from: 'Grèce', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Les Cyclopes sont des géants qui n\'ont qu\'un seul œil, au milieu du front. Les premiers étaient des forgerons de génie : ils fabriquèrent pour Zeus la foudre, pour Poséidon le trident, et pour Hadès un casque d\'invisibilité. D\'autres Cyclopes, plus sauvages, vivaient sur une île en élevant des moutons. Le plus célèbre, Polyphème, enferma Ulysse et ses compagnons dans sa grotte et commença à les dévorer. Ulysse l\'enivra avec du vin, puis lui creva son œil unique avec un pieu brûlant, et s\'échappa caché sous le ventre des moutons.',
    fact: 'Pour le tromper, Ulysse s\'était présenté sous le nom de « Personne ». Quand Polyphème appela à l\'aide, il cria : « Personne m\'attaque ! »',
    meaning: 'Le Cyclope est la force brute sans ruse : immensément fort, mais vaincu par l\'intelligence. Les forgerons, eux, montrent le respect des Grecs pour l\'artisanat du métal. Ils auraient pu être inspirés par des crânes d\'éléphants nains fossiles, dont le grand trou nasal ressemble à une orbite unique.',
    origin: 'De la mythologie grecque, chez Hésiode et dans L\'Odyssée d\'Homère, vers le VIIIe siècle avant J.-C.',
    tip: 'Un colosse : ne te laisse pas impressionner par sa taille.' },
  { id: 'bigfoot', name: 'Bigfoot', from: 'Amérique du Nord', reg: 'Amériques', rar: 'Commun', cond: 'always', rules: ['classic'], mode: 'both',
    story: 'Dans les forêts profondes du nord-ouest des États-Unis et du Canada vivrait une créature immense, mi-homme mi-singe. Bigfoot, aussi appelé Sasquatch, mesurerait plus de deux mètres, couvert de poils bruns, avec une odeur très forte. Il est timide et solitaire : il fuit les humains et ne laisse derrière lui que des cris dans la nuit, des branches cassées et surtout d\'énormes empreintes de pieds, qui lui ont donné son nom. Des milliers de personnes affirment l\'avoir aperçu, mais personne n\'a jamais trouvé de preuve définitive.',
    fact: 'Un célèbre film de 1967, tourné en Californie, montre une silhouette poilue qui traverse un ruisseau. On en débat encore aujourd\'hui.',
    meaning: 'Bigfoot montre notre envie de croire qu\'il reste des mystères dans la nature, même aujourd\'hui. Plusieurs empreintes célèbres se sont révélées être des canulars, mais la légende continue d\'attirer des chasseurs passionnés.',
    origin: 'Des légendes de plusieurs peuples autochtones d\'Amérique du Nord, qui parlaient d\'hommes sauvages des bois. Le nom Sasquatch vient de la langue halkomelem. Le surnom Bigfoot date de 1958.',
    tip: 'Discret mais coriace : un combat classique.' },
  { id: 'bunyip', name: 'Bunyip', from: 'Australie', reg: 'Océanie', rar: 'Commun', cond: 'always', rules: ['classic'], mode: 'both',
    story: 'Le bunyip hante les billabongs, les marécages et les points d\'eau d\'Australie. Personne ne le décrit de la même façon : certains lui donnent une tête de chien et des défenses, d\'autres un long cou, des nageoires ou une fourrure épaisse. Tous s\'accordent sur un point : son cri terrible, un mugissement qui résonne la nuit au-dessus de l\'eau. Il se cache au fond des mares et attaque ceux qui s\'approchent trop près, surtout les femmes et les enfants, qu\'il entraîne sous l\'eau pour les dévorer.',
    fact: 'Au XIXe siècle, des colons ont exposé des os étranges en affirmant qu\'il s\'agissait d\'un crâne de bunyip.',
    meaning: 'Le bunyip apprenait aux enfants à se méfier des points d\'eau, vitaux mais dangereux dans un pays sec. Certains pensent qu\'il garde le souvenir de grands animaux disparus d\'Australie, ou qu\'il était inspiré par des phoques égarés dans les rivières.',
    origin: 'Des peuples aborigènes d\'Australie, qui en parlent depuis très longtemps. Les colons européens ont adopté la légende au XIXe siècle.',
    tip: 'Un combat classique, mais garde l\'œil ouvert : il frappe depuis l\'eau.' },
  { id: 'mokele', name: 'Mokèlé-mbembé', from: 'Afrique centrale', reg: 'Afrique et Moyen-Orient', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Au cœur des marais du bassin du Congo vivrait une créature gigantesque. Les habitants l\'appellent Mokèlé-mbembé, « celui qui arrête le cours des rivières ». Il aurait la taille d\'un éléphant, un long cou, une petite tête et une longue queue. Il vivrait dans les eaux profondes, sortant rarement, et se nourrirait de plantes. Pourtant, il serait très dangereux : il renverserait les pirogues et tuerait les hippopotames qui s\'aventurent sur son territoire. Les villageois évitent certaines portions de rivière à cause de lui.',
    fact: 'Certains chasseurs de mystères pensent qu\'il pourrait s\'agir d\'un dinosaure survivant, ce que les scientifiques jugent impossible.',
    meaning: 'Le Mokèlé-mbembé incarne la puissance mystérieuse d\'une forêt immense et encore peu explorée. Pour les habitants, c\'est un esprit des eaux à respecter.',
    origin: 'Des récits des peuples du bassin du Congo. Les Occidentaux en entendent parler à partir du début du XXe siècle, et de nombreuses expéditions sont parties à sa recherche.',
    tip: 'Massif comme un colosse : prends ton temps, mot après mot.' },
  { id: 'manticore', name: 'Manticore', from: 'Perse', reg: 'Afrique et Moyen-Orient', rar: 'Rare', cond: 'always', rules: ['strict'], mode: 'both',
    story: 'La manticore vivrait dans les forêts lointaines de l\'Inde. Elle a le corps d\'un lion rouge, une tête presque humaine aux yeux bleus et à la bouche garnie de trois rangées de dents, et une queue de scorpion. Sa queue est hérissée de dards empoisonnés qu\'elle peut lancer comme des flèches, dans toutes les directions. Sa voix ressemble à un mélange de flûte et de trompette. Elle chasse les hommes et les dévore entiers, sans rien laisser, pas même les vêtements. Elle était si redoutable que même les éléphants la craignaient.',
    fact: 'Elle a été décrite par le médecin grec Ctésias vers 400 avant notre ère, qui avait vécu à la cour du roi de Perse.',
    meaning: 'La manticore est née des récits de voyageurs qui décrivaient des pays lointains en mélangeant ce qu\'ils avaient vu et entendu. Elle vient peut-être d\'une description déformée du tigre, l\'animal le plus redouté d\'Inde. Elle est devenue au Moyen Âge un symbole de la tyrannie et du mal.',
    origin: 'De Perse et d\'Inde, rapportée aux Grecs par le médecin Ctésias vers 400 avant J.-C. Son nom vient du persan et signifie « mangeuse d\'hommes ».',
    tip: 'Aucune faute tolérée : vise juste, comme son dard.' },
  { id: 'basilic', name: 'Basilic', from: 'Europe médiévale', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['chrono'], mode: 'both',
    story: 'Le basilic est le « roi des serpents ». Petit, mais terrifiant, il porte sur la tête une crête en forme de couronne. Son pouvoir est effroyable : son regard tue, son souffle brûle l\'herbe et brise les pierres, et son venin est si puissant qu\'il remonte le long d\'une lance pour tuer le chevalier qui le frappe. Selon les récits du Moyen Âge, il naît d\'un œuf pondu par un vieux coq et couvé par un crapaud. Seuls deux êtres peuvent le vaincre : la belette, immunisée contre son venin, et le coq, dont le chant le fait mourir. On pouvait aussi le tuer en lui tendant un miroir.',
    fact: 'Un vrai lézard d\'Amérique du Sud porte son nom : le basilic, capable de courir sur l\'eau.',
    meaning: 'Le basilic incarnait le mal absolu, celui qu\'on ne peut même pas regarder. Il servait à expliquer certaines morts soudaines ou les puits empoisonnés. Au Moyen Âge, il est devenu un symbole du péché et du diable.',
    origin: 'De l\'Antiquité romaine, où Pline l\'Ancien le décrit au Ier siècle. Les bestiaires du Moyen Âge l\'ont rendu beaucoup plus effrayant.',
    tip: 'Ne croise pas son regard trop longtemps : 10 secondes par mot.' },
  { id: 'haetae', name: 'Haetae', from: 'Corée', reg: 'Asie', rar: 'Rare', cond: 'korean', rules: ['classic'], mode: 'both',
    story: 'Le haetae est un animal sacré qui ressemble à un lion, au corps couvert d\'écailles, avec parfois une corne sur la tête et une clochette au cou. Il vit près de l\'eau et il a un pouvoir extraordinaire : il sait toujours qui dit vrai. Quand deux personnes se disputent, il encorne le coupable. On disait aussi qu\'il dévore le feu. Pour cette raison, on a placé des statues de haetae devant le palais de Gyeongbokgung, à Séoul, pour protéger la ville des incendies et garantir la justice du roi.',
    fact: 'Le haetae est aujourd\'hui le symbole officiel de la ville de Séoul.',
    meaning: 'Le haetae est le gardien de la justice et de la vérité. Il protège aussi contre le feu, très redouté dans les villes coréennes construites en bois. C\'est un monstre bienveillant, qui veille plutôt qu\'il ne menace.',
    origin: 'De Chine, où il s\'appelle xiezhi, puis de Corée qui en a fait un symbole de protection. Ses statues gardent les palais royaux de Séoul depuis la dynastie Joseon.',
    tip: 'Il n\'apparaît que si tu révises le coréen. Combat classique : sois juste.' },
  { id: 'jiangshi', name: 'Jiangshi', from: 'Chine', reg: 'Asie', rar: 'Nocturne', cond: 'night', rules: ['chrono'], mode: 'w',
    story: 'Le jiangshi est un mort qui revient à la vie. Il porte encore les habits de cérémonie de la dynastie Qing, avec un long manteau et un chapeau. Comme son corps est raide, il ne peut pas marcher : il avance en sautant, les bras tendus devant lui. Il ne voit pas, mais il sent la respiration des vivants et les poursuit pour aspirer leur énergie vitale. On le reconnaît à sa peau verdâtre et à son odeur. Pour l\'arrêter, les prêtres taoïstes collent sur son front un talisman en papier jaune, couvert d\'écritures sacrées. On le repousse aussi avec du riz gluant, des miroirs ou en retenant son souffle.',
    fact: 'Les films de jiangshi, mélange de kung-fu et de comédie d\'horreur, ont fait fureur à Hong Kong dans les années 1980.',
    meaning: 'Le jiangshi vient d\'une coutume réelle : quand quelqu\'un mourait loin de chez lui, on ramenait son corps à pied dans son village, parfois sur de longues distances. Les porteurs voyageaient de nuit, et les silhouettes qui semblaient sauter dans l\'obscurité auraient fait naître la légende.',
    origin: 'Du folklore chinois, surtout du sud de la Chine. Il est très populaire depuis le XVIIIe siècle et a ensuite été rendu célèbre par le cinéma de Hong Kong.',
    tip: 'Il obéit aux talismans écrits : à vue, la nuit, et vite.' },
  { id: 'nian', name: 'Nian', from: 'Chine', reg: 'Asie', rar: 'Saisonnier', cond: 'lunarny', rules: ['hydra'], mode: 'both',
    story: 'Le Nian est un monstre qui vit au fond de la mer ou dans les montagnes. Une fois par an, à la fin de l\'hiver, il sort de sa cachette affamé. Il descend dans les villages, dévore les récoltes, le bétail et même les habitants, surtout les enfants. Les villageois fuyaient chaque année dans les montagnes. Un jour, un vieil homme mystérieux resta au village. Il accrocha des papiers rouges aux portes, alluma des feux et fit exploser des bambous dans le feu. Le Nian, terrifié par le rouge, le bruit et la lumière, s\'enfuit. Depuis, chaque Nouvel An, on recommence pour le chasser.',
    fact: 'En chinois, « fêter le Nouvel An » se dit guo nian, « passer le Nian ».',
    meaning: 'La légende du Nian explique les traditions du Nouvel An chinois : les décorations rouges, les pétards, les lanternes et les feux d\'artifice. Elle célèbre aussi la fin de l\'hiver, la saison la plus dure, et l\'espoir d\'une nouvelle année.',
    origin: 'Du folklore chinois. C\'est un conte populaire lié au Nouvel An lunaire, raconté aux enfants depuis des générations.',
    tip: 'Il n\'apparaît qu\'autour du Nouvel An lunaire, et chaque erreur ajoute un mot.' },
  { id: 'griffon', name: 'Griffon', from: 'Grèce et Perse', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['chrono'], mode: 'both',
    story: 'Le griffon a le corps d\'un lion et la tête, les ailes et les serres d\'un aigle. Il réunit le roi des animaux et le roi des oiseaux. On disait qu\'il vivait dans les montagnes lointaines du nord, en Asie, où il gardait jalousement des mines d\'or. Il construisait son nid avec de l\'or et attaquait sans pitié les chercheurs qui s\'en approchaient. Il était assez fort pour emporter un cheval dans ses serres. Les Grecs racontaient même qu\'un peuple d\'hommes à un œil, les Arimaspes, se battait sans cesse contre les griffons pour leur voler leur or.',
    fact: 'Certains historiens pensent que des fossiles de dinosaures trouvés dans le désert de Gobi ont inspiré la légende.',
    meaning: 'Le griffon est le gardien des trésors et le symbole de la puissance, sur la terre et dans les airs. Au Moyen Âge, il est devenu un emblème de noblesse et de courage sur les blasons.',
    origin: 'Du Proche-Orient et de Perse, où on le sculpte depuis plus de 4 000 ans, puis de la Grèce antique. L\'historien Hérodote en parle au Ve siècle avant J.-C.',
    tip: 'Rapide comme l\'aigle : 10 secondes par mot.' },
  { id: 'tarasque', name: 'Tarasque', from: 'Provence', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['colossus', 'regen'], mode: 'both',
    story: 'La Tarasque vivait dans les marais du Rhône, près de la ville qu\'on appelle aujourd\'hui Tarascon. C\'était un monstre effrayant : une tête de lion, six pattes d\'ours, une carapace de tortue hérissée de piques et une queue de serpent terminée par un dard. Elle dévorait les troupeaux et les voyageurs, et renversait les bateaux sur le fleuve. Les chevaliers envoyés contre elle furent tous vaincus. C\'est une jeune femme, sainte Marthe, qui l\'affronta seule, armée d\'une croix et d\'eau bénite. Elle la dompta, la noua avec sa ceinture et la ramena au village, douce comme un agneau. Mais les habitants, encore terrifiés, la tuèrent à coups de pierres.',
    fact: 'Chaque dernier week-end de juin, les fêtes de la Tarasque font défiler une Tarasque géante dans les rues de Tarascon.',
    meaning: 'La Tarasque incarne les crues violentes et les dangers du Rhône, que les habitants ont fini par maîtriser. La légende raconte aussi comment la foi et la douceur triomphent de la force brute. La fin, où le monstre dompté est tué, laisse souvent un goût amer.',
    origin: 'De Provence, au Moyen Âge. La légende est racontée par Jacques de Voragine dans La Légende dorée au XIIIe siècle, et la fête de la Tarasque date de 1474.',
    tip: 'Un monstre de chez toi, solide comme un colosse.' },
  { id: 'vouivre', name: 'Vouivre', from: 'Jura', reg: 'Europe', rar: 'Nocturne', cond: 'night', rules: ['trick'], mode: 'both',
    story: 'La vouivre est un serpent ailé, ou parfois une femme-serpent, qui vit dans les grottes et près des sources et des rivières du Jura et de la Franche-Comté. Elle porte au milieu du front une escarboucle, une pierre précieuse rouge si brillante qu\'elle éclaire la nuit. C\'est son œil et son trésor. Quand elle va se baigner, elle doit poser sa pierre sur la rive. C\'est le seul moment où l\'on peut la voler. Celui qui y parvient devient immensément riche. Mais s\'il échoue, la vouivre le poursuit et le tue, et on dit que sans sa pierre, elle devient aveugle et folle de rage.',
    fact: 'L\'écrivain Marcel Aymé en a fait l\'héroïne de son roman La Vouivre, en 1943.',
    meaning: 'La vouivre est la gardienne des eaux et des richesses cachées dans la nature. Elle met en garde contre l\'avidité : la tentation de lui voler sa pierre se termine presque toujours mal. Elle incarne aussi le côté sauvage et mystérieux des montagnes jurassiennes.',
    origin: 'Du folklore de l\'est de la France, surtout du Jura et de la Franche-Comté. Son nom vient du latin vipera, « vipère ».',
    tip: 'Elle brille la nuit et brouille les pistes : la langue de réponse change à chaque mot.' },
  { id: 'cerbere', name: 'Cerbère', from: 'Grèce', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['hydra'], mode: 'both',
    story: 'Cerbère est le chien monstrueux qui garde les portes des Enfers grecs. Il a trois têtes, une queue de serpent et, selon certains, des serpents qui sortent de son dos. Sa mission est simple : laisser entrer les morts, mais ne jamais laisser sortir personne. Il accueille les âmes en remuant la queue, puis dévore celles qui tentent de s\'échapper. Peu de vivants ont réussi à le passer. Le musicien Orphée l\'endormit en jouant de la lyre, et la Sibylle lui donna un gâteau au miel drogué. Pour son douzième et dernier travail, Hercule le vainquit à mains nues et le ramena un instant à la lumière du jour, avant de le rendre aux Enfers.',
    fact: 'Le mot « cerbère » est resté en français pour parler d\'un gardien sévère et difficile à passer.',
    meaning: 'Cerbère représente la frontière sans retour entre la vie et la mort. Il est terrible, mais pas méchant : il fait son travail de gardien. Ses trois têtes ont parfois été vues comme le passé, le présent et l\'avenir.',
    origin: 'De la mythologie grecque. Hésiode en parle vers 700 avant J.-C., et il apparaît dans de nombreux récits, de l\'Odyssée à l\'Énéide.',
    tip: 'Trois têtes à surveiller : chaque erreur ajoute un mot.' },
  { id: 'anansi', name: 'Anansi', from: 'Afrique de l\'Ouest', reg: 'Afrique et Moyen-Orient', rar: 'Rare', cond: 'always', rules: ['trick'], mode: 'e',
    story: 'Anansi est une araignée, mais c\'est aussi un petit homme rusé et bavard. Dans les contes, il est le plus malin de tous les animaux. Autrefois, toutes les histoires du monde appartenaient au dieu du ciel, Nyame. Anansi voulut les acheter. Le dieu lui demanda un prix impossible : capturer un python, un léopard, un essaim de frelons et une fée invisible. Grâce à ses ruses, Anansi les attrapa tous et devint le maître des histoires. Mais il est aussi paresseux, gourmand et menteur, et ses propres tours se retournent souvent contre lui.',
    fact: 'Avec la traite des esclaves, les histoires d\'Anansi ont voyagé jusqu\'aux Caraïbes, où on les raconte encore.',
    meaning: 'Anansi montre que l\'intelligence peut vaincre la force, et que les petits peuvent triompher des puissants. Pendant l\'esclavage, ses histoires ont aidé les Africains déportés à garder leur culture et leur espoir. Ses échecs enseignent aussi que la ruse ne remplace pas l\'honnêteté.',
    origin: 'Des Akan du Ghana, en Afrique de l\'Ouest. Ses histoires ont voyagé avec la traite vers les Caraïbes et l\'Amérique, où on l\'appelle Anancy ou Aunt Nancy.',
    tip: 'La gardienne des histoires racontées : elle ne se chasse qu\'à l\'ouïe, et elle aime tromper.' },
  { id: 'grootslang', name: 'Grootslang', from: 'Afrique du Sud', reg: 'Afrique et Moyen-Orient', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Au fond d\'une grotte immense d\'Afrique du Sud, qu\'on appelle le Trou sans fond, vivrait le grootslang. On raconte qu\'au commencement, les dieux créèrent des êtres trop puissants, mêlant la force de l\'éléphant et la ruse du serpent. Se rendant compte de leur erreur, ils les séparèrent en éléphants et en serpents. Mais l\'un d\'eux s\'échappa : le grootslang, gigantesque serpent à tête d\'éléphant. Il est fou de pierres précieuses et garde dans sa caverne un trésor de diamants. Il attire les éléphants dans son antre pour les dévorer. Un humain peut parfois sauver sa vie en lui offrant des pierres précieuses.',
    fact: 'Son nom signifie « grand serpent » en afrikaans.',
    meaning: 'Le grootslang garde les richesses cachées de la terre, comme les diamants pour lesquels l\'Afrique du Sud est célèbre. Sa légende parle aussi d\'une erreur de création qu\'on ne peut plus réparer, et met en garde contre l\'avidité.',
    origin: 'D\'Afrique du Sud, dans la région du Richtersveld. Son nom est en afrikaans, la langue des colons d\'origine néerlandaise, mais la légende est sans doute plus ancienne.',
    tip: 'Ancien et massif : un colosse à 20 mots.' },
  { id: 'curupira', name: 'Curupira', from: 'Brésil', reg: 'Amériques', rar: 'Commun', cond: 'always', rules: ['chrono'], mode: 'both',
    story: 'Le curupira est le gardien de la forêt amazonienne. Il ressemble à un petit garçon à la chevelure rouge feu, mais ses pieds sont tournés vers l\'arrière. Ainsi, ceux qui suivent ses traces partent dans la mauvaise direction. Il protège les animaux et les arbres contre ceux qui chassent trop, coupent sans besoin ou tuent les femelles avec leurs petits. Il les égare dans la jungle, les fait tourner en rond jusqu\'à ce qu\'ils perdent la raison. Ses sifflements aigus résonnent entre les arbres pour les effrayer. Les chasseurs prudents lui laissaient du tabac ou de l\'alcool en offrande pour qu\'il les laisse en paix.',
    fact: 'Au Brésil, une loi fait du 17 juillet le « jour de protection des forêts », et le curupira en est souvent le symbole.',
    meaning: 'Le curupira est l\'un des premiers défenseurs de l\'environnement : il punit ceux qui prennent plus que ce dont ils ont besoin. Il rappelle aussi qu\'on peut facilement se perdre dans la forêt amazonienne, immense et sans repères.',
    origin: 'Des peuples tupi-guarani du Brésil. Un missionnaire portugais, José de Anchieta, en parle dès 1560, ce qui en fait l\'une des plus anciennes légendes notées au Brésil.',
    tip: 'Vif comme un feu follet : 10 secondes par mot.' },
  { id: 'lamassu', name: 'Lamassu', from: 'Mésopotamie', reg: 'Afrique et Moyen-Orient', rar: 'Rare', cond: 'always', rules: ['strict'], mode: 'w',
    story: 'Le lamassu est un génie protecteur gigantesque, au corps de taureau ou de lion, aux grandes ailes d\'aigle et à la tête d\'homme barbu coiffée d\'une tiare à cornes. Les rois d\'Assyrie en faisaient sculpter des paires, hautes de plusieurs mètres, de chaque côté des portes de leurs palais et de leurs villes. Ils montaient la garde jour et nuit et empêchaient les démons et les ennemis d\'entrer. Les sculpteurs leur donnaient souvent cinq pattes : vus de face, ils semblent immobiles, et vus de côté, ils semblent marcher. Ainsi, ils gardaient la porte, quel que soit l\'endroit d\'où on les regardait.',
    fact: 'On peut voir de vrais lamassus de plus de 4 mètres au musée du Louvre et au British Museum.',
    meaning: 'Le lamassu réunit la force du taureau, la rapidité de l\'aigle et la sagesse de l\'homme : tout ce qu\'il faut à un gardien parfait. Il montrait aussi la puissance du roi à tous ceux qui entraient dans sa ville. C\'est un monstre bienveillant, un protecteur.',
    origin: 'De Mésopotamie, surtout de l\'empire assyrien, entre le IXe et le VIIe siècle avant J.-C., dans des villes comme Nimroud, Ninive et Khorsabad.',
    tip: 'Gardien des inscriptions : à vue uniquement, et sans la moindre faute.' },
  { id: 'roussalka', name: 'Roussalka', from: 'Pays slaves', reg: 'Europe', rar: 'Nocturne', cond: 'night', rules: ['fragile'], mode: 'e',
    story: 'La roussalka est l\'esprit d\'une jeune femme morte noyée, souvent de chagrin ou d\'un amour malheureux. Elle hante les rivières, les lacs et les étangs. On la voit au clair de lune, assise sur une branche au-dessus de l\'eau, peignant ses longs cheveux verts ou blonds, toujours mouillés. Elle chante d\'une voix si belle que les jeunes hommes s\'approchent, ensorcelés. Elle les entraîne alors sous l\'eau, ou les chatouille jusqu\'à la mort. Au début de l\'été, pendant la « semaine des roussalki », elle sort de l\'eau pour danser dans les champs et les forêts, et il valait mieux ne pas s\'y aventurer seul.',
    fact: 'Le compositeur Dvořák en a fait un opéra, Rusalka, dont le « Chant à la lune » est très célèbre.',
    meaning: 'La roussalka parle des morts injustes, surtout celles des jeunes filles, et de l\'idée que leur âme ne trouve pas la paix. Elle est liée à l\'eau, qui donne la vie aux champs mais peut aussi la prendre. Au départ, elle était sans doute un esprit de la fertilité, avant de devenir un fantôme dangereux.',
    origin: 'Du folklore slave : Russie, Ukraine, Biélorussie. Les fêtes des roussalki se célébraient encore dans les campagnes au XIXe siècle.',
    tip: 'Elle attire par sa voix : à l\'ouïe, la nuit, avec une seule vie.' },
  { id: 'fenrir', name: 'Fenrir', from: 'Scandinavie', reg: 'Europe', rar: 'Légendaire', cond: 'always', rules: ['colossus', 'rush'], mode: 'both',
    story: 'Fenrir est un loup monstrueux, fils du dieu farceur Loki et d\'une géante. Les dieux l\'élevèrent à Asgard, mais il grandissait si vite et si fort que des prophéties annoncèrent qu\'il causerait leur perte. Ils voulurent l\'enchaîner. Deux fois, Fenrir brisa les chaînes les plus solides. Les nains forgèrent alors un ruban magique, fin comme un fil de soie, fait de choses impossibles : le bruit des pas d\'un chat, la barbe d\'une femme, les racines d\'une montagne. Méfiant, Fenrir accepta d\'être lié seulement si un dieu mettait la main dans sa gueule. Seul Týr osa. Le ruban tint, et Fenrir lui arracha la main. Il reste enchaîné jusqu\'à la fin du monde, le Ragnarök, où il dévorera le dieu Odin.',
    fact: 'Le mardi s\'appelle « Tuesday » en anglais : le jour de Týr, le dieu manchot.',
    meaning: 'Fenrir est la force sauvage que même les dieux ne peuvent pas vaincre, seulement retarder. La légende parle aussi du sacrifice : Týr perd sa main pour protéger les autres. Et elle rappelle que, chez les Vikings, même les dieux savaient qu\'ils finiraient par mourir.',
    origin: 'De la mythologie nordique, racontée dans l\'Edda en prose de Snorri Sturluson au XIIIe siècle en Islande.',
    tip: 'Très rare. Un colosse rapide : il faudra tenir les 20 mots, 10 secondes chacun.' },
  { id: 'garuda', name: 'Garuda', from: 'Inde', reg: 'Asie', rar: 'Rare', cond: 'always', rules: ['rush'], mode: 'both',
    story: 'Garuda est le roi des oiseaux, un être immense à corps d\'homme, avec une tête, un bec, des ailes et des serres d\'aigle. À sa naissance, il brillait si fort que les dieux le prirent pour le feu de la fin du monde. Sa mère était l\'esclave des serpents, les Nagas. Pour la libérer, ceux-ci exigèrent qu\'il leur rapporte l\'amrita, la boisson d\'immortalité gardée par les dieux. Garuda traversa des murs de flammes et des roues tranchantes, vainquit les gardiens et s\'empara du breuvage. Il libéra sa mère, mais trompa les serpents, qui ne purent jamais le boire. Impressionné, le dieu Vishnou en fit sa monture. Depuis, Garuda est l\'ennemi éternel des serpents.',
    fact: 'La compagnie aérienne nationale d\'Indonésie s\'appelle Garuda, et il figure sur les armoiries du pays.',
    meaning: 'Garuda est le symbole de la force, de la vitesse et de la loyauté. Son combat contre les serpents représente la lutte du ciel contre les forces du dessous. Il protège aussi contre les morsures de serpents, un vrai danger en Inde.',
    origin: 'De la mythologie hindoue, dans le Mahabharata et les textes sacrés de l\'Inde. Il a ensuite été adopté par le bouddhisme et par toute l\'Asie du Sud-Est.',
    tip: 'Rapide comme le vent : 10 secondes par mot.' },
  { id: 'naga', name: 'Naga', from: 'Inde et Asie du Sud-Est', reg: 'Asie', rar: 'Commun', cond: 'always', rules: ['hydra'], mode: 'both',
    story: 'Les Nagas sont des serpents divins, souvent à plusieurs têtes déployées comme celle d\'un cobra. Ils vivent dans un monde souterrain plein de palais et de trésors, et dans les rivières, les lacs et les puits. Ils peuvent prendre forme humaine, et certaines familles royales d\'Asie affirmaient descendre d\'une princesse naga. Ils commandent la pluie : un Naga en colère provoque la sécheresse ou les inondations. Le plus célèbre, Mucalinda, protégea le Bouddha d\'un orage pendant sa méditation, en enroulant son corps autour de lui et en déployant ses sept têtes au-dessus de lui comme un parapluie.',
    fact: 'Au Cambodge, les balustrades du temple d\'Angkor Vat sont de longs nagas sculptés.',
    meaning: 'Les Nagas représentent l\'eau, source de vie et de récoltes, mais aussi capable de tout détruire. Ils sont puissants et ambigus : il faut les respecter et les honorer. On les retrouve sur les temples comme gardiens des portes et des escaliers.',
    origin: 'De l\'Inde, dans l\'hindouisme et le bouddhisme, puis de toute l\'Asie du Sud-Est : Cambodge, Thaïlande, Laos, Indonésie.',
    tip: 'Plusieurs têtes, comme l\'Hydre : chaque erreur ajoute un mot.' },
  { id: 'quetzalcoatl', name: 'Quetzalcoatl', from: 'Mexique', reg: 'Amériques', rar: 'Légendaire', cond: 'always', rules: ['colossus', 'regen'], mode: 'both',
    story: 'Quetzalcoatl, le « serpent à plumes », est un grand dieu des peuples du Mexique ancien. Il est à la fois serpent, la créature de la terre, et oiseau aux plumes vertes de quetzal, la créature du ciel. Selon la légende, il descendit au royaume des morts pour récupérer les os des hommes des mondes précédents, les arrosa de son propre sang et créa ainsi l\'humanité actuelle. Il offrit ensuite aux hommes le maïs, le calendrier et l\'art d\'écrire. Un jour, trompé par un dieu rival, il dut quitter son peuple. Il partit vers l\'est sur un radeau de serpents, en promettant de revenir.',
    fact: 'À Chichén Itzá, au Mexique, l\'ombre du soleil dessine un serpent qui descend l\'escalier de la pyramide aux équinoxes.',
    meaning: 'Quetzalcoatl réunit le ciel et la terre, le serpent et l\'oiseau : il est le dieu de la vie, du vent et de la connaissance. Sa promesse de revenir par l\'est a été rapprochée de l\'arrivée des Espagnols en 1519, mais les historiens pensent que ce lien a surtout été inventé après la conquête.',
    origin: 'Du Mexique ancien : les Toltèques, les Aztèques et les Mayas, qui l\'appelaient Kukulcán. Son culte existe depuis plus de 1 500 ans, à Teotihuacan notamment.',
    tip: 'Très rare. Long et trompeur : 20 mots, avec une langue qui change.' },
  { id: 'ahuizotl', name: 'Ahuizotl', from: 'Mexique', reg: 'Amériques', rar: 'Commun', cond: 'always', rules: ['greedy'], mode: 'both',
    story: 'L\'ahuizotl est une petite créature des lacs et des sources, de la taille d\'un chien, au pelage noir et lisse comme celui d\'une loutre. Ses pattes ressemblent à des mains de singe, et au bout de sa queue se trouve une autre main, humaine. Il guette au bord de l\'eau. Pour attirer ses proies, il imite les pleurs d\'un bébé ou fait remonter des poissons à la surface. Dès qu\'un homme s\'approche, sa queue-main l\'attrape et l\'entraîne au fond. Quelques jours plus tard, le corps remonte sans yeux, sans ongles et sans dents, mais sans aucune autre blessure. Les Aztèques disaient que la victime avait été choisie par les dieux de la pluie.',
    fact: 'Un empereur aztèque, oncle du célèbre Moctezuma, portait le nom d\'Ahuitzotl.',
    meaning: 'L\'ahuizotl expliquait les noyades dans les lacs autour de Tenochtitlan, la capitale aztèque bâtie sur l\'eau. Pour les Aztèques, ces morts n\'étaient pas des accidents : la victime était appelée au paradis du dieu de la pluie, Tláloc.',
    origin: 'Du Mexique aztèque. Il est décrit au XVIe siècle par le moine espagnol Bernardino de Sahagún, qui a recueilli les savoirs des Aztèques.',
    tip: 'Il ne lâche rien : chaque mot raté revient.' },
  { id: 'taniwha', name: 'Taniwha', from: 'Nouvelle-Zélande', reg: 'Océanie', rar: 'Rare', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Les taniwha sont des êtres puissants qui vivent dans les rivières, les lacs, les grottes et les eaux profondes de la mer. On les imagine comme d\'énormes reptiles, des requins ou des baleines, et ils peuvent changer de forme. Pour les Maoris, chaque taniwha est lié à une tribu : c\'est un gardien qui protège son peuple, le prévient des dangers et le guide sur la mer. Mais pour les étrangers ou ceux qui violent les lieux sacrés, il peut être redoutable : il provoque des naufrages, des noyades et dévore les ennemis de sa tribu.',
    fact: 'En 2002, la construction d\'une autoroute en Nouvelle-Zélande a été modifiée par respect pour un taniwha de la rivière Waikato.',
    meaning: 'Le taniwha montre le lien profond entre les Maoris et la nature : les rivières et les lieux ont des gardiens qu\'il faut respecter. Encore aujourd\'hui, on en tient compte quand on construit une route ou un pont en Nouvelle-Zélande.',
    origin: 'Des Maoris de Nouvelle-Zélande. Selon leurs traditions, certains taniwha auraient accompagné les grandes pirogues lors de l\'arrivée de leurs ancêtres depuis la Polynésie.',
    tip: 'Puissant gardien des eaux : un colosse à 20 mots.' },
  { id: 'ammit', name: 'Ammit', from: 'Égypte', reg: 'Afrique et Moyen-Orient', rar: 'Rare', cond: 'always', rules: ['strict'], mode: 'w',
    story: 'Ammit, « la Dévoreuse des morts », attend à côté de la balance du jugement, dans l\'au-delà égyptien. Elle a une tête de crocodile, l\'avant du corps d\'un lion et l\'arrière d\'un hippopotame : les trois animaux les plus dangereux d\'Égypte. Quand un mort arrive, son cœur est posé sur un plateau de la balance, et sur l\'autre, une plume, celle de la déesse Maât, la vérité. Si le cœur est léger, le mort rejoint le paradis. S\'il est trop lourd de mauvaises actions, Ammit le dévore aussitôt. L\'âme disparaît alors pour toujours, sans espoir de vie éternelle.',
    fact: 'La scène de la pesée du cœur figure dans le Livre des Morts, des rouleaux de papyrus placés dans les tombes.',
    meaning: 'Ammit n\'est pas adorée : elle est crainte. Elle représente la seconde mort, la pire de toutes pour un Égyptien, celle qui efface pour toujours. Elle poussait chacun à bien vivre pour avoir un cœur léger au moment du jugement.',
    origin: 'De l\'Égypte ancienne, dans le Livre des Morts, des textes funéraires utilisés à partir d\'environ 1550 avant J.-C.',
    tip: 'Elle juge ce qui est écrit : à vue, et sans la moindre erreur.' },
  { id: 'bakunawa', name: 'Bakunawa', from: 'Philippines', reg: 'Asie', rar: 'Nocturne', cond: 'fullmoon', rules: ['greedy'], mode: 'both',
    story: 'Le Bakunawa est un serpent de mer gigantesque, avec une bouche aussi grande qu\'un lac, des branchies rouges et des ailes. Autrefois, le ciel comptait sept lunes, et elles étaient si belles que le Bakunawa tomba amoureux d\'elles. Ou, selon d\'autres, il en était jaloux. Il surgit de l\'océan et en avala six, l\'une après l\'autre. Les hommes, terrifiés à l\'idée de perdre la dernière, se mirent à frapper sur des casseroles et des gongs pour le faire fuir. Le dieu suprême planta des bambous sur la lune pour la protéger. Mais le Bakunawa revient toujours, et quand la lune disparaît dans une éclipse, c\'est qu\'il essaie encore de l\'avaler.',
    fact: 'Lors des éclipses, on faisait encore du bruit il n\'y a pas si longtemps aux Philippines pour lui faire lâcher la lune.',
    meaning: 'Le Bakunawa expliquait les éclipses de lune et de soleil, qui terrifiaient les anciens. La légende raconte aussi qu\'en faisant du bruit ensemble, les hommes peuvent protéger le ciel : une façon de se rassurer face à un phénomène qu\'on ne comprenait pas.',
    origin: 'Des Philippines, surtout des îles Visayas. La légende est antérieure à l\'arrivée des Espagnols au XVIe siècle.',
    tip: 'Il n\'apparaît qu\'à la pleine lune, et chaque erreur le nourrit.' },
  { id: 'selkie', name: 'Selkie', from: 'Écosse et Irlande', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['fragile'], mode: 'both',
    story: 'Les selkies sont des phoques dans la mer, mais sur la terre, ils retirent leur peau et deviennent des humains d\'une grande beauté. Les nuits de pleine lune, ils viennent danser sur les plages désertes. Un pêcheur qui volait la peau d\'une selkie pouvait la forcer à rester avec lui et à devenir sa femme, car sans sa peau, elle ne pouvait plus retourner dans la mer. Elle vivait alors sur terre, avait des enfants, mais regardait toujours l\'océan avec tristesse. Le jour où elle retrouvait sa peau cachée, elle partait aussitôt, sans se retourner, et ne revenait jamais.',
    fact: 'Certaines familles des Orcades affirmaient descendre d\'une selkie, et en voyaient la preuve dans des doigts légèrement palmés.',
    meaning: 'L\'histoire des selkies parle de la nostalgie, du mal du pays et de la liberté qu\'on ne peut pas enfermer. Elle raconte aussi des amours impossibles entre deux mondes. Certains y voient la vie des femmes mariées de force et le désir de reprendre leur liberté.',
    origin: 'Du folklore des îles du nord de l\'Écosse (Orcades et Shetland), d\'Irlande et des îles Féroé, où les phoques sont très nombreux.',
    tip: 'Elle glisse entre les doigts : une seule erreur et elle repart.' },
  { id: 'simurgh', name: 'Simurgh', from: 'Perse', reg: 'Afrique et Moyen-Orient', rar: 'Légendaire', cond: 'always', rules: ['chrono', 'strict'], mode: 'both',
    story: 'Le Simurgh est un oiseau immense et très ancien, si vieux qu\'il a vu le monde se détruire et renaître trois fois. Il a la tête d\'un chien, des griffes de lion et un plumage aux couleurs magnifiques. Il vit au sommet du mont Qaf, au bout du monde, sur l\'Arbre de toutes les graines, et quand il s\'envole, les graines tombent et ensemencent la terre. Dans le Livre des Rois, un bébé abandonné, Zal, est recueilli par le Simurgh, qui l\'élève dans son nid. Quand Zal repart vers les hommes, l\'oiseau lui donne trois plumes : il suffit d\'en brûler une pour qu\'il vienne en aide.',
    fact: 'Dans le poème La Conférence des oiseaux, trente oiseaux partent à sa recherche, et découvrent que « si-morgh » signifie « trente oiseaux ».',
    meaning: 'Le Simurgh est un oiseau sage et bienveillant, gardien de la connaissance et guérisseur. Pour les poètes soufis, il représente même Dieu, que l\'âme cherche à atteindre au terme d\'un long voyage intérieur.',
    origin: 'De Perse, dans les textes anciens de l\'Iran puis dans le Livre des Rois, le grand poème de Ferdowsi écrit vers l\'an 1000.',
    tip: 'Très rare. Rapide et exigeant : 10 secondes par mot, sans aucune faute.' },
  { id: 'bulgasari', name: 'Bulgasari', from: 'Corée', reg: 'Asie', rar: 'Rare', cond: 'korean', rules: ['colossus', 'regen'], mode: 'both',
    story: 'À la fin du royaume de Goryeo, un moine fuyait les soldats qui persécutaient les bouddhistes. Caché chez sa sœur, il passait le temps en modelant une petite créature avec des grains de riz. Elle prit vie et se mit à manger tout le métal qu\'elle trouvait : aiguilles, cuillères, marmites, puis les portes et les armes. À chaque repas, elle grandissait. Elle devint un monstre énorme au corps de fer, impossible à tuer : les flèches et les épées ne lui faisaient rien, et quand on essaya de la brûler, elle devint brûlante et mit le feu à la ville. Son nom, Bulgasari, peut se lire « celle qu\'on ne peut pas tuer ».',
    fact: 'Un film de monstre nord-coréen de 1985, Pulgasari, a raconté son histoire.',
    meaning: 'Le Bulgasari est né à une période de guerres et d\'injustices. Il représente un malheur qui grandit à force de se nourrir de tout, ou au contraire une révolte du peuple que les puissants n\'arrivent pas à arrêter. Il est aussi devenu un gardien contre les cauchemars et les mauvais esprits.',
    origin: 'Du folklore coréen, à la fin de la dynastie Goryeo, au XIVe siècle. On le représentait sur des briques et des murs pour éloigner le mal.',
    tip: 'Il n\'apparaît que si tu révises le coréen : un colosse de fer.' },
  { id: 'chimere', name: 'Chimère', from: 'Grèce', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['hydra'], mode: 'both',
    story: 'La Chimère est un monstre fait de trois animaux : une tête de lion à l\'avant, une tête de chèvre au milieu du dos, et une queue qui se termine en tête de serpent. Elle crachait du feu et dévastait la région de Lycie, en Asie Mineure, brûlant les récoltes et les troupeaux. Le roi de Lycie chargea le héros Bellérophon de la tuer, en pensant qu\'il ne reviendrait jamais. Mais Bellérophon avait apprivoisé le cheval ailé Pégase. Du haut du ciel, hors de portée des flammes, il la cribla de flèches. Selon une version, il lui enfonça une lance garnie de plomb dans la gueule : le feu de la Chimère fit fondre le plomb, qui la tua.',
    fact: 'Aujourd\'hui, « une chimère » désigne un rêve impossible, et en biologie un être formé de cellules de deux origines.',
    meaning: 'La Chimère est l\'assemblage de ce qui est impossible. On pense qu\'elle était inspirée par un lieu réel de Turquie, le mont Chimère, où des flammes de gaz naturel sortent du sol depuis des milliers d\'années.',
    origin: 'De la mythologie grecque. Homère la décrit déjà dans l\'Iliade, au VIIIe siècle avant J.-C.',
    tip: 'Trois têtes à la fois : chaque erreur ajoute un mot.' },
  { id: 'lionnemee', name: 'Lion de Némée', from: 'Grèce', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['strict'], mode: 'both',
    story: 'Le lion de Némée terrorisait la région de Némée, en Grèce. Il était énorme, et sa peau dorée était si dure qu\'aucune arme ne pouvait la percer : flèches, lances et épées rebondissaient dessus. Il vivait dans une grotte à deux entrées, d\'où il sortait pour dévorer les troupeaux et les habitants. Pour son premier travail, Hercule l\'affronta. Voyant ses flèches inutiles, il boucha une des entrées de la grotte, entra par l\'autre et étrangla le lion à mains nues. Il essaya ensuite de le dépouiller, mais rien ne coupait sa peau. Il eut l\'idée d\'utiliser les griffes du lion lui-même. Depuis, Hercule porte sa peau comme une armure et sa tête comme un casque.',
    fact: 'Les Grecs pensaient que le lion de Némée était devenu la constellation du Lion.',
    meaning: 'Le lion de Némée est l\'épreuve par laquelle tout commence pour Hercule : il montre qu\'il faut parfois réfléchir autrement quand la force ne suffit pas. Sa peau, devenue l\'emblème du héros, transforme la menace en protection.',
    origin: 'De la mythologie grecque. Némée est une vraie vallée du Péloponnèse, où l\'on célébrait des jeux sportifs en l\'honneur de Zeus.',
    tip: 'Aucune faille dans sa peau : aucune faute permise.' },
  { id: 'pegase', name: 'Pégase noir', from: 'Grèce', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['chrono'], mode: 'both',
    story: 'Pégase est le cheval ailé né du sang de Méduse, au moment où Persée lui trancha la tête. Il était si sauvage que personne ne pouvait l\'approcher. Le héros Bellérophon reçut en rêve de la déesse Athéna une bride en or, et quand il se réveilla, la bride était bien là. Grâce à elle, il put enfin dompter Pégase et accomplir des exploits, comme vaincre la Chimère. Mais Bellérophon devint orgueilleux et voulut voler jusqu\'à l\'Olympe, chez les dieux. Zeus envoya un taon piquer Pégase, qui se cabra et fit tomber son cavalier. Pégase continua seul jusqu\'à l\'Olympe, où il porte depuis la foudre de Zeus.',
    fact: 'D\'un coup de sabot, Pégase aurait fait jaillir une source sur le mont Hélicon : l\'Hippocrène, la source des poètes.',
    meaning: 'Pégase symbolise la liberté et l\'inspiration : c\'est le cheval des poètes. La chute de Bellérophon met en garde contre l\'orgueil de celui qui veut s\'élever au rang des dieux. Le Pégase noir de l\'appli rappelle qu\'il est né d\'un monstre.',
    origin: 'De la mythologie grecque, racontée par Hésiode et Pindare entre le VIIIe et le Ve siècle avant J.-C. Il est devenu une constellation.',
    tip: 'Il fend le ciel : 10 secondes par mot.' },
  { id: 'jormungandr', name: 'Jörmungandr', from: 'Scandinavie', reg: 'Europe', rar: 'Légendaire', cond: 'always', rules: ['colossus', 'hydra'], mode: 'both',
    story: 'Jörmungandr est un serpent de mer, frère du loup Fenrir et fils du dieu Loki. Quand il était encore jeune, le dieu Odin, inquiet des prophéties, le jeta dans l\'océan qui entoure le monde. Mais le serpent grandit tant qu\'il fit le tour de la Terre entière et finit par se mordre la queue. On l\'appelle le Serpent de Midgard, le monde des hommes. Son grand ennemi est le dieu Thor, qui essaya un jour de le pêcher en utilisant une tête de bœuf comme appât. Lors du Ragnarök, la fin du monde, Jörmungandr sortira de la mer. Thor le tuera, mais il ne fera que neuf pas avant de mourir, empoisonné par son venin.',
    fact: 'L\'image d\'un serpent qui se mord la queue s\'appelle un ouroboros, symbole d\'éternité dans de nombreuses cultures.',
    meaning: 'Jörmungandr est le chaos qui encercle le monde ordonné des hommes. Tant qu\'il tient sa queue, l\'univers reste en place ; quand il la lâchera, ce sera la fin. Son combat avec Thor oppose l\'ordre et le désordre, qui finissent par se détruire mutuellement.',
    origin: 'De la mythologie nordique, dans l\'Edda poétique et l\'Edda en prose de Snorri Sturluson, au XIIIe siècle en Islande.',
    tip: 'Très rare. Le plus long des serpents : colosse et hydre à la fois.' },
  { id: 'draugr', name: 'Draugr', from: 'Scandinavie', reg: 'Europe', rar: 'Nocturne', cond: 'night', rules: ['greedy'], mode: 'both',
    story: 'Le draugr est un mort qui ne repose pas en paix. Enterré avec ses trésors dans un tertre funéraire, il garde jalousement son or et attaque ceux qui viennent le voler. Son corps est gonflé, noir ou bleu comme celui d\'un noyé, et il sent la mort. Il possède une force surhumaine, peut grandir à volonté et changer de forme. La nuit, certains sortent pour terroriser leur ancienne ferme, tuer le bétail, et rendre fous les habitants. Dans la saga de Grettir, le héros affronte le draugr Glámr dans une lutte terrible. Pour l\'arrêter définitivement, il faut le décapiter et brûler son corps.',
    fact: 'Pour empêcher un mort de revenir, les Vikings posaient parfois des ciseaux ouverts sur sa poitrine.',
    meaning: 'Le draugr exprime la peur des morts qui ne sont pas vraiment partis, surtout les personnes avides ou violentes de leur vivant. Il met aussi en garde contre le pillage des tombes. Les rites funéraires vikings servaient en partie à empêcher les morts de revenir.',
    origin: 'Des sagas islandaises du Moyen Âge, écrites aux XIIIe et XIVe siècles à partir de récits plus anciens.',
    tip: 'Il ne sort que la nuit, et chaque erreur lui rend des forces.' },
  { id: 'nuckelavee', name: 'Nuckelavee', from: 'Écosse (Orcades)', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['fragile', 'chrono'], mode: 'both',
    story: 'Le nuckelavee est le plus terrible des démons des Orcades. Il sort de la mer pour parcourir les îles. On croit d\'abord voir un cavalier sur son cheval, mais les deux ne font qu\'un : un torse humain sort du dos du cheval, avec de très longs bras qui touchent le sol et une énorme tête qui roule de gauche à droite. Le cheval n\'a qu\'un seul œil, rouge comme le feu. Le plus horrible : il n\'a pas de peau. On voit ses veines noires, ses muscles et ses tendons. Son souffle empoisonné fait faner les récoltes et tombe le bétail malade. Sa seule faiblesse : il ne supporte pas l\'eau douce, et on peut lui échapper en traversant un ruisseau.',
    fact: 'Il ne quittait la mer qu\'en été. En hiver, une autre créature, la Mither o\' the Sea, le tenait enfermé.',
    meaning: 'Le nuckelavee était tenu responsable des épidémies, des maladies du bétail et des sécheresses qui frappaient les îles. Il incarne la mer comme source de tous les malheurs, pour des gens qui en dépendaient entièrement.',
    origin: 'Des Orcades, au nord de l\'Écosse. Le folkloriste Walter Traill Dennison a recueilli au XIXe siècle les récits des derniers habitants qui y croyaient.',
    tip: 'Rapide et implacable : une seule vie, 10 secondes par mot.' },
  { id: 'leshy', name: 'Leshy', from: 'Russie', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['trick'], mode: 'both',
    story: 'Le leshy est le maître de la forêt. Il ressemble à un vieil homme à la barbe verte, couvert d\'écorce et de mousse, et sa taille change selon l\'endroit où il se trouve : grand comme les arbres en forêt, minuscule dans l\'herbe. Il protège les animaux sauvages et règne sur eux. Quand un voyageur entre dans ses bois sans respect, il le fait tourner en rond, imite la voix de ses proches pour l\'attirer au fond de la forêt, ou le chatouille jusqu\'à épuisement. Pour se libérer de son sort, il fallait retourner ses vêtements et mettre ses chaussures à l\'envers.',
    fact: 'Les chasseurs russes lui laissaient du pain et du sel à l\'orée du bois pour obtenir sa protection.',
    meaning: 'Le leshy représente la forêt immense et vivante, qui nourrit mais où l\'on peut facilement se perdre. Il rappelle qu\'on n\'y entre pas en maître, mais en invité. Les chasseurs et les bergers passaient des accords avec lui pour protéger leurs troupeaux.',
    origin: 'Du folklore slave, surtout russe. Les croyances autour du leshy sont très anciennes et ont été recueillies aux XIXe et XXe siècles.',
    tip: 'Il fait perdre le nord : la langue de réponse change à chaque mot.' },
  { id: 'kitsune', name: 'Kitsune', from: 'Japon', reg: 'Asie', rar: 'Rare', cond: 'always', rules: ['trick'], mode: 'both',
    story: 'Au Japon, les renards possèdent des pouvoirs magiques qui grandissent avec l\'âge. Tous les cent ans, un kitsune gagne une nouvelle queue, jusqu\'à en avoir neuf. Il peut alors prendre forme humaine, créer des illusions, posséder les gens et faire apparaître des feux follets, le kitsunebi. Il en existe deux sortes. Les renards célestes servent Inari, la divinité du riz et de la prospérité, et protègent les hommes. Les renards sauvages, eux, adorent jouer des tours, et certains séduisent des humains sous l\'apparence d\'une belle femme. On peut les démasquer, car leur ombre ou leur reflet garde la forme d\'un renard, et ils ont peur des chiens.',
    fact: 'Plus de 30 000 sanctuaires d\'Inari au Japon sont gardés par des statues de renards.',
    meaning: 'Le kitsune est ni tout à fait bon, ni tout à fait mauvais : il peut être un messager divin ou un farceur dangereux. Il montre l\'importance du renard dans la vie des paysans japonais, qui le voyaient chasser les rats dans les rizières et l\'associaient donc aux bonnes récoltes.',
    origin: 'Du folklore japonais, avec des racines dans les légendes chinoises du renard à neuf queues. Les histoires de kitsune existent au Japon depuis au moins le VIIIe siècle.',
    tip: 'Le renard trompe son monde : la langue de réponse change à chaque mot.' },
  { id: 'jorogumo', name: 'Jorōgumo', from: 'Japon', reg: 'Asie', rar: 'Nocturne', cond: 'night', rules: ['greedy'], mode: 'both',
    story: 'La jorōgumo est une araignée qui, en vieillissant, acquiert des pouvoirs magiques. Quand elle atteint 400 ans, elle peut prendre l\'apparence d\'une très belle femme. Elle vit dans les forêts, près des cascades et des maisons isolées. Elle attire les jeunes hommes qui passent seuls, en jouant du biwa, un luth japonais, ou en leur demandant de l\'aide. Une fois sous son charme, ils sont pris dans ses fils de soie, invisibles et plus solides que des cordes. Elle les garde parfois longtemps, les affaiblissant peu à peu, avant de les dévorer. Autour de sa demeure, on retrouve les os de ses victimes.',
    fact: 'Près de la cascade de Jōren, à Izu, une légende raconte qu\'un bûcheron vit ses fils s\'enrouler autour de son pied.',
    meaning: 'La jorōgumo met en garde contre les apparences et contre la séduction qui piège. Elle s\'inspire d\'une vraie araignée japonaise, aux couleurs jaunes et noires, qui tisse de grandes toiles dorées.',
    origin: 'Du folklore japonais. Elle apparaît dans les recueils de légendes de l\'époque d\'Edo (XVIIe-XIXe siècles), comme ceux du peintre Toriyama Sekien.',
    tip: 'Elle tisse sa toile la nuit, et chaque erreur la renforce.' },
  { id: 'rakshasa', name: 'Rakshasa', from: 'Inde', reg: 'Asie', rar: 'Rare', cond: 'always', rules: ['strict'], mode: 'both',
    story: 'Les rakshasas sont des démons qui changent de forme à volonté. Ils peuvent apparaître en hommes, en animaux ou en monstres aux crocs énormes, avec des griffes et des yeux de feu. Ils sont surtout actifs la nuit, quand leur pouvoir est au plus fort. Ils troublent les prières et les cérémonies, profanent les tombes et dévorent les humains. Le plus célèbre d\'entre eux est Ravana, le roi démon à dix têtes du Ramayana. Il régnait sur l\'île de Lanka et enleva Sita, l\'épouse du prince Rama. Rama, aidé par l\'armée des singes du dieu Hanuman, l\'affronta dans une grande guerre et finit par le tuer d\'une flèche divine.',
    fact: 'Chaque année en Inde, lors de la fête de Dussehra, on brûle d\'immenses effigies de Ravana.',
    meaning: 'Les rakshasas incarnent le désordre et l\'égoïsme qui s\'opposent à l\'harmonie du monde. Mais tous ne sont pas mauvais : certains sont sages et justes. Ravana lui-même était un grand savant et un fidèle du dieu Shiva, ce qui en fait un méchant complexe.',
    origin: 'De l\'Inde ancienne, dans le Ramayana et le Mahabharata, les deux grandes épopées de l\'hindouisme. Ils sont aussi présents dans le bouddhisme et en Asie du Sud-Est.',
    tip: 'Rusé et précis : aucune faute ne sera pardonnée.' },
  { id: 'thunderbird', name: 'Thunderbird', from: 'Amérique du Nord', reg: 'Amériques', rar: 'Saisonnier', cond: 'summer', rules: ['rush'], mode: 'e',
    story: 'Le Thunderbird, l\'Oiseau-Tonnerre, est un esprit gigantesque des peuples d\'Amérique du Nord. Il est si grand qu\'il pourrait emporter une baleine dans ses serres. Quand il bat des ailes, il provoque le tonnerre, et quand il ouvre ou ferme les yeux, les éclairs jaillissent. Il vit au sommet des montagnes, au-dessus des nuages. Il apporte la pluie qui fait pousser les plantes, et il combat les esprits mauvais des profondeurs, notamment les grands serpents cornus et les monstres de l\'eau. Dans certaines histoires, il a aidé des peuples affamés en leur apportant une baleine à manger.',
    fact: 'Il est souvent sculpté au sommet des mâts totémiques de la côte nord-ouest du Pacifique.',
    meaning: 'Le Thunderbird explique les orages, à la fois redoutables et nécessaires pour la pluie. Il est souvent vu comme un protecteur puissant. Son combat contre les monstres de l\'eau montre l\'équilibre entre le ciel et les profondeurs.',
    origin: 'De nombreux peuples autochtones d\'Amérique du Nord, en particulier ceux de la côte nord-ouest du Pacifique, des Plaines et de la région des Grands Lacs.',
    tip: 'On l\'entend avant de le voir : à l\'ouïe, en été, et vite.' },
  { id: 'raiju', name: 'Raijū', from: 'Japon', reg: 'Asie', rar: 'Rare', cond: 'always', rules: ['rush'], mode: 'e',
    story: 'Le raijū est la « bête de la foudre ». Il accompagne Raijin, le dieu du tonnerre, et prend la forme d\'un animal fait d\'éclairs : un loup, un chat ou une belette au pelage bleu ou blanc, qui crépite d\'électricité. Quand il bondit d\'un nuage à l\'autre, il fait gronder le tonnerre. Quand l\'orage éclate, il saute du ciel sur la terre, et l\'endroit où il tombe est frappé par la foudre. Il est d\'habitude calme, mais devient fou furieux pendant les orages. On raconte aussi qu\'il aime se cacher et dormir dans le nombril des humains.',
    fact: 'C\'est pour ça qu\'au Japon, on conseille aux enfants de cacher leur nombril pendant les orages.',
    meaning: 'Le raijū donne un corps aux éclairs : les arbres fendus et les traces de brûlure sur le sol étaient les marques de ses griffes.',
    origin: 'Du folklore japonais. Il est décrit dans les textes et les gravures de l\'époque d\'Edo, qui prétendaient parfois avoir capturé un vrai raijū.',
    tip: 'Le tonnerre s\'écoute : à l\'ouïe uniquement, et à la vitesse de l\'éclair.' },
  { id: 'mapinguari', name: 'Mapinguari', from: 'Amazonie', reg: 'Amériques', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Au fond de la forêt amazonienne vivrait le mapinguari, une créature gigantesque couverte d\'une épaisse fourrure rouge. Il marche parfois debout, a de longues griffes recourbées et, selon certains récits, un seul œil au milieu du front et une bouche au milieu du ventre. Il dégage une odeur si horrible qu\'elle peut faire perdre connaissance. Il pousse des cris terribles qui résonnent dans la jungle. Les balles et les flèches rebondissent sur sa peau, aussi dure qu\'une carapace. Il ne craint que l\'eau, et il chasse surtout les chasseurs qui se perdent dans la forêt.',
    fact: 'Certains scientifiques pensent que la légende garde le souvenir des paresseux géants, éteints il y a environ 10 000 ans.',
    meaning: 'Le mapinguari, comme le curupira, est un gardien de la forêt qui punit ceux qui s\'y aventurent sans respect. Pour les habitants, c\'est un esprit qu\'il ne faut pas provoquer.',
    origin: 'Des peuples d\'Amazonie, au Brésil et en Bolivie. Il est connu à travers les récits des chasseurs, des cueilleurs de caoutchouc et des villages de la forêt.',
    tip: 'Lent mais très résistant : un colosse.' },
  { id: 'impundulu', name: 'Impundulu', from: 'Afrique australe', reg: 'Afrique et Moyen-Orient', rar: 'Rare', cond: 'always', rules: ['chrono'], mode: 'e',
    story: 'L\'impundulu, l\'« oiseau-foudre », est un esprit qui prend la forme d\'un grand oiseau noir et blanc. Quand il bat des ailes, il provoque le tonnerre, et quand il plonge vers la terre, il frappe sous forme d\'éclair. Il sert souvent une sorcière, qui le transmet à sa fille. Il peut aussi prendre l\'apparence d\'un jeune homme séduisant pour approcher ses victimes. Insatiable, il boit le sang des humains et du bétail. À l\'endroit où la foudre est tombée, il pondrait un œuf, et seuls des guérisseurs traditionnels pouvaient le trouver et le détruire avant qu\'il ne cause d\'autres malheurs.',
    fact: 'Les guérisseurs traditionnels étaient appelés pour déterrer « l\'œuf de foudre » après un orage.',
    meaning: 'L\'impundulu donne une explication aux orages violents, très meurtriers dans la région. Il est aussi lié à la peur de la sorcellerie : quand quelqu\'un tombait malade sans raison, on accusait parfois un impundulu.',
    origin: 'Des peuples Xhosa, Zoulou et Pondo d\'Afrique du Sud. On le connaît surtout grâce aux récits recueillis aux XIXe et XXe siècles.',
    tip: 'On l\'entend gronder : à l\'ouïe, et vite.' },
  { id: 'tikbalang', name: 'Tikbalang', from: 'Philippines', reg: 'Asie', rar: 'Commun', cond: 'always', rules: ['trick'], mode: 'both',
    story: 'Le tikbalang vit dans les forêts et les montagnes des Philippines. C\'est une créature grande et maigre, à tête et pieds de cheval, avec des bras et des jambes démesurément longs : assis, ses genoux dépassent sa tête. Il s\'amuse à égarer les voyageurs : ils marchent pendant des heures, croyant avancer, mais tournent en rond sur un chemin qu\'ils connaissent pourtant. Pour rompre le sort, il faut retourner sa chemise. Mais le tikbalang a un secret : il a dans sa crinière trois poils dorés. Celui qui arrive à grimper sur son dos et à les arracher le dompte, et le tikbalang devient son serviteur fidèle.',
    fact: 'Aux Philippines, quand il pleut sous le soleil, on dit qu\'un tikbalang se marie.',
    meaning: 'Le tikbalang expliquait l\'impression troublante de se perdre sur un chemin familier, surtout la nuit en forêt. La légende des trois poils dorés montre qu\'on peut dompter ce qui fait peur, à condition d\'avoir du courage.',
    origin: 'Des Philippines, du folklore tagalog. La légende est antérieure à la colonisation espagnole, mais les Espagnols ont pu y ajouter les sabots de cheval, un animal qu\'ils ont apporté.',
    tip: 'Il brouille les chemins : la langue de réponse change à chaque mot.' },
  { id: 'ninkinanka', name: 'Ninki Nanka', from: 'Afrique de l\'Ouest', reg: 'Afrique et Moyen-Orient', rar: 'Rare', cond: 'always', rules: ['greedy'], mode: 'both',
    story: 'Le Ninki Nanka vit dans les marais et les rivières de Gambie et des pays voisins. C\'est un dragon d\'eau énorme, au corps de crocodile, avec un long cou, une tête de cheval, une crête brillante sur le crâne et des écailles qui reflètent la lumière comme un miroir. On le voit rarement, mais il est extrêmement dangereux. On dit que celui qui le regarde tombe gravement malade et meurt dans les semaines qui suivent. Pour cette raison, les anciens interdisent aux enfants de s\'approcher des marais.',
    fact: 'En 2006, une expédition britannique est partie en Gambie à sa recherche, sans succès.',
    meaning: 'Le Ninki Nanka servait à protéger les enfants des dangers réels des marais : crocodiles, noyades et maladies transmises par l\'eau stagnante. C\'est un monstre de prévention, comme beaucoup de créatures des eaux.',
    origin: 'Du folklore de l\'Afrique de l\'Ouest, surtout de Gambie, du Sénégal et de Guinée. Les anciens en parlent toujours dans les villages au bord du fleuve Gambie.',
    tip: 'Chaque erreur le renforce : le mot raté revient.' },
  { id: 'yacumama', name: 'Yacumama', from: 'Amazonie', reg: 'Amériques', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'La Yacumama, la « mère des eaux », est un serpent géant qui vit au fond de l\'Amazone et des lacs de la forêt. Elle mesurerait plusieurs dizaines de mètres, et sa tête serait aussi large qu\'un tronc d\'arbre. On dit qu\'elle aspire tout ce qui passe à moins de cent pas de sa gueule : poissons, animaux et pêcheurs. Mais elle est aussi la gardienne et la mère de toutes les eaux. Les sources et les rivières naîtraient d\'elle. Avant d\'entrer dans l\'eau, les pêcheurs soufflaient dans une corne pour la prévenir et lui demander la permission.',
    fact: 'L\'anaconda vert, qui a inspiré la légende, est le plus lourd serpent du monde.',
    meaning: 'La Yacumama incarne la force du fleuve, nourricier mais dangereux, et ses courants qui emportent les hommes. Elle rappelle qu\'il faut demander la permission à la nature avant d\'y entrer.',
    origin: 'Des peuples d\'Amazonie, au Pérou et au Brésil. Son nom vient du quechua : yaku, « eau », et mama, « mère ».',
    tip: 'Massive comme la rivière : un colosse à 20 mots.' },
  { id: 'gargouille', name: 'Gargouille', from: 'France', reg: 'Europe', rar: 'Nocturne', cond: 'night', rules: ['strict'], mode: 'w',
    story: 'Au VIIe siècle, un dragon appelé la Gargouille vivait dans la Seine, près de Rouen. Il crachait du feu et de l\'eau, renversait les bateaux et provoquait des inondations. Chaque année, les habitants devaient lui sacrifier une victime. L\'évêque saint Romain décida de l\'affronter, accompagné d\'un seul condamné à mort. Il dompta le monstre en faisant le signe de croix, et le ramena en ville tenu par une simple étole. La Gargouille fut brûlée, mais sa tête et son cou, durcis par son propre feu, refusèrent de brûler. On les fixa alors sur les murs de la cathédrale. Depuis, on dit que les gargouilles de pierre gardent les églises.',
    fact: 'Les vraies gargouilles servent de gouttières : elles évacuent l\'eau de pluie par leur bouche. Leur nom vient de « gargouiller ».',
    meaning: 'La légende relie un monstre à une invention bien réelle : les gouttières sculptées des cathédrales. Les crues de la Seine étaient un vrai danger pour Rouen. Les gargouilles de pierre, aux visages effrayants, étaient aussi censées chasser le mal des lieux saints.',
    origin: 'De Rouen, en Normandie. La légende de saint Romain est racontée depuis le Moyen Âge, et le mot « gargouille » apparaît au XIIIe siècle.',
    tip: 'Figée dans la pierre gravée : à vue, la nuit, et sans faute.' },
  { id: 'drac', name: 'Drac', from: 'Provence', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['trick'], mode: 'both',
    story: 'Le Drac est un dragon qui vit au fond du Rhône, près de Beaucaire. Il peut se rendre invisible et prendre forme humaine pour se promener en ville. Selon la légende, une lavandière qui lavait son linge au bord du fleuve vit flotter une coupe d\'or. En voulant l\'attraper, elle fut entraînée au fond de l\'eau par le Drac, qui l\'emmena dans son palais sous le fleuve pour qu\'elle nourrisse son petit. Elle y resta sept ans. Un jour, par erreur, elle se frotta l\'œil avec de la graisse magique et put voir le Drac même invisible. Elle finit par être libérée. Mais des années plus tard, le reconnaissant en ville, elle le salua. Furieux d\'être démasqué, le Drac lui creva l\'œil.',
    fact: 'Chaque été, les fêtes de Beaucaire font encore défiler un Drac géant.',
    meaning: 'Le Drac incarne le Rhône, ses crues et ses noyades, mais aussi la tentation : il attire ses victimes avec de l\'or. La fin de l\'histoire montre qu\'il est dangereux de voir ce qui doit rester caché.',
    origin: 'De Provence, au Moyen Âge. Le récit est rapporté par l\'écrivain Gervais de Tilbury au début du XIIIe siècle.',
    tip: 'Il change d\'apparence : la langue de réponse change à chaque mot.' },
  { id: 'gevaudan', name: 'Bête du Gévaudan', from: 'France', reg: 'Europe', rar: 'Nocturne', cond: 'night', rules: ['greedy'], mode: 'both',
    story: 'Entre 1764 et 1767, une bête mystérieuse terrorise le Gévaudan, une région de montagnes du sud de la France. Elle attaque surtout des enfants et des femmes qui gardent les troupeaux. On compte environ cent morts. Les témoins décrivent un animal plus grand qu\'un loup, au pelage roux, avec une raie noire sur le dos, une longue queue et une gueule énorme. Elle semble insensible aux balles et apparaît à des endroits très éloignés le même jour. Le roi Louis XV envoie ses meilleurs chasseurs. En 1765, son porte-arquebuse tue un grand loup, mais les attaques reprennent. C\'est en 1767 qu\'un paysan, Jean Chastel, abat enfin une bête, et les attaques cessent.',
    fact: 'Personne ne sait encore aujourd\'hui ce qu\'était vraiment la Bête : loup, hybride, animal exotique échappé ?',
    meaning: 'La Bête du Gévaudan est une histoire vraie qui est devenue une légende : les attaques ont bien eu lieu. Elle montre comment la peur, les rumeurs et les journaux de l\'époque ont transformé des attaques de loups en mystère national.',
    origin: 'Du Gévaudan, l\'actuelle Lozère, au XVIIIe siècle. C\'est l\'une des premières affaires suivies par toute la presse française et européenne.',
    tip: 'Elle rôde la nuit et ne lâche pas sa proie : le mot raté revient.' },
  { id: 'pixiu', name: 'Pixiu', from: 'Chine', reg: 'Asie', rar: 'Rare', cond: 'always', rules: ['strict'], mode: 'both',
    story: 'Le pixiu est une créature céleste à tête de dragon, au corps de lion, avec des ailes, des sabots et une ou deux cornes. Il est le fils du Roi Dragon et a un appétit insatiable pour l\'or, l\'argent et les pierres précieuses. Mais un jour, il se soulagea dans le palais céleste, et l\'Empereur de Jade, furieux, le punit : il lui boucha le derrière pour toujours. Depuis, le pixiu peut tout avaler, mais plus rien ne sort. Les richesses qu\'il mange restent en lui. Il est aussi un féroce gardien qui chasse les démons et les mauvais esprits.',
    fact: 'En Chine, de nombreux commerçants posent une statuette de pixiu près de leur caisse, tournée vers la porte.',
    meaning: 'Le pixiu est devenu un porte-bonheur pour attirer l\'argent et surtout le garder. Comme les richesses entrent en lui mais n\'en sortent jamais, il protège contre les pertes et la ruine. C\'est pour ça qu\'on le trouve chez les commerçants et dans les banques.',
    origin: 'De Chine, depuis plus de 2 000 ans. On a retrouvé des statues de créatures ailées de ce type devant des tombeaux de la dynastie Han.',
    tip: 'Rien ne lui échappe : aucune faute permise.' },
  { id: 'biche', name: 'Biche de Cérynie', from: 'Grèce', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['rush'], mode: 'both',
    story: 'La biche de Cérynie était une créature sacrée de la déesse Artémis. Plus grande qu\'un taureau, elle avait des sabots de bronze et des bois en or. Elle était si rapide qu\'elle pouvait distancer une flèche en plein vol. Pour son troisième travail, Hercule devait la capturer vivante, sans la blesser, pour ne pas offenser Artémis. Il la poursuivit pendant une année entière, à travers toute la Grèce et jusqu\'au pays mystérieux des Hyperboréens. Il finit par la prendre au moment où, épuisée, elle s\'arrêtait pour boire dans une rivière.',
    fact: 'Les biches n\'ont normalement pas de bois : c\'est ce qui rendait celle-ci si extraordinaire.',
    meaning: 'La biche de Cérynie n\'est pas un monstre : c\'est un animal sacré, et l\'épreuve n\'est pas de la tuer, mais de la rattraper sans lui faire de mal. Elle teste la patience et l\'endurance du héros plutôt que sa force.',
    origin: 'De la mythologie grecque. Cérynie se trouvait dans le Péloponnèse, en Arcadie. Le poète Pindare et l\'auteur Apollodore racontent sa poursuite.',
    tip: 'La plus rapide de toutes : 10 secondes par mot.' },
  { id: 'sanglier', name: 'Sanglier d\'Érymanthe', from: 'Grèce', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Le sanglier d\'Érymanthe était une bête énorme et furieuse qui vivait sur le mont Érymanthe, en Arcadie. Il dévastait les champs, déracinait les arbres et éventrait les hommes et les animaux avec ses défenses gigantesques. Pour son quatrième travail, Hercule devait le capturer vivant. C\'était l\'hiver. Hercule eut une idée : il poussa le sanglier par ses cris jusque dans la neige profonde du sommet. La bête, enlisée et épuisée, ne pouvait plus avancer. Hercule la ligota et la ramena sur ses épaules au roi Eurysthée, qui fut si terrifié en la voyant qu\'il alla se cacher dans une jarre en bronze.',
    fact: 'Les défenses du sanglier auraient été conservées dans un temple d\'Apollon, en Grèce.',
    meaning: 'Le sanglier d\'Érymanthe montre la force sauvage de la nature, que l\'homme ne vainc pas en l\'affrontant de face mais en utilisant le terrain. Le roi caché dans sa jarre est un moment comique, qui montre la lâcheté du commanditaire face au courage du héros.',
    origin: 'De la mythologie grecque. Le mont Érymanthe existe vraiment, dans le nord-ouest du Péloponnèse.',
    tip: 'Une charge de colosse : tiens bon jusqu\'au bout.' },
  { id: 'stymphale', name: 'Oiseaux du Stymphale', from: 'Grèce', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['hydra'], mode: 'e',
    story: 'Autour du lac Stymphale, en Grèce, vivait une nuée d\'oiseaux monstrueux. Leurs plumes étaient de bronze, si tranchantes qu\'ils les lançaient comme des flèches sur les hommes et les troupeaux. Leurs becs et leurs griffes perçaient les armures, et ils étaient si nombreux qu\'ils cachaient le soleil quand ils s\'envolaient. Leur fiente empoisonnée gâchait les récoltes. Pour son sixième travail, Hercule ne pouvait pas les atteindre dans les marais. La déesse Athéna lui donna des crotales de bronze, des castagnettes forgées par Héphaïstos. Leur vacarme effraya les oiseaux, qui s\'envolèrent tous d\'un coup, et Hercule les abattit avec ses flèches.',
    fact: 'C\'est par le bruit qu\'Hercule les a vaincus : une victoire à l\'ouïe.',
    meaning: 'Les oiseaux du Stymphale représentent un fléau qui vient du ciel et qu\'on ne peut pas combattre directement. La solution n\'est pas la force, mais le bruit : il faut d\'abord les faire sortir de leur cachette.',
    origin: 'De la mythologie grecque. Le lac Stymphale se trouve dans le Péloponnèse, en Arcadie, et existe encore aujourd\'hui.',
    tip: 'On les chasse au son, à l\'ouïe. Une nuée : chaque erreur en ajoute un.' },
  { id: 'taureau', name: 'Taureau de Crète', from: 'Grèce', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['colossus'], mode: 'both',
    story: 'Le taureau de Crète était un animal magnifique, blanc comme la neige, que le dieu Poséidon avait fait sortir de la mer. Il l\'avait offert au roi Minos, qui devait le lui sacrifier. Mais Minos le trouva si beau qu\'il le garda et sacrifia un autre taureau à la place. Pour se venger, Poséidon rendit l\'animal fou furieux. Le taureau ravagea l\'île de Crète, détruisant les récoltes et les murs. Pour son septième travail, Hercule le captura à mains nues et l\'emmena en Grèce. Libéré, il erra jusqu\'à Marathon, où il continua à semer la terreur, jusqu\'à ce que le héros Thésée le capture à son tour.',
    fact: 'Ce taureau serait le père du Minotaure.',
    meaning: 'Le taureau de Crète est né d\'une promesse non tenue à un dieu. Il montre ce qui arrive quand on garde pour soi ce qu\'on a promis de donner. Le taureau était aussi un animal sacré en Crète, où l\'on pratiquait des jeux acrobatiques en sautant par-dessus.',
    origin: 'De la mythologie grecque, liée à la civilisation minoenne de Crète, connue pour ses fresques de taureaux au palais de Cnossos.',
    tip: 'Force brute : un colosse à 20 mots.' },
  { id: 'juments', name: 'Juments de Diomède', from: 'Grèce', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['greedy'], mode: 'both',
    story: 'Le roi Diomède régnait sur la Thrace, une région sauvage au nord de la Grèce. Il possédait quatre juments magnifiques mais terrifiantes : elles ne mangeaient pas de foin, mais de la chair humaine. Le roi leur donnait à dévorer les étrangers qui arrivaient dans son royaume. Elles étaient si féroces qu\'on devait les attacher avec des chaînes de bronze à des mangeoires de bronze. Elles soufflaient du feu par les naseaux. Pour son huitième travail, Hercule devait les ramener. Il vainquit Diomède et le donna à manger à ses propres juments. Une fois repues, elles devinrent calmes, et Hercule put les emmener.',
    fact: 'Selon la légende, la célèbre lignée du cheval d\'Alexandre le Grand, Bucéphale, descendrait de ces juments.',
    meaning: 'Les juments de Diomède montrent la cruauté d\'un roi tyran, puni par là où il avait péché. Le cheval, symbole de noblesse et de puissance, devient ici un monstre, car il a été mal élevé par son maître.',
    origin: 'De la mythologie grecque. La Thrace correspond à une région partagée aujourd\'hui entre la Grèce, la Bulgarie et la Turquie.',
    tip: 'Elles sont insatiables : chaque mot raté revient.' },
  { id: 'geryon', name: 'Géryon', from: 'Grèce', reg: 'Europe', rar: 'Rare', cond: 'always', rules: ['hydra'], mode: 'both',
    story: 'Géryon était un géant qui vivait sur l\'île d\'Érythie, à l\'extrême ouest du monde, là où le soleil se couche. Il avait trois corps reliés à la taille, avec trois têtes, six bras et six jambes, et selon certains, des ailes. Il possédait un magnifique troupeau de bœufs rouges, gardé par le berger Eurytion et par Orthros, un chien à deux têtes. Pour son dixième travail, Hercule devait voler ce troupeau. Il traversa la mer dans une coupe d\'or prêtée par le dieu Soleil, tua le chien et le berger, puis affronta Géryon. Il le vainquit en tirant une seule flèche qui transperça les trois corps.',
    fact: 'En route, Hercule aurait dressé deux colonnes de chaque côté du détroit de Gibraltar : les « colonnes d\'Hercule ».',
    meaning: 'Géryon représente les terres lointaines et inconnues de l\'Ouest, au bout du monde connu des Grecs. Ses trois corps en font un adversaire triple, que le héros doit vaincre d\'un seul coup.',
    origin: 'De la mythologie grecque. On situait son île près de Cadix, en Espagne, au-delà du détroit de Gibraltar.',
    tip: 'Trois guerriers en un : chaque erreur ajoute un mot.' },
  { id: 'orthros', name: 'Orthros', from: 'Grèce', reg: 'Europe', rar: 'Commun', cond: 'always', rules: ['classic'], mode: 'both',
    story: 'Orthros était un chien monstrueux à deux têtes, le frère de Cerbère, le chien des Enfers. Selon certains, il avait aussi une queue de serpent. Il gardait le troupeau de bœufs rouges du géant Géryon, sur l\'île d\'Érythie, à l\'extrême ouest du monde, avec le berger Eurytion. Rien ne lui échappait, car ses deux têtes surveillaient dans deux directions à la fois. Quand Hercule arriva pour son dixième travail, Orthros se jeta sur lui le premier. Le héros l\'assomma d\'un seul coup de sa massue d\'olivier, avant d\'affronter le berger puis Géryon lui-même.',
    fact: 'Il était aussi le père du Sphinx et du lion de Némée, selon certains auteurs grecs.',
    meaning: 'Orthros est le gardien qui ne dort jamais, mais qui tombe le premier. Il fait partie d\'une grande famille de monstres grecs : fils de Typhon et d\'Échidna, il est le frère de Cerbère, de l\'hydre et de la Chimère.',
    origin: 'De la mythologie grecque, chez Hésiode vers 700 avant J.-C. Il est souvent représenté sur les vases grecs à côté d\'Hercule et de Géryon.',
    tip: 'Deux têtes, mais un combat classique.' },
  { id: 'ladon', name: 'Ladon', from: 'Grèce', reg: 'Europe', rar: 'Légendaire', cond: 'always', rules: ['strict', 'colossus'], mode: 'both',
    story: 'Ladon était un dragon à cent têtes, chacune parlant une langue différente. La déesse Héra lui avait confié la garde du jardin des Hespérides, à l\'extrême ouest du monde, où poussait un arbre aux pommes d\'or. Ces pommes étaient un cadeau de mariage offert à Héra, et elles donnaient l\'immortalité. Ladon s\'enroulait autour de l\'arbre et ne dormait jamais. Pour son onzième travail, Hercule devait rapporter trois pommes d\'or. Selon les versions, il tua Ladon d\'une flèche empoisonnée trempée dans le sang de l\'hydre, ou il demanda au géant Atlas d\'aller cueillir les pommes à sa place.',
    fact: 'Après sa mort, Héra l\'aurait placé dans le ciel : c\'est la constellation du Dragon.',
    meaning: 'Ladon est le gardien du trésor le plus précieux, l\'immortalité. Les héros qui veulent s\'en approcher doivent passer par lui.',
    origin: 'De la mythologie grecque. Hésiode et Apollodore racontent l\'histoire du jardin des Hespérides et des pommes d\'or.',
    tip: 'Très rare. 20 mots sans la moindre faute : le vrai défi des Douze Travaux.' }
];
// hidden chance of appearing, by rarity (relative weights)
const RATE = { Commun: 5, Rare: 2.5, Nocturne: 4, Saisonnier: 5, Légendaire: 0.6 };
BEASTS.forEach(b => { b.has = true; b.rate = RATE[b.rar]; });
const captured = e => ((e?.wins || 0) + (e?.winsE || 0)) > 0;
const mastered = (be, e) => be.mode === 'both' ? !!(e?.wins && e?.winsE) : captured(e);
const RULES = {
  classic: 'Combat classique : 10 mots, 3 vies.',
  fragile: 'Fragile : une seule vie.',
  chrono: 'Chrono : 10 secondes par mot.',
  colossus: 'Colosse : 20 mots, 5 vies.',
  hydra: 'Hydre : chaque erreur ajoute un mot.',
  greedy: 'Vorace : chaque erreur lui rend un mot de vie.',
  strict: 'Implacable : aucune faute de frappe tolérée.',
  trick: 'Trompeur : la langue de réponse change à chaque mot.',
  rush: 'Contre la montre : tue-le avant la fin du temps.',
  regen: 'Régénération : s\'il reste trop longtemps sans être touché, il récupère un mot de vie.'
};
const REGIONS = ['Europe', 'Asie', 'Amériques', 'Afrique et Moyen-Orient', 'Océanie', 'Monde entier'];
const RARS = ['Commun', 'Rare', 'Nocturne', 'Saisonnier', 'Légendaire'];
const RULE_NAMES = { classic: 'Classique · 10 mots, 3 vies', colossus: 'Colosse · 20 mots, 5 vies', fragile: 'Fragile · 1 vie', chrono: 'Chrono · 10 s par mot', hydra: 'Hydre · gagne des mots', greedy: 'Vorace · récupère de la vie', strict: 'Implacable · aucune faute', trick: 'Trompeur · langue qui change', rush: 'Contre la montre · temps total', regen: 'Régénération · se soigne' };
const RAR_COL = { Commun: '#6b7f72', Rare: '#3b82f6', Nocturne: '#6d3fb0', Saisonnier: '#d97706', Légendaire: '#b91c1c' };
const BOSS_MIN = 20, CHRONO_S = 10;
// rush: total time to kill it, counted only while a question is on screen; a bit more at the ouïe (listening takes time)
// regen: one word of life back after this many seconds without a correct answer (at most REGEN_MAX times)
const RUSH_PER = { w: 4.5, e: 6.5 }, REGEN_S = { w: 8, e: 11 }, REGEN_MAX = 8;
const timedRules = r => r.some(x => x === 'chrono' || x === 'rush' || x === 'regen');
const beast = id => BEASTS.find(x => x.id === id);
// moon age in days (0 = new moon, ~14.8 = full moon), from a known new moon
const moonAge = t => { const syn = 29.530588853, ref = Date.UTC(2000, 0, 6, 18, 14); return (((t - ref) / DAY) % syn + syn) % syn; };
// if the clock went back in time, special appearances are blocked
const clockOk = () => Date.now() >= (cfg.stats.maxSeen || 0) - 3600000;
function beastCan(b) {
  if (b.mode !== 'both' && b.mode !== (ui.huntTrack || 'w')) return false;
  const now = new Date(), h = now.getHours(), m = now.getMonth(), d = now.getDate();
  if (b.cond === 'always') return true;
  if (b.cond === 'korean') return cfg.filt.on.some(isKorean);
  if (!clockOk()) return false;
  const night = h >= 21 || h < 5, winter = m === 11 || m <= 1;
  if (b.cond === 'night') return night;
  if (b.cond === 'fullmoon') return Math.abs(moonAge(Date.now()) - 14.77) <= 1.2;
  if (b.cond === 'winter') return winter;
  if (b.cond === 'winternight') return winter && night;
  if (b.cond === 'halloween') return (m === 9 && d >= 25) || (m === 10 && d <= 1);
  if (b.cond === 'december') return m === 11;
  if (b.cond === 'summer') return m >= 5 && m <= 7;
  if (b.cond === 'lunarny') { const t = midnight(Date.now()); return SEOLLAL.some(x => { const [y, mo, dd] = x.split('-').map(Number); return Math.abs(new Date(y, mo - 1, dd).getTime() - t) <= 3.5 * DAY; }); }
  return false;
}
// weighted draw among the creatures that can appear now, except the one that just fled
function drawBeast() {
  const fled = cfg.stats.fled, c = BEASTS.filter(b => beastCan(b) && b.id !== fled);
  const list = c.length ? c : BEASTS.filter(beastCan);
  let r = Math.random() * list.reduce((n, b) => n + b.rate, 0);
  for (const b of list) { r -= b.rate; if (r <= 0) return b; }
  return list[list.length - 1];
}
function bossPool(n) {
  const ok = askable(), c = [...words.values()].filter(ok);
  const K = w => ST(w).ko || 0, O = w => ST(w).ok || 0;
  const hard = c.filter(w => K(w) > 0).sort((a, b) => (K(b) - O(b) * .3) - (K(a) - O(a) * .3) || lvlOf(a) - lvlOf(b));
  const rest = c.filter(w => !K(w)).sort((a, b) => lvlOf(a) - lvlOf(b) || Math.random() - .5);
  const top = [...hard, ...rest].slice(0, n * 2);
  for (let i = top.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [top[i], top[j]] = [top[j], top[i]]; }
  return { pick: top.slice(0, n), spare: [...hard, ...rest].filter(w => !top.slice(0, n).includes(w)), total: c.length };
}
function bossQ() {
  const b = ui.boss;
  while (b.i < b.ids.length && !words.get(b.ids[b.i])) b.i++;
  const w = words.get(b.ids[b.i]);
  if (!w) return null;
  const S = b.rules.includes('trick') ? uniq(['fr', ...cfg.filt.on]).sort(() => Math.random() - .5) : answerLangs();
  let qs = qsFor(w, S, cpIndex());
  if (b.rules.includes('trick') && qs.length > 1) { const al = qs[Math.floor(Math.random() * qs.length)].al; qs = qs.filter(q => q.al === al); }
  const q = qs.length ? { id: w.id, ...qs[Math.floor(Math.random() * qs.length)] } : { id: w.id, prompt: w.en, pl: wLang(w), answers: w.fr, al: 'fr' };
  if (b.rules.includes('chrono')) b.deadline = Date.now() + CHRONO_S * 1000;
  return q;
}
let bossTimer = null;
function stopBossTimer() { clearInterval(bossTimer); bossTimer = null; }
function bossTick() {
  const b = ui.boss;
  if (!b || b.state !== 'run' || !timedRules(b.rules) || view !== 'hunt') return stopBossTimer();
  if (b.phase !== 'ask') return;
  const now = Date.now(), cur = now - (b.askStart || now);
  if (b.rules.includes('rush')) {
    const rl = Math.max(0, (b.rushMs - b.askMs - cur) / 1000), t = $('#brush'), bar = $('#rbar');
    if (t) t.textContent = Math.ceil(rl);
    if (bar) { bar.style.width = (rl * 1000 / b.rushMs * 100) + '%'; bar.classList.toggle('low', rl <= 10); }
    if (rl <= 0) { b.askMs += cur; b.timeUp = true; return bossEnd(false); }
  }
  if (b.rules.includes('regen') && b.regens < REGEN_MAX) {
    const per = REGEN_S[ui.huntTrack || 'w'] * 1000, gl = per - b.sinceHit - cur, el = $('#bregen');
    if (el) el.textContent = `Se régénère dans ${Math.max(0, Math.ceil(gl / 1000))} s`;
    if (gl <= 0) {
      b.sinceHit -= per; b.regens++;
      const back = b.spare.length ? b.spare.shift() : b.ids[Math.floor(Math.random() * Math.max(1, b.i))];
      b.ids.push(back);
      const hp = $('.hp'); if (hp) hp.insertAdjacentHTML('beforeend', '<i class="new"></i>');
      const c = $('#bcount'); if (c) c.textContent = b.ids.length;
      const a = $('.arena .beast'); if (a) { a.classList.remove('heal'); void a.offsetWidth; a.classList.add('heal'); }
      if (el && b.regens >= REGEN_MAX) el.textContent = 'Il ne peut plus se régénérer';
    }
  }
  if (b.rules.includes('chrono')) {
    const left = Math.max(0, (b.deadline - now) / 1000), t = $('#btime'), bar = $('#tbar');
    if (t) t.textContent = Math.ceil(left);
    if (bar) { bar.style.width = (left / CHRONO_S * 100) + '%'; bar.classList.toggle('low', left <= 3); }
    if (left <= 0) bossAnswer('', true);
  }
}
function bossStart() {
  const be = drawBeast();
  if (!be) { toast('Aucune créature disponible pour l\'instant.'); return; }
  const rules = be.rules, n = rules.includes('colossus') ? 20 : 10;
  const pool = bossPool(n);
  if (pool.total < BOSS_MIN) { toast(`Il faut au moins ${BOSS_MIN} mots dans ta sélection pour partir en chasse.`); return; }
  const lives = rules.includes('fragile') ? 1 : rules.includes('colossus') ? 5 : 3;
  ui.boss = { state: 'intro', beast: be.id, rules, ids: pool.pick.map(w => w.id), spare: pool.spare.map(w => w.id), i: 0, lives, maxLives: lives, hits: 0, phase: 'ask', askMs: 0, sinceHit: 0, regens: 0, rushMs: Math.round(n * RUSH_PER[ui.huntTrack || 'w'] * 1000) };
  // the creature that fled is only kept away for this one hunt
  cfg.stats.fled = null;
  const bs = { ...(cfg.beasts || {}) }; bs[be.id] = { ...(bs[be.id] || {}), seen: bs[be.id]?.seen || Date.now() }; cfg.beasts = bs; saveCfg();
  document.activeElement?.blur?.();
  render();
}
function bossFight() {
  const b = ui.boss;
  b.state = 'run'; b.cur = bossQ(); b.askStart = Date.now(); ui.toCard = true;
  stopBossTimer(); if (timedRules(b.rules)) bossTimer = setInterval(bossTick, 200);
  render();
}
function bossEnd(win) {
  const b = ui.boss;
  stopBossTimer();
  b.state = 'end'; b.win = win;
  const st = cfg.stats, k = ymd(Date.now());
  const bs = { ...(cfg.beasts || {}) }, e = { ...(bs[b.beast] || {}) };
  if (win) {
    if (st.bossDays === undefined) st.bossDays = st.bossWins || 0;
    st.bossWins = (st.bossWins || 0) + 1;
    if (st.bossDay !== k) { st.bossDay = k; st.bossDays++; }
    if (b.lives === 1 && b.maxLives > 1) award('phenix');
    if (st.bossLost) award('vengeance');
    st.bossLost = false;
    b.newBeast = !captured(e);
    if ((ui.huntTrack || 'w') === 'e') e.winsE = (e.winsE || 0) + 1; else e.wins = (e.wins || 0) + 1;
    if (!e.first) e.first = Date.now();
    confetti();
  } else { st.bossLost = true; st.fled = b.beast; e.lost = (e.lost || 0) + 1; }
  bs[b.beast] = e; cfg.beasts = bs;
  saveCfg();
  document.activeElement?.blur?.();
  render();
  celebrate();
}
function bossAnswer(val, timeout) {
  const b = ui.boss;
  if (!b || b.state !== 'run') return;
  if (b.phase === 'res') {
    if (b.lives <= 0) return bossEnd(false);
    b.i++;
    if (b.i >= b.ids.length) return bossEnd(true);
    b.cur = bossQ();
    if (!b.cur) return bossEnd(true);
    b.phase = 'ask'; b.askStart = Date.now(); ui.toCard = true; render(); return;
  }
  if (!timeout && !val.trim()) return;
  const spent = Date.now() - (b.askStart || Date.now());
  b.askMs = (b.askMs || 0) + spent; b.sinceHit = (b.sinceHit || 0) + spent;
  const q = b.cur, w = words.get(q.id);
  const ok = !timeout && (b.rules.includes('strict') ? q.answers.flatMap(variants).some(t => normT(t, q.al) === normT(val, q.al)) : check(val, q));
  q.given = timeout ? '' : val; q.ok = ok; q.timeout = !!timeout;
  if (ok) { b.hits++; b.sinceHit = 0; }
  else {
    b.lives--;
    // hydra: a new head (one more word); greedy: the missed word comes back at the end
    if (b.rules.includes('hydra') && b.spare.length && b.ids.length < 30) b.ids.push(b.spare.shift());
    if (b.rules.includes('greedy')) b.ids.push(q.id);
  }
  if (w) applyResult(w, ok);
  secretsAfterAnswer({ ok, q });
  b.phase = 'res';
  render();
  celebrate();
}
const beastImg = (be, cls) => `<img class="${cls || 'beast'}" src="boss-${be.id}.webp" alt="${esc(be.name)}">`;
const modeIcon = be => be.mode === 'w' ? ' · vue' : be.mode === 'e' ? ' · ouïe' : '';
const rarChip = be => `<span class="rar" style="--rc:${RAR_COL[be.rar]}">${esc(be.rar)}</span>`;
const hearts = (n, max) => Array.from({ length: max }, (_, i) => `<svg width="20" height="18" viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21 2.5 11.5A5.5 5.5 0 0 1 12 4a5.5 5.5 0 0 1 9.5 7.5z" fill="${i < n ? 'var(--red)' : 'none'}" stroke="var(--red)" stroke-width="2"/></svg>`).join('');
// monsters tab: choose to hunt at the plume or at the oreille
function renderHunt() {
  if (!words.size) return `<div class="empty"><h2>Pas encore de mots</h2><p>Ajoute des mots pour partir en chasse.</p><button class="btn" data-a="goadd">Ajouter des mots</button></div>`;
  const t = ui.huntTrack || 'w';
  const bar = `<div class="modes">${[['w', 'Chasse à vue'], ['e', 'Chasse à l\'ouïe']].map(([k, l]) => `<button class="mode" data-a="hunttrack" data-k="${k}" aria-pressed="${t === k}">${l}</button>`).join('')}</div>`;
  return bar + renderFilters() + renderBoss();
}
function renderBoss() {
  const b = ui.boss || (ui.boss = { state: 'ready' });
  const got = BEASTS.filter(x => captured((cfg.beasts || {})[x.id])).length, tot = BEASTS.length;
  const bestBtn = `<button class="btn ghost" data-a="bestiary">Bestiaire ${got}/${tot}</button>`;
  if (b.state === 'ready') {
    const fled = cfg.stats.fled && beast(cfg.stats.fled);
    return `<div class="card done game"><div class="beasts-q">${['?', '?', '?'].map(x => `<i>${x}</i>`).join('')}</div><b class="big">Chasse aux monstres</b><p>Des créatures du folklore du monde entier rôdent. Certaines sont communes, d'autres ne sortent que la nuit, à la pleine lune ou à certaines saisons. Bats-les pour les ajouter à ton bestiaire.</p>${fled ? `<p class="hint">${esc(fled.name)} s'est enfui lors du dernier combat.</p>` : ''}<div class="row center"><button class="btn" data-a="bossgo">Partir en chasse</button>${bestBtn}</div></div>`;
  }
  const be = beast(b.beast);
  if (b.state === 'intro') {
    const known = captured((cfg.beasts || {})[be.id]);
    return `<div class="card done game beastcard">${beastImg(be, 'beast big appear')}<p class="hint" style="margin:0">Une créature apparaît !</p><b class="big">${esc(be.name)}</b><p style="margin:0">${rarChip(be)} <span class="hint">${esc(be.from)}</span></p>${known ? '<p class="hint">Déjà dans ton bestiaire.</p>' : '<p class="hint"><b>Nouvelle créature !</b></p>'}<div class="rules">${b.rules.map(r => `<span>${esc(RULES[r])}</span>`).join('')}</div><div class="row center"><button class="btn" data-a="bossfight">Combattre</button></div></div>`;
  }
  if (b.state === 'end') {
    const msg = b.win ? `${b.newBeast ? `<b>${esc(be.name)}</b> rejoint ton bestiaire !` : `Encore une victoire contre ${esc(be.name)}.`} ${plural(b.hits, 'bonne réponse', 'bonnes réponses')}${b.maxLives > 1 ? `, ${plural(b.lives, 'vie restante', 'vies restantes')}` : ''}.` : `${b.timeUp ? 'Temps écoulé ! ' : ''}${esc(be.name)} s'est enfui. Tu ne le recroiseras pas au prochain combat. Les mots ratés sont repassés en case Nouv. : révise-les avant de repartir en chasse.`;
    return `<div class="card done game beastcard">${beastImg(be, 'beast big' + (b.win ? ' beaten' : ' flee'))}<b class="big">${b.win ? esc(be.name) + ' vaincu !' : 'Il s\'est enfui…'}</b><p>${msg}</p><div class="row center"><button class="btn" data-a="bossgo">Repartir en chasse</button>${bestBtn}</div></div>`;
  }
  const q = b.cur, n = b.ids.length, res = b.phase === 'res', chrono = b.rules.includes('chrono');
  const hp = `<div class="hp" aria-label="Vie de la créature">${b.ids.map((_, i) => `<i class="${i < b.i + (res && q.ok ? 1 : 0) ? 'gone' : ''}"></i>`).join('')}</div>`;
  const left = chrono ? Math.max(0, Math.ceil((b.deadline - Date.now()) / 1000)) : 0;
  if (timedRules(b.rules) && !res && !bossTimer) bossTimer = setInterval(bossTick, 200);
  const rush = b.rules.includes('rush'), regen = b.rules.includes('regen');
  const rl = rush ? Math.max(0, b.rushMs - b.askMs - (res ? 0 : Date.now() - b.askStart)) : 0;
  const rushBox = rush ? `<div class="dir" style="margin-top:8px"><span>Temps pour le vaincre</span><span><b id="brush">${Math.ceil(rl / 1000)}</b> s${res ? ' · en pause' : ''}</span></div><div class="tbar"><i id="rbar" class="${rl <= 10000 ? 'low' : ''}" style="width:${rl / b.rushMs * 100}%"></i></div>` : '';
  const gl = regen ? REGEN_S[ui.huntTrack || 'w'] * 1000 - b.sinceHit : 0;
  const regenBox = regen ? `<p class="hint regen" id="bregen">${b.regens >= REGEN_MAX ? 'Il ne peut plus se régénérer' : res ? (q.ok ? 'Touché : sa régénération repart de zéro' : 'Se régénère dans ' + Math.max(0, Math.ceil(gl / 1000)) + ' s') : 'Se régénère dans ' + Math.max(0, Math.ceil(gl / 1000)) + ' s'}</p>` : '';
  return `<div class="card ${res ? (q.ok ? 'ok' : 'ko') : ''}">
    <div class="arena">${beastImg(be, 'beast mid' + (res && q.ok ? ' hit' : ''))}<div class="arena-top"><b>${esc(be.name)}</b><div class="lives">${hearts(b.lives, b.maxLives)}</div></div>${hp}${regenBox}</div>${rushBox}
    <div class="dir" style="margin-top:10px"><span class="flag">${esc(flagOf(q))}</span><span>Mot ${b.i + 1}/<span id="bcount">${n}</span>${chrono && !res ? ` · <b id="btime">${left}</b> s` : ''}</span></div>
    ${chrono && !res ? `<div class="tbar"><i id="tbar" style="width:${left / CHRONO_S * 100}%"></i></div>` : ''}
    ${promptBox(q, 'b' + b.i + q.id, res)}
    ${res ? (q.timeout ? `<div class="flash ko">Trop lent ! La réponse était <b>${esc(q.answers.join(' ou '))}</b></div>` : resultBox(q, q.ok)) : ''}
    <form id="bf" autocomplete="off" style="margin-top:14px">${answerInput(q, res ? (b.lives <= 0 ? 'Entrée pour voir le résultat' : 'Entrée pour continuer') : 'En ' + langName(q.al) + '…', res ? 'next' : 'done')}<div class="row"><button class="btn grow" type="submit">${res ? (b.lives <= 0 || b.i + 1 >= n ? 'Voir le résultat' : 'Continuer') : 'Attaquer'}</button></div></form>
  </div>`;
}

/* bestiary: every creature, numbered; "?" if never met, silhouette if met but not beaten */
function renderBest() {
  const list = BEASTS.filter(x => x.has), bs = cfg.beasts || {};
  const got = list.filter(x => captured(bs[x.id])).length, mast = list.filter(x => mastered(x, bs[x.id])).length;
  const card = be => {
    const e = bs[be.id] || {}, num = String(list.indexOf(be) + 1).padStart(3, '0');
    if (!e.seen) return `<button class="bcard" data-a="beast" data-k="${be.id}"><span class="num">N° ${num}</span><div class="bq">?</div><b>???</b></button>`;
    const c = captured(e), m = mastered(be, e);
    return `<button class="bcard${c ? ' on' : ''}${m ? ' mast' : ''}" data-a="beast" data-k="${be.id}"><span class="num">N° ${num}${modeIcon(be)}</span>${beastImg(be, 'bimg2' + (c ? '' : ' locked'))}<b>${esc(be.name)}</b>${c ? rarChip(be) : '<span class="hint">Pas encore vaincu</span>'}</button>`;
  };
  // sorting: by number, origin, rarity or type of fight (a creature with two rules is in both groups)
  const sort = ui.bestSort || 'num';
  const groups = sort === 'origin' ? REGIONS.map(r => [r, list.filter(b => b.reg === r)])
    : sort === 'rar' ? RARS.map(r => [r, list.filter(b => b.rar === r)])
    : sort === 'rule' ? Object.keys(RULE_NAMES).map(r => [RULE_NAMES[r], list.filter(b => b.rules.includes(r))])
    : [['', list]];
  const cards = groups.filter(g => g[1].length).map(([t, l]) => `${t ? `<h3 class="bgh">${esc(t)} <span class="note">${l.filter(b => captured(bs[b.id])).length}/${l.length}</span></h3>` : ''}<div class="bgrid">${l.map(card).join('')}</div>`).join('');
  const sorts = [['num', 'Numéro'], ['origin', 'Origine'], ['rar', 'Rareté'], ['rule', 'Type de combat']].map(([k, n]) => `<button class="chip" data-a="bestsort" data-k="${k}" aria-pressed="${sort === k}">${n}</button>`).join('');
  return `<section><div class="row" style="justify-content:space-between;align-items:center"><h2 style="margin:0">Bestiaire</h2><button class="btn ghost" data-a="bestback">Retour</button></div>
    <div class="bcount"><div><b>${got}/${list.length}</b><span>capturées</span></div><div><b>${mast}/${list.length}</b><span>maîtrisées</span></div></div>
    <p class="note" style="margin-top:0">Une créature est <b>capturée</b> dès ta première victoire, et <b>maîtrisée</b> quand tu l'as battue à vue et à l'ouïe (ou dans son seul mode pour celles qui ne se chassent qu'à vue ou qu'à l'ouïe).</p>
    <p class="note">Chaque créature battue rejoint ton bestiaire. Certaines sont rares, d'autres ne sortent que la nuit, à la pleine lune ou à certaines périodes de l'année.</p>
    <div class="fl" style="margin:8px 0 4px">${sorts}</div>
    ${cards}</section>${renderBeastView()}`;
}
function renderBeastView() {
  const id = ui.beastView, be = id && beast(id);
  if (!be) return '';
  const e = (cfg.beasts || {})[id] || {}, num = String(BEASTS.filter(x => x.has).indexOf(be) + 1).padStart(3, '0');
  const date = t => new Date(t).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  let body;
  if (!e.seen) body = `<div class="q">?</div><b class="big2">N° ${num} · ???</b><p>Tu n'as pas encore croisé cette créature. Continue la chasse !</p>`;
  else if (!captured(e)) body = `${beastImg(be, 'locked')}<b class="big2">${esc(be.name)}</b><p>N° ${num} · ${esc(be.from)}</p><p>Rencontrée, mais pas encore vaincue.</p>`;
  else {
    const seal = (k, n, on) => `<span class="seal${on ? ' on' : ''}">Vaincu ${n}</span>`;
    const seals = be.mode === 'both' ? seal('w', 'à vue', e.wins) + seal('e', 'à l\'ouïe', e.winsE) : be.mode === 'w' ? seal('w', 'à vue', e.wins) : seal('e', 'à l\'ouïe', e.winsE);
    body = `${beastImg(be, '')}<b class="big2">${esc(be.name)}</b><p>N° ${num} · ${esc(be.from)} · ${rarChip(be)}</p>
      <div class="seals">${seals}</div>${be.mode !== 'both' ? `<p class="hint">Ne se chasse qu'${be.mode === 'w' ? 'à vue' : 'à l\'ouïe'}.</p>` : ''}
      <div class="lore"><h4>La légende</h4><p>${esc(be.story)}</p>${be.meaning ? `<h4>Ce que raconte la légende</h4><p>${esc(be.meaning)}</p>` : ''}<h4>Le savais-tu ?</h4><p>${esc(be.fact)}</p>${be.origin ? `<h4>Origine</h4><p>${esc(be.origin)}</p>` : ''}</div>
      <div class="rules">${be.rules.map(r => `<span>${esc(RULES[r])}</span>`).join('')}</div><p class="hint">${plural((e.wins || 0) + (e.winsE || 0), 'victoire', 'victoires')} · première le ${date(e.first)}</p>`;
  }
  return `<div class="bview bb" data-a="bclose"><button class="xclose" data-a="bclose" aria-label="Fermer">×</button><div>${body}<div class="row center" style="margin-top:10px"><button class="btn" data-a="bclose">Fermer</button></div></div></div>`;
}

/* duel */
function duelStart() {
  const n1 = ($('#d-n1')?.value || '').trim() || cfg.duelNames?.[0] || 'Joueur 1';
  const n2 = ($('#d-n2')?.value || '').trim() || cfg.duelNames?.[1] || 'Joueur 2';
  if (n1 !== cfg.duelNames?.[0] || n2 !== cfg.duelNames?.[1]) { cfg.duelNames = [n1, n2]; saveCfg(); }
  const qs = [], used = [];
  for (let i = 0; i < 10; i++) { const q = pickQ(used); if (!q || used.includes(q.id)) break; used.push(q.id); qs.push(q); }
  if (qs.length < 3) { toast('Il faut au moins 3 mots dans ta sélection pour un duel.'); return; }
  ui.duel = { state: 'turn', p: 0, qs, i: 0, scores: [0, 0], phase: 'ask', names: [n1, n2] };
  document.activeElement?.blur?.();
  render();
}
function duelPlay() { const d = ui.duel; d.state = 'play'; d.i = 0; d.phase = 'ask'; d.given = ''; ui.toCard = true; render(); }
function duelAnswer(val) {
  const d = ui.duel;
  if (!d || d.state !== 'play') return;
  if (d.phase === 'res') {
    d.i++;
    if (d.i >= d.qs.length) {
      if (d.p === 0) { d.p = 1; d.state = 'turn'; }
      else { d.state = 'end'; cfg.stats.duels = (cfg.stats.duels || 0) + 1; if (d.qs.length === 10 && Math.min(...d.scores) === 0 && Math.max(...d.scores) === 10) award('fair-play'); saveCfg(); confetti(); celebrate(); }
      document.activeElement?.blur?.();
      render(); return;
    }
    d.phase = 'ask'; ui.toCard = true; render(); return;
  }
  if (!val.trim()) return;
  const q = d.qs[d.i];
  d.ok = check(val, q); d.given = val;
  if (d.ok) d.scores[d.p]++;
  d.phase = 'res';
  render();
}
function renderDuel() {
  const d = ui.duel || (ui.duel = { state: 'setup' });
  const sword = `<svg width="46" height="46" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="var(--btn)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2M9.5 17.5 21 6V3h-3L6.5 14.5M11 19l-6-6M8 16l-4 4M5 21l-2-2"/></svg>`;
  const names = cfg.duelNames || ['Joueur 1', 'Joueur 2'];
  if (d.state === 'setup') return `<div class="card done game">${sword}<b class="big">Duel</b><p>Les mêmes 10 mots pour chacun, chacun son tour sur ce téléphone. Le meilleur score gagne. Le duel ne change pas ta progression.</p>
    <div class="two" style="text-align:left"><div><label for="d-n1">Joueur 1</label><input id="d-n1" value="${esc(names[0])}"></div><div><label for="d-n2">Joueur 2</label><input id="d-n2" value="${esc(names[1])}"></div></div>
    <div class="row center"><button class="btn" data-a="duelgo">Lancer le duel</button></div></div>`;
  if (d.state === 'turn') return `<div class="card done game">${sword}<p class="hint">${d.p === 0 ? 'Premier joueur' : `Passe le téléphone. ${esc(d.names[0])} a fait ${d.scores[0]}/${d.qs.length}.`}</p><b class="big">À ${esc(d.names[d.p])} de jouer</b><p>${plural(d.qs.length, 'mot', 'mots')} à traduire.</p><div class="row center"><button class="btn" data-a="duelplay">C'est parti</button></div></div>`;
  if (d.state === 'end') {
    const [a, b2] = d.scores, win = a === b2 ? null : a > b2 ? 0 : 1;
    return `<div class="card done game">${sword}<b class="big">${win === null ? 'Égalité !' : `${esc(d.names[win])} gagne !`}</b><div class="duelscore"><div><span>${esc(d.names[0])}</span><b>${a}</b></div><div><span>${esc(d.names[1])}</span><b>${b2}</b></div></div><div class="row center"><button class="btn" data-a="duelgo">Revanche</button><button class="btn ghost" data-a="duelsetup">Changer les joueurs</button></div></div>`;
  }
  const q = d.qs[d.i], res = d.phase === 'res';
  const qq = { ...q, given: d.given };
  return `<div class="card ${res ? (d.ok ? 'ok' : 'ko') : ''}">
    <div class="dir"><span class="flag">${esc(d.names[d.p])} · ${esc(flagOf(q))}</span><span>Mot ${d.i + 1}/${d.qs.length} · <b>${d.scores[d.p]}</b> pt${d.scores[d.p] > 1 ? 's' : ''}</span></div>
    ${promptBox(q, 'd' + d.p + '-' + d.i, res)}
    ${res ? resultBox(qq, d.ok) : ''}
    <form id="df" autocomplete="off" style="margin-top:14px">${answerInput(q, res ? 'Entrée pour continuer' : 'En ' + langName(q.al) + '…', res ? 'next' : 'done')}<div class="row"><button class="btn grow" type="submit">${res ? (d.i + 1 >= d.qs.length ? 'Terminer' : 'Mot suivant') : 'Valider'}</button></div></form>
  </div>`;
}
const modeBar = () => `<div class="modes">${MODES.map(([k, l]) => `<button class="mode" data-a="mode" data-k="${k}" aria-pressed="${(ui.mode || 'rev') === k}">${l}</button>`).join('')}</div>`;

/* ---------- backup ---------- */
const backupJSON = () => JSON.stringify({ app: 'mon-vocabulaire', v: 1, savedAt: new Date().toISOString(), cfg, words: [...words.values()] });
function readBackup(text) {
  try { const b = JSON.parse(String(text).trim()); if (b && b.app === 'mon-vocabulaire' && Array.isArray(b.words)) return b; } catch (e) {}
  return null;
}
function applyBackup(b) {
  [...words.values()].forEach(w => backend.del(w));
  words = new Map();
  b.words.forEach(w => { if (w && w.id && Array.isArray(w.en) && Array.isArray(w.fr)) { words.set(w.id, w); backend.put(w); } });
  const rev = cfg.rev || 0;
  cfg = mergeCfg(b.cfg || {}); cfg.rev = rev; saveCfg();
  applyTheme(); restartSession();
}
function downloadBackup() {
  const blob = new Blob([backupJSON()], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'sauvegarde-vocabulaire-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  toast('Sauvegarde téléchargée');
}

/* ---------- render ---------- */
function renderHeader() {
  const all = [...words.values()];
  const sc = score();
  $('#sScore').textContent = fmt(sc);
  $('#score').classList.toggle('pop', popScore); popScore = false;
  const st = streakNow(), g = goalOf(), tc = todayCount();
  const flame = '<svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d="M7 0c1 3 5 5 5 9.5A5 5 0 0 1 2 9.5C2 7 4 6 4 4c1.5 1 2 2.5 2 3.5C7.5 6 7.5 3 7 0z" fill="var(--accent)"/></svg>';
  $('#sStreak').innerHTML = `${ring(tc / g, 20, 3.5)}<span><b>${Math.min(tc, g)}/${g}</b> aujourd'hui</span><span class="sep">·</span>${flame}<span>${st ? `<b>${plural(st, 'jour', 'jours')}</b> d'affilée` : 'série à lancer'}</span>`;
  const lb = cfg.lastBadge;
  $('#sBest').textContent = 'points · ' + titleOf(sc);
  $('#sTrack').innerHTML = TR === 'e' ? `Ouïe · <b>${fmt(scoreE())}</b> pts` : `Vue · <b>${fmt(scoreW())}</b> pts`;
  $('#lastBtn').innerHTML = lb ? `<img src="badge-${esc(lb.img)}.webp" alt="">` : '';
  swapDark($('#lastBtn'));
  $('#lastBtn').style.visibility = lb ? '' : 'hidden';
  const counts = INTER.map((_, i) => all.filter(w => lvlOf(w) === i).length);
  const max = Math.max(1, ...counts);
  const crown = '<svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><path d="M1 11 2 2l4.5 4L9 0l2.5 6L16 2l1 9z" fill="var(--accent)"/></svg>';
  $('#boxes').innerHTML = counts.map((c, i) => `<div class="bx${i === TOP ? ' trophy' : ''}${i === popBox ? ' pop' : ''}" title="${plural(c, 'mot', 'mots')} · ${PTS[i]} pts chacun"><i style="height:${Math.round(c / max * 100)}%"></i>${i === TOP ? crown : ''}<b>${c}</b><small>${BOXL[i]}</small></div>`).join('');
  popBox = -1;
  document.querySelectorAll('nav button').forEach(b => b.setAttribute('aria-selected', b.dataset.v === view));
  $('#gear').setAttribute('aria-pressed', view === 'set');
}
function ansChips() {
  const f = cfg.filt, act = cfg.langs.filter(l => f.on.includes(l.id)), S = answerLangs();
  const opts = [['fr', 'Français'], ...act.map(l => [l.id, l.name])].map(([v, l]) => [v, l, !f.mix && S.includes(v)]);
  opts.push(['mix', 'Mélange', f.mix]);
  return opts.map(([v, l, p]) => `<button class="chip" data-a="ans" data-val="${v}" aria-pressed="${p}">${esc(l)}</button>`).join('');
}
function renderFilters() {
  const f = cfg.filt, on = f.on;
  const arrow = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;
  if (f.hide) {
    const th = on.length === 1 && ui.theme !== 'all' ? getLib(ui.theme).name : 'tous les thèmes';
    const S = f.mix ? 'mélange' : answerLangs().map(langName).join(', ');
    const sum = `${cfg.langs.filter(l => on.includes(l.id)).map(l => l.name).join(', ')} · ${th} · réponse en ${S}`;
    return `<button class="fsum" data-a="fold" aria-expanded="false"><span>${esc(sum)}</span>${arrow}</button>`;
  }
  let h = `<div class="filters"><button class="fold" data-a="fold" aria-expanded="true" aria-label="Cacher les choix">${arrow}</button>`;
  if (cfg.langs.length > 1) h += `<div class="fl"><span>Bibliothèques</span>${cfg.langs.map(l => `<button class="chip" data-a="tog" data-l="${l.id}" aria-pressed="${on.includes(l.id)}">${esc(l.name)}</button>`).join('')}</div>`;
  if (on.length === 1 && libsOf(on[0]).length > 1) {
    const tri = `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style="transform:rotate(${ui.themeOpen ? 90 : 0}deg)"><path d="M3 1.5 9.5 6 3 10.5z" fill="currentColor"/></svg>`;
    const all = [['all', 'Tous'], ...libsOf(on[0]).map(l => [l.id, l.name])];
    const shown = ui.themeOpen ? all : all.filter(([v]) => v === ui.theme);
    h += `<div class="fl"><button class="tlab" data-a="topen" aria-expanded="${!!ui.themeOpen}">Thème ${tri}</button>${shown.map(([v, l]) => `<button class="chip" data-a="theme" data-val="${v}" aria-pressed="${ui.theme === v}">${esc(l)}</button>`).join('')}</div>`;
  }
  h += `<div class="fl"><span>Répondre en</span>${ansChips()}</div>`;
  return h + '</div>';
}
function renderRev() {
  if (!words.size) return `<div class="empty"><h2>Ta boîte est vide</h2><p>Ajoute tes premiers mots pour commencer à réviser.</p><button class="btn" data-a="goadd">Ajouter des mots</button></div>`;
  if (!MODES.some(m => m[0] === ui.mode)) ui.mode = 'rev';
  const mode = ui.mode;
  if (mode !== 'rev') return modeBar() + renderFilters() + (mode === 'sprint' ? renderSprint() : renderDuel());
  const s = session;
  const head = modeBar() + renderFilters();
  if (!s || s.state === 'done') {
    const any = [...words.values()].some(inFilter);
    return head + `<div class="card done"><b class="big">${s && s.done ? 'Bravo !' : 'Tout est à jour'}</b>
      ${s && s.done ? `<div class="sum"><span>${plural(s.done, 'réponse', 'réponses')}</span><span>${s.good} justes</span><span>meilleure série : ${s.bestCombo}</span><span class="pts">${s.gained >= 0 ? '+' : ''}${s.gained} pts</span></div>` : `<p class="hint">${any ? "Aucun mot à revoir aujourd'hui dans cette sélection." : 'Aucun mot dans cette sélection.'}</p>`}
      ${any ? `<p>Les mots du jour sont faits. Continue sur toute ta sélection : les mots les plus fragiles sortent plus souvent.</p>
      <button class="btn" data-a="extra">Continuer l'entraînement</button>` : ''}</div>`;
  }
  const w = words.get(s.cur.id);
  if (!w) { next(); return renderRev(); }
  const q = s.cur, ansName = langName(q.al);
  const prompt = q.prompt.join(' / ');
  const cls = s.state === 'right' ? 'ok' : s.state === 'wrong' ? 'ko' : '';
  const move = q.to !== q.from ? ` · case ${BOXL[q.to]}` : '';
  const flagTxt = flagOf(q);
  let fb = '';
  if (s.state === 'right') fb = `<div class="fb ok">Juste ! <span class="pts">${q.delta > 0 ? '+' + q.delta + ' pts' : ''}</span>${move}${q.to === TOP && q.from !== TOP ? ' · mot maîtrisé !' : ''}${q.loose ? `<small>Bonne réponse ! Orthographe exacte : ${esc(q.answers.join(' ou '))}</small>` : q.answers.length > 1 ? `<small>Toutes les réponses : ${esc(q.answers.join(' ou '))}</small>` : ''}</div>`;
  if (s.state === 'wrong') fb = `<div class="fb ko">Ta réponse : <span class="yours">${esc(q.given)}</span><span class="right">${esc(q.answers.join(' ou '))}</span><small>${q.delta < 0 ? `<span class="pts">${q.delta} pts</span> · ` : ''}retour en case Nouv.</small>${mustRetype(q) ? `<small><b>Recopie ${q.answers.flatMap(variants).length > 1 ? 'une de ces réponses' : 'la bonne réponse'} pour continuer.</b></small>` : ''}</div>`;
  const retype = s.state === 'wrong' && mustRetype(q);
  if (s.state === 'ask') autoSay('q' + s.done + q.id, q.prompt[0], q.pl); else autoSay('a' + s.done + q.id, q.answers[0], q.al);
  const ph = s.state === 'ask' ? 'En ' + ansName + '…' : retype ? 'Recopie en ' + ansName + '…' : 'Entrée pour le mot suivant';
  const prog = s.extra ? `Entraînement libre · ${s.done}` : `Encore ${s.queue.length + (s.state === 'ask' ? 1 : 0)} à revoir`;
  const party = ui.celebrate ? `<div class="party"><b>Ton premier mot maîtrisé !</b><p>Ça fait au moins 2 mois que tu révises régulièrement. Bravo, continue comme ça.</p>${SUPPORT_URL ? `<p>Si l'appli t'aide à progresser, tu peux soutenir son développement.</p><div class="row"><a class="btn" href="${esc(SUPPORT_URL)}" target="_blank" rel="noopener">Soutenir l'appli</a><button class="btn ghost" type="button" data-a="party">Plus tard</button></div>` : `<div class="row"><button class="btn" type="button" data-a="party">Merci !</button></div>`}</div>` : '';
  return head + party + `<div class="card ${cls}">
    <div class="dir"><span class="flag">${esc(flagTxt)}</span><span>${s.combo >= 3 ? `<span class="combo">Série de ${s.combo}</span> · ` : ''}${prog}</span></div>
    ${TR === 'e' && s.state === 'ask' ? promptBox(q, 'r' + s.done + q.id, false) : `<div class="word" lang="${esc(langCode(q.pl))}">${esc(prompt)}</div>${sayBtn(q.prompt[0], q.pl)}`}
    ${fb}${s.state !== 'ask' ? sayBtn(q.answers[0], q.al, 'Écouter la réponse') : ''}
    <form id="f" autocomplete="off" style="margin-top:14px">
      <input id="ans" lang="${esc(langCode(q.al))}" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="${s.state === 'ask' || retype ? 'done' : 'next'}" placeholder="${esc(ph)}" aria-label="Ta réponse en ${esc(ansName)}">
      <div class="row">${s.state === 'ask' ? `<button class="btn grow" type="submit">Vérifier</button>` : retype ? `<button class="btn grow" type="submit">Valider</button>` : `<button class="btn grow" type="submit" id="nextBtn">Mot suivant</button>`}</div>
      ${s.state === 'wrong' && q.addTo ? `<div class="row"><button class="btn link" type="button" data-a="mine">Ma réponse était juste aussi : l'ajouter</button></div>` : ''}
    </form>
  </div>`;
}
function libOptions(lang, sel) {
  return libsOf(lang).map(l => `<option value="${l.id}"${l.id === sel ? ' selected' : ''}>${esc(l.name)}</option>`).join('');
}
function renderLib() {
  if (!ui.libLang || !cfg.langs.some(l => l.id === ui.libLang)) ui.libLang = cfg.langs[0].id;
  const lang = ui.libLang, L = getLang(lang), q = norm(ui.q);
  const ws = [...words.values()].filter(w => wLang(w) === lang && (!q || [...w.en, ...w.fr].some(x => norm(x).includes(q))));
  const libs = libsOf(lang);
  const orphan = ws.filter(w => !libs.some(l => l.id === wLib(w)));
  const when = w => isDue(w) ? "à revoir aujourd'hui" : (d => d <= 1 ? 'demain' : `dans ${d} jours`)(Math.round((midnight(w.due) - midnight(Date.now())) / DAY));
  const row = w => `<li><button class="item" data-a="open" data-id="${w.id}" aria-expanded="${ui.openId === w.id}"><span class="t" lang="${esc(L.code)}">${esc(w.en.join(' / '))}</span><span class="fr">${esc(w.fr.join(' / '))}</span>
      <span class="lv" aria-label="Case ${BOXL[w.lvl]}">${INTER.slice(1).map((_, i) => `<i class="${i < w.lvl ? 'on' : ''}${i === TOP - 1 && w.lvl === TOP ? ' top' : ''}"></i>`).join('')}</span></button>
      ${ui.openId === w.id ? `<form class="edit" data-id="${w.id}" id="ef">
        <div class="two"><div><label for="e-t">${esc(L.name)}</label><input id="e-t" value="${esc(w.en.join(' / '))}"></div>
        <div><label for="e-fr">Français (sépare par /)</label><input id="e-fr" value="${esc(w.fr.join(' / '))}"></div></div>
        <label for="e-lib">Thème</label><select id="e-lib">${libOptions(lang, wLib(w))}</select>
        <div class="meta">${when(w)} · case ${BOXL[w.lvl]} · ${w.ok} juste(s), ${w.ko} erreur(s)</div>
        <div class="row"><button class="btn" type="submit">Enregistrer</button><button class="btn ghost" type="button" data-a="del" data-id="${w.id}">Supprimer</button></div>
      </form>` : ''}</li>`;
  const libBlock = l => {
    // numbers in increasing order (1, 2, 3… then 1er, 2e…), everything else alphabetical
    const num = w => { const f = w.fr.find(x => /^\s*\d/.test(x)); if (!f) return null; const m = f.replace(/\s/g, '').match(/^(\d+)(er|re|e|ème)?/i); return m ? (m[2] ? 1e12 : 0) + Number(m[1]) : null; };
    const lw = ws.filter(w => wLib(w) === l.id).sort((a, b) => { const x = num(a), y = num(b); if (x !== null && y !== null) return x - y; if (x !== null) return -1; if (y !== null) return 1; return a.en[0].localeCompare(b.en[0]); });
    if (q && !lw.length) return '';
    const n = [...words.values()].filter(w => wLib(w) === l.id).length;
    const editing = ui.editLib === l.id;
    return `<div class="libh"><h3>${esc(l.name)} <small>${n}</small></h3><button class="btn ghost small" data-a="editlib" data-id="${l.id}">${editing ? 'Fermer' : 'Modifier'}</button></div>
      ${editing ? `<form class="panel" id="lf" data-id="${l.id}"><label for="l-n" style="margin-top:0">Nom du thème</label><input id="l-n" value="${esc(l.name)}">
        <div class="row"><button class="btn small" type="submit">Enregistrer</button>${ui.confirm === 'lib:' + l.id ? `<button class="btn danger small" type="button" data-a="dellib" data-id="${l.id}">Confirmer : supprimer ${plural(n, 'mot', 'mots')}</button>` : `<button class="btn ghost small" type="button" data-a="askdel" data-k="lib:${l.id}">Supprimer le thème</button>`}</div></form>` : ''}
      <ul class="list">${lw.map(row).join('')}</ul>`;
  };
  return `<section>
    <div class="fl" style="margin-bottom:12px">${cfg.langs.map(l => `<button class="chip" data-a="liblang" data-id="${l.id}" aria-pressed="${l.id === lang}">${esc(l.name)}</button>`).join('')}<button class="chip add" data-a="golang">+ Langue</button></div>
    <input id="q" type="search" placeholder="Chercher un mot…" value="${esc(ui.q)}" aria-label="Chercher">
    ${ui.newLib ? `<form class="panel" id="nl"><label for="n-n" style="margin-top:0">Nouveau thème en ${esc(lower(L.name))}</label><input id="n-n" placeholder="ex. Chantier, Leçon 6, Verbes…"><div class="row"><button class="btn small" type="submit">Créer</button><button class="btn ghost small" type="button" data-a="newlib">Annuler</button></div></form>`
      : `<div class="row"><button class="btn ghost small" data-a="newlib">Nouveau thème</button><button class="btn ghost small" data-a="autosort">Ranger automatiquement</button></div>`}
    ${libs.map(libBlock).join('')}
    ${orphan.length ? `<div class="libh"><h3>Sans thème</h3></div><ul class="list">${orphan.map(row).join('')}</ul>` : ''}
    ${!ws.length ? `<p class="note">${q ? 'Aucun mot ne correspond.' : 'Aucun mot dans cette bibliothèque pour l’instant.'}</p>` : ''}
  </section>`;
}
function renderAdd() {
  if (!cfg.langs.some(l => l.id === ui.addLang)) ui.addLang = cfg.langs[0].id;
  if (ui.addLib !== '__auto' && !libsOf(ui.addLang).some(l => l.id === ui.addLib)) ui.addLib = '__auto';
  const L = getLang(ui.addLang);
  const enCount = [...words.values()].filter(w => wLang(w) === 'en').length;
  return `<section><h2>Où ajouter ?</h2>
    <div class="two"><div><label for="a-lang">Bibliothèque</label><select id="a-lang">${cfg.langs.map(l => `<option value="${l.id}"${l.id === ui.addLang ? ' selected' : ''}>${esc(l.name)}</option>`).join('')}</select></div>
    <div><label for="a-lib">Thème</label><select id="a-lib"><option value="__auto"${ui.addLib === '__auto' ? ' selected' : ''}>Automatique</option>${libOptions(ui.addLang, ui.addLib)}<option value="__new">+ Nouveau thème…</option></select></div></div>
    ${ui.addLib === '__auto' ? '<p class="hint">L’appli range chaque mot dans un thème selon sa traduction. Tu pourras le déplacer dans « Mes mots ».</p>' : ''}
    ${ui.addNew ? `<form id="at" class="row"><input id="at-n" placeholder="Nom du nouveau thème" style="flex:1"><button class="btn" type="submit">Créer</button></form>` : ''}
  </section>
  <section><h2>Ajouter un mot</h2>
    <form id="af" autocomplete="off">
      <div class="two"><div><label for="a-t">${esc(L.name)}</label><input id="a-t" lang="${esc(L.code)}" autocapitalize="off" spellcheck="false"></div>
      <div><label for="a-fr">Français</label><input id="a-fr" autocapitalize="off" placeholder="ex. en fait / en réalité"></div></div>
      <p class="hint">Plusieurs traductions possibles ? Sépare-les par « / ».</p>
      <div class="row"><button class="btn" type="submit">Ajouter</button></div>
    </form></section>
  ${renderGen()}
  <section><h2>Importer une liste</h2>
    <p class="note" style="margin-top:0">Colle la liste que je te donne à la fin d'un cours. Un mot par ligne : <b>${esc(lower(L.name))} = français</b>. Une ligne <b># Chantier</b> range les mots qui suivent dans ce thème.</p>
    <form id="if"><textarea id="imp" rows="8" placeholder="to drive = conduire&#10;truck = camion">${esc(ui.importText)}</textarea>
    <div class="row"><button class="btn" type="submit">Importer</button>${L.code === 'en' && enCount < 5 ? `<button class="btn ghost" type="button" data-a="starter">Mots de mes premières leçons</button>` : ''}</div></form>
  </section>`;
}
function renderProg() {
  const sc = score(), nt = nextTitle(sc), g = goalOf(), tc = todayCount(), st = streakNow(), S = cfg.stats, days = S.days || {};
  const prevT = [...TITLES].reverse().find(x => x[0] <= sc);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const dow = (today.getDay() + 6) % 7, WEEKS = 18;
  const start = new Date(today); start.setDate(start.getDate() - dow - 7 * (WEEKS - 1));
  let cells = '';
  for (let i = 0; i < WEEKS * 7; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i);
    if (d > today) { cells += '<i class="c future"></i>'; continue; }
    const k = ymd(d), n = days[k] || 0, dg = dayGoal(k), lv = !n ? 0 : n < dg / 2 ? 1 : n < dg ? 2 : 3;
    cells += `<i class="c l${lv}" style="--gc:${goalCol(dg)}" title="${d.toLocaleDateString('fr-FR')} : ${n} / ${dg}"></i>`;
  }
  const vals = achValues();
  const nGot = ACH.reduce((n, a) => n + tierOf(a, vals[a.id]), 0);
  const achCard = a => {
    const v = vals[a.id], t = tierOf(a, v), nx = a.steps[t];
    const from = t ? a.steps[t - 1] : 0;
    const pic = `<button class="bpic" data-a="bview" data-k="${a.id}" data-t="${Math.max(1, t)}" aria-label="Voir le badge">${t ? `<img class="bimg" src="badge-${a.img}-${t}.webp" alt="" loading="lazy">` : '<span class="qbox">?</span>'}</button>`;
    return `<div class="badge${t ? ' on' : ''}${t === a.steps.length ? ' maxed' : ''}">${pic}<b>${t ? esc(a.names[t - 1]) : esc(a.label)}</b><span>${t ? esc(a.label) : `${fmt(a.steps[0])} ${esc(a.unit)}`}</span>
      ${nx ? `<div class="bar3"><i style="width:${Math.min(100, Math.round((v - from) / (nx - from) * 100))}%"></i></div><span>${fmt(Math.min(v, nx))} / ${fmt(nx)}</span>` : '<span><b>Niveau maximum !</b></span>'}</div>`;
  };
  const sec = cfg.secrets || {}, nSec = SECRETS.filter(x => sec[x[0]]).length;
  const secGrid = SECRETS.map(([id, name]) => sec[id] ? `<button class="on" data-a="bview" data-k="secret" data-t="${id}" aria-label="${esc(name)}"><img src="badge-secret-${id}.webp" alt="" loading="lazy"></button>` : `<button data-a="bview" data-k="secret" data-t="${id}" aria-label="Badge secret">?</button>`).join('');
  const lb = cfg.lastBadge;
  const last = lb ? `<button class="lastb" data-a="bview" data-k="last"><img src="badge-${esc(lb.img)}.webp" alt=""><span>Dernier badge gagné<b>${esc(lb.name)}</b></span></button>` : '';
  const topMsg = nt ? `encore ${fmt(nt[0] - sc)} points pour devenir <b>${esc(nt[1])}</b>` : sc >= 20000 ? 'Titre secret débloqué. Bienvenue chez les immortels !' : 'Tu as atteint le plus haut titre… officiel.';
  return `<section class="prog">
    <div class="ptitle"><div><span class="note">Ton titre</span><b class="tname">${esc(titleOf(sc))}</b><span class="note">${topMsg}</span></div>
      ${nt ? `<div class="bar2"><i style="width:${Math.round((sc - prevT[0]) / (nt[0] - prevT[0]) * 100)}%"></i></div>` : ''}${last}</div>
    <div class="pgoal">${ring(tc / g, 96, 10, 'var(--btn)')}<div><b class="big2">${Math.min(tc, g)} / ${g}</b><p style="margin:2px 0 8px">${tc >= g ? 'Défi du jour réussi !' : `bonnes réponses aujourd'hui, encore ${g - tc} pour réussir le défi`}</p>
      <div class="fl"><span>Objectif</span>${[10, 20, 30, 50].map(v => `<button class="chip gchip" data-a="goal" data-val="${v}" aria-pressed="${g === v}" style="--gc:${goalCol(v)}">${v}</button>`).join('')}</div></div></div>
  </section>
  <section><h2>${st ? `${plural(st, 'jour', 'jours')} d'affilée` : 'Ta série'}</h2>
    <p class="note" style="margin-top:0">Un jour compte quand tu réussis ton défi du jour.${S.best ? ` Record : ${plural(S.best, 'jour', 'jours')}.` : ''}</p>
    <div class="cal">${cells}</div>
    <div class="legend"><span>Moins</span><i class="c l0"></i><i class="c l1" style="--gc:${goalCol(g)}"></i><i class="c l2" style="--gc:${goalCol(g)}"></i><i class="c l3" style="--gc:${goalCol(g)}"></i><span>Défi réussi</span></div>
    <div class="legend"><span>Défi de</span>${[10, 20, 30, 50].map(v => `<i class="c l3" style="--gc:${goalCol(v)}"></i><span>${v}</span>`).join('')}</div>
  </section>
  <section><h2>Records</h2>
    <div class="recs"><div><b>${S.sprintBest || 0}</b><span>meilleur sprint</span></div><div><b>${S.bestCombo || 0}</b><span>meilleure série de bonnes réponses</span></div><div><b>${S.bossWins || 0}</b><span>${(S.bossWins || 0) > 1 ? 'boss battus' : 'boss battu'}</span></div><div><b>${fmt(S.bestScore || 0)}</b><span>meilleur score</span></div></div>
  </section>
  <section><h2>Succès <span class="note">${nGot}/${ACH.reduce((n, a) => n + a.steps.length, 0)}</span></h2>
    <p class="note" style="margin-top:0">Touche un badge pour le voir en grand.</p>
    <div class="row" style="margin-bottom:12px"><button class="btn ghost grow" data-a="coll">Voir toute la collection</button></div>
    <div class="badges">${ACH.map(achCard).join('')}</div>
  </section>
  <section><h2>Badges secrets <span class="note">${nSec}/${SECRETS.length}</span></h2>
    <p class="note" style="margin-top:0">Ils se débloquent en faisant des choses inattendues. À toi de les trouver !</p>
    <div class="secrets">${secGrid}</div>
  </section>${renderBview()}`;
}
// the whole collection: one row of 6 boxes per family, then every secret; missing ones are empty "?" boxes
function renderColl() {
  const vals = achValues(), sec = cfg.secrets || {};
  const nGot = ACH.reduce((n, a) => n + tierOf(a, vals[a.id]), 0) + SECRETS.filter(x => sec[x[0]]).length;
  const nAll = ACH.reduce((n, a) => n + a.steps.length, 0) + SECRETS.length;
  const rows = ACH.map(a => { const t = tierOf(a, vals[a.id]); return `<div class="crow"><b>${esc(a.label)}</b><div class="cgrid">${a.steps.map((_, i) => `<button data-a="bview" data-k="${a.id}" data-t="${i + 1}" class="${i < t ? 'on' : ''}" aria-label="${esc(i < t ? a.names[i] : 'Badge à découvrir')}">${i < t ? `<img src="badge-${a.img}-${i + 1}.webp" alt="" loading="lazy">` : '?'}</button>`).join('')}</div></div>`; }).join('');
  const secs = SECRETS.map(([id, name]) => sec[id] ? `<button class="on" data-a="bview" data-k="secret" data-t="${id}" aria-label="${esc(name)}"><img src="badge-secret-${id}.webp" alt="" loading="lazy"></button>` : `<button data-a="bview" data-k="secret" data-t="${id}" aria-label="Badge secret">?</button>`).join('');
  return `<section><div class="row" style="justify-content:space-between;align-items:center"><h2 style="margin:0">Collection <span class="note">${nGot}/${nAll}</span></h2><button class="btn ghost" data-a="collback">Retour</button></div>
    <div class="bar2" style="margin:12px 0"><i style="width:${Math.round(nGot / nAll * 100)}%"></i></div>
    ${rows}
    <div class="crow"><b>Badges secrets</b><div class="cgrid">${secs}</div></div>
  </section>${renderBview()}`;
}
// big view of one badge (family tier, secret, or the last one won)
function renderBview() {
  const bv = ui.bview;
  if (!bv) return '';
  let img = '', name = '', sub = '', info = '', locked = false, q = false;
  const when = t => t ? 'Obtenu le ' + new Date(t).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  let k = bv.k, t = bv.t;
  if (k === 'last') { const lb = cfg.lastBadge; if (!lb) return ''; const m = lb.img.match(/^secret-(.+)$/); if (m) { k = 'secret'; t = m[1]; } else { const a = ACH.find(x => lb.img.startsWith(x.img + '-')); if (!a) return ''; k = a.id; t = Number(lb.img.split('-').pop()); } }
  if (k === 'secret') {
    const x = secretOf(t), got = (cfg.secrets || {})[t];
    if (!x) return '';
    if (got) { img = 'secret-' + t; name = x[1]; sub = 'Badge secret'; info = `<p>${esc(x[2])}</p><p>${when(got)}</p>`; }
    else { q = true; name = 'Badge secret'; info = '<p>Celui-là se cache encore. Continue de réviser, tu finiras par tomber dessus.</p>'; }
  } else {
    const a = ACH.find(x => x.id === k); if (!a) return '';
    const v = achValues()[a.id], cur = tierOf(a, v); t = Number(t);
    locked = t > cur; img = a.img + '-' + t; name = locked ? 'Niveau ' + t + ' · ???' : a.names[t - 1]; sub = a.label;
    info = `<p>${fmt(a.steps[t - 1])} ${esc(a.unit)}</p>${a.hint ? `<p>${esc(a.hint)}</p>` : ''}<p>${locked ? `Encore ${fmt(a.steps[t - 1] - v)} pour l'obtenir.` : (when((cfg.tierDates || {})[a.id + '-' + t]) || 'Obtenu')}</p>`;
  }
  return `<div class="bview" data-a="bclose"><button class="xclose" data-a="bclose" aria-label="Fermer">×</button><div>${q || locked ? '<div class="q">?</div>' : `<img src="badge-${img}.webp" alt="">`}<b class="big2">${esc(name)}</b>${sub ? `<p>${esc(sub)}</p>` : ''}${info}<div class="row center" style="margin-top:10px"><button class="btn" data-a="bclose">Fermer</button></div></div></div>`;
}
function renderHelp() {
  const arrowR = c => `<svg width="120" height="22" viewBox="0 0 120 22" aria-hidden="true"><path d="M4 11h104" stroke="${c}" stroke-width="3" stroke-linecap="round"/><path d="M104 4l10 7-10 7" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const arrowL = c => `<svg width="120" height="22" viewBox="0 0 120 22" aria-hidden="true"><path d="M116 11H12" stroke="${c}" stroke-width="3" stroke-linecap="round"/><path d="M16 4 6 11l10 7" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `<section><h2>Comment marchent les points ?</h2>
    <p style="margin:0">Chaque mot est rangé dans une case. Plus il avance, plus il revient tard, et plus il rapporte de points.</p>
    <div class="hbox">${BOXL.map((l, i) => `<div class="hb${i === TOP ? ' crown' : ''}"><small>${l}</small><b>${PTS[i]}</b><small>pt${PTS[i] > 1 ? 's' : ''}</small></div>`).join('')}</div>
    <div class="harrow hok">${arrowR('var(--green)')}<span><b>Juste</b> : le mot avance d'une case</span></div>
    <div class="harrow hko">${arrowL('var(--red)')}<span><b>Raté</b> : retour en case Nouv.</span></div>
    <ul class="hlist">
      <li>Ton <b>score</b>, c'est la somme des points de tous tes mots.</li>
      <li>Un mot raté perd tous ses points, mais il revient vite pour que tu le rattrapes.</li>
      <li>La case <b>3 mois</b> (avec la couronne) vaut 40 points : un mot qui y arrive est <b>maîtrisé</b>.</li>
      <li>Il faut au moins 2 mois de bonnes réponses (1, 3, 7, 16 puis 35 jours) pour qu'un mot arrive dans la case 3 mois.</li>
      <li>Le <b>défi du jour</b> (le petit cercle sous le titre) : un nombre de bonnes réponses à atteindre chaque jour. La <b>série</b> compte les jours d'affilée où tu le réussis.</li>
      <li>Ton <b>titre</b> (Débutant, Apprenti, Explorateur…) évolue avec ton score. Appuie sur la ligne du défi pour voir ta progression et tes succès.</li>
    </ul>
    <div class="row"><button class="btn" data-a="gorev">Réviser</button></div>
  </section>`;
}
function renderSet() {
  const t = cfg.theme;
  const p = t.preset === 'custom' ? t : (PRESETS[t.preset] || PRESETS.foret);
  const avail = LANG_PRESETS.filter(([n, c]) => !cfg.langs.some(l => l.code === c));
  return `<section><h2>Couleurs</h2>
    <div class="sw">${Object.entries(PRESETS).map(([k, v]) => `<button class="swb" data-a="preset" data-k="${k}" aria-pressed="${t.preset === k}"><div class="c" style="background:${v.main}"><i style="background:${v.accent}"></i></div><span>${v.name}</span></button>`).join('')}
    <button class="swb" data-a="preset" data-k="custom" aria-pressed="${t.preset === 'custom'}"><div class="c" style="background:${t.main}"><i style="background:${t.accent}"></i></div><span>Perso</span></button></div>
    <h3 style="margin-top:20px">Personnaliser</h3>
    <div class="row"><label style="margin:0;display:flex;gap:10px;align-items:center"><input type="color" id="c-main" value="${p.main}"> Couleur principale</label>
    <label style="margin:0;display:flex;gap:10px;align-items:center"><input type="color" id="c-acc" value="${p.accent}"> Couleur du score</label></div>
    <h3 style="margin-top:20px">Affichage</h3>
    <div class="fl" style="margin-top:8px">${[['auto', 'Auto'], ['light', 'Clair'], ['dark', 'Sombre']].map(([v, l]) => `<button class="chip" data-a="scheme" data-k="${v}" aria-pressed="${t.mode === v}">${l}</button>`).join('')}</div>
    <h3 style="margin-top:20px">Écoute des mots</h3>
    ${canSpeak() ? `<p class="note" style="margin-top:0">Le bouton haut-parleur lit le mot avec la voix du téléphone. La qualité dépend des voix installées (surtout pour le coréen).</p><div class="fl"><button class="chip" data-a="ttsauto" aria-pressed="${!!cfg.ttsAuto}">Lecture automatique</button>${cfg.langs.map(l => `<button class="chip" data-a="say" data-t="${esc(l.code === 'ko' ? '안녕하세요' : l.code === 'en' ? 'Hello, how are you?' : l.name)}" data-l="${l.id}">Tester : ${esc(l.name)}</button>`).join('')}</div>` : '<p class="note" style="margin-top:0">Ce navigateur ne sait pas lire les mots à voix haute.</p>'}
    <h3 style="margin-top:20px">Présentation</h3>
    <div class="row"><button class="btn ghost" data-a="welcome">Revoir l'écran d'accueil</button>${!framed && !isStandalone() ? '<button class="btn ghost" data-a="install">Installer sur l\'écran d\'accueil</button>' : ''}</div>
    <h3 style="margin-top:20px">Couleurs du calendrier</h3>
    <p class="note" style="margin-top:0">Une couleur par objectif du défi : 10, 20, 30 et 50.</p>
    <div class="caltheme">${Object.entries(CAL_THEMES).map(([k, [n, c]]) => `<button data-a="caltheme" data-k="${k}" aria-pressed="${(cfg.calTheme || 'feu') === k}"><span>${c.map(x => `<i style="background:${x}"></i>`).join('')}</span>${n}</button>`).join('')}</div>
  </section>
  <section id="langs"><h2>Langues</h2>
    <ul class="langs">${cfg.langs.map(l => { const n = [...words.values()].filter(w => wLang(w) === l.id).length; return `<li><span><b>${esc(l.name)}</b> <span class="note">${plural(n, 'mot', 'mots')} · ${plural(libsOf(l.id).length, 'thème', 'thèmes')}</span></span>
      ${cfg.langs.length > 1 ? (ui.confirm === 'lang:' + l.id ? `<button class="btn danger small" data-a="dellang" data-id="${l.id}">Confirmer : tout supprimer</button>` : `<button class="btn ghost small" data-a="askdel" data-k="lang:${l.id}">Supprimer</button>`) : ''}</li>`; }).join('')}</ul>
    <h3 style="margin-top:18px">Ajouter une langue</h3>
    <div class="fl" style="margin-top:8px">${avail.map(([n, c]) => `<button class="chip" data-a="addlang" data-n="${n}" data-c="${c}">+ ${n}</button>`).join('')}</div>
    <form id="nlang" class="row"><input id="nl-n" placeholder="Autre langue (ex. Thaï)" style="flex:1"><button class="btn" type="submit">Ajouter</button></form>
  </section>
  ${canUpdate() ? `<section><h2>Mise à jour</h2><p class="note" style="margin-top:0">Version installée : ${APP_VERSION}</p><div class="row"><button class="btn ghost" data-a="checkupd">Vérifier les mises à jour</button><button class="btn ghost" data-a="update">Forcer la mise à jour</button></div></section>` : ''}
  ${SUPPORT_URL ? `<section><h2>Soutenir l'appli</h2><p class="note" style="margin-top:0">L'appli t'aide à progresser ? Tu peux soutenir son développement avec un petit don.</p><div class="row"><a class="btn" href="${esc(SUPPORT_URL)}" target="_blank" rel="noopener">Soutenir l'appli</a></div></section>` : ''}
  <section><h2>Sauvegarde</h2>
    <p class="note" style="margin-top:0">${backend && !framed ? "Tes mots sont enregistrés sur cet appareil. Fais une sauvegarde de temps en temps : elle te permet de tout récupérer sur un autre téléphone." : "Tes mots, ton score et tes réglages sont enregistrés dans ton compte. Si tu partages l'appli, chaque personne a sa propre boîte. La sauvegarde te permet de les transférer vers la version installée sur ton téléphone."}</p>
    <div class="row">${!framed ? '<button class="btn" data-a="backup">Sauvegarder (fichier)</button>' : ''}<button class="btn ghost" data-a="backuptext">Copier la sauvegarde (texte)</button>
    <span class="btn ghost filebtn">Restaurer un fichier<input type="file" id="restorefile" accept=".json,application/json,text/plain"></span></div>
    ${ui.backupText ? `<label for="bt">Sélectionne et copie ce texte :</label><textarea id="bt" rows="4" readonly>${esc(ui.backupText)}</textarea>` : ''}
    <details style="margin-top:12px"><summary class="note" style="cursor:pointer">Restaurer une sauvegarde copiée (texte)</summary><textarea id="restore" rows="4" placeholder="Colle ici ta sauvegarde" style="margin-top:8px"></textarea><div class="row"><button class="btn ghost" data-a="restoretext">Restaurer ce texte</button></div></details>
    ${ui.restore ? `<div class="panel"><p style="margin-top:0">Cette sauvegarde va <b>remplacer</b> tous tes mots actuels (${plural(ui.restore.words.length, 'mot', 'mots')} dans la sauvegarde).</p><div class="row"><button class="btn danger" data-a="restoreok">Oui, restaurer</button><button class="btn ghost" data-a="restorecancel">Annuler</button></div></div>` : ''}
  </section>`;
}
function render(fromSnap) {
  document.body.classList.toggle('noscroll', !!(ui.bview || ui.beastView || ui.install));
  renderHeader();
  const ae = document.activeElement, keep = ae?.id;
  if (fromSnap && ae && /INPUT|TEXTAREA|SELECT/.test(ae.tagName) && ae.id !== 'ans') return;
  const ansVal = fromSnap ? $('#ans')?.value : null;
  if (!isPlay()) $('#main').style.paddingBottom = '';
  const banner = !ui.newVersion ? '' : ui.updFailed
    ? `<div class="upd"><span>La version ${esc(ui.newVersion)} ne s'installe pas : sur GitHub, <b>app.js</b> ou <b>style.css</b> n'ont pas été remplacés (version installée : ${APP_VERSION}). Renvoie tous les fichiers, attends la coche verte, puis réessaie.</span><button class="btn small" data-a="update">Réessayer</button></div>`
    : `<div class="upd"><span>Nouvelle version disponible (${esc(ui.newVersion)})</span><button class="btn small" data-a="update">Mettre à jour</button></div>`;
  $('#main').innerHTML = banner + (view === 'rev' || view === 'ear' ? renderRev() : view === 'hunt' ? renderHunt() : view === 'lib' ? renderLib() : view === 'add' ? renderAdd() : view === 'help' ? renderHelp() : view === 'prog' ? renderProg() : view === 'best' ? renderBest() : view === 'coll' ? renderColl() : renderSet()) + (renderInstall() || renderWelcome());
  if (isPlay()) {
    const a = $('#ans');
    const card = document.querySelector('.card');
    // enough room below the card so it can always sit at the top of the screen, above the keyboard
    $('#main').style.paddingBottom = card ? Math.max(90, innerHeight - card.offsetHeight - 20) + 'px' : '';
    if (ui.toCard && card) { ui.toCard = false; card.scrollIntoView({ block: 'start' }); }
    if (a) { if (ansVal && session?.state === 'ask') a.value = ansVal; a.focus({ preventScroll: true }); }
  } else if (keep === 'q' && $('#q')) { const q = $('#q'); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
  swapDark(document);
}

/* ---------- listening (speech synthesis of the phone, works offline) ---------- */
const SPEAK = { fr: 'fr-FR', en: 'en-GB', ko: 'ko-KR', es: 'es-ES', de: 'de-DE', it: 'it-IT', ja: 'ja-JP', zh: 'zh-CN', pt: 'pt-PT', ru: 'ru-RU', ar: 'ar-SA', nl: 'nl-NL' };
const canSpeak = () => 'speechSynthesis' in window;
function say(text, langId, rate) {
  if (!canSpeak() || !text) return;
  const code = langCode(langId), tag = SPEAK[code] || code;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text).replace(/\([^)]*\)/g, '').split(/[\/;]/)[0].trim());
  u.lang = tag; u.rate = rate || .9;
  const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.toLowerCase().startsWith(code.toLowerCase()));
  try { if (v) u.voice = v; } catch (e) { /* keep the default voice */ }
  speechSynthesis.speak(u);
}
// the question: shown at the plume, only heard at the oreille (until the answer is revealed)
function promptBox(q, key, shown) {
  if (TR !== 'e' || shown) return `<div class="word" lang="${esc(langCode(q.pl))}">${esc(q.prompt.join(' / '))}</div>${sayBtn(q.prompt[0], q.pl)}`;
  if (ui.earKey !== key) { ui.earKey = key; setTimeout(() => say(q.prompt[0], q.pl), 120); }
  return `<div class="earq"><button type="button" class="earbig" data-a="say" data-t="${esc(q.prompt[0])}" data-l="${esc(q.pl)}" aria-label="Réécouter"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg><span>Réécouter</span></button><button type="button" class="btn ghost small" data-a="say" data-t="${esc(q.prompt[0])}" data-l="${esc(q.pl)}" data-r=".55">Plus lentement</button></div>`;
}
const sayBtn = (text, langId, label) => langId === 'fr' || !canSpeak() ? '' : `<button type="button" class="say" data-a="say" data-t="${esc(text)}" data-l="${esc(langId)}" aria-label="${esc(label || 'Écouter')}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>${label ? `<span>${esc(label)}</span>` : ''}</button>`;
// automatic reading: the foreign word when it appears, the foreign answer once revealed
function autoSay(key, text, langId) {
  if (TR === 'e' || !cfg.ttsAuto || langId === 'fr' || ui.saidKey === key) return;
  ui.saidKey = key; setTimeout(() => say(text, langId), 60);
}

/* ---------- welcome screen for a new user ---------- */
const WELCOME = [
  ['Bienvenue !', 'Plume &amp; Croc t\'aide à retenir les mots de tes cours. Commence par ajouter tes mots avec le bouton <b>+</b> : un par un, en collant une liste, ou en demandant une liste toute prête à une IA (l\'appli te prépare la demande).'],
  ['Réviser au bon moment', 'Traduis chaque mot en écrivant ta réponse. Juste : le mot monte d\'une case et revient plus tard (1 jour, 3 jours, 1 semaine… jusqu\'à 3 mois). Raté : il revient vite. Plus un mot monte, plus il rapporte de points.'],
  ['Vue, Ouïe et Monstres', 'En <b>Vue</b>, tu lis le mot. En <b>Ouïe</b>, tu l\'entends seulement : réponds dans sa langue (dictée) ou en français (compréhension). Chacun a son Sprint et son Duel. Dans <b>Monstres</b>, bats les créatures du folklore pour remplir ton bestiaire.'],
  ['Progresser', 'Chaque jour, un défi : 10, 20, 30 ou 50 bonnes réponses. Enchaîne les jours, gagne des titres, des badges… et trouve les badges secrets. Touche la ligne du défi en haut pour voir ta progression.']
];
/* ---------- first visit in a browser: how to put the app on the home screen ---------- */
const isStandalone = () => { try { return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch (e) { return false; } };
const platform = () => { const u = navigator.userAgent || ''; if (/iPhone|iPad|iPod/.test(u) || (/Macintosh/.test(u) && navigator.maxTouchPoints > 1)) return /CriOS|FxiOS|EdgiOS/.test(u) ? 'ios-other' : 'ios'; if (/Android/.test(u)) return 'android'; return 'desktop'; };
let installEvt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; if (ui.install) render(); });
window.addEventListener('appinstalled', () => { installEvt = null; ui.install = false; render(); });
function installCheck() {
  if (framed || isStandalone()) return;
  let seen = null; try { seen = localStorage.getItem('vocab-install-seen'); } catch (e) {}
  if (!seen) ui.install = true;
}
const shareIco = '<svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true" style="vertical-align:-4px"><path d="M10 1v13M5.5 5.5 10 1l4.5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 9H3v12h14V9h-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
const dotsIco = '<svg width="6" height="20" viewBox="0 0 6 20" aria-hidden="true" style="vertical-align:-4px"><circle cx="3" cy="3" r="2.2" fill="currentColor"/><circle cx="3" cy="10" r="2.2" fill="currentColor"/><circle cx="3" cy="17" r="2.2" fill="currentColor"/></svg>';
function renderInstall() {
  if (!ui.install) return '';
  const pf = platform();
  const steps = pf === 'ios' ? [`Touche le bouton <b>Partager</b> ${shareIco} en bas de l'écran (en haut sur iPad).`, 'Fais défiler et choisis <b>Sur l\'écran d\'accueil</b>.', 'Touche <b>Ajouter</b> en haut à droite.', 'Ouvre ensuite l\'appli depuis la nouvelle icône.']
    : pf === 'ios-other' ? ['Sur iPhone, le plus simple est d\'ouvrir ce lien dans <b>Safari</b>.', `Touche alors <b>Partager</b> ${shareIco}, puis <b>Sur l'écran d'accueil</b>.`, 'Touche <b>Ajouter</b>, puis ouvre l\'appli depuis la nouvelle icône.']
    : pf === 'android' ? [`Touche le menu ${dotsIco} en haut à droite de Chrome.`, 'Choisis <b>Installer l\'application</b> (ou <b>Ajouter à l\'écran d\'accueil</b>).', 'Confirme, puis ouvre l\'appli depuis la nouvelle icône.']
    : ['Dans Chrome ou Edge, clique sur l\'icône d\'installation à droite de la barre d\'adresse.', 'Confirme avec <b>Installer</b> : l\'appli s\'ouvre dans sa propre fenêtre.', 'Sur téléphone, ouvre ce même lien pour l\'installer aussi.'];
  return `<div class="bview install"><div>
    <img src="icon-192.png" alt="" class="appico"><b class="big2">Installe l'appli</b>
    <p class="ltxt">Mets Plume &amp; Croc sur ton écran d'accueil : elle s'ouvre en plein écran comme une vraie appli, marche sans connexion et garde tes mots sur ton appareil.</p>
    ${installEvt ? '<div class="row center"><button class="btn" data-a="doinstall">Installer maintenant</button></div><p class="note" style="margin:4px 0 0">Ou à la main :</p>' : ''}
    <ol class="isteps">${steps.map(t => `<li>${t}</li>`).join('')}</ol>
    ${pf.startsWith('ios') ? '<p class="note">Important : installe-la <b>avant</b> d\'ajouter tes mots. Sur iPhone, l\'appli installée et Safari ne partagent pas leurs données.</p>' : ''}
    <div class="row center" style="margin-top:8px"><button class="btn ghost" data-a="noinstall">Continuer dans le navigateur</button></div>
  </div></div>`;
}
function renderWelcome() {
  if (ui.welcome == null) return '';
  const i = ui.welcome, [t, p] = WELCOME[i], last = i === WELCOME.length - 1;
  return `<div class="bview welcome"><div><span class="note">${i + 1} / ${WELCOME.length}</span><b class="big2">${t}</b><p class="ltxt">${p}</p><div class="dots">${WELCOME.map((_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('')}</div><div class="row center" style="margin-top:10px">${last ? '' : '<button class="btn ghost" data-a="wskip">Passer</button>'}<button class="btn" data-a="${last ? 'wskip' : 'wnext'}">${last ? 'C\'est parti !' : 'Suivant'}</button></div></div></div>`;
}
function firstRun() {
  if (cfg.welcomed !== undefined) return;
  cfg.welcomed = words.size > 0;
  if (!cfg.welcomed) ui.welcome = 0;
  saveCfg();
}

/* ---------- list generator: a ready-made request to paste into an AI ---------- */
function aiPrompt() {
  const L = getLang(ui.addLang), g = ui.gen || {}, n = g.n || 30, lvl = g.lvl || 'débutant', theme = (g.theme || '').trim() || 'la vie quotidienne';
  const name = lower(L.name), extra = [];
  if (L.code === 'en') extra.push('- Les verbes avec « to » devant (ex. « To drive = Conduire »).');
  if (L.code === 'ko') extra.push('- Les mots coréens en hangeul uniquement, sans romanisation.');
  return `Donne-moi une liste de ${n} mots de vocabulaire en ${name} sur le thème « ${theme} », niveau ${lvl}, pour un francophone.

Réponds uniquement avec la liste, sans introduction, sans numéros et sans mise en forme. Une ligne par mot, exactement sous cette forme :
mot en ${name} = traduction en français

Règles :
- Commence par une ligne « # ${theme.charAt(0).toUpperCase() + theme.slice(1)} ».
- Chaque mot et chaque traduction commencent par une majuscule (ex. « ${L.code === 'en' ? 'To drive = Conduire' : 'Mot = Traduction'} »)${L.code === 'ko' ? ', sauf le coréen qui n\'a pas de majuscules' : ''}.
- S'il y a plusieurs traductions françaises, sépare-les par « / ».
${extra.length ? extra.join('\n') + '\n' : ''}- Si un mot est ambigu, ajoute un indice entre parenthèses, ex. « Bat = Chauve-souris (animal) ».
- Les nombres en chiffres du côté français.
- Seulement des mots ou des expressions courtes, pas de phrases.`;
}
function renderGen() {
  const g = ui.gen || (ui.gen = {}), L = getLang(ui.addLang);
  return `<section><h2>Créer une liste avec une IA</h2>
    <p class="note" style="margin-top:0">Pas de liste sous la main ? L'appli prépare une demande toute faite pour Claude, ChatGPT ou Gemini.</p>
    <ol class="steps"><li>Choisis un thème, un nombre de mots et un niveau.</li><li>Appuie sur <b>Copier la demande</b>.</li><li>Colle-la dans l'IA de ton choix et envoie.</li><li>Copie sa réponse et colle-la ci-dessous dans <b>Importer une liste</b>.</li></ol>
    <label for="g-lang">Langue</label><select id="g-lang">${cfg.langs.map(l => `<option value="${l.id}"${l.id === L.id ? ' selected' : ''}>${esc(l.name)}</option>`).join('')}${(() => { const av = LANG_PRESETS.filter(([n, c]) => !cfg.langs.some(l => l.code === c)); return av.length ? `<optgroup label="Nouvelle langue">${av.map(([n, c]) => `<option value="new:${c}">${esc(n)}</option>`).join('')}</optgroup>` : ''; })()}</select>
    <label for="g-theme">Thème</label><input id="g-theme" placeholder="ex. la cuisine, le chantier, les voyages" value="${esc(g.theme || '')}">
    <div class="two"><div><label for="g-n">Nombre de mots</label><select id="g-n">${[10, 20, 30, 50].map(v => `<option${(g.n || 30) === v ? ' selected' : ''}>${v}</option>`).join('')}</select></div>
    <div><label for="g-lvl">Niveau</label><select id="g-lvl">${['débutant', 'intermédiaire', 'avancé'].map(v => `<option${(g.lvl || 'débutant') === v ? ' selected' : ''}>${v}</option>`).join('')}</select></div></div>
    <div class="row"><button class="btn" type="button" data-a="gencopy">Copier la demande</button><button class="btn ghost" type="button" data-a="genshow">${g.show ? 'Masquer' : 'Voir'} la demande</button></div>
    ${g.show ? `<textarea rows="10" readonly id="g-out">${esc(aiPrompt())}</textarea>` : ''}
  </section>`;
}

function readGen() { const g = ui.gen || (ui.gen = {}); if ($('#g-theme')) { g.theme = $('#g-theme').value; g.n = Number($('#g-n').value); g.lvl = $('#g-lvl').value; } }
/* ---------- toast ---------- */
let toastTimer, toastUndo;
function toast(t, undo) {
  $('#toastT').textContent = t; toastUndo = undo;
  $('#toastB').style.display = undo ? '' : 'none';
  $('#toast').style.display = 'flex';
  clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').style.display = 'none', 5000);
}
$('#toastB').addEventListener('click', () => { toastUndo?.(); $('#toast').style.display = 'none'; });

/* ---------- events ---------- */
const go = v => { view = v; ui.bview = null; ui.beastView = null; if (v !== 'hunt') stopBossTimer(); if (v === 'rev') setTrack('w'); if (v === 'ear') setTrack('e'); if (v === 'hunt') setTrack(ui.huntTrack || 'w'); ui.openId = null; ui.editLib = null; ui.confirm = null; ui.newLib = false; ui.addNew = false; ui.restore = null; ui.backupText = ''; if (v === 'rev' || v === 'ear') startSessionIfNeeded(); render(); };
document.querySelector('nav').addEventListener('click', e => { const b = e.target.closest('button'); if (b) go(b.dataset.v); });
$('#gear').addEventListener('click', () => go(view === 'set' ? 'rev' : 'set'));
$('#score').addEventListener('click', () => go(view === 'help' ? 'rev' : 'help'));
$('#bestBtn').addEventListener('click', () => go(view === 'best' ? 'rev' : 'best'));
$('#lastBtn').addEventListener('click', () => { go('prog'); ui.bview = { k: 'last' }; render(); });
$('#sStreak').addEventListener('click', () => go(view === 'prog' ? 'rev' : 'prog'));

$('#main').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (f.id === 'f') submit($('#ans')?.value || '');
  if (f.id === 'sf') sprintAnswer($('#ans')?.value || '');
  if (f.id === 'bf') bossAnswer($('#ans')?.value || '');
  if (f.id === 'df') duelAnswer($('#ans')?.value || '');
  if (f.id === 'af') {
    const t = split($('#a-t').value), fr = split($('#a-fr').value);
    if (!t.length || !fr.length) { toast('Remplis les deux champs.'); return; }
    const r = addWords([[t, fr]], ui.addLang, ui.addLib);
    toast(r.added ? `« ${t[0]} » ajouté` : `« ${t[0]} » existait déjà : traductions fusionnées`);
    $('#a-t').value = ''; $('#a-fr').value = ''; $('#a-t').focus(); renderHeader();
    if (!session || session.state === 'done') restartSession();
    celebrate();
  }
  if (f.id === 'at') {
    const name = $('#at-n').value.trim(); if (!name) { toast('Donne un nom au thème.'); return; }
    const l = { id: uid(), lang: ui.addLang, name };
    cfg.libs.push(l); saveCfg(); ui.addLib = l.id; ui.addNew = false; toast(`Thème « ${name} » créé`); render();
  }
  if (f.id === 'if') {
    const { pairs, bad } = parseImport($('#imp').value);
    if (!pairs.length) { toast('Aucune ligne « mot = traduction » trouvée.'); return; }
    const r = addWords(pairs, ui.addLang, ui.addLib);
    ui.importText = bad.join('\n');
    toast(`${plural(r.added, 'mot ajouté', 'mots ajoutés')}${r.merged ? `, ${r.merged} complété(s)` : ''}${bad.length ? `, ${bad.length} ligne(s) non comprise(s)` : ''}`);
    if (!session || session.state === 'done') restartSession();
    render();
    celebrate();
  }
  if (f.id === 'ef') {
    const w = words.get(f.dataset.id);
    const t = split($('#e-t').value), fr = split($('#e-fr').value);
    if (!t.length || !fr.length) { toast('Il faut au moins un mot de chaque côté.'); return; }
    const nl = $('#e-lib').value;
    if (nl !== wLib(w)) { cfg.learn = { ...(cfg.learn || {}) }; fr.forEach(f => cfg.learn[frKey(f)] = getLib(nl).name); saveCfg(); }
    update(w, { en: t, fr, lib: nl }); ui.openId = null; toast('Modifié'); render();
  }
  if (f.id === 'lf') {
    const l = cfg.libs.find(x => x.id === f.dataset.id);
    l.name = $('#l-n').value.trim() || l.name;
    saveCfg(); ui.editLib = null; render();
  }
  if (f.id === 'nl') {
    const name = $('#n-n').value.trim(); if (!name) { toast('Donne un nom au thème.'); return; }
    const l = { id: uid(), lang: ui.libLang, name };
    cfg.libs.push(l); saveCfg(); ui.newLib = false; ui.addLang = l.lang; ui.addLib = l.id; toast(`Thème « ${name} » créé`); render();
  }
  if (f.id === 'nlang') {
    const name = $('#nl-n').value.trim();
    if (!name) { toast('Écris le nom de la langue.'); return; }
    if (cfg.langs.some(l => norm(l.name) === norm(name))) { toast(`${name} existe déjà.`); return; }
    const p = LANG_PRESETS.find(x => norm(x[0]) === norm(name));
    addLanguage(p ? p[0] : name, p ? p[1] : '');
    toast(`Bibliothèque « ${name} » créée`); render();
  }
});
$('#main').addEventListener('click', e => {
  const b = e.target.closest('[data-a]'); if (!b) return;
  const a = b.dataset.a;
  if (a === 'next') { next(); render(); }
  if (a === 'mine') acceptMine();
  if (a === 'extra') { session = newSession(true); next(); render(); }
  if (a === 'goadd') go('add');
  if (a === 'gorev') go('rev');
  if (a === 'mode') { stopSprint(); stopBossTimer(); ui.mode = b.dataset.k; ui.sprint = null; ui.boss = null; ui.duel = null; if (ui.mode === 'rev') startSessionIfNeeded(); render(); }
  if (a === 'sprintgo') sprintStart();
  if (a === 'bossgo') bossStart();
  if (a === 'bossfight') bossFight();
  if (a === 'coll') go('coll');
  if (a === 'collback') go('prog');
  if (a === 'bestiary') go('best');
  if (a === 'bestback') { go('hunt'); }
  if (a === 'hunttrack') { stopBossTimer(); ui.huntTrack = b.dataset.k; ui.boss = null; setTrack(ui.huntTrack); render(); }
  if (a === 'bestsort') { ui.bestSort = b.dataset.k; render(); }
  if (a === 'beast') { ui.beastView = b.dataset.k; render(); }
  if (a === 'duelgo') duelStart();
  if (a === 'duelplay') duelPlay();
  if (a === 'duelsetup') { ui.duel = { state: 'setup' }; render(); }
  if (a === 'goal') { cfg.stats.goal = Number(b.dataset.val); cfg.stats.goals = { ...(cfg.stats.goals || {}), [ymd(Date.now())]: cfg.stats.goal }; if (todayCount() >= cfg.stats.goal && (cfg.stats.days || {})[ymd(Date.now())]) ui.goalDone = false; saveCfg(); render(); celebrate(); }
  if (a === 'party') { ui.celebrate = false; render(); }
  if (a === 'bview') { ui.bview = { k: b.dataset.k, t: b.dataset.t }; render(); }
  if (a === 'bclose' && (e.target === b || e.target.closest('button[data-a="bclose"]'))) { ui.bview = null; ui.beastView = null; render(); }
  if (a === 'golang') { go('set'); document.getElementById('langs')?.scrollIntoView(); }
  if (a === 'starter') { ui.importText = STARTER; render(); }
  if (a === 'tog') {
    const id = b.dataset.l, on = cfg.filt.on;
    if (on.includes(id)) { if (on.length === 1) { toast('Garde au moins une bibliothèque active.'); return; } cfg.filt.on = on.filter(x => x !== id); }
    else cfg.filt.on = cfg.langs.map(l => l.id).filter(x => x === id || on.includes(x));
    ui.theme = 'all';
    if (!cfg.filt.to.some(x => x === 'fr' || cfg.filt.on.includes(x))) cfg.filt.to = ['fr'];
    saveCfg(); restartSession(); render();
  }
  if (a === 'fold') { cfg.filt.hide = !cfg.filt.hide; saveCfg(); render(); }
  if (a === 'topen') { ui.themeOpen = !ui.themeOpen; render(); }
  if (a === 'theme') { if (!ui.themeOpen) { ui.themeOpen = true; render(); return; } ui.theme = b.dataset.val; ui.themeOpen = false; restartSession(); render(); }
  if (a === 'ans') {
    const v = b.dataset.val, f = cfg.filt;
    if (v === 'mix') { f.mix = true; }
    else if (f.mix) { f.mix = false; f.to = [v]; }
    else {
      const cur = answerLangs();
      if (cur.includes(v)) { if (cur.length === 1) { toast('Garde au moins une langue de réponse.'); return; } f.to = cur.filter(x => x !== v); }
      else f.to = [...cur, v];
    }
    saveCfg(); restartSession(); render();
  }
  if (a === 'open') { ui.openId = ui.openId === b.dataset.id ? null : b.dataset.id; render(); }
  if (a === 'del') {
    const w = words.get(b.dataset.id); words.delete(w.id); backend.del(w); ui.openId = null; render();
    toast(`« ${w.en[0]} » supprimé`, () => { words.set(w.id, w); backend.put(w); render(); });
  }
  if (a === 'autosort') {
    const r = autoSort(ui.libLang); ui.editLib = null; render();
    toast(r.moved ? `${plural(r.moved, 'mot rangé', 'mots rangés')} par thème` : 'Tout est déjà rangé', r.moved ? () => { r.undo(); render(); } : null);
  }
  if (a === 'liblang') { ui.libLang = b.dataset.id; ui.editLib = null; ui.newLib = false; render(); }
  if (a === 'newlib') { ui.newLib = !ui.newLib; render(); if (ui.newLib) $('#n-n')?.focus(); }
  if (a === 'editlib') { ui.editLib = ui.editLib === b.dataset.id ? null : b.dataset.id; ui.confirm = null; render(); }
  if (a === 'askdel') { ui.confirm = b.dataset.k; render(); }
  if (a === 'addlang') { addLanguage(b.dataset.n, b.dataset.c); toast(`Bibliothèque « ${b.dataset.n} » créée`); render(); }
  if (a === 'dellib' || a === 'dellang') {
    const id = b.dataset.id;
    const gone = [...words.values()].filter(w => a === 'dellib' ? wLib(w) === id : wLang(w) === id);
    gone.forEach(w => { words.delete(w.id); backend.del(w); });
    if (a === 'dellib') cfg.libs = cfg.libs.filter(l => l.id !== id);
    else {
      cfg.langs = cfg.langs.filter(l => l.id !== id); cfg.libs = cfg.libs.filter(l => l.lang !== id);
      cfg.filt.on = cfg.filt.on.filter(x => x !== id); if (!cfg.filt.on.length) cfg.filt.on = [cfg.langs[0].id];
      cfg.filt.to = cfg.filt.to.filter(x => x !== id); if (!cfg.filt.to.length) cfg.filt.to = ['fr'];
    }
    if (ui.theme === id) ui.theme = 'all';
    ui.confirm = null; ui.editLib = null; saveCfg(); restartSession(); render();
    toast(plural(gone.length, 'mot supprimé', 'mots supprimés'));
  }
  if (a === 'preset') {
    const k = b.dataset.k;
    if (k !== 'custom' && PRESETS[k]) { cfg.theme.main = PRESETS[k].main; cfg.theme.accent = PRESETS[k].accent; }
    cfg.theme.preset = k; applyTheme(); saveCfg(); render();
  }
  if (a === 'say') { say(b.dataset.t, b.dataset.l, Number(b.dataset.r) || 0); return; }
  if (a === 'ttsauto') { cfg.ttsAuto = !cfg.ttsAuto; saveCfg(); render(); }
  if (a === 'welcome') { ui.welcome = 0; render(); }
  if (a === 'install') { ui.install = true; render(); }
  if (a === 'noinstall') { ui.install = false; try { localStorage.setItem('vocab-install-seen', '1'); } catch (e) {} render(); }
  if (a === 'doinstall' && installEvt) { const ev = installEvt; installEvt = null; ev.prompt(); ev.userChoice.then(r => { if (r.outcome === 'accepted') { ui.install = false; try { localStorage.setItem('vocab-install-seen', '1'); } catch (e) {} } render(); }).catch(() => {}); }
  if (a === 'wnext') { ui.welcome++; render(); }
  if (a === 'wskip') { ui.welcome = null; cfg.welcomed = true; saveCfg(); render(); }
  if (a === 'genshow') { readGen(); ui.gen.show = !ui.gen.show; render(); }
  if (a === 'gencopy') { readGen(); const t = aiPrompt(); (navigator.clipboard?.writeText(t) || Promise.reject()).then(() => toast('Demande copiée : colle-la dans ton IA.'), () => { ui.gen.show = true; render(); toast('Copie impossible : sélectionne le texte et copie-le.'); }); }
  if (a === 'caltheme') { cfg.calTheme = b.dataset.k; saveCfg(); render(); }
  if (a === 'scheme') { cfg.theme.mode = b.dataset.k; applyTheme(); saveCfg(); render(); }
  if (a === 'backup') downloadBackup();
  if (a === 'update') hardUpdate();
  if (a === 'checkupd') checkUpdate(true);
  if (a === 'backuptext') {
    const txt = backupJSON();
    const p = navigator.clipboard?.writeText(txt);
    if (p) p.then(() => toast('Sauvegarde copiée : colle-la dans tes notes'), () => { ui.backupText = txt; render(); });
    else { ui.backupText = txt; render(); }
  }
  if (a === 'restoretext') { const bk = readBackup($('#restore').value); if (!bk) { toast("Ce texte n'est pas une sauvegarde valide."); return; } ui.restore = bk; render(); }
  if (a === 'restoreok') { applyBackup(ui.restore); ui.restore = null; toast('Sauvegarde restaurée'); render(); }
  if (a === 'restorecancel') { ui.restore = null; render(); }
});
$('#main').addEventListener('input', e => {
  const id = e.target.id;
  if (id === 'q') { ui.q = e.target.value; render(); }
  if (id === 'imp') ui.importText = e.target.value;
  if (id === 'c-main' || id === 'c-acc') {
    cfg.theme.preset = 'custom';
    cfg.theme[id === 'c-main' ? 'main' : 'accent'] = e.target.value;
    applyTheme();
  }
});
$('#main').addEventListener('change', e => {
  const id = e.target.id;
  if (id === 'c-main' || id === 'c-acc') { saveCfg(); render(); }
  if (id === 'g-lang' && e.target.value.startsWith('new:')) { readGen(); const pr = LANG_PRESETS.find(x => x[1] === e.target.value.slice(4)); const nl = addLanguage(pr[0], pr[1]); ui.addLang = nl.id; ui.addLib = '__auto'; toast(`Bibliothèque « ${pr[0]} » créée`); render(); return; }
  if (id === 'a-lang' || id === 'g-lang') { readGen(); ui.addLang = e.target.value; ui.addLib = '__auto'; ui.addNew = false; render(); }
  if (id === 'a-lib') {
    if (e.target.value === '__new') { ui.addNew = true; render(); $('#at-n')?.focus(); }
    else { ui.addLib = e.target.value; ui.addNew = false; render(); }
  }
  if (id === 'restorefile' && e.target.files[0]) {
    const rd = new FileReader();
    rd.onload = () => { const bk = readBackup(rd.result); if (!bk) { toast("Ce fichier n'est pas une sauvegarde valide."); return; } ui.restore = bk; render(); };
    rd.readAsText(e.target.files[0]);
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && (ui.bview || ui.beastView)) { ui.bview = null; ui.beastView = null; render(); return; }
  if (e.key === 'Enter' && (view === 'rev' || view === 'ear') && (ui.mode || 'rev') === 'rev' && (session?.state === 'right' || (session?.state === 'wrong' && !mustRetype(session.cur))) && !/BUTTON|INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) { e.preventDefault(); next(); render(); }
});

applyTheme();
render();
boot();
}
