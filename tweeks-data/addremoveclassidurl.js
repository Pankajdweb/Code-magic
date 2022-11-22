// get current url on the page and custom url on any element based on id
var pageUrl = window.location.origin;

$(document).ready(function () {
    document.getElementById("house-project-menu").href = pageUrl + "/projects?type=house";
    document.getElementById("multiresidence-project-menu").href = pageUrl + "/projects?type=multiresidence";
});



// get height of any element and pass to another element

const footerHeight = $(".footer").height();
$('.blank-footer').css("height", footerHeight);

// add removed class based on the active radio button
$(document).ready(function() {
    $('input').click(function() {
        $('input:not(:checked)').parent().removeClass("radio-active");
        $('input:checked').parent().addClass("radio-active");
    });
});