import ShopCard from '../atom/DiscoverShopCard';
import data from '../../data/data.json';
import type { DiscoverShopsSectionData } from '../../types/datatypes';

const { discoverShops } = data as DiscoverShopsSectionData;

const DiscoverShops = () => {
  return (
    <div className="discover-shops-section">
      <div className="discover-shops-container">
        <div className="discover-shops-content">
          <p>{discoverShops.subtitle}</p>
          <h2>{discoverShops.title}</h2>
          <div className="discover-shops-btn">{discoverShops.ctaText}</div>
        </div>
        {discoverShops.shops.map((shop, index) => (
          <ShopCard key={index} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverShops;