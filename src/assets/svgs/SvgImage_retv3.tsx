import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.8 24L0 21.2L14.8 6.3L22.8 14.3L33.2 4H28V0H40V12H36V6.8L22.8 20L14.8 12L2.8 24Z" fill="#66FF8E"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_retv3 = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_retv3;
export { SvgImage_retv3 };
