import React from "react";

function PropsTopo(props){
    return(
        <div>
            <ion-icon class={props.Classe} name={props.Nome}></ion-icon>
        </div>)}

export default function Topo(){
    const ListaTopo=[
        <PropsTopo Classe="aviao-icone" Nome="paper-plane-outline" />,
        <PropsTopo Classe="bussola-icone" Nome="compass-outline" />,
        <PropsTopo Classe="coracao" Nome="heart-outline" />,
        <PropsTopo Classe="pessoa-icone" Nome="person-outline" />
    ]
    return(
        <div class="topo">
            <div class="icones-left">
                <ion-icon class="instagram-icone" name="logo-instagram"></ion-icon>
                <div class="linha"></div>
                <a href="https://www.instagram.com">  <img class="logo" src="logo.png" alt="instagram"/></a>
            </div>

            <div>
                <input class="pesquisar" type="text" name="pesquisar" placeholder="                pesquisar"/>
            </div>
                <div className="displayFlex">
                    {ListaTopo.map(item=><div>{item}</div>)}
                </div>
        </div>)}