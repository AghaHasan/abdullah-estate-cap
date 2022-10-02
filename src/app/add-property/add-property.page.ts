/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { PropertyTypes } from "../models/propertyTypes.model";
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {
  purpose: string[] = [" For Sale", "Rent"];
  propertyType: PropertyTypes[] = [
    {
      homes: [
        "House",
        "Flat",
        "Upper Portion",
        "Lower Portion",
        "Farm House",
        "Room",
        "Pent House"
      ],
      plots: [],
      commercial: []
    }
  ];

  types: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onPropertyTypeChange(type): void {
    console.log(type.target.value);
  }
}
