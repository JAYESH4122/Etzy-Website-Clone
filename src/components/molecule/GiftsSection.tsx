import GiftCard from "../atom/GiftCard";
import type { GiftCategoryData, GiftCardProps } from "../../types/datatypes";
import data from "../../data/data.json";

const { giftCategory }: { giftCategory: GiftCategoryData } = data;

const GiftsSection = () => {
  return (
    <div className="gift-section-container">
      <div className="gift-section-wrapper">
        <div className="gift-title-wrapper">
          <h2>{giftCategory.title}</h2>
        </div>
        <div className="gift-card-container">
          <div className="gift-card-wrapper">
            {giftCategory.giftcard.map((card: GiftCardProps, index: number) => (
              <GiftCard
                key={index}
                src={card.src}
                alt={card.alt}
                caption={card.caption}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsSection;
