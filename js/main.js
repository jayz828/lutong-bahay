/**
 * Created by jasonnatividad on 3/23/17.
 */


(function Main(){





    // Mobile Menu event listener

    var menuHamburger = document.getElementById("menu-hamburger");


    menuHamburger.addEventListener("click", function() {

        var mobileMenu = document.getElementById("mobile-menu");

        mobileMenu.style.display = "inline";

    });

    var menuClose = document.getElementById("menu-close");

    menuClose.addEventListener("click", function() {
        var mobileMenu = document.getElementById("mobile-menu");

        mobileMenu.style.display ="none";
    });


    //var test = document.getElementsByClassName("menu-icon");
    //
    //console.log(test);
    ////alert(windowWidth);
    //
    //
    //window.onresize = function(){
    //    var windowWidth = window.innerWidth;
    //
    //    var icons = [];
    //
    //
    //    if (windowWidth < 500) {
    //
    //
    //
    //        icons = document.getElementsByClassName("menu-icon");
    //        //icons[1].remove("fa-2x");
    //
    //        console.log(icons);
    //
    //        for (var i = 0; i < icons.length; i++) {
    //
    //            //console.log(i);
    //            test[i].remove("fa-2x");
    //        }
    //
    //    }
    //}


})();