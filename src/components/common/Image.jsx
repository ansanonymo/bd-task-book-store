import { useEffect, useState } from "react";
import failbackImage from "./../../assets/failback.jpg";

export default function Image({
  src: propSrc = "",
  alt = "",
  className = "w-full h-full object-cover",
}) {
  const [src, setSrc] = useState(propSrc);

  useEffect(() => {
    setSrc(propSrc);
  }, [propSrc]);

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => {
        setSrc(failbackImage);
      }}
    />
  );
}
