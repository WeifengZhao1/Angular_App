import { Component } from '@angular/core';
import { Shopper } from './shopper.model';
import { NgForm } from '@angular/forms';
import { ShopperRepository } from './repository.mode';

@Component({
  selector: 'shopper',
  templateUrl: './shopper.component.html',
  styleUrls: ['./shopper.component.css']
})
export class ShopperComponent {
  title = 'app2_angular';

  model: ShopperRepository = new ShopperRepository()
  newShopper: Shopper = new Shopper()
  parseJson: any = JSON.parse(JSON.stringify(this.newShopper))
  parsedJsonName: any
  parsedJsonEmail: any
  parsedJsonQuantity: number = 0
  parsedJsonTotal: number = 0

  initialQuantity: number = 20;
  price:number = 69.99

  //validation rule
  buttonClicked: boolean = false;
  formSubmit: boolean = false;
  booleanQuantity: boolean = false
  hasFormBeenSubmitted = false;

  submitForm(form: NgForm) {
    if (this.hasFormBeenSubmitted) {
      this.initialQuantity--;
      this.parsedJsonQuantity++;
      this.parsedJsonTotal = this.price * this.parsedJsonQuantity;
    } else {
      this.hasFormBeenSubmitted = true;
      this.initialQuantity -= this.parsedJsonQuantity;
      this.parsedJsonTotal = this.price * this.parsedJsonQuantity;
    }
  }

  continueShopping() {}
  checkout() {}
}
