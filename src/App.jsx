import { BrowserRouter as Navegador, Routes, Route  } from 'react-router-dom'
import Menu from './components/menu/Menu'
import Home from './components/Home/home'


function App() {
  return (
    <Navegador>
        <Menu />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
    </Navegador>
  )
}

export default App
