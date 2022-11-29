document.ready(function() {

    window.scroll(function() {
        const scroll = window.scrollTop();
        if (scroll >= 1) {
            '.arrow'.addClass('fade');
        } else{
            '.arrow'.removeClass('fade');
        }
    })
});
