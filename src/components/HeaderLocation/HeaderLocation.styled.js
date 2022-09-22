import styled from "styled-components";
import {RiExchangeDollarLine} from 'react-icons/ri';

export const Title = styled.h2`
color: ${p => p.theme.colors.black};
font-size: ${p => p.theme.fontSizes.l};
background: linear-gradient(90deg, rgba(41,4,255,1) 0%, rgba(255,252,0,1) 100%);
padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
border-radius: ${p => p.theme.radii.lg};
`

export const LocationInput = styled.input`
height: 45px;
min-width: 205px;
border-radius: ${p => p.theme.radii.lg} 0 0 ${p => p.theme.radii.lg} ;
padding: ${p => p.theme.space[3]}px;
border: ${p => p.theme.borders.none};
outline: none;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
`

export const LocationButton = styled.button`
height: 45px;
border-radius: 0 ${p => p.theme.radii.lg} ${p => p.theme.radii.lg} 0 ;
border: ${p => p.theme.borders.none};
`

export const Exchange = styled(RiExchangeDollarLine)`
   font-size: ${p => p.theme.fontSizes.l};
    transition:transform linear 500ms ;
   :hover{
    transform: rotate(180deg);
   }
`