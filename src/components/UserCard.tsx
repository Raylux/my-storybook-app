import { useState } from "react";
import { Button } from "./Button";

type UserCardProps = {
    name: string;
    email: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, email }: UserCardProps) => {
    const [isUserConfirmed, setIsUserConfirmed] = useState(false);
    let isUserValid = false;


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

    if(name.trim() && email.trim()) isUserValid = true;

    return (
        <div style={{border: "1px solid #ccc", padding: "1rem"}}>
            <h3>{name ? name : "No name found"}</h3>
            <p>{email ? email : "No email found"}</p>

            <Button
                label="Confirm"
                onClick={confirmUser}
                isDisabled={!isUserValid}
            />

            {
                isUserConfirmed && <p>User confirmed!</p>
            }
        </div>
    );
};