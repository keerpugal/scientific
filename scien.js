let outscreen = document.getElementById("demo");

function display(num){
    outscreen.value += num;
    console.log(outscreen);
}
function calculate(){ 
try {
    outscreen.value = eval(outscreen.value);
  }
  catch(err) {
    alert("error in the output")
  }
}
function Clear(){
  outscreen.value = "";

}
function  dele(){
    outscreen.value = outscreen.value.slice(0,-1);
}
function  mysin(){
    outscreen.value = Math.sin(outscreen.value);
}
function  mycos(){
    outscreen.value = Math.cos(outscreen.value);
}
function  mytan(){
    outscreen.value = Math.tan(outscreen.value);
}
function  mylog(){
    outscreen.value = Math.log(outscreen.value);
}
function  logging(){
    outscreen.value = Math.log2(outscreen.value);
}
function  square(){
    outscreen.value = Math.sqrt(outscreen.value);
}
function  mydisplay(){
    outscreen.value = Math.pow(outscreen.value,2);
}
function  mydisplayed(){
    outscreen.value = Math.pow(outscreen.value,3);
}

 