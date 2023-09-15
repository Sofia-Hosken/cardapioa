import { useEffect, useState } from 'react';
import styles from './Home.module.css';

function Card() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json');
        const data = await response.json();
        setReceitas(data.receitas);
      } catch (error) {
        console.error('Erro ao buscar dados do JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.cardContainer}>
  {receitas.map((receita) => (
    <div className={styles.card} key={receita.id}>
      <h2>{receita.nome}</h2>
      <img src={receita.img} alt={receita.nome} />
     
      <p>Descrição: {receita.descricao}</p>
      <p>Preço: R$ {receita.preco.toFixed(2)}</p>
    </div>
  ))}
</div>

  );
}

export default Card;
