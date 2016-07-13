
import sinon from 'sinon';

global.NOW = 123456789;

global.clone = (obj: any): any => JSON.parse(JSON.stringify(obj));

global.stubNow = (): any => sinon.stub(Date, 'now').returns(NOW);
global.restoreNow = (): any => Date.now.restore();
