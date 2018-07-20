import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ListModel } from './list-model';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ListsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListsService {

  public lists:ListModel[] = [];

  constructor(public http: Http, public local:Storage) {
    this.getList();
  }

  private getList(){
    this.getFromLocal();
  }

  public addList(name: string){
    let list = new ListModel(name, this.lists.length);
    this.lists = [...this.lists, list];
    return list;
  }

  public getFromLocal(){
    return this.local.ready().then(()=>{
      return this.local.get('lists').then(
        data =>{
          let localLists:ListModel[] = [];
          if(data){
            for(let list of data){
              localLists.push(new ListModel(list.name, list.id));
            }
          }
          this.lists = localLists;
        })
    })
  }

  public saveLocally(){
    this.local.ready().then(()=>{
      this.local.set('lists', this.lists);
    })
  }
}
