import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ITodoItem} from '../../types/itodo-item';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  public todos: ITodoItem[];
  public filterTodos: ITodoItem[];
  private _enableFilter = false;
  private _searchString = '';
  private _interval: any;


  get enableFilter(): boolean {
    return this._enableFilter;
  }

  set enableFilter(value: boolean) {
    this._enableFilter = value;
  }


  get searchString(): string {
    return this._searchString;
  }

  set searchString(value: string) {
    this._searchString = value;
  }

  constructor(private todoService: TodoService) {
  }


  ngOnInit(): void {
    this.initLoadTodo();
    /* this._interval = setInterval(() => {
       this.initLoadTodo();
     }, 5000); */
  }

  public initLoadTodo() {
    this.todoService.getList().subscribe(todos => {
      console.log('Daten geladen');
      console.log(JSON.stringify(todos));
      this.todos = todos;
    });
  }

  public deleteTodo(todoToDelete: ITodoItem) {
    const updatedTodos = this.todos.filter(todo => {
      return todo.id !== todoToDelete.id;
    });
    this.todoService.putList(updatedTodos).subscribe(data => {
      console.log(data);
      this.todos = data;
      this.search(this.searchString);
    });
  }

  public updateTodo(todo: ITodoItem) {
    this.todoService.updateTodoItem(todo).subscribe(data => {
      console.log(data);
      this.todos = data;
      this.search(this.searchString);
    });
  }

  public addTodo(todo: ITodoItem) {
    this.todoService.addTodoItem(todo).subscribe(data => {
      console.log(data);
      this.todos = data;
      this.search(this.searchString);
    });
  }

  public search(searchText: string) {
    this.searchString = searchText;
    this.filterTodos = this.todos.filter(todo => {
      return todo.text.toLowerCase().includes(searchText.toLowerCase());
    });

  }

}
