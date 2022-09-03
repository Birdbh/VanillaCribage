const cards = [card];

class card {
    constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    }
}


function createCard(){
    const object = new card(
        document.getElementById("rank").value, document.getElementById("suit").value
        );
    
    cards.add(object);
}

