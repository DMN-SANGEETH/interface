
import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import ListIssuesComponent from "./components/ListIssuesComponent";
import HedarComponent from "./components/HedarComponent";
import FooterComponent from "./components/FooterComponent";


function App() {
  return (
    <div className='App'>
        <div className='App'>
            <BrowserRouter>
                    <HedarComponent />
                    <Routes>
                        <Route exact path='/' element={<ListIssuesComponent />} />
                        <Route exact path='/Home' element={<ListIssuesComponent />} />

                    </Routes>

            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
