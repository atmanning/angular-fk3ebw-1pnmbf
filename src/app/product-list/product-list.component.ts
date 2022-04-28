import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // this is confusing!  ???
  products = products;

  share( p:string ) { 
    window.alert('The product ' + p + ' has been shared!');
  }

  // define what to do when the product-alert child emits a notification
  // the call to this is in the .html params of the product
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onNotify2(prd:string) {
    window.alert("You will be notified when " + prd + " is on sale!");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/