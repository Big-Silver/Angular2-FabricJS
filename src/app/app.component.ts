import { Component, OnInit } from '@angular/core';
import { CKEditorComponent } from '../../node_modules/ng2-ckeditor/src/ckeditor.component';

import * as $ from 'jquery';
import 'fabric';
declare const fabric: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']    
})
export class AppComponent implements OnInit {
    title = 'Hello Angular Fabric!';

    private canvas;
    
    constructor() {
        // this.canvas = new fabric.Canvas('canvas');
    }

    ngOnInit() {
        this.canvas = new fabric.Canvas('canvas', {
            isDrawingMode: false,
            selection: true
        });

        // var SINGLE_LINE = false;
        // // var canvas = new fabric.Canvas('canvas');

        // // custom input area
        // if (SINGLE_LINE) {
        //     var $itext = $('<input/>').attr('type', 'text').addClass('itext');
        // }
        // else {
        //     var $itext = $('<textarea/>').addClass('itext');
        // }

        // var text = 'enter multi-byte text here ';
        // var itext = new fabric.IText(text, {
        //     left: 100,
        //     top: 100,
        //     fontSize: 20,
        //     fill: '#000'
        // })
        // .on('editing:entered', function(e) {
        //     var obj = this;
        //     if (SINGLE_LINE) {
        //         var keyDownCode = 0;
        //     }

        //     this.canvas.remove(obj);
            
        //     // show input area
        //     $itext.css({
        //         left: obj.left,
        //         top: obj.top,
        //         'line-height': obj.lineHeight,
        //         'font-family': obj.fontFamily,
        //         'font-size': Math.floor(obj.fontSize * Math.min(obj.scaleX, obj.scaleY)) + 'px',
        //         'font-weight': obj.fontWeight,
        //         'font-style': obj.fontStyle,
        //         color: obj.fill
        //     })
        //     .val(obj.text)
        //     .appendTo($(this.canvas.wrapperEl).closest('.canvas-wrapper'));

        //     // text submit event
        //     if (SINGLE_LINE) {
        //         // submit text by ENTER key
        //         $itext.on('keydown', function(e) {
        //             // save the key code of a pressed key while kanji conversion (it differs from the code for keyup)
        //             keyDownCode = e.which;
        //         })
        //         .on('keyup', function(e) {
        //             if (e.keyCode == 13 && e.which == keyDownCode) {
        //                 obj.exitEditing();
        //                 obj.set('text', $(this).val());
        //                 $(this).remove();
        //                 this.canvas.add(obj);
        //                 this.canvas.renderAll();
        //             }
        //         });
        //     }
        //     else {
        //         // submit text by focusout
        //         $itext.on('focusout', function(e) {
        //             obj.exitEditing();
        //             obj.set('text', $(this).val());
        //             $(this).remove();
        //             this.canvas.add(obj);
        //             this.canvas.renderAll();
        //         });
        //     }    
        //     // focus on text
        //     setTimeout(function() {
        //         $itext.select();
        //     }, 1);
        // });
        // this.canvas.add(itext);
        // this.canvas.setActiveObject(itext);
    };

    addtext() {
        var temp = document.getElementsByClassName('cke_wysiwyg_frame cke_reset');
        console.log("nodeValue");
        for(var i = 0; i < temp.length; i++) {
            temp[i].id = 'iframe';
            console.log(temp[i].id);            
        }
        var iframe = document.getElementById('iframe');
        var temp_text = $('iframe').contents().children().children();                                        ; 
        // var temp_html = $("#iframe").contents().find("body").html();
        var temp_html = $("#iframe").contents().find("body").html().replace(/<p>/g, '');
        temp_html = temp_html.replace(/<\/p>/g, '');
        console.log(temp_html);
        // var y = (iframe.contentWindow || iframe.contentDocument.document);

        // if (y.document)
        // {
        //     y = y.document;
        //     y.getElementsByTagName("input")[0].value;
        //     alert(y);
        // }

        // for(var i = temp.childElementCount; i < temp.childElementCount; i++) {
        //     console.log(temp.previousElementSibling);
        // }
        this.canvas.add(new fabric.IText(temp_text[1].textContent, { 
            left: 50,
            top: 100,
            fontFamily: 'arial black',
            fill: '#333',
                fontSize: 50
        }));
        // document.getElementById('ckeditor').addEventListener('change', function (e) {
        //     console.log("ckeditor");
        //     console.log(e);
        // });
    };

    findElement(element) {
        for(var i = element.childElementCount; i < element.childElementCount; i++) {
            console.log(element.previousElementSibling);
        }
    }

    
}
