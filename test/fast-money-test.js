import chai from 'chai';
// import Round from '../src/Round';
import DominationRound from '../src/DominationRound';
const expect = chai.expect;

let dominationRound;
beforeEach(() => {
  dominationRound = new DominationRound();
});

describe('DominationRound', () => {
  
  it('should be a function', () => {
    expect(DominationRound).to.be.a('function');
  });

  it('should be an instance of DominationRound', () => {
    expect(dominationRound).to.be.an.instanceOf(DominationRound);
  });


}); // <------ end of describe block