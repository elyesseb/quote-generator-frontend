import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentQuote?: Quote;


  constructor(private quoteService : QuoteService) { }

  ngOnInit(): void {
    this.retrieveQuote();
  }

  retrieveQuote(): void {
    this.quoteService.getRandomQuote()
      .subscribe(
        (data:any) => {
          this.currentQuote = data[0];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
