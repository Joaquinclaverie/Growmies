# Growmies
Server created for Grow test using SWAPI 

# Command to init the API

* `npm run start`: This commmand init the server and have Nodemon incorporated

# Endpoints

`GET` This endpoint return all the people from StarWars and you can pass a optional query param "sortBy" to sort the results, this optional query param can be 'name', 'height' or 'mass': `/people/:sortBy?` 

`GET` This endpoint return all of the planets from StarWars and replace the links from the residents with their actual names: `/planets/getAll` 