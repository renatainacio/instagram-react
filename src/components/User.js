import { useState } from "react";

export default function User() {
  const [user, setUser] = useState('catanacomics');
  const [img, setImg] = useState('assets/img/catanacomics.svg');
  function mudarNome()
  {
    let novoNome = prompt("Informe o novo nome")
    if (novoNome)
      setUser(novoNome);
  }
  function mudarImagem() {
    let novaImagem = prompt("Informe a nova imagem")
    if (novaImagem)
      setImg(novaImagem);
  }
    return (
        <div className="usuario">
          <img src={img} alt="imagem de perfil" onClick={mudarImagem}/>
          <div className="texto">
            <span>
              <strong>{user}</strong>
              <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
            </span>
          </div>
        </div>
    );
}