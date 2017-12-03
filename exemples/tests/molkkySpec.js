chai.should();

describe('Décrit le jeu du Molkky', () => {
  let jeuDeMolkky;

  beforeEach(() => {
    jeuDeMolkky = new Molkky();
  });

  it('Doit marquer la valeur de la quille tombée', () => {
    jeuDeMolkky.metAjourLeScoreAvecLeLancé(5);

    jeuDeMolkky.score.should.equal(5);
  });

  it('Doit marquer le nombre de quilles tombées', () => {
    jeuDeMolkky.metAjourLeScoreAvecLeLancé(10, 8, 6);

    jeuDeMolkky.score.should.equal(3);
  });

  it('Doit calculer le score sur plusieurs lancés', () => {
    jeuDeMolkky.metAjourLeScoreAvecLeLancé(8);
    jeuDeMolkky.metAjourLeScoreAvecLeLancé(12, 5, 9);

    jeuDeMolkky.score.should.equal(11);
  });

  it('Doit indiquer que la partie est gagnée si le score est de 50 points', () => {
    marquer50points(jeuDeMolkky);

    jeuDeMolkky.gagné().should.be.true;
  });

  it('Ne doit pas indiquer que la partie est gagnée si le score est inférieur à 50', () => {
    marquer40points(jeuDeMolkky);

    jeuDeMolkky.gagné().should.be.false;
  });

  it('Doit faire redescendre le score 25 quand celui-ci dépasse 50', () => {
    marquer60points(jeuDeMolkky);

    jeuDeMolkky.score.should.equal(25);
    jeuDeMolkky.gagné().should.be.false;
  });
});

function marquer40points(jeu) {
  for (let i = 0; i < 4; i++) {
    jeu.metAjourLeScoreAvecLeLancé(10);
  }
}

function marquer50points(jeu) {
  marquer40points(jeu);
  jeu.metAjourLeScoreAvecLeLancé(10);
}

function marquer60points(jeu) {
  marquer50points(jeu);

  jeu.metAjourLeScoreAvecLeLancé(10);
}
