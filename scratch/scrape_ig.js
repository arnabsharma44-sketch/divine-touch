const puppeteer = require('puppeteer');

const urls = [
  "https://www.instagram.com/reel/DaLX32cPXL7/",
  "https://www.instagram.com/reel/DaH5LP6vP52/",
  "https://www.instagram.com/reel/DZT_IONv1Kp/",
  "https://www.instagram.com/reel/DZRwx32xAcG/",
  "https://www.instagram.com/reel/DZO6qsjvkQj/",
  "https://www.instagram.com/reel/DZXt2gDP7vZ/"
];

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  
  console.log("Navigating to Instagram login...");
  await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2' });
  
  console.log("=========================================================");
  console.log("ACTION REQUIRED:");
  console.log("Please log in to your Instagram account in the opened browser window.");
  console.log("The script is waiting for you to log in successfully...");
  console.log("=========================================================");
  
  try {
    // Wait for the home icon which indicates successful login
    await page.waitForSelector('svg[aria-label="Home"]', { timeout: 300000 });
    console.log("Login detected! Proceeding to extract thumbnails...");
  } catch (error) {
    console.log("Login timeout or failed to detect home icon. Exiting.");
    await browser.close();
    process.exit(1);
  }

  const results = {};
  
  for (const url of urls) {
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Wait a bit just to be safe
    await new Promise(r => setTimeout(r, 2000));
    
    const imgUrl = await page.evaluate(() => {
      const meta = document.querySelector('meta[property="og:image"]');
      return meta ? meta.content : null;
    });
    
    console.log(`Thumbnail found: ${imgUrl}`);
    results[url] = imgUrl;
  }
  
  console.log("Finished extracting all thumbnails. Closing browser...");
  await browser.close();
  
  require('fs').writeFileSync('results.json', JSON.stringify(results, null, 2));
  console.log("Results saved to results.json");
})();
