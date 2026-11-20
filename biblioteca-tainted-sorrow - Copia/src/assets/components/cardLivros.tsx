/*h-31.25 w-24 */

interface CardLivrosProps {
    titulo: string
    autor: string
    categoria: string
    img: string
}

function cardLivros({ titulo, autor, categoria, img}: CardLivrosProps) {

    return (
        <div>
        <article className="flex gap-6 border-b border-gray-300 py-6 mx-3">
            <div className="h-32 w-24 shrink-0 border-2 border-black">
                <img className="h-full w-full object-cover" src={img} alt="{`Capa do livro ${titulo}`"></img>
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900">
                    {titulo}
                </h3>
                <p className="mt-2 text-gray-600">
                    {autor}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    {categoria}
                </p>
            </div>
        </article>
    </div>
    )
}

export default cardLivros