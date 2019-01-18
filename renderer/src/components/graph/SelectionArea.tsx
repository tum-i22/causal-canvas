import * as React from 'react';
import { IPoint } from '../../types/GraphTypes';

export interface IAreaSelectionProps {
    source: IPoint;
    target: IPoint;
    viewPos: IPoint;
    sWidth: number;
    sHeight: number;
}

export const AreaSelection: React.SFC<IAreaSelectionProps> = ({ source, target, viewPos, sWidth, sHeight }) => {
    if (source.x === -1) {
        return null;
    }

    let x = source.x// - viewPos.x - sWidth / 2;
    let y = source.y// - viewPos.y - sHeight / 2;

    const width = target.x - x// - viewPos.x - x - sWidth / 2;
    const height = target.y - y// - viewPos.y - y - sHeight / 2;

    if (width < 0) {
        x += width;
    }
    if (height < 0) {
        y += height;
    }
    return (
        <g>
            <rect
                x={x} y={y} width={Math.abs(width)} height={Math.abs(height)}
                stroke="#2c82c9"
                strokeWidth="2"
                fill="#2c82c9"
                opacity="0.4"
            />
        </g>
    )
}