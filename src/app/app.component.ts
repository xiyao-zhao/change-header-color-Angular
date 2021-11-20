import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'angular-assignment1';
    colorItem = '';
    headerColor = '';

    colors = ['blue', 'black', 'red', 'green'];

    colorHeader(color: string) {
        this.colorItem = color;
        this.headerColor = color;
    }
}
