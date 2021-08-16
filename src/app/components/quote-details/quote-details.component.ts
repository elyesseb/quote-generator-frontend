import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from 'src/app/models/quote.model';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {

  currentQuote: Quote = {
    text: ''
  };
  message = '';

  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getQuote(this.route.snapshot.params.id);
  }

  getQuote(id: string): void {
    this.quoteService.getById(id)
      .subscribe(
        data => {
          this.currentQuote = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateQuote(): void {
    this.message = '';

    this.quoteService.update(this.currentQuote.id, this.currentQuote)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This quote was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteQuote(): void {
    this.quoteService.delete(this.currentQuote.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/quotes']);
        },
        error => {
          console.log(error);
        });
  }
}
