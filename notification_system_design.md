# Stage 3

# Query Optimization

When notification records become very large, database queries may become slow.

Example query:

```sql
SELECT * FROM notifications
WHERE isRead = FALSE
ORDER BY createdAt DESC;
```

Problems:

- full table scan
- slower sorting
- increased response time

---

# Optimization Techniques

## 1. Indexing

Indexes improve searching speed.

```sql
CREATE INDEX idx_notifications
ON notifications(isRead, createdAt);
```

Benefits:

- faster filtering
- improved sorting
- reduced query execution time

---

## 2. Pagination

Instead of loading all records, limited records should be fetched.

```sql
SELECT * FROM notifications
LIMIT 10 OFFSET 0;
```

Advantages:

- faster loading
- reduced memory usage
- better performance

---

## 3. Selecting Required Columns

Avoid:

```sql
SELECT *
```

Use:

```sql
SELECT id, title, message
FROM notifications;
```

This reduces unnecessary data transfer.

---

## 4. Filtering

```sql
SELECT * FROM notifications
WHERE type = 'Placement';
```

Filtering reduces unwanted records and improves efficiency.

---

## 5. Redis Caching

Redis can store:

- unread notifications
- latest notifications
- frequently accessed data

Benefits:

- reduced database load
- faster response time

---

# Conclusion

Using indexing, pagination, filtering, and Redis caching improves database performance and helps the notification system handle large-scale data efficiently.