// line-break.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak',
})
export class LineBreakPipe implements PipeTransform {
  transform(value: string): string[] {
    const words = value.split(' ');
    const lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      currentLine += words[i] + ' ';
      if ((i + 1) % 20 === 0) {
        lines.push(currentLine.trim());
        currentLine = '';
      }
    }

    if (currentLine.trim().length > 0) {
      lines.push(currentLine.trim());
    }

    return lines;
  }
}
