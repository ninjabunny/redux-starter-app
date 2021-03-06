import actions from './actions'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchData = actions.fetchData

export const fetchDataFromApi = (url) => (dispatch, getState) => { 
  console.log('Operations: Begin fetch...')
  fetch(url)
    .then((response) => {
      if(response.ok) {
        console.log('Operations: Fetch succeeded')
        return response.json()
      }
      throw new Error('Network response was not ok.')
    }).then((data) => {
      dispatch(fetchData(data))
    }).catch(function(error) {
      console.log('Fetch failed at picker/operations: ' + error.message)
    })
}

export default {
  fetchDataFromApi
}