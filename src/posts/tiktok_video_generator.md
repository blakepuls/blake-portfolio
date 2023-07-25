---
title: "Storytelling on TikTok: Creating an Automated Video"
date: "2023-24-07"
---

For those of us who spend a lot of time on TikTok, we've probably come across accounts that share short, engaging stories, perhaps read by a voiceover AI. We've also seen bots that share interesting content from places like Reddit. As a Python enthusiast and someone fascinated by this trend, I thought it would be a fun project to create my own version of a TikTok video generator.

The concept was simple: create an application that could generate a story using OpenAI's GPT, convert that story to voice-over using Google's Text-to-Speech service, and overlay the audio on a video clip from gameplay footage provided by my friends. The result: an engaging, AI-generated story told over intriguing gameplay. Let's dive into how I brought this idea to life.

## Inspiration & Concept

The inspiration for this project came from numerous TikTok accounts that share content in a similar fashion. I wanted to create something similar but with my own twist. Instead of using Reddit posts as content, I decided to generate stories using OpenAI's GPT model. To add a visual element to the stories, I had my friends supply me with gameplay footage, which I used as a background for the storytelling. This gave an interesting visual appeal to the videos and added more depth to the storytelling. I also implemented a feature that allows the option to generate more specific stories by providing a topic.

## Under The Hood: A Glimpse of the Code

The application is designed with modularity in mind, with separate utilities for handling different aspects of the application like story generation, text-to-speech conversion, video editing, and TikTok video uploading.

I utilized several libraries in Python to make this happen. Here's a sneak peek into some of the functions used:

- **Story Generation**: This utilizes OpenAI's GPT model to generate the story based on the topic provided.
- **Text-to-Speech Conversion**: Google's Text-to-Speech API was used to convert the generated story into speech, with varying voices and genders to make the storytelling more engaging.
- **Video Editing**: I used the moviepy library to handle video editing tasks like cropping, resizing, adding subtitles, and integrating the generated voice-over.
- **Video Uploading**: The final stage was to upload the generated video to TikTok. I used an external TikTok video uploading library to automate this process.

I also ensured that the application was easy to use. It could be invoked from the command line with an optional argument for the topic.

For those who are interested in exploring the code, I've made it available on my [GitHub repository](https://github.com/yourgithubusername/tiktok-video-generator).

## Wrapping Up

This project was a fun challenge that enabled me to explore the capabilities of several interesting technologies, particularly OpenAI's GPT, Google's Text-to-Speech API, and Python's various multimedia handling libraries. Plus, it was a joy to see the final outcome - watching AI-generated stories unfold over captivating gameplay footage on TikTok.

While this was a mini project, the potential of this tool is massive, and it could be scaled up for a wide range of applications. Imagine creating a YouTube channel that tells AI-generated stories over stunning visuals, or a social media page that shares AI-generated motivational quotes over beautiful images. The possibilities are endless, and I can't wait to see where this project goes in the future!
