import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contact'
import Notfonund from './components/NotFound'

import './App.css'

const App = () => (
  <div className="bgcontainer">
    <Header />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contacts} />
      <Route component={Notfonund} />
    </Switch>
  </div>
)

export default App
