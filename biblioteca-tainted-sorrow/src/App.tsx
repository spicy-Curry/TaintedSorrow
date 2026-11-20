/*import { useState } from 'react'
import Header from './assets/components/header.tsx'
import Sobre from './Sobre.tsx'*/
//import CardLivros from './assets/components/cardLivros.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/home'
import Aulas from './assets/aulas'
import Desenvolvedor from './assets/desenvolvedor'
import Estudos from './assets/estudos'

function App() {
    return (
      <div>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aulas" element={<Aulas />}></Route>
          <Route path="/desenvolvedor" element={<Desenvolvedor />}></Route>
          <Route path="/estudos" element={<Estudos />}></Route>
        </Routes>
      
      </BrowserRouter>
      </div>
    )
}

export default App

/*function App() {
    const [tela, setTela] = useState('home')

  return (
    <div className="min-h-screen bg-gray-100">
    <Header />

    <main>
         {tela === 'home' && (
          <div>
      <h2>Bem-vindo!</h2>

      <p>
      Estamos construindo um espaço para você explorar e descobrir novos livros.
      Fique à vontade para navegar pelo nosso cátalogo e encontrar sua próxima leitura favorita!
      A FATEC deseja a todos uma ótima experiência de leitura e aprendizado.
      </p>

      <hr className="mt-4"></hr>

      <CardLivros 
      titulo="Murder at the Black Cat Cafe"
      autor="Yokomizo Seishi"
      categoria="Mistério"
      img="https://m.media-amazon.com/images/I/81f6MebSLZL.jpg"
      />

      <CardLivros 
      titulo="Uma Temporada no Inferno"
      autor="Arthur Rimbaud"
      categoria="Poesia"
      img="https://m.media-amazon.com/images/I/717Qop9adWL._SY342_.jpg"
      />

      <CardLivros 
      titulo="The Poems of Nakahara Chuuya"
      autor="Nakahara Chuuya"
      categoria="Poesia"
      img="https://m.media-amazon.com/images/I/31Vf8dEQq4L._SY445_SX342_ML2_.jpg"
      />

      <CardLivros 
      titulo="Rashômon e outros contos"
      autor="Akutagawa Ryuunosuke"
      categoria="Contos"
      img="https://static.skeelo.com/remote/320/480/100/https://skoob.s3.amazonaws.com/livros/17204/RASHOMON_E_OUTRAS_HISTORIAS_156122360417204SK1561223605B.jpg"
      />

      <button onClick={() => setTela('sobre')}> Explorar </button>
</div>
      )}


{tela === 'sobre' && (
          <div>
            <Sobre />

            <button onClick={() => setTela('home')}> Voltar </button>
          </div>
        )}
    </main>
  </div>
  )
}*/