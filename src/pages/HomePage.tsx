import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../database.types"
import GiftCard from "../components/GiftCard";

const supabase = createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL as string,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string
);

function HomePage() {
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
        <>
            <div className="h-20 flex justify-center items-center">
                <h1>Filter Section</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 mx-4 sm:mx-8 lg:mx-10 xl:mx-20">
                {[...gifts]
                    .sort((a, b) => a.id - b.id)
                    .map((gift) => (
                        <GiftCard key={gift.id.toString()} gift={gift} />
                ))}
            </div>
        </>
    )
}

export default HomePage;