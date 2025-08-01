// Definição das rotas principais
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import { ROUTES } from '../config/routes';
import Home from '../pages/Home';
import Seguranca from '../pages/Seguranca';
import Produtos from '../pages/Produtos';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import PoliticaPrivacidade from '../pages/PoliticaPrivacidade';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* Rotas com layout padrão */}
      <Route path={ROUTES.home} element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path={ROUTES.produtos} element={<DefaultLayout><Produtos /></DefaultLayout>} />
      <Route path={ROUTES.sobre} element={<DefaultLayout><Sobre /></DefaultLayout>} />
      <Route path={ROUTES.contato} element={<DefaultLayout><Contato /></DefaultLayout>} />
      <Route path={ROUTES.seguranca} element={<DefaultLayout><Seguranca /></DefaultLayout>} />
      <Route path={ROUTES.politicaPrivacidade} element={<DefaultLayout><PoliticaPrivacidade /></DefaultLayout>} />
      
      {/* Rota 404 - Sem layout para ter design próprio */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes; 