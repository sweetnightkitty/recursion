function fibs(place) {
    let num1 = 0;
    let num2 = 1;
    const fibSequence = [0, 1]
    if(place < 1) return [];
    if(place == 1) {
        fibSequence.pop();
        return fibSequence;
    }

    if(place == 2) return fibSequence;
    
    if(place > 2) {
        for(let i = place; i > 2 ; i--) {
            const total = num1 + num2;
            fibSequence.push(total);
            num1 = num2;
            num2 = total;
        }
        return fibSequence;
    }};
    

function fibsRec(place, num1 = 0, num2 = 1, myArray = [0, 1]) {
    if(place < 1) return [];
    if(place == 1) return myArray.pop();
    if(place == 2) return myArray;
    if(place > 2){
        const total = num1 + num2;
        myArray.push(total);
        num1 = num2;
        num2 = total;
        fibsRec(place - 1, num1, num2, myArray);
    }

};


//Example of the fib sequence
// 0 1 1 2 3 5 8 13 21 34 55 89
// 1 2 3 4 5 6 7  8  9 10 11 12
