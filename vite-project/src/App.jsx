
import React ,{useState,useEffect} from "react"
import Main from './components/Main'
import Loader from './components/Loader'
import Contact from "./components/Contact"
import About from "./components/About"
function App() {
  const [load,setLoad]=useState(false);

  useEffect(()=>{
    setLoad(true)
    setTimeout(()=>{
    setLoad(false) 
    },6000)
  },[])

  return (
    <div className="App] text-white ">
  { load ?
      <Loader 
      load={load}
      setLoad={setLoad}
      />:
     <>
     <Main />
    <About />
    <Contact />
     </>}
    </div>
  )
}

export default App
