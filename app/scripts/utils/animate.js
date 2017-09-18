const scrollToSelector = selector => {
  if (!document) {
    return null
  }
  const body = document.body || {}
  const section = document.getElementsByClassName(selector) || [{}]
  const sectionTop = section[0].offsetTop
  const scroll = () => {
    const STEP = 20
    body.scrollTop += STEP
    if (body.scrollTop < sectionTop) {
      setTimeout(() => scroll(), 10)
    }
  }
  scroll()
}

export default {
  scrollToSelector,
}
