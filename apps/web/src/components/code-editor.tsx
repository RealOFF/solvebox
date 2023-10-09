import MonacoEditor from 'react-monaco-editor';

type CodeEditorProps = {
  code: string;
  onChange: (value: string) => void;
};

export function CodeEditor({ code, onChange }: CodeEditorProps) {
  return (
    <MonacoEditor
      width="800"
      height="600"
      language="typescript"
      theme="vs-dark"
      value={code}
      onChange={onChange}
    />
  );
}
