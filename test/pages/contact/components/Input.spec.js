import Formsy from 'formsy-react'
import Input from 'scripts/pages/contact/components/Input'

describe('<Input />', () => {
  it('renders', () => {
    const wrapper = mount(
      <Formsy.Form>
        <Input name='name' />
      </Formsy.Form>
    )
    expect(wrapper.find('Input').length).to.equal(1)
  })
})
