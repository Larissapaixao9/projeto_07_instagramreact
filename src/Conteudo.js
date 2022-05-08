import React from 'react'
import Stories from "./Stories"
import Post from "./Post"
import SideBar from "./SideBar"

export default function Conteudo(){
    return(
    <div className="displayFlex">
    <div>
    <Stories />
    <Post />
    </div>
    <div >
    <SideBar />
    </div>
    </div>)
}