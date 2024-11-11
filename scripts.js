document.getElementById("westmount-location").addEventListener("click", function() {
    window.location.href = "https://www.google.com/maps/dir/45.5049216,-73.56416/4935A+Sherbrooke+Street+West,+Westmount,+%D0%9A%D0%B2%D0%B5%D0%B1%D0%B5%D0%BA+H3Z+1H2,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@45.4901582,-73.6025162,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4cc910a674fc6f9f:0x59060d58eacfdc92!2m2!1d-73.6053079!2d45.4776277!5m1!1e1?entry=ttu";
  });

  document.getElementById("laval-location").addEventListener("click", function() {
    window.location.href = "https://www.google.com/maps/dir/?api=1&destination=2113+Bd+du+Cur%C3%A9-Labelle,+Laval,+QC+H7T+1L4";
  });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        
        const offset = window.innerHeight / 10; 
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


function checkCookieConsent() {
    return localStorage.getItem('cookieConsent') === 'accepted';
}

function setCookieConsent() {
    localStorage.setItem('cookieConsent', 'accepted');
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    document.cookie = `cookieConsent=accepted; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;
}

function showCookiePopup() {
    const popup = document.getElementById('cookiePopup');
    if (!popup) {
        console.error('Cookie popup element not found!');
        return;
    }

    if (!checkCookieConsent()) {
        popup.style.display = 'block';
        popup.classList.add('show');
        console.log('Cookie popup should be visible now');
    } else {
        console.log('Cookie consent already given');
    }
}


function hideCookiePopup() {
    const popup = document.getElementById('cookiePopup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300); 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing cookie popup...');
    
    const popup = document.getElementById('cookiePopup');
    const acceptBtn = document.getElementById('acceptCookieBtn');

    if (!popup) {
        console.error('Cookie popup element not found!');
        return;
    }

    if (!acceptBtn) {
        console.error('Accept button not found!');
        return;
    }

    acceptBtn.addEventListener('click', function() {
        console.log('Accept button clicked');
        setCookieConsent();
        hideCookiePopup();
    });

    setTimeout(showCookiePopup, 1000);
});

        