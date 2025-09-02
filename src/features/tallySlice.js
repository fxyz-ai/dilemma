import { createSlice } from "@reduxjs/toolkit";

const tallySlice=createSlice({
    name:"tally",
    initialState:{
        score:0,
        answer:true,
        over:false
    },
    reducers:{
        increaseScore:state=>{
            state.score += 1;
            // console.log("state increase")
        },
        resetScore:state=>{
            state.score = 0;
        },
        rightAnswer:(state,action)=>{
            state.answer=action.payload  
            // console.log("reducer to", action.payload)
        },
        gameOver:state=>{
            state.over=true
        },
        gameStart:state=>{
            state.over=false
        }
    }
})

export const {increaseScore,resetScore,rightAnswer,gameOver,gameStart}=tallySlice.actions
export default tallySlice.reducer