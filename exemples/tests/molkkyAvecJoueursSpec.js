chai.should();

describe('Décrit le jeu du Molkky avec la notion de joueur', () => {
  let jeuDeMolkky;
  let idJoueur1 = 1;
  let idJoueur2 = 2;

  beforeEach(() => {
    jeuDeMolkky = new MolkkyAvecJoueurs();
  });

  it('Doit marquer la valeur de la quille tombée', () => {
    jeuDeMolkky.metAjourLeScoreAvecLeLancé(idJoueur1, 5);

    jeuDeMolkky.getScoreDuJoueur(idJoueur1).should.equal(5);
  });

  it('Doit marquer le nombre de quilles tombées', () => {
    jeuDeMolkky.metAjourLeScoreAvecLeLancé(idJoueur1, 10, 8, 6);

    jeuDeMolkky.getScoreDuJoueur(idJoueur1).should.equal(3);
  });

  it('Doit calculer le score sur plusieurs lancés', () => {
    jeuDeMolkky.metAjourLeScoreAvecLeLancé(idJoueur1, 8);
    jeuDeMolkky.metAjourLeScoreAvecLeLancé(idJoueur1, 12, 5, 9);

    jeuDeMolkky.getScoreDuJoueur(idJoueur1).should.equal(11);
  });

  it('Doit indiquer que la partie est gagnée si le score est de 50 points', () => {
    marquer50pointsPourLeJoueur(jeuDeMolkky, idJoueur1);

    jeuDeMolkky.gagné(idJoueur1).should.be.true;
  });

  it('Ne doit pas indiquer que la partie est gagnée si le score est inférieur à 50', () => {
    marquer40pointsPourLeJoueur(jeuDeMolkky, idJoueur1);

    jeuDeMolkky.gagné(idJoueur1).should.be.false;
  });

  it('Doit faire redescendre le score 25 quand celui-ci dépasse 50', () => {
    marquer60pointsPourLeJoueur(jeuDeMolkky, idJoueur1);

    jeuDeMolkky.getScoreDuJoueur(idJoueur1).should.equal(25);
    jeuDeMolkky.gagné(idJoueur1).should.be.false;
  });

  it('Doit gérer plusieurs joueurs', () => {
    marquer50pointsPourLeJoueur(jeuDeMolkky, idJoueur1);
    marquer40pointsPourLeJoueur(jeuDeMolkky, idJoueur2);

    jeuDeMolkky.getScoreDuJoueur(idJoueur1).should.equal(50);
    jeuDeMolkky.getScoreDuJoueur(idJoueur2).should.equal(40);

    jeuDeMolkky.gagné(idJoueur1).should.be.run;
    jeuDeMolkky.gagné(idJoueur2).should.be.false;
  });
});

function marquer40pointsPourLeJoueur(jeu, idJoueur) {
  for (let i = 0; i < 4; i++) {
    jeu.metAjourLeScoreAvecLeLancé(idJoueur, 10);
  }
}

function marquer50pointsPourLeJoueur(jeu, idJoueur) {
  marquer40pointsPourLeJoueur(jeu, idJoueur);
  jeu.metAjourLeScoreAvecLeLancé(idJoueur, 10);
}

function marquer60pointsPourLeJoueur(jeu, idJoueur) {
  marquer50pointsPourLeJoueur(jeu, idJoueur);

  jeu.metAjourLeScoreAvecLeLancé(idJoueur, 10);
}
