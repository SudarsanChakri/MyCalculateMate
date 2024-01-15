function clickedNumber(value){
    if(display.value === "Error Calculation"){
        display.value=""
    }
    display.value += value;
}

function clickedOperator(value){
    if(display.value === "Error Calculation"){
        display.value=""
    }
    display.value += value;
}


function calculationPart(){
    var input = display.value;
    try{
        var result = eval(input);
        
        return result;
    }
    catch(error){

        return "Error Calculation";
    }
    
}