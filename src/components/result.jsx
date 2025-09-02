import { useSelector } from "react-redux";
import { gameStart } from "../features/tallySlice";
import { useDispatch } from "react-redux";
import { resetScore } from "../features/tallySlice";

export const Result = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.tally);

  return (
    <div className="w-full h-screen flex flex-col bg-orange-400 items-center justify-center">
      <a className="no-underline" href="">
        <h1 className="text-4xl font-bold font-anton uppercase absolute top-4 left-4">
          Dilemma
        </h1>
      </a>
      <h1>
        <span className="text-5xl font-oswald">You answered </span>
        <span className="font-bold font-poppins text-3xl">
          <span className="text-9xl"> {score}</span>/10
        </span>
        <span className="text-5xl font-oswald"> correct</span>
      </h1>

      <button
        onClick={() => {
          dispatch(gameStart());
          dispatch(resetScore());
        }}
        className="px-3 py-2 mt-20 font-bold font-bebasneue uppercase text-4xl text-orange-50 rounded-lg bg-amber-900"
      >
        play again
      </button>
    </div>
  );
};
