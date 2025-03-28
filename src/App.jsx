
import { Suspense } from 'react'
import './App.css'
import Countries from './countries/countries'


const loadFetchApi = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all")
  return res.json()
}


function App() {
  const promiseLoadFetchApi = loadFetchApi()
  return (
    <>
    <Suspense fallback="Loading Api...........">
    <Countries promiseLoadFetchApi = {promiseLoadFetchApi}></Countries>
    </Suspense>
    </>
  )
}

export default App
