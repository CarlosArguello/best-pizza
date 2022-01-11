import { Login } from 'components/login/Login';
import { StoreDetail } from 'components/store-detail/StoreDetail';
import { Stores } from 'components/stores/Stores';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainCtx, useValueMainCtx } from 'utils/context/mainContext';
import { useAuth } from 'utils/hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { hasAuth } = useAuth();
  return hasAuth ? children : <Navigate to="/" />;
};

const App = () => {
  const dataCtx = useValueMainCtx();
  return (
    <MainCtx.Provider value={dataCtx}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/stores"
            element={
              <PrivateRoute>
                <Stores />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/stores/:id"
            element={
              <PrivateRoute>
                <StoreDetail />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </MainCtx.Provider>
  );
};

export default App;
