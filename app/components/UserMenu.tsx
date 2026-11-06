import React from "react";

export function UserMenu() {
    return (
        <div className="flex items-center space-x-4">
            <p className="hidden cursor-not-allowed lg:inline">Kids</p>
            <img 
                src="https://rb.gy/g1pwyx" 
                alt="Perfil de usuário"
                className="cursor-pointer rounded" 
            />
        </div>
    );
}