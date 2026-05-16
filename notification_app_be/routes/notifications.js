const express = require("express");

const router = express.Router();

router.get("/notifications", (req, res) => {
    res.json({
        success: true,
        message: "Notifications fetched successfully"
    });
});

router.post("/notifications", (req, res) => {

    const newNotification = req.body;

    res.json({
        success: true,
        message: "Notification created successfully",
        data: newNotification
    });

});

router.patch("/notifications/:id/read", (req, res) => {

    const notificationId = req.params.id;

    res.json({
        success: true,
        message: `Notification ${notificationId} marked as read`
    });

});

module.exports = router;