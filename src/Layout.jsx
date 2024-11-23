import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { ErrorBoundary } from 'react-error-boundary'
import SomethingWentWrong from './components/Errors/SomethingWentWrong'

function Layout() {
  
  return (
    <ErrorBoundary FallbackComponent={SomethingWentWrong}>
      <div id='bg'></div>
      <div className='relative'>
        <Header />
        <main className='pt-20 min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default Layout