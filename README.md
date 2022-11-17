
# n8n-nodes-browserless

<p align="center">
  <img src="https://user-images.githubusercontent.com/11575076/202373912-a90e5cc0-9dd2-4873-b782-6f86c78f00eb.png" />
</p>


This is an n8n community node. It lets you interact with [browserless](https://github.com/browserless/chrome) instance in your `n8n` workflows.

browserless is a web-service that allows for remote clients to connect, drive, and execute headless work; all inside of docker. It offers first-class integrations for puppeteer, playwright, selenium's webdriver, and a slew of handy REST APIs for doing more common work. On top of all that it takes care of other common issues such as missing system-fonts, missing external libraries, and performance improvements. We even handle edge-cases like downloading files, managing sessions, and have a fully-fledged documentation site.

If you've been struggling to get Chrome up and running docker, or scaling out your headless workloads, then browserless was built for you. 

You've  been tried to do browser related tasks with `n8n` for example `web scraping`, `browser automation`, `e2e test`. `pdf generation` and dont want't to care much about the browser infrastructure and interaction then `n8n-node-borowserless` will make your life much easier. 

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Highlights

- [x] Fully controled browserless
- [x] Cloud compatible
- [x] Docker support by defailt
- [x] Live debug browser
- [x] Inject javascript
- [X] Render dynamic page
- [x] Download pdf
- [x] Capture screenshot
- [x] Excute custom code

## Installation


- [install docker](https://docs.docker.com/engine/install/)
- [Install browserless](https://docs.browserless.io/docs/docker-quickstart.html)

```shell
$ docker run \
  --rm \
  -p 3000:3000 \
  -e "MAX_CONCURRENT_SESSIONS=10" \
	-e "TOKEN=YOUR-SECURE-TOKEN" \
  browserless/chrome:latest
```

- Visit your n8n running instance > setttings > community nodes > install `n8n-node-browserless`
- Setup borserless credentials url `http://localhost:3000` token `YOUR-SECURE-TOKEN`
- Adding browserless to your workflow by typing `browserless` into node search
- Start using your browserless


Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

add comunitity node`n8n-node-browserless` to your `n8n` platform 

## Operations

- [Get page's content](https://www.browserless.io/docs/content)
- [Execute custom Function](https://www.browserless.io/docs/function)
- [Generate page as pdf](https://www.browserless.io/docs/pdf)
- [Capture page's screenshot](https://www.browserless.io/docs/screenshot)
- [Scrape page as json](https://www.browserless.io/docs/scrape)

## Credentials

This node require a browserless `url` and `token` in order to connect to your `browserless` account or out self-hosted borwserless instance.

![](.//assets/credentials-setup.png)

## Compatibility

I am develop the node on `n8n@0.200.1`. I don't have the change to test on other versions yet.

## Usage

- Add `browserless` node into your workflow
![](./assets/browserless-node.png)
- Set up your node 
![](./assets/browserless-content.png)
![](./assets/browserless-screenshot.png)
![image](https://user-images.githubusercontent.com/11575076/202370828-c8e3896e-1fc5-4f08-b147-688e55c90c74.png)
## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Browserless home page](https://www.browserless.io/)
* [Browserless API docs](https://www.browserless.io/docs/api)
* [Browserless self-hosted quick start](https://www.browserless.io/docs/docker-quickstart)

## Version history

- `0.0.1` initital release
- `0.2.0` fixed common issues



