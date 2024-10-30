import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
    selector: 'app-body',
    standalone: true,
    imports: [
        MatButtonModule,
        MatCard,
        MatCardContent
    ],
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss'
})
export class BodyComponent {

}
