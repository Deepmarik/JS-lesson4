"use strict";
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.data = date;
};
Post.prototype.edit = function (text) {
    this.text = text;
};
const post1 = new Post("user", "lorem ipsum1", "10.12");
console.log(post1);
post1.edit("lorem ipsum2");
console.log(post1);
function AttachedPost(){

};