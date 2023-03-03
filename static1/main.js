import { hello } from "@nick_durnev/my-lib";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>${hello("Pragmasoft")}</h1>
  </div>
`;
