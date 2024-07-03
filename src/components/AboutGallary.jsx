import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AboutGallary() {
  const [images, setImages] = useState([
    {
      id: uuidv4(),
      img: "./assets/gallery-img-1.jpg",
    },
    {
      id: uuidv4(),
      img: "./assets/gallery-img-2.jpg",
    },
    {
      id: uuidv4(),
      img: "./assets/gallery-img-3.jpg",
    },
    {
      id: uuidv4(),
      img: "./assets/gallery-img-4.jpg",
    },
    {
      id: uuidv4(),
      img: "./assets/gallery-img-5.jpg",
    },
    {
      id: uuidv4(),
      img: "./assets/gallery-img-6.jpg",
    },
  ]);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4 py-14">
      {images.map(({ img, id }) => {
        return (
          <li className="grid" key={id}>
            <img className="object-cover w-full" src={img} alt="gallary-img" />
          </li>
        );
      })}
    </ul>
  );
}

export default AboutGallary;
