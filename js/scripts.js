/**
 * Created by nikol on 20.03.2016.
 */
$(function () {
    $('.carousel').carousel({
        interval: false
    });
    $('.search').on('click', function () {
       $('.main-menu .navbar-form').slideToggle();
    });
});