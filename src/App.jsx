import Header  from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutPage from "./components/pages/AboutPage";
import Home from "./components/pages/Home";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
    return (
    <FeedbackProvider>
    <Router> 
    <Header  />
    <div className="container">
    <Routes>
    <Route exact path="/" element={ <Home />} />
    <Route exact path="/about" element={ <AboutPage />} />
    </Routes>
    </div>  
    <AboutIconLink />   
    </Router> 
    </FeedbackProvider>   
    )
}
export default App;