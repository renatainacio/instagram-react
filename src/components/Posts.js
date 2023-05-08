import Post from "./Post";

const items = [
    {
        imgUsuario:"assets/img/meowed.svg",
        usuario:"meowed",
        imgConteudo:"assets/img/gato-telefone.svg",
        altConteudo:"gato-telefone",
        imgCurtida:"assets/img/respondeai.svg",
        usuarioCurtida: "respondeai",
        numeroCurtidas: "101.523"
    },
    {
        imgUsuario:"assets/img/barked.svg",
        usuario:"barked",
        imgConteudo:"assets/img/dog.svg",
        altConteudo:"dog",
        imgCurtida:"assets/img/adorable_animals.svg",
        usuarioCurtida: "adorable_animals",
        numeroCurtidas: "99.159"
    },
    {
        imgUsuario:"assets/img/adorable_animals.svg",
        usuario:"adorable_animals",
        imgConteudo:"assets/img/gato-telefone.svg",
        altConteudo:"gato-telefone",
        imgCurtida:"assets/img/meowed.svg",
        usuarioCurtida: "meowed",
        numeroCurtidas: "67.926"
    }
]

export default function Posts() {
    return (
        <div className="posts">
            {items.map((item) =>
            <Post
            key={item.usuario}
            imgUsuario={item.imgUsuario}
            usuario={item.usuario}
            imgConteudo={item.imgConteudo}
            altConteudo={item.altConteudo}
            imgCurtida={item.imgCurtida}
            usuarioCurtida={item.usuarioCurtida}
            numeroCurtidas={item.numeroCurtidas}
            />
            )}
        </div>
    )
}