import Requirement from './requirement.js';
import ModuleError from './module-error.js';
import errorMessages from './constants/error-messages.js';

/**
 * Class representing a Validator.
 */
class Validator {
  /**
   * Create a new `Validator`.
   * Make sure that the requirements list is valid.
   *
   * @param {Object} [ctx] Execution context
   * @param {Requirement[]} [ctx.requirements] An array of `Requirement` objects
   */
  constructor(ctx = {}) {
    this.requirements = ctx.requirements || [];
    this.validateRequirements(ctx.requirements);
  }

  /**
   * Validate the requirements array.
   *
   * @param {Array} [requirements] An array of Requirements to validate
   * @static
   */
  static validateRequirements(requirements) {
    if (!Array.isArray(requirements)) {
      throw new ModuleError('Validator', errorMessages.INVALID_REQUIREMENT_LIST);
    }
    if (!requirements.every((item) => item instanceof Requirement)) {
      throw new ModuleError('Validator', errorMessages.INVALID_REQUIREMENT);
    }
  }

  /**
   * Validate the provided data against all the requirements.
   *
   * @param {*} [data] Any data to validate.
   * @return {Boolean} Returns true if all the requirements аre met.
   * @public
   */
  validate(data) {
    return this.requirements.every((requirement) => requirement.check(data));
  }
}

export default Validator;
