import puppeteer from "puppeteer";
import path from "path";
// import { dir , root, base, name, ext } from "../lib/command_actions/upload";
const inform = console.log;
// const dirPATH = path.format({root, dir});
//import { build } from "./rules.js"; 

export default async function router ({ dir , root, base, name, ext }) {
  
  const dirPATH = path.format({root, dir});
  const clientFile = path.join(dirPATH, base)

  //Launch a new browser instance with Puppeteer:
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //REVIEW - file type
  // Interact with the website to upload a video and convert to GIF:
  // Find the file upload input element on the page and use page.$() to select it: 

  const fileInput = await page.$(`input[type=file]`);


  // Perform a null check on fileInput

  if (fileInput) {

    // Use fileInput.uploadFile() to upload your video file
    await fileInput.uploadFile(clientFile);

    // Find and click the button to start the conversion
    await page.click('input[type=submit]');

    // Wait for the conversion to complete
    await page.waitForSelector('#output');

    // Extract the GIF URL or data
    const gifUrl = await page.$eval('#output img', (img) => img.src);
    // Alternatively, if the GIF is provided as base64 data:
    const gifData = await page.$eval('#output img', (img) => img.src.split(',')[1]);
  }

  await page.goto('https://ezgif.com/')
  await page.waitForNavigation({ waitUntil: 'networkidle0' });


  // Find and click the button to start the conversion: 
  await page.click('input[type=submit]');

  //Wait for the conversion to complete: 
  await page.waitForSelector('#output');

  // Extract the GIF URL or data:

  // Once the conversion is complete, you can extract the GIF URL or data from the page.
  // Use page.$eval() to retrieve the URL or data from the page's DOM:

  const gifUrl = await page.$eval('#output img', (img) => img.src);

  // Alternatively, if the GIF is provided as base64 data:
  const gifData = await page.$eval('#output img', (img) => img.src.split(',')[1]);

};

// inform(router(clientFile));



/* Close the Puppeteer instance and save the result:
Close the browser: await browser.close();.
Save the GIF URL or data to an output file using Node.js's fs module or process it further according to your needs.

Run the script:
At the end of convertToGif.js, add the following line to execute the script: convertToGif();.
Run the script in the command line using node convertToGif.js.

This is a basic outline of how you can use Puppeteer to automate a script that accesses the EZGIF website and converts videos to GIFs. Feel free to adapt and enhance the script as per your specific requirements.

Remember to handle any errors that may occur during the automation process and ensure that you have the necessary permissions to convert videos to GIFs using the EZGIF website and API.
*/
