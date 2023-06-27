
import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import AddCardScreen from './screens/AddCardScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<HomeScreen/>}> </Route>
      <Route path='/addCard' exact element={<AddCardScreen/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
