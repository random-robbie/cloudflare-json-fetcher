# Cloudflare JSON Fetcher

A simple and robust Cloudflare Worker to fetch JSON data from any URL. It acts as a CORS proxy and uses a real browser user-agent to avoid blocking.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/random-robbie/cloudflare-json-fetcher)

## Features

-   Fetch JSON data from any URL.
-   Bypass CORS restrictions.
-   Uses a standard `User-Agent` to mimic a real browser.
-   Allows you to specify `Referer` and `Origin` headers.
-   Easy to deploy and use.

## How to Use

Once deployed, the worker provides a single endpoint that you can use to fetch JSON data. You need to provide the target URL as a query parameter.

### Basic Example

To fetch JSON from a simple endpoint, you just need to provide the `url` parameter.

```bash
curl "https://your-worker-name.workers.dev/?url=https%3A%2F%2Fapi.github.com%2Fusers%2Fgithub"
```

### Advanced Example

You can also provide `referer` and `origin` headers in the request.

```bash
curl "https://your-worker-name.workers.dev/?url=https%3A%2F%2Fapi.example.com%2Fdata&referer=https%3A%2F%2Fwww.example.com%2F&origin=https%3A%2F%2Fwww.example.com"
```

## Query Parameters

| Parameter | Description                               | Required |
| :-------- | :---------------------------------------- | :------- |
| `url`     | The URL of the JSON endpoint to fetch.    | Yes      |
| `referer` | The `Referer` header to send.             | No       |
| `origin`  | The `Origin` header to send.              | No       |

## Deployment

You can deploy this worker in two ways:

### 1. One-Click Deploy

Click the "Deploy to Cloudflare Workers" button at the top of this README. This will automatically deploy the worker to your Cloudflare account.

### 2. Manual Deployment

You can also deploy this worker manually using the Wrangler CLI.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/random-robbie/cloudflare-json-fetcher.git
    cd cloudflare-json-fetcher
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Deploy the worker:**
    ```bash
    npm run deploy
    ```
