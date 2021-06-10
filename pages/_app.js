// Default Styles And Fonts
import './styles.css'
import "@fontsource/roboto"
import "@fontsource/big-shoulders-display"

// Framework
import React from 'react'

// My Components
import Apollo from '../contexts/apollo'
import Themer from '../contexts/themer'
import { ResponseProvider } from '../contexts/responseContext'
import Header from '../components/header'
import Footer from '../components/footer'



// App Component
function MyApp({ Component, pageProps }) {
  return (
    <Apollo>
      <Themer>
        <Header />
        <ResponseProvider>
          <Component {...pageProps} />
        </ResponseProvider>
        <Footer />
      </Themer>
    </Apollo>
  )
}

export default MyApp
