import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from './pages/home';
import Nomatch from './pages/nomatch';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="*" element={<Nomatch/>}/>
            </Routes>
        </Router>
    )
}