import {Routes, Route} from 'react-router-dom';
import App from './App';
function Router() {
    return(
        <>
        <Routes>
            <Route path='/' Component={App}></Route>
        </Routes>
        </>
        
    )
}

export default Router;