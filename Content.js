(function() {
    'use strict';

    if (window.location.hostname === "www.facebook.com" && window.location.pathname.startsWith("/messages")) {
        const bannerDiv = document.querySelector('div[role="banner"]');
        if (bannerDiv) {
            bannerDiv.remove();
        }
    }
})();
