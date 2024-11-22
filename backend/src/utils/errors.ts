export class InvalidDataError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'InvalidDataError';
    };
};

export class DriverNotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'DriverNotFoundError';
    };
};

export class InvalidDistanceError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'InvalidDistanceError';
    };
};