export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    ;
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.textContent = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.textContent = item.format();
        li.append(p);
        if (position.match(/start/gi)) {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
    ;
}
