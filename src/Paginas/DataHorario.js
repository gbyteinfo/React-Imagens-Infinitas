import React, { Component } from 'react';

export default function DataHorario(){
    const dh = () => {
        let date = new Date()
        return date
    }
    return(
        <>

            <span>
                Hoje {dh().toLocaleDateString()},
                exatamente as <b>{dh().toLocaleTimeString()}</b>
            </span> 

        </>
    )
}