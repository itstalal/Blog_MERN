import logo from './logo.svg';
import './App.css';
import Home from './home'
import Navbar from './navbar';
import UseStateExample from './useStateExample'
import { BrowserRouter , Router, Routes, Route, Switch } from 'react-router-dom';
import Create from './create';
import Contacts from './contacts';
import About from './about';
import UseDataFromDb from './useDataFromDb'
import BlogDetails from './blogDetails';
import UseDBFromUseFetch from './useDBFromUseFetch';


function App() {
  const title = "welcome to my project"
  var etudiant = { nom: "Talal", age: 20 }
  const link = "https://www.google.com/"

  return (
    <div className="App">

      <div className="content">
        {/* Le Navbar ne fonctionne pas correctement en dehors du Router car il utilise 
      des composants Link qui ont besoin d'accéder au contexte de React Router.
      Le composant Home fonctionne en dehors du Router car il ne dépend pas des fonctionnalités de routage. */}

          {/* <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/create" >
              <Create />
            </Route>
            <Route path='/contacts'  >
              <Contacts />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/dataFromDb' >
              <UseDataFromDb />
            </Route>
          </Switch> */}




        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/about' element={<About />} />
            <Route path='/dataFromDb' element={<UseDataFromDb />} />
            <Route path='/useFetch' element={<UseDBFromUseFetch/>} />
            <Route path='/blogs/:id' element={<BlogDetails />} />

          </Routes>
        </BrowserRouter>




        {/* <Home/> */}
        {/* <UseStateExample /> */}
      </div>



      {/* 
      <div className="myClasstest">
        <h1>{title}</h1>
      </div>
      <a href="http://"></a>
      <p id="testEncore">Bonjouuurrrrr</p>
      {etudiant.nom}<br></br>
      {etudiant.age}
      <p>{"Lyna"}</p>
      <p>{2025}</p>
      <p>{[1, 2, 4]}</p>
      <p>{Math.random() * 10}</p>
      <a href={link} target='_blank'>google </a>  */}


    </div>
  );
}

export default App;
