/* import axios from 'axios'; */

/* // variables holding data from github
let name = ''
let imgSrc = ''
let userName = ''
let location = ''
let url = ''
let followers = '' */


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
.get("https://api.github.com/users/squarerobin")
.then((res) => {
// this probably returns a 200 status code
  //console.log(res)
  
  const name = res.data.name
  const imgSrc = res.data.avatar_url
  const userName = res.data.login
  const location = res.data.location
  const url = res.data.url
  const followers = res.data.followers
  const following = res.data.following
  const bio = res.data.bio
  //console.log(res.data)







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
  imageImg.src = obj.image
  cardInfoDiv.classList.add('card-info')
  nameH3.classList.add('name')
  nameH3.textContent = obj.name
  userNameP.classList.add('obj.username')
  userNameP.textContent = obj.userName
  locationP.textContent = `Location: ${obj.location}`
  profileP.textContent = 'Profile:'
  addressA.href = obj.url
  addressA.textContent = obj.url
  followersP.textContent = `Followers: ${obj.followers}` 
  followingP.textContent = `Following: ${obj.following}` 
  bioP.textContent = `Bio: ${obj.bio}`

  // structure component

  cardDiv.appendChild(imageImg)
  cardDiv.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(nameH3)
  cardInfoDiv.appendChild(userNameP)
  cardInfoDiv.appendChild(locationP)
  cardInfoDiv.appendChild(profileP)
  cardInfoDiv.appendChild(followersP)
  cardInfoDiv.appendChild(followingP)
  cardInfoDiv.appendChild(bioP)
  profileP.appendChild(addressA)

  


  
  
  
 

 return newGitHubCard
  


}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
