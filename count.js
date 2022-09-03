function totalValue(){
    let total = 0;
    total =+ pairs();
}

function pairs(){
    let value = 0;

    for(var firstCard = 0; firstcard < cards.size; firstCard++){

        let combinations = 1;

        for(var checkCombinations = 1; checkCombinations < cards.size; checkCombinations++){

            //Every time the combination matches the first card it adds to a counter
            if (cards[firstcard] == cards[checkCombinations]){
                combinations++;
            }
            //This may allow for there being three of a kind and then the three being counted nad the two being counted as well

        }  
        
        if (combinations == 2){
            value+=2;
        }
        else if(combinations == 3){
            value+=6;
        }
        else if(combinations == 4){
            value+=12;
        }
    }

    return value;
}