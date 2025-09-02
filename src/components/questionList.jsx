import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../features/questionSlice";
import { gameOver, increaseScore, rightAnswer } from "../features/tallySlice";
import ToggleButton from "../ui/ToggleButton";

const QuestionsList = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.questions);
  const [asked, setAsked] = useState([]);
  const [currQues, setCurrQues] = useState(null);
  const [currAns, setCurrAns] = useState(null);

  // console.log(currAns)
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuestions());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (items.length > 0 && !currQues) {
      pickQues();
    }
  }, [items]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  function pickQues() {
    if (asked.length >= 10) {
      dispatch(gameOver());
    }

    let randQues;
    do {
      const randInd = Math.floor(Math.random() * items.length);
      randQues = items[randInd];
    } while (asked.includes(randQues.id));
    setAsked([...asked, randQues.id]);
    console.log(asked)
    setCurrQues(randQues);
    setCurrAns(null);
  }

  function handleNext() {
    if (currAns !== null) {
      // console.log(currAns);
      if (currQues.answer === currAns) {
        dispatch(increaseScore());
      }
      dispatch(rightAnswer(currAns));
    }
    pickQues();
  }
  return (
    <>
      <a className="no-underline" href="">
        <h1 className="text-4xl font-bold font-anton uppercase absolute top-4 left-4">
          Dilemma
        </h1>
      </a>

      <div className="p-10 bg-amber-100 rounded-xl w-1/2 h-1/2 font-oswald">
        <ul>
          {currQues && (
            <li className="text-2xl p-6 flex items-center justify-around flex-col">
              {currQues.question}

              <div className="flex w-2/3 mt-14 justify-around items-center">
                <ToggleButton id={currQues.id} onSelect={setCurrAns} />
              </div>

              <button
                disabled={currAns === null}
                className={`px-3 py-2 text-4xl font-bebasneue font-bold mt-14 rounded-lg bg-amber-800 text-white ${
                  currAns === null ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleNext}
              >
                NEXT
              </button>
            </li>
          )}
        </ul>

      </div>
    </>
  );
};

export default QuestionsList;
