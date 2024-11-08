import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditUserProfile from './pages/EditUserProfile';
import AboutUs from './pages/AboutUs';
import CreateUser from './pages/CreateUser';
import UserProfile from './pages/UserProfile';
import DeleteUser from './pages/DeleteUser';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/editUserProfile' element={<EditUserProfile />}/>
        <Route path='/createUser' element={<CreateUser />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/userProfile' element={<UserProfile />} />
        <Route path='/deleteUser' element={<DeleteUser />} />
      </Routes>      
    </div>
  );
}

export default App;