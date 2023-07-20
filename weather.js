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
// console.log("都市：" + data.name);
// console.log("経度：" + data.coord.lon);
// console.log("緯度：" + data.coord.lat);
// console.log("天気：" + data.weather[0].description);
// console.log("最低気温：" + data.main.temp_min);
// console.log("最高気温：" + data.main.temp_max);
// console.log("湿度：" + data.main.humidity);
// console.log("風速：" + data.wind.speed);
// console.log("風向：" + data.wind.deg);
// console.log("拡張課題");
// let coord = data.coord;
// Object.keys(data);

////////// 課題4-2
// window.addEventListener("load", function() {
//   let resultElem = document.getElementById("result");
  
//   function insert(text){
//     resultElem.innerHTML += text;
//   }

//   insert('<h1>世界の天気</h1>');
//   insert('<h2>都市：' + data.name + '</h2>');
//   insert('<ul>');
//   insert('<li>経度：' + data.coord.lon + '</li>');
//   insert('<li>緯度：' + data.coord.lat + '</li>');
//   insert('<li>天気：' + data.weather[0].description + '</li>');
//   insert('<li>最低気温：' + data.main.temp_min + '</li>');
//   insert('<li>最高気温：' + data.main.temp_max + '</li>');
//   insert('<li>湿度：' + data.main.humidity + '</li>');
//   insert('<li>風速：' + data.wind.speed + '</li>');
//   insert('<li>風向：' + data.wind.deg + '</li>');
//   insert('</ul>');
// });

//課題5-2
// function getText() {
//   let text = document.forms.form1.town.value;
//   console.log("入力：" + text);
// }

var weatherData = null; // 天気データを保持するためのグローバル変数

function getText() {
  var city = document.form1.town.value;
  var xhr = new XMLHttpRequest();
  var url = "https://www.nishita-lab.org/web-contents/jsons/openweather/" + city + ".json";

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      weatherData = data; // 取得した天気データをグローバル変数に格納

      // ドロップダウンリストにキーを追加
      var select = document.getElementById("keySelect");
      select.innerHTML = ''; // リストをクリア
      var keys = getKeys(data);
      for (let key of keys) {
        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = key;
        select.appendChild(opt);
      }

      // 都市と天気の情報を表示
      var text = "都市の天気" + "\n都市: " + data.name + "\n天気: " + data.weather[0].description +
      "\n最高気温: " + data.main.temp_max + "\n最低気温:" + data.main.temp_min + "\n湿度" + data.main.humidity +
      "\n風向" + data.wind.deg + "\n風速" + data.wind.speed;
      document.getElementById('result').innerText = text;
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
}

function displaySelectedData() {
  if (weatherData === null) {
    alert("Please get the weather data first.");
    return;
  }

  var selectedKey = document.getElementById("keySelect").value;
  var selectedData = getValue(weatherData, selectedKey);

  // 選択したデータを表示します
  document.getElementById("result").innerText += '\n\n' + selectedKey + ': ' + JSON.stringify(selectedData);
}

function getKeys(obj, prefix = '', keys = []) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      getKeys(obj[key], `${prefix}${key}.`, keys);
    } else {
      keys.push(`${prefix}${key}`);
    }
  }
  return keys;
}

function getValue(data, key) {
  let parts = key.split(".");
  let value = data;
  for (let part of parts) {
    if (value[part] !== undefined) {
      value = value[part];
    } else {
      return undefined;
    }
  }
  return value;
}