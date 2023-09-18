import { useEffect, useState } from 'react';
import styles from './Home.module.css';
//UseEffect: Ele faz algo a partir de alguma ação nossa "Algum efeito vai er originado por meio de uma ação"

// Usestate gerencia o estado de algum valor
// gette setter

function Card() {
  const [receitas, setReceitas] = useState([]);
  // setReceitas serve para alterar o valor da var receitas
  // ou seja criei uma consta chamada receitas que o valor poderá ser alterado confome o que buscarmos
  // no arquivo json, ou seja a literalmente uma alteção de estado * lembrar pra prova*
  
  useEffect(() => {
    const fetchData = async () => {
    //inicialização do useEffect 
    // Desse jeito que eu fiz roda a cada renderização
    // ou seja quando dar f5 ele vai rodar
      try {
       //  aqui ta chamando nossa Api de receitas 
        const response = await fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json');
        const data = await response.json(); //awai ta esperando a promessa ser resolvida ou seja url rodar
        setReceitas(data.receitas);  // Atualiza o estado do obj
      } catch (error) {
        console.error('Erro ao buscar dados do JSON:', error); // erro caso api estiver com algum erro
      }
    };

    fetchData();  // chama função quando o componente e montado para buscar dados
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
