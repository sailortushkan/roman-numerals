function convertToRoman(num) {
    const cheatsheet = {
        1 : 'I',
        5 : 'V',
        10 : 'X',
        50 : 'L',
        100 : 'C',
        500 : 'D',
        1000 : 'M'
    }

    const romanize = function(current) {
        let romanValue;
        let coef = Math.pow(10, digits);
        digits--;
        console.log(coef);
        console.log(current);

        if (current <= 3) {
            return cheatsheet[coef].repeat(current);
        }
        if (current == 5) {
            return cheatsheet[coef*current];
        }
        if (current < 5) {
            return cheatsheet[coef]+cheatsheet[coef*(+current+1)];
        } 
        if (current < 9) {
            return cheatsheet[coef*5]+cheatsheet[coef].repeat(current-5);
        }
        return cheatsheet[coef]+cheatsheet[coef*10];      
    }
    
    let arabicInput = num.toString().split('');
    let digits = arabicInput.length-1;
    let romanOutput = arabicInput.map(romanize);

    console.log(arabicInput);
    console.log(romanOutput);

    return romanOutput.join('');
}

convertToRoman(3989);
