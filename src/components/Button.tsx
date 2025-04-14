import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
}

/**
 * Componente bottone che riceve via props una label e una funzione onClick
 * 
 * @param label - Testo del bottone
 * @param onClicl - Funzione da eseguire al click
 * @returns Un bottone con la label passata come props
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick}) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
}