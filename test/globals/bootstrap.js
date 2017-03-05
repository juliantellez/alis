import './jsDOM'

import chai from 'chai'
import sinon from 'sinon'
import React from 'react'
import sinonChai from 'sinon-chai'
import chaiReact from 'chai-react'
import {mount, shallow, render} from 'enzyme'
import TestUtils from 'react-addons-test-utils'

global.sinon = sinon
global.React = React
global.spy = sinon.spy()
global.TestUtils = TestUtils
global.sandbox = sinon.sandbox

global.chai = chai
global.chai.use(sinonChai)
global.chai.use((chai, utils) => chaiReact(chai, utils, React, TestUtils))
global.expect = global.chai.expect

global.mount = mount
global.render = render
global.shallow = shallow
