
// important react modules 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// Components : NavBar, Blogs, Footer 
import NavBar from './Components/NavBar';
import HomePageBlog from './Components/HomePageBlogs';
import Footer from './Components/Footer';
import ForgetPassword from './Components/ForgetPassword';
import SignUp from './Components/SignUp';

// Pages : About, Account. Home
import Account from "./Pages/Account";
import About from './Pages/About';
import Bussiness from './Pages/Bussiness';
import Coding from './Pages/Coding';
import Gaming from './Pages/Gaming';
import VideoEditing from './Pages/VideoEditing';

// CSS FILES 
import './assets/CSS/style.css';

const App = () => {
  // title or logo name of the website 
  const title = 'BlogBuzz';

  const [mode, setMode] = useState('Dark')
  const [Switch, switchOn] = useState('')

  useEffect(() => {
    if (localStorage.getItem('currentMode') === 'Dark') {
      setMode('Light')
      switchOn('true')
    }
    else {
      setMode('Dark')
      switchOn('')
    }
 })

  // changing themes using switch button 
  const ChangeTheme = () => {
    if (mode === 'Light') {
      setMode('Dark')   
      switchOn('')
    }
    else {
      setMode('Light')
      switchOn('true')
    }
    localStorage.setItem('currentMode',mode)
  };


  return (
    <>
      <Router>
        {/* NavBar Component  */}
        <NavBar
          title={title}
          changeTheme={ChangeTheme}
          mode={mode}
          Switch={Switch}
        />

        <Routes>
          {/* Blog on Home Page  */}
          <Route path="/" element={
            <HomePageBlog mode={mode}  />} />

          {/* About us Page  */}
          <Route path="/about" element={<About mode={mode}/>} />

          {/* dropdown Links  */}
          <Route path="/catagory/bussiness" element={<Bussiness mode={mode} />} /> { /* Bussiness Blogs Page  */}
          <Route path="/catagory/coding" element={<Coding mode={mode} />} />  { /* Coding Blogs Page  */}
          <Route path="/catagory/gaming" element={<Gaming mode={mode} />} /> { /* Gaming Blogs Page  */}
          <Route path="/catagory/videoediting" element={<VideoEditing mode={mode} />} /> { /* VideoEditing Blogs Page  */}

          {/* Account Page  */}
          <Route path="/account" element={<Account mode={mode} />} />
          <Route path="/account/forgetPassword" element={<ForgetPassword mode={mode} />} />
          <Route path="/account/signup" element={<SignUp mode={mode} />} />
        </Routes>

        {/* Footer Component  */}
        <Footer
          mode = {mode}
        />
      </Router>
    </>
  );
}

export default App;
