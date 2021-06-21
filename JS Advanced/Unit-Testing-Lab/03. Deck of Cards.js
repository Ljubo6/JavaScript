function solve(array){
    let result = [];
    const utf = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (const card of array) {
        let face = '';
        let suit = '';
        if (card.length < 3) {
            [face,suit] = card.split('');
        }else{
            face = '10';
            suit = card[2];
        }
        if (validFaces.includes(face) === false || Object.keys(utf).includes(suit) === false) {
            console.log(`Invalid card: ${card}`);
        }else{
            result.push(createCard(face,suit));
        }
    }
    function createCard(face,suit){
        const card = `${face.toUpperCase()}${utf[suit.toUpperCase()]}`;
        return card;
    }
    return result.join(' ')
}
console.log(solve(['AS', '10D', 'KH', '2C']));