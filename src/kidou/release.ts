const note_0_0_23 = `
Added:
- Support claude code sub agents
- Support Claude Opus 4.1
- Supports to scroll horizontally when view diffs
- Support view git diff by file
- Full screen mode for Changes tab

Fixed:
- Fixed a bug that the terminal is not working when the session is not active
- Bad performance when making a big change

Development:
- Better diff view
`;

const note_0_0_24 = `
Added:
- Direct session is now available. In direct session, the code agent will make changes directly to the codebase.
- Support collapse/expand unchanged lines in the Changes tab

Fixed:
- Project list ui

Development:
- Better diff view
`;

const note_0_0_25 = `
Added:
- Support OpenAI Codex
`;

const note_0_0_26 = `
Added:
- Support Cursor Agent
- Support add/edit/remove provider models
- Support set default provider model
Fixed:
- UI performance improvement
`;

const note_0_0_27 = `
Added:
- Support auto commit for session
- Support ultrathink

Fixed:
- Fixed cursor-agent bug
- Improved code review pane performance
`;

const note_0_0_28 = `
Added:
- Support file search in file editor tab
- The input supports drag image into the input area
- Improved diff panel performance
`;

const note_0_0_29 = `
Added:
- Support login to kidou cloud
Fixed:
- Cursor-agent's process doesn't exit when the session is finished
- Changes diff view not show correctly when the file path has a space
`;

const note_0_0_30 = `
Improvements:
- New model selector
- Improved Codex Executor performance
- Set Direct Session as default
Fixed:
- Fix Codex session id issue
`;

const note_0_0_31 = `
Improvements:
 - Support Sonnet 4.5
Fixed:
 - Fixed some UI bugs
`;

const note_0_0_32 = `
Improvements:
 - New model selector UI
 - Perfomance improvements with Codex
Fixed:
 - Fixed Codex resume issue
`;

export const releaseInfo = {
    "0.0.23": {
        "releaseDate": "2025-08-27",
        "releaseNotes": note_0_0_23,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.24": {
        "releaseDate": "2025-08-29",
        "releaseNotes": note_0_0_24,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.25": {
        "releaseDate": "2025-08-30",
        "releaseNotes": note_0_0_25,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.26": {
        "releaseDate": "2025-09-04",
        "releaseNotes": note_0_0_26,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.27": {
        "releaseDate": "2025-09-09",
        "releaseNotes": note_0_0_27,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.28": {
        "releaseDate": "2025-09-12",
        "releaseNotes": note_0_0_28,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.29": {
        "releaseDate": "2025-09-22",
        "releaseNotes": note_0_0_29,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.30": {
        "releaseDate": "2025-09-26",
        "releaseNotes": note_0_0_30,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.31": {
        "releaseDate": "2025-09-30",
        "releaseNotes": note_0_0_31,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
    "0.0.32": {
        "releaseDate": "2025-10-13",
        "releaseNotes": note_0_0_32,
        "releaseUrl": "https://embodyai.co.jp/kidou/releases",
    },
}