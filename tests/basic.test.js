const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../src/app')
const {
  httpStatusCodes: { OK },
  constant: { API_VERSION },
} = require('../src/common/constant')

chai.use(chaiHttp)
const requester = chai.request(app).keepOpen()

describe('HEALTH TEST SUIT', async function () {
  before(() => console.log('Testing Initiated'))

  it('Health Check', async function () {
    const response = await requester.get(`${API_VERSION}/readiness`)
    chai.expect(response).to.have.status(OK)
    chai.expect(response.res.text).to.equal('working')
  })

  it('Ready Check', async function () {
    const response = await requester.get(`${API_VERSION}/liveness`)
    chai.expect(response).to.have.status(OK)
    chai.expect(response.res.text).to.equal('working')
  })

  after(function () {
    requester.close()
    console.log('Testing Done')
  })
})
