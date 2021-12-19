import Navbar from './components/Navbar'
import AstroContainer from './components/AstroContainer'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="row flex-center heading">
        <div className="col">
          <p>AstroTeller</p>
        </div>
        <div className="col-12 col">
          <AstroContainer />
        </div>
      </div>
    </Fragment>
  )
}

export default App
