import path from 'path'
import getStyles from 'src/utils/getStyles'

const parsedCss =
  '.Test-title{text-align:center}.Test-text{text-align:center;padding-bottom:20px}' +
  '.Test-button{padding-top:20px;padding-bottom:20px}\n'

describe('styles parser', () => {
  it('compiles sass files', () => {
    const options = {
      file: path.join(__dirname, 'test.scss'),
    }
    getStyles(options)
    .then(r => {
      expect(_.has(r, 'css')).to.equal(true)
      return r.css.toString()
    })
    .then(css => {
      expect(css).to.equal(parsedCss)
    })
  })
})
