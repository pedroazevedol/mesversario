import { useEffect, useState } from 'react';
import './App.css';

const imagens = [
  '/fotos/foto1.jpg',
  '/fotos/foto2.jpg',
  '/fotos/foto3.jpg',
  '/fotos/foto4.jpg',
  '/fotos/foto5.jpg',
  '/fotos/foto6.jpg',
  '/fotos/foto7.jpg',
  '/fotos/foto8.jpg',
  '/fotos/foto9.jpg',
];

function App() {
  const [index, setIndex] = useState(0);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const mensagem = "Te conhecer foi a melhor coisa que aconteceu na minha vida. A cada dia, eu te amo mais!";
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
