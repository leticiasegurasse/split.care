// Definição das rotas principais
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import { ROUTES } from '../config/routes';
import Home from '../pages/Home';
import Seguranca from '../pages/Seguranca';
import Produtos from '../pages/Produtos';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

const AppRoutes = () => (
  <BrowserRouter>
    <DefaultLayout>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.seguranca} element={<Seguranca />} />
        <Route path={ROUTES.produtos} element={<Produtos />} />
        <Route path={ROUTES.sobre} element={<Sobre />} />
        <Route path={ROUTES.contato} element={<Contato />} />
      </Routes>
    </DefaultLayout>
  </BrowserRouter>
);

export default AppRoutes; 