import { useState } from 'react'
import Vitrine from '../pages/Vitrine'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import Produtos from '../pages/Produtos'
import Promocao from '../pages/Promocao'
import Carrinho from '../pages/Carrinho'


function Rotas() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Vitrine />} />
        <Route path="/produto/:codigo" element={<Produtos />} />
        <Route path="/promocao" element={<Promocao />} />
        <Route path="/carrinho" element={<Carrinho/>} />

      </Routes>
    </BrowserRouter>

  )
}

export default Rotas
