/// <reference path="../../../../typings/index.d.ts" />

import {
  TestBed,
  async
} from '@angular/core/testing';

import {
  Observable
} from 'rxjs/Observable';

import {TodoComponent} from '../../../../client/dev/components/todo/TodoComponent';
import {TodoService} from '../../../../client/dev/services/TodoService';

class MockTodoService extends TodoService {
  getAll():Observable<any> {
    return new Observable((o) => {
      o.next([]);
    })
  }

  add(message: string):Observable<any> {
    return new Observable((o) => {
      o.next(message);
    });
  }

  remove(id: string):Observable<any> {
    return new Observable((o) => {
      o.next(id);
    });
  }
}

describe('todo_component', () => {
  describe('creation', () => {
    it('should create the component correctly', async(() => {
      let fixture = TestBed.createComponent(TodoComponent);
	  fixture.detectChanges();

	  let compiled = fixture.debugElement.nativeElement;

	  expect(compiled).toBeDefined();
    }));

    it('should inicialize the cmp correctly', async(() => {
      let fixture = TestBed.createComponent(TodoComponent);
	  let instance = fixture.debugElement.componentInstance;

	  spyOn(instance, '_getAll').and.callFake(() => {});
	  fixture.detectChanges();
	  expect(instance._getAll).toHaveBeenCalled();
    }));

    it('should call add correctly', async(() => {
      let fixture = TestBed.createComponent(TodoComponent);
	  fixture.detectChanges();

	  let instance = fixture.debugElement.componentInstance;

	  let _todoMsg = 'yo';
	  instance.add(_todoMsg);
    }));

    it('should call remove correctly', async(() => {
      let fixture = TestBed.createComponent(TodoComponent);
	  fixture.detectChanges();

	  let instance = fixture.debugElement.componentInstance;
	  let _id = 'abc123';

	  instance.remove(_id);
    }));
  });
});
