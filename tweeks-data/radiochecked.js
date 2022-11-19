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