#!/usr/bin/env node

const giffy = process.argv[0];
const action = process.argv[2] ? process.argv[2].toLowerCase() : undefined;
const missingInputMess = "action input was not provided";
const input = process.argv.splice(3).join(" ") || missingInputMess;

import { makeGIF, vid2GIF, gif2MP4, resize, reverse, cutVIDEO, cropVIDEO, vidSPEED, vid2JPG, vid2PNG  } from "./lib/ezgif.js";

const inform = console.log;

inform(`This is the current command: ${action}
This is the current input: ${input}
`);

function giffy() {
  switch (action) {
    case "build":
      ezGiffy(input);
      break;
    default:
      inform(missingInputMess);
  }
}

ezGiffy();

export { giffy };
