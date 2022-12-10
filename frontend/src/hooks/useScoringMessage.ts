import axios from 'axios';
import {useState} from 'react';

export const useScoringMessage = () => {
    const [message, setMessage] = useState<string[]>([]);
    const [isPending, setPending] = useState(false);

    const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setPending(true);
        
        const data = (new FormData(e.currentTarget)).entries();
        const darr = [...data] as string[][];
        const urlparams = new URLSearchParams(darr).toString();
    
        try {
            const result = await axios.post('/api/p/score', urlparams, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            });
    
            console.log(result.data);
            setMessage(prev => [...prev, result.data.message]);
        }
        catch {
            setMessage(prev => [...prev, "에러 발생!"]);
        }
        setPending(false);
    }

    const clear = () => {
        setMessage([]);
    };
    return {
        message,
        isPending,
        submit,
        clear
    };
}