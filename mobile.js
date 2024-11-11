function toggleMobileMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

document.querySelectorAll('.mobile-menu-items a').forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        toggleMobileMenu();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contentSection = document.querySelector('.content-section');
    const rightColumn = document.querySelector('.right-column');
    
    if (!contentSection || !rightColumn) {
        return; 
    }
    
    const originalOrder = Array.from(rightColumn.children);

    function moveElementsToContent() {
        if (contentSection && rightColumn) {
            const elements = Array.from(rightColumn.children);
            

            elements.forEach(element => {
                contentSection.appendChild(element);
            });


            const order = {
                'video-section': 7,
                'treatment-course': 6,
                'package-and-treatment': 5,
                'recommendation': 4,
                'before-after': 1,
                'session-info-box': 3,
                'description': 2
            };


            Array.from(contentSection.children).forEach(child => {
                const className = child.classList[0];
                if (order[className] !== undefined) {
                    child.style.order = order[className];
                } else {
                    child.style.order = ''; 
                }
            });
        }
    }

    function restoreElementsToRightColumn() {
        if (contentSection && rightColumn) {
            originalOrder.forEach(element => {
                rightColumn.appendChild(element);
                element.style.order = ''; 
            });
        }
    }

    function handleResize() {
        if (window.innerWidth <= 768) {
            moveElementsToContent();
        } else {
            restoreElementsToRightColumn();
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
});
