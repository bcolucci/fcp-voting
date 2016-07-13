'use strict';

import sinon from 'sinon';

global.NOW = 123456789;

global.clone = obj => JSON.parse(JSON.stringify(obj));

global.stubNow = () => sinon.stub(Date, 'now').returns(NOW);
global.restoreNow = () => Date.now.restore();
