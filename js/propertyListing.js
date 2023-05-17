
let ids = [];
let z = 0;
// $( "body" ).on( "click", function( event ) {
//     let target = $(event.target);
//     let check = target.hasClass("cmp");
//     let check1 = target.hasClass("pressed")
     
//     if(!check)
//     return
//     $(".counter").show();
//     if(check1)
//     return;
//     target.addClass("pressed");
//     console.log("meh0 "+ids)
//     $(".number").text(ids.length)
//   });

  $(".close-button").click(function(){
    $(".counter").hide();
    ids = [];
    z=0;
    console.log(ids);
    $(".rows").remove();
  });

  $(".clearBtn").click(function(){
    ids = [];
    z=0;
    $(".rows").remove();
    $(".counter").hide();
  });
    
  


  
  
$(".cmp").click(function(){
  let pId = $(this).data("id");
  console.log("Current ids: " + ids);
  if(ids.includes(pId)){
    console.log(pId);
    return;
  }
  
  ids.push(pId);
  console.log("pushed ids: " + ids);
  $(".counter").show();
  $(".number").text(ids.length)
});


$(".counter-number").click(function(){
  console.log("pressed counter");
  for(var i = z; i < ids.length; i++){
    var table = '<tr class="rows">';
    let index = ids[i];
    table+="<td><button type='button' class='btn btn-danger removeBtn' data-num="+i+">Remove</button></td>";
    table+="<td><span>"+product_data[index].condtion+"</span></td>";
    table+="<td><span><img class='img-fluid object-fit-contain'src="+product_data[index].image+"></span></td>";
    table+="<td><span>"+product_data[index].category+"</span></td>";
    table+="<td><span>"+product_data[index].address+"</span></td>";
    table+="<td><span>"+product_data[index].floor+"</span></td>";
    table+="<td><span>"+product_data[index].lot+"</span></td>";
    table+="<td><span>"+product_data[index].bedroom+"</span></td>";
    table+="<td><span>"+product_data[index].bathroom+"</span></td>";
    table+="<td><span>"+product_data[index].garage+"</span></td>";
    table+="<td><span>"+product_data[index].price+"</span></td>";
    table+="</tr>"

    $(".row_info").append(table);
    
  }
  z = i;
});

$( "tbody" ).on( "click", ".removeBtn", function() {
  console.log("Current ids: " + ids);
  let number = $(this).data("num");
  let index = ids.indexOf(number);
  let x = ids.splice(index, 1);
  $(this).closest("tr").remove();
  console.log("removed " + x);
  console.log("Current ids when something removed "+ids);
  z--;
  $(".number").text(ids.length)
  if(ids.length == 0){
    $(".counter").hide();
  }
});