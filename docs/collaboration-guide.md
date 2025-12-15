# Collaboration Guide

## Overview

WebForge supports real-time collaborative editing, allowing multiple students to work on the same project simultaneously. This feature is perfect for pair programming exercises and group projects.

## Setup Requirements

Collaboration requires a Firebase Realtime Database. This is an optional feature that needs to be configured by the instructor or administrator.

### Firebase Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   - Enable Google Analytics (optional)

2. **Enable Realtime Database**
   - In your Firebase project, go to "Build" → "Realtime Database"
   - Click "Create Database"
   - Choose a location close to your users
   - Start in "test mode" for development (configure security rules for production)

3. **Get Configuration**
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps" section
   - Click the web icon (`</>`) to add a web app
   - Copy the Firebase configuration object

### Configuration Format

```json
{
apiKey: "AIzaSyBED4a8VXiAXXpTUewYj8Zdcp3UZ3bHLYI",
  authDomain: "webforge-aa8e5.firebaseapp.com",
  databaseURL: "https://webforge-aa8e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webforge-aa8e5",
  storageBucket: "webforge-aa8e5.firebasestorage.app",
  messagingSenderId: "932369055476",
  appId: "1:932369055476:web:46cf433c0829eb229aa8a1",
  measurementId: "G-4EXG7WHBX7"
}
```

## Using Collaboration

### Starting a Session

1. Click the **Collaborate** button in the header
2. If first time, paste your Firebase configuration when prompted
3. Click **Start Session**
4. Copy the session link or ID to share with collaborators

### Joining a Session

1. Click the **Collaborate** button
2. Enter the session ID in the "Join Session" field
3. Click **Join**
4. Enter your name when prompted

### During Collaboration

- **Real-time Editing**: All changes are synced automatically
- **Collaborator List**: See who's currently in the session
- **Auto-save**: Changes are saved to Firebase every 2 seconds
- **Indicator**: A green "Collaborating" badge appears in the header

### Leaving a Session

1. Click the **Collaborate** button
2. Click **Leave Session**
3. Confirm you want to leave

## Features

### Real-time Synchronization
- File content updates instantly across all collaborators
- Changes appear in real-time as others type
- Preview updates automatically for all users

### Collaborator Awareness
- See who's currently in the session
- Each collaborator has a unique color
- View collaborator names and join times

### Session Management
- Host can transfer ownership if they leave
- Session automatically closes when last person leaves
- Sessions persist until explicitly closed

## Educational Use Cases

### Pair Programming
- Two students work together on the same code
- One drives (types) while the other navigates (guides)
- Switch roles easily without file transfers

### Code Review
- Teacher joins student's session to review code
- Make suggestions and edits in real-time
- Discuss changes as they happen

### Group Projects
- Multiple students collaborate on a website
- Each can work on different files simultaneously
- See changes immediately without merge conflicts

### Live Demonstrations
- Teacher creates a session for live coding demos
- Students join to follow along
- Students can experiment in the same environment

## Security Considerations

### Firebase Security Rules

For production use, configure Firebase security rules:

```json
{
  "rules": {
    "sessions": {
      "$sessionId": {
        ".read": true,
        ".write": "auth != null || data.exists()"
      }
    }
  }
}
```

### Best Practices

1. **Use Test Mode for Learning**: Firebase test mode is fine for classroom use
2. **Session IDs**: Keep session IDs private to prevent unauthorized access
3. **Time Limits**: Sessions automatically clean up when empty
4. **Data Privacy**: Don't share sensitive information in collaborative sessions

## Troubleshooting

### "Firebase not configured"
- Make sure you've entered valid Firebase configuration
- Check that the configuration is saved in localStorage
- Try refreshing the page

### "Session not found"
- Verify the session ID is correct
- The session may have been closed
- Ask the host to create a new session

### Changes not syncing
- Check your internet connection
- Verify Firebase Realtime Database is enabled
- Check browser console for errors

### Can't join session
- Ensure Firebase configuration is correct
- Check that the session still exists
- Try creating a new session instead

## Limitations

- **No Authentication**: Sessions are open to anyone with the ID
- **No Conflict Resolution**: Last write wins (be careful with simultaneous edits)
- **No Cursor Tracking**: Remote cursors are not yet implemented
- **Internet Required**: Collaboration requires active internet connection

## Future Enhancements

Planned improvements for collaboration:

- User authentication with Firebase Auth
- Remote cursor positions visible in editor
- File locking to prevent conflicts
- Chat functionality for communication
- Session history and replay
- Conflict resolution for simultaneous edits

## Cost Considerations

Firebase Realtime Database has a free tier that includes:
- 1 GB stored data
- 10 GB/month downloaded data
- 100 simultaneous connections

This is typically sufficient for classroom use. Monitor usage in Firebase Console.

## Support

For issues or questions about collaboration:
1. Check Firebase Console for errors
2. Review browser console for JavaScript errors
3. Verify Firebase configuration is correct
4. Ensure Realtime Database is enabled and accessible
