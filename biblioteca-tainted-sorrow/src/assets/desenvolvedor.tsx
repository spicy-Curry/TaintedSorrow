export default function Desenvolvedor(){
    return(
        <main className="min-h-screen bg-slate-100">
            <header className="bg-slate-800 px-5 pt-14 pb-8">
            <div className="max-w-[1200-x] mx-auto flex justify-between items-center flex-wrap gap-4">
            <div>
            <h1 className="text-3xl font-bold text-white">
                Desenvolvedor
            </h1>
        <p className="mt-2 text-sm leading-5 text-slate-300">
            Informações sobre o desenvolvedor.
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

        <div className="box-border rounded-lg max-w-[1200-x] mx-auto flex justify-between items-center flex-wrap gap-2 mt-4 p-4">

            <h1 className="text-base font-bold text-[#1E293B] mb-0 mt-0"> Sobre </h1>
            <p className="text-[13px] text-[#64748B] m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur turpis id velit posuere, non tempor libero pharetra. Quisque eros tellus, interdum ut nunc eu, ultricies volutpat metus. Nulla facilisi. Praesent pharetra ligula et pretium imperdiet. Donec at odio ut nulla eleifend semper. Morbi congue lacus id enim varius, eget porttitor nulla tristique. In fringilla lacus eget scelerisque placerat.
              </p>
              
            <h1 className="text-base font-bold text-[#1E293B] mb-0 mt-0"> Outros </h1>
            <p className="text-[13px] text-[#64748B] m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur turpis id velit posuere, non tempor libero pharetra. Quisque eros tellus, interdum ut nunc eu, ultricies volutpat metus. Nulla facilisi. Praesent pharetra ligula et pretium imperdiet. Donec at odio ut nulla eleifend semper. Morbi congue lacus id enim varius, eget porttitor nulla tristique. In fringilla lacus eget scelerisque placerat.
              </p>
              </div>

        </section>
        </main>
    );
}