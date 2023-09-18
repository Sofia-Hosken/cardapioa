import { useEffect, useState } from 'react';
import styles from './Home.module.css';

// UseEffect: Ele faz algo a partir de alguma ação nossa "Algum efeito vai ser originado por meio de uma ação"

// Usestate gerencia o estado de algum valor
// gette setter

function Card() {
  const [receitas, setReceitas] = useState([]);
  // setReceitas serve para alterar o valor da variável 'receitas'
  // ou seja, criei uma constante chamada 'receitas' cujo valor pode ser alterado conforme o que buscarmos
  // no arquivo JSON, ou seja, é literalmente uma alteração de estado * lembrar para prova*

  useEffect(() => {
    const fetchData = async () => {
      // Inicialização do useEffect 
      // Dessa maneira que eu fiz, ele roda a cada renderização
      // ou seja, quando dar F5 na página, ele vai rodar novamente
      try {
        // Aqui está chamando nossa API de receitas 
        const response = await fetch('https://raw.githubusercontent.com/Sofia-Hosken/receitas.json/main/db.json');
        const data = await response.json(); // O 'await' está esperando a promessa ser resolvida, ou seja, a URL ser carregada
        setReceitas(data.receitas); // Atualiza o estado da variável 'receitas' com os dados obtidos da API
      } catch (error) {
        console.error('Erro ao buscar dados do JSON:', error); // Manipula erros caso a API tenha algum problema
      }
    };

    fetchData(); // Chama a função quando o componente é montado para buscar os dados
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
