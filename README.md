# Mini Instagram

A full-stack social media application inspired by Instagram, built to practice real-world **CRUD operations, REST APIs, image uploads, cloud storage, and frontend-backend integration**.

The project allows users to create, view, update, and delete posts with images.

## Tech Stack

### Frontend

- React.js
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB
- Mongoose

### Image Handling

- Multer
- ImageKit

---

## Features

### Post Management

- Create a new post with an image and caption
- View all posts
- View individual posts
- Update post details
- Delete posts
- Replace post images while updating

### Image Upload

- Upload images using Multer
- Store images using ImageKit
- Save ImageKit image URL and file ID in MongoDB
- Remove old images from ImageKit when replacing/deleting posts

### Frontend

- Instagram-inspired feed
- Create post interface
- Edit post functionality
- Delete confirmation
- Image preview
- Responsive UI
- Loading and error states

---

## Project Architecture

```text
React Frontend
       │
       │ HTTP Requests
       ▼
Express.js REST API
       │
       ├── Multer
       │      │
       │      ▼
       │   Image Upload
       │      │
       │      ▼
       │   ImageKit
       │
       └── Mongoose
              │
              ▼
           MongoDB
```
