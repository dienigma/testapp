import React from "react";

export default function Comments() {
  return (
    <>
      <section className="section ">
        <div className="container">
          <h2 className="title" style={{ color: "white" }}>
            Comments
          </h2>
          <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
          <div className="buttons is-centered" style={{ paddingTop: "10px" }}>
            <button class="button is-black">Submit</button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="media" style={{ color: "white" }}>
            <figure className="media-left">
              <p className="image is-64x64">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </p>
            </figure>
            <div className="media-content" style={{ color: "white" }}>
              <div className="content">
                <p>
                  <strong style={{ color: "white" }}>John Doe</strong>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  <hr></hr>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
