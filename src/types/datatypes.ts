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

export interface PopularCardProps {
  src: string;
  alt: string;
  caption: string;
}

export interface PopularCategory {
  title: string;
  popularCard: PopularCardProps[];
}

export interface GiftCategoryData {
  title: string;
  giftcard: GiftCardProps[];
}

export interface GiftCardProps {
  src: string;
  alt: string;
  caption: string;
}

export interface FullData {
  popularcategory: PopularCategory;
}