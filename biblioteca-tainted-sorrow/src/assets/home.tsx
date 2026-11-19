import CardLivros from './components/cardLivros.tsx';

function Home() {
    return (
      <div>

<header className="bg-[#0F172A] border-b border[#1E293B] py-6 px-8">
            <div className="max-w-[1200-x] mx-auto flex justify-between items-center flex-wrap gap-4">
            <div>
            <h1 className="text-white text-[26px] font-extrabold m-0 tracking-tight">
                Biblioteca
            </h1>
            <p className="text-[#94A3B8] text-sm mt-1 mt-0">
                Seu conhecimento começa aqui.
            </p>
            </div>
            <div className="flex gap-3">
              <a href="/login" className="bg-[#2563EB] text-white py-2.5 px-5 rounded-lg text-sm font-semibold no-underline shadow-sm hover:bg-[#1d4ed8] transition-colors">
              Entrar
              </a>
              <a href="/register" className="bg-transparent text-white border border-[#334155] py-2.5 px-5 rounded-lg text-sm font-semibold no-underline hover:bg-[#1e293b] transition-colors">
              Criar conta
              </a>
              <a href="/register" className="bg-transparent text-white border border-[#334155] py-2.5 px-5 rounded-lg text-sm font-semibold no-underline hover:bg-[#1e293b] transition-colors">
              Chat
              </a>
              <a href="/register" className="bg-transparent text-white border border-[#334155] py-2.5 px-5 rounded-lg text-sm font-semibold no-underline hover:bg-[#1e293b] transition-colors">
              Aula Web
              </a>
              <a href="/desenvolvedor" className="bg-transparent text-white border border-[#334155] py-2.5 px-5 rounded-lg text-sm font-semibold no-underline hover:bg-[#1e293b] transition-colors">
              Desenvolvedor
              </a>
           </div>
            </div>
        </header>
<main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">
        <section className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] p-8 rounded-2xl mb-10 shadow-sm border-l-6 border-[#D97706]">
          <div className="bg-[#D97706] text-white text-[11px] font-bold uppercase py-1 px-2.5 rounded-full inline-block mb-3 tracking-wider">
            Destaque do Dia
          </div>
          <p className="text-lg leading-7 text-[#78350F] italic font-medium mb-3 mt-0">
            "Um bom livro pode levar você para lugares que nunca imaginou conhecer."
          </p>
          <span className="text-[#92400E] text-[13px] font-semibold block">
            - Reflexão diária
          </span>
        </section>
        </main>
        <hr className="py-5"></hr>
        <section className="text-center mb-12">
          <h2 className="text-[32px] font-extrabold text-[#0F172A] mb-3 tracking-tight">
            Bem-vindo à nossa biblioteca!
          </h2>
          <p className="max-w-[700px] mx-auto text-base text-[#64748B] leading-[26px]">
            Estamos construindo um espaço para você explorar e descobrir novos livros.
            Fique à vontade para navegar pelo nosso catálogo e encontrar sua próxia leitura favorita!
          </p>
        </section>
        <section className="mb-12">
          <h3 className="text-xl font-bold text-[#0F1724A] mb-5">
            Navegação Rápida
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            <a href="./estudos" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
            <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
              📖
            </div>
            <div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">
                Cantinho de Estudos
              </h4>
              <p className="text-[13px] text-[#64748B] m-0">
                Pomodoro, tarefas e dicks
              </p>
            </div>
            </a>

            <a href="recomendacao" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
              <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                ★
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">
                  Recomendações
                </h4>
                <p className="text-[13px] text-[#64748B] m-0">
                  Descubra novos livros                  
                </p>
              </div>
            </a>

            <a href="/acervo" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
              <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                ▣
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">
                  Acervo
                </h4>
                <p className="text-[13px] text-[#64748B] m-0">
                  Explore nossa coleção
                </p>
              </div>            
            </a>

            <a href="/aulas" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
              <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                ▸
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">
                  Aulas Mobile
                </h4>
                <p className="text-[13px] text-[#64748B] m-0">
                  Aprenda desenvolvimento
                </p>
              </div>
            </a>


          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl font-bold text-[#0F172A] m-0">
              Livros em destaque
            </h3>
            <a href="/acervo" className="text-[#2563EB] text-sm font-semibold no-underline hover:underline">
              Ver todos →
            </a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1f))] gap-5">
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
          </div>
        </section>


      </div>
    )
}

export default Home