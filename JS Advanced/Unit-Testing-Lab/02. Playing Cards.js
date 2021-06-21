function solve(face,suit){
    const utf = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (validFaces.includes(face) === false) {
        throw new Error('Error');
    }else if(Object.keys(utf).includes(suit) === false){
        throw new Error('Error');
    }
    return {
        face,
        suit,
        toString(){
            return `${face}${utf[suit]}`;
        }
    }
}
let test = solve('J','D');
test.toString();