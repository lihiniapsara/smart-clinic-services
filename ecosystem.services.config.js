const DEFAULT_CONFIG_SERVER_URIS = "http://config.platform:9000";
const DEFAULT_EUREKA_SERVER_URLS =
  "http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/";

const CONFIG_SERVER_URIS = process.env.CONFIG_SERVER_URIS || DEFAULT_CONFIG_SERVER_URIS;
const EUREKA_SERVER_URLS = process.env.EUREKA_SERVER_URLS || DEFAULT_EUREKA_SERVER_URLS;

module.exports = {
  apps: [
    {
      name: "patient-service",
      cwd: __dirname,
      script: "java",
      args: "-jar ./patient-service/target/Patient-Service-1.0.0.jar",
      log_file: "./logs/patient-service.log",
      autorestart: true,
      max_restarts: 10,
      env: {
        SPRING_CLOUD_CONFIG_URI: CONFIG_SERVER_URIS,
        EUREKA_SERVER_URLS: EUREKA_SERVER_URLS,
        EUREKA_CLIENT_SERVICEURL_DEFAULTZONE: EUREKA_SERVER_URLS,
        EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE: EUREKA_SERVER_URLS
      }
    },
    {
      name: "doctor-service",
      cwd: __dirname,
      script: "java",
      args: "-jar ./doctor-service/target/Doctor-Service-1.0.0.jar",
      log_file: "./logs/doctor-service.log",
      autorestart: true,
      max_restarts: 10,
      env: {
        SPRING_CLOUD_CONFIG_URI: CONFIG_SERVER_URIS,
        EUREKA_SERVER_URLS: EUREKA_SERVER_URLS,
        EUREKA_CLIENT_SERVICEURL_DEFAULTZONE: EUREKA_SERVER_URLS,
        EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE: EUREKA_SERVER_URLS
      }
    },
    {
      name: "appointment-service",
      cwd: __dirname,
      script: "java",
      args: "-jar ./appointment-service/target/Appointment-Service-1.0.0.jar",
      log_file: "./logs/appointment-service.log",
      autorestart: true,
      max_restarts: 10,
      env: {
        SPRING_CLOUD_CONFIG_URI: CONFIG_SERVER_URIS,
        EUREKA_SERVER_URLS: EUREKA_SERVER_URLS,
        EUREKA_CLIENT_SERVICEURL_DEFAULTZONE: EUREKA_SERVER_URLS,
        EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE: EUREKA_SERVER_URLS
      }
    }
  ]
};