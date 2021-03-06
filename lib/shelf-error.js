"use strict";

module.exports = () => {
    /**
     * An extended error class that has a code property in addition to a message.
     */
    class ShelfError extends Error {
        /**
         * @param {string} message
         * @param {string} code
         */
        constructor(message, code) {
            super(message);
            this.code = code;
        }
    }

    return ShelfError;
};

