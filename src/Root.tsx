import * as React from 'react'
import {Provider} from 'react-redux'

import AppContainer from './components/App/AppContainer'
import {makeStore} from './store'

const Root = () => (
  <React.StrictMode>
    <Provider store={makeStore()}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
)

export default Root
