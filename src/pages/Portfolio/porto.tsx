import Porto1 from "../../assets/images/porto/porto-1/thumbnails.png";
import gallery1_1 from "../../assets/images/porto/porto-1/1.svg";
import gallery1_2 from "../../assets/images/porto/porto-1/2.svg";
import gallery1_3 from "../../assets/images/porto/porto-1/3.svg";
import gallery1_4 from "../../assets/images/porto/porto-1/4.svg";
import html from "../../assets/icons/html.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import javascript from "../../assets/icons/javascript.svg";

const Porto: {
  desc: string;
  feat: Array<string>;
  image: string;
  link: string;
  title: string;
  slug: string;
  tech: Array<object>;
  gallery: Array<string>;
}[] = [
  {
    desc: "",
    feat: [
      "Beautiful Design",
      "Carousel",
      "Add to Cart",
      "Plus Minus Item on Cart",
    ],
    image: Porto1,
    link: "https://hefa-store.abuabdirohman.com/",
    title: "Hefa Store - Fashion Store Online",
    slug: "hefa-store",
    tech: [
      {
        icon: bootstrap,
        name: "Bootstrap",
      },
      {
        icon: javascript,
        name: "Javascript",
      },
      {
        icon: html,
        name: "HTML",
      },
    ],
    gallery: [gallery1_1, gallery1_2, gallery1_3, gallery1_4],
  },
];

export default Porto;
