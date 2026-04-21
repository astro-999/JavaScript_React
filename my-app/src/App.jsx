import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Navibar from './component.jsx'
import {Home ,Color} from './home.jsx'
import About from './about.jsx'
import Form from './form.jsx'

function App() {

  return (
      <BrowserRouter>
        <Navibar/>
        {/* <FavouriteColor /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/color' element={<Color/>} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
