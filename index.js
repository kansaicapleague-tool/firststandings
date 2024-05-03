document.getElementById('form').onsubmit = function (event) {
    // 再読み込み防止
    event.preventDefault();
    // 入力フォームの内容を取得
    let inputForm = document.getElementById('form').content.value;
    // 入力内容を画面に出力
    document.getElementById('output').textContent = `${inputForm}`;
}
