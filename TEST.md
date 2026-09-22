# README Accuracy Check

Findings from the `readme-checker` agent, run after adding `POST /products/bulk`.

## Endpoints — out of date

README.md's "API Endpoints" and "Status Codes by Endpoint" tables are missing:

- **POST /products/bulk** — atomic batch product creation (src/routes/products.js:19). Newly added, not documented anywhere in the README.
- **PATCH /products/bulk-status** — bulk status update (src/routes/products.js:20). Pre-existing gap, not part of this feature, but still undocumented.

All other endpoints README documents match the routes file correctly (paths and methods line up):
GET /products, GET /products/:id, POST /products, PATCH /products/:id, DELETE /products/:id, DELETE /products/:id/restore.

## Setup/run instructions — accurate

- `npm install` — matches package.json.
- `npm start` — matches `"start": "node src/index.js"`.
- `npm test` / `npm run test:coverage` — match package.json's `node --test` scripts.

## Recommendation

Add rows for `POST /products/bulk` and `PATCH /products/bulk-status` to both README tables, using docs/openapi.yaml as the source of truth for request/response shape and status codes:
- Bulk-create: 201 success, 422/409/404 error cases.
- Bulk-status: 200 success, 422/404 error cases.

## Additional gap found (outside README scope)

`docs/openapi.yaml` also does **not** document `POST /products/bulk` — it has `PATCH /products/bulk-status` but no entry for the new bulk-create endpoint. Worth fixing alongside the README, since CLAUDE.md treats openapi.yaml as the API's reference spec.
