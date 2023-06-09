---
title: "Axishop: Nearing Completion with a Robust Deployment Strategy 🎯"
date: "2023-06-09"
---

It's been a journey developing **[Axishop](https://axishop.gg)**, an innovative Discord bot 🤖 that introduces an engaging economy and gaming system 🎮. With nearly **18,000** lines of code written and comprehensive documentation via **Docusaurus**, Axishop is close to the finish line 🏁. But as we all know, writing the code is just one part of the story. Today, I'd like to share the **deployment strategy** and **technology stack** I've used to bring Axishop to life 🌱.

## **Monorepo Design**

**Axishop** is designed as a monorepo, with distinct packages for the bot, API, frontend, docs, and a library package. This design allows for easy management of the different aspects of the project, each with its own dedicated space, while still allowing for shared code and resources where necessary.

## **Securing the Domain**

The first step in this journey was securing the perfect domain for the project. After a bit of searching, I decided to purchase **axishop.gg**. This domain not only perfectly represents the gaming focus of the project but also gives it a professional touch 💼.

## **Backend Deployment: DigitalOcean Droplet**

For the backend of Axishop, which includes the bot itself and an internal API, I chose to host it on a **DigitalOcean droplet**. DigitalOcean provides a great balance between cost, performance, and ease of use, making it an excellent choice for this project. The droplet provides a dedicated environment for Axishop to run efficiently and securely, ensuring that the bot and API are always ready to serve users.

## **Frontend Deployment: Vercel**

When it came to deploying the frontend, I opted for **Vercel**. Known for its excellent support for Next.js projects and its seamless deployment process, Vercel was an easy choice. Vercel's platform handles the building and deployment process, allowing me to focus on writing code and improving Axishop rather than managing servers.

## **Continuous Integration: CircleCI**

To ensure smooth and reliable deployments for the backend, I integrated **CircleCI** into the workflow. CircleCI automatically handles the build and deployment process whenever changes are pushed to the codebase, ensuring that the latest version of the backend is always running on the DigitalOcean droplet. This automation not only saves time but also minimizes the risk of deployment errors, making it an essential part of the development process.

## **Database and ORM: Postgres and Prisma**

**Axishop** utilizes **Postgres** as its primary database, coupled with **Prisma** as the Object-Relational Mapping (ORM). Prisma makes it easy to manage the database schema and perform database operations, while Postgres ensures the data is stored reliably and efficiently.

## **Caching: Redis**

To optimize performance and response times, **Redis** is used for caching in Axishop. By storing frequently accessed data in memory with Redis, the bot can respond to user commands more quickly and reduce the load on the database.

## **Documentation: Docusaurus**

Last but not least, the project is documented using **Docusaurus**. This tool has made it easy to maintain a clean and organized documentation for Axishop, ensuring that every aspect of the project is properly explained and easy to understand.

## **Dockerized for Easy Deployment 🐳**

In addition to all these, the entire project is **dockerized**. With **Docker** and **docker-compose**, it has become extremely convenient to set up and deploy the entire Axishop ecosystem with a single command. This makes the deployment process not only efficient but also reliable, and ensures a consistent environment across all stages of the application lifecycle.

##

In conclusion, **Axishop** is not just a project that I'm coding, but also a project that I'm deploying, maintaining, and documenting in a professional manner. It's been an exciting journey so far, and I can't wait to see Axishop in its final state, serving gamers and bringing an engaging experience to Discord servers. Stay tuned for the full release! 🎉
