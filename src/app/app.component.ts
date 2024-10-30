import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {ProgressbarComponent} from "./progressbar/progressbar.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {CtaButtonComponent} from "./cta-button/cta-button.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeroComponent, ProgressbarComponent, BodyComponent, FooterComponent, CtaButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = '100km DOL tegen kanker';
}
