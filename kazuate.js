// 答え
let answer = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + answer);

// 入力回数（予想回数）
let number = 0;

// 予想を4回実行する
// 将来以下の judge(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら judge() を呼び出すイベント処理をする
judge();
judge();
judge();
judge();

// ボタンを押した後の処理をする関数 judge() の定義
function judge() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let guess = 4;
  
  // 課題3-1: 正解判定する
  let correct;
  if (number == answer) {
    correct = true;
  } else {
    correct = false;
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  if (correct) {
    console.log("正解");
  } else {
    console.log("不正解");
  }
}