import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { fetchFileFromRepo } from 'services/github';

import { CodeEditor } from 'components/code-editor';

import './index.page.css';

export function IndexPage() {
  const [code, setCode] = useState<string>('// Start coding here...');
  const [repoUrl, setRepoUrl] = useState<string>('');

  const handleFetchClick = async () => {
    try {
      // For simplicity, assuming repoUrl is of format 'owner/repo' and path is hard-coded
      const content = await fetchFileFromRepo(repoUrl, 'test/chunk.spec.js');
      setCode(content);
    } catch (err) {
      err instanceof Error && console.error(err.message);
    }
  };

  return (
    <div>
      <h1>GitHub Code Sandbox</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub repo URL (format: owner/repo)"
          value={repoUrl}
          onChange={e => setRepoUrl(e.target.value)}
        />
        <button onClick={handleFetchClick}>Fetch Tests</button>
      </div>
      <CodeEditor code={code} onChange={newCode => setCode(newCode)} />

      <Link to="/dashboard">
        <button>Run Tests</button>
      </Link>
    </div>
  );
}
