"use client";

import { useMemo, useState } from "react";
import { questions } from "@/lib/questions";
import { languageOptions } from "@/lib/languages";

type AnswerState = {
  text: string;
  videoUrl: string;
  audioUrl: string;
};

const emptyAnswers: AnswerState[] = questions.map(() => ({
  text: "",
  videoUrl: "",
  audioUrl: "",
}));

export default function QuestionFlow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [answers, setAnswers] = useState<AnswerState[]>(emptyAnswers);
  const [submitMessage, setSubmitMessage] = useState("");

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;

  const progressLabel = useMemo(() => {
    return `Question ${currentIndex + 1} / ${questions.length}`;
  }, [currentIndex]);

  function updateAnswer(field: keyof AnswerState, value: string) {
    setAnswers((prev) =>
      prev.map((item, index) =>
        index === currentIndex ? { ...item, [field]: value } : item
      )
    );
    setSubmitMessage("");
  }

  function goNext() {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
      setSubmitMessage("");
    }
  }

  function goBack() {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
      setSubmitMessage("");
    }
  }

  function handleSubmit() {
    setSubmitMessage(
      "Submission placeholder: in the next step, this button will open the Stripe-style payment modal for the $7 submission flow."
    );
  }

  const answeredCount = answers.filter(
    (item) =>
      item.text.trim() || item.videoUrl.trim() || item.audioUrl.trim()
  ).length;

  return (
    <div className="question-flow-card">
      <div className="question-flow-top">
        <div>
          <div className="mini-accent" />
          <p className="question-progress">{progressLabel}</p>
          <h3 className="question-title">{currentQuestion.title}</h3>
        </div>

        <div className="language-select-wrap">
          <label htmlFor="country-language" className="field-label">
            Country / Language
          </label>
          <select
            id="country-language"
            className="select-input"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.country} · {option.language}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="question-meta-row">
        <div className="meta-pill">
          <span className="meta-pill-label">Category</span>
          <span className="meta-pill-value">{currentQuestion.category}</span>
        </div>

        <div className="meta-pill">
          <span className="meta-pill-label">Answered</span>
          <span className="meta-pill-value">
            {answeredCount} / {questions.length}
          </span>
        </div>
      </div>

      <p className="question-description">{currentQuestion.description}</p>

      <div className="answer-layout">
        <div className="answer-main">
          <label htmlFor="answer-text" className="field-label">
            Your written answer
          </label>
          <textarea
            id="answer-text"
            className="textarea-input"
            placeholder="Write honestly. There are no correct answers."
            value={currentAnswer.text}
            onChange={(e) => updateAnswer("text", e.target.value)}
          />

          <div className="answer-helper-links">
            <button type="button" className="inline-link-button">
              Answer as video instead
            </button>
            <button type="button" className="inline-link-button">
              Answer as audio instead
            </button>
          </div>
        </div>

        <div className="answer-side">
          <div className="side-field-card">
            <label htmlFor="video-url" className="field-label">
              Video response link
            </label>
            <input
              id="video-url"
              type="url"
              className="text-input"
              placeholder="Paste a video URL"
              value={currentAnswer.videoUrl}
              onChange={(e) => updateAnswer("videoUrl", e.target.value)}
            />
            <p className="field-note">
              Add a link to a private or public video response.
            </p>
          </div>

          <div className="side-field-card">
            <label htmlFor="audio-url" className="field-label">
              Audio response link
            </label>
            <input
              id="audio-url"
              type="url"
              className="text-input"
              placeholder="Paste an audio URL"
              value={currentAnswer.audioUrl}
              onChange={(e) => updateAnswer("audioUrl", e.target.value)}
            />
            <p className="field-note">
              Add a link to a voice memo or uploaded audio response.
            </p>
          </div>
        </div>
      </div>

      <div className="question-nav-row">
        <button
          type="button"
          className="btn btn-light"
          onClick={goBack}
          disabled={isFirst}
        >
          Previous
        </button>

        {!isLast ? (
          <button type="button" className="btn btn-solid" onClick={goNext}>
            Next Question
          </button>
        ) : (
          <button type="button" className="btn btn-solid" onClick={handleSubmit}>
            Submit Answers
          </button>
        )}
      </div>

      {submitMessage ? (
        <div className="submit-placeholder-note">{submitMessage}</div>
      ) : null}
    </div>
  );
}
