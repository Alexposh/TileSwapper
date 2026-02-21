import Konva from 'konva';

export class GameTile {
  public konvaElement: Konva.Group;

  constructor(
    public id: number,
    private size: number,
    private image: HTMLImageElement,
    private gridX: number,
    private gridY: number
  ) {
    this.konvaElement = this.createTileElement();
  }

  private createTileElement(): Konva.Group {
    const group = new Konva.Group({ draggable: true });

    const rect = new Konva.Image({
      image: this.image,
      x: 0,
      y: 0,
      width: this.size,
      height: this.size,

      crop: {
        x: this.gridX,
        y: this.gridY,
        width: this.size,
        height: this.size,
      },
      stroke: 'red',
      strokeWidth: 2,
    });

    group.add(rect);
    return group;
  }

  public moveToPosition(col: number, row: number) {
    this.konvaElement.to({
      x: col * this.size,
      y: row * this.size,
      duration: 0.2,
    });
  }
}
