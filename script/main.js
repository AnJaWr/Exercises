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

});