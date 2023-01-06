import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Header(){
    return(
        <div>
        <HeaderStyle>
            <h1>Movie App</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/favorite'>Favorite</Link></li>
            </ul>
        </HeaderStyle>
        </div>
    )
}

const HeaderStyle= styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        background-color:grey;
    h1{
        padding-left:10%;
    }
    ul {
        display:flex;
        flex-direction:row;
        li{
            list-style:none;
            padding:20px;
            a{
                color:black;
                font-weight:bold;
                text-decoration:none;
            }
    }}
`
