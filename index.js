// Code your solutions in this file

//const cards = (["Charlie", "Samip", "Ali"], "birthday");

function writeCards(names, event) {
    const thankYouCards = []
    for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);}

return thankYouCards;
}

function countDown(){
    let countUp = 0;
    while (countUp<10){
        console.log(countUp++);
    }
}
