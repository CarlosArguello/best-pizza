import { Login } from 'components/login/Login';
import { Stores } from 'components/stores/Stores';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainCtx, useValueMainCtx } from 'utils/context/mainContext';

const App = () => {
  const dataCtx = useValueMainCtx();
  return (
    <MainCtx.Provider value={dataCtx}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Stores />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MainCtx.Provider>
  );
};

export default App;
