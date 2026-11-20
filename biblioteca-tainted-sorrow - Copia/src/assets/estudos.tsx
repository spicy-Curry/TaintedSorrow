import { useEffect, useState, useRef } from "react";

export default function App() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);
  let minutos = useRef(25);
  let zero = null;

    if (segundos < 10) {
      zero = 0;
    } else {
      zero = null;
    }

  useEffect(() => {

    if (!ativo) return;

    const interval = setInterval(() => {
      setSegundos((current) => {
        if (current === 0) {
          setSegundos(59);
          minutos.current = minutos.current - 1;
        }
        if (minutos.current === 0 && current === 1) {
          setAtivo(false);
          clearInterval(interval);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [ativo]);

  function comecar() {
    setAtivo(true);
  }

  return (
    <>
    <main className="min-h-screen bg-slate-100">
            <header className="bg-slate-800 px-5 pt-14 pb-8">
            <div className="max-w-[1200-x] mx-auto flex justify-between items-center flex-wrap gap-4">
            <div>
            <h1 className="text-3xl font-bold text-white">
                Timer Pomodoro
            </h1>
        <p className="mt-2 text-sm leading-5 text-slate-300">
            - 25 minutos de estudo -
            </p>
        </div>
         <div className="flex gap-3">
              <a href="/home" className="bg-[#2563EB] text-white py-2.5 px-5 rounded-lg text-sm font-semibold no-underline shadow-sm hover:bg-[#1d4ed8] transition-colors">
              Home
              </a>
              </div>
              </div>
            </header>


            <section className="mb-12">

        <div className="text-center mt-5">
              
            <h1 className="text-base font-bold text-[#1E293B] mb-0 mt-0">
            {minutos.current}:{zero}{segundos}
            </h1>
          
              </div>
              <div className="text-center">  <button onClick={comecar} className="bg-[#2563EB] text-white py-2.5 px-5 rounded-lg text-sm font-semibold no-underline shadow-sm hover:bg-[#1d4ed8] transition-colors">Começar</button>
              </div>

        </section>
        </main>
    </>
  );
}
