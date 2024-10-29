import {Component, computed, OnInit, signal} from '@angular/core';

const TEAM_ID = '0265505c-7a10-4dee-a0c9-89fad125a2c8';

@Component({
    selector: 'app-progressbar',
    standalone: true,
    imports: [],
    templateUrl: './progressbar.component.html',
    styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent implements OnInit {

    progress = signal(0);
    percentageProgress = computed(() => Math.min((this.progress() / 2750) * 100, 100));

    ngOnInit(): void {
        this.fetchDonationAmount();
    }

    parseCurrency(currencyStr: string): number | null {
        const cleanedStr = currencyStr.replace(/[€\s]/g, '');

        // Parse the string to a float
        const parsedNumber = parseFloat(cleanedStr.replace(',', '.'));

        return isNaN(parsedNumber) ? null : parsedNumber;
    }

    async fetchDonationAmount() {
        try {
            const kotkUrl = 'https://www.komoptegenkanker.be/de-100km-run/steun-een-team/' + TEAM_ID;
            const url = 'https://corsproxy.io/?' + encodeURIComponent(kotkUrl);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Netwerkresponse was niet ok.');
            }

            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const currencyStr = doc.querySelector('.amount')?.textContent;
            if (currencyStr) {
                const parsed = this.parseCurrency(currencyStr) || 0;
                this.progress.set(parsed);
            }
        } catch (error) {
            console.error('Er was een probleem met het ophalen van het donatiebedrag:', error);
        }
    }


}
