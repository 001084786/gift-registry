import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../database.types"

const supabase = createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL as string,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string
);

function App() {
    const [gifts, setGifts] = useState<Database["public"]["Tables"]["gifts"]["Row"][]>([]);

    useEffect(() => {
        fetchGifts();
    }, []);

    async function fetchGifts() {
        const { data, error } = await supabase
            .from("gifts")
            .select("*");
        
        if (error) {
            console.error(error);
            return;
        }
        setGifts( data || []);
    }

    return (
        <ul>
            {gifts.map((gift) => (
                <li key={gift.id.toString()}>
                    {gift.title} - {gift.description}
                </li>
            ))}
        </ul>
    )
}

export default App;