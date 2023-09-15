import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Refreu.module.css'; // Importe o CSS corretamente

function PageRefrau() {
  const [refraus, setRefraus] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json')
      .then((response) => response.json())
      .then((data) => setRefraus(data.receitas.filter((receita) => receita.categoria_id === 2)))
      .catch((error) => console.error('Erro ao buscar dados do JSON:', error));
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Cardápio de Refraus</h1>
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
            {refraus.map((refrau) => (
              <tr key={refrau.id}>
                <td>{refrau.nome}</td>
                <td>R$ {refrau.preco.toFixed(2)}</td>
                <td>
                  <img src={refrau.img} alt={refrau.nome} width="150" height="150" />
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

export default PageRefrau;
