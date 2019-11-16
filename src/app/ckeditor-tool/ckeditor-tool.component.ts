import {
  Component,
  OnInit,
  ViewChild, ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CKINPUT } from './mock-ckeditorData';
import {CkeditorConfigService} from '../services/internal/ckeditor-config.service';
declare var CKEDITOR: any;

@Component({
  selector: 'app-ckeditor-tool',
  templateUrl: './ckeditor-tool.component.html',
  styleUrls: ['./ckeditor-tool.component.scss'],
  providers: [
    CkeditorConfigService
  ]
})
export class CkeditorToolComponent implements OnInit {
  // @ViewChild('editor') public editorRef: ElementRef;

  public model: any = {
    editorData: '<p>Hello, world!</p>'
  };

  public instance: any;
  mathElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'annotation',
    'annotation-xml'
  ];
  private myCkeditorConfig: any;
  public ckeditorContent;
  public editor;
  constructor(private cd: ChangeDetectorRef, private ckService: CkeditorConfigService) { }

  ngOnInit() {
    // CKEDITOR.basePath = '/assets/js/ckeditor/';
    this.myCkeditorConfig = this.ckService.getConfig(150, 400);
  }

  public onChange(event: any) {
  }

  public onReady(event) {

    CKEDITOR.on( 'currentInstance', function() {
      this.editor = CKEDITOR.currentInstance;
  } );

      CKEDITOR.on('instanceReady' , () => {

        // tslint:disable-next-line:max-line-length
        // CKEDITOR.instances.editor1.setData(`<p>Some html<math xmlns="http://www.w3.org/1998/Math/MathML"><mroot><mn>2</mn><mn>2</mn></mroot></math>&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="[" close="]"><mn>2</mn></mfenced><mi>&#946;</mi><mfenced open="|" close="|"><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable></mfenced></math></p>`)
        console.log('Instance Ready');

      });

      CKEDITOR.on('loaded' , () => {
        console.log('Loaded Ready');
      });


      setTimeout(() => {
      // tslint:disable-next-line:max-line-length
      CKEDITOR.instances.editor1.setData(`<p>Some html<math xmlns="http://www.w3.org/1998/Math/MathML"><mroot><mn>2</mn><mn>2</mn></mroot></math>&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="[" close="]"><mn>2</mn></mfenced><mi>&#946;</mi><mfenced open="|" close="|"><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable></mfenced></math></p>`)
    }, 500);


    // if(CKEDITOR.plugins.loaded["ckeditor_wiris"]){
      // tslint:disable-next-line:max-line-length
      // this.editor.setData(`<p>Some html<math xmlns="http://www.w3.org/1998/Math/MathML"><mroot><mn>2</mn><mn>2</mn></mroot></math>&nbsp;</p>`)
      // tslint:disable-next-line:max-line-length
      // CKEDITOR.instances.editor1.setData(`<p>Some html<math xmlns="http://www.w3.org/1998/Math/MathML"><mroot><mn>2</mn><mn>2</mn></mroot></math>&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="[" close="]"><mn>2</mn></mfenced><mi>&#946;</mi><mfenced open="|" close="|"><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable></mfenced></math></p>`)
    // }

  }
}
