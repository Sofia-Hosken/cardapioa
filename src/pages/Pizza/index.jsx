import React, { useEffect, useState } from 'react';
import styles from './Pizza.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Pizza() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json')
      .then((response) => response.json())
      .then((data) => setPizzas(data.receitas.filter((receita) => receita.categoria_id === 3)))
      .catch((error) => console.error('Erro ao buscar dados do JSON:', error));
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Cardápio de Pizzas</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Imagem</th>
              <th>Comprar</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map((pizza) => (
              <tr key={pizza.id}>
                <td>{pizza.nome}</td>
                <td>R$ {pizza.preco.toFixed(2)}</td>
                <td>
                  <img src={pizza.img} alt={pizza.nome} width="100" height="100" />
                </td>
                <td>
                  <button>Comprar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
}

export default Pizza;
