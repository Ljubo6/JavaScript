function solution(input) {
    if (input === 'upvote') {
        this.upvotes += 1;
    }

    if (input === 'downvote') {
        this.downvotes += 1;
    }

    let result = [];
    if (input === 'score') {

        let upvote = this.upvotes;
        let downvote = this.downvotes;
        let diff = upvote - downvote;
        if (upvote + downvote > 50) {
            let toAdd = 0;
            if (diff > 0) {
                toAdd = Math.ceil(upvote * 0.25);
            } else {
                toAdd = Math.ceil(downvote * 0.25);
            }

            let newUpvote = upvote + toAdd;
            let newDownvote = downvote + toAdd;

            result.push(newUpvote);
            result.push(newDownvote);
            result.push(newUpvote - newDownvote);
        } else {
            result.push(upvote);
            result.push(downvote);
            result.push(diff);
        }

        let rating = 'new';
        if (upvote * 100 / (upvote + downvote) > 66 && upvote + downvote >= 10) {
            rating = 'hot'
        } else if (upvote * 100 / (upvote + downvote) <= 66 && diff >= 0 && (upvote > 100 || downvote > 100)) {
            rating = 'controversial';
        } else if (diff < 0 && upvote + downvote >= 10) {
            rating = 'unpopular';
        } else if (upvote + downvote < 10) {
            rating = 'new';
        }

        result.push(rating);
    }

    return result;
}

let post = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 133,
    downvotes: 68
};

let score = solution.call(post, 'score');