import React from "react";
import "../css/Quiz.css";

export default function Quiz() {
  // use no spaces in the public folder name: public/movies-quiz/welcome.html
  const quizPath = "/movies-quiz/welcome.html";

  return (
    <div className="quiz-root">
      <div className="quiz-wrapper">
        <iframe
          src={quizPath}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Movies Quiz"
        />
      </div>

      {/* fallback message for devices where iframe doesn't load */}
      <div className="quiz-fallback">
        If the quiz doesn't show, open <a href={quizPath}>the quiz in a new tab</a>.
      </div>
    </div>
  );
}
