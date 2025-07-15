// Language content object
const content = {
    en: {
        home: {
            title: "Ádám Gábor Németh",
            description: "Hi, I am Ádám, Machine Learning (ML) Engineer living in Moscow, Russia...",
            buttons: ["About", "AI projects", "More projects"]
        },
        about: {
            title: "About",
            content: [
                "Hello, my name is Ádám Gábor Németh...",
                "I graduated as a mechanical engineer..."
            ]
        },
        // Add all other sections similarly
    },
    ru: {
        home: {
            title: "Адам Габор Немет",
            description: "Привет, я Адам, инженер по машинному обучению...",
            buttons: ["Обо мне", "AI проекты", "Другие проекты"]
        },
        about: {
            title: "Обо мне",
            content: [
                "Привет, меня зовут Адам Габор Немет...",
                "Я окончил обучение как инженер-механик..."
            ]
        },
        // Add all other sections similarly
    }
};

// Language switching functionality
$(document).ready(function() {
    let currentLang = 'en';

    // Set initial language
    updateContent(currentLang);

    // Language switcher
    $('.lang-btn').click(function() {
        const lang = $(this).data('lang');
        if (lang !== currentLang) {
            currentLang = lang;
            updateContent(lang);
            $('.lang-btn').removeClass('active');
            $(this).addClass('active');
        }
    });

    function updateContent(lang) {
        // Update all text elements with data-lang-key attributes
        $('[data-lang-key]').each(function() {
            const keys = $(this).data('lang-key').split('.');
            let value = content[lang];

            keys.forEach(key => {
                value = value[key];
            });

            $(this).text(value);
        });

        // For more complex elements (like paragraphs with links)
        // you would add specific update logic here
    }
});