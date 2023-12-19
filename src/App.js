import { Route, Routes } from "react-router-dom"
import Header from "./Components/Constants-C/1-Header/Header"
import Footer from "./Components/Constants-C/4-Footer/Footer"
import HomePage from "./Components/Pages/1-Home-Page/HomePage"
import About from "./Components/Pages/2-About-Page/About"
import Services from "./Components/Pages/3-Services-Page/Services"
import MovieDetails from "./Components/Pages/1-Home-Page/Product-Details/MovieDetails"




function App() {
  return (
    <div className="Apps">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/movie/:id' element={<MovieDetails />}  />

        <Route path="about" element={<About />}/>
        <Route path="services" element={<Services />}/>
      </Routes>

      <Footer />

      

      

    </div>
  );
}

export default App;
