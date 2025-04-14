import React, { useState } from "react";

type ButtonProps = {
    label: string;
    onClick:  () => Promise<void>;
    isDisabled?: boolean;
}

/**
 * Componente bottone che riceve via props una label e una funzione onClick
 * 
 * @prop label - Testo del bottone
 * @prop onClick - Funzione da eseguire al click
 * @returns Un bottone con la label passata come props
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick, isDisabled = false}) => {
    const [disabled, setDisabled] = useState(isDisabled);

    const handleClick = async () => {
        setDisabled(true);

        await onClick();

        setDisabled(false);
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}