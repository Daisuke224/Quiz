const quiz = [
  {
    question: "ドラえもんに登場する「のび太」の苗字は？",
    answers: ["みなもと", "たじま", "のび", "ほねかわ"],
    correct: "のび",
  },
  {
    question:
      "ドラえもんの好物は、「どらやき」、では妹のドラミちゃんの好物は？",
    answers: ["カステラ", "タジパン", "ラーメン", "メロンパン"],
    correct: "メロンパン",
  },
  {
    question: "ドラえもんに登場する「ジャイアン」の苗字は？",
    answers: ["いしかわ", "いえない", "いしばし", "いしわたり"],
    correct: "いしばし",
  },
  {
    question: "香港へ旅行に行った時、僕がいしばし君に蹴られた場所といえば？",
    answers: ["寺院", "街中", "タクシー", "玄関"],
    correct: "玄関",
  },
  {
    question: "では、東京で会った時、彼は帰ろうとした僕を何にぶつけた？",
    answers: ["ビル", "電車", "車", "訴えてやる"],
    correct: "電車",
  },
  {
    question:
      "トロッコ問題。一人を犠牲にすれば、線路上の5人は助かります。さてどうする？",
    answers: ["何もしない", "5人を助ける", "サイコパス", "サイコパス"],
    correct: "サイコパス",
  },
  {
    question: "ロシア発、「空飛ぶタクシー」は何を元に作られてる？",
    answers: ["青いボート", "青いボート", "ドローン", "青いボート"],
    correct: "ドローン",
  },
  {
    question: "アメリカ大統領がバイデン氏になって大きく変わったのは？",
    answers: [
      "差別問題",
      "難民問題",
      "外交問題",
      "なかしまとアメリカで仲良くできるようになった",
    ],
    correct: "なかしまとアメリカで仲良くできるようになった",
  },
  {
    question:
      "飛行機の中で食べるように作られた野菜があります。その野菜はどれでしょう？",
    answers: [
      "パプリカ",
      "ミニトマト",
      "ズッキーニ",
      "なぜか飛行機の中で英語を使うと怒られる",
    ],
    correct: "ミニトマト",
  },
  {
    question: "友情クイズ、時間の無駄だった？",
    answers: ["はい", "いいえ", "むだだ", "もっとだ"],
    correct: "もっとだ",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  // 回答にコメントを付与
  if (e.target.textContent === "たじま") {
    window.alert("たじまをもう選んじゃった？");
  }
  if (e.target.textContent === "タジパン") {
    window.alert("タジパンってｗｗｗ");
  }
  if (e.target.textContent === "サイコパス") {
    window.alert("こわっ汗");
  }
  if (e.target.textContent === "青いボート") {
    window.alert("懐かしい！");
  }
  if (e.target.textContent === "なぜか飛行機の中で英語を使うと怒られる") {
    window.alert("これは滅茶苦茶怒られるから気を付けて！");
  }
  // 正解、不正解の挙動
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("残念..不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあれはこちらを実行
    setupQuiz();
  } else {
    //問題がもうなければこちらを実行
    window.alert(
      "おつかれさま！あなたの友情度は" +
        score * 10 +
        "％" +
        // "/" +
        // quizLength +
        "です！" +
        "100％目指してがんばってね！" +
        "(やり直しは更新ボタン)"
    );
  }
};
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", function (e) {
    clickHandler(e);
  });
  handlerIndex++;
}
