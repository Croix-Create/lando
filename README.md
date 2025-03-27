Lando

Overview

This project is built using Laravel 12, Inertia.js, React (TypeScript), Material UI, and Laravel Sail.
The relevent TypeScript resources are found in Componenets/NavBar, Layouts/GuestLayout and Components/HexagonBackground.
app.tsx returns Welcome.tsx on app launch, making it relevent for marking purposes too.

Prerequisites

Before you begin, ensure you have the following installed:

Docker (for Laravel Sail)

Node.js & npm

Composer

Git

Installation & Setup

1. Clone the Repository

git clone https://github.com/Croix-Create/Lando.git
cd your-repository

2. Install Backend Dependencies

composer install

3. Copy Environment File

cp .env.example .env

Update .env to match your configuration (especially database credentials).

4. Install Frontend Dependencies

npm install

5. Start Laravel Sail (Docker-based development environment)

./vendor/bin/sail up -d

6. Generate Application Key

./vendor/bin/sail artisan key:generate

7. Run Migrations and Seed Database

./vendor/bin/sail artisan migrate --seed

8. Build Frontend Assets

npm run build

9. Start Development Server

npm run dev

This will serve the frontend using Vite.

10. Access the Application

Visit http://localhost in your browser.
