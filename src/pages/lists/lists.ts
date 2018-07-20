import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TodosPage } from '../todos/todos';
import { ListsService } from '../../shared/lists-service';
import { ListModel } from '../../shared/list-model';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public listsService:ListsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  goToList(list:ListModel){
    this.navCtrl.push(TodosPage, {list});
  }

  addNewList(name:string){
    let list = this.listsService.addList(name);
    this.listsService.saveLocally();
    this.goToList(list);
  }

  showAddList(){
    let addListAlert = this.alertCtrl.create({
      title: 'Show alert list',
      message: "Give a name to the new list",
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
           
          }
        },
        {
          text: 'Add',
          handler: data => {
              this.addNewList(data.name);
          }
        }
      ]
    });
    addListAlert.present();
  }
}
