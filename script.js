// ===== TARJIMA TIZIMI (i18n) =====
const translations = {
  uz: {
    logo_title: "Urganch Davlat Pedagogika Instituti",
    logo_subtitle: "Aniq fanlar oliy maktabi",
    nav_home: "Bosh sahifa",
    nav_school: "Oliy Maktab",
    nav_docs: "Hujjatlar",
    nav_students: "Talabalar",
    nav_institute: "Institut",
    nav_leadership: "Rahbariyat",
    nav_faculties: "Fakultetlar",
    nav_departments: "Bo'limlar",
    nav_activity: "Faoliyat",
    nav_international: "Xalqaro faoliyat",
    nav_conference: "Konferensiya",
    nav_vacancy: "Vakansiya",
    nav_contact: "Aloqa",
    settings_title: "Sozlamalar",
    settings_darkmode: "Tungi rejim",
    settings_lang: "Tilni tanlang",
    settings_font: "Shrift",
    hero_title: "Urganch Davlat Pedagogika Instituti",
    hero_subtitle: "Aniq Fanlar Oliy Maktabi",
    hero_desc: "Zamonaviy AI va Axborot Texnologiyalari bo'yicha dunyo standartidagi ta'lim platformasi.",
    hero_teacher: "O'qituvchi",
    hero_student: "Talaba",
    courses_title: "Dars mashg'ulotlari",
    course_ai: "Sun'iy intellekt",
    course_it: "Axborot texnologiyalari",
    course_youth: "Rahbar va yoshlar",
    video_title: "Online video darslar",
    video_caption: "Online darslar",
    video_info_title: "Urganch davlat pedagogika instituti",
    video_info_desc: "Urganch davlat pedagogika instituti online darslaridan lavha",
    video_more: "Batafsil Ma'lumot",
    features_title: "Bizning Yo'nalishlar",
    news_title: "So'nggi Yangiliklari",
    chat_title: "Aloqa markazi",
    footer_title: "UrDPI Aniq Fanlar Oliy Maktabi"
  },
  en: {
    logo_title: "Urgench State Pedagogical Institute",
    logo_subtitle: "School of Exact Sciences",
    nav_home: "Home",
    nav_school: "Higher School",
    nav_docs: "Documents",
    nav_students: "Students",
    nav_institute: "Institute",
    nav_leadership: "Leadership",
    nav_faculties: "Faculties",
    nav_departments: "Departments",
    nav_activity: "Activities",
    nav_international: "International Activities",
    nav_conference: "Conference",
    nav_vacancy: "Vacancies",
    nav_contact: "Contact",
    settings_title: "Settings",
    settings_darkmode: "Dark mode",
    settings_lang: "Select language",
    settings_font: "Font",
    hero_title: "Urgench State Pedagogical Institute",
    hero_subtitle: "School of Exact Sciences",
    hero_desc: "A world-class educational platform for modern AI and Information Technologies.",
    hero_teacher: "Teacher",
    hero_student: "Student",
    courses_title: "Courses",
    course_ai: "Artificial Intelligence",
    course_it: "Information Technology",
    course_youth: "Leaders & Youth",
    video_title: "Online Video Lessons",
    video_caption: "Online lessons",
    video_info_title: "Urgench State Pedagogical Institute",
    video_info_desc: "A glimpse from the online lessons of Urgench State Pedagogical Institute",
    video_more: "More Info",
    features_title: "Our Directions",
    news_title: "Latest News",
    chat_title: "Contact Center",
    footer_title: "UrDPI School of Exact Sciences"
  },
  ru: {
    logo_title: "Ургенчский государственный педагогический институт",
    logo_subtitle: "Высшая школа точных наук",
    nav_home: "Главная",
    nav_school: "Высшая школа",
    nav_docs: "Документы",
    nav_students: "Студенты",
    nav_institute: "Институт",
    nav_leadership: "Руководство",
    nav_faculties: "Факультеты",
    nav_departments: "Отделы",
    nav_activity: "Деятельность",
    nav_international: "Международная деятельность",
    nav_conference: "Конференция",
    nav_vacancy: "Вакансии",
    nav_contact: "Контакты",
    settings_title: "Настройки",
    settings_darkmode: "Ночной режим",
    settings_lang: "Выберите язык",
    settings_font: "Шрифт",
    hero_title: "Ургенчский государственный педагогический институт",
    hero_subtitle: "Высшая школа точных наук",
    hero_desc: "Образовательная платформа мирового стандарта в области современных ИИ и информационных технологий.",
    hero_teacher: "Преподаватель",
    hero_student: "Студент",
    courses_title: "Учебные занятия",
    course_ai: "Искусственный интеллект",
    course_it: "Информационные технологии",
    course_youth: "Руководство и молодёжь",
    video_title: "Онлайн видео уроки",
    video_caption: "Онлайн уроки",
    video_info_title: "Ургенчский государственный педагогический институт",
    video_info_desc: "Фрагмент онлайн-занятий Ургенчского государственного педагогического института",
    video_more: "Подробнее",
    features_title: "Наши направления",
    news_title: "Последние новости",
    chat_title: "Контактный центр",
    footer_title: "UrDPI Высшая школа точных наук"
  }
};

function switchLang(lang) {
  const dict = translations[lang];
  if (!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('siteLang', lang);
  // Aktiv til belgisi
  document.querySelectorAll('.lang-link').forEach(link => {
    link.style.opacity = link.dataset.lang === lang ? '1' : '0.5';
  });
}

// Til tugmalarini ulash
document.querySelectorAll('.lang-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    switchLang(link.dataset.lang);
  });
});

// Saqlangan tilni yuklash
const savedLang = localStorage.getItem('siteLang');
if (savedLang && savedLang !== 'uz') {
  switchLang(savedLang);
}

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card, .course-card, .news-card");
  cards.forEach((card) => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});

// HERO TEXT TYPING EFFECT (optional)
(() => {
  const target = document.getElementById("logo-text");
  if (!target) return;
  const text = "UrDPI Aniq Fanlar Oliy Maktabi";
  let index = 0;
  const type = () => {
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 150);
    }
  };
  type();
})();

// LUNDEV HERO CAROUSEL SLIDER LOGIC
document.addEventListener('DOMContentLoaded', () => {
    let nextDom = document.getElementById('ld-next');
    let prevDom = document.getElementById('ld-prev');

    if(nextDom && prevDom) {
        let carouselDom = document.querySelector('.ld-carousel');
        let SliderDom = carouselDom.querySelector('.ld-carousel .ld-list');
        let thumbnailBorderDom = document.querySelector('.ld-carousel .ld-thumbnail');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.ld-item');
        let timeDom = document.querySelector('.ld-carousel .ld-time');

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        let timeRunning = 3000;
        let timeAutoNext = 7000;

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        nextDom.onclick = function(){
            showSlider('next');    
        }

        prevDom.onclick = function(){
            showSlider('prev');    
        }

        function showSlider(type){
            let SliderItemsDom = SliderDom.querySelectorAll('.ld-carousel .ld-list .ld-item');
            let thumbnailItemsDom = document.querySelectorAll('.ld-carousel .ld-thumbnail .ld-item');
            
            if(type === 'next'){
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            }else{
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        }
    }
});

// NEON BLOBS FOLLOW CURSOR
document.addEventListener("mousemove", (e) => {
  const blobs = document.querySelectorAll(".neon-blob");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  blobs.forEach((blob, i) => {
    const speed = (i + 1) * 30;
    blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});


// Dropdown toggle
function toggleDropdown(event, dropId) {
  console.log("toggleDropdown called for:", dropId);
  event.stopPropagation();
  const dropdowns = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i].id !== dropId) {
      if (dropdowns[i].classList.contains("show")) console.log("Hiding:", dropdowns[i].id);
      dropdowns[i].classList.remove("show");
    }
  }
  const current = document.getElementById(dropId);
  if (current) {
    const isShowing = current.classList.toggle("show");
    console.log(isShowing ? "Showing:" : "Hiding:", dropId);
  }
}

// Close dropdowns when clicking elsewhere
window.onclick = (event) => {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("show")) console.log("Closing:", dropdowns[i].id);
      dropdowns[i].classList.remove("show");
    }
  }
};

// VIDEO SHOWCASE PLAY/PAUSE
const showcaseVideo = document.getElementById('showcaseVideo');
const videoPlayBtn = document.getElementById('videoPlayBtn');
if (showcaseVideo && videoPlayBtn) {
  videoPlayBtn.addEventListener('click', () => {
    if (showcaseVideo.paused) {
      showcaseVideo.play();
      videoPlayBtn.querySelector('i').className = 'fa-solid fa-pause';
    } else {
      showcaseVideo.pause();
      videoPlayBtn.querySelector('i').className = 'fa-solid fa-play';
    }
  });
  showcaseVideo.addEventListener('ended', () => {
    videoPlayBtn.querySelector('i').className = 'fa-solid fa-play';
  });
}

// VIDEO FULLSCREEN
const videoFullscreenBtn = document.querySelectorAll('.video-fullscreen-btn');
videoFullscreenBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    // Agar btn ning ota elementida (wrapper) video bo'lsa
    const video = btn.parentElement.querySelector('video');
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
    }
  });
});

// CHATBOT LOGIC
const TELEGRAM_BOT_TOKEN = '8681650289:AAHv3zrWwWzhMOD18gO5l-K-ScynIjKRoyU';
let TELEGRAM_CHAT_ID = '1234105109'; // Admin ID shu yerga yoziladi

const chatBtn = document.querySelector('.chatbot');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');
const chatBody = document.getElementById('chatBody');

if (chatBtn && chatWindow) {
    chatBtn.addEventListener('click', () => {
        chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'flex' : 'none';
    });

    closeChat.addEventListener('click', () => {
        chatWindow.style.display = 'none';
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = sender === 'user' ? 'user-msg' : 'bot-msg';
        msgDiv.textContent = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    sendChat.addEventListener('click', sendMessageToTelegram);
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessageToTelegram();
        }
    });

    function sendMessageToTelegram() {
        const text = chatInput.value.trim();
        if (!text) return;
        
        addMessage(text, 'user');
        chatInput.value = '';

        if(!TELEGRAM_CHAT_ID) {
            setTimeout(() => addMessage("Hozircha admin Chat ID si kiritilmagan. Ulanish kutilmoqda...", 'bot'), 500);
            return;
        }

        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const data = {
            chat_id: TELEGRAM_CHAT_ID,
            text: `🌐 Saytdan yangi xabar:\n\n💬 ${text}`
        };

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                setTimeout(() => addMessage("Xabaringiz adminga yetkazildi. Tez orada javob beramiz!", 'bot'), 1000);
            } else {
                setTimeout(() => addMessage("Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.", 'bot'), 1000);
            }
        })
        .catch(error => {
            setTimeout(() => addMessage("Tarmoqda xatolik yuz berdi. Internetni tekshiring.", 'bot'), 1000);
        });
    }

    // TELEGRAMDAN JAVOBLARNI OLISH (POLLING)
    let lastUpdateId = 0;
    function pollTelegramUpdates() {
        if (!TELEGRAM_CHAT_ID) return;
        
        // So'nggi xabarlarni olish (faqat admindan kelgan)
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${lastUpdateId + 1}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.ok && data.result.length > 0) {
                    data.result.forEach(update => {
                        lastUpdateId = update.update_id;
                        // Agar xabar admindan kelgan bo'lsa
                        if (update.message && String(update.message.chat.id) === String(TELEGRAM_CHAT_ID)) {
                            const text = update.message.text;
                            if (text) {
                                // Admindan kelgan xabarni bot xabari sifatida ekranga chiqaramiz
                                addMessage(text, 'bot');
                            }
                        }
                    });
                }
            })
            .catch(error => console.error("Telegram updates error:", error));
    }

    // Har 3 soniyada yangi xabarlarni tekshirish
    setInterval(pollTelegramUpdates, 3000);
}

// COURSE CARD PDF OCHISH
document.querySelectorAll('.course-card[data-pdf]').forEach(card => {
  card.style.cursor = 'pointer'; // Kursor ko'rsatkichga aylanishi uchun
  card.addEventListener('click', () => {
    const pdfUrl = card.getAttribute('data-pdf');
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  });
});
// NAVBAR YASHIRINISH / KO'RINISH LOGIKASI
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
  });
});

/* =========================================
   ACCESSIBILITY MENU LOGIC
========================================= */
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("a11yToggleBtn");
  const panel = document.getElementById("a11yPanel");
  if (!toggleBtn || !panel) return;

  // Toggle Panel
  toggleBtn.addEventListener("click", () => {
    panel.classList.toggle("show");
  });

  // Close panel on outside click
  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
      panel.classList.remove("show");
    }
  });

  // Elements
  const fontBtns = document.querySelectorAll(".a11y-btn");
  const contrastToggle = document.getElementById("a11y-contrast");
  const dyslexiaToggle = document.getElementById("a11y-dyslexia");
  const underlineToggle = document.getElementById("a11y-underline");
  const animationToggle = document.getElementById("a11y-animation");
  const cursorToggle = document.getElementById("a11y-cursor");
  const focusToggle = document.getElementById("a11y-focus");
  const resetBtn = document.getElementById("a11y-reset");

  // Load Settings
  const applySettings = () => {
    const a11ySettings = JSON.parse(localStorage.getItem("a11ySettings")) || {
      fontSize: "normal",
      contrast: false,
      dyslexia: false,
      underline: false,
      animation: false,
      cursor: false,
      focus: false
    };

    // Font Size
    document.body.style.fontSize = a11ySettings.fontSize === "large" ? "120%" : (a11ySettings.fontSize === "small" ? "90%" : "");
    fontBtns.forEach(btn => btn.classList.remove("active"));
    if (a11ySettings.fontSize === "large") document.querySelector('[data-action="increase-font"]').classList.add("active");
    else if (a11ySettings.fontSize === "small") document.querySelector('[data-action="decrease-font"]').classList.add("active");
    else document.querySelector('[data-action="normal-font"]').classList.add("active");

    // Toggles
    if (contrastToggle) contrastToggle.checked = a11ySettings.contrast;
    if (dyslexiaToggle) dyslexiaToggle.checked = a11ySettings.dyslexia;
    if (underlineToggle) underlineToggle.checked = a11ySettings.underline;
    if (animationToggle) animationToggle.checked = a11ySettings.animation;
    if (cursorToggle) cursorToggle.checked = a11ySettings.cursor;
    if (focusToggle) focusToggle.checked = a11ySettings.focus;

    // Body Classes
    document.body.classList.toggle("a11y-high-contrast", a11ySettings.contrast);
    document.body.classList.toggle("a11y-dyslexia", a11ySettings.dyslexia);
    document.body.classList.toggle("a11y-underline", a11ySettings.underline);
    document.body.classList.toggle("a11y-no-animations", a11ySettings.animation);
    document.body.classList.toggle("a11y-large-cursor", a11ySettings.cursor);
    document.body.classList.toggle("a11y-highlight-focus", a11ySettings.focus);
  };

  const saveSettings = (key, value) => {
    const a11ySettings = JSON.parse(localStorage.getItem("a11ySettings")) || {};
    a11ySettings[key] = value;
    localStorage.setItem("a11ySettings", JSON.stringify(a11ySettings));
    applySettings();
  };

  // Font Listeners
  fontBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const action = e.target.getAttribute("data-action");
      if (action === "decrease-font") saveSettings("fontSize", "small");
      else if (action === "increase-font") saveSettings("fontSize", "large");
      else saveSettings("fontSize", "normal");
    });
  });

  // Toggle Listeners
  if (contrastToggle) contrastToggle.addEventListener("change", (e) => saveSettings("contrast", e.target.checked));
  if (dyslexiaToggle) dyslexiaToggle.addEventListener("change", (e) => saveSettings("dyslexia", e.target.checked));
  if (underlineToggle) underlineToggle.addEventListener("change", (e) => saveSettings("underline", e.target.checked));
  if (animationToggle) animationToggle.addEventListener("change", (e) => saveSettings("animation", e.target.checked));
  if (cursorToggle) cursorToggle.addEventListener("change", (e) => saveSettings("cursor", e.target.checked));
  if (focusToggle) focusToggle.addEventListener("change", (e) => saveSettings("focus", e.target.checked));

  // Reset Listeners
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem("a11ySettings");
      applySettings();
    });
  }

  // Initial Load
  applySettings();
});
// NEWS REACTIONS LOGIC
document.querySelectorAll('.reactions').forEach(reactions => {
  const likeBtn = reactions.querySelector('.like-btn');
  const dislikeBtn = reactions.querySelector('.dislike-btn');

  likeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (likeBtn.classList.contains('liked')) {
      likeBtn.classList.remove('liked');
    } else {
      likeBtn.classList.add('liked');
      if (dislikeBtn.classList.contains('disliked')) {
        dislikeBtn.classList.remove('disliked');
      }
    }
  });

  dislikeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dislikeBtn.classList.contains('disliked')) {
      dislikeBtn.classList.remove('disliked');
    } else {
      dislikeBtn.classList.add('disliked');
      if (likeBtn.classList.contains('liked')) {
        likeBtn.classList.remove('liked');
      }
    }
  });
});
// ANNOUNCE FORM TELEGRAM LOGIC
const announceForm = document.querySelector('.announce-form form');
if (announceForm) {
  announceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = announceForm.querySelectorAll('input, textarea');
    const fio = inputs[0].value.trim();
    const tel = inputs[1].value.trim();
    const xabar = inputs[2].value.trim();
    const submitBtn = announceForm.querySelector('button[type="submit"]');

    if (!fio || !tel || !xabar) return;

    // Tugma holatini o'zgartirish
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Yuborilmoqda... <i class="fa-solid fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    if(typeof TELEGRAM_CHAT_ID === 'undefined' || typeof TELEGRAM_BOT_TOKEN === 'undefined' || !TELEGRAM_CHAT_ID) {
      alert("Telegram sozlamalari topilmadi. Admin bilan bog'laning.");
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      return;
    }

    const text = `📢 Saytdan yangi murojaat:\n\n👤 F.I.O: ${fio}\n📞 Tel: ${tel}\n📝 Xabar: ${xabar}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text })
    })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        // Muvaffaqiyatli yuborildi - oynani o'rniga tugmada piktogrammani o'zgartirish
        submitBtn.innerHTML = 'Yuborildi <i class="fa-solid fa-check" style="margin-left: 8px;"></i>';
        submitBtn.style.backgroundColor = '#198754'; // Yashil rang (bo'lmasa avvalgidek qoladi)
        submitBtn.style.color = '#fff';
        announceForm.reset();
        
        // 3 soniyadan keyin tugmani asl holatiga qaytarish
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnText;
          submitBtn.style.backgroundColor = ''; // Asl rangiga qaytish
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 3000);
      } else {
        alert("Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.");
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    })
    .catch(error => {
      alert("Tarmoqda xatolik yuz berdi. Internetni tekshiring.");
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    });
  });
}

// MAIN CONTACT FORM (aloqa.html) TELEGRAM LOGIC
const mainContactForm = document.getElementById('mainContactForm');
if (mainContactForm) {
  mainContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const company = document.getElementById('contactCompany').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const submitBtn = mainContactForm.querySelector('button[type="submit"]');

    if (!name || !email || !company || !subject || !message) return;

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Yuborilmoqda... <i class="fa-solid fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    if(typeof TELEGRAM_CHAT_ID === 'undefined' || typeof TELEGRAM_BOT_TOKEN === 'undefined' || !TELEGRAM_CHAT_ID) {
      alert("Telegram sozlamalari topilmadi. Admin bilan bog'laning.");
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      return;
    }

    const text = `🌐 Rasmiy Hamkordan Murojaat:\n\n👤 F.I.O: ${name}\n✉️ Email: ${email}\n🏢 Tashkilot: ${company}\n📌 Mavzu: ${subject}\n📝 Xabar: ${message}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text })
    })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        submitBtn.innerHTML = 'Yuborildi <i class="fa-solid fa-check" style="margin-left: 8px;"></i>';
        submitBtn.style.backgroundColor = '#198754';
        submitBtn.style.color = '#fff';
        mainContactForm.reset();
        
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 3000);
      } else {
        alert("Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.");
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    })
    .catch(error => {
      alert("Tarmoqda xatolik yuz berdi. Internetni tekshiring.");
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    });
  });
}
