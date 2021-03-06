# SF Legacy Eats
<img src="./screenshots/1.png">


## Scope:
SF Legacy Eats is an interactive map that connects users with bars and restaurants that have had a long lasting cultural impact on San Francisco. The main list is provided by SF Heritage (https://www.sfheritage.org/legacy/), and can be supplemented by user-submitted suggestions. San Francisco has a diverse and compelling history, and we feel one of the best ways to engage with the past is through food and drink at one of the city's many historic establishments.

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
Our user is:

* a local who wants to support community business
* a tourist who wants a distinct and authentic San Francisco dining/bar experience
* a newcomer to the city who is interested in getting to know San Francisco and its culinary roots
* anyone interested in eating, drinking, history, culture and the relationship between them


## Features:
* User signup, login, logout
* An interactive Open Street Map populated with pins of bars and restaurants from San Francisco Heritage's Legacy Project and user submissions
  * When a user clicks on a pin, it display a popup with basic information about that bar or restaurant
    * When a user clicks on the name of the bar or restaurant in the popup, it opens that bar or restaurant's website in another window
* Geolocation of user, displayed as a pin on the map when the page loads
* User's can create a new legacy bar or restaurant 
  * User's can search and select a bar or restaurant with the help of Google Autocomplete, enter the year it was established, and submit it to be added as a pin on the map
    * Google Places API stores the neccessary information about the bar or restaurant (address, name, website) for the user so the user does not have to enter this information themselves
* Two different colors of pins, to distinguish the source of the submission (SF Heritage's Legacy Project or user)
* A "List" page that shows all the bars and restaurants on the map and basic information about them

## Screenshots
<img src="./screenshots/2.png">

<img src="./screenshots/3.png">

<img src="./screenshots/4.png">

<img src="./screenshots/5.png">

<img src="./screenshots/6.png">

<img src="./screenshots/7.png">

<img src="./screenshots/8.png">

<img src="./screenshots/9.png">

<img src="./screenshots/10.png">

<img src="./screenshots/11.png">

<img src="./screenshots/12.png">


## Still to Come...
* Responsive Design
* Add form validation to "Year Opened" in user submission form
* Reset form on modal close
* An option to filter map pins by sources (either SF Heritage or user submitted)
* JWT Authentication
* Users can rate their favorite bars/restaurants
* Users can comment on bars/restaurants
* Users can edit their submissions


## Links:
### First Iteration (https://github.com/aduncan12/Project-01):

#### Created By
* [Natalie Poulson](https://github.com/natalie-poulson)
* [Alan Duncan](https://github.com/aduncan12)

#### Herkou Link
* https://flux-capaceator.herokuapp.com/

### Refactored Version (this repo):

#### By
* [Natalie Poulson](https://github.com/natalie-poulson)

#### Herkou Link
* https://sf-legacy-eats.herokuapp.com/



