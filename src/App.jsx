import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import SectionSobre from './components/Sections/SectionSobre'
import SectionProjetos from './components/Sections/SectionProjetos'
import SectionContato from './components/Sections/SectionContato'
import AddProject from './pages/AddProject'

function App() {

  return (

    <BrowserRouter>
      <div className='particulas'></div>
      <NavBar />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Main />
              <SectionSobre />
              <SectionProjetos />
              <SectionContato />
            </>
          }
        />
        <Route path='/AddProject' element={<AddProject />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
