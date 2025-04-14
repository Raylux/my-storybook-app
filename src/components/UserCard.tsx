import { useState } from "react";
import { Button } from "./Button";

type UserCardProps = {
    name: string;
    email: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, email }: UserCardProps) => {
    const [isUserConfirmed, setIsUserConfirmed] = useState(false);
    const confirmUser = async () => {
        return new Promise<void>(
            (resolve) => {
                setTimeout(() => {
                    setIsUserConfirmed(true);
                    resolve();
                }, 2000);
            }
        )
    }

    return (
        <div style={{border: "1px solid #ccc", padding: "1rem"}}>
            <h3>{ name ? name : "Errore: nessun nome"}</h3>
            <p>{email}</p>
            <Button
                label="Confirm"
                onClick={confirmUser}
            />
            {
                isUserConfirmed && <p>User confirmed!</p>
            }
        </div>
    );
};