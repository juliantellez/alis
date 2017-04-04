import ContactForm from 'scripts/pages/contact/components/ContactForm'

describe('<ContactForm />', () => {
  it('renders', () => {
    const wrapper = mount(<ContactForm />)
    expect(wrapper.find('ContactForm').length).to.equal(1)
  })
})
