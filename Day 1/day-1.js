/* first challenge*/
var str="";
        for(var i=1; i<=10; i=i+1){
            str+="*";
            console.log(str);
        }

/* second Challenge*/
var str = 0;

for (var i = 10; i > 0; i--) {
    str++;
    var result = "";
    for (var j = 0; j < i; j++) {
        result += " ";
    }
    for (var k = str; k > 0; k--) {
        result += "*";
    }
    console.log(result);
}
/* third challeneg*/
var str = 1;
for (var i = 12; i > 0; i--) {
    str = str + 2;
    var result = "";
    if (i > 2) {


        for (var j = 0; j < i; j++) {
            result += " ";
        }
        for (var k = str - 2; k > 0; k--) {
            result += "*";
        }

        console.log(result);
    }
    else {
        for (var j = 11; j > 0; j--) {
            result += " ";
        }
        for (var k = 5; k > 2; k--) {
            result += "*";
        }
        console.log(result);

    }

}