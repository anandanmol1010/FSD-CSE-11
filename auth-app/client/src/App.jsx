import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }>
        <Route index element={<About/>}/>
        <Route path="/counter" element={<h1>Counter App</h1>}/>
        <Route path="/stopwatch" element={<h1>Stopwatch App</h1>}/>
        <Route path="/store" element={<h1>Store Page</h1>}/>
        <Route path="/login" element={<h1>Login Page</h1>}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Route>
      </Routes></BrowserRouter>
    </div>
  )
}

export default App