import chai from 'chai';
import Round from '../src/Round';
const expect = chai.expect;

let round;
beforeEach(() => {
  round = new Round();
});

describe('Round', () => {
  
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });


}); // <------ end of describe block