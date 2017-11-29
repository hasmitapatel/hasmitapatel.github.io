    window.sr = new ScrollReveal();
    sr.reveal('.scrollreveal', { mobile: true, distance: '20px', easing: 'ease-in-out', scale: 0 });

    // Target your .container, .wrapper, .post, etc.
    $(".video-wrapper").fitVids();

         $(document).ready(function() {
            $(".smoothscroll").on('click', function(event) {
                if (this.hash !== "0") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {
                        window.location.hash = hash;
                    });
                }
            });
        });




