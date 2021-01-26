function solve(base, step) {
    let row = 1;
    let size = base;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let gold = 0;
    let totalGold = 0;
    while (size > 2) {
        let area = Math.pow(size, 2);
        let marble = size * 4 - 4;
        let stone = 0;
        let lapis = 0;

        stone = area - marble;
        totalStone += stone * step;
        if (row % 5 === 0) {
            lapis = marble;
            marble = 0;
            totalLapis += lapis * step;
        } else {
            totalMarble += marble * step;
        }
        size -= 2;
        row++;
    }
    if (size === 1) {
        gold = 1;
        totalGold += gold * step;
        
    }else{
        gold = 4;
        totalGold += gold * step;
    }

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor((row) * step)}`);
}
solve(12,
    1
)