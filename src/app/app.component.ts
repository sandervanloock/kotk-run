import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {ProgressbarComponent} from "./progressbar/progressbar.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {CtaButtonComponent} from "./cta-button/cta-button.component";
import {Meta} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeroComponent, ProgressbarComponent, BodyComponent, FooterComponent, CtaButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

    constructor(private meta: Meta) {
    }

    ngOnInit(): void {
        this.meta.updateTag({property: 'og:image', content: './assets/images/hero.png'});
    }
}
