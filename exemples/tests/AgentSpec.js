import { Agent } from './Agent.js';

chai.should(); // ou let expect = chai.expect;

describe("Le comportement d'un Agent est", () => {
  let monAgent;

  beforeEach(() => {
    monAgent = new Agent('Bond', 'James', '007');
  });

  it('doit se presenter', () => {
    monAgent.presentation().should.equal('Bond, James');
  });
});
