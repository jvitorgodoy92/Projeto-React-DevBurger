import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    background: #0A0A10;
    
`
export const Image = styled.img`

    height: 14rem;
    margin-top: 1.5rem;

`
export const H1 = styled.h1`

    color: #FFFFFF;
    font-size: 28px;
    font-weight: 700;
    line-height: 32.81px;   
    margin-top: 25px;
`

export const ContainerItens = styled.div `

    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding-left: 10px;

`

export const Button = styled.button`

    height: 60px;
    width: 342px;
    background: #FFFFFF;
    border: none;
    color: #D93856;
    font-size: 17px;
    font-weight: 900;
    line-height: 2.5px;
    display: flex;    
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    cursor: pointer;
    text-decoration: none;

&:hover{
    opacity: .7;
}
&:active{
    background: #D93856;
    color: #FFFFFF;
    
}
`

export const User = styled.li `
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    margin-top: 20px;

    width: 342px;
    height: 50px;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.25);
    border: none;
    outline: none;
    
    p{
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    }    

    button{
    background: none;
    border: none;
    cursor: pointer;

    &:active{
        opacity: .5;
    }
    }
    
`
