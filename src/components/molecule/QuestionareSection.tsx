import questionnaireData from "../../data/data.json";
import type { QuestionnaireData } from "../../types/datatypes";

const QuestionnaireSection = () => {
  const data: QuestionnaireData = questionnaireData;

  return (
    <div className="questionare-section">
      <h2>{data.mainTitle}</h2>
      <p className="subtitle">{data.subtitle}</p>
      <div className="question-and-answers-section">
        {data.questions.map((question) => (
          <div key={question.id} className="questions-wrapper">
            {question.title && <h3>{question.title}</h3>}
            <div className="questionare-flex">
              <p
                className="answers-section"
                dangerouslySetInnerHTML={{ __html: question.content }}
              />
              <button>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="12.001" r="2.999"></circle>
                  <circle cx="3" cy="12.001" r="2.999"></circle>
                  <circle cx="21" cy="12.001" r="2.999"></circle>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="call-customer-care-section">
        <h3>{data.helpSection.title}</h3>
        <div className="help-center-btn-wrapper">
          <div className="help-center-btn">{data.helpSection.buttonText}</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireSection;
