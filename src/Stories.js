import React from "react"

function ComponenteCard(props){
    return(
        <div class="cards">
                        <div class="imagens-status-1">
                            <img src={props.imagem} />
                            <p class="a">    {props.nome}</p>
                        </div>
                    </div>)
}
export default function CaixaStories(){
    const MeusStories=[
    <ComponenteCard nome="jose" imagem="9gag 1.png"/>,
    <ComponenteCard nome="maria" imagem="barked 1.png"/>,
    <ComponenteCard nome="jose" imagem="9gag 1.png" />,
    <ComponenteCard nome="maria" imagem="barked 1.png"/>,
    <ComponenteCard nome="jose" imagem="9gag 1.png"/>,
    <ComponenteCard nome="maria" imagem="barked 1.png"/>,
    <ComponenteCard nome="jose" imagem="9gag 1.png"/>,
    <ComponenteCard nome="maria" imagem="barked 1.png"/>,
    <ion-icon class="setinha" name="chevron-forward-circle-sharp"></ion-icon>,
    <ComponenteCard nome="jose" imagem="9gag 1.png"/>
    ]

    return(
        <div className="caixaStories ">

            <div class="conteudo-stories">
                <div class="stories-esquerda">
                    <div class="left">

                        {MeusStories.map(item=><div>{item}</div>)}

                    </div>
                </div>
            </div>
        </div>
       
    )
}