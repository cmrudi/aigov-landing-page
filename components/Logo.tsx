export default function Logo({ ...rest }) {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g filter="url(#filter0_b_122_33)">
        <rect width="180" height="180" rx="40" fill="#190435"/>
      </g>
      <g filter="url(#filter1_d_122_33)">
        <circle cx="137.631" cy="86" r="5.5" transform="rotate(3.62274 137.631 86)" fill="url(#paint0_linear_122_33)" stroke="url(#paint1_linear_122_33)" strokeWidth="3"/>
        <path d="M50.1309 123.5L67.6309 93L85.7283 61.5677C86.1207 60.8861 87.1099 60.9034 87.4783 61.5981L104.131 93L120.199 121.829C120.593 122.534 121.617 122.507 121.971 121.781L132.131 101" stroke="url(#paint2_linear_122_33)" strokeWidth="10" strokeLinecap="round"/>
      </g>
      <defs>
        <filter id="filter0_b_122_33" x="-40" y="-40" width="260" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="20"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_122_33"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_122_33" result="shape"/>
        </filter>
        <filter id="filter1_d_122_33" x="41.1299" y="36" width="120.001" height="100.501" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_122_33"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_122_33" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_122_33" x1="137.631" y1="79" x2="137.631" y2="93" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AA79D8"/>
          <stop offset="1" stopColor="#7DACF0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_122_33" x1="137.631" y1="79" x2="137.631" y2="93" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AA79D8"/>
          <stop offset="1" stopColor="#7DACF0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_122_33" x1="209.564" y1="53" x2="209.564" y2="130.312" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AD73D6"/>
          <stop offset="1" stopColor="#76BEF3"/>
        </linearGradient>
      </defs>
    </svg>
  );
}


