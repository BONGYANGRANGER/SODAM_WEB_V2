import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import Login from './pages/user/Login';
import PostDetail from './components/Post/PostDetail/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login />} />
        <Route path='/product/:id' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
