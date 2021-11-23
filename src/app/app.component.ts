import { Component } from '@angular/core';
import { Card } from './card.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'angular-assignment1';
    headerColor = '';
    datalist: Card[] = [
        {
            title: "Moving down the cliffs and rocks toward the sea",
            description: "The first rainfall of the wet season on Australia’s Christmas Island has begun, which means one thing is certain: Millions of bright red crabs are on the move once again to mate and spawn — shutting down roads and 'turning up everywhere,' in the words of a local conservation agency.",
            color: "blue"
        },
        {
            title: "Moving down the cliffs and rocks toward the sea",
            description: "The first rainfall of the wet season on Australia’s Christmas Island has begun, which means one thing is certain: Millions of bright red crabs are on the move once again to mate and spawn — shutting down roads and 'turning up everywhere,' in the words of a local conservation agency.",
            color: "black"
        },
        {
            title: "Moving down the cliffs and rocks toward the sea",
            description: "The first rainfall of the wet season on Australia’s Christmas Island has begun, which means one thing is certain: Millions of bright red crabs are on the move once again to mate and spawn — shutting down roads and 'turning up everywhere,' in the words of a local conservation agency.",
            color: "red"
        },
        {
            title: "Moving down the cliffs and rocks toward the sea",
            description: "The first rainfall of the wet season on Australia’s Christmas Island has begun, which means one thing is certain: Millions of bright red crabs are on the move once again to mate and spawn — shutting down roads and 'turning up everywhere,' in the words of a local conservation agency.",
            color: "green"
        },
    ];

    colorHeader(color: string) {
        this.headerColor = color;
    }
}
