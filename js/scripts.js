//This is scripts.js
console.log("success");
                          //SEARCH BAR FEATURE//
//Create Search Bar variable and use search markup provided by index.html
const searchBar = $('<form action="#" method="get"></form>')
//append markup to search bar variable to creach searchbar
  $(searchBar).append('<input type="search" id="search-input" class="search-input" placeholder="Search...">',
    '<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');
    //append searchbar to search contain to display searchbar
$(".search-container").append(searchBar);


                                       //FETCHING FUNCTION//
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
   console.log(data.results);
   //call function that shows cards
   displayData(data);

  }
});
//function to display name, image, emial, city and state.
function displayData (data) {
let  employeeData = "";
  //loop to cycle through data and display name and image etc
  for (let i = 0; i < data.length; i++ ){
  //console.log("dog");
employeeData +=`  <div class="card">
      <div class="card-img-container">
          <img class="card-img" src="${data[i].picture.large}" alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${data[i].name.first}${data[i].name.last}</h3>
          <p class="card-text">${data[i].email}</p>
          <p class="card-text cap">${data[i].location.city},${data[i].location.state}</p>
      </div>
  </div>`;}
("#gallery").append(employeeData);
}
