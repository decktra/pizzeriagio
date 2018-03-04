jQuery(document).ready(function($){
    //open left menu clicking the left menu icon
    $('.left_menu_icon').on('click', function(event){
        event.preventDefault();
        toggleLeftNav(true);
        $("body").css({'overflow':'hidden'});
    });
    
    //open right menu clicking the right menu icon
    $('.right_menu_icon').on('click', function(event){
        event.preventDefault();
        toggleRightNav(true);
        $("body").css({'overflow':'hidden'});
    });
    
    $('.cd-close-nav, .cd-overlay').on('click', function(event){
        event.preventDefault();
        toggleLeftNav(false);
        toggleRightNav(false);
        $("body").css({'overflow':'auto'});
    });
    //select a new section
    $('.cd-nav li').on('click', function(){

    });

    function toggleLeftNav(bool) {
        $('.left_menu, .cd-overlay').toggleClass('is-visible', bool);
        $('main').toggleClass('scale-down', bool);
    }

    function toggleRightNav(bool) {
        $('.right_menu, .cd-overlay').toggleClass('is-visible', bool);
        $('main').toggleClass('scale-down', bool);
    }

    /*function loadNewContent(newSection) {
        //create a new section element and insert it into the DOM
        var section = $('<section class="cd-section '+newSection+'"></section>').appendTo($('main'));
        //load the new content from the proper html file
        section.load(newSection+'.html .cd-section > *', function(event){
            //add the .cd-selected to the new section element -> it will cover the old one
            section.addClass('cd-selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                //close navigation
                toggleNav(false);
            });
            section.prev('.cd-selected').removeClass('cd-selected');
        });

        $('main').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            //once the navigation is closed, remove the old section from the DOM
            section.prev('.cd-section').remove();
        });

        if( $('.no-csstransitions').length > 0 ) {
            //if browser doesn't support transitions - don't wait but close navigation and remove old item
            toggleNav(false);
            section.prev('.cd-section').remove();
        }
    }*/
});