import type { CSSProperties } from 'react';

const blobColors = [
    'rgba(167, 243, 208, 0.35)',
    'rgba(191, 219, 254, 0.35)',
    'rgba(233, 213, 255, 0.35)',
    'rgba(253, 230, 138, 0.28)',
    'rgba(186, 230, 253, 0.35)',
    'rgba(254, 202, 202, 0.28)',
    'rgba(196, 181, 253, 0.35)',
    'rgba(134, 239, 172, 0.28)',
    'rgba(251, 191, 36, 0.25)',
    'rgba(165, 180, 252, 0.30)',
    'rgba(153, 246, 228, 0.30)',
    'rgba(250, 204, 21, 0.24)',
    'rgba(147, 197, 253, 0.28)',
    'rgba(192, 132, 252, 0.26)',
];

export function getRandomBlobStyle(): CSSProperties {
    const size = 10 + Math.floor(Math.random() * 6);
    const useLeft = Math.random() > 0.5;
    const useTop = Math.random() > 0.5;

    return {
        '--blob-color': blobColors[Math.floor(Math.random() * blobColors.length)],
        '--blob-size': `${size}rem`,
        '--blob-left': useLeft ? `${Math.random() * 45}%` : 'auto',
        '--blob-right': useLeft ? 'auto' : `${Math.random() * 45}%`,
        '--blob-top': useTop ? `${Math.random() * 35}%` : 'auto',
        '--blob-bottom': useTop ? 'auto' : `${Math.random() * 35}%`,
    } as CSSProperties;
}
