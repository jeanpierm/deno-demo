import { serve } from 'https://deno.land/std@0.135.0/http/server.ts';
import { getPeople, getPersonById } from './people/people.service.ts';

const port = 8080;

const PEOPLE_ROUTE = new URLPattern({ pathname: '/people' });
const PERSON_ROUTE = new URLPattern({ pathname: '/people/:id' });

function handler(req: Request): Response {
  const peopleMatch = PEOPLE_ROUTE.exec(req.url);
  if (peopleMatch) {
    const people = getPeople();
    return new Response(JSON.stringify(people));
  }

  const personMatch = PERSON_ROUTE.exec(req.url);
  if (personMatch) {
    const id = personMatch.pathname.groups.id;
    const person = getPersonById(id);

    if (person) {
      return new Response(JSON.stringify(person));
    }

    const response = { error: 'Person not found' };
    return new Response(JSON.stringify(response), { status: 404 });
  }

  return new Response('Not found (try /people)', {
    status: 404,
  });
}

console.log(`http://localhost:${port}`);
serve(handler, { port });
