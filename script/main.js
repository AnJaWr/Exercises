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
        headerLeft += '<div class="stories__img"';
        headerLeft += 'style="background:url(' + stories.article[0].picture + ');background-size:cover">';

        headerLeft += '<div class="stories__overlay">';
        headerLeft += '<div class="stories__arrow"><i class="fas fas fa-play"></i></div>';
        headerLeft += '</div>';
        headerLeft += '</div>';
        headerLeft += '<div class="stories__title">';
        headerLeft += '<div class="title"><h3>' + stories.article[0].title + '</h3></div>';
        headerLeft += '<div class="date">' + stories.article[0].date + '</div>';
        // }

        $('.stories_header-left').append(headerLeft);

        var headerCenter = "";
        headerCenter += '<div class="stories__img" ';
        headerCenter += 'style="background:url(' + stories.article[1].picture + ');background-size:cover">';
        headerCenter += '<div class="stories__overlay">';
        headerCenter += '<div class="stories__arrow"><i class="fas fa-play"></i></div>';
        headerCenter += '</div>';
        headerCenter += '</div>';
        headerCenter += '<div class="stories__title">';
        headerCenter += '<div class="title"><h3>' + stories.article[1].title + '</h3></div>';
        headerCenter += '<div class="date">' + stories.article[1].date + '</div>';

        $('.stories_header-center').append(headerCenter);

        var headerRight = "";
        headerRight += '<div class="stories__img" ';
        headerRight += 'style="background:url(' + stories.article[2].picture + ');background-size:cover">';
        headerRight += '<div class="stories__overlay">';
        headerRight += '<div class="stories__arrow"><i class="fas fas fa-play"></i></div>';
        headerRight += '</div>';
        headerRight += '</div>';
        headerRight += '<div class="stories__title">';
        headerRight += '<div class="title"><h3>' + stories.article[2].title + '</h3></div>';
        headerRight += '<div class="date">' + stories.article[2].date + '</div>';

        $('.stories_header-right').append(headerRight);

        var leftUpper = "";
        leftUpper += '<div class="stories__title--upleft">';
        leftUpper += '<i class="fas fa-play"></i>'
        leftUpper += '<h3>' + stories.article[3].title + '</h3>';
        leftUpper += '<h5>' + stories.article[3].date + '</h5>';
        leftUpper += '</div>';
        leftUpper += '<div class="stories__img"';
        leftUpper += 'style="background: url(' + stories.article[3].picture + ')">';
        leftUpper += '</div>';
        $('.stories__left-upper').append(leftUpper);
        $('.stories__img').css({ "background-size": "cover", "background-repeat": "no-repeat" });

        var leftLow = "";

        leftLow += '<div class="stories__img"';
        leftLow += 'style="background:url(' + stories.article[4].picture + ') " alt="' + stories.article[4].author + '">'
        leftLow += '</div>';
        leftLow += '<div class="stories__title">';
        leftLow += '<div class="title"><h3>' + stories.article[4].title + '</h3></div>';
        leftLow += '<div class="date">' + stories.article[4].date + '</div>';

        $('.left').append(leftLow);
        $('.stories__left-lower.left .stories__img').css({
            "background-size": "cover",
            "margin-top": "10px",
            "background-repeat": "no-repeat",
        })

        var rightLow = "";

        rightLow += '<div class="stories__img"';
        rightLow += 'style="background:url(' + stories.article[5].picture + ')">';
        rightLow += '</div>';

        $('.right').append(rightLow);
        $('.stories__img').css({
            "background-size": "cover",
            "background-repeat": "no-repeat"
        })

        var right = "";
        right += '<div class="stories__img">';
        right += '<img src="' + stories.article[6].picture + '" alt="' + stories.article[2].author + '">'
        right += '</div>';
        right += '<div class="stories__title">';

        right += '<div class="title"><h3>' + stories.article[6].title + '</h3></div>';
        right += '<div class="date">' + stories.article[6].date + '</div>';
        right += '</div>';

        $('.stories__right').append(right);

    });


});

