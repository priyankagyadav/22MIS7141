# Stage 1

## Campus Notifications Microservice

This notification system supports:

- Placements
- Events
- Results

The system provides REST APIs for managing notifications.

---

# REST API DESIGN

## 1. Get All Notifications

### Endpoint

GET /notifications

### Response

```json
{
  "success": true,
  "message": "Notifications fetched successfully"
}
```

---

## 2. Create Notification

### Endpoint

POST /notifications

### Request Body

```json
{
  "title": "Placement Drive",
  "message": "TCS Hiring Started"
}
```

### Response

```json
{
  "success": true,
  "message": "Notification created successfully"
}
```

---

## 3. Mark Notification as Read

### Endpoint

PATCH /notifications/:id/read

### Response

```json
{
  "success": true,
  "message": "Notification marked as read"
}
```

---

## 4. Delete Notification

### Endpoint

DELETE /notifications/:id

### Response

```json
{
  "success": true,
  "message": "Notification deleted successfully"
}
```

---

# Headers

```json
{
  "Content-Type": "application/json"
}
```

---

# Real-Time Notification Mechanism

The system can use:

- WebSockets
- Socket.IO
- Push Notifications

This helps users receive instant notifications without refreshing the application.

---

# Logging Middleware

A logging middleware is integrated in the backend application to track:

- API requests
- API responses
- Errors
- Route access logs

This helps in monitoring and debugging.
