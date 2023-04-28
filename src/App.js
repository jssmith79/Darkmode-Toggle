import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import {setLightMode, setDarkMode} from './features/modeSlice';

function App() {
  const dispatch = useDispatch();
  const mode = useSelector(state => state);
  
  const onModeChange = () => {
    const actionCreator = mode.darkMode ? setLightMode : setDarkMode;
    dispatch(actionCreator());
  };
  


  return (
    <div style={{ backgroundColor: mode.color1, color: mode.color2 }} className="App">
      <button type='button' onClick={ onModeChange}>Go to the dark side</button>
      
      
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
