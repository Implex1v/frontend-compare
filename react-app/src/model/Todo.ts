export class Todo {
  text: string;
  done: boolean;
  created: Date;

  constructor(text: string, done: boolean, created: Date = new Date()) {
    this.text = text;
    this.done = done;
    this.created = created;
  }

  formatCreated(): string {
    return this.created.toLocaleString();
  }
}
