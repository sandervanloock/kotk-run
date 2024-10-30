import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink, NgOptimizedImage, MatCard, MatCardContent],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
})
export class HeroComponent {

}
