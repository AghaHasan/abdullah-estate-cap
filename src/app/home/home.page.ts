/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listings;
  constructor(private _listingService: ListingService) {
    this.getListing()
  }

  getListing() {
    this._listingService.getListing()
      .subscribe(result => this.listings = result);
  }
}
