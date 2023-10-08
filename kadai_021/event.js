// ボタン要素を取得
const btn = document.getElementById('btn');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  // ２秒後に文章を書き換える
  setTimeout( () => {
    document.getElementById('text').innerHTML ='ボタンをクリックしました';
  }, 2000);
});




