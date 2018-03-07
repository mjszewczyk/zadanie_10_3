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
        setInterval(changeSlide, 3000);
    });