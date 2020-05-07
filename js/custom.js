var bgn = 1;

function nextBG() {
    $(".centerbg").css("background-image", "url(" + mashiro_option.cover_api + "?" + bgn + ")");
    bgn = bgn + 1;
}

function preBG() {
    bgn = bgn - 1;
    $(".centerbg").css("background-image", "url(" + mashiro_option.cover_api + "?" + bgn + ")");
}

$(document).ready(function () {
    $("#bg-next").click(function () {
        nextBG();
    });
    $("#bg-pre").click(function () {
        preBG();
    });
});