# Smart Clinic Services

This repository aggregates Smart Clinic domain services:

- patient-service
- doctor-service
- appointment-service

## Deployment

GitHub Actions workflow:

- `.github/workflows/gcp-service-deployment.yml`

The deployment workflow builds all three services and restarts them with PM2 on the Smart Clinic services MIG.

## Runtime Defaults

- CONFIG_SERVER_URIS: `http://config.platform:9000`
- EUREKA_SERVER_URLS: `http://vm-node-a.platform:9001/eureka/,http://vm-node-b.platform:9001/eureka/,http://vm-node-c.platform:9001/eureka/`

## PM2

Use:

```bash
pm2 start ecosystem.services.config.js --update-env
pm2 save
```
