import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { TodoModel } from './todo-model';
import { Storage } from '@ionic/storage';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoService {
  
  private todos: TodoModel[] = [];

  constructor(public http: Http, public local:Storage) {
  }

  public loadFromList(id:number){
    this.getFromLocal(id);
  }

  private getFromLocal(id:number){
    return this.local.ready().then(()=>{
      return this.local.get(`list/${id}`).then(
        data => {
          if(!data){
            this.todos = [];
            return;
          }

          let localTodos:TodoModel[] = [];
          for(let todo of data){
            localTodos.push(TodoModel.clone(todo));
          }
          this.todos = localTodos;
        }
      )
    })
  }

  public saveLocally(id:number){
    this.local.ready().then(()=>{
      this.local.set(`list/${id}`, this.todos);
    })
  }

  toogleTodo(item:TodoModel){
  
      let isDone = !item.isDone;
      const todoIndex = this.todos.indexOf(item);
      let updatedTodo = new TodoModel(item.description, item.isImportant, isDone);

      this.todos = [
        ...this.todos.slice(0, todoIndex), updatedTodo,
        ...this.todos.slice(todoIndex + 1)
      ];
  }
  
  addTodo(item:TodoModel){
    //this.todos.push(item);
    this.todos =[...this.todos, item];
  }

  removeTodo(item:TodoModel){
    const index = this.todos.indexOf(item);
    this.todos= [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index+1)
    ];
  }

  updateTodo(originalTodo:TodoModel, modifiedTodo:TodoModel){
    const index = this.todos.indexOf(originalTodo);
    this.todos= [
      ...this.todos.slice(0, index),modifiedTodo,
      ...this.todos.slice(index+1)
    ];
  }
}
