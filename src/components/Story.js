export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.src} alt={props.usuario}/>
            </div>
            <div className="usuario">
                {props.usuario}
            </div>
        </div>
    )
}
