import { IStorage, LocalStore } from './Storage';
import { Todo } from '../model/Todo';

describe("Storage", () => {
  it('should store items in local storage', () => {
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    const storage: IStorage = new LocalStore();
    const todos = [new Todo('a', true), new Todo('b', false)];
    storage.store(todos);

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith('todoapp', JSON.stringify(todos));
  });

  it('should load items from local storage', () => {
    const storage: IStorage = new LocalStore();

    window.localStorage.__proto__.getItem = jest.fn(() => '[]');
    expect(storage.load()).toStrictEqual([]);

    window.localStorage.__proto__.getItem = jest.fn(() => 'fdssdfsdfsdf');
    expect(storage.load()).toStrictEqual([]);

    const todos = [new Todo('a', true), new Todo('b', false)];
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(todos));
    expect(storage.load()).toStrictEqual(todos);
  });
});