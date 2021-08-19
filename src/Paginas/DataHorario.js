import React, { Component } from 'react';

export default function DataHorario(){
    const dh = () => {
        let date = new Date()
        return date
    }

    const mesMDHM = 'month'
    const diaMDHM = 'day'
    const horaMDHM = 'hour'
    const minutoMDHM = 'minute'
    const segundoMDHM = 'second'
    const zeroMDHM = (MDHM, prop) => {
        let zero = '0' + prop
        switch (MDHM) {
            case 'month': 
                return prop <= 9 ? zero : prop
            case 'day': 
                return prop <= 9 ? zero : prop
            case 'hour': 
                return prop <= 9 ? zero : prop    
            case 'minute': 
                return prop <= 9 ? zero : prop  
            case 'second': 
                return prop <= 9 ? zero : prop  

            default:
                break;
        }
    }
    return(
        <>
            <span>
                Hoje {}
                    {zeroMDHM(diaMDHM, dh().getDate())}/ 
                    {zeroMDHM(mesMDHM, dh().getMonth())}/ 
                    {dh().getFullYear()},
                exatamente as <b>
                    {zeroMDHM(horaMDHM, dh().getHours())}:
                    {zeroMDHM(minutoMDHM, dh().getMinutes())}:
                    {zeroMDHM(segundoMDHM, dh().getSeconds())}
                </b>
            </span> 
        </>
    )
}