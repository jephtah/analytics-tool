import '../../styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../_helpers'

// eslint-disable-next-line react/prop-types
function MyApp ({ Component, pageProps }) {
  return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>

  )
}

export default MyApp
