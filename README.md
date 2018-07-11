# NestJS-Starter

## Description
A fully functional, already implemented node.js server based on the exellent <a href="https://docs.nestjs.com/" target="_blank">NestJS framework</a>

## Getting started
- Clone the repository
```
git clone git@github.com:dyaacov/NestJS-Starter.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Start the server
```
npm run start:dev
```

## Features
- Generate a new [module]('#module')
- CRUD operrations support (mongo) + pagination (findAll) 
- Mongo support
- Authentication (by default, all routes starts with /api are proteced by AuthGuard) (wip)
- Users management (CRUD, change password, forgot password, activate account, login) (wip)
- Send email via [SendGrid](https://sendgrid.com/)

<span id="module" />

## Generate a new module
```
npm run module audits
```
will generate the following structure:<br/>
-audits<br/>
--controllers<br/>
---audits.controller.ts<br/>
--models<br/>
---audits.model.ts<br/>
--modules<br/>
---audits.module.ts<br/>
--services<br/>
---audits.service.ts<br/>

## Stay in touch

* Author - [Dekel Yaacov](dekel.yaacov@gmail.com)
* LinkedIn - [https://www.linkedin.com/in/dekely/](https://www.linkedin.com/in/dekely/)

** feature requests are more than welcome **

## License

Nest is [MIT licensed](LICENSE).


## Still in progress
- Logger
- SMS
- Config 
- Cors
- Redis client
- Kafka
