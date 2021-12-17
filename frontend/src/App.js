import React from "react"
import {Container} from 'react-bootstrap'
import Header from "./Components/Header" //we do not put curly braces becasue we have defined them as defaults when we exported them
import Footer from "./Components/Footer"
import homescreen from "./screens/homescreen"
//we do not put curly braces becasue we have defined them as defaults when we exported them


function App() {
  return (
    <>
          <Header />
         <main className= 'py-3'>
              <Container>

                 <homescreen/>    

               </Container>
         </main>
         <Footer />
    </>
  )
}

export default App
//// offofofofofofff
