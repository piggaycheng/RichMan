$(document).ready(function(){
    for(var i=0; i<10; i++){

        $("#gameMap").append("<tr id = 'row" + i + "'></tr>");

        for(var j=0; j<10; j++){
            if(i == 0 || i == 9 || j == 0 || j == 9){           //只有table的四邊需要用到
                $("#row"+i).append("<td id = 'cell" + i + "-" + j + "' data-border=true data-index></td>");
                toOneDimension(i, j);
            } else {
                $("#row"+i).append("<td id = 'cell" + i + "-" + j + "'></td>");
            }
        }
    }
});

function toOneDimension(x, y){                  //轉為一維
    if(y == 0){
        $("#cell" + x + "-" + y).data("index", x);
    } else if(x == 9){
        $("#cell" + x + "-" + y).data("index", 9 + y);
    } else if(y == 9){
        $("#cell" + x + "-" + y).data("index", 27 - x);
    } else if(x == 0){
        $("#cell" + x + "-" + y).data("index", 36 - y);
    }
}