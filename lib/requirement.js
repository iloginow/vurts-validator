import errorMessages from './constants/error-messages.js';

/**
 * Class representing a Requirement.
 */
class Requirement {
  /**
   * Create a new `Requirement`.
   * Make sure that the requirements are valid.
   *
   * @param {Object} [ctx] Execution context
   * @param {Function} [ctx.subject] A requirement subject to check data against.
   * @param {String} [ctx.message] Error message in case the data doesn't meet the requirement.
   */
  constructor(ctx = {}) {
    this.subject = ctx.subject || (() => true);
    this.validateSubject();
    this.message = ctx.message || '';
    this.validateMessage();
  }

  /**
   * Check if the requirement subject is a function.
   *
   * @private
   */
  validateSubject() {
    if (typeof this.subject !== 'function') {
      throw new Error(errorMessages.INVALID_REQUIREMENT_SUBJECT);
    }
  }

  /**
   * Check if the requirement message is a string.
   *
   * @private
   */
  validateMessage() {
    if (typeof this.message !== 'string') {
      throw new Error(errorMessages.INVALID_REQUIREMENT_MESSAGE);
    }
  }

  /**
   * Check if the requirement message is a string.
   *
   * @param {*} [data] Any data to check the requirement against.
   * @return {Boolean} Returns true if the provided data meets the requirement.
   * @public
   */
  check(data) {
    if (!this.subject(data)) {
      throw new Error(this.message);
    }
    return true;
  }
}

export default Requirement;
