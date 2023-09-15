import React, { useEffect, useState } from 'react';
import styles from './Hamburguer.module.css'; // Certifique-se de importar o CSS correto
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PageHamburguer() {
  const [hamburguers, setHamburguers] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json')
      .then((response) => response.json())
      .then((data) => setHamburguers(data.receitas.filter((receita) => receita.categoria_id === 1)))
      .catch((error) => console.error('Erro ao buscar dados do JSON:', error));
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Cardápio de Hambúrgueres</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Imagem</th>
              <th>Comprar</th>
            </tr>
          </thead>
          <tbody>
            {hamburguers.map((hamburguer) => (
              <tr key={hamburguer.id}>
                <td>{hamburguer.nome}</td>
                <td>R$ {hamburguer.preco.toFixed(2)}</td>
                <td>
                  <img src={hamburguer.img} alt={hamburguer.nome} width="150" height="150" />
                </td>
                <td>
                  <button className={styles.button}>Comprar</button>
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

export default PageHamburguer;
