export declare const defaultDelay = "5000";
export declare const defaultHeartbeatTimeout = "60000";
export declare const defaultHeartbeatInterval = "30000";
export declare const defaultAxiosTimeout = 1000;
export declare const defaultTries = "5";
export declare const config: {
  serviceUrl: string;
  host: string;
  port: number;
  serviceManagerUrl: string;
  backendApiKey: string;
  registrationEndpoint: string;
  registrationTries: number;
  registrationRetryDelay: number;
  heartbeatEndpoint: string;
  heartbeatTries: number;
  heartbeatInterval: number;
  heartbeatRetryDelay: number;
  heartbeatTimeout: number;
};
