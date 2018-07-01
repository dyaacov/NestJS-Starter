const Fs = require('fs')

const [ ,, name ] = process.argv

const CompNameLower = name
const CompName = name[ 0 ].toUpperCase() + name.slice(1)
const dir = `${process.cwd()}/src/${name}`

const moduleFile = `import { Module } from '@nestjs/common';
import { ${CompName}Controller } from './${CompNameLower}.controller';
import { ${CompName}Service } from './${CompNameLower}.service';

@Module({
  imports: [],
  controllers: [${CompName}Controller],
  providers: [${CompName}Service],
})
export class ${CompName}Module {}
`

const controllerFile = `
import { Get, Controller } from '@nestjs/common';
import { ${CompName}Service } from './${CompNameLower}.service';

@Controller()
export class ${CompName}Controller {
  constructor(private readonly ${CompNameLower}Service: ${CompName}Service) {}

  @Get()
  hello(): string {
    return this.${CompNameLower}Service.hello();
  }
}
`

const serviceFile = `
import { Injectable } from '@nestjs/common';

@Injectable()
export class ${CompName}Service {
  hello(): string {
    return 'Hello World!';
  }
}`

Fs.mkdirSync(dir)
Fs.writeFileSync(`${dir}/${CompName}.service.ts`, serviceFile)
Fs.writeFileSync(`${dir}/${CompName}.controller.ts`, controllerFile)
Fs.writeFileSync(`${dir}/${CompName}.module.ts`, moduleFile)
