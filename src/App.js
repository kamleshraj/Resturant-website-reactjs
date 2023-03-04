import '../src/styles/main.css';
import Layout from './components/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import PageNotFound from './pages/pageNotFound';
import Menu from './pages/Menu';
import Home from './pages/Home';

const App=()=>{
    return (
        <>        
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/contactus' element={<Contactus />} />
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App