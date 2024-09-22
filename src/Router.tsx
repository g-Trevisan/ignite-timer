import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { History } from './pages/History';
import { DefaultLayout } from './layouts/DefaultLayout/index';

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />  {/* acesso a home page com o / */}
                <Route path="/history" element={<History />}/>
            </Route>
        </Routes>
    );
}