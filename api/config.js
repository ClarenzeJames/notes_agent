export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const config = {
    anthropicKey:  process.env.ANTHROPIC_API_KEY  || '',
    ghToken:       process.env.GITHUB_TOKEN        || '',
    ghRepo:        process.env.GITHUB_REPO         || '',
    ghBranch:      process.env.GITHUB_BRANCH       || 'main',
    questionsFile: process.env.QUESTIONS_FILE      || 'questions.md',
    answersFile:   process.env.ANSWERS_FILE        || 'answers.md',
  };

  const missing = Object.entries(config)
    .filter(([k, v]) => ['anthropicKey', 'ghToken', 'ghRepo'].includes(k) && !v)
    .map(([k]) => k);

  if (missing.length) {
    return res.status(500).json({
      error: `Missing environment variables: ${missing.join(', ')}`,
      config,
    });
  }

  res.status(200).json(config);
}
