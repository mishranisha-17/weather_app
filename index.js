window.addEventListener("load",()=>{
   let long;
   let lat;
   let temperatureDescription = document.quearySelector(".temperature-descripition");
   let temperatureDegree = document.quearySelector(".temperature-degree");
   let locationTimeZone = document.quearySelector(".location-timeZone");
   
   if(navigator.geolocation){
navigator.geolocation.getCurrentPosition (position =>{

    long = position.coords.longitude;
    lat = position.coords.latitude;


    const api = '${proxy} "https://api.openweathermap.org/data/2.5/weather?id='{lat},{long};

      fetch(api)
      .then(response =>{
       return response.json();
   })
 
       .then(data=>{

         const{temperature,summary, icon} = data.currently
        //set dom elements from the API
         temperatureDegree.textContent = temperature;
         temperatureDescription.textContent = summary;
         locationTimeZone.textContent = data.timezone;

         //set icon   var document: Document
         setIcon(icon,document.querySelector(".icon"));
         //

    });

  });   
    
function setIcon(icon, iconID){
    const skycons = new Skycons({color:"white"});
    const currentIcon = icon.replace(/-/g ,"_").toUpperCase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);
}

   }
})