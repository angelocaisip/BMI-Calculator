import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  height: number;
  weight: number;
  bmi: number;
  bmiMessage: String;

  constructor(public navCtrl: NavController) {}

  calculateBMI() {
    this.bmi = this.weight / (this.height * this.height);
    this.bmi = parseFloat(this.bmi.toFixed(2));

    if (this.bmi <18.5) {
      this.bmiMessage = "underweight";
    } else if (this.bmi > 18.5 && this.bmi < 25){
      this.bmiMessage = "normal"
    } else if (this.bmi > 25 && this.bmi < 30){
      this.bmiMessage = "overweight";
    } else {
      this.bmiMessage = "obese";
    }

  }
}

