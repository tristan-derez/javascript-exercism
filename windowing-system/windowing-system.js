// @ts-check

/**
 * Class representing the Size of a window.
 */
export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  /**
   * @param {number} newWidth
   * @param {number} newHeight
   */
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

/**
 * Class representing the position of a window.
 */
export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {number} newX
   * @param {number} newY
   */
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Resize the program window.
   * @param {Size} newSize - new size of the window
   */
  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(newWidth, newHeight);
  }

  /**
   * Move the program window.
   * @param {Position} newPosition - The new position of the window.
   * @returns {void}
   */
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(newX, newY);
  }
}

/**
 * @param {ProgramWindow} programWindow
 */
export function changeWindow(programWindow) {
  programWindow.move(new Position());

  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));

  return programWindow;
}

const programWindow = new ProgramWindow();
changeWindow(programWindow);
