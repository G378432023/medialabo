// 答え
let answer = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + answer);

// 入力回数（予想回数）
let number = 0;
let over = false;

// ボタンを押した後の処理をする関数 judge() の定義
function judge() {
  let guess = document.forms.form1.guess.value;
  
  // 課題3-1: 正解判定する
  let correct;
  if (guess == answer) {
    correct = true;
  } else {
    correct = false;
  }

  // kotae と yoso が一致するかどうか調べて結果を出力
  console.log(++number + "回目の予想：" + guess);

  // 課題3-1における出力先はコンソール
  if (over || (number == 4)) {
    console.log("答えは" + answer + "です。ゲームはすでに終了しています。");
  } else if (correct) {
    console.log("正解");
    over = true;
  } else {
    if (answer < guess) {
        console.log("不正解。もっと小さい");
    } else {
        console.log("不正解。もっと大きい")
    }
  }
}