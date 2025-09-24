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
![1](https://private-user-images.githubusercontent.com/121627103/493388476-4a2f4117-3018-4e1b-96d6-e49dce03bd7b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTg3MjM2NzcsIm5iZiI6MTc1ODcyMzM3NywicGF0aCI6Ii8xMjE2MjcxMDMvNDkzMzg4NDc2LTRhMmY0MTE3LTMwMTgtNGUxYi05NmQ2LWU0OWRjZTAzYmQ3Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyNFQxNDE2MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MjFlOWZjOTY1MDg1OGNlYTIyMjBiNWI1NzQxMWQ0YzlmNDdhMGZhZGNkNDJmNDczNjI0NWQxYjI2N2ZjNDUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.JnNrxbAvdTP8X2h1p1CuHN05ZJr9VBeGCDIYuDkeUfM)

![2](eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTg3MjUxNDIsIm5iZiI6MTc1ODcyNDg0MiwicGF0aCI6Ii8xMjE2MjcxMDMvNDkzNDAyNzk2LTVjZDYzNWY0LWU0MzktNDc2NC1hZjE5LWM5OWQ4ZmEzNzM4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyNFQxNDQwNDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZTIyYWZmNTRmYjkyZmM3ZjlmN2E1OWY1MmU2MzhhODIwMzc5NDQzNGQzMjBiN2JlYzc5ZjM1MTgxMTJiMmYyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4aCINJaEA1YIvzYtAQ3xLXtGzXLsb153z410jmPE07I)

