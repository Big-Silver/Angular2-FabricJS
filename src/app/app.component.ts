import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {

    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.padding = 5;
    
     
  var $ = function(id){return document.getElementById(id)};


  var canvas =  new fabric.Canvas('c');
  	canvas.setHeight(300);
    canvas.setWidth(500);
   

addtext() { 
    canvas.add(new fabric.IText('Tap and Type', { 
        left: 50,
        top: 100,
        fontFamily: 'arial black',
        fill: '#333',
        fontSize: 50
    }));
}
    
   document.getElementById('text-color').onchange = function() {
            canvas.getActiveObject().setFill(this);
            canvas.renderAll();
        };
  document.getElementById('text-color').onchange = function() {
            canvas.getActiveObject().setFill(this);
            canvas.renderAll();
        };
		
		document.getElementById('text-bg-color').onchange = function() {
            canvas.getActiveObject().setBackgroundColor(this);
            canvas.renderAll();
        };
		
		document.getElementById('text-lines-bg-color').onchange = function() {
            canvas.getActiveObject().setTextBackgroundColor(this);
            canvas.renderAll();
        };

		document.getElementById('text-stroke-color').onchange = function() {
            canvas.getActiveObject().setStroke(this);
            canvas.renderAll();
        };	

		document.getElementById('text-stroke-width').onchange = function() {
            canvas.getActiveObject().setStrokeWidth(this);
            canvas.renderAll();
        };				
	
		document.getElementById('font-family').onchange = function() {
            canvas.getActiveObject().setFontFamily(this);
            canvas.renderAll();
        };
		
		document.getElementById('text-font-size').onchange = function() {
            canvas.getActiveObject().setFontSize(this);
            canvas.renderAll();
        };
		
		document.getElementById('text-line-height').onchange = function() {
            canvas.getActiveObject().setLineHeight(this);
            canvas.renderAll();
        };
		
		document.getElementById('text-align').onchange = function() {
            canvas.getActiveObject().setTextAlign(this);
            canvas.renderAll();
        };
		
	
 var radios5 = document.getElementsByName("fonttype");  // wijzig naar button
    for(var i = 0, max = radios5.length; i < max; i++) {
        radios5[i].onclick = function() {
            
            // if(document.getElementById(this.id).checked == true) {
            //     if(this.id == "text-cmd-bold") {
            //         canvas.getActiveObject().set("fontWeight", "bold");
            //     }
            //     if(this.id == "text-cmd-italic") {
            //         canvas.getActiveObject().set("fontStyle", "italic");
            //     }
            //     if(this.id == "text-cmd-underline") {
            //         canvas.getActiveObject().set("textDecoration", "underline");
            //     }
			// 	if(this.id == "text-cmd-linethrough") {
            //         canvas.getActiveObject().set("textDecoration", "line-through");
            //     }
			// 	if(this.id == "text-cmd-overline") {
            //         canvas.getActiveObject().set("textDecoration", "overline");
            //     }
                
                
                
            // } else {
            //     if(this.id == "text-cmd-bold") {
            //         canvas.getActiveObject().set("fontWeight", "");
            //     }
            //     if(this.id == "text-cmd-italic") {
            //         canvas.getActiveObject().set("fontStyle", "");
            //     }  
            //     if(this.id == "text-cmd-underline") {
            //         canvas.getActiveObject().set("textDecoration", "");
            //     }
			// 	if(this.id == "text-cmd-linethrough") {
            //         canvas.getActiveObject().set("textDecoration", "");
            //     }  
            //     if(this.id == "text-cmd-overline") {
            //         canvas.getActiveObject().set("textDecoration", "");
            //     }
            // }
            
            
            canvas.renderAll();
        }
    }
  

  }

}
