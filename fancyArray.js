var names = ["James", "Jill", "Jane", "Jack"];
var bullet = "---->";
var reversed = true;

function printNames(arr){
    if (reversed){
        for(var i = arr.length - 1; i >= 0; i --){
            console.log("",i, bullet, arr[i]);
        }
    }
    else{
        for(var i =0; i < arr.length; i ++){
            console.log("",i, bullet, arr[i]);
        }
}
}

printNames(names);