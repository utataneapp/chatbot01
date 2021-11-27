const defaultDataset = {
  init: {
    answers: [
      { content: "やっぱ激しめのやつかな", nextId: "intense" },
      { content: "バラード系です", nextId: "ballad" },
      { content: "特に思い浮かばない", nextId: "nothing" },
      { content: "じいやはどういうのが好みなの？", nextId: "recommend" },
    ],
    question:
      "私はUVERworld好きのうたたねじいやじゃ。どんなメロディがお好みかな？",
  },

  init2: {
    answers: [
      { content: "やっぱ激しめのやつかな", nextId: "intense" },
      { content: "バラード系です", nextId: "ballad" },
      { content: "特に思い浮かばない", nextId: "nothing" },
      { content: "じいやはどういうのが好みなの？", nextId: "recommend" },
    ],
    question: "どんなメロディが良いかの？",
  },

  intense: {
    answers: [
      {
        content: "好きだよ！",
        // 公式:7thTrigger
        nextId: "https://www.youtube.com/watch?v=FAU7NyiqwQY",
      },
      {
        content: "引き金？とりまテンアゲ上等",
        // 非公式:スパルタ
        nextId: "https://www.youtube.com/watch?v=CByzFZftA_s",
      },
      {
        content: "本気の一体感求めてただろうがよ！？",
        // 非公式:GROOVY GROOVY GROOVY
        nextId: "https://www.youtube.com/watch?v=qhF3YJklVxk",
      },
      { content: "最初の質問に戻る", nextId: "init2" },
    ],
    question: "引き金は好きかの？",
  },

  ballad: {
    answers: [
      {
        content: "何一つ形の無い見えないものは愛なんかじゃない",
        // 非公式:体温
        nextId: "https://www.youtube.com/watch?v=S81QeKFBfbg",
      },
      {
        content: "幸せすぎて苦しいよ",
        // 非公式：美影意志
        nextId: "https://www.youtube.com/watch?v=Rbe79PbcYKg",
      },
      {
        // 非公式；マダラ蝶
        content: "永遠なんてこの世にはない",
        nextId: "https://www.youtube.com/watch?v=pOFLfJA5xjM",
      },
      { content: "最初の質問に戻る", nextId: "init2" },
    ],
    question: "この中で、どの言葉がお好きかの？",
  },

  nothing: {
    answers: [
      {
        content: "この歌聴いたことあるよ、じいじ",
        // 公式:THE OVER
        nextId: "https://www.youtube.com/watch?v=KYwX6nYFTA0",
      },
      {
        content: "なつかしい！",
        // 非公式:SHAMROCK
        nextId: "https://www.youtube.com/watch?v=t6E6_kxFmso",
      },
      {
        content: "よくカラオケで歌っている人いたな",
        // 公式：君の好きなうた
        nextId: "https://www.youtube.com/watch?v=_F6iL239Sac",
      },
      { content: "じいやにモノ申したい", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init2" },
    ],
    question: "有名な曲だから、聴いたことがあるやもしれぬな。",
  },
  recommend: {
    answers: [
      {
        content: "これ、、、私も好き",
        // 非公式：心とココロ
        nextId: "https://www.youtube.com/watch?v=vYYCX6ptwFo",
      },
      {
        content: "しゃれおつすぎひん？",
        // 公式；stay on
        nextId: "https://www.youtube.com/watch?v=3ze50O1sCto",
      },
      {
        content: "もはやドラマ",
        // 公式；ほんの少し
        nextId: "https://www.youtube.com/watch?v=tOFWZpwLhds",
      },
      {
        content: "てか、じいや最近物覚え悪くない？",
        // 非公式；Forget
        nextId: "https://www.youtube.com/watch?v=qimOrXfwNQY",
      },
      {
        content: "ライブ最高！！！",
        // 公式：ライブ（Touch offなど）
        nextId: "https://www.youtube.com/watch?v=F-2qZYg0RXo",
      },

      { content: "最初の質問に戻る", nextId: "init2" },
    ],
    question: "わしのおすすめか？これじゃこれじゃ。",
  },
};

export default defaultDataset;
