//import { Component, OnInit } from '@angular/core';
// import { Component, OnInit, Input } from '@angular/core';
import { Component, Input } from '@angular/core';

// adding more - tutorial - passing data to ProductAlertsComponent
import { Output, EventEmitter } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

// we don't need to implement OnInit
//export class ProductAlertsComponent implements OnInit {
  export class ProductAlertsComponent {
  @Input() product!: Product;

  // define a function to send info to parent - parent receives a notify event
  @Output() notify = new EventEmitter();  // athis class emits output

  // we can delete these since they are unused
  //constructor() { }

 // ngOnInit(): void {
  //}

}
