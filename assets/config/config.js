let api = 'http://localhost:4000';

if (process.env.NODE_ENV === "production") {
  api = 'http://swapi.co/api';
}

const swapiUrl = api;

export { swapiUrl };
