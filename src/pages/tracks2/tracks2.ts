import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks2',
  templateUrl: 'tracks2.html',
})
export class Tracks2Page {
  tracks = ["1. Enter Sandman.", "2. Sad But True.", "3. Holier Than You.", "4. The Unforgiven.", "5. Wherever I May Roam.", "6. Don't Tread on Me.", "7. Through the Never.", "8. Nothing Else Matters.", "9. Of Wolf and Man", "10. The God That Failed.", "11. My Friend of Misery.", "12. The Struggle Within."];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks2Page');
  }

}
