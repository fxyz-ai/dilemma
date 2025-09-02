import React, { useState } from "react";
import QuestionsList from "./components/questionList";
import { useSelector } from "react-redux";
import { Result } from "./components/result";

function App() {
  const [start, setStart] = useState(false);
  const {over}=useSelector(state=>state.tally)

  return (
    <>
      {!over?(<div className="w-full h-screen flex flex-col bg-orange-400 items-center justify-center">
        {start || (
          <h1 className="text-8xl font-bold font-anton uppercase">
            Dilemma
          </h1>
        )}
        {start ? (
          <QuestionsList />
        ) : (
          <button
            onClick={() => setStart((e) => !e)}
            className="px-3 py-2 mt-20 font-bold font-bebasneue text-4xl text-orange-50 rounded-lg bg-amber-900"
          >
            START
          </button>
        )}
      </div>)
      :(<Result/>)}
    </>
  );
}

export default App;
