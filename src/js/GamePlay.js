export default class GamePlay {
  constructor() {
    this.field = document.querySelector('.field');
    this.cells = Array.from(document.getElementsByClassName('field-cell'));
    this.image = document.querySelector('.cell-image');
    this.activePosition = null;
    this.cellClickListeners = [];
    this.scoreCountElement = document.querySelector('.score-count');
    this.spawnCountElement = document.querySelector('.spawn-count');
    this.registerEvents();
  }

  /**
  * Добавляет колбэк функцию слушателя для клетки поля
  * @param callback
  */
  addCellClickListener(callback) {
    this.cellClickListeners.push(callback);
  }

  hideImage() {
    const currentCellImage = this.field.querySelector('.cell-image');
    if (currentCellImage !== null) currentCellImage.remove();
  }

  showImage(position) {
    const cloneImage = this.image.cloneNode(true);
    cloneImage.style.display = '';
    this.cells[position].append(cloneImage);
    this.activePosition = position;
  }

  redrawUi(position, scoreCount, spawnCount) {
    this.scoreCountElement.innerText = scoreCount;
    this.spawnCountElement.innerText = spawnCount;
    this.hideImage();
    this.showImage(position);
  }

  onCellClick(event) {
    /* Метод принимает событие клика на клетке поля и
    вызывает колбэк функцию с индексом ячейки поля */
    const index = this.cells.indexOf(event.currentTarget);
    this.cellClickListeners.forEach((o) => o.call(null, index));
  }

  registerEvents() {
    this.cells.forEach((cell) => {
      cell.addEventListener('click', (event) => this.onCellClick(event));
    });
  }
}
