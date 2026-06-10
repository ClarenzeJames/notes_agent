# notes-answer-agent

A personal agent that reads questions from your GitHub notes repo and writes AI-generated answers back — deployed on Vercel.

## Project structure

```
├── index.html      # the agent UI
├── api/
│   └── config.js   # serverless function — serves env vars to the frontend
└── vercel.json     # routing config
```

## Deploy to Vercel

### 1. Push to GitHub

Create a new repo and push these files.

### 2. Import into Vercel

- Go to [vercel.com](https://vercel.com) → Add New Project
- Import your GitHub repo
- Framework preset: **Other**
- Root directory: `.` (leave as default)

### 3. Set environment variables

In Vercel → Project → Settings → Environment Variables, add:

| Variable | Example | Required |
|---|---|---|
| `ANTHROPIC_API_KEY` | `sk-ant-...` | ✅ |
| `GITHUB_TOKEN` | `github_pat_...` | ✅ |
| `GITHUB_REPO` | `username/my-notes` | ✅ |
| `GITHUB_BRANCH` | `main` | optional (default: main) |
| `QUESTIONS_FILE` | `questions.md` | optional |
| `ANSWERS_FILE` | `answers.md` | optional |

### 4. Deploy

Click Deploy. Vercel will give you a URL like `https://notes-answer-agent.vercel.app`.

Bookmark it on your phone — it works as a mobile web app.

## GitHub Token setup

1. Go to github.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Generate new token
3. Under Repository access → select your notes repo
4. Permissions → Contents → Read and Write
5. Copy the token into Vercel env vars

## Questions file format

The agent understands these formats in `questions.md`:

```md
- What is the difference between TCP and UDP?
- How does garbage collection work in Python?

1. What is a closure?
2. Explain the event loop
```
