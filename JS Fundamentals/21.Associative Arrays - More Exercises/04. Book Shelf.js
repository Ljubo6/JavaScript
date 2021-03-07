function solve(array) {
    let shelfs = {};
    let books = {};
    for (let line of array) {
        if (line.includes("->")) {
            let [id,genre] = line.split(" -> ");
            if (!shelfs.hasOwnProperty(id)) {
                shelfs[id] = genre;
            }
        }else if(line.includes(":")){
            let [bookTitle,arr] = line.split(": ");
            let[bookAuthor,bookGenre] = arr.split(", ");
            for (let key in shelfs) {
                if (shelfs[key] === bookGenre) {
                    if (!books.hasOwnProperty(bookGenre)) {
                        books[bookGenre] = {
                            booksObj: {},
                            booksCount: 0
                        };
                    }
                    
                    books[bookGenre].booksObj[bookTitle] = bookAuthor;
                    books[bookGenre].booksCount++;

                }
            }
        }
    }
    let sorted = Object.entries(shelfs).sort((a,b) => books[b[1]].booksCount - books[a[1]].booksCount);

    sorted.forEach(book => {
        console.log(`${book[0]} ${book[1]}: ${books[book[1]].booksCount}`);
        Object.entries(books[book[1]].booksObj).sort((a,b) => a[0].localeCompare(b[0]))
        .forEach(x => console.log(`--> ${x[0]}: ${x[1]}`));
    });
}
solve(
    [
        '1 -> history',
        '1 -> action',
        'Death in Time: Criss Bell, mystery',
        '2 -> mystery', 
        '3 -> sci-fi',
        'Child of Silver: Bruce Rich, mystery',
        'Hurting Secrets: Dustin Bolt, action',
        'Future of Dawn: Aiden Rose, sci-fi',
        'Lions and Rats: Gabe Roads, history',
        '2 -> romance',
        'Effect of the Void: Shay B, romance',
        'Losing Dreams: Gail Starr, sci-fi',
        'Name of Earth: Jo Bell, sci-fi',
        'Pilots of Stone: Brook Jay, history'
    ]);