import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-progressbar',
    standalone: true,
    imports: [],
    templateUrl: './progressbar.component.html',
    styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent implements OnInit {
    ngOnInit(): void {
        this.fetchDonationAmount().then();
    }

    parseCurrency(currencyStr: string): number | null {
        const cleanedStr = currencyStr.replace(/[€\s]/g, '');

        // Replace comma with dot for decimal
        const normalizedStr = cleanedStr.replace(',', '.');

        // Parse the string to a float
        const parsedNumber = parseFloat(normalizedStr) * 1000;

        return isNaN(parsedNumber) ? null : parsedNumber;
    }

    updateProgressBar(currencyStr: string) {
        const max = 2750;
        const value = this.parseCurrency(currencyStr);

        // Calculate percentage
        const percentage = value ? Math.min((value / max) * 100, 100) : 0;

        // Update progress bar width
        const progressBar = document.getElementById('progress-bar');
        //progressBar.style.width = `${percentage}%`;

        // Update progress label
        const progressLabel = document.getElementById('progress-label');
        //progressLabel.textContent = `Huidige donaties: ${percentage.toFixed(2)}% - €${value} van €${max}`;
    }

    async fetchDonationAmount() {
        try {
            const kotkUrl = 'https://www.komoptegenkanker.be/de-100km-run/steun-een-team/e6ab5947-7a93-4a05-bced-978892732137';
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
                this.updateProgressBar(currencyStr);
            }
        } catch (error) {
            console.error('Er was een probleem met het ophalen van het donatiebedrag:', error);
            //document.getElementById('donation-amount').textContent = 'Fout bij het ophalen van het donatiebedrag.';
        }
    }


}
