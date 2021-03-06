import React from 'react'
import { Route } from 'react-router-dom'
import { Picker } from '../views/pages'

const routes = () => { 
  return (
    <div className="chart col-xs-9">
      <Route exact path="/" component={ Picker } />
    </div>
  )
}


export default routes()

// For reference - here's how to deep link
// <Route exact path="/d3" component={ D3Chart } /> 
// <Route path="/d3/:id/:query" component={ D3Chart } /> 
// <Route path="/svg" component={ SvgChart } />