### Youtube search list project

Its simple react project that make  Youtube search list project

Steps:

1. Create the next.js app: npx create-next-app@latest youtube-search-app<br>

2. Create .env.local for API Key
Set up YouTube API Key folwing this steps:
Go to google cloud console
Create a new project
Navigate to APIs and services, then library, then enable youtube data API v3
Go to APIs and services, then credentials and create an API key
After create API click on show key to get it, then use it
Add your API key in this format in the file: NEXT_PUBLIC_YOUTUBE_API_KEY=YOUR_API_KEY_HERE <br>

3. Create the files in this strucure:
```
📁 youtube-search-app/
├─ app/
│  ├─ page.tsx           # Main page with search and list
│  ├─ components/
│  │  ├─ search form.tsx  # Search input and button
│  │  ├─ video card.tsx   # Single video card
│  └─ services/
│     ├─ youtube.ts      # API fetch function
├─ .env.local
└─ ...
```

4. Run development server: npm run dev<br>
5. Open your browser and go to: http://localhost:3000

