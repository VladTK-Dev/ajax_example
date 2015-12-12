/**
 * Created by IlyaLitvinov on 20.11.15.
 *
 */

$(document).ready(function () {
    var gallery,
        slideShow,
        tabs,
        options;

    gallery = new Gallery({
        root: '.gallery',
        images: [
            'img/1.png',
            'img/2.png',
            'img/3.png',
            'img/4.png'
        ]
    });

    slideShow = new SlideShow({
        root: ".container"
    });
    //tabs = new Tabs('.tabs');
    //options = new Tabs('.options');
    tabs = new Tabs({
        root: '.tabs',
        duration: 500,
        mode: 'fadeIn'
    });

    options = new Tabs({
        root: '.options',
        duration: 1000,
        mode: 'slideDown'
    });



});
