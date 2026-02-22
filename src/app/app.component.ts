import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import "konva/canvas-backend";
import Konva from 'konva';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'TileSwapper';
  stage: Konva.Stage | undefined;
  layer: Konva.Layer | undefined;



  ngOnInit(): void {
    
    this.stage = new Konva.Stage({
      width: 880,
      height: 880,
    });
    this.layer = new Konva.Layer();

    const firstSquare = new Konva.Rect({
      height: 150,
      width: 150,
      fill: 'gray',
      stroke: 'yellow',
      strokeWidth: 3,
    });

    this.layer.add(firstSquare);

    this.stage.add(this.layer);

    // this.layer.draw();
  }

  
}
