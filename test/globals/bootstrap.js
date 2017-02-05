import './jsDOM'

import React from 'react'
import {mount, shallow, render} from 'enzyme'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import chai from 'chai'
import chaiReact from 'chai-react'

import defer from 'test/helpers/defer'

// :::::::::: UTILS ::::::::::
global.sinon = sinon
global.spy = sinon.spy()
global.sandbox = sinon.sandbox
global._ = require('lodash')
global.defer = defer

// :::::::::: REACT ::::::::::
global.React = React
const TestUtils = global.TestUtils = require('react-addons-test-utils')

// :::::::::: CHAI ::::::::::
global.chai = chai
global.chai.use(sinonChai)
global.chai.use((chai, utils) => chaiReact(chai, utils, React, TestUtils))

global.expect = global.chai.expect

// :::::::::: ENZYME ::::::::::
global.mount = mount
global.shallow = shallow
global.render = render
