import { useRef } from "react";
import type { Database } from "../../database.types";
type Gift = Database["public"]["Tables"]["gifts"]["Row"];

const GiftCard = ({gift}: {gift: Gift}) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    const expand = () => {
        if (overlayRef.current)
            overlayRef.current.style.maxHeight = `${overlayRef.current.scrollHeight}px`;
    };
    const collapse = () => {
        if (overlayRef.current)
            overlayRef.current.style.maxHeight = "3rem";
    };

    return (
        <div className="gift-card group relative rounded-2xl overflow-hidden m-2 transition-transform duration-300 hover:scale-105 hover:z-10"
            onMouseEnter={expand}
            onMouseLeave={collapse} >
            <img className="w-full object-cover aspect-square bg-stone-900" src={gift.image_url ?? undefined} alt={gift.title} />
            <div
                ref={overlayRef}
                className="absolute bottom-0 left-0 right-0 p-3 text-white overflow-hidden transition-all duration-300"
                style={{ 
                    maxHeight: "3rem",
                    background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))"
                }}>
                <h1 className="font-semibold truncate">{gift.title}</h1>
                <p className="font-semibold pt-2">{gift.description}</p>
            </div>
        </div>
    );
};
export default GiftCard;