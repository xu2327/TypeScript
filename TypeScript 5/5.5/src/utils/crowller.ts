// ts -> .d.ts @types/superagent 翻译文件 -> js
import fs from 'fs';
import path from 'path';
import superagent from 'superagent';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, '../', '../data/course.json');

  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContenr = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContenr);
  }

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
}

export default Crowller;
