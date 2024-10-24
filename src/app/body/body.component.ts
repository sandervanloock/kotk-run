import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-body',
    standalone: true,
    imports: [
        MatButtonModule
    ],
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss'
})
export class BodyComponent {

}
