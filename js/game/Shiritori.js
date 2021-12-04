let player = Number(prompt("참가인원을 알려주세요!"));
const $order = document.querySelector(".wordgame-order"); 
const $word =document.querySelector(".wordgame-word");
let word = "";
let newword = "";

const playerCheck = () => {
    console.log("펑션실행됨")
    if (!player) {
        alert("숫자만 입력 가능합니다!");
        player = Number(prompt("참가인원을 알려주세요!"));
        console.log(player);
        playerCheck();
    }}
playerCheck();
console.log(player)

const $button = document.querySelector("button");
const $input = document.querySelector("input");

const onclickBtn = () =>{
    if((word.length == "" && newword.length == 3 && typeof(newword) == 'string') || (word[word.length -1] == newword[0] && newword.length == 3 )){
        word = newword
        console.log("알맞는 단어입력");
        $word.textContent = word;
        const order = parseInt($order.textContent)
        if(order < player){
            $order.innerText = order + 1 
            console.log("참가자 카운트")
        }else{
            $order.innerText = 1
            console.log("참가자카운트 리셋")
        }
    
    
    }else{
        alert("3글자로 입력해주세요!!");
    }
    $input.value = ""
    $input.focus()
}



const oninput = () =>{
    newword = $input.value;
}

$input.addEventListener("input",oninput)
$button.addEventListener("click",onclickBtn);
