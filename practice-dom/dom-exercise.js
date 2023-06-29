//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let elemEx42 = document.getElementById("ex42");
let textToInsert = '<p style="text-emphasis: sesami green;">写真表と都市の都市の緯度経度のページです。</p>';
let newElem = document.createElement('p');
newElem.style.textEmphasis = 'sesami green';
newElem.textContent = '写真表と都市の都市の緯度経度のページです。';
elemEx42.parentNode.insertBefore(newElem, elemEx42.nextSibling);


// 練習4-3 写真表作成プログラム
let elemPhototable = document.getElementById("phototable");
elemPhototable.innerHTML += `
							<p>
								<img src="taro.png">
							</p>
							<p>
								<img src="jiro.png">
							</p>
							<p>
								<img src="hanako.png">
							</p>
							`;

// 練習4-4 箇条書き削除プログラム
let list = document.getElementById("location");
let liElements = list.getElementsByTagName("li");

for (var i = liElements.length - 1; i >= 0; i--) {
	var li = liElements[i];
    li.parentNode.removeChild(li);
}


// 練習4-5 箇条書き追加プログラム 
data.forEach(function(item) {
	let liElement = document.createElement('li');
	liElement.textContent = item.name + ' : ' + item.lat + ', ' + item.lng;
	list.appendChild(liElement);
});