# Planet View chat window

Click the arrow icon labeled **Pop out chat** in the Planet View chat toolbar to open chat in a native desktop window. The window can be moved to another monitor and resized independently. **Show chat window** on the canvas focuses the existing window.

Click **Attach to Planet View** or close the native window to return chat to the canvas. The conversation, Context Box, draft, and current request stay in the workspace controller. Switching the main workspace view keeps the window open. Reloading or closing the workspace closes its pop-out.

The pop-out renders the existing React chat through a same-origin portal. It does not start a second app or create another conversation/backend session. The main frame retains trusted IPC ownership; direct IPC from the child document is rejected. Only the named blank chat target is allowed by the window handler, and child navigation/webviews are blocked.

After changing Electron main-process code, restart the desktop process to enable the window handler.

Validation commands:

    npm run build
    npm run typecheck
    npm test
    node scripts/electron-chat-popout-smoke.cjs

The Electron smoke uses isolated temporary research/profile data and mocked provider transport. It checks sending/receiving a response with the same conversation and Context Box, draft preservation, docking, native close, view switching, reload cleanup, styling, and the child IPC restriction.
