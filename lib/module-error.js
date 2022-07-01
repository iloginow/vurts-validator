/**
 * Class representing a Module Error to match the VURTS Logger interface.
 * @extends Error
 */
class ModuleError extends Error {
  /**
   * Create a new `ModuleError`.
   *
   * @param {String} [moduleName] Name of the module where the error originates.
   * @param {String} [message] A human-readable description of the error.
   * @param {Object} [options] Error options.
   * @param {Error} [options.cause] A property indicating the specific cause of the error.
   * @param {String} [fileName] The value for the fileName property on the created Error object.
   * @param {String} [lineNumber] The value for the lineNumber property on the created Error object.
   */
  constructor(moduleName, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ModuleError);
    }
    this.name = 'ModuleError';
    this.moduleName = moduleName;
    this.date = new Date();
  }
}

export default ModuleError;
