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
}