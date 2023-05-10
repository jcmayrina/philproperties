


$(".nBtn1").click(function(){
    let inputs = [ ... $(".fg1 input, .fg1 textarea, .fg1 select")];
    const allValid = inputs.every(input => input.reportValidity());

    console.log(allValid);
    if (!allValid) return;
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

