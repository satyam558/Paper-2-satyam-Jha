# CRUD API Project

##  API Configuration
- **Backend**: Node.js + Express
- **Frontend**: React (connected to backend)
- **Endpoints**:
  - `POST /add` → Insert new record
  - `GET /view` → View all records
  - `DELETE /trash` → Delete a record
  - `PUT /edit` → Edit/update a record
- **Export**: `export default app;`

---

## Frontend (User UI)
- Built with React
- Implements full CRUD (Create, Read, Update, Delete)
- User-friendly interface for managing records
- Connected to backend API using Axios/fetch

---

## Challenges & Solutions
1. **Connecting Frontend & Backend**
   - *Challenge*: API calls not reaching backend.
   - *Solution*: Configured CORS and set correct proxy in React.

2. **CRUD Operations**
   - *Challenge*: Update/Delete initially failed due to wrong route handling.
   - *Solution*: Fixed route parameters and tested with Postman.

3. **UI Issues**
   - *Challenge*: Making UI simple and responsive.
   - *Solution*: Added clear forms, buttons, and responsive layout.

---
