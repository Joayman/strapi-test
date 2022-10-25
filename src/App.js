import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route path="/details/:id" element={<ReviewDetails/>}/>
                    <Route path="/category/:category" element={<Category/>}/>
                </Routes>

            </div>
        </Router>
    );
}

export default App;
