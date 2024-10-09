# remult-sk-starter

## Getting Started

### Includes

- [SvelteKit](https://kit.svelte.dev/)
- [Postgres](https://www.postgresql.org/)
- [auth.js](https://authjs.dev)
- [remult](https://remult.dev)

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Environment

1. run the development server:

   ```bash
   npm run dev
   ```

## Environment Variables

- DATABASE_URL
- AUTH_SECRET

### Additional Scripts

- **Build for production**:

  ```bash
  npm run build
  ```

- **Start the production server**:

  ```bash
  npm run start
  ```

## Tips

```
cd src/modules
mkdir media
cd media
npx degit jycouet/remult-upload/src/server/modules/media

+ pck
+ env
```
