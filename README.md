# TMDB-REACT
A small application on **React + Vite + TypeScript** for viewing films from TMDB.

```bash
# 1) Install dependencies
    npm install          # or pnpm install / yarn

# 2) Create .env with TMDB key
    cp .env.example .env # if the file does not exist, create it manually (see below)

# 3) Start dev server
    npm run dev          # and go to http://localhost:5173  

```
# .ENV content

```
VITE_TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzBmNDhiYTMyNTAzNTE1YjViYjU3YzY3MWEyYmJmZSIsIm5iZiI6MTc1NTc1MTU5OS4xOCwic3ViIjoiNjhhNmE0YWY2ODRkNmFjYWY4YTgxYjgyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.GX3NgZLYBbaybqVEgipOQGH4kU6nOTuDmtMLrKNkIl4
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_URL=https://image.tmdb.org/t/p/
```