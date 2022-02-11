import { Todo } from '../model/Todo';

export interface IStorage {
  store(items: Todo[]): Todo[];
  load(): Todo[];
}

const LocalStorageKey = 'todoapp';

export class LocalStore implements LocalStore {
  store(items: Todo[]): Todo[] {
    localStorage.setItem(LocalStorageKey, JSON.stringify(items));
    return this.load();
  }

  load(): Todo[] {
    const itemString = localStorage.getItem(LocalStorageKey);

    if (itemString == null) {
      return [];
    }

    return this.parseStorage(itemString);
  }

  parseStorage(itemString: string): Todo[] {
    try {
      const parsed: Todo[] = JSON.parse(itemString);

      if (parsed == null) {
        return [];
      }

      return parsed.map((item) => new Todo(item.text, item.done, item.created));
    } catch (ex) {
      return [];
    }
  }
}
