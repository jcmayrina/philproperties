let idArray = JSON.parse(sessionStorage.getItem("ids"));
console.log(idArray);
for(var i = 0; i < idArray.length; i++){
    var table = '<tr class="rows">';
    let index = idArray[i];
    table+="<td><button type='button' class='btn btn-danger first removeBtn' data-num="+i+">Remove</button></td>";
    table+="<td><span>"+product_data[index].condtion+"</span></td>";
    table+="<td><span><img class='img-fluid object-fit-contain'src="+product_data[index].image+" width='100'></span></td>";
    table+="<td><span>"+product_data[index].category+"</span></td>";
    table+="<td><span>"+product_data[index].address+"</span></td>";
    table+="<td><span>"+product_data[index].floor+"</span></td>";
    table+="<td><span>"+product_data[index].lot+"</span></td>";
    table+="<td><span>"+product_data[index].bedroom+"</span></td>";
    table+="<td><span>"+product_data[index].bathroom+"</span></td>";
    table+="<td><span>"+product_data[index].garage+"</span></td>";
    table+="<td><span>"+product_data[index].price+"</span></td>";
    table+="<td><span>"+product_data[index].remarks+"</span></td>";
    table+="</tr>"

    $(".row_info").append(table);
    
  }
  $( "tbody" ).on( "click", ".removeBtn", function() {
    console.log("Current idArray: " + idArray);
    let number = $(this).data("num");
    let index = idArray.indexOf(number);
    let x = idArray.splice(index, 1);
    $(this).closest("tr").remove();
    sessionStorage.setItem("ids", JSON.stringify(idArray));
    $(".number").text(idArray.length)
    if(idArray.length == 0){
      $(".counter").hide();
    }
  });
