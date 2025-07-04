"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import css from "./image-picker.module.css";

export default function ImagePicker({ label, name, error}) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handleClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
        setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={css.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={css.controls}>
        <div className={error ? css.preview : css.error}>
          {!pickedImage && <p>Select an image to upload</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image the user has picked" fill />
          )}
        </div>
        <input
          className={css.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          multiple
        />
        <button className={css.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
