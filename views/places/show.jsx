const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }

  return (
    <Def>
      <main>
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        <h1>{data.place.name}</h1>
        <h2>Rating</h2>
        <p>Not Rated</p>
        <h2>Description</h2>
        <h3>{data.place.showEstablished()}</h3>
        <h4>Serving {data.place.cuisines}</h4>
        <h2>Comments</h2>
        {comments}

        <form method="POST" action="/places/${data.place.id}/comment">
          <div className="form-group">
            <label htmlFor="name">Author</label>
            <input
              className="form-control"
              id="author"
              name="author"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Content</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="city">Star Rating</label>
            <input
              type="number"
              className="form-control"
              id="stars"
              name="stars"
              step="0.5"
              min="1"
              max="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Rant</label>
            <input
              type="checkbox"
              className="form-control"
              id="rant"
              name="rant"
            />
          </div>
        </form>

        <form
          method="POST"
          action={`/places/${data.place.id}/comment?_method=POST`}
        >
          <button type="submit" className="btn btn-danger">
            Add Comment
          </button>
        </form>

        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  )
}

module.exports = show
