import { useEffect, useState } from 'react'
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

  const [starting, setStarting] = useState(()=>{
    return Number(localStorage.getItem("starting")) || 0;
  });
  const [select, setSelect] = useState(null);
  const [array, setArray] = useState(()=>{
    const save = localStorage.getItem("array");
    return save ? JSON.parse(save) : [];
  });
  const [count, setCount] = useState(()=>{
    return Number(localStorage.getItem('count')) || 0;
  });
  const [disable, setDisable] = useState(false);
  

  useEffect(()=>{
    localStorage.setItem("starting",starting)
  },[starting])

  useEffect(()=>{
    localStorage.setItem("array",JSON.stringify(array))
  },[array])

  useEffect(()=>{
    localStorage.setItem("count",count)
  },[count])

  const handleNext = () => {

    if (!select) return;

    if (select === api[starting].answer) {
      setCount(prev => prev + 1);
    }

    setArray(prev => [...prev, {
      question: api[starting].question,
      select: select,
      check: select === api[starting].answer
    }
    ]);
    setSelect(null);
    setDisable(false);
    setStarting(prev => prev + 1);
  };

  

  if (starting >= api.length) {
  return (
    <div className="main">
      <div className="heading">
        <h1>Quiz Application</h1>
      </div>

      <div className="quiz_result">
        <h2>Your Score: {count}</h2>

        <div id="result">
          {array.map((item, index) => (
            <p key={index}>
              <strong>{item.question}</strong><br />
              Answer: {item.select}<br />
              {item.check ? "✅ Correct" : "❌ Wrong"}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

console.log(array)
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
