---
title: "Automating CS:GO Demo Uploads to Leetify with Puppeteer"
date: "2023-06-09"
---

I'm excited to share a recent project I've been working on for the Karma Gaming community. I've developed a script that automatically uploads CS:GO `.dem` files from a web server to the [Leetify](https://leetify.com/) site.

## Project Overview

The script is designed to run automatically after a CS:GO match finishes, uploading the resulting `.dem` file to Leetify. This allows players to easily access and review their matches without having to manually upload each file. You can view the repository here: [https://github.com/blakepuls/Leetify-Bot](https://github.com/blakepuls/Leetify-Bot)

## Technologies Used

The script is built with Node.js and uses several key libraries:

- **Puppeteer**: This library provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It's used to automate the login and upload process on the Leetify site.
- **fs and https**: These built-in Node.js modules are used for file system operations and making HTTP requests, respectively.
- **cheerio**: This library is used for parsing HTML, which helps in fetching the list of demo files from the web server.
- **discord.js**: This library is used to send notifications to a Discord channel once a file is successfully uploaded.

## Conclusion

This project has been a great way to combine my interests in gaming and coding. It's been rewarding to see it in action, automatically handling the upload process and making it easier for the Karma Gaming community to review their CS:GO matches.
