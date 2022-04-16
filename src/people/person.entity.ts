export class Person {
  id: string;

  constructor(public name: string, public surname: string, public country: string) {
    this.id = crypto.randomUUID();
  }
}
