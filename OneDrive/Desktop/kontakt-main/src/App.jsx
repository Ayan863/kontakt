// import Slider from "./assets/Components/Other/slider/Slider"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/Components/Pages/Home"
import Kampaniya from "./assets/Components/Main/Kampaniya/Kampaniya"
import Magazalar from "./assets/Components/Main/Magazalar/Magazalar"
import Koporativ from "./assets/Components/Main/koporativ/Koporativ"
import Smartfon from "./assets/Components/Pages/smartfon&aksesuar/Smartfon"
import SmartQadjetler from "./assets/Components/Pages/smartQadjetler/SmartQadjetler"

import Odenis from "./assets/Components/Main/odenis/Odenis"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/kampaniyalar" element={<Kampaniya/>} />
      <Route path="/magazalar" element={<Magazalar/>} />
      <Route path="/korporativ" element={<Koporativ/>} />
      <Route path="/odenish" element={<Odenis/>} />
      <Route path="/smartfon" element={<Smartfon/>}/>
      <Route path="/smartQadjetler" element={<SmartQadjetler/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
