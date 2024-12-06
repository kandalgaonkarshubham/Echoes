
# Echoes - A Personal Journal Application

This is a full-stack web application that allows users to create, view, update, and delete their personal journal entries. Users can also download their entries in PDF or JSON format. The app is built with Next, Zustand, Tailwind CSS, ExpressJS, PostgreSQL, Drizzle ORM, and Puppeteer.


## Features

- **Authentication**: Users can log in using their email and password. No sign-up process is provided, but the app includes an API key-based authentication method to add initial users.
- **CRUD Operations**: Users can create, read, update, and delete their journal entries.
- **Download Options**: Users can download their journal entries in either PDF or JSON formats.
- **User-specific Access**: Each user can only access their own journal entries.
- **Skeleton Loaders**: Show skeleton loaders while the data is being fetched.
- **Data & State Storage**: Client-side data is stored in Zustand for efficient state management. User & Journal Data is stored in postgres.


## Client Routes

- **/app/journals**: List all journal entries.
- **/app/journal/<journal-id-slug>/edit**: Edit a journal entry.
- **/app/journal/<journal-id-slug>/view**: View a journal entry in read-only mode.
- **/app/logout**: Logout the current user.
- **/**: Splash page to verify user authentication and redirect to journals list.
- **/login**: Login page.


## Backend Routes

- _General Routes_

    - **/**: Root route
    - **/login**: User login route to authenticate a user and start a session.
    - **/register**: API route to register an initial user with an API key (for creating the first user).
    - **/journal**: Routes related to journal management (CRUD operations).
        - **POST /journal**: Create a new journal entry.
        - **GET /journal**: Fetch all journal entries of the authenticated user.
        - **PATCH /journal/:slug**: Update a specific journal entry.
        - **DELETE /journal/:slug**: Delete a specific journal entry.
    - **/download**: Route to generate a PDF or JSON file for the journal entry.
        - **POST /download**: Request to download the journal entry either as a PDF or JSON file.

- _Middleware_: A custom middleware that is applied before certain routes to ensure the API key and permissions are checked before processing requests.
## Installation

Clone the Repository

- **Install Dependencies**: You can install all dependencies for both the client and server by running the following commands in root directory

    ```bash
    pnpm i
    pnpm run initiate
    ```
    This will navigate to both the client and server directories and install all required dependencies automatically.

    Alternatively, you can manually install dependencies for each part of the project:
    ```bash
    cd client
    pnpm install
    cd server
    pnpm install
    ```
- **Run the Project**: After installation, you can run both the client and server with the following command:

    ```bash
    pnpm run both
    ```
    This will start both the client (Next.js) and server (Express) simultaneously.

    Alternatively, you can start the client and server separately:
    ```bash
    cd client
    pnpm run dev
    cd server
    pnpm run dev
    ```
## Setup

To run this project, you will need to add the following environment variables to your

- .env.local (NextJs)

    ```bash
    NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
    ```

- .env (Express)

    ```bash
    PORT=5000
    DATABASE_URL=postgres://journal_app:echoes@localhost:5432/journal_app
    API_KEY=164d1ca2eab605dfdf8390a195a676c5f88d023eaae9c7903f77498b68660074

    ```



- **Set Up Puppeteer**: To ensure Puppeteer works properly, navigate to the *server* directory and run:
    `npx puppeteer browsers install chrome`
    This will install the necessary Puppeteer essentials in a *.cache* folder.
