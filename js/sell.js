$(".nBtn1").click(function(){
    $(".fg1").hide();
    $(".fg2").show();

});

$(".nBtn2").click(function(){
    $(".fg2").hide();
    $(".fg3").show();
});
$(".pBtn2").click(function(){
    $(".fg2").show();
    $(".fg3").hide();
});
$(".pBtn1").click(function(){
    $(".fg1").show();
    $(".fg2").hide();
});
$(".skipBtn").click(function(){
    $(".fg3").show();
    $(".fg2").hide();
});

