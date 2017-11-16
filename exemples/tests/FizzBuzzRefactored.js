class FizzBuzzRefactored {
  calcul(regles) {
    let tableau = [];

    for (let index = 0; index <= 100; index++) {
      let donnée = this._soumettreIndexAuxRegles(regles, index);

      tableau.push(donnée);
    }

    return tableau;
  }

  _soumettreIndexAuxRegles(regles, index) {
    for (let regle of regles) {
      if (regle.estVraiPour(index)) {
        return regle.valeurSiVrai();
      }
    }

    return index;
  }
}
