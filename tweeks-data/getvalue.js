// add and remove class in body based on checked radio button
$(document).ready(function () {
    $('input[type=radio][name=work]').change(function () {
        if (this.value == 'drawingboard') {
            $('body').addClass("drawingboard-active");
            $('body').removeClass("ideas-active");
        }
        else if (this.value == 'ideas') {
            $('body').addClass("ideas-active");
            $('body').removeClass("drawingboard-active");
        }
    });
});

// get the url and hecked the radio button based on the url 
const queryString = window.location.search;
$(document).ready(function () {
    if (queryString == "?type=house") {
        $('input:radio[name="services"]').filter('[value="houses"]').attr('checked', true);
        $('body').addClass("houses-active");
        $('body').removeClass("multiresidential-active");
    }
    else if (queryString == "?type=multiresidence") {
        $('input:radio[name="services"]').filter('[value="multiresidential"]').attr('checked', true);
        $('body').addClass("multiresidential-active");
        $('body').removeClass("houses-active");
    }
});

// get the count/length of any class and id 
let totalSlides1 = $('.collection-item-class').length;

// get the count/length of any class and id and subtract the no from that value

let totalSlides = $('.collection-item-class').length -2;

// show the lenght of the any class variable to any element
$('.total-slidesText-class').text(totalSlides);