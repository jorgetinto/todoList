webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todos_todos__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_lists_service__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListsPage = /** @class */ (function () {
    function ListsPage(navCtrl, navParams, alertCtrl, listsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.listsService = listsService;
    }
    ListsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListsPage');
    };
    ListsPage.prototype.goToList = function (list) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__todos_todos__["a" /* TodosPage */], { list: list });
    };
    ListsPage.prototype.addNewList = function (name) {
        var list = this.listsService.addList(name);
        this.listsService.saveLocally();
        this.goToList(list);
    };
    ListsPage.prototype.showAddList = function () {
        var _this = this;
        var addListAlert = this.alertCtrl.create({
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
                    handler: function (data) {
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.addNewList(data.name);
                    }
                }
            ]
        });
        addListAlert.present();
    };
    ListsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lists',template:/*ion-inline-start:"C:\Users\jorge.pino\Desktop\Android\ListaTareas\todoList\src\pages\lists\lists.html"*/'<!--\n  Generated template for the ListsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item *ngFor="let lists of listsService.lists" (click)="goToList(lists)">{{lists.name}}</ion-item>\n</ion-list>\n</ion-content>\n\n<ion-fab bottom right>\n  <button ion-fab (click)="showAddList()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n\n</ion-fab>\n'/*ion-inline-end:"C:\Users\jorge.pino\Desktop\Android\ListaTareas\todoList\src\pages\lists\lists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_lists_service__["a" /* ListsService */]])
    ], ListsPage);
    return ListsPage;
}());

//# sourceMappingURL=lists.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_todo_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_task_modal_add_task_modal__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodosPage = /** @class */ (function () {
    function TodosPage(navCtrl, navParams, modalCtrl, todoService, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.todoService = todoService;
        this.platform = platform;
        this.toogleTodoTimeout = null;
        this.list = this.navParams.get('list');
        this.todoService.loadFromList(this.list.id);
    }
    TodosPage.prototype.ionViewWillUnload = function () {
        this.todoService.saveLocally(this.list.id);
    };
    TodosPage.prototype.setTodoStyles = function (item) {
        var styles = {
            'text-decoration': item.isDone ? 'line-through' : 'none',
            'font-weight': item.isImportant ? '600' : 'normal'
        };
        return styles;
    };
    TodosPage.prototype.showAddTodo = function () {
        var _this = this;
        var moda = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_task_modal_add_task_modal__["a" /* AddTaskModalPage */]);
        moda.present();
        moda.onDidDismiss(function (data) {
            if (data) {
                _this.todoService.addTodo(data);
            }
        });
    };
    TodosPage.prototype.toogleTodo = function (item) {
        var _this = this;
        if (this, this.toogleTodoTimeout)
            return;
        this.toogleTodoTimeout = setTimeout(function () {
            _this.todoService.toogleTodo(item);
            _this.toogleTodoTimeout = null;
        }, this.platform.is('ios') ? 0 : 300);
    };
    TodosPage.prototype.removeTodo = function (item) {
        this.todoService.removeTodo(item);
    };
    TodosPage.prototype.showEditTodo = function (todo) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_task_modal_add_task_modal__["a" /* AddTaskModalPage */], { todo: todo });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.todoService.updateTodo(todo, data);
            }
        });
    };
    TodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todos',template:/*ion-inline-start:"C:\Users\jorge.pino\Desktop\Android\ListaTareas\todoList\src\pages\todos\todos.html"*/'<!--\n  Generated template for the TodosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>To Do List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>{{list.name}}</h3>\n  <ion-list>\n    <ion-item class="no-todos" *ngIf="!todoService.todos || todoService.todos.lenght == 0">Add some tasks to your list</ion-item>\n    <ion-item-sliding *ngFor="let todo of todoService.todos | prioritizedTodosPipe" >\n      <ion-item [ngStyle]="setTodoStyles(todo)">\n          <ion-label>{{todo.description}}</ion-label>\n          <ion-checkbox color="dark" [checked]="todo.isDone" (click)="toogleTodo(todo)"></ion-checkbox>\n      </ion-item>  \n      \n      <ion-item-options side="right">\n        <button ion-button color="dark" (click)="showEditTodo(todo)"> <ion-icon name="create"></ion-icon> Edit</button>\n        <button ion-button color="danger" (click)="removeTodo(todo)"> <ion-icon name="remove-circle"></ion-icon> Remove</button>\n      </ion-item-options>      \n    </ion-item-sliding>\n\n    <ion-item-divider>Done Task</ion-item-divider>\n    <ion-item *ngIf="(todoService.todos | doneTodosPipe).lenght > 0"> </ion-item>\n      <ion-item  *ngFor="let todo of todoService.todos | doneTodosPipe " [ngStyle]="setTodoStyles(todo)">\n        <ion-label color="dark">{{todo.description}}</ion-label>\n        <ion-checkbox color="dark" [checked]="todo.isDone" (click)="toogleTodo(todo)"></ion-checkbox>\n      </ion-item>\n   \n\n\n  </ion-list>\n</ion-content>\n\n<ion-fab bottom right>\n  <button ion-fab (click)="showAddTodo()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"C:\Users\jorge.pino\Desktop\Android\ListaTareas\todoList\src\pages\todos\todos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], TodosPage);
    return TodosPage;
}());

//# sourceMappingURL=todos.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/lists/lists.module": [
		281,
		1
	],
	"../pages/todos/todos.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_model__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TodoService = /** @class */ (function () {
    function TodoService(http, local) {
        this.http = http;
        this.local = local;
        this.todos = [];
    }
    TodoService.prototype.loadFromList = function (id) {
        this.getFromLocal(id);
    };
    TodoService.prototype.getFromLocal = function (id) {
        var _this = this;
        return this.local.ready().then(function () {
            return _this.local.get("list/" + id).then(function (data) {
                if (!data) {
                    _this.todos = [];
                    return;
                }
                var localTodos = [];
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var todo = data_1[_i];
                    localTodos.push(__WEBPACK_IMPORTED_MODULE_2__todo_model__["a" /* TodoModel */].clone(todo));
                }
                _this.todos = localTodos;
            });
        });
    };
    TodoService.prototype.saveLocally = function (id) {
        var _this = this;
        this.local.ready().then(function () {
            _this.local.set("list/" + id, _this.todos);
        });
    };
    TodoService.prototype.toogleTodo = function (item) {
        var isDone = !item.isDone;
        var todoIndex = this.todos.indexOf(item);
        var updatedTodo = new __WEBPACK_IMPORTED_MODULE_2__todo_model__["a" /* TodoModel */](item.description, item.isImportant, isDone);
        this.todos = this.todos.slice(0, todoIndex).concat([
            updatedTodo
        ], this.todos.slice(todoIndex + 1));
    };
    TodoService.prototype.addTodo = function (item) {
        //this.todos.push(item);
        this.todos = this.todos.concat([item]);
    };
    TodoService.prototype.removeTodo = function (item) {
        var index = this.todos.indexOf(item);
        this.todos = this.todos.slice(0, index).concat(this.todos.slice(index + 1));
    };
    TodoService.prototype.updateTodo = function (originalTodo, modifiedTodo) {
        var index = this.todos.indexOf(originalTodo);
        this.todos = this.todos.slice(0, index).concat([
            modifiedTodo
        ], this.todos.slice(index + 1));
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], TodoService);
    return TodoService;
}());

//# sourceMappingURL=todo-service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoModel; });
var TodoModel = /** @class */ (function () {
    function TodoModel(description, isImportant, isDone) {
        if (isImportant === void 0) { isImportant = false; }
        if (isDone === void 0) { isDone = false; }
        this.description = description;
        this.isImportant = isImportant;
        this.isDone = isDone;
    }
    TodoModel.clone = function (todo) {
        return new TodoModel(todo.description, todo.isImportant, todo.isDone);
    };
    return TodoModel;
}());

//# sourceMappingURL=todo-model.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_todo_model__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddTaskModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTaskModalPage = /** @class */ (function () {
    function AddTaskModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__shared_todo_model__["a" /* TodoModel */]('');
        this.title = "Add new task";
        this.buttonText = "Add";
        if (this.navParams.get('todo')) {
            this.model = __WEBPACK_IMPORTED_MODULE_2__shared_todo_model__["a" /* TodoModel */].clone(this.navParams.get('todo'));
            this.title = "Edit task";
            this.buttonText = "Save changes";
        }
    }
    AddTaskModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTaskModalPage');
    };
    AddTaskModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddTaskModalPage.prototype.submit = function () {
        this.viewCtrl.dismiss(this.model);
    };
    AddTaskModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-task-modal',template:/*ion-inline-start:"C:\Users\jorge.pino\Desktop\Android\ListaTareas\todoList\src\pages\add-task-modal\add-task-modal.html"*/'<!--\n  Generated template for the AddTaskModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="primary">\n     <ion-title>{{title}}</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span color="secondary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n   \n   </ion-header>\n\n\n<ion-content>\n    <form class="container" (ngSubmit)="submit()">\n          <ion-item>\n            <ion-input placeholder="Task Description" clearInput [(ngModel)]="model.description" \n            name="description" required #descriptionState="ngModel"></ion-input>\n          </ion-item>\n\n          <ion-item color="danger" [hidden]="descriptionState.valid || descriptionState.untouched">\n              Description is required\n          </ion-item>\n    \n          <ion-item>\n            <ion-label>Is Important</ion-label>\n            <ion-checkbox color="dark" [(ngModel)]="model.isImportant" name="isImportant"></ion-checkbox>\n          </ion-item>\n    \n          <div class="submit-button">\n            <button ion-button block type="submit" [disabled]="!descriptionState.valid">{{buttonText}}</button>\n          </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jorge.pino\Desktop\Android\ListaTareas\todoList\src\pages\add-task-modal\add-task-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddTaskModalPage);
    return AddTaskModalPage;
}());

//# sourceMappingURL=add-task-modal.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_model__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ListsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ListsService = /** @class */ (function () {
    function ListsService(http, local) {
        this.http = http;
        this.local = local;
        this.lists = [];
        this.getList();
    }
    ListsService.prototype.getList = function () {
        this.getFromLocal();
    };
    ListsService.prototype.addList = function (name) {
        var list = new __WEBPACK_IMPORTED_MODULE_2__list_model__["a" /* ListModel */](name, this.lists.length);
        this.lists = this.lists.concat([list]);
        return list;
    };
    ListsService.prototype.getFromLocal = function () {
        var _this = this;
        return this.local.ready().then(function () {
            return _this.local.get('lists').then(function (data) {
                var localLists = [];
                if (data) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var list = data_1[_i];
                        localLists.push(new __WEBPACK_IMPORTED_MODULE_2__list_model__["a" /* ListModel */](list.name, list.id));
                    }
                }
                _this.lists = localLists;
            });
        });
    };
    ListsService.prototype.saveLocally = function () {
        var _this = this;
        this.local.ready().then(function () {
            _this.local.set('lists', _this.lists);
        });
    };
    ListsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ListsService);
    return ListsService;
}());

//# sourceMappingURL=lists-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_todos_todos__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lists_lists__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_task_modal_add_task_modal__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_todo_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_lists_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_prioritized_todos__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_done_todos__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_todos_todos__["a" /* TodosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lists_lists__["a" /* ListsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_task_modal_add_task_modal__["a" /* AddTaskModalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_prioritized_todos__["a" /* PrioritizedTodosPipe */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_done_todos__["a" /* DoneTodosPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/lists/lists.module#ListsPageModule', name: 'ListsPage', segment: 'lists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todos/todos.module#TodosPageModule', name: 'TodosPage', segment: 'todos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_todos_todos__["a" /* TodosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lists_lists__["a" /* ListsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_task_modal_add_task_modal__["a" /* AddTaskModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__shared_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_lists_service__["a" /* ListsService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListModel; });
var ListModel = /** @class */ (function () {
    function ListModel(name, id) {
        this.name = name;
        this.id = id;
    }
    return ListModel;
}());

//# sourceMappingURL=list-model.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lists_lists__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_lists_lists__["a" /* ListsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jorge.pino\Desktop\Android\ListaTareas\todoList\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\jorge.pino\Desktop\Android\ListaTareas\todoList\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrioritizedTodosPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PrioritizedTodosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PrioritizedTodosPipe = /** @class */ (function () {
    function PrioritizedTodosPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PrioritizedTodosPipe.prototype.transform = function (todos) {
        return todos.filter(function (todo) { return !todo.isDone; }).sort(function (a, b) { return (b.isImportant && !a.isImportant) ? 1 : -1; });
    };
    PrioritizedTodosPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'prioritizedTodosPipe'
        })
    ], PrioritizedTodosPipe);
    return PrioritizedTodosPipe;
}());

//# sourceMappingURL=prioritized-todos.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneTodosPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the DoneTodosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DoneTodosPipe = /** @class */ (function () {
    function DoneTodosPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DoneTodosPipe.prototype.transform = function (todos) {
        return todos.filter(function (todo) { return todo.isDone; });
    };
    DoneTodosPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'doneTodosPipe'
        })
    ], DoneTodosPipe);
    return DoneTodosPipe;
}());

//# sourceMappingURL=done-todos.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map