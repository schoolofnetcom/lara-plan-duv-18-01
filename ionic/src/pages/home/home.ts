import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TestProvider} from "../../providers/test/test";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private testService: TestProvider) {

    }

    ionViewDidLoad() {
        this.testService.retrieve().subscribe(data => {
            console.log(data);
        })
    }

}
