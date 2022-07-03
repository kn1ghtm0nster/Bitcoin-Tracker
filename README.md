
# Bitcoin Tracker

## Table of Contents:
* [Overview](#overview)
* [Technology](#technology)
* [FAQs](#faqs)

---

## Overview:

This project was created using the `CoinStats` API service which returna the current price of Bitcoin __in USD__. Per the docs (which can be found __[here](https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest#8c32f517-5bb6-4f3a-b36d-ea2a754082ee)__).
The static site will have two `buttons` which are the `start` and `stop` buttons and will begin pinging the service immediately or stop pinging the service from the static page.

The main purpose of this application is to allow Bitcoin traders to have an application that tracks the price of Bitcoin without the pesky ads on their page.

- __NOTE:__ The entire logic of the application is __Asynchronous__ meaning that once the app is started in your browser, you will begin seeing data populate every 15 minutes. You can use the `Stop Tracker` button to pause the pings to the API and resume with the `Start Tracker` button.

--- 

## Technology:

- Frontend
    - `HTML`
    - `CSS`
    - `Javascript`

- Libraries
    - `Axios` (JS)
    - `Bulma` (Styling/CSS)
    - `Font Awesome` (Icons)

---

## FAQs:

- __Q:__ "Can I clone this repo and use the tool myself locally?"
    - __A:__ Sure! If you do use this with your own projects, All I ask is for credit on the overall code itself along with the API. Other than that feel free to track the "__stonks__" to your heart's content.
    - __WARNING!__ Please adhere to the rate limitations for the external api tool.

- __Q:__ "Is this an open source project?"
    - __A:__ I wouldn't really call this an "open source project" but if you have any ideas for making the UI or overall logic better, faster, or cleaner, feel free to submit pull requests and I will review once time allows.

- __Q:__ "Why did you decide to use the CoinStats API?"
    - __A:__ It's a simple API that provides various information on different coins along with relevant news for Cryptocurrency.

- __Q:__ "Can I follow you on your social medial links?"
    - __A:__ Sure! I welcome new friends from the tech community. My Twitter isn't very informative but LinkedIn and Instagram are there along with my GitHub.

- __Q:__: "If the application starts on its own, why did you leave the `Start Tracker` button on the application?"
    - __A:__ Because the app is asynchronous by default meaning that once the page loads, the API is pinged on its own every 15 minutes. Yes, that means that you have to wait for the data to come to you first and then you have the freedom of stopping and starting as you please.
    - __NOTE:__ This is also because I could not find a way to prevent async functions from running automatically so if you have suggestions, let me know!

- __Q:__ "Why isn't this project hosted anywhere?"
    - __A:__ See answer above. I'd rather not have Github IP Banned and then me getting a very, VERY large bill. At least until I find a way of having the logic slightly tweaked to not run automatically.