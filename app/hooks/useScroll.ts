import { useState, useEffect } from "react";

export function useScroll(threshold = 0) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Executa uma vez para verificar o estado inicial caso a página recarregue já scrolled
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return isScrolled;
}