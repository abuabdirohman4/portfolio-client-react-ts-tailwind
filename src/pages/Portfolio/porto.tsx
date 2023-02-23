import Porto1 from "../../assets/images/porto/porto-1/thumbnails.png";
import gallery1_1 from "../../assets/images/porto/porto-1/1.svg";
import gallery1_2 from "../../assets/images/porto/porto-1/2.svg";
import gallery1_3 from "../../assets/images/porto/porto-1/3.svg";
import gallery1_4 from "../../assets/images/porto/porto-1/4.svg";
import Porto2 from "../../assets/images/porto/porto-2/thumbnails.svg";
import gallery2_1 from "../../assets/images/porto/porto-2/1.svg";
import gallery2_2 from "../../assets/images/porto/porto-2/2.svg";
import gallery2_3 from "../../assets/images/porto/porto-2/3.svg";
import gallery2_4 from "../../assets/images/porto/porto-2/4.svg";
import Porto3 from "../../assets/images/porto/porto-3/thumbnails.svg";
import gallery3_1 from "../../assets/images/porto/porto-3/1.svg";
import gallery3_2 from "../../assets/images/porto/porto-3/2.svg";
import gallery3_3 from "../../assets/images/porto/porto-3/3.svg";
import gallery3_4 from "../../assets/images/porto/porto-3/4.svg";
import Porto4 from "../../assets/images/porto/porto-4/thumbnails.svg";
import gallery4_1 from "../../assets/images/porto/porto-4/1.svg";
import gallery4_2 from "../../assets/images/porto/porto-4/2.svg";
import gallery4_3 from "../../assets/images/porto/porto-4/3.svg";
import gallery4_4 from "../../assets/images/porto/porto-4/4.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import cpanel from "../../assets/icons/cpanel.svg";
import elementor from "../../assets/icons/elementor.svg";
import html from "../../assets/icons/html.svg";
import javascript from "../../assets/icons/javascript.svg";
import mysql from "../../assets/icons/mysql.svg";
import next from "../../assets/icons/next.svg";
import tailwind from "../../assets/icons/tailwind.svg";
import vercel from "../../assets/icons/vercel.svg";
import wordpress from "../../assets/icons/wordpress.svg";

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
    desc: "Jadikan Hari Pertama Lebaranmu Meriah & Memorable",
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
  {
    desc: "Learn Whatever You Like With Fun",
    feat: [
      "Beautiful Design",
      "Carousel",
      "Add to Cart",
      "Plus Minus Item on Cart",
    ],
    image: Porto2,
    link: "https://youtu.be/MV-uN2i2vig",
    title: "Sinaw Online - Learn Anywhere Online",
    slug: "sinaw-online",
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
    gallery: [gallery2_1, gallery2_2, gallery2_3, gallery2_4],
  },
  {
    desc: "Focus on Your Startup, We Take Care Of All Your Legal",
    feat: [
      "Menu Responsive on Mobile",
      "Beautiful Design",
      "Responsive Design",
    ],
    image: Porto3,
    link: "https://startup-law.abuabdirohman.com/",
    title: "Startup Law - Take Care Your Legal",
    slug: "startup-law",
    tech: [
      {
        icon: next,
        name: "NextJs",
      },
      {
        icon: tailwind,
        name: "Tailwind",
      },
      {
        icon: vercel,
        name: "Vercel",
      },
    ],
    gallery: [gallery3_1, gallery3_2, gallery3_3, gallery3_4],
  },
  {
    desc: "Bantu anak-anak di Papua untuk mendapatkan air bersih",
    feat: [
      "Donation Feature",
      "Blog Post",
      "Responsive Design",
    ],
    image: Porto4,
    link: "https://donasi.abuabdirohman.com/",
    title: "Beri 10000 - Siapa Beri10000 ? ",
    slug: "beri-10000",
    tech: [
      {
        icon: wordpress,
        name: "Wordpress",
      },
      {
        icon: elementor,
        name: "Elementor",
      },
      {
        icon: mysql,
        name: "MySQL",
      },
      {
        icon: cpanel,
        name: "Cpanel",
      },
    ],
    gallery: [gallery4_1, gallery4_2, gallery4_3, gallery4_4],
  },
];

export default Porto;
