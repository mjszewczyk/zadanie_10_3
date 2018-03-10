    $(function () {
        var carouselList = $("#carousel ul");

        function changeSlide() {
            carouselList.animate({
                'marginLeft': -500
            }, 500, moveFirstSlide);
        }

        function moveFirstSlide() {
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            lastItem.after(firstItem);
            carouselList.css({
                marginLeft: 0
            });
        }

        function changeSlideLeft() {
            carouselList.animate({
                'marginLeft': 0
            }, 500);
        }
        var myTimer = setInterval(changeSlide, 3000);
        var rightArrow = $('.arrow-right');
        rightArrow.click(function () {
            clearInterval(myTimer);
            myTimer = setInterval(changeSlide, 3000);
            changeSlide();
        });
        var leftArrow = $('.arrow-left');
        leftArrow.click(function () {
            clearInterval(myTimer);
            myTimer = setInterval(changeSlide, 3000);
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
            carouselList.css({
                marginLeft: -500
            });
            changeSlideLeft();
        });
    });