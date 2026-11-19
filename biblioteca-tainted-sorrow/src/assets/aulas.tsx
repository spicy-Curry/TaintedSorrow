type Aula ={
    id: number;
    numero: string;
    titulo: string;
    descricao: string;
}

const aulas: Aula[] = [
    {
        id: 1,
        numero: "01",
        titulo: "Fundamentos do React",
        descricao: "Esta aula apresenta os conceitos básicos do React."
    },
    {
        id: 2,
        numero: "02",
        titulo: "Fundamentos do React",
        descricao: "Esta aula apresenta os conceitos básicos do React."
    },
    {
        id: 3,
        numero: "03",
        titulo: "Fundamentos do React",
        descricao: "Esta aula apresenta os conceitos básicos do React."
    },
    {
        id: 4,
        numero: "04",
        titulo: "Fundamentos do React",
        descricao: "Esta aula apresenta os conceitos básicos do React."
    },
    {
        id: 5,
        numero: "05",
        titulo: "Fundamentos do React",
        descricao: "Esta aula apresenta os conceitos básicos do React."
    },
    {
        id: 6,
        numero: "06",
        titulo: "Fundamentos do React",
        descricao: "Esta aula apresenta os conceitos básicos do React."
    }
];

type AulaItemProps = {
    aula: Aula;
}

function AulaItem({aula}: AulaItemProps) {
    return (
        <div>
        <article className="flex items-center w-full p-4 bg-white rounded-xl shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">

        <div className="flex items-center justify-center w-12 h-12 min-w-12 rounded-full bg-blue-600 mr-4">

        <span className="text-white text-sm font bold">
            {aula.numero}
        </span>

        </div>
        <div className="flex-1">

            <h2 className="text-[17px] font-bold text-slate-800 mb-1">
                {aula.titulo}
            </h2>

            <p className="text-[13px] leading-[18px] text-slate-500">
                {aula.descricao}
            </p>

        </div>

        </article>
    </div>

    );
}

export default function Aulas() {
    return (
        <main className="min-h-screen bg-slate-100">
            <header className="bg-slate-800 px-5 pt-14 pb-8">
            <div className="max-w-[1200-x] mx-auto flex justify-between items-center flex-wrap gap-4">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Aulas Mobile
                </h1>
                <p className="mt-2 text-sm leading-5 text-slate-300">
                    Aprenda desenvolvimento mobile passo a passo
                </p>
                </div>
                <div className="flex gap-3">
              <a href="/home" className="bg-[#2563EB] text-white py-2.5 px-5 rounded-lg text-sm font-semibold no-underline shadow-sm hover:bg-[#1d4ed8] transition-colors">
              Home
              </a>
              </div>
              </div>
            </header>

            

        <section className="w-full max-w-4xl mx-auto px-5 py-8">
            <h2 className="mb-4 text-[21px] font-bold text-slate-800">
                Lista de aulas                
            </h2>

            <div className="flex flex-col gap-3">
                {aulas.map((aula) => (
                    <AulaItem key={aula.id}
                    aula={aula}
                    />
                ))}
                
                </div>
            </section>
        </main>
    )
}