import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';
import { QuoteService } from 'src/app/services/quote.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss'],
})
export class AddQuoteComponent implements OnInit {
  quote: Quote = {
    text: ''
  };
  submitted = false;
  username = this.token.getUser();

  constructor(private token: TokenStorageService, private quoteService: QuoteService) {}

  ngOnInit(): void {}

  saveQuote(): void {
    const data = {
      text: this.quote.text
    };

    this.quoteService.create(this.username.username, data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newQuote(): void {
    this.submitted = false;
    this.quote = {
      text: ''
    };
  }
}
