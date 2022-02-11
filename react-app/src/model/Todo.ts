export class Todo {
  text: string;
  done: boolean;
  created: Date;

  constructor(text: string, done: boolean) {
    this.text = text;
    this.done = done;
    this.created = new Date();
  }

  formatCreated(): string {
    return this.created.toLocaleString();
  }
}
