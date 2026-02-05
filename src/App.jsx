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
  },
  {
    question: "What is the capital city of Japan?",
    options: [
      { id: 'Seoul' },
      { id: 'Beijing' },
      { id: 'Bangkok' },
      { id: 'Tokyo' }
    ],
    answer: "Tokyo"
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      { id: 'Oxygen' },
      { id: 'Nitrogen' },
      { id: 'Carbon Dioxide' },
      { id: 'Argon' }
    ],
    answer: "Nitrogen"
  },
  {
    question: "How many continents are there on Earth?",
    options: [
      { id: 'Five' },
      { id: 'Six' },
      { id: 'Seven' },
      { id: 'Eight' }
    ],
    answer: "Seven"
  },
  {
    question: "Which element has the atomic number 1?",
    options: [
      { id: 'Helium' },
      { id: 'Oxygen' },
      { id: 'Hydrogen' },
      { id: 'Carbon' }
    ],
    answer: "Hydrogen"
  },
  {
    question: "What is the smallest prime number?",
    options: [
      { id: '0' },
      { id: '1' },
      { id: '2' },
      { id: '3' }
    ],
    answer: "2"
  },
  {
    question: "Which ocean is the largest in the world?",
    options: [
      { id: 'Atlantic Ocean' },
      { id: 'Indian Ocean' },
      { id: 'Arctic Ocean' },
      { id: 'Pacific Ocean' }
    ],
    answer: "Pacific Ocean"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { id: 'Vincent van Gogh' },
      { id: 'Leonardo da Vinci' },
      { id: 'Pablo Picasso' },
      { id: 'Claude Monet' }
    ],
    answer: "Leonardo da Vinci"
  }
];



function App() {

  const [starting, setStarting] = useState(1);
  const[select,setSelect]=useState();
  const [array,setArray]=useState([]);
  console.log(starting)
  console.log(array)

  const handleNext=()=>{

  setArray((e)=>[...e,select]);
  setSelect();
  setStarting(starting+1)
}

  if(starting >= api.length){
    return(
      <div className='main'>
      <div className='heading'>
        <h1>Quiz Application</h1>
      </div>

      <div className='quiz_arena'>
      <h1>Result</h1>  
      </div>
      
      </div>
    )
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
            <div id='options' onClick={()=>{setSelect(option.id)}}>
              <p key={index}>{option.id}</p>
              </div>
          ))
          }
        <button id='options' 
        onClick={()=>{handleNext()}}
        >Next</button>
        </div>
      </div>
  )
}

export default App
