import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
})
export class HeroComponent {

}
