$(document).ready(function(){
    const navbar = $('.navbar');
    const menuIcon = $('#menu-icon');
    const contactForm = $('.contact-form');
    const formSection = $('.form-section');

    contactForm.css('transform', 'scale(0)');
    formSection.css('visibility', 'hidden');
    formSection.fadeOut(1);
    formSection.css('visibility', 'visible');

    menuIcon.click(function(){
        console.log('click');
        menuIcon.toggleClass('bx-x');
        navbar.toggleClass('active');
    })
    
    contactForm.click(function (event) {
        event.stopPropagation(); // Prevent the event from bubbling up to the parent
    });

    $('#chitter').hover(
        function(){$('#chitter-chat').toggleClass('bx-tada');}
    );

    $('.contact-btn').hover(
        function(){$('#contact-chat').toggleClass('bx-tada')}
    );

    $('#xstream').hover(
        function(){$('#xstream-icon').toggleClass('bx-tada');}
    );

    $('.close-contact').hover(
        function(){$(this).toggleClass('bx-tada')}
    );

    $('.close-contact').click(function(){
        formSection.fadeOut(400, 'linear');
        contactForm.toggleClass('show');
        contactForm.css('transform', 'scale(0)');
    });

    $('.contact-trigger').click(function(){
        formSection.fadeIn(100, 'linear');
        contactForm.toggleClass('show');
        contactForm.css('transform', 'scale(1)');
    }
    );

    $('.form-section').click(function(){
        formSection.fadeOut(400, 'linear');
        contactForm.toggleClass('show');
        contactForm.css('transform', 'scale(0)');
    }
    );
});