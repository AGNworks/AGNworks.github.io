// Load content files
function loadContent(lang) {
    return fetch(`assets/languages/${lang}.json`)
        .then(response => response.json());
}

// Update page content
function updateContent(content) {
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="container main">
            <div class="row home">
                <div class="col-md-6 left">
                    <img class="img-responsive img-rabbit" src="assets/images/home.jpg">
                </div>
                <div class="col-md-6 text-center right">
                    <div class="logo">
                        <img src="assets/images/logoAGNsite.png">
                        <h4>${content.home.title}</h4>
                    </div>
                    <p class="home-description">
                        ${content.home.description}
                    </p>
                    <div class="btn-group-vertical custom_btn animate__animated animate__slideInRight">
                        <div class="btn btn-rabbit" data-target="about">${content.home.buttons[0]}</div>
                        <div class="btn btn-rabbit" data-target="work">${content.home.buttons[1]}</div>
                        <div class="btn btn-rabbit" data-target="contact">${content.home.buttons[2]}</div>
                    </div>
                    <div class="social-links">
                        <a href="https://github.com/AGNworks" target="_blank" class="social-card">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub">
                            <span>GitHub</span>
                        </a>

                        <a href="https://linkedin.com/in/adamgabornemeth" target="_blank" class="social-card">
                            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn">
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://www.thingiverse.com/nemada/designs" target="_blank" class="social-card">
                            <img src="https://cdn.worldvectorlogo.com/logos/thingiverse-logo.svg" alt="Thingiverse">
                            <span>Thingiverse</span>
                        </a>

                        <a href="https://hh.ru/resume/a951a82aff0bbc92110039ed1f547634625068" target="_blank" class="social-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png" alt="HeadHunter">
                            <span>HeadHunter</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add event listeners to buttons
    document.querySelectorAll('[data-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            // Handle navigation
            console.log(`Navigate to ${btn.dataset.target}`);
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set default language
    let currentLang = 'en';

    // Load initial content
    loadContent(currentLang).then(updateContent);

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                currentLang = lang;
                loadContent(lang).then(updateContent);
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Store preference in localStorage
                localStorage.setItem('preferredLang', lang);
            }
        });
    });

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        currentLang = savedLang;
        document.querySelector(`.lang-btn[data-lang="${savedLang}"]`).classList.add('active');
        document.querySelector('.lang-btn[data-lang="en"]').classList.remove('active');
        loadContent(savedLang).then(updateContent);
    }
});