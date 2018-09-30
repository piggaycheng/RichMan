$(document).ready(function(){
    for(var i=0; i<10; i++){                //畫四邊border

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

    mapArray.sort(function(a, b){               //用data-index屬性去排序這個一維陣列
        var indexA = a.data("index");
        var indexB = b.data("index");
        if(indexA < indexB){
            return -1;
        }
        if(indexA > indexB){
            return 1;
        }
        return 0;
    });

    for(var i=0; i<mapArray.length; i++){
        if(i == 0){
            mapArray[i].append("<div>→</div><div class='headIcon headIcon1'></div><div class='headIcon headIcon2'></div>");
        } else{
            mapArray[i].append("<div class='levelArea'></div><div class='headIcon headIcon1'></div><div class='headIcon headIcon2'></div>");
        }
    }

    $(".levelArea").append("<img><img><img>");
    $(".headIcon1").append("<img class='c1'><img class='c2'>");
    $(".headIcon2").append("<img class='c3'><img class='c4'>");
});

var mapArray = [];

function toOneDimension(x, y){                  //轉為一維，把有用的cell都丟進一個一維陣列
    if(y == 0){
        $("#cell" + x + "-" + y).data("index", x);
        mapArray.push($("#cell" + x + "-" + y));
    } else if(x == 9){
        $("#cell" + x + "-" + y).data("index", 9 + y);
        mapArray.push($("#cell" + x + "-" + y));
    } else if(y == 9){
        $("#cell" + x + "-" + y).data("index", 27 - x);
        mapArray.push($("#cell" + x + "-" + y));
    } else if(x == 0){
        $("#cell" + x + "-" + y).data("index", 36 - y);
        mapArray.push($("#cell" + x + "-" + y));
    }
}