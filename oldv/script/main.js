function classToggle() {
    const navs = document.querySelectorAll('.navbar__items')
    navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
}

document.querySelector('.navbar__link-toggle')
    .addEventListener('click', classToggle);

$(document).ready(function () {
    $.getJSON('people.json', function (data) {
        const json = data;
        console.log(json)

        var key = 0;
        var mhtml = '';


        mhtml += '<div class="header__title">';
        mhtml += '<h1>' + json.person[0].firstname + '</h1>';
        mhtml += '<h1>' + json.person[0].surname + '</h1>';
        mhtml += '<h5>' + json.person[0].profession + '</h1>';
        mhtml += '</div>';


        var $btn = $('<button class="header__button">VIEW PROFILE</button><div class="header__arrow"><i class="fas fa-play"></i></div>');
        var $div = $('<div class="header__slider" style="background:url(' + json.person[0].picture + ');background-size:contain;background-repeat:no-repeat;">').append($(mhtml));
        var $vert = $('<div class="haeder__line"><h3 class="header__number">' + json.person[0].index + '</h3></div><hr>');
        $('.header__center').append($div);
        $('.header__horizontal').append($vert);
        $('.header__prev').append($btn);
        $('li.header__navlink').on("click", function () {
            key = $(this).val()
            $(this).addClass("active");
            $(this > 'hr').addClass("active");


            // debugger

            console.log(key);
            for (var i = 0; i < json.person.length; i++) {
                if (json.person[i].index == key) {


                    var $btnnew = $('<button class="header__button">VIEW PROFILE</button><div class="header__arrow"><i class="fas fa-play"></i></div>');
                    var $divnew = $('<div class="header__slider" style="background:url(' + json.person[i].picture + ');background-size:contain; background-repeat:no-repeat">').html($('<div class="header__title"><h1>' + json.person[i].firstname + '</h1><h1>' + json.person[i].surname + '</h1><h5>' + json.person[i].profession + '</h5></div>'));
                    var $vertnew = $('<div class="haeder__line"><h3 class="header__number">' + json.person[i].index + '</h3></div><hr>');
                    $('.header__center').html($divnew);
                    $('.header__horizontal').html($vertnew);
                    $('.header__prev').html($btnnew);


                }

            }

            $(this).siblings('li.active').removeClass("active");
            $(this > 'hr').sibilings('hr.active').removeClass("active");


        });
    })

    /* animated menu */

    $(window).on('load resize', function () {
        var $thisnav = $('.current-menu-item').offset().left;

        $('.menu-item').hover(function () {
            var $left = $(this).offset().left - $thisnav;
            var $width = $(this).outerWidth();
            $('.menu-item--first').css({ 'left': $left, 'width': $width });
        }, function () {
            var $initwidth = $('.current-menu-item').width();
            $('.menu-item--first').css({ 'left': '0', 'width': $initwidth });
        });
    });


    /*  gallery */

    $.getJSON('data.json', function (data) {
        const gallery = data;
        console.log(gallery)

        var i, item = "";
        for (i in gallery.person) {
            item += '<div class="gallery__item">';
            item += '<img src="' + gallery.person[i].picture + '" alt="' + gallery.person[i].name + '" class="gallery__image">';
            item += '<div class="gallery__overlay">';
            item += '<div class="gallery__arrow"><i class="fas fa-arrow-circle-up"></i></div>'
            item += '<div class="gallery__text"> <h3>' + gallery.person[i].name + '</h3> <h5>' + gallery.person[i].profession + '</h5></div>';
            item += '</div>'
            item += '</div>';
        }

        var gallery_btn = '<div class="gallery__button"><button>Explore more</button></div >';

        $('.gallery').html(item);
        $('.gallery').append(gallery_btn);
    });

    /* stories section */

    $.getJSON('stories.json', function (data) {
        const stories = data;
        console.log(stories)

        var headerLeft = "";

        // for (i in stories.article) {
        headerLeft += '<div class="stories__img">';
        headerLeft += '<img src="' + stories.article[0].picture + '" alt="' + stories.article[0].author + '">'
        headerLeft += '</div>';
        headerLeft += '<div class="stories__title">';
        headerLeft += '<h3>' + stories.article[0].title + '</h3>' + '<h5>' + stories.article[0].date + '</h5></div>';
        // }

        $('.stories_header-left').html(headerLeft);

        var headerCenter = "";

        // for (i in stories.article) {
        headerCenter += '<div class="stories__img">';
        headerCenter += '<img src="' + stories.article[1].picture + '" alt="' + stories.article[1].author + '">'
        headerCenter += '</div>';
        headerCenter += '<div class="stories__title">';
        headerCenter += '<h3>' + stories.article[1].title + '</h3>' + '<h5>' + stories.article[1].date + '</h5></div>';
        // }

        $('.stories_header-center').html(headerCenter);


        var headerRight = "";

        // for (i in stories.article) {
        headerRight += '<div class="stories__img">';
        headerRight += '<img src="' + stories.article[2].picture + '" alt="' + stories.article[2].author + '">'
        headerRight += '</div>';
        headerRight += '<div class="stories__title">';
        headerRight += '<h3>' + stories.article[2].title + '</h3>' + '<h5>' + stories.article[2].date + '</h5></div>';
        // }

        $('.stories_header-right').html(headerRight);
    });


});

