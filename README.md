# Auto Clock In Genie for Great Day HR system

Good sleep is the basis for a good mood throughout the day, so we need a genie to help us to clock in.

![Home](https://github.com/arloliu/greatday-clock-in/blob/main/images/gd-genie-screenshot-home.png?raw=true)

## Versions
### Online web:
[https://arloliu.github.io/greatday-clock-in/](https://arloliu.github.io/greatday-clock-in/)

### Linux x64 AppImage & binary archive
The release AppImage and archive on [Github release page](https://github.com/arloliu/greatday-clock-in/releases)
### Windows x64 NSIS Setup & binary archive
The release NSIS Setup and archive on [Github release page](https://github.com/arloliu/greatday-clock-in/releases)

### Mac x64 DMG
I don't have Mac, and Mac electron binary needs to build on Mac, so I need help from the brave.

## Development Information
### Prerequisites
1. node.js >= 14.x

### Setup
```
    npm install
```

### Use it

```
# development mode for electron app
$ npm run dev

# development mode for online web
$ npm run dev:web

# production build for current platform, the binary will place on dist/
$ npm run build

# production build for windows 64-bit, the binary will place on dist/
$ npm run build:win64

# production build for linux 64-bit, the binary will place on dist/
$ npm run build:linux

# production build for mac 64-bit, the binary will place on dist/
$ npm run build:mac

```

