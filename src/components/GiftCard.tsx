import type { Database } from "../../database.types";
type Gift = Database["public"]["Tables"]["gifts"]["Row"];

const GiftCard = ({gift}: {gift: Gift}) => (
    <div className="rounded-2xl">
        <img className="rounded-2xl" src={gift.image_url ?? undefined} alt={gift.title} />
        <h1>{gift.title}</h1>
    </div>
);

export default GiftCard;
