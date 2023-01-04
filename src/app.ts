// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Jay',
  age: 21,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return(amount);
  }
};

// let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log('Hello', person.name);
}

greetPerson(me);

console.log(me);

import { Invoice } from "./classes/Invoice.js";

const inv1 = new Invoice('mario', 'work on the mario website', 250);
const inv2 = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  );
});