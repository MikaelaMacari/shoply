import BestQualityIcon from "public/assets/images/services_1.svg";
import FreeShippingIcon from "public/assets/images/services_2.png";
import WarrantyIcon from "public/assets/images/services_3.svg";
import { BenefitsInterface } from "src/ts/interfaces/benefits";

export const benefits: BenefitsInterface[] = [
  {
    src: BestQualityIcon,
    alt: "Best Quality Icon",
    title: "Best Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id",
  },
  {
    src: FreeShippingIcon,
    alt: "Free Shipping Icon",
    title: "Free Shipping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id",
  },
  {
    src: WarrantyIcon,
    alt: "Warranty Icon",
    title: "Warranty",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id",
  },
];
