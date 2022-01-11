import { Login } from 'components/login/Login';
import { Stores } from 'components/stores/Stores';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Stores />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
