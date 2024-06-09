
import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';

import Shop from './components/directory/shop';
import SignIn from './components/sign-in/sign-in'
import Navigation from './routes/navigation/navigation.component';

function App() {
    return (
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='sign-in' element={<SignIn />} />
          </Route>
        </Routes>
    )
}

export default App;