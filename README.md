## Tech Stack:
1. nodeJS (>=18.16.0)
2. express
3. mongoDb
4. pnpm

Note: Please use pnpm only.

## How to start:
1. check node version compatiblity from package.json
2. create .env file , by reference of .env.sample and setup all required key values
3. Run: pnpm install
4. Run: pnpm run migrate-up
5. Run: pnpm run dev

## Health Check APIs:
- /api/v1/readiness
- /api/v1/liveness
