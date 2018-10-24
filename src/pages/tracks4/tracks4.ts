import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks4',
  templateUrl: 'tracks4.html',
})
export class Tracks4Page {
  tracks = ["1. Spirit.", "2. From The Pinnacle To the Pit.", "3. Cirice.", "4. Spoksonat.", "5. He Is.", "6. Mummy Dust.", "7. Majesty.", "8. Devil Church.", "9. Absolution,", "10. Deus in Absentia."];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks4Page');
  }

}
