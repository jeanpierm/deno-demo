import { Person } from './person.entity.ts';

const people: Person[] = [
  new Person('Jeanpier', 'Mendoza', 'Ecuador'),
  new Person('Jesús', 'Mendoza', 'Ecuador'),
  new Person('Jeampool', 'Mendoza', 'Ecuador'),
  new Person('Jesús', 'Mendoza', 'Ecuador'),
  new Person('Georgina', 'Navarro', 'Ecuador'),
  new Person('Alfredo', 'Gavilanes', 'Ecuador'),
  new Person('John', 'Vera', 'Ecuador'),
  new Person('María', 'Viteri', 'Ecuador'),
];

export function getPeople(): Person[] {
  return people;
}

export function getPersonById(id: string): Person | undefined {
  return people.find((person) => person.id === id);
}
