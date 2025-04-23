const viLangFile = 'langGioiThieu.json';
const enLangFile = 'langGioiThieu.json';

let translations = {};
let currentLang = 'vi';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  loadTranslations(lang);

  const switchToggle = document.getElementById('lang-toggle');
  document.getElementById('btn-vi').classList.toggle('active', lang === 'vi');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  switchToggle.classList.remove('lang-vi', 'lang-en');
  switchToggle.classList.add(lang === 'vi' ? 'lang-vi' : 'lang-en');
}

function loadTranslations(lang) {
  const langFile = lang === 'vi' ? viLangFile : enLangFile;
  fetch(langFile)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Lỗi HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      translations = data[lang];
      updateContent();
    })
    .catch(error => console.error('❌ Error loading language file:', error));
}

function updateContent() {
  document.getElementById('title').innerText = translations.title;
  document.getElementById('introduction').innerText = translations.introduction;
  document.getElementById('noidung1').innerText = translations.noidung1;
  document.getElementById('noidung2').innerText = translations.noidung2;
  document.getElementById('noidung3').innerText = translations.noidung3;
  document.getElementById('noidung4').innerText = translations.noidung4;
  document.getElementById('noidung5').innerText = translations.noidung5;
  document.getElementById('noidung6').innerText = translations.noidung6;
  document.getElementById('noidung7').innerText = translations.noidung7;
  document.getElementById('noidung8').innerText = translations.noidung8;
  document.getElementById('noidung9').innerText = translations.noidung9;
  document.getElementById('noidung10').innerText = translations.noidung10;
  document.getElementById('footer').innerText = translations.footer;
}

window.onload = () => {
  setLanguage('vi');
};