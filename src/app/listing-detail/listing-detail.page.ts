import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.page.html',
  styleUrls: ['./listing-detail.page.scss'],
})
export class ListingDetailPage implements OnInit {
  listingDetail;
  gallery;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.getListingDetail();
  }

  getListingDetail() {
    this.listingService.getListing()
      .subscribe(result => {
        this.listingDetail = result[0];
        this.gallery = this.listingDetail?.gallery;
      });
  }
}
