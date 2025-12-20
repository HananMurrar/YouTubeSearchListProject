### Youtube search list project

Its simple react project that allows you to search for youtube videos and display them

#### Steps:

#### 1. Create the next.js app:
      npx create-next-app@latest youtube-search-app

#### 2. Set up youtube API Key:
   - Go to google cloud console<br>
   - Create a new project<br>
   - Navigate to APIs and services, then library, then enable youtube data API v3<br>
   - Go to APIs and services, then credentials and create an API key<br>
   - After create API click show key to code it<br>
   - Create a .env.local file in the root of your project and add: NEXT_PUBLIC_YOUTUBE_API_KEY=YOUR_API_KEY_HERE

#### 3. Create the files in this structure:
```
📁 youtube-search-app/
├─ app/
│  ├─ page.tsx            # Main page with search and list
│  ├─ components/
│  │  ├─ search form.tsx  # Search input and button
│  │  ├─ video card.tsx   # Single video card
│  └─ services/
│     ├─ youtube.ts       # API fetch function
├─ .env.local
└─ ...
```

#### 4. Run development server:
      npm run dev
  
#### 5. Open your browser and go to:
      http://localhost:3000

#### 6.Screenshot
![1](https://raw.githubusercontent.com/HananMurrar/YouTubeSearchListProject/main/youtube-search-app/result.png)
