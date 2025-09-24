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
![1](https://private-user-images.githubusercontent.com/121627103/493387469-939739bb-6f46-4c56-9b7b-07d03e63a357.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTg3MjM0MzEsIm5iZiI6MTc1ODcyMzEzMSwicGF0aCI6Ii8xMjE2MjcxMDMvNDkzMzg3NDY5LTkzOTczOWJiLTZmNDYtNGM1Ni05YjdiLTA3ZDAzZTYzYTM1Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyNFQxNDEyMTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YTM3ODE3ZDc2YjVjM2VkYWVhZGZjN2Q1ODEzNDY5OWViODYzNDMzNzU3ODViZWZjYjcxMTc1N2FiY2U2OGQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.IdJRcSEFyLZ6QRP9-9cwT-VJODMYxRKo2sWEVHMoe3Q)

![2](https://private-user-images.githubusercontent.com/121627103/493388476-4a2f4117-3018-4e1b-96d6-e49dce03bd7b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTg3MjM1MzIsIm5iZiI6MTc1ODcyMzIzMiwicGF0aCI6Ii8xMjE2MjcxMDMvNDkzMzg4NDc2LTRhMmY0MTE3LTMwMTgtNGUxYi05NmQ2LWU0OWRjZTAzYmQ3Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyNFQxNDEzNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNDdjMjA5NmUyYzRmZTk5MmYwM2ViMzI5NWZmNGEwNTg2YWVjNDY1Zjk2YTQ0NzMwM2NkOTAwODhmM2Q3NjcxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ASvwU72P9vOU4e7gp_6iIvOXxIvrOdmBMSBd7rH_O-M)
