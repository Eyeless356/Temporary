const $result = document.querySelector(".result");
const $operator = document.querySelector(".operator");

let numOne = "";
let operator = "";
let numTwo = "";


const onClickNumber =(number) =>() =>{
    if(!operator){
        numOne += number
        $result.value += number
        return;
    }
    if(!numTwo){
        $result.value = "";
    }
        numTwo += number
        $result.value += number
}

const onClickOperator =(op) =>{
    return(event) =>{
        if(numOne && (numTwo && operator)){
            switch(operator){
                case "+":
                numOne = parseInt(numOne) + parseInt(numTwo);
                break
                case "-":
                numOne = parseInt(numOne) - parseInt(numTwo);
                break
                case "/":
                numOne = parseInt(numOne) / parseInt(numTwo);
                break
                case "*":
                numOne = parseInt(numOne) * parseInt(numTwo);
                break
                default:
            }
            numTwo = ""
            console.log("numOne && numTwo && operator")
            
        }
        if(numOne){
            operator = op;
            $operator.value = op;
            console.log("numOne && numTwo");
        }else{
            alert("숫자를 먼저 입력해주세요!");
        }
    }
}

document.querySelector('.num-0').addEventListener("click",onClickNumber("0"))
document.querySelector('.num-1').addEventListener("click",onClickNumber("1"))
document.querySelector('.num-2').addEventListener("click",onClickNumber("2"))
document.querySelector('.num-3').addEventListener("click",onClickNumber("3"))
document.querySelector('.num-4').addEventListener("click",onClickNumber("4"))
document.querySelector('.num-5').addEventListener("click",onClickNumber("5"))
document.querySelector('.num-6').addEventListener("click",onClickNumber("6"))
document.querySelector('.num-7').addEventListener("click",onClickNumber("7"))
document.querySelector('.num-8').addEventListener("click",onClickNumber("8"))
document.querySelector('.num-9').addEventListener("click",onClickNumber("9"))
document.querySelector('.plus').addEventListener("click",onClickOperator("+"))
document.querySelector('.minus').addEventListener("click",onClickOperator("-"))
document.querySelector('.divide').addEventListener("click",onClickOperator("/"))
document.querySelector('.multiply').addEventListener("click",onClickOperator("*"))
document.querySelector('.calculate').addEventListener("click",() => {
    if(numTwo){
        if(operator == "+"){
            $result.value = parseInt(numOne) + parseInt(numTwo);
        }
        if(operator == "-"){
            $result.value = parseInt(numOne) - parseInt(numTwo);
        }
        if(operator == "/"){
            $result.value = parseInt(numOne) / parseInt(numTwo);
        }
        if(operator == "*"){
            $result.value = parseInt(numOne) * parseInt(numTwo);
        }
        $operator.value = "";
        numOne = $result.value;
        operator = "";
        numTwo = "";
        console.log("clear")
    }else{
        alert("숫자를 먼저 입력하세요!");
    };
})

document.querySelector('.clear').addEventListener("click",() =>{
    numOne=""
    numTwo=""
    operator=""
    $operator.value=""
    $result.value="";
});