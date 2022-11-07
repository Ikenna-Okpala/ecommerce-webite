import styled from "styled-components"
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles"

export const Img = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
`

export const Name = styled.span`
      width: 90%;
      margin-bottom: 15px;
`

export const Price = styled.span`
      width: 10%;
`

export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    ${Name}{
      width: 90%;
      margin-bottom: 15px;
    }

    ${Price} {
      width: 10%;
    }
`

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${Img}{
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}{
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    Img {
      opacity: 0.8;
    }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }

`

