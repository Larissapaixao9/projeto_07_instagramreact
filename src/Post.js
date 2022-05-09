import React, {useState} from 'react'

function TopoPost(props){
    return(
    <div class="topoPost">
            <div class="nome-imagem">
                <img class="perfil-fic" src={props.PerfilImg} />
                <p class="nome">{props.Nome}</p>
             </div>
                <ion-icon class="pontos" name="ellipsis-horizontal-outline"></ion-icon>
            </div>)}

function IconesApenas(props){
    return(
        <div >
                <ion-icon class={props.classe} name={props.IconeNome}></ion-icon>
            </div>
    )}

function IconesRodape(props){
    const [state,SetState]=useState(false)
    const toggle=()=>{
        SetState(!state)
        console.log("clicou")}
    return(
        <div class="icones-rodape">
            <div class="coracao-balao-aviao">
                <IconesApenas classe={"coracao" + (state ? "red":"")} IconeNome="heart-outline"/>
                <IconesApenas classe="balao" IconeNome="chatbubble-outline"/>
                <IconesApenas classe="aviao-icone" IconeNome="paper-plane-outline"/>
            </div>
            
            <div>
                <ion-icon class="mark" name="bookmark-outline"></ion-icon>
            </div>
        </div>)}

function NomeRodape(props){
    return(
        <div class="nome-rodape">
        <div class="curtido">
            <img class="imagem-de-rodape" src={props.imagem} />
            <p class="texto-curtido">{props.curtido}</p>
        </div>
        </div>
    )}

function ImagemPost(props){
    return(
        <img onClick={CLick} className='img-post-2 (state ? "red":"")' src={props.IMAGEMDOPOST}/>)}

function CLick(){
        console.log("clicou")
}

export default function Post(){
    const ListaPosts=[
    <TopoPost Nome="Gato" PerfilImg="meowed 1.png"/>,
    <ImagemPost IMAGEMDOPOST='post1.jpg' />,
    <IconesRodape />,
    <NomeRodape imagem="9gag 1.png" curtido="Curtido por respondeai e outras 101.523 pessoas"/>
    ]

    return(
        <div >
                <div class="post-1">
                    {ListaPosts.map(item=><div>{item} </div>)}
                </div>

                <div class="post-1">
                    {ListaPosts.map(item=><div>{item} </div>)}
                </div>
        </div>
   )
}