function Header() {
    return (

        <header className="border-b-4 border-black">

            <nav className="mx-auto flex max-5xl items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-uppercase">Biblioteca</h1>
            <div className="flex gap-6">
                <a href="#" className="font-medium hover:text-blue-600">Início </a>
                <a href="#" className="font-medium hover:text-blue-600"> Livros</a>
                <a href="#" className="font-medium hover:text-blue-600"> Autores</a>
                <a href="#" className="font-medium hover:text-blue-600"> Sobre</a>
            </div>
            </nav>
        </header>
    )
}

export default Header