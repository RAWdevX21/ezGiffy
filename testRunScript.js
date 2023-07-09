import { runScript } from "./__tests__/selenium_test.js";
import {testScript} from "./__tests__/sel_test_firefx.js";

async function runTest() {
  await testScript();
}

runTest();
