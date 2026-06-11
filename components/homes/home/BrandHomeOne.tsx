import PartnersSection from "../../partners/PartnersSection";

interface BrandHomeOneProps {
  style?: boolean;
}

/** @deprecated Use PartnersSection directly */
const BrandHomeOne = ({ style }: BrandHomeOneProps) => {
  return <PartnersSection compactTop={Boolean(style)} />;
};

export default BrandHomeOne;
