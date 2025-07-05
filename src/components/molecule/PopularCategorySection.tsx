import PopularCard from "../atom/PopularCard";
import data from "../../data/data.json";
import type { PopularCardProps } from "../../types/datatypes";


const PopularCategorySection = () => {
  const { popularCard, title } = data.popularcategory;

  return (
    <div>
      <div className="hp-spacing-small"></div>
      <div className="popular-category-container">
        <div className="popular-category-wrapper">
          <h2>{title}</h2>
          <div className="popular-list-container">
            <div className="popular-list-wrapper">
              {popularCard.map((card: PopularCardProps, index: number) => (
                <PopularCard
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
    </div>
  );
};

export default PopularCategorySection;
