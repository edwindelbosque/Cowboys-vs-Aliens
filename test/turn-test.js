import chai from 'chai';
import Turn from '../src/Turn';
const expect = chai.expect;

let turn;
beforeEach(() => {
  turn = new Turn();
});

describe('Turn', () => {
  
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });


}); // <------ end of describe block