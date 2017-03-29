import ContactForm from 'scripts/pages/contact/components/ContactForm'

describe('<ContactForm />', () => {
  it('renders', () => {
    const wrapper = mount(<ContactForm />)
    expect(wrapper.find('ContactMe').length).to.equal(1)
  })
})
