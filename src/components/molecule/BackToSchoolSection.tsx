import BackToSchoolCard from "../atom/BackToSchoolCard";
import type { BackToSchoolSectionData } from "../../types/datatypes";
import data from "../../data/data.json";

const { backToSchool } = data as BackToSchoolSectionData;

const BackToSchoolSection = () => {
  return (
    <div className="back-to-school-section">
      <div className="back-to-school-container">
        <div className="back-to-school-wrapper">
          <div className="row-one-column-first">
            <p className="editors-pick-text">{backToSchool.subtitle}</p>
            <h2 className="back-to-school-heading">{backToSchool.title}</h2>
            <a className="shop-link">{backToSchool.ctaText}</a>
          </div>

          <BackToSchoolCard
            {...backToSchool.images[0]}
            className="row-one-column-third"
          />
          <BackToSchoolCard
            {...backToSchool.images[1]}
            className="row-one-column-fourth"
          />
          <BackToSchoolCard
            {...backToSchool.images[2]}
            className="row-one-column-third"
          />

          <BackToSchoolCard
            {...backToSchool.images[3]}
            className="row-one-column-fourth"
          />
          <BackToSchoolCard
            {...backToSchool.images[4]}
            className="row-one-column-fourth"
          />
          <BackToSchoolCard
            {...backToSchool.images[5]}
            className="row-one-column-fourth"
          />

          <div className="special-staple row-one-column-second row-one-column-fourth">
            <div className="row-one-column-second-container flex-special-staple">
              <p>{backToSchool.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackToSchoolSection;
