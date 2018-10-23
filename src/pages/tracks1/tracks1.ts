import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks1',
  templateUrl: 'tracks1.html',
})
export class Tracks1Page {
  tracks = ["1. Nightmare", "2. Welcome to the Family.", "3. Danger Lines.", "4. Buried Alive.", "5. Natural Born Killer.", "6. So Far Away.", "7. God Hate us.", "8. Victim.", "9. Tonight the Worlld Dies.", "10. Fiction.", "11. Save Me.", "12. Lost it All."];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks1Page');
  }

}
