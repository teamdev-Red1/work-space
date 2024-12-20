// 0~numberまでの乱数を整数で生成
function randomGenerator(number) {
  randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
}

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
    description: "GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの OSS 開発は安泰です!!"
  },
  {
    image: "images/pose_dance_ukareru_woman.png",
    fortune: "吉",
    description: "リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。"
  },
  {
    image: "images/pose_dance_ukareru_man.png",
    fortune: "吉",
    description: "リファクタリングに成功してプログラムが爆速に!!サクサク動いて気持ちいいーーー!!"
  },
  {
    image: "images/pose_genki09_businessman.png",
    fortune: "中吉",
    description: "リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。"
  },
  {
    image: "images/pose_anshin_woman.png",
    fortune: "中吉",
    description: "git でコンフリクトが発生します!! が、今回は上手く解消できるでしょう。今回は・・・"
  },
  {
    image: "images/businessman1_nayami.png",
    fortune: "小吉",
    description: "リリース前のソフトウェアにバグが見つかります。貴方のお勤め先が上流の企業ならばそれほど大きな問題にはなりませんが、三次請けよりも下流の場合はご愁傷様でございます。"
  },
  {
    image: "images/sweets_wataame_girl2.png",
    fortune: "小吉",
    description: "開発の要件定義が綿飴のようにふわっふわです。手遅れにならないうちに手を打っておくのが吉。"
  },
  {
    image: "images/sick_kaoiro_man.png",
    fortune: "末吉",
    description: "リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。"
  },
  {
    image: "images/kaji_kagamu_woman.png",
    fortune: "末吉",
    description: "関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。"
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
  const randomIndex = randomGenerator(12);
  const selectedOmikuji = omikujiData[randomIndex];

  //ラッキー言語の選択
  const randomLang = randomGenerator(9);
  //ラッキーDBの選択
  const randomDB = randomGenerator(5);
  //ラッキーエディターの選択
  const randomEditor = randomGenerator(5);

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
    //トップページに遷移する処理
    //window.location.href = "index.html"; 
  });
});
