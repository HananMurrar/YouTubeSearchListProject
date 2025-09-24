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
![1](https://private-user-images.githubusercontent.com/121627103/493405041-3d769671-eb77-460d-8471-0aac90380352.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTg3MjUzMzksIm5iZiI6MTc1ODcyNTAzOSwicGF0aCI6Ii8xMjE2MjcxMDMvNDkzNDA1MDQxLTNkNzY5NjcxLWViNzctNDYwZC04NDcxLTBhYWM5MDM4MDM1Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyNFQxNDQzNTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNmRiNTM2ODY2Y2EwNDVkYzExMTJjOGZkOGNiMGZkMjAyOGQ4MTNhYTg3YzA2MGYxNzViMDk2OWIwYTk0MWUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.1dhKnzzrF1I64PXVkrxZr2swqJcKWFkXjg7jaDfZaeM)
