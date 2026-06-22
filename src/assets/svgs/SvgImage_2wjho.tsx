import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 11.3334C24.0046 13.0932 23.5934 14.8292 22.8 16.4C21.8592 18.2823 20.413 19.8656 18.6232 20.9724C16.8335 22.0792 14.771 22.6659 12.6666 22.6667C10.9068 22.6713 9.17081 22.2601 7.59999 21.4667L0 24L2.53333 16.4C1.73991 14.8292 1.32874 13.0932 1.33333 11.3334C1.33415 9.22903 1.92081 7.16649 3.02762 5.37676C4.13443 3.58703 5.71766 2.14079 7.59999 1.20004C9.17081 0.406612 10.9068 -0.00455035 12.6666 3.79841e-05H13.3333C16.1124 0.15336 18.7374 1.32638 20.7055 3.29451C22.6736 5.26264 23.8466 7.88756 24 10.6667V11.3334Z" stroke="#8C8E92" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_2wjho = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_2wjho;
export { SvgImage_2wjho };
