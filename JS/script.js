searchData = () => {
  var id = document.getElementById("searchText").value;
  fetch("https://606584adb8fbbd00175667d8.mockapi.io/msaastest/getUsers/" + id)
    .then((response) => response.json())
    .then((data) => {
    document.getElementById("user-id").innerHTML = data.id;
    document.getElementById("pro-name").innerHTML = data.name;
    document.getElementById("Header-name").innerHTML= data.name;
    document.getElementById("card-name").innerHTML= data.name;
    document.getElementById("rating1").innerHTML = data.rating1;
    document.getElementById("rating2").innerHTML = data.rating2;
    document.getElementById("rating3").innerHTML = data.rating3;
    document.getElementById("card-organization").innerHTML = data.organization;
    document.getElementById("card-department").innerHTML = data.department;
    document.getElementById("score").innerHTML = data.score;

    document.getElementById("firstName").value = data.name;
    document.getElementById("User-email").value = data.email;
    document.getElementById("organization").value = data.organization;
    document.getElementById("department").value = data.department;
    document.getElementById("personal-contact").value = data.personal;
    document.getElementById("work-contact").value = data.work;
    getLocation(data.latitude,data.longitude);
    getPhotos(id);
    });
};
getLocation=(latitude,longitude)=>{
    var location
    fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&key=AIzaSyAYkq2ycCVbjk62zdekD7RB355nE37PqKY")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("setLocation").innerHTML=data.results[0].formatted_address;
        document.getElementById("input-address").value = data.results[0].formatted_address;
    });
   
}

getPhotos = (id) =>{
// let accessKey = "q5uKJr9hSSZMtzacmIiJPcPyXdIoi6fY2I_RaSMraYY";
// let searchTerm = "portraits";
let url = "https://api.unsplash.com/photos/?client_id=q5uKJr9hSSZMtzacmIiJPcPyXdIoi6fY2I_RaSMraYY";

fetch(url)
.then((response) => response.json())
.then((data) => {
   // debugger;
    document.getElementById("proPic").src = data[id].urls.full;
    //document.getElementById("background-image").src = data[id].urls.thumb;
    document.getElementById("profilePic").src = data[id].urls.thumb;
    console.log(JSON.stringify(data[0].urls));
});
}