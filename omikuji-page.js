
//おみくじの種類を全て記述
const omikujiData = [
  {
    image: "images/dance_yorokobi_mai_woman.png",
    fortune: "大吉",
    description: "リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気付かないでしょう。見なかったことにするのが吉。",
  },
  {
    image: "images/pose_genki09_businessman.png",
    fortune: "大吉",
    description: ""
  },
  {
    image: "",
    fortune: "吉",
    description: ""
  },
  {
    image: "",
    fortune: "吉",
    description: ""
  },
  {
    image: "",
    fortune: "中吉",
    description: ""
  },
  {
    image: "",
    fortune: "中吉",
    description: ""
  },
  {
    image: "",
    fortune: "小吉",
    description: ""
  },
  {
    image: "",
    fortune: "小吉",
    description: ""
  },
  {
    image: "",
    fortune: "末吉",
    description: ""
  },
  {
    image: "",
    fortune: "末吉",
    description: ""
  },
  {
    image: "images/sick_kaoiro_man.png",
    fortune: "凶",
    description: "リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。"
  },
  {
    image: "images/food_spaghetti_neapolitan.png",
    fortune: "凶",
    description: "前任者から引き継いだコードがスパゲティ状態です。残念ながらあなたの力ではどうにもならないので、せめて自分はこんなコードを書かないように今後の糧にしましょう。"
  }
];


const languages = [
  "C++", "C#", "PHP", "Javascript", "Python", "go", "Java", "Ruby", "TypeScript"
];

const dbs = ["Oracle Database", "SQL Server", "DB2", "PostgreSQL", "MySQL"];

const editors = ["Emacs", "Vim", "Atom", "nano", "Visual Studio Code"];



// ページ読み込み後に実行する
document.addEventListener("DOMContentLoaded", () => {
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
  document.getElementById("omikuji-description").innerText = selectedOmikuji.description;
  document.getElementById("omikuji-lucky-lang").innerText = languages[randomLang];
  document.getElementById("omikuji-lucky-db").innerText = dbs[randomDB];
  document.getElementById("omikuji-lucky-editor").innerText = editors[randomEditor];


  // もう一度おみくじを引くボタンを押したらトップページに遷移するように
  const reDrawButton = document.getElementById("re-draw-omikuji");
  reDrawButton.addEventListener("click", () => {
    location.reload();
  });
});
