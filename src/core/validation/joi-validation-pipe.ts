import * as Joi from 'joi';
import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

export class JoiValidationPipe implements PipeTransform {
    constructor(private readonly schema) { console.log('## JoiValidationPipe ##') }

    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = Joi.validate(value, this.schema);
        if (error) {
            throw new BadRequestException('Validation failed');
        }
        return value;
    }
}