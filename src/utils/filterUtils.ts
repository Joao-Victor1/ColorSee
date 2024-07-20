// src/utils/filterUtils.ts
export function getFilterCSS(type: string): string {
    switch (type) {
      case 'protanopia':
        return 'url(#protanopiaFilter)';
      case 'deuteranopia':
        return 'url(#deuteranopiaFilter)';
      case 'tritanopia':
        return 'url(#tritanopiaFilter)';
      default:
        return '';
    }
  }
  