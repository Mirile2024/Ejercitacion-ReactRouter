import { Route, Routes } from "react-router-dom"
import Cocktail from "./Cocktail"
import Home from "./Home"
import Contacto from "./contacto"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/cocktail/:id' element={<Cocktail />} />
      </Routes>
    </div>
  )
}

export default App
