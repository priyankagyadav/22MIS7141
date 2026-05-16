# Stage 4

# Performance Improvement

As the number of users increases, notification performance may reduce because of high database traffic.

To improve scalability and response time, the following techniques can be used.

---

# 1. Redis Caching

Redis can store frequently accessed notification data temporarily.

Examples:

- unread notification count
- latest notifications
- recent user activity

Benefits:

- reduced database queries
- faster API responses
- improved performance

---

# 2. Pagination

Pagination prevents loading all notifications at once.

Example:

```sql
SELECT * FROM notifications
LIMIT 10 OFFSET 0;
```

Advantages:

- reduced server load
- faster loading
- better user experience

---

# 3. Lazy Loading

Older notifications should load only when required.

Benefits:

- reduced initial loading time
- optimized frontend performance

---

# 4. Database Indexing

Indexes improve searching and sorting performance.

Example:

```sql
CREATE INDEX idx_createdAt
ON notifications(createdAt);
```

---

# 5. Read Replicas

Read replica databases can handle heavy read traffic separately from the main database.

Benefits:

- improved scalability
- reduced load on primary database

---

# 6. Real-Time Notification System

WebSockets or Socket.IO can send instant notifications without repeated polling.

Benefits:

- real-time updates
- reduced unnecessary API calls

---

# Conclusion

Caching, pagination, indexing, and real-time communication help improve the scalability and performance of the notification system.