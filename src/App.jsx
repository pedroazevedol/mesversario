import { useEffect, useState } from 'react';
import './App.css';

const imagens = [
 'https://pedroazevedol.github.io/mesversario/foto1.jpg',
 'https://pedroazevedol.github.io/mesversario/foto2.jpg',
 'https://pedroazevedol.github.io/mesversario/foto3.jpg',
 'https://pedroazevedol.github.io/mesversario/foto4.jpg',
 'https://pedroazevedol.github.io/mesversario/foto5.jpg',
 'https://pedroazevedol.github.io/mesversario/foto6.jpg',
 'https://pedroazevedol.github.io/mesversario/foto7.jpg',
 'https://pedroazevedol.github.io/mesversario/foto8.jpg',
 'https://pedroazevedol.github.io/mesversario/foto9.jpg',
];


function App() {
  const [index, setIndex] = useState(0);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const mensagem = "Te conhecer foi a melhor coisa que aconteceu na minha vida. A cada dia, eu te amo mais! Queria agradecer por todos esses momentos juntos, que venha muitos mais, e que apesar de qualquer conflito ou briguinha, eu te amo muito e você foi a melhor coisa que já aconteceu na minha vida.";
    let i = 0;
    const intervalo = setInterval(() => {
      setTexto(mensagem.slice(0, i)); 
      i++;
      if (i > mensagem.length) clearInterval(intervalo);
    }, 100);

    return () => clearInterval(intervalo);
  }, []); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 3) % imagens.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  const fotosAtuais = imagens.slice(index, index + 3);

  return (
    <div className="container">
      <header className="header">
        <h1>Feliz mêsversário, meu amor 💖</h1>
        <p>Mais um mês ao seu lado, e o meu coração só cresce de amor...</p>
      </header>

      <section className="momentos">
        <h2>✨ Nossos Momentos ✨</h2>
        <div className="fotos fade">
          {fotosAtuais.map((src, i) => (
            <img key={i} src={src} alt={`Momento ${i}`} className="foto" />
          ))}
        </div>
      </section>

      <section className="declaracao">
        <h2>💌</h2>
        <p>
          Meu amor… <br />
          {texto}
        </p>
      </section>

      <footer className="footer">
        Feito com 💖 por você, meu amorzinho
      </footer>
    </div>
  );
}

export default App;
