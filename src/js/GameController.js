import GamePlay from './GamePlay';
import getRandomInt from './utils';

export default class GameController {
  constructor() {
    this.gamePlay = new GamePlay();
    this.intervalId = null;
    this.spawnDelay = 1000;
    this.spawnCount = 0;
    this.scoreCount = 0;
    this.lastClickIndex = null;
    this.gameStart();
  }

  onCellClick(index) {
    if (this.gamePlay.activePosition === index && index !== this.lastClickIndex) {
      this.scoreCount += 1;
      // this.lvlup(this.scoreCount);
      this.lastClickIndex = index;
      if (this.spawnCount > 0) this.spawnCount -= 1;
      this.gamePlay.hideImage();
    }
  }

  positionGeneration() {
    while (true) {
      const randomPosition = getRandomInt(this.gamePlay.cells.length);
      if (randomPosition !== this.gamePlay.activePosition) {
        if (this.spawnCount >= 5) this.gameOver();
        else this.gamePlay.redrawUi(randomPosition, this.scoreCount, this.spawnCount);
        this.spawnCount += 1;
        break;
      }
    }
  }

  gameStart() {
    this.registerEvents();
  }

  // lvlup(delay) {
  //   clearInterval(this.intervalId);
  //   this.spawnDelay -= delay / 10;
  //   this.intervalId = setInterval(this.positionGeneration.bind(this), this.spawnDelay);
  // }

  gameOver() {
    clearInterval(this.intervalId);
    alert('Вы проиграли!');
    document.location.reload();
  }

  registerEvents() {
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.intervalId = setInterval(this.positionGeneration.bind(this), this.spawnDelay);
  }
}
