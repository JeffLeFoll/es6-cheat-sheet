class Molkky {
  constructor() {
    this.score = 0;
  }

  metAjourLeScoreAvecLeLancé(...quilles) {
    if (this.uneSeuleQuilleEstTombée(quilles)) {
      this.score += quilles[0];
    } else {
      this.score += quilles.length;
    }

    this.redescendreA25UnScoreSupérieurA50();
  }

  uneSeuleQuilleEstTombée(quilles) {
    return quilles.length === 1;
  }

  gagné() {
    return this.score === 50;
  }

  redescendreA25UnScoreSupérieurA50() {
    if (this.score > 50) {
      this.score = 25;
    }
  }
}
