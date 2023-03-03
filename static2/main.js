import "./style.css";

import { hello } from "https://unpkg.com/@nick_durnev/my-lib@1.0.1/dist/my-lib.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>${hello("Dream")}</h1>
  </div>
`;
