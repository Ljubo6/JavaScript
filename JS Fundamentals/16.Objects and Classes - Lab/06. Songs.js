function solve(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }
    let songs = [];
    let n = array.shift();
    let filter = array.pop();

    for (let song of array) {
        let [typeList,name,time] = song.split("_");
        song = new Song(typeList,name,time);
        songs.push(song);
    }
    if(filter === "all"){
        songs.forEach(x => console.log(x.name));
    }else{
        let filtered = songs.filter(x => x.typeList === filter);
        filtered.forEach(x => console.log(x.name));
    }

}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);