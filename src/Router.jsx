import {Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
function Router() {
    return(
        <>
            <Routes>
                <Route path='/' Component={LoginPage}></Route>
            </Routes>
        </>
        
    )
}

export default Router;