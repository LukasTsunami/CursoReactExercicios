import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import PaginaInicial from './pages/PaginaInicial';

import {
  Exercicio1,
  Exercicio2,
  Exercicio3,
  Exercicio4,
  Exercicio5,
  Exercicio6
} from './pages/exercicios/Exercicios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/exercicio1" element={<Exercicio1 />} />
          <Route path="/exercicio2" element={<Exercicio2 />} />
          <Route path="/exercicio3" element={<Exercicio3 />} />
          <Route path="/exercicio4" element={<Exercicio4 />} />
          <Route path="/exercicio5" element={<Exercicio5 />} />
          <Route path="/exercicio6" element={<Exercicio6 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
