import Login from './Login.jsx';
import Register from './Register.jsx'
import Home from './Home.jsx'



function App() {
  let Component 
  switch(window.location.pathname){
    case "/":
      Component=Home
      break;
    case "/Login":
      Component=Login
      break;
    case "/Register" :
      Component=Register
      break;
  }
    
  return (
    <Component />
  )
}

export default App
