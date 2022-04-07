import './App.css';
import Signup from "./components/Signup";
import Login from './components/Login';
import PostSpecies from './components/PostSpecies';
import ViewPost from './components/viewPost/Index';
import Menu from './components/Menu';
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
      
      <PostSpecies/>
      <Menu/>
      

    </div>
  );
}

export default App;
