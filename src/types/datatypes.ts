export interface HeaderData {
  logo: {
    altText: string;
  };
  categories: {
    button: string;
  };
  search: {
    placeholder: string;
  };
  navigation: {
    signIn: string;
    country: string;
  };
  subHeader: {
    gifts: string;
    charmShop: string;
    homeFavorites: string;
    fashionFinds: string;
    registry: string;
  };
}

export interface HeroImageAlts {
  mainImage: string;
  secondaryImage: string;
}

export interface BottomContent {
  title: string;
  subtitle: string;
}

export interface HeroSectionData {
  title: string;
  subtitle: string;
  shopNowButton: string;
  imageAlts: HeroImageAlts;
  "bottom-content": BottomContent;
}
