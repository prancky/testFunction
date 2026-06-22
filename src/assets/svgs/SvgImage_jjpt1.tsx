import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1634 14.3001L13.9427 26C12.9042 26 11.9083 25.5891 11.174 24.8577C10.4397 24.1263 10.0272 23.1344 10.0272 22.1V16.9001H2.6399C2.26152 16.9043 1.88673 16.8266 1.54151 16.6723C1.19628 16.5179 0.888865 16.2907 0.640564 16.0063C0.392264 15.7219 0.209013 15.3871 0.10351 15.0251C-0.00199294 14.6632 -0.0272254 14.2827 0.0295594 13.9101L1.83069 2.21015C1.92509 1.59018 2.24126 1.02507 2.72094 0.618955C3.20063 0.212839 3.81152 -0.00692174 4.44104 0.000166769H19.1634M19.1634 14.3001V0.000166769M19.1634 14.3001H23.0789C23.7712 14.3001 24.4351 14.0261 24.9247 13.5386C25.4142 13.051 25.6892 12.3897 25.6892 11.7001V2.60015C25.6892 1.91059 25.4142 1.24928 24.9247 0.761685C24.4351 0.274093 23.7712 0.000166769 23.0789 0.000166769H19.1634" stroke="#8C8E92" stroke-width="0.859879" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_jjpt1 = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_jjpt1;
export { SvgImage_jjpt1 };
