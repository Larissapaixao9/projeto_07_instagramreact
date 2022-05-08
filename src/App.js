import React from "react"
import Topo from './Topo'
import Topo2 from "./Topo2"
import Stories from "./Stories"
import Post from "./Post"
import SideBar from "./SideBar"
import RodapeMobile from "./RodapeMobile"
import Conteudo from "./Conteudo"

export default function App(){
    return(
        <div>
        <Topo />
        <Topo2 />
        <Conteudo />
        <RodapeMobile />
        </div>
    )
}

