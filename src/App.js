import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
import Home from './components/Home';
import ContactList from './components/ContactList';


function App() {
  return (
    <>
      <div className="container">
        <Home/>
      <ContactList />
        {/* <Router>
          <Routes >
            <Route exact path='/' element={<Home />} />
            <Route exact path='/add' element={<ContactList />} />
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
