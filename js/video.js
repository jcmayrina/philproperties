$(".vid-con").click(function(){
  let link = $(this).data("link");
  $(".yt-video").attr("src", link);

});

$(".close").click(function(){
    $(".yt-video").removeAttr("src");
});

$(document).mouseup(function(e) 
{
    var container = $("myModal");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".yt-video").removeAttr("src");
    }
});


