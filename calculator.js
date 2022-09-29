'use strict';

var display = document.getElementById('disp');
var allbtn = document.querySelectorAll('button');
var operand1 = 0;
var operand2 = null;
var operator = null;
for(var i=0; i<allbtn.length; i++){
    allbtn[i].addEventListener('click',function(event){
        var value = this.getAttribute('data-value');
        if(value == "+" || value == "-" || value == "*" || value == "/" || value == "%"){
            operand1 = display.innerText;
            operator = value;
            display.innerText = "";
        }
        else if(value == "BSP"){
            var temp = display.innerText;
            var value1="";
            for(var i=0; i<temp.length-1; i++){
                value1 += temp[i];
            }
            display.innerText = value1;
        }
        else if(value == "+/-"){
            var temp = display.innerText;
            var op = "-"
            display.innerText = eval(op + " " + display.innerText);
        }
        else if(value == "="){
            operand2 = display.innerText; 
            display.innerText = eval(operand1 + " " + operator + " " + operand2);
        }
        else if(value == "AC"){
            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerText = "";
        }
        else{
            display.innerText+= value;
        }
    });
}