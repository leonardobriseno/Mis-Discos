import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks3',
  templateUrl: 'tracks3.html',
})
export class Tracks3Page {
  tracks = ["1. Fight Fire With Fire.", "2. Ride the Lightning.", "3. For Whom The Bell Tolls.", "4. Fade To Black.", "5. Trapped Under Ice.", "6. Escape.", "7. Creeping Death.", "8. The Call Of Ktulu."];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks3Page');
  }

}
