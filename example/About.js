export default {
  name: 'about',
  render(h) {
    return (
      <div>
        <router-link to="/">Home</router-link> - <router-link to="/about">About</router-link>
        <h2>About</h2>
      </div>
    )
  }
}
