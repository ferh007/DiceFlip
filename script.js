const date = new Date();

const dateLocation = document.getElementById('day')
const dice1Icon = document.getElementById('dice1');
const dice2Icon = document.getElementById('dice2');
const diceFlip = document.getElementById('btn');
const result = document.querySelector('.message');

dice2Icon.insertAdjacentElement('afterend', diceFlip);
dice1Icon.insertAdjacentElement('afterend', diceFlip);
diceFlip.addEventListener('click', flipDiceFunction);


let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

let currentDate = `${day}-${month}-${year}`;
console.log(currentDate);

dateLocation.innerHTML = "<p class='day' id='day'>" + day + "/" + month + "/" + year + " at " + hours + ":" + minutes + "</p></div>";

function flipDiceFunction(){
    const randomVal = Math.random();
    const randomVal2 = Math.random();

    if(randomVal < 0.15){
        diceFace = 1;
    }
    else if(randomVal > 0.15 && randomVal < 0.30){
        diceFace = 2;
    }
    else if(randomVal > 0.30 && randomVal < 0.45){
        diceFace = 3;
    }
    else if(randomVal > 0.45 && randomVal < 0.60){
        diceFace = 4;
    }
    else if(randomVal > 0.60 && randomVal < 0.75){
        diceFace = 5;
    }
    else{
        diceFace = 6;
    }

    if(randomVal2 < 0.15){
        diceFace2 = 1;
    }
    else if(randomVal2 > 0.15 && randomVal2 < 0.30){
        diceFace2 = 2;
    }
    else if(randomVal2 > 0.30 && randomVal2 < 0.45){
        diceFace2 = 3;
    }
    else if(randomVal2 > 0.45 && randomVal2 < 0.60){
        diceFace2 = 4;
    }
    else if(randomVal2 > 0.60 && randomVal2 < 0.75){
        diceFace2 = 5;
    }
    else{
        diceFace2 = 6;
    }

    if(diceFace === 1){
        imageUrl = 'dice-1.svg';
    }
    else if(diceFace === 2){
        imageUrl = 'dice-2.svg';
    }
    else if(diceFace === 3){
        imageUrl = 'dice-3.svg';
    }
    else if(diceFace === 4){
        imageUrl = 'dice-4.svg';
    }
    else if(diceFace === 5){
        imageUrl = 'dice-5.svg';
    }
    else{
        imageUrl = 'dice-6.svg';
    }

    if(diceFace2 === 1){
        imageUrl2 = 'dice-1.svg';
    }
    else if(diceFace2 === 2){
        imageUrl2 = 'dice-2.svg';
    }
    else if(diceFace2 === 3){
        imageUrl2 = 'dice-3.svg';
    }
    else if(diceFace2 === 4){
        imageUrl2 = 'dice-4.svg';
    }
    else if(diceFace2 === 5){
        imageUrl2 = 'dice-5.svg';
    }
    else{
        imageUrl2 = 'dice-6.svg';
    }
    typeof Number (diceFace), typeof Number (diceFace2);

    total = diceFace + diceFace2;

    if(total > 8){
        winMessage = "You win: Try again!"
    }
    else if(total < 8){
        winMessage = "You didn't win: Try Again !"
    }
    console.log(randomVal);
    console.log(randomVal2);

    dice1Icon.innerHTML = "<img src=" + imageUrl + " alt='dice1' ><p class='dice-label'>Dice " + diceFace + "</p>"
    dice2Icon.innerHTML = "<img src=" + imageUrl2 + " alt='dice1' ><p class='dice-label'>Dice " + diceFace2 + "</p>"

    result.innerHTML = "<div class='message'> Total:" + total + "<span id='total'></span><br>more than 8: <span id='more-than-10'>Win</span><br>less than 8: <span id='less-than-10'>Lose</span><br><br><h3>" + winMessage +"</h1></div>"
}
