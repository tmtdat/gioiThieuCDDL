const viLangFile = 'langcnot.json';
const enLangFile = 'langcnot.json';

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

function formatContent(content) {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // xử lý in đậm
    .replace(/\n/g, '<br>'); // xử lý xuống dòng
}


function updateContent() {
  document.getElementById('tieudechinh').innerHTML = formatContent(translations.tieudechinh);
  document.getElementById('noidung1').innerHTML = formatContent(translations.noidung1);
  document.getElementById('noidung2').innerHTML = formatContent(translations.noidung2);
  document.getElementById('noidung3').innerHTML = formatContent(translations.noidung3);
  document.getElementById('noidung4').innerHTML = formatContent(translations.noidung4);
  document.getElementById('noidung5').innerHTML = formatContent(translations.noidung5);
  
  document.getElementById("footer-row1").innerText = translations.footer.row1;
  document.getElementById("footer-supervisorTitle").innerText = translations.footer.supervisorTitle;
  document.getElementById("footer-supervisorName").innerText = translations.footer.supervisorName;
  document.getElementById("footer-conductedTitle").innerText = translations.footer.conductedTitle;
  document.getElementById("footer-student1").innerText = translations.footer.student1;
  document.getElementById("footer-student2").innerText = translations.footer.student2;
  document.getElementById("footer-student3").innerText = translations.footer.student3;   
}


window.onload = () => {
  setLanguage('vi');

};
