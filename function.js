function pick(val)
{
 document.getElementById("input-box").value +=val;
};

function solve(){
    var x = document.getElementById("input-box").value;
    var y = eval(x);
    document.getElementById("input-box").value=y;
};


function allclear(){
    document.getElementById("input-box").value=" ";
}
