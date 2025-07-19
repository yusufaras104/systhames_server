# Systhames Networking Ltd. - Sanity CMS

This is the Sanity Content Management System for Systhames Networking Ltd. It manages the product catalog.

## Project Info
- **Project Name:** Systhames Networking Ltd.
- **Project ID:** vx4ywdhc
- **Plan:** Free
- **Status:** Active

## Getting Started

### Prerequisites
- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The Sanity Studio will be available at http://localhost:3333

## Content Models

### Product
Products are the main content type and include:
- Title
- Slug
- Description
- Images
- Category reference
- Technical specifications (part code, conductor type, core size, etc.)

### Category
Categories for organizing products:
- Title
- Slug
- Description
- Image
- Product count

## Deploy

To deploy the Sanity Studio:

```bash
npm run deploy
# or
yarn deploy
```

## GraphQL API

To deploy the GraphQL API:

```bash
npm run deploy-graphql
# or
yarn deploy-graphql
```

## License
This project is private and for use by Systhames Networking Ltd. only. 