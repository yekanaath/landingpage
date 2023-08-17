// Using jQuery for hover effect
$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300); // Show the dropdown menu on hover
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300); // Hide the dropdown menu when the mouse leaves
    });
});
