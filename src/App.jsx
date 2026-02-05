import { useState } from 'react'
import './App.css'

const api = [
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { id: 'Earth' },
      { id: 'Jupiter' },
      { id: 'Saturn' },
      { id: 'Neptune' }
    ],
    answer: "Jupiter"
  },
  {
    question: "What is the chemical symbol for water?",
    options: [
      { id: 'CO2' },
      { id: 'O2' },
      { id: 'H2O' },
      { id: 'NaCl' }
    ],
    answer: "H2O"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: [
      { id: 'Gold' },
      { id: 'Iron' },
      { id: 'Diamond' },
      { id: 'Quartz' }
    ],
    answer: "Diamond"
  }
];

function App() {

  const [starting, setStarting] = useState(0);
  const [select, setSelect] = useState(null);
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleNext = () => {

    if (!select) return;

    if (select === api[starting].answer) {
      setCount(prev => prev + 1);
    }

    setArray(prev => [...prev, select]);

    setSelect(null);
    setDisable(false);
    setStarting(prev => prev + 1);
  };

  /* RESULT PAGE */

  if (starting >= api.length) {
    return (
      <div className='main'>
        <div className='heading'>
          <h1>Quiz Application</h1>
        </div>

        <div className='quiz_result'>
          <h1>Your Score: {count}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='main'>
      <div className='heading'>
        <h1>Quiz Application</h1>
      </div>

      <div className='quiz_arena'>

        <div id='questions'>
          <h1>{api[starting].question}</h1>
        </div>

        {api[starting].options.map((option, index) => (
          <div
            key={index}
            id="options"
            style={{
              pointerEvents: disable ? "none" : "auto",
              opacity: disable ? 0.6 : 1,
              cursor: "pointer",
              border: select === option.id ? "2px solid green" : "1px solid gray",
              padding: "10px",
              margin: "6px",
              borderRadius: "8px",
              transition: "all 0.3s ease"
            }}
            onClick={() => {
              if (!disable) {
                setSelect(option.id);
                setDisable(true);
              }
            }}
          >
            {option.id}
          </div>
        ))}

        <button
          id='options'
          disabled={!select}
          onClick={handleNext}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App;
