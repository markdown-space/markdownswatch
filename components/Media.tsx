export const Media = () => {
  return (
    <section className="section" id="media">
      <h1 className="title">Media Object</h1>
      <hr />
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
              alt="Profile"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{" "}
              <small>31m</small>
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
              Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-reply"></i>
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-retweet"></i>
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fa fa-heart"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete"></button>
        </div>
      </article>
      <hr />
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
              alt="Profile"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder="Add a comment..."
              ></textarea>
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <a className="button is-info">Post comment</a>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <label className="checkbox">
                  <input type="checkbox" /> Press enter to submit
                </label>
              </div>
            </div>
          </nav>
        </div>
      </article>
      <hr />
      <h4 className="subtitle">Nesting</h4>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
              alt="Profile"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
              turpis.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </p>
          </div>
          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img
                  src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
                  alt="Profile"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br /> Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
              <article className="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
                lorem cursus ullamcorper sit amet nec massa.
              </article>
              <article className="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                tincidunt iaculis diam non, porta aliquet tortor.
              </article>
            </div>
          </article>
          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img
                  src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
                  alt="Profile"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Kayli Eunice </strong>
                  <br /> Sed convallis scelerisque mauris, non pulvinar nunc
                  mattis vel. Maecenas varius felis sit amet magna vestibulum
                  euismod malesuada cursus libero. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
              alt="Profile"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder="Add a comment..."
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button">Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
