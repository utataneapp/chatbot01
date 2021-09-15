import React, { useCallback, useEffect, useState } from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components";
import FormDialog from "./components/Forms/FormDialog";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [open, setOpen] = useState(false);
  const dataset = defaultDataset;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  //questionをchatsに追加し、answersをセットする
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: "question",
    });
    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  };

  //answerが選択されたら、そのanswerをchatsに追加し、displayNextQuestionIdに続く
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "contact":
        handleClickOpen();
        break;

      case /^https:*/.test(nextQuestionId): {
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;
      }

      default: {
        addChats({
          text: selectedAnswer,
          type: "answer",
        });

        setTimeout(
          () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
          1000
        );
        break;
      }
    }
  };

  const addChats = (chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  // componentDidMount
  useEffect(() => {
    displayNextQuestion(currentId, dataset[currentId]);
  }, []);

  useEffect(() => {
    const scrollarea = document.getElementById("scroll-area");
    if (scrollarea) {
      scrollarea.scrollTop = scrollarea.scrollHeight;
    }
  });

  //ChatsとAnswersListにpropsを渡す
  return (
    <div>
      <section className="c-section">
        <div className="c-box">
          <Chats chats={chats} />
          <AnswersList answers={answers} select={selectAnswer} />
          <FormDialog
            open={open}
            handleClose={handleClose}
            handleClickOpen={handleClickOpen}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
