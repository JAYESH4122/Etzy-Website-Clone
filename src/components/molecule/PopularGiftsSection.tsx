import PopularGiftsCard from "../atom/PopularGiftsCard";
import type {
  PopularGiftsSectionType,
  PopularGiftsCardProps,
} from "../../types/datatypes";
import data from "../../data/data.json";

const {
  popularGiftsSectionData,
}: { popularGiftsSectionData: PopularGiftsSectionType } = data;

const PopularGiftsSection = () => {
  return (
    <>
      <div className="space-default"></div>
      <div className="popular-gifts-section-container">
        <div className="popular-gifts-title-container">
          <h2>{popularGiftsSectionData.title}</h2>
        </div>
        <div className="popular-gifts-card-grid">
          {popularGiftsSectionData.popularGiftsCard.map(
            (card: PopularGiftsCardProps, index: number) => (
              <PopularGiftsCard
                key={index}
                productImageSrc={card.productImageSrc}
                heading={card.heading}
                ratingCount={card.ratingCount}
                rupeesign={card.rupeesign}
                price={card.price}
                offerprice={card.offerprice}
                offerpercentage={card.offerpercentage}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PopularGiftsSection;
