import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { RoutersPages } from "./types/routers"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Profile from "./pages/Profile"

function App() {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path={RoutersPages.HOME} element={<Home/>} />
          <Route path={RoutersPages.ABOUT_US} element={<AboutUs/>} />
          <Route path={RoutersPages.PROFILE} element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
