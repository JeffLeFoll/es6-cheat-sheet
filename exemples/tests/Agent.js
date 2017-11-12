class Agent {
  constructor(nom, prenom, code) {
    this.nom = nom;
    this.prenom = prenom;
    this._code = code;
  }

  presentation() {
    return this.nom + ', ' + this.prenom;
  }

  get code() {
    return this._code;
  }
}
