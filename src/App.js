import React from "react"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
import Header from "./components/header"
import Home from "./components/home"
import Menu from "./components/menu"
import Description from "./components/description"
import Footer from "./components/footer"

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path='/' component={() => <Home />}/>
              <Route exact path='/menu' component={() => <Menu />}/>
              <Route exact path='/menu/:id' component={() => <Description />}/>
          </Switch>
          <Footer/>
      </Router>
  )
}

export default App
