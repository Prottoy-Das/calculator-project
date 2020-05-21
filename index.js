var input = $("#inpt");


function insertNumber(number) {
    var existingNumber = input.val();
    input.val(existingNumber + number);
}


function clearResult() {

    input.val(" ");
}


function equal(){
    var result=eval(input.val())
    input.val(result);
}

function deleteNumber(){
    var presentValue = input.val();
    input.val(presentValue.slice(0,-1))
}


