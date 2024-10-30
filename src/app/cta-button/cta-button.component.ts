import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-cta-button',
    standalone: true,
    imports: [
        MatButtonModule
    ],
    templateUrl: './cta-button.component.html',
    styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {

}
