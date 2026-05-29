(function () {
  "use strict";

  const host = window.location.hostname;
  const path = window.location.pathname;
  const messageText = "Franz, I beg you, please don't.";

  const isFacebook = host === "www.facebook.com";
  const isInstagram = host === "www.instagram.com";
  const isReddit = host === "www.reddit.com" || host === "reddit.com";

  if (!isFacebook && !isInstagram && !isReddit) {
    return;
  }

  const showBlockPage = () => {
    const html = document.documentElement;
    html.innerHTML = "";
    Object.assign(html.style, {
      background: "black",
      margin: "0",
      minHeight: "100vh"
    });

    const body = document.createElement("body");
    Object.assign(body.style, {
      margin: "0"
    });

    const messageDiv = document.createElement("div");
    messageDiv.textContent = messageText;
    Object.assign(messageDiv.style, {
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      whiteSpace: "pre-wrap"
    });

    body.appendChild(messageDiv);
    html.appendChild(body);
  };

  if (isFacebook) {
    if (path.startsWith("/messages")) {
      const bannerDiv = document.querySelector('div[role="banner"]');
      if (bannerDiv) {
        bannerDiv.remove();
      }
    } else {
      showBlockPage();
    }
    return;
  }

  if (isInstagram) {
    if (!path.startsWith("/its_khyl/saved/")) {
      showBlockPage();
    }
    return;
  }

  if (isReddit) {
    showBlockPage();
  }
})();
