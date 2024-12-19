
//おみくじの種類を全て記述
const omikujiData = [
  {
    image: "images/pose_dance_ukareru_woman.png",
    fortune: "大吉",
    description: "リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気付かないでしょう。見なかったことにするのが吉。",
  },
  {
    image: "images/daikichi2.png",
    fortune: "大吉",
    description: "難しい問題もするすると解けます！"
  },
  {
    image: "images/kichi1.png",
    fortune: "吉",
    description: "そこそこ良いことがあるかも。"
  },
  {
    image: "images/kichi2.png",
    fortune: "吉",
    description: "小さな幸せが訪れそうです。"
  },
  {
    image: "images/chukichi1.png",
    fortune: "中吉",
    description: "なかなか良い一日になりそう。"
  },
  {
    image: "images/chukichi2.png",
    fortune: "中吉",
    description: "人との繋がりが幸運を呼ぶでしょう。"
  },
  {
    image: "images/shokichi1.png",
    fortune: "小吉",
    description: "少し良いことがあるかもしれません。"
  },
  {
    image: "images/shokichi2.png",
    fortune: "小吉",
    description: "日常の中に小さな喜びを見つけて。"
  },
  {
    image: "images/suekichi1.png",
    fortune: "末吉",
    description: "焦らずにいけば良いことあるかも。"
  },
  {
    image: "images/suekichi2.png",
    fortune: "末吉",
    description: "もう少しの辛抱が吉と出るでしょう。"
  },
  {
    image: "images/kyo1.png",
    fortune: "凶",
    description: "今日は慎重に行動しましょう。"
  },
  {
    image: "images/kyo2.png",
    fortune: "凶",
    description: "トラブルに注意が必要です。"
  }
];


const languages = [
  "C++", "C#", "PHP", "Javascript", "Python", "go", "Java", "Ruby", "TypeScript"
];

const dbs = ["Oracle Dtabase", "SQL Server", "DB2", "PostgreSQL", "MySQL"];

const editors = ["Emacs", "Vim", "Atom", "nano", "Visual Studio code"];



// ページ読み込み後に実行する
document.addEventListener("DOMContentLoad", () => {
  //1~12の乱数を生成
  const randomIndex = Math.floor(Math.random() * 12);
  const selectedOmikuji = omikujiData[randomIndex];

  //ラッキー言語の選択
  const randomLang = Math.floor(Math.random() * 9);
  //ラッキーDBの選択
  const randomDB = Math.floor(Math.random() * 6);
  //ラッキーエディターの選択
  const randomEditor = Math.floor(Math.random() * 6);


  //HTMLにデータを反映
  document.getElementById("omikuji-image").src = selectedOmikuji.image;
  document.getElementById("omikuji-fortune").innerText = selectedOmikuji.fortune;
  document.getElementById("omikuji-description".innerText) = selectedOmikuji.description;
  document.getElementById("omikuji-lucky-lang").innerText = languages[randomLang];
  document.getElementById("omikuji-lucky-db").innerText = dbs[randomDB];
  document.getElementById("omikuji-lucky-editor").innerText = editors[randomEditor];


  // もう一度おみくじを引くボタンを押したらトップページに遷移するように
  const reDrawButton = document.getElementById("re-draw-omikuji");
  reDrawButton.addEventListener("click", () => {
    window.location.href = "omikuji-page.html";
  })
});
