const defaultDataset = {
   "init": {
       answers: [
           {content: "やっぱ激しめのやつかな！", nextId: "intense"},
           {content: "バラード系です", nextId: "ballad"},
           {content: "特に思い浮かばない", nextId: "nothing"},
           {content: "じいやはどういうのが好きなの？", nextId: "recommend"},
       ],
       question: "私はUVERworld好きのうたたねじいやじゃ。どんなメロディがお好みかな？",
   },

   "init2": {
        answers: [
            {content: "やっぱ激しめのやつかな！", nextId: "intense"},
            {content: "バラード系です", nextId: "ballad"},
            {content: "特に思い浮かばない", nextId: "nothing"},
            {content: "じいやはどういうのが好きなの？", nextId: "recommend"},
        ],
        question: "どんなメロディが良いかの？",
    },

   "intense": {
       answers: [
           {content: "好きだよ！なんかかっけー！", nextId: "https://www.youtube.com/watch?v=2QP7MybrpGw"},
           {content: "いきなりなんだよ。別にかな", nextId: "https://www.youtube.com/watch?v=CByzFZftA_s"},
           {content: "とりあえず頭ふりて～", nextId: "https://www.youtube.com/watch?v=7Pex6dyMBj0"},
           {content: "最初の質問に戻る", nextId: "init2"},
       ],
       question: "引き金は好きかの？",
   },

   "ballad": {
       answers: [
        {content: "何一つ形の見えないものは愛なんかじゃない", nextId: "https://www.youtube.com/watch?v=HqEW4B3xErQ"},
        {content: "幸せすぎて苦しいよ", nextId: "https://www.youtube.com/watch?v=Rbe79PbcYKg"},
        {content: "永遠なんてこの世にはない", nextId: "https://www.youtube.com/watch?v=pOFLfJA5xjM"},
        {content: "最初の質問に戻る", nextId: "init2"},
       ],
       question: "この中で、どの言葉がお好きかの？",
   },

   "nothing": {
       answers: [
           {content: "ドラマの曲だよね？", nextId: "https://www.youtube.com/watch?v=KYwX6nYFTA0"},
           {content: "なつかしい", nextId: "https://www.youtube.com/watch?v=t6E6_kxFmso"},
           {content: "よくカラオケで歌っている人いたかも", nextId: "https://www.youtube.com/watch?v=0TbcbnGe81g"},
           {content: "ところで、じいやにモノ申す", nextId: "contact"},
           {content: "最初の質問に戻る", nextId: "init2"},
       ],
       question: "有名な曲だから、聴いたことがあるやもしれぬな。",
   },
   "recommend": {
       answers: [
        {content: "しっとりなら私も好き", nextId: "https://www.youtube.com/watch?v=vYYCX6ptwFo"},
        {content: "切ないラブソングとか良い", nextId: "https://www.youtube.com/watch?v=78lKhZfX38Q"},
        {content: "ところで、じいや最近物覚え悪くない？", nextId: "https://www.youtube.com/watch?v=qimOrXfwNQY"},
        {content: "涙出ちゃう", nextId: "https://www.youtube.com/watch?v=czRZ5wFWydA"},
        {content: "わーお！", nextId: "https://www.youtube.com/watch?v=L-QXTyHMqJM"},
        {content: "最初の質問に戻る", nextId: "init2"},
       ],
       question: "わしのおすすめか？激しめも好きじゃが、わしは割としっとりよりじゃな。",
   },
}

export default defaultDataset
