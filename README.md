# NestJS-Starter

## Description
A fully functional, already implemented node.js server based on the great <a href="https://docs.nestjs.com/" target="_blank">NestJS framework</a>

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
- Generate a new, fully configured module
- CRUD operations support (mongo) + pagination 
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
--<i>index.ts</i><br/>
--controllers<br/>
---<i>audits.controller.ts</i><br/>
--models<br/>
---<i>audits.model.ts</i><br/>
--modules<br/>
---<i>audits.module.ts</i><br/>
--services<br/>
---<i>audits.service.ts</i><br/>

** add your newly created modules to <i>app.module.ts</i>

## Stay in touch

* Author - [Dekel Yaacov](dekel.yaacov@gmail.com)
* LinkedIn - [https://www.linkedin.com/in/dekely/](https://www.linkedin.com/in/dekely/)

** feature requests are more than welcome **

## License

NestJS-Starter is [MIT licensed](LICENSE).


## Still in progress

- Logger
- SMS
- Config 
- Cors
- Redis client
- Kafka
