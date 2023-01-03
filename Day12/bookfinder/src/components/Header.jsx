import styled from "styled-components"
function Header(){
    return(
        <div>
            <HeaderStyle>
            <h1>Book Finder</h1>
            </HeaderStyle>
        </div>
    )
}
export default Header

const HeaderStyle=styled.h1`
    font-size:20px;
    display:flex;
    justify-content:center;
    background-color:blue;
`
