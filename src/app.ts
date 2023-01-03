// classes
class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return(
      `${this.client} owes £${this.amount} for ${this.details}`
    );
  }
}

const inv1 = new Invoice('mario', 'work on the mario website', 250);
const inv2 = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#type') as HTMLInputElement;
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