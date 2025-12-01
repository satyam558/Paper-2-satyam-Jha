import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Slider from "./components/Slider";
import Categories from "./components/Categories";

function App(){
  return(
    <>
    <Navbar/>
    <Slider/>
    <Categories/>
    </>
  )
}

export default App;