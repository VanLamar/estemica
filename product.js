
document.addEventListener('scroll', function () {
    if (window.innerWidth > 768) {
        const ul = document.querySelector('aside ul');
        if (!ul) return;  // Stop the script if ul is not found
        
        const packagesSection = document.getElementById('packages');
        if (!packagesSection) return;  // Stop the script if packagesSection is not found
        
        const footer = document.querySelector('footer');
        if (!footer) return;  // Stop the script if footer is not found

        const ulHeight = ul.offsetHeight;
        const packagesTop = packagesSection.getBoundingClientRect().top + window.pageYOffset;
        const aside = document.querySelector('aside');
        if (!aside) return;  // Stop the script if aside is not found

        const asideTop = aside.getBoundingClientRect().top + window.pageYOffset;
        const footerTop = footer.getBoundingClientRect().top + window.pageYOffset;

        if (window.pageYOffset > asideTop - 150) { 
            if (window.pageYOffset < packagesTop) { 
                ul.style.position = 'fixed';
                ul.style.top = '150px'; 
            } else {
                // ul.style.position = 'absolute';
                // ul.style.top = `${packagesTop}px`; 
            }
        } else {
            ul.style.position = 'static';
        }

        const nextSection = packagesSection.nextElementSibling; 
        if (nextSection && (window.pageYOffset > packagesTop + packagesSection.offsetHeight - ulHeight)) {
            ul.style.position = 'fixed';
            ul.style.top = '150px'; 
        }

        if (window.pageYOffset + 150 + ulHeight > footerTop) {
            ul.style.position = 'absolute';
            ul.style.top = `${footerTop - ulHeight}px`;
        }
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const aside = document.querySelector('aside');
    if (!aside) return;  // Stop the script if aside is not found

    let lastScrollTop = 0;
    const scrollThreshold = 300; 

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            aside.classList.add('visible');
        } else {
            if (scrollTop <= 0) {
                aside.classList.remove('visible');
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
});


