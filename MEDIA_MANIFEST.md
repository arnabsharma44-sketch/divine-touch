# Media Manifest: Divine Touch Website

This document outlines exactly where you should upload your images and videos to correctly populate the website content.

## 1. Instagram Reels Section (SocialFeed)

The "Official Reels" section on the homepage is wired to look for specific files in your project directory. 

### **Where to upload the THUMBNAILS (Images):**
Save the cover images for your 6 reels as `.jpg` files and upload them to the following directory:
`public/images/reels/`

The files **MUST** be named exactly as follows:
- `reel-1.jpg`
- `reel-2.jpg`
- `reel-3.jpg`
- `reel-4.jpg`
- `reel-5.jpg`
- `reel-6.jpg`

*(Note: Once you drop these 6 images into that folder, they will automatically appear on the website!)*

### **Where to upload the VIDEOS (If hosting locally):**
Currently, clicking a reel thumbnail will open the official Instagram link in a new tab. 
However, if you ever decide you want the videos to play directly on the website instead of linking to Instagram, upload the `.mp4` video files to:
`public/videos/reels/`

Name them:
- `reel-1.mp4`
- `reel-2.mp4`
- etc.

*(If you upload the videos, you will also need to update `src/components/home/SocialFeed.tsx` to use a `<video>` tag instead of an `<a>` link.)*

---
*For any other sections of the website, follow the same pattern: Images go in `public/images/...` and Videos go in `public/videos/...`.*
