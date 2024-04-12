import React from "react";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2>Our Mission</h2>
        <p>
          There's this notion that to grow a business, you have to be ruthless.
          But we know there's a better way to grow. One where what's good for
          the bottom line is also good for customers. We believe businesses can
          grow with a conscience, and succeed with a soul – and that they can do
          it with inbound. That's why we've created an ecosystem uniting
          software, education, and community to help businesses grow better
          every day.
        </p>
      </div>
      <div style={{ flex: 1, maxWidth: "50%", textAlign: "right" }}>
        <img
          src={"/galeria/8.jpeg"}
          alt="Our Mission"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default page;
