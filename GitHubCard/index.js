import axios from 'axios';

// variables holding data from github
let name = ''
let imgSrc = ''
let userName = ''
let location = ''
let url = ''
let followers = ''

//import axios from 'axios';
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
.get("https://api.github.com/users/squarerobin")
.then((res) => {
// this probably returns a 200 status code
  //console.log(res)
  userName = res.data.login 
  name = res.data.name
  imgSrc = res.data.avatar_url
  userName = res.data.login
  location = res.data.location
  url = res.data.url
  followers = res.data.followers_url
  console.log(followers)







  //const img = res.data.
  //console.log(userName) 
  /* const dogList = res.data.message;
  dogList.forEach((dog) => {
    const newDogCard = DogCard(dog);
    entry.appendChild(newDogCard);
  }); */
})
.catch((err) => {
// this probably returns either a 400 or 500 status code
  console.log('You hit an error: ', err);
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


function GitHubCard(obj){

  // create elements

  const cardDiv = document.createElement('div')
  const imageImg = document.createElement('img')
  const cardInfoDiv = document.createElement('div')
  const nameH3 = document.createElement('h3')
  const userNameP = document.createElement('p')
  const locationP = document.createElement('p')
  const profileP = document.createElement('p')
  const addressA = document.createElement('a')
  const followersP = document.createElement('p')
  const followingP = document.createElement('p')
  const bioP = document.createElement('p')

  // style elements

  cardDiv.classList.add('card')
  imageImg.src = imgSrc
  cardInfoDiv.classList.add('card-info')
  nameH3.classList.add('name')
  nameH3.textContent = name
  userNameP.classList.add('username')
  userNameP.textContent = userName
  locationP.textContent = `Location: $(location)`
  profileP.textContent = 'Profile:'
  addressA.href = url
  addressA.textContent = url
  followersP.textContent = `Followers: $(followers)` 
  
  
  
 


  


}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
