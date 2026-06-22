import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 33.75C9.59062 32.7656 6.36328 30.5227 3.81797 27.0211C1.27266 23.5195 0 19.6313 0 15.3563V5.0625L13.5 0L27 5.0625V15.3563C27 19.6313 25.7273 23.5195 23.182 27.0211C20.6367 30.5227 17.4094 32.7656 13.5 33.75ZM13.5 30.2063C16.425 29.2781 18.8438 27.4219 20.7563 24.6375C22.6688 21.8531 23.625 18.7594 23.625 15.3563V7.38281L13.5 3.58594L3.375 7.38281V15.3563C3.375 18.7594 4.33125 21.8531 6.24375 24.6375C8.15625 27.4219 10.575 29.2781 13.5 30.2063Z" fill="#1A1C1E"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_54br = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_54br;
export { SvgImage_54br };
