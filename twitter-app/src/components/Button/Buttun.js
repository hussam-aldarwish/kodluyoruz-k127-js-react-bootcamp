import React from 'react';
import {useMediaQuery} from "react-responsive";
import Twite from '../icon/Twite';
import "./Button.scss"

export default function Button() {
    const isTablet = useMediaQuery({minWidth: 1260})
    const isTabletx = useMediaQuery({maxWidth: 1260})
    return (
        
        <>
          <button type='button'>
         {isTabletx && <Twite />}
           
        {isTablet && <p>Twitte</p>}
         </button>
        </>
    )
}
