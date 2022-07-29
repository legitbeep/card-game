import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import ThemeContext from './context/ThemeContext'

function App() {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {

    const _theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    setTheme(_theme)

    try{
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleModeChange)
    } catch(err) {
        //
    }

    return () => {

      try {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleModeChange)
      } catch(err) {
        //
      }  
    }

  }, [])

  const handleModeChange = (e) => {

    if(e.matches) {

      setTheme('dark')

    } else {

      setTheme('light')
      
    }

  }

  return (
    <BrowserRouter basename={import.meta.env.VITE_APP_BASEDIR}>
      <ThemeContext.Provider value={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
  
}

export default App
