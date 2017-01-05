
# hapijs-mongoose-restapi

This is a boilerplate for creating a RESTful API using hapi.js and mongoose.

[![bitHound Dependencies](https://www.bithound.io/github/chetanraj/hapijs-mongoose-restapi/badges/dependencies.svg)](https://www.bithound.io/github/chetanraj/hapijs-mongoose-restapi/master/dependencies/npm) [![Known Vulnerabilities](https://snyk.io/test/github/chetanraj/hapijs-mongoose-restapi/badge.svg)](https://snyk.io/test/github/chetanraj/hapijs-mongoose-restapi) [![Build Status](https://travis-ci.org/chetanraj/hapijs-mongoose-restapi.svg?branch=master)](https://travis-ci.org/chetanraj/hapijs-mongoose-restapi)

## Directory Layout

```bash
.
├── app.js                  // Express App and Entry Point
├── database.js             // MongoDB Connection
├── /models/                // DB Models
│   └── Wolf.js             // Schema
├── /node_modules/          // Project Dependencies[pm modules]
├── package.json
├── routes.js
└── yarn.lock
```

## Getting Started

```javascript
yarn
```

## To start the app
```javascript
npm start
```

### Routes

* http://localhost:4000
* http://localhost:4000/api

GET
* http://localhost:4000/api/wolves

POST
* http://localhost:4000/api/wolves/Coyote


---
Made with ♥ by Chetan Raj