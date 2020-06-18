import {Injectable} from '@angular/core';
import {ITodoItem} from '../types/itodo-item';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  public getList(): Observable<ITodoItem[]> {
    return this.httpClient.get<any>('https://api.jsonbin.io/b/5ed00ba679382f568bceb307/latest').pipe(
      tap(todos => {
        console.log(JSON.stringify(todos));
      }),
      switchMap(todos => {
        return of(todos['main']);
      })
    );
  }

  public putList(todoItems: ITodoItem[]): Observable<ITodoItem[]> {
    const main = {main: todoItems};
    return this.httpClient.put<any>('https://api.jsonbin.io/b/5ed00ba679382f568bceb307', main).pipe(
      tap(data => {
        console.log(JSON.stringify(data));
      }),
      switchMap(data => {
        return this.getList();
      })
    );
  }

  public addTodoItem(todoItem: ITodoItem): Observable<ITodoItem[]> {
    return this.getList().pipe(switchMap(todos => {
      let maxId: number = 0;
      todos.forEach(todo => {
        if (todo.id > maxId) {
          maxId = todo.id;
        }
      });
      todos.push({...todoItem, id: ++maxId});
      return this.putList(todos);
    }));
  }

  public updateTodoItem(todoItem: ITodoItem): Observable<ITodoItem[]> {
    return this.getList().pipe(switchMap(todos => {
      const todoUpdate = todos.map(todo => {
        if (todo.id === todoItem.id) {
          return todoItem;
        } else {
          return todo;
        }
      });
      return this.putList(todoUpdate);
    }));
  }


}
