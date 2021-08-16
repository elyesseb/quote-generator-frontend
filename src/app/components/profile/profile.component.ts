import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from '../../services/auth.service';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  quotes?: Quote[];

  constructor(private token: TokenStorageService, private authService: AuthService, private quoteService : QuoteService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.retrieveQuotes();
  }

  retrieveQuotes(): void {
    this.quoteService.get(this.currentUser)
      .subscribe(
        (data:any) => {
          this.quotes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}



