import { Login } from 'components/login/Login';
import { StoreDetail } from 'components/store-detail/StoreDetail';
import { Stores } from 'components/stores/Stores';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainCtx, useValueMainCtx } from 'utils/context/mainContext';

const App = () => {
  const dataCtx = useValueMainCtx();
  return (
    <MainCtx.Provider value={dataCtx}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/stores" element={<Stores />} />
          <Route exact path="/stores/:id" element={<StoreDetail />} />
        </Routes>
      </BrowserRouter>
    </MainCtx.Provider>
  );
};

export default App;
