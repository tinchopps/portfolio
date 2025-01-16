$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        var form = document.getElementById('contact-form');
        
        form.addEventListener('submit', function(event) {
            setTimeout(function() {
                form.reset();
            }, 1000);
        });
    });

    window.addEventListener('scroll', function() {
        const languageSwitcher = document.querySelector('.language-switcher');
        const header = document.querySelector('.header');
        
        // Calcular la opacidad en función del desplazamiento vertical de la página
        let opacityValue = 1 - window.scrollY / header.offsetHeight; // La opacidad disminuirá a medida que haces scroll
        
        // Asegúrate de que la opacidad no sea menor a 0
        if (opacityValue < 0) {
            opacityValue = 0;
        }
        
        // Aplicar la opacidad calculada
        languageSwitcher.style.transition = 'opacity 0.3s ease-out'; // Transición suave
        languageSwitcher.style.opacity = opacityValue; // Cambiar la opacidad
    });
    
    
    


