#!/usr/bin/env giffy
const giffy = "node ezgiffy.js"; //|| "npm";
const action = process.argv[2] ? process.argv[2].toLowerCase() : undefined;
const missingInputMess = "action input was not provided";
const input = process.argv.splice(3).join(" ") || missingInputMess;

import {$} from 'execa';
import 'zx/globals';
import { getFile } from "./lib/command_actions/upload.js";
// import { makeGIF, vid2GIF, gif2MP4, resize, reverse, cutVIDEO, cropVIDEO, vidSPEED, vid2JPG, vid2PNG  } from "./lib/ezgif.ts";

const inform = console.log;
const matchURL = /\/([^/]+)/gi;

inform(`This is the current command: ${action}
This is the current input: ${input}
`);
inform(`this is 'giffy' ${process.argv[0]}\n\ninput.length = ${input.length}`);

function giffy() {
  switch (action) {
    case "start":
      if (input.includes("router")) {
        inform("WE ARE STARTING SETUP!!!")
        if ( matchURL ) {
          getFile(input.slice(1));
        };
        //promptSetup(input);
      } else if (input.includes("test app")) {
        inform("WE ARE LAUNCHING THE APP!!!")
        //promptLogin(input);
      } else {
        inform(
          "Invalid 'start' command. Please provide 'app' or 'setup' as the argument."
        );
      }
      break;
    // case "run":
    //   $`npm run ${[...input]}`;
    //   break;
    case "build":
      inform("WE ARE KICKING OFF THE BUILD!!!")
      //ezGiffy(input);
      break;
    default:
      inform(missingInputMess);
  }
}

giffy();

export { giffy };
// let clientFile = "/Users/ricdw/Desktop/IMAGES\ (temp)/Screen-Recordings/screener\ rec.mov"