/// <reference types="node" />

declare module 'vurts-validator' {
  export enum ErrorMessages {
    INVALID_REQUIREMENT_LIST,
    INVALID_REQUIREMENT,
    INVALID_REQUIREMENT_SUBJECT,
    INVALID_REQUIREMENT_MESSAGE,
  };

  export type RequirementSubject = (data: any) => boolean;

  export type RequirementContext = {
    subject: RequirementSubject,
    message: string,
  };

  export class Requirement {
    subject: RequirementSubject;
    message: string;

    constructor(ctx: RequirementContext);
    check(data: any): boolean;
  }

  export type ValidatorContext = {
    requirements: Requirement[],
  };

  export class Validator {
    requirements: Requirement[];

    constructor(ctx: ValidatorContext);
    validate(data: any): boolean;
  }

  export class ModuleError {
    constructor(moduleName: string, message: string);
  }
}
