$(function () {
    var carouselList = $("#carousel ul");
    var circles = $(".circ");
    // Resetowanie czasu animacji po kliknięciu strzałki lub kółka
    function resetTimer() {
        clearInterval(myTimer);
        myTimer = setInterval(changeSlide, 3000);
    }
    // Zmiana slajdu w prawo
    function changeSlide() {
        carouselList.animate({
            "marginLeft": -500
        }, 500, moveFirstSlide);
    }
    // Funkcja przepinająca pierwszy slajd na ostatni
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
            marginLeft: 0
        });
        checkCurrentCircle();
    }
    // Zmiana slajdu w lewo
    function changeSlideLeft() {
        carouselList.animate({
            "marginLeft": 0
        }, 500);
        checkCurrentCircle();
    }
    // Zmiana slajdu powoduje zakolorowanie odpowiedniego kółka
    function checkCurrentCircle() {
        var firstImage = $(carouselList.find("li:first").find("img"));
        circles.each(function (index, elem) {
            var sufix = index + 1;
            if (firstImage.attr("class") == ("img" + sufix)) {
                $(elem).addClass("active");
            }
            else {
                $(elem).removeClass("active");
            }
        })
    };
    // Obsługa kliknięcia w kółko
    circles.on("click", function (e) {
        if (!$(e.target).hasClass("active")) {
            circles.each(function (index, elem) {
                if (elem === e.target) {
                    resetTimer();
                    //                    console.log("znalazlem " + index);
                    var sufix = index + 1;
                    //wyszukuję element do wyświetlenia
                    var image = carouselList.find(".img" + sufix);
                    var item = image.parent();
                    //                    console.log(item);
                    var lastItem = carouselList.find("li:last");
                    carouselList.find("li:first");
                    var reversedItems = Array.prototype.reverse.call(item.prevAll());
                    lastItem.after(reversedItems);
                    checkCurrentCircle();
                }
            })
        }
    });
    // Timer (3 sekundowa animacja) 
    var myTimer = setInterval(changeSlide, 3000);
    // przejście slajdu w prawo po kliknięciu w strzałkę
    var rightArrow = $(".arrow-right");
    rightArrow.on("click", function () {
        resetTimer();
        changeSlide();
    });
    // przejście slajdu w lewo
    var leftArrow = $(".arrow-left");
    leftArrow.on("click", function () {
        resetTimer();
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({
            marginLeft: -500
        });
        changeSlideLeft();
    });
});