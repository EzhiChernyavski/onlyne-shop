import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AboutShopPage, HomePage, NotFound, ProductPage, CartPage } from "./pages";
import Layout from "./components/Layout/Layout";
import { AppProvider } from "./hoc/AppContext";


function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route
            path='/'
            element={<Layout />}
          >
            <Route
              index
              element={<HomePage />}
            />
            <Route
              path='/aboutShop'
              element={<AboutShopPage />}
            /><Route
              path='/cart'
              element={<CartPage />}
            />
            <Route
              path='/product/:id'
              element={<ProductPage />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />

          </Route>
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
