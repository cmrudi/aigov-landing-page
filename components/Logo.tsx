export default function Logo({ ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="140" height="50" viewBox="0 0 140 50" fill="none">
      <rect width="140" height="50" fill="url(#pattern1)"/>
      <defs>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_160_734" transform="translate(0 -0.0259669) scale(0.00184162 0.00515654)"/>
        </pattern>
        <image id="image0_160_734" width="543" height="204" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  );
}


