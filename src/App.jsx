import { supabase } from './supabaseClient'
import { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  async function testConnection() {
    
    // Example: Try reading a table call 'test'
    const { data, error } = await supabase.from('test').select('*')

    if (error) {
      console.error('Error connecting to Supabase:', error.message)
    } else {
      console.log('Successfully connected!', data)
    }
  }

  useEffect(() => {
    testConnection()
  }, [])

  return (
    <div className='App'>
      <h1>My Family Tree</h1>
      <p>Check the console (F12) to see the Supabase connection status.</p>
    </div>
  )
}

export default App