
To setup the project locally 

# Frontend :-

- Navigate the client folder and then run `npm i`
- Now, run `npm run dev`

# Backend :- 

- Navigate the server folder and then run `npm i`
- Now, run `npm run dev`

# Database:- 

If you dont have the postgress database locally and have the mongodb locally , then try to pull the image from the docker hub regirstry

run the `docker compose up -d` command on the root folder and then try to put the env :-
DB_URL=postgres://postgres:admin@localhost:5432/ciphersql

