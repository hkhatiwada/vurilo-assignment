import { StaticImageData } from "next/image";
import plant1 from "../../public/indoor2.png.png";
import plant2 from "../../public/indoor3.png.png";
import plant3 from "../../public/indoor4.png.png";

export interface SlideInfo {
  id: number;
  name: string;
  image: StaticImageData;
  price: string;
}

const slideInfo: SlideInfo[] = [
  { id: 1, name: "Musa paradisicum", image: plant2, price: "$45" },
  { id: 2, name: "Ficus benghalensis", image: plant1, price: "$56" },
  { id: 3, name: "Cucumis sativas", image: plant3, price: "$44" },
  { id: 4, name: "Piper nigrum", image: plant2, price: "$34" },
  { id: 5, name: "Palsoes mungo", image: plant1, price: "$144" },
  { id: 6, name: "Murraya koenigii", image: plant3, price: "$124" },
];

export const fetchSlideInfo = (): Promise<{
  data: SlideInfo[];
  message: string;
  status: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: slideInfo,
        message: "Slide information retrieved successfully",
        status: 200,
      });
    }, 1000);
  });
};
