//alert('Hello');


function randomDicee(){
    number = Math.random() * 6;
    number = Math.floor(number);
    return number;
}

var player1Score = randomDicee();
var player2Score = randomDicee();
function winnerName(){
    if (player1Score>player2Score) {
        document.querySelector('.winner').textContent= 'Player 1 won!!!';
        //document.querySelector('.winner').classList.toggle(visibility);
    }else if (player1Score<player2Score) {
        document.querySelector('.winner').textContent= 'Player 2 won!!!';
        //document.querySelector('.winner').classList.toggle(visibility);
    }else if (player1Score===player2Score) {
        document.querySelector('.winner').textContent= 'Dead heat!!!';
        //document.querySelector('.winner').classList.toggle(visibility);
    }
    // document.querySelector('.winner').textContent= 'Player 1 won!!!';
    console.log(player1Score ,player2Score);
}

// if (randomDicee()===0) {
//     document.querySelector('.img1').setAttribute()
// }
function dicees() {
    document.querySelector('.img1').setAttribute('src','images/dice'+player1Score+'.png');
    document.querySelector('.img2').setAttribute('src','images/dice'+player2Score+'.png');
    console.log('dice'+player1Score+'.png');
    console.log('dice'+player2Score+'.png');
}

function appearance() {
    winnerName();
    dicees();

}