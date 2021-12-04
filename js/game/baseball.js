const $input =document.querySelector(".form input");
const $form = document.querySelector(".form");
const $logs = document.querySelector(".logs");

const numbers = [];
for(let n = 1; n<=9; n += 1){
    numbers.push(n);
}

const answer = [];
for(let n = 1; n <= 4; n += 1){
    const index = Math.floor(Math.random() *numbers.length)
    answer.push(numbers[index]);
    numbers.splice(index,1);
}
console.log(`정답 ${answer}`)
function defeated(){
    const message = document.createTextNode(`
    패배 정답은 ${answer.join("")}`);
    $logs.appendChild(message);}

const trise = []
function chackInput(input){
    if(input.length !== 4){
        return alert("4자리 숫자를 입력해주세요");
    }
    if(new Set(input).size !== 4){
        return alert("중복되지 않게 입력바랍니다.");
    }
    if(trise.includes(input)){
        return alert("이미 시도한 값입니다.");
    }
    return true;
}
let out = 0;
$form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const value = $input.value;
    $input.value = ""
    const valid = chackInput(value);
    console.log(value);
    if(!valid){
        return;
    }
    if(answer.join("") === value){
        $logs.textContent = "홈런!";
        return
    }
    if (trise.length >= 9){
        defeated()
        return
    }
    let strike = 0;
    let ball = 0;
    for(let i =0; i< answer.length; i++){
        const index = value.indexOf(answer[i]);
        console.log(index)
        if(index > -1){
            if(index === i){
                strike += 1;
            }else{
                ball +=1;
            }
        }
    }
    if(strike === 0 && ball === 0){
        out++;
        $logs.append(`${value}: ${out}아웃`,document.createElement("br"));
    }else{
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement("br"));
    }
    if(out === 3){
        defeated()
        return;
    }
    trise.push(value);
})