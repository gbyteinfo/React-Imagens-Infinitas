import React, { Component } from 'react';

export default function DataHorario(){
    const dh = () => {
        let date = new Date()
        return date
    }
    
    return(
        <>

            <span>
                Hoje {dh().getDate()}/{dh().getMonth()}/{dh().getFullYear()},
                exatamente as <b>{dh().toLocaleTimeString()}</b>
            </span> 

        </>
    )
}