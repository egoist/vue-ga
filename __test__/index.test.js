import EVA from 'eva.js'
import ga from '../src'
import Home from '../example/Home'
import About from '../example/About'

test('should add script', () => {
  return new Promise(resolve => {
    document.body.innerHTML = '<div id="app"></div>'
    const app = new EVA()
    app.router(route => [
      route('/', Home),
      route('/about', About)
    ])
    ga(app.$router, 'UA-54857209-12')
    app.$router.afterEach(() => {
      const script = document.querySelector('script')
      expect(script.src).toBe('https://www.google-analytics.com/analytics.js')
      resolve()
    })
    app.start('#app')
  })
})
