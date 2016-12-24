/* globals ga */
function appendScript() {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.google-analytics.com/analytics.js'
  document.body.appendChild(script)
}

function init(id) {
  if (!window.ga) {
    appendScript()
    window.ga = window.ga || function () {
      (ga.q = ga.q || []).push(arguments)
    }
    ga.l = Number(new Date())
    ga('create', id, 'auto')
  }
}

function collect(url, id) {
  init(id)
  ga('set', 'page', url)
  ga('send', 'pageview')
}

export default function (router, id) {
  if (typeof router === 'function') {
    router(url => {
      collect(url, id)
    })
  } else {
    router.afterEach(to => {
      collect(to.fullPath, id)
    })
  }
}
