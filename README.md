# WebDev Auth

## Description

This project is aimed at creating 2 CRUD apis with JWT based authentication in Express.js

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AmmarKhatri/webdev-auth
```
2. Navigate to the project directory:
```bash
cd webdev-auth
```
## How to run

# Using Makefile
Start containers in the background without forcing build:

```bash
make up
```

Start containers with forced build (use when changes are made to code):
```bash
make up_build
```

Stop Docker Compose:
```bash
make down
```
# Manually

1. Start Docker containers:
```bash
docker compose up -d
```

2. To force build (when required) and start Docker containers:
```bash
docker compose down
docker compose up --build -d
```

3. To stop Docker Compose:
```bash
docker compose down
```

## Dependencies
Node.js
Docker
Makefile (Windows/Linux or MacOS)