import './App.css';
import Signup from "./components/Signup";
import Login from './components/Login';
import PostSpecies from './components/PostSpecies';
import ViewPost from './components/viewPost/Index';
import Menu from './components/Menu';
import { DivMenu, DivContent } from './style/div';
import {colorLight} from './style/variables';
function App() {
  return (
    <div className="App">
      {
        //http://paintonline.editaraudio.com/
        //<Signup/>
        //<Login/>
        //<PostSpecies/>
        //<ViewPost/>
      }
      
      <DivMenu theme={{ shadow: colorLight.grayL, background: colorLight.white }}>
        <Menu/>
      </DivMenu>
      
      <DivContent>
        <PostSpecies/>
      </DivContent>
      
   
      

    </div>
  );
}

export default App;
