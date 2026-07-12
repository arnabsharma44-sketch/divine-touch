const urls = [
  "https://www.instagram.com/reel/DaLX32cPXL7/",
  "https://www.instagram.com/reel/DaH5LP6vP52/",
  "https://www.instagram.com/reel/DZT_IONv1Kp/",
  "https://www.instagram.com/reel/DZRwx32xAcG/",
  "https://www.instagram.com/reel/DZO6qsjvkQj/",
  "https://www.instagram.com/reel/DZXt2gDP7vZ/"
];

async function run() {
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      const html = await res.text();
      const match = html.match(/<meta property="og:image" content="([^"]+)"/);
      if (match) {
        console.log(match[1].replace(/&amp;/g, '&'));
      } else {
        console.log("NO MATCH for " + url);
      }
    } catch (e) {
      console.log("ERROR for " + url);
    }
  }
}
run();
