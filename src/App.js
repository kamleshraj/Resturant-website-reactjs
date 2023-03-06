import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import PageNotFound from './pages/pageNotFound';
import Menu from './pages/Menu';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
    const theme = {
        colors: {
            heading:'#1e272e',
            text: '#fff',
            btnBg: '#0a3d62',
            borderColor: 'rgb(252 188 94)',
            greybg:'#e9e9e9'
        },
        responsive:{mobile:'768px',tab:'998px'}
    }
    return (
        <>  
        <ThemeProvider theme={theme}> 
                <BrowserRouter>
                    <GlobalStyle/>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />}/>
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/aboutus' element={<Aboutus />} />
                        <Route path='/contactus' element={<Contactus />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Route>    
                    </Routes>
                    <Footer/>
                </BrowserRouter>
        </ThemeProvider>   
        </>
    )
}

export default App