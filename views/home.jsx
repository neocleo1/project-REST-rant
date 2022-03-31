const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/coffee.jpg" alt="Coffee on table" />
          <div>
            Photo by{' '}
            <a href="https://unsplash.com/@natanja?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Natanja Grün
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home
