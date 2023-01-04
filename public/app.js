"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return (`${this.client} owes £${this.amount} for ${this.details}`);
    }
}
const inv1 = new Invoice('mario', 'work on the mario website', 250);
const inv2 = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
inv1.client = 'yoshi';
inv2.amount = 3;
console.log(inv1, inv2);
console.log(invoices);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
