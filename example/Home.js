export default {
  name: 'home',
  render(h) {
    return (
      <div>
        <router-link to="/">Home</router-link> - <router-link to="/about">About</router-link>
        <h2>Home</h2>
      </div>
    )
  }
}
