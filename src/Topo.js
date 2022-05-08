import React from "react";

export default function Topo(){
    return(
        <div class="topo">

            <div class="icones-left">
                <ion-icon class="instagram-icone" name="logo-instagram"></ion-icon>
                <div class="linha"></div>
                <a href="https://www.instagram.com">  <img class="logo" src="logo.png" alt="instagram"/></a>
            </div>

            <div>
                <input class="pesquisar" type="text" name="pesquisar" placeholder="                pesquisar"/></div>
                <div class="icones-right">
                    <ion-icon class="aviao-icone" name="paper-plane-outline"></ion-icon>
                    <ion-icon class="bussola-icone" name="compass-outline"></ion-icon>
                    <ion-icon class="coracao" name="heart-outline"></ion-icon>
                    <ion-icon class="pessoa-icone" name="person-outline"></ion-icon>
                </div>

        </div>

    )
}