import { Login } from 'components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
