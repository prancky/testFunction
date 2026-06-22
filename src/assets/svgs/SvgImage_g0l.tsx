import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="670" height="530" viewBox="0 0 670 530" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M40 0.5H630C651.815 0.5 669.5 18.1848 669.5 40V490C669.5 511.815 651.815 529.5 630 529.5H40C18.1848 529.5 0.5 511.815 0.5 490V40C0.500002 18.1848 18.1848 0.5 40 0.5Z" stroke="#151521" stroke-width="0.5"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_g0l = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_g0l;
export { SvgImage_g0l };
