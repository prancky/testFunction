import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5298 4.22427L18.7003 4.36267L18.915 4.38273L24.09 4.90826L24.6155 10.0833L24.6376 10.2999L24.776 10.4684L28.0635 14.4981L24.776 18.5298L24.6376 18.7003L24.6155 18.915L24.09 24.09L18.915 24.6155L18.7003 24.6376L18.5298 24.776L14.4981 28.0635L10.4684 24.776L10.2999 24.6376L10.0833 24.6155L4.90826 24.09L4.38273 18.915L4.36267 18.7003L4.22427 18.5298L0.934716 14.4981L4.22427 10.4684L4.36267 10.2999L4.38273 10.0833L4.90826 4.90826L10.0833 4.38273L10.2999 4.36267L10.4684 4.22427L14.4981 0.934716L18.5298 4.22427Z" fill="#37D6A3" stroke="url(#paint0_linear_1_2187)" stroke-width="0.705951"/>
<defs>
<linearGradient id="paint0_linear_1_2187" x1="24.65" y1="2.5375" x2="6.1625" y2="24.65" gradientUnits="userSpaceOnUse">
<stop stop-color="#0DB982"/>
<stop offset="0.422514" stop-color="#0DB982" stop-opacity="0"/>
<stop offset="0.971778" stop-color="#0DB982"/>
</linearGradient>
</defs>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_hm5x = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_hm5x;
export { SvgImage_hm5x };
