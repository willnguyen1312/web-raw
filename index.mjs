import fs from "fs";
import { generate } from "./generateData.mjs";

const data = generate(100);

fs.writeFileSync("./dump.json", JSON.stringify(data), {
  encoding: "utf-8",
});
