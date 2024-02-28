import React, { useState } from "react";
import './App.css';

const StartPage = ({ onStart }) => (
  <div className="start">
    <h1> <hr /> Quiz app!! <hr /></h1>
    <button className="start-button" onClick={onStart}>Start</button>
  </div>
);

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currQueIndex, setCurrQueIndex] = useState(0);

  const questionsArr = [
    {
      "question": "What temperature does water boil at?",
      "optionA": "50 degrees Celsius",
      "optionB": "25 degrees Celsius",
      "optionC": "100 degrees Celsius",
      "optionD": "150 degrees Celsius",
      "answer": "100 degrees Celsius"
    },
    {
      "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
      "optionA": "Wole Soyinka",
      "optionB": "William Shakespeare",
      "optionC": "Ngozi Chimamanda Adichie",
      "optionD": "Dan Brown",
      "answer": "William Shakespeare"
    },
    {
      "question": "What did the crocodile swallow in Peter Pan?",
      "optionA": "A Book",
      "optionB": "A Computer",
      "optionC": "A pair of shoes",
      "optionD": "Alarm Clock",
      "answer": "Alarm Clock"
    },
    {
      "question": "Which is the only mammal that can’t jump?",
      "optionA": "Dog",
      "optionB": "Elephant",
      "optionC": "Goat",
      "optionD": "Lion",
      "answer": "Elephant"
    },
    {
      "question": "Who lived at 221B, Baker Street, London?",
      "optionA": "Tony Stark",
      "optionB": "Morgan Freeman",
      "optionC": "Sherlock Holmes",
      "optionD": "Samuel L. Jackson",
      "answer": "Sherlock Holmes"
    },
    {
      "question": "What colour is a panda?",
      "optionA": "Green and Yellow",
      "optionB": "Blue and Red",
      "optionC": "Green and White",
      "optionD": "Black and White",
      "answer": "Black and White"
    },
    {
      "question": "Where is the smallest bone in the human body?",
      "optionA": "The Chest",
      "optionB": "The Ear",
      "optionC": "The Legs",
      "optionD": "The Hands",
      "answer": "The Ear"
    },
    {
      "question": "What does the Roman numeral C represent?",
      "optionA": "100",
      "optionB": "10",
      "optionC": "10,000",
      "optionD": "1,000,000",
      "answer": "100"
    },
    {
      "question": "What takes place in Hong Kong's Happy Valley?",
      "optionA": "Chicken Wrestling",
      "optionB": "Horse racing",
      "optionC": "Street Racing",
      "optionD": "Arm Wrestling",
      "answer": "Horse racing"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "optionA": "Alexander Graham Bell",
      "optionB": "Sir Isaac Newton",
      "optionC": "Leonardo Da Vinci",
      "optionD": "Albert Einstein",
      "answer": "Leonardo Da Vinci"
    },
    {
      "question": "What’s the most important book in the Moslem religion?",
      "optionA": "The Koran",
      "optionB": "The Dictionary",
      "optionC": "The Bible",
      "optionD": "The Chemistry Textbook",
      "answer": "The Koran"
    },
    {
      "question": "What’s the capital of Ethiopia?",
      "optionA": "Cape Town",
      "optionB": "San Francisco",
      "optionC": "Abuja",
      "optionD": "Sydney",
      "answer": "Addis Ababa"
    },
    {
      "question": "How many squares are there on a chess board?",
      "optionA": "128",
      "optionB": "64",
      "optionC": "32",
      "optionD": "256",
      "answer": "64"
    },
    {
      "question": "Who invented the electric light bulb?",
      "optionA": "Tom Cruise",
      "optionB": "Barack Obama",
      "optionC": "Wole Soyinka",
      "optionD": "Thomas Edison",
      "answer": "Thomas Edison"
    },
    {
      "question": "What are the first three words of the bible?",
      "optionA": "be with everyone",
      "optionB": "Again Jesus asked",
      "optionC": "In the beginning",
      "optionD": "At that time",
      "answer": "In the beginning"
    }
  ];

  const handleStart = () => {
    setQuizStarted(true);
  };

  const handlePrevious = () => {
    setCurrQueIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrQueIndex(prevIndex => Math.min(questionsArr.length - 1, prevIndex + 1));
  };

  const handleQuit = () => {
    const quitConfirmation = window.confirm("Are you sure you want to quit?");
    if (quitConfirmation) {
      console.log("I want to quit is being displayed");
    }
  };

  if (!quizStarted) {
    return <StartPage onStart={handleStart} />;
  }

  const currentQuestion = questionsArr[currQueIndex];

  return (
    <>
      <div className="main">
        <h1 className="chan">Questions</h1>
        <p className="question">{currQueIndex + 1} of {questionsArr.length}</p>
        <h3>{currentQuestion.question}</h3>
        <div className="option-body">
          {Object.keys(currentQuestion).filter(key => key.startsWith('option')).map((key, index) => (
            <div key={index} className="options">{currentQuestion[key]}</div>
          ))}
        </div>
        <div className="btn">
          <button className="previous" onClick={handlePrevious}>Previous</button>
          <button className="next" onClick={handleNext}>Next</button>
          <button className="quit" onClick={handleQuit}>Quit</button>
        </div>
      </div>
    </>
  );
};

export default Quiz;