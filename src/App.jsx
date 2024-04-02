import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Intro from './components/Intro2';
import Intro3 from './components/Intro3';
import Instruction from './components/Instructions';

import Activity from './components/Activity';

function App() {
  const [indexPage, setIndexPage] = useState(0);

  const goToNextPage = () => {
    setIndexPage(prev => prev + 1)
  }

  const goToPrevPage = () => {
    setIndexPage(prev => prev - 1)
  }
  const Data = [
    { page: 0, element: <Home goToNextPage={goToNextPage} /> },
    { page: 1, element: <Intro goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} /> },
    { page: 2, element: <Intro3 goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} /> },
    { page: 3, element: <Instruction goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} /> },
    { page: 3, element: <Activity goToPrevPage={goToPrevPage} /> },
  ]


  return (
    <div className='app'>
      {Data[indexPage].element}
    </div>
  )
}

export default App
