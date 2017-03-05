import ContactMe from 'scripts/pages/contact/components/ContactMe'

describe.only('<ContactMe />', () => {
  it('renders', () => {
    const wrapper = mount(<ContactMe />)
    expect(wrapper.find('ContactMe').length).to.equal(1)
  })
})