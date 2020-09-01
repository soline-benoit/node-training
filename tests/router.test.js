const express = require('express');
const app = express();
const router = require('../router');

test('smokeDetection', () => {
    expect(router.initRouter(app)).not.toBeFalsy();
});