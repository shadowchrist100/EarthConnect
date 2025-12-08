import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthComponent from "./components/AuthComponent.jsx";
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx'
import Home from './components/Home.jsx'
import { AuthProvider } from "./components/AuthContext.jsx";



function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    
                    {/* routes publics:authentification */}
                    <Route path="/Login" element= {<Login />} />
                    <Route path="/Register" element= {<Register />} />

                    {/* routes prive: page user */}
                    <Route path="/" element= {
                        <AuthComponent>
                            <Home />
                        </AuthComponent>
                    } />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
