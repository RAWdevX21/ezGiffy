import { start } from 'geckodriver';
import { remote } from 'webdriverio';
import waitPort from 'wait-port';

export async function testScript() {
/**
* first start Geckodriver
*/
  const cp = await start({ port: 4444 });

/**
* wait for Geckodriver to be up
*/
  await waitPort({ port: 4444 });

/**
* then start WebdriverIO session
*/
  const browser = await remote({ capabilities: { browserName: 'firefox' } });
  await browser.url('https://webdriver.io');
  console.log(await browser.getTitle()); // prints "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"

/**
* kill Geckodriver process
*/
  cp.kill();
}