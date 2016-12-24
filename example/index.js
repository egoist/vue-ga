import EVA from 'eva.js'
import ga from '../src'
import Home from './Home'
import About from './About'

const app = new EVA()

app.router(route => [
  route('/', Home),
  route('/about', About)
])

ga(app.$router, 'UA-54857209-12')

app.start('#app')
