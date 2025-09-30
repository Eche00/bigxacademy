import { Routes, Route, BrowserRouter } from "react-router-dom"
import Container from "./components/Container"
import Home from "./pages/Home"
import Mentorship from "./pages/Mentorship"
import Signals from "./pages/Signals"
import Courses from "./pages/Courses"
import { Calculate } from "@mui/icons-material"



function App() {
    
  return (
    <div className="   relative w-full overflow-x-hidden" >
      
      
      <BrowserRouter>
        <Routes>
              {/* General Routes */}
             <Route element={<Container/>}>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/mentorship" element={<Mentorship/>}/>
                   <Route path="/signals" element={<Signals/>}/>
                   <Route path="/courses" element={<Courses/>}/>
                   <Route path="/calculator" element={<Calculate/>}/>
             </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App