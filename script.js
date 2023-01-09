var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.temperature__value')
var shortDesc = document.querySelector('.shortDesc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time');
var search = document.querySelector("input");
var content = document.querySelector(".content");
var body = document.querySelector("body");


async function changeWeather(input){
    console.log(input);
    let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

    let data=await fetch(apiURL).then(res=> res.json());
    console.log(data);
    console.log(data.visibility);
    if(data.cod === 200){
        content.classList.remove("hide");
        visibility.innerText=data.visibility + 'm';
        city.innerText = data.name;
         country.innerText = data.sys.country;
        let temp = value.innerText = data.main.temp;
         shortDesc.innerText = data.weather[0]?data.weather[0].main:'';
         wind.innerText = data.wind.speed + 'm/s';
         sun.innerText = data.main.humidity + '%';
         time.innerText = new Date().toLocaleString('vi');
         if(temp >= 25)
            body.setAttribute("class",'warm');
            else if(temp >= 29)
                body.setAttribute("class",'hot');
                else if(temp >= 22)
                    body.setAttribute("class",'cool')
                    else
                        body.setAttribute("class",'cold');

    }
    else
        content.classList.add("hide");
}



search.addEventListener("keypress",function(e){
    if(e.code === 'Enter')
    {
        let searchValue=search.value.trim();
        changeWeather(searchValue);
        search.value ='';
    }
})