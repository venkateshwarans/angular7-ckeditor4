import { Injectable } from '@angular/core';

@Injectable()
export class CkeditorConfigService {

  constructor() { }
  public getConfig(height: number, maxCharCount: number) {
    return {
      basePath:'/assets/js/ckeditor/',
      allowedContent: true,
      customConfig: '/assets/js/ckeditor/ckeditor-config.js',
      height,
      // removePlugins: 'image,link,insertTable,bold,tableselection',
      wordcount: {
        showParagraphs: false,
        showWordCount: false,
        showCharCount: true,
        maxCharCount
      }
    };
  }
}
