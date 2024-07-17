export const Message = () => {
  const modifiers = [
    "",
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
  ];

  return (
    <section className="section" id="message">
      <h1 className="title">Message</h1>
      <hr />
      <div className="columns is-multiline">
        {modifiers.map((m, index) => (
          <div key={index} className="column is-half">
            <article className={`message ${m ? `is-${m}` : ""}`}>
              <div className="message-header">
                <p>{m ? m.charAt(0).toUpperCase() + m.slice(1) : "Message"}</p>
                <button className="delete"></button>
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac{" "}
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
