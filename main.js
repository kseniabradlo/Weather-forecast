let now = new Date();
    let x = now.toLocaleDateString('pl-PL');
    
    let date = document.querySelector(".date");
    date.innerText = x;
    
    let y = now.toLocaleTimeString('pl-PL').slice(0,-3);
    let time = document.querySelector(".time");
    time.innerText = y;


const apikey = "3c9a3987d6e648cba84123549231310";

// https://api.weatherapi.com/v1/current.json?key=3c9a3987d6e648cba84123549231310&q=madrid



let city = document.querySelector("h1");
let degree = document.querySelector(".degree");
let icon = document.querySelector(".icon");
let description = document.querySelector("h2");
let feelslike = document.querySelector(".feelslike");
let img = document.querySelector(".iconImg");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let fDegree = document.querySelector(".Fdegree");




btn.addEventListener("click", function(e){
e.preventDefault();
    let cityInInput = input.value.trim();
    console.log(cityInInput);


 let url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityInInput}`

fetch(url)
    .then(response => response.json())
    .then(jsObjCity => {
        console.log(jsObjCity.location.name);
        console.log(jsObjCity.current.temp_c);
        // console.log(jsObjCity.main.feels_like);
        console.log(jsObjCity.current.condition.text);
        
        console.log("https:" + jsObjCity.current.condition.icon);
        
       
        city.innerHTML = jsObjCity.location.name;
        degree.innerHTML = Math.round(jsObjCity.current.temp_c) + "°C";
        description.innerHTML = jsObjCity.current.condition.text;


        img.style.display = "inline";
        img.src = "https:" + jsObjCity.current.condition.icon;

        fDegree.style.display = "inline";

        feelslike.innerHTML = "feels like " + Math.round(Number(jsObjCity.current.feelslike_c)) + "°C";



        fDegree.addEventListener("click", showF);
        function showF(){
            degree.innerHTML = "";
            degree.innerHTML = Math.round(jsObjCity.current.temp_f) + "°F";

            feelslike.innerHTML = "";
            feelslike.innerHTML = "feels like " + Math.round(Number(jsObjCity.current.feelslike_f)) + "°F";
        }
        

    });

});





        // const multilangObj = conditions.find(function(obj){
        //     if(obj.code === jsObjCity.current.condition.code )
        //     description.innerHTML = multilangObj.languages[19]['day_text'];
        // })


// let dateOne = document.querySelector(".date");
// let cityOne = document.querySelector("h3");
// let degreeOne = document.querySelector(".degree1");
// let descriptionOne = document.querySelector("h4");
// let feelslikeOne = document.querySelector(".feelslike1");
// let imgOne = document.querySelector(".iconImg1");
// let fDegreeOne = document.querySelector(".Fdegree1");





    // let url4days = `https://api.weatherapi.com/v1/forecast.json?key=3c9a3987d6e648cba84123549231310&q=${cityInInput}&days=5`

    // fetch(url4days)
    //     .then(response => response.json())
    //     .then(obj4days =>
    //         {
    //             if(obj4days.date == "2023-10-17"){
    //             console.log(obj4days.location.name);
    //             console.log(obj4days.current.temp_c);
    //             // console.log(jsObjCity.main.feels_like);
    //             console.log(obj4days.current.condition.text);
                
    //             console.log("https:" + obj4days.current.condition.icon);
                
               
    //             cityOne.innerHTML = obj4days.location.name;
    //             degreeOne.innerHTML = Math.round(obj4days.current.temp_c) + "°C";
    //             descriptionOne.innerHTML = obj4days.current.condition.text;
        
        
    //             // img.style.display = "inline";
    //             imgOne.src = "https:" + obj4days.current.condition.icon;
        
    //             // fDegreeOne.style.display = "inline";
        
    //             feelslikeOne.innerHTML = "feels like " + Math.round(Number(obj4days.current.feelslike_c)) + "°C";
        
        
        
    //             fDegreeOne.addEventListener("click", showF);
    //             function showF(){
    //                 degreeOne.innerHTML = "";
    //                 degreeOne.innerHTML = Math.round(obj4days.current.temp_f) + "°F";
        
    //                 feelslikeOne.innerHTML = "";
    //                 feelslikeOne.innerHTML = "feels like " + Math.round(Number(obj4days.current.feelslike_f)) + "°F";
    //             }
        
        
        
        
    //             // const multilangObj = conditions.find(function(obj){
    //             //     if(obj.code === jsObjCity.current.condition.code )
    //             //     description.innerHTML = multilangObj.languages[19]['day_text'];
    //             // })
// } 
        
        
        

   













   

