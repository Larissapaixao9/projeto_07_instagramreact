import React from 'react'

function NomePerfilSug(props){
    return(
        <div>
            <p class={props.classe}>{props.nomen}</p>
        </div>
    )}
function Follow(props){
    return(
        <p className={props.classes}>{props.texto}</p>
    )}
function Sugestao(props){
    return(
        <div>
            <img class={props.clas} src={props.fig} />
        </div>
    )}
    function Informacoes(props){
        return(
            <p className={props.classe}>{props.infoTexto}</p>
        )}
    function SugeVerTudo(props){
        return (
            <div class={props.classeDiv}>
            <p class={props.classe1}>{props.texto1}</p>
            <p class={props.classe2}>{props.texto2}</p></div>
        )}

function Usuario(props){
    return(
        <div class={props.classe}>
        <img src={props.img} />

    <div>
        <p clas={props.clas}>{props.nomeUsuario}</p>
        <p clas2={props.clas}>{props.LastnameUsuario}</p>
    </div>
</div>
    )}

export default function SideBar(){
    const ListaUsuario=[<Usuario classe="profile-nome-main-left" img="comic.png" clas="a01" nomeUsuario="catanacomics" LastnameUsuario="Catana" clas2="a02"/>,<SugeVerTudo classeDiv="conj" classe1="t01" classe2="ver-texto" texto1="Sugestoes para voce" texto2="Ver tudo" />]

    const ListaSugestaoImagens=[
        <Sugestao clas='conjunto-imagens-5' fig='badvibes.png'/>,
        <Sugestao clas='conjunto-imagens-5' fig='comic-2.png'/>,
        <Sugestao clas='conjunto-imagens-5' fig='comic-2.png'/>,
        <Sugestao clas='conjunto-imagens-5' fig='comic-2.png'/>,
        <Sugestao clas='conjunto-imagens-5' fig='comic-2.png'/>
    ]
    const ListaSugestaoNomes=[
        <NomePerfilSug nomen="bad.vibes.memes" classe="t03" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t02" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t03" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t02" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t03" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t03" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t02" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t03" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t02" />,
        <NomePerfilSug nomen="bad.vibes.memes" classe="t03" />
    ]
    const ListaFollow=[
        <Follow classes="seguir" texto="Seguir" />,
        <Follow classes="seguir" texto="Seguir" />,
        <Follow classes="seguir" texto="Seguir" />,
        <Follow classes="seguir" texto="Seguir" />,
        <Follow classes="seguir" texto="Seguir" />
    ]
    const LItaInformacoes=[
        <Informacoes classe="info" infoTexto="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
        Termos • Localizações • Contas mais relevantes • Hashtags • 
        Idioma"/>,
        <Informacoes classe="info" infoTexto="© 2021 INSTAGRAM DO FACEBOOK" />
    ]
    return(
    <div class="segundo">
        {ListaUsuario.map(item=><div>{item}</div>)}
        <div class="sugg">
            <div>
                {ListaSugestaoImagens.map(item=><div>{item}</div>)}
            </div>
            
            <div class="nome-do-perfil-sug">
                {ListaSugestaoNomes.map(item=><div>{item}</div>)}
            </div>
            
            <div class="follow">
                {ListaFollow.map(item=><div>{item}</div>)}
            </div>
        </div>
            {LItaInformacoes.map(item=><div>{item}</div>)}
        </div>)}