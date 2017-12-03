class MolkkyAvecJoueurs {
  constructor() {
    this.tableauDeScore = new Map();
  }

  metAjourLeScoreAvecLeLancé(idJoueur, ...quilles) {
    let score = this.tableauDeScore.get(idJoueur) || 0;
    if (this.uneSeuleQuilleEstTombée(quilles)) {
      score += quilles[0];
    } else {
      score += quilles.length;
    }

    let scoreVérifié = this.redescendreA25UnScoreSupérieurA50(score);

    this.tableauDeScore.set(idJoueur, scoreVérifié);
  }

  uneSeuleQuilleEstTombée(quilles) {
    return quilles.length === 1;
  }

  gagné(idJoueur) {
    return this.tableauDeScore.get(idJoueur) === 50;
  }

  redescendreA25UnScoreSupérieurA50(score) {
    if (score > 50) {
      return 25;
    }
    return score;
  }

  getScoreDuJoueur(idJoueur) {
    return this.tableauDeScore.get(idJoueur) || 0;
  }
}
