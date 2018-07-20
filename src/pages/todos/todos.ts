import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform} from 'ionic-angular';
import { TodoModel } from '../../shared/todo-model';
import { ListModel } from '../../shared/list-model';
import { TodoService } from '../../shared/todo-service';
import { AddTaskModalPage } from '../add-task-modal/add-task-modal';

/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  private toogleTodoTimeout = null;
  private list:ListModel;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController, 
              public todoService: TodoService,
              private platform: Platform) { 
                this.list = this.navParams.get('list');
                this.todoService.loadFromList(this.list.id);
               }

  ionViewWillUnload(){
    this.todoService.saveLocally(this.list.id);
  }

  setTodoStyles(item:TodoModel){
    let styles = {
      'text-decoration': item.isDone? 'line-through' : 'none',
      'font-weight': item.isImportant ? '600': 'normal'
    };
    return styles;
  }

  showAddTodo(){
    let moda = this.modalCtrl.create(AddTaskModalPage);
    moda.present();
    moda.onDidDismiss(data => { 
      if(data){ this.todoService.addTodo(data); }
    });
  }

  toogleTodo(item:TodoModel){
    if(this,this.toogleTodoTimeout) return;

    this.toogleTodoTimeout = setTimeout(()=>{
       this.todoService.toogleTodo(item)  
       this.toogleTodoTimeout = null;  
    }, this.platform.is('ios')? 0:300);   

  }

  removeTodo(item:TodoModel){
    this.todoService.removeTodo(item);
  }

  showEditTodo(todo: TodoModel){
    let modal = this.modalCtrl.create(AddTaskModalPage, {todo});
    modal.present();
    modal.onDidDismiss(data => { 
      if(data){
        this.todoService.updateTodo(todo, data);
      }
    });
  }
}
