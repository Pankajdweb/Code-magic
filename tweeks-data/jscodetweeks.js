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

// get the url and checked the radio button based on the url 
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

//on click get get name from form field and add to another field 

var cfuserName = document.getElementById('cf-name')
var cfshowName = document.getElementById('cf-addname')
var cfshowName2 = document.getElementById('cf-addname2')
  $('#cf-first-btn').click(function() {   
     cfshowName.innerHTML = cfuserName.value;
     cfshowName2.innerHTML = cfuserName.value;
  });

// add action on webflow form submission
 
Webflow.push(function() {
$('#cf-carrer-form').submit(function() {
    document.getElementById("cf-form-pagination").style.display = "none";
});
});
