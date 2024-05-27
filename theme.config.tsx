import { timeStamp } from "console";
import React, { Component } from "react";
import { text } from "stream/consumers";

export default {
  faviconGlyph: "S",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – SUIga",
    };
  },
  editLink: {
    text: "",
  },
  feedback: {
    content: "",
  },

  banner: {
    key: "2.0-release",
    text: <a>SUIGa is still under development</a>,
  },
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          fontSize: "1.4rem",
          paddingRight: "0.8rem",
          fontWeight: "light",
        }}
      >
        S
      </div>
      <p style={{ fontWeight: "bold", fontSize: "1.4rem" }}>SUIGa</p>
    </div>
  ),
  project: {
    link: "https://github.com/atahanyild/suiga",
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          SUIGa
        </a>
        .
      </span>
    ),
  },
};
