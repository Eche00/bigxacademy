import About from "./homecomponents/About"
import Hero from "./homecomponents/Hero"
import Services from "./homecomponents/Services"
import Reviews from "./homecomponents/Reviews"
import Contact from "./homecomponents/Contact"

function Home() {
  return (
       <div>
        <Hero/>
        <About/>
        <Services/>
        <Reviews/>
        <Contact/>
       </div>
      
  )
}

export default Home