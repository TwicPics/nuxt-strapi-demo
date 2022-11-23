# Nuxt 3 + Strapi + TwicPics Demo

This demo is built with:
- [Nuxt 3](https://nuxt.com/) to build the web app
- [Strapi](https://strapi.io/) as headless CMS
- [TwicPics](https://twicpics.com/) for images optimization

When running locally, we use [ngrok](https://ngrok.com/) to make Strapi accessible online for TwicPics.

## Setup

Install the dependencies:

```bash
# Using yarn
yarn

# Or using npm
npm install
```

## Local Development

### Strapi CMS

Create a Strapi project using:

```bash
npx create-strapi-app@latest strapi-backoffice --quickstart
```

Launch your Strapi CMS instance by running: 

```bash
npm run develop
```

Then go through the following steps:

#### 1. Create the Article collection type

Navigate to the **Content-Type Builder** to create a new _collection type_ with the following properties:
- Display name: `Article`
- API ID (Singular): `article`
- API ID (Plural): `articles`

Then, select your _Article_ collection type and add it the following _fields_:
- Title — _Text_ type
- Cover — _Media_ type
- Excerpt — _Text_ type
#### 3. Add some articles

Navigate to the **Content Manager** and select your newly created _Article_ collection.

Add a few articles (at least 4 to have relevant results) by clicking _Create new entry_ and filling the data.

> **Note**
> You can use [Unsplash images](https://unsplash.com/s/photos/landscape?orientation=landscape) to find images. We recommend downloading them in _Large_ format to have enough quality to play with the image optimization features. 

### Nuxt app

Copy the `.env.example` file as `.env` and update the environment variables as needed.

> **Note**
> If you didn't change it, the default host for Strapi is http://localhost:1337

Start the development server

```bash
npm run dev
```

### TwicPics

To optimize the medias coming from Strapi, we will **Create a TwicPics path**.

Login to your [TwicPics account](https://account.twicpics.com/):
- Select/create a workspace, e.g. _My Company_
- Select/create a domain, e.g. `https://my-company.twic.pics`
- Create a path mapping to your source, e.g. `local-strapi` to `https://very-long-key.eu.ngrok.io` (Read paragraph below)

#### Get your Strapi URL

To make your Strapi app available online, we will use [ngrok](https://ngrok.io/) to open a tunnel.

For an app running on `http://localhost:1337`, run

```bash
ngrok http 1337
```

Ngrok will prompt a message containing a line as following
```bash
Forwarding                    https://0aca-2a01-e0a-20b-ff40-6830-a17b-ecf7-47e3.eu.ngrok.io -> http://localhost:1337 
```

This is the **forwarding address** you need to use as source in your TwicPics path.

> **Warning**
> This is only for local development. In production, use your real Strapi app hostname.

## Production

Build the application for production:

```bash
npm run build
```

