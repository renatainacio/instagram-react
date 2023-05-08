import { useState } from "react"

export default function Post(props) {
  const [curtida, setCurtida] = useState("heart-outline");
  const [salvo, setSalvo] = useState("bookmark-outline");
  const [classes, setClasses] = useState("");
  function curtir() {
    if (curtida === "heart")
    {
      setCurtida("heart-outline");
      setClasses("preto");
    }
    else
    {
      setClasses("vermelho");
      setCurtida("heart");
    }
  }
  function curtirFoto() {
    if (curtida === "heart-outline")
    {
      setClasses("vermelho");
      setCurtida("heart");
    }
  }
  function salvar() {
    if (salvo === "bookmark")
      setSalvo("bookmark-outline");
    else
      setSalvo("bookmark");
  }
    return (
        <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.imgUsuario} alt={props.usuario}/>
            {props.usuario}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src={props.imgConteudo} alt={props.altConteudo} onClick={curtirFoto} />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name={curtida} onClick={curtir} class={classes}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={salvo} onClick={salvar}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.imgCurtida} alt={props.usuarioCurtida}/>
            <div className="texto">
              Curtido por <strong>{props.usuarioCurtida}</strong> e <strong>outras {props.numeroCurtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}