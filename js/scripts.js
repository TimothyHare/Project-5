//This is scripts.js
// myles and johnny from my cohort has been helping me and giving me tips on how to get things done.
console.log("success");
                          //SEARCH BAR FEATURE//
//Create Search Bar variable and use search markup provided by index.html
const searchBar = $('<form action="#" method="get"></form>')
//append markup to search bar variable to creach searchbar
  $(searchBar).append('<input type="search" id="search-input" class="search-input" placeholder="Search...">',
    '<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');
    //append searchbar to search contain to display searchbar
$(".search-container").append(searchBar);

//function for search feature//
//Credit: Myles helped me with this.
function displaySearch(){
$('.card').hide();
$('.no-results').hide();
for (let i = 0; i < $('.card').length; i++) {
const search = $('.card #name').eq(i).text().indexOf($(this).val());
if (search != -1) {
$('.card').eq(i).attr("id", "yup").show();
}
}
if ($('#yup').length < 1) {
$('.no-results').show();
}
}
// event listener to activate search feature
$('#search-input').on('keyup', displaySearch);



                                       //FETCHING FUNCTION//
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
   console.log(data.results);
   //call function that shows cards
   displayData(data.results);

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
          <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
          <p class="card-text">${data[i].email}</p>
          <p class="card-text cap">${data[i].location.city},${data[i].location.state}</p>
      </div>
  </div>`;}
  // will cause everything to display
$("#gallery").append(employeeData);
// window function
$("div .card").on("click", function(){
  let modalWindow = $("div .card").index(this);
  showWindow(modalWindow, data);
});
};
console.log("hey");
function showWindow(index, info){
  let card;
  let date = info[index].dob.date;
  let month = date.slice(5,7);
  let day = date.slice(8,10);
  let year = date.slice(index,4);
    card = `
      <div class="modal-container">
        <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">.
              <img class="modal-img" src="${info[index].picture.large} " alt="profile picture">
              <h3 id="name" class="modal-name cap">${info[index].name.first} ${info[index].name.last}</h3>
              <p class="modal-text">${info[index].email}</p>
              <p class="modal-text cap">${info[index].location.city}, ${info[index].location.state}</p>
              <hr>
              <p class="modal-text">${info[index].phone}</p>
              <p class="modal-text">${info[index].location.street}, ${info[index].location.state} ${info[index].location.postcode}</p>
              <p class="modal-text">Birthday:${month}/${day}/${year}</p>
            </div>
    `;
    let div = document.querySelector('div');
 $(div).append(card);
 $('#modal-close-btn').on('click', function() {
   $('.modal-container').remove();
 });
};
