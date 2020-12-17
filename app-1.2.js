"use strict";
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.data = date;
};
Post.prototype.edit = function (text) {
    this.text = text;
};
const post1 = new Post("user", "lorem ipsum1", new Date);
console.log(post1);
post1.edit("lorem ipsum2");
console.log(post1);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
};
const attachedPost1 = new AttachedPost("admin", "hello world", new Date());
AttachedPost.prototype.MakeTextHighlighted = function (highlighted) {
    this.highlighted = true;
};
attachedPost1.MakeTextHighlighted();
//attachedPost1.edit("hello Portugal");
console.log(attachedPost1);

//ES-6

class Review {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const review1 = new Review("Alex", "lorem ipsum", new Date());
console.log(review1);
post1.edit("hello world");
console.log(review1);


class AttachedReview extends Review {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    MakeTextHighlighted() {
        this.highlighted = true;
    }
}

const attachedreview1 = new AttachedReview("admin", "lorem2 ipsum2 new", new Date());
console.log(attachedreview1);
attachedreview1.MakeTextHighlighted();
attachedreview1.edit("hello portugal");
console.log(attachedreview1);

       