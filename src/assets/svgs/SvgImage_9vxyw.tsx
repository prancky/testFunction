import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8515 9.21003V3.94716C15.8515 2.90031 15.434 1.89633 14.6908 1.1561C13.9476 0.41586 12.9397 0 11.8886 0L6.6048 11.8415V26.3144H21.5052C22.1424 26.3216 22.7606 26.0991 23.2461 25.6881C23.7316 25.2771 24.0516 24.7051 24.1472 24.0777L25.9701 12.2362C26.0276 11.859 26.002 11.474 25.8952 11.1076C25.7885 10.7413 25.603 10.4025 25.3517 10.1146C25.1004 9.82675 24.7892 9.59676 24.4398 9.44057C24.0904 9.28437 23.7111 9.20571 23.3282 9.21003H15.8515ZM6.6048 26.3144H2.64192C1.94124 26.3144 1.26926 26.0371 0.773801 25.5436C0.278344 25.0502 0 24.3808 0 23.6829V14.4729C0 13.775 0.278344 13.1057 0.773801 12.6122C1.26926 12.1187 1.94124 11.8415 2.64192 11.8415H6.6048" fill="#FE5722"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_9vxyw = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_9vxyw;
export { SvgImage_9vxyw };
