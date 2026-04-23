import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Navibar from './component.jsx'
import {Home ,Color} from './pages/home.jsx'
import About from './pages/about.jsx'
import Form from './pages/form.jsx'
import ListGroup from './pages/ListGroup.jsx'
import './css/app.css'



function App() {

  return (
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/color' element={<Color/>} />
          <Route path='/form' element={<Form />} />
          <Route path='/listgroup' element={<ListGroup />} />
          
  
        </Routes>
      </BrowserRouter>
  )
}

export default App;
