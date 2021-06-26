class Story{
    constructor(title,creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes(){
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        };
        let username = this._likes[0];
        if (this._likes.length === 1) {
            return `${username} likes this story!`;
        };
        return `${username} and ${this._likes.length - 1} others like this story!`
    }
    like (username){
        if(this._likes.includes(username)){
            throw new Error( `You can't like the same story twice!`);
        }
        if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike (username){
        if(!this._likes.includes(username)){
            throw new Error(`You can't dislike this story!`);
        }

        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }
    comment (username, content, id){
        if(id === undefined || !this._comments.some(x => x.Id === id)){
            let newComment = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies:[]
            }
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`
        }
        let commentToReplyTo = this._comments.find(x => x.Id === id);
        let replyNextId = commentToReplyTo.Replies.length + 1;
        let replyId = `${commentToReplyTo.Id}.${replyNextId}`;
        let reply = {
            Id: replyId,
            Username: username,
            Content: content
        }
        commentToReplyTo.Replies.push(reply);

        return 'You replied successfully';
    }
    toString(sortingType){
        const sortVersion = {
            asc: (a,b) => a.Id - b.Id,
            desc: (a,b) => b.Id - a.Id,
            username: (a,b) => a.Username.localeCompare(b.Username)
        }
        this._comments.sort(sortVersion[sortingType]);
        this._comments.forEach(x => x.Replies.sort(sortVersion[sortingType]));


        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);

        for (let comment of this._comments) {
            result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
            if(comment.Replies.length > 0){

                for (const reply of comment.Replies) {
                    result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`);
                }               
            }            
        }
        // this._comments.forEach(element => {
        //     result.push(`-- ${element.Id}. ${element.Username}: ${element.Content}`)
        //     let replies = element.Replies;
        //     if (element.Replies.length > 0) {
                
        //         replies.forEach(r => result.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`))
        //     }
        // });
        return result.join('\n');
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
