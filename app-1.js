"use strict";
/*const product = {
    author: "Admin",
    text: "lorem ipsum",
    show: function () {
        alert(this.author + " say: " + this.text);
    },
};
console.log(product.author);
console.log(product.text);
product.show();

function Post(author, text) {
    this.author = author;
    this.text = text;
}
const post1 = new Post("Admin1", "lorem ipsum1");
console.log(post1.author);
console.log(post1.text);*/

//Задание 1.1
function Product(name, price) {
    this.name = name;
    this.price = price;

}
const products = [
    new Product("tovar1", 300),
    new Product("tovar2", 500),
    new Product("tovar3", 600)
];
Product.prototype.MakeDiscount = function (discount) {
    this.price = this.price - (this.price * discount / 100);
}
for (let Product of products) {
    Product.MakeDiscount(25);
}
console.log(products);

// ES-6
class Productt {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    MakePercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}

const productt1 = new Productt("tovar1", 230);
productt1.MakePercentDiscount(25);

console.log(productt1);