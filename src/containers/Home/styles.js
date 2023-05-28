import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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

export const InputLabel = styled.p`

    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    padding-left: 15px;
    
  
`

export const Input = styled.input`

    width: 342px;
    height: 50px;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.25);
    border: none;
    outline: none;
    padding-left: 15px;
    margin-bottom: 30px;

    color: #FFFFFF;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;

`
export const Button = styled.button`

    height: 60px;
    background: #D93856;
    border: none;
    color: #FFFFFF;
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
    background: #FFFFFF;
    color: #D93856;
    
}
`

