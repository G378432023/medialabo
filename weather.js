let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log("都市：" + data.name);
console.log("経度：" + data.coord.lon);
console.log("緯度：" + data.coord.lat);
console.log("天気：" + data.weather[0].description);
console.log("最低気温：" + data.main.temp_min);
console.log("最高気温：" + data.main.temp_max);
console.log("湿度：" + data.main.humidity);
console.log("風速：" + data.wind.speed);
console.log("風向：" + data.wind.deg);
console.log("拡張課題");
let coord = data.coord;
Object.keys(data);

////////// 課題4-2
window.addEventListener("load", function() {
  let resultElem = document.getElementById("result");
  
  function insert(text){
    resultElem.innerHTML += text;
  }

  insert('<h1>世界の天気</h1>');
  insert('<h2>都市：' + data.name + '</h2>');
  insert('<ul>');
  insert('<li>経度：' + data.coord.lon + '</li>');
  insert('<li>緯度：' + data.coord.lat + '</li>');
  insert('<li>天気：' + data.weather[0].description + '</li>');
  insert('<li>最低気温：' + data.main.temp_min + '</li>');
  insert('<li>最高気温：' + data.main.temp_max + '</li>');
  insert('<li>湿度：' + data.main.humidity + '</li>');
  insert('<li>風速：' + data.wind.speed + '</li>');
  insert('<li>風向：' + data.wind.deg + '</li>');
  insert('</ul>');
});

//課題5-2
function getText() {
  let text = document.forms.form1.town.value;
  console.log("入力：" + text);
}
