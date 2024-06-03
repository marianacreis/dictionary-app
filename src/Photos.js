import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div>
        {props.photos.map(function (photo, index) {
          return (
            <img
              src={photo.src.landscape}
              key={index}
              alt={photo.alt}
              width={200}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
