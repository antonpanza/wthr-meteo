const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=46.86&lon=29.61&exclude=minutely&appid=bd13f22f7ddfb02c48dc271e1177ace9`;

fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });