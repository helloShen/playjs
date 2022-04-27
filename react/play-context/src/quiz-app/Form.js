/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [answer, setAnswer] = useState('');
  // waiting, submitting, success, error
  const [status, setStatus] = useState('waiting');

  // mock net connection delay
  const verifyAnswer = (answer) => {
    return new Promise((resolve, reject) => {
      const isCorrect = answer.toLowerCase() === 'lima';
      setTimeout(() => {
        if (isCorrect) {
          resolve();
        } else {
          reject();
        }
      }, 1500);
    });
  }

  const submitAnswer = async () => {
    setStatus('submitting');
    try {
      await verifyAnswer(answer);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
    setAnswer('');
  }

  if (status === 'success') {
    return <div>Bravo!</div>;
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form>
        <textarea
          value={answer}
          disabled={status === "submitting"}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <br />
        <button
          disabled={answer.length === 0 || status === "submitting"}
          onClick={submitAnswer}
        >Submit</button>
        {(status === "error") && (
          <p className="error">
            Good guess but a wrong answer. Try again!
          </p>
        )}
      </form>
    </>
  );
}

export default Form;