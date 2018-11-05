# SF Legacy Eats

## Scope:
SF Legacy Eats is an interactive map that connects users with bars and restaurants that have had a long lasting cultural impact on San Francisco. The main list is provided by SF Heritage (https://www.sfheritage.org/legacy/), and can be supplemented by user-submitted suggestions. San Francisco has a diverse and compelling history, and we feel one of the best ways to engage with the past is through food and drink at one of the city's many historical establishments.

## Getting Started:
To run SF Legacy Eats on your local machine, clone the repository, then:

1. Install requirements:
  
     `npm install`

2. Start MongoDB:

     `mongod`

3. Run the seed file:

    `node seed.js`

4. Start the server:

    `nodemon`

5. Visit http://localhost:3000/


## Built With:

HTML/CSS/Sass

Javascript/jQuery

Node.js/Express

MongoD/Mongoose



### Dependencies:

* Bcrypt
* JSON Web Token
* Body Parser
* Google Maps API Web Services
* Leaflet API


## Users:
Our user is someone who is:

* a local and wants to support community business
* a tourist and wants a distinct and authentic San Francisco dining/bar experience
* a newcomer to the city and interested in getting to know San Francisco and its culinary roots
* anyone interested in eating, drinking, history, culture and the relationship between them


## Features:
* User signup, login, logout
* An interactive Open Street Map populated with pins of bars and restaurants from San Francisco Heritage's Legacy Project and user submissions
  * When user clicks on the name of the bar or restaurant in the pin popup, it opens that bar or restaurant's website in another window
* Geolocation of user, displayed as a pin on the map when the page loads
* User's can create a new legacy bar or restaurant 
  * User's can search and select a bar or restaurant with the help of Google Autocomplete, enter the year it was established, and submit it to be added as a pin on the map
* Two different colors of pins, to distinguish the source of the submission (SF Heritage's Legacy Project or user)
* A "List" page that shows all the bars and restaurants on the map and basic information about them
* User can toggle between "Map" and "List" views


## Still to Come...
* Add form validation to "Year Opened" in user submission form
* Customize the design/look of the map
* An option to filter map pins by sources (either SF Heritage or user submitted)
* JWT Authentication
* Users can rate their favorite bars/restaurants
* Users can comment on bars/restaurants
* Users can edit their submissions


## Links:

### Herkou Link
* https://frozen-sea-79124.herokuapp.com/

### Created By
* [Natalie Poulson](https://github.com/natalie-poulson)
* [Alan Duncan](https://github.com/aduncan12)
