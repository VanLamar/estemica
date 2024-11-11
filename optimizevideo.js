document.addEventListener("DOMContentLoaded", function () {
    const iframes = document.querySelectorAll('.lazy');  
    
    iframes.forEach(function(iframe) {
        const videoId = iframe.getAttribute('data-video-id');
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    iframe.src = `https://www.youtube.com/embed/${videoId}`;
                    observer.disconnect();  
                }
            });
        });

        observer.observe(iframe); 
    });
});
