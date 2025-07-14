(function() {
    'use strict';

    if (window.location.hostname === "www.facebook.com") {
        if (window.location.pathname.startsWith("/messages")) {
            const bannerDiv = document.querySelector('div[role="banner"]');
            if (bannerDiv) {
                bannerDiv.remove();
            }
        } else {
            document.documentElement.innerHTML = '';
            document.documentElement.style.background = 'black';
            const messageDiv = document.createElement('div');
            messageDiv.textContent = `Franz, I beg you, please don't.`;
            messageDiv.style.color = 'white';
            messageDiv.style.position = 'absolute';
            messageDiv.style.top = '50%';
            messageDiv.style.left = '50%';
            messageDiv.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(messageDiv);
        }
    }
})()    ;
