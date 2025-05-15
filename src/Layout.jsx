import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { ErrorBoundary } from 'react-error-boundary'
import SomethingWentWrong from './components/Errors/SomethingWentWrong'
import Snowfall from 'react-snowfall'

function Layout() {

  return (
    <ErrorBoundary FallbackComponent={SomethingWentWrong}>
      <div id='bg'></div>
      <div className='relative'>
        <Header />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </div>
      <Snowfall
        color='white'
        snowflakeCount={90}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    </ErrorBoundary>
  )
}

export default Layout