export const Delete = () => {
  return (
    <section className="section" id="delete">
      <h1 className="title">Delete</h1>
      <hr />
      <div className="block">
        <span className="tag is-success mr-1">
          Hello World
          <button className="delete is-small"></button>
        </span>
        <a className="delete is-small mr-1"> </a>
        <a className="delete mr-1"> </a>
        <a className="delete is-medium mr-1"> </a>
        <a className="delete is-large"> </a>
      </div>
      <div className="notification is-danger">
        <button className="delete"></button> Lorem ipsum dolor sit amet,
        consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur
        adipiscing elit
      </div>
      <article className="message is-info">
        <div className="message-header">
          Info
          <button className="delete"></button>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
          ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
          venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
          sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
          porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
          facilisis sodales sem.
        </div>
      </article>
    </section>
  );
};
