window.onkeydown = directions;
window.onload=function(){
    var la = document.getElementById("leftArrow");
    if (la.addEventListener) {
        la.addEventListener("click", directions, false);
    } else {
        el.attachEvent('onclick', directions);
    }  
    var ra = document.getElementById("rightArrow");
    if (ra.addEventListener) {
        ra.addEventListener("click", directions, false);
    } else {
        ra.attachEvent('onclick', directions);
    } 
};

function directions(e) {
    e = e || window.event;

    //left
    if (e.keyCode == '37' || e.target.parentElement.id  == 'leftArrow') {
    	var loc = location.pathname;

        if (loc.match('/index.html'))
        {
        	window.location = loc.replace('/index.html' ,'/resume.html');
        } 
        else if (loc.match('/skills.html'))
        {
        	window.location = loc.replace('/skills.html', '/index.html');
        } 
        else if (loc.match('/projects.html'))
        {
        	window.location = loc.replace('/projects.html' ,'/skills.html');
        } 
        else if (loc.match('/resume.html'))
        {
        	window.location = loc.replace('/resume.html', '/projects.html');
        }
    }
    //right
    else if (e.keyCode == '39' || e.target.parentElement.id == 'rightArrow') {
    	var loc = location.pathname;

        if (loc.match('/index.html'))
        {
        	window.location = loc.replace('/index.html' ,'/skills.html');
        } 
        else if (loc.match('/skills.html'))
        {
        	window.location = loc.replace('/skills.html', '/projects.html');
        } 
        else if (loc.match('/projects.html'))
        {
        	window.location = loc.replace('/projects.html', '/resume.html');
        } 
        else if (loc.match('/resume.html'))
        {
        	window.location = loc.replace('/resume.html', '/index.html');
        }
    }
}

if (window.jQuery)
{
    $(document).ready(function() {

        $('.accordion-toggle').hover(
            function () {
                var $element = $(this);
                var $indicator = $element.children(":first");

                var $minuses  =$(".minus");
                $minuses.removeClass("minus");
                $minuses.addClass("plus");
                $minuses.text("+");

                var $body = $($(this).attr('href'));
                if (".in")
                {
                    $indicator.removeClass('plus');
                    $indicator.addClass('minus');
                    $indicator.text("-");
                }

                if (!$body.hasClass("in"))
                {
                    $(this).click();
                }
            }
        );
    });
}