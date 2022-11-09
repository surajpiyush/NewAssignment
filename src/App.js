import Home from './Home';
import './App.css';
import Forget from './Forget';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Request from './Request';
import Success from './Success'
import Logedin from './Logedin';
import Match from './Match';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Logedin/>}></Route>
    <Route path='/forget' element={<Forget/>}></Route>
    <Route path='/match' element={<Match/>}></Route>
    <Route path='/request' element={<Request/>}></Route>
    <Route path='/success'  element={<Success/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
