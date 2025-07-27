// Language translations object
const translations = {
    en: {
        headerTitle: "World Motors Cars",
        headerSubtitle: "Buying & Selling",
        navHome: "Home",
        navBuy: "Buy Cars",
        navSell: "Sell Cars",
        navContact: "Contact",
        heroTitle: "Welcome to World Motors",
        heroDescription: "Your trusted destination for buying and selling quality cars in Kuwait. We offer the best deals and excellent service.",
        ctaBuy: "Browse Cars",
        ctaSell: "Sell Your Car",
        buyTitle: "Buy Quality Cars",
        buyDescription: "Browse our selection of quality vehicles at competitive prices. We ensure all cars are thoroughly inspected and ready for the road.",
        feature1Title: "Quality Assured",
        feature1Desc: "All vehicles undergo thorough inspection",
        feature2Title: "Best Prices",
        feature2Desc: "Competitive pricing for all budgets",
        feature3Title: "Expert Service",
        feature3Desc: "Professional guidance throughout your purchase",
        sellTitle: "Sell Your Car",
        sellDescription: "Looking to sell your car? We offer fair prices and quick transactions. Contact us today for a free evaluation.",
        step1Title: "1. Contact Us",
        step1Desc: "Call or visit us for initial evaluation",
        step2Title: "2. Vehicle Inspection",
        step2Desc: "Professional assessment of your vehicle",
        step3Title: "3. Fair Offer",
        step3Desc: "Receive a competitive offer for your car",
        contactTitle: "Contact Us",
        addressLabel: "Address",
        addressText: "Ardhiya Herafiya, Mohammed Nazzal Al-Moassab, Block 4, Shop 13, Main street, Farwaniya, Kuwait",
        phoneLabel: "Phone",
        phoneText: "6665 0502",
        hoursLabel: "Business Hours",
        hoursText: "Monday - Sunday: 10:00 - 22:00",
        footerText: "© 2024 World Motors Cars. All rights reserved.",
        footerLocation: "Farwaniya, Kuwait"
    },
    ar: {
        headerTitle: "شركة عالم المواتر لبيع وشراء السيارات",
        headerSubtitle: "شراء وبيع السيارات",
        navHome: "الرئيسية",
        navBuy: "شراء السيارات",
        navSell: "بيع السيارات",
        navContact: "اتصل بنا",
        heroTitle: "مرحباً بكم في شركة عالم المواتر",
        heroDescription: "وجهتكم الموثوقة لشراء وبيع السيارات عالية الجودة في الكويت. نقدم أفضل الصفقات والخدمة الممتازة.",
        ctaBuy: "تصفح السيارات",
        ctaSell: "بيع سيارتك",
        buyTitle: "شراء سيارات عالية الجودة",
        buyDescription: "تصفح مجموعتنا من السيارات عالية الجودة بأسعار تنافسية. نضمن فحص جميع السيارات بدقة وجاهزيتها للطريق.",
        feature1Title: "جودة مضمونة",
        feature1Desc: "جميع السيارات تخضع لفحص شامل ودقيق",
        feature2Title: "أفضل الأسعار",
        feature2Desc: "أسعار تنافسية تناسب جميع الميزانيات",
        feature3Title: "خدمة متخصصة",
        feature3Desc: "إرشاد مهني طوال عملية الشراء",
        sellTitle: "بيع سيارتك",
        sellDescription: "تريد بيع سيارتك؟ نقدم أسعاراً عادلة ومعاملات سريعة. اتصل بنا اليوم للحصول على تقييم مجاني.",
        step1Title: "١. اتصل بنا",
        step1Desc: "اتصل أو قم بزيارتنا للتقييم الأولي",
        step2Title: "٢. فحص السيارة",
        step2Desc: "تقييم مهني لسيارتك",
        step3Title: "٣. عرض عادل",
        step3Desc: "احصل على عرض تنافسي لسيارتك",
        contactTitle: "اتصل بنا",
        addressLabel: "العنوان",
        addressText: "عريضية حرافية، محمد نزال المعصب، بلوك ٤، محل ١٣، الشارع الرئيسي، الفروانية، الكويت",
        phoneLabel: "الهاتف",
        phoneText: "٦٦٦٥ ٠٥٠٢",
        hoursLabel: "ساعات العمل",
        hoursText: "الاثنين - الأحد: ١٠:٠٠ - ٢٢:٠٠",
        footerText: "© ٢٠٢٤ شركة عالم المواتر للسيارات. جميع الحقوق محفوظة.",
        footerLocation: "الفروانية، الكويت"
    }
};

// Current language state
let currentLanguage = 'en';

// DOM elements
let languageToggle;
let htmlElement;
let bodyElement;

// Initialize the application
function initializeApp() {
    try {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupEventListeners);
        } else {
            setupEventListeners();
        }
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Setup event listeners
function setupEventListeners() {
    try {
        // Get DOM elements
        languageToggle = document.getElementById('languageToggle');
        htmlElement = document.documentElement;
        bodyElement = document.body;

        // Check if language toggle button exists
        if (languageToggle) {
            languageToggle.addEventListener('click', toggleLanguage);
        } else {
            console.warn('Language toggle button not found');
        }

        // Set initial language
        setLanguage('en');

        // Add smooth scroll behavior for navigation links
        setupSmoothScrolling();

        // Add fade-in animation on scroll
        setupScrollAnimations();

    } catch (error) {
        console.error('Error setting up event listeners:', error);
    }
}

// Toggle between languages
function toggleLanguage() {
    try {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        setLanguage(newLanguage);
    } catch (error) {
        console.error('Error toggling language:', error);
        // Fallback to English if error occurs
        setLanguage('en');
    }
}

// Set the language and update all text content
function setLanguage(language) {
    try {
        currentLanguage = language;
        const texts = translations[language];

        if (!texts) {
            console.error('Language not found:', language);
            return;
        }

        // Update HTML attributes
        if (htmlElement) {
            htmlElement.setAttribute('lang', language === 'ar' ? 'ar' : 'en');
            htmlElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
        }

        // Update body class for RTL/LTR styling
        if (bodyElement) {
            bodyElement.className = language === 'ar' ? 'rtl' : 'ltr';
        }

        // Update language toggle button text
        if (languageToggle) {
            languageToggle.textContent = language === 'en' ? 'العربية' : 'English';
        }

        // Update all text content
        updateTextContent(texts);

    } catch (error) {
        console.error('Error setting language:', error);
    }
}

// Update text content for all elements
function updateTextContent(texts) {
    try {
        // Iterate through all translation keys and update corresponding elements
        Object.keys(texts).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = texts[key];
            }
        });
    } catch (error) {
        console.error('Error updating text content:', error);
    }
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    try {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error setting up smooth scrolling:', error);
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    try {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add fade-in class to sections and observe them
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
        });

    } catch (error) {
        console.error('Error setting up scroll animations:', error);
    }
}

// Utility function to handle errors gracefully
function handleError(error, fallbackAction) {
    console.error('An error occurred:', error);
    if (typeof fallbackAction === 'function') {
        try {
            fallbackAction();
        } catch (fallbackError) {
            console.error('Fallback action also failed:', fallbackError);
        }
    }
}

// Initialize the application
initializeApp();

// Export functions for potential external use
window.WorldMotors = {
    setLanguage,
    toggleLanguage,
    currentLanguage: () => currentLanguage
};
