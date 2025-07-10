import saveNowData from "../../data/data.json";
import type { SaveNowData } from "../../types/datatypes";

const SaveNowSection = () => {
  const data: SaveNowData = saveNowData;

  return (
    <div className="save-now-section">
      <div className="save-now-heading">
        <h2>{data.heading}</h2>
      </div>
      <ul className="save-now-list">
        {data.items.map((item) => (
          <li key={item.id}>
            <div className="save-now-image-container">
              <img loading="lazy" src={item.imageUrl} alt={item.category} />
            </div>
            <p>{item.category}</p>
            <p>{item.discount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaveNowSection;
