/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/quotes */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) {}

  getListing() {
    return this.http.get('../assets/listing.json');
  }
}
