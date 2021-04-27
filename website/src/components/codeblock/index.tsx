import React, { useMemo } from 'react'
import { Highlight } from './Highlight'

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 14,
  overflowX: 'auto',
  fontFamily: 'SF Mono, Menlo, monospace',
  borderRadius: 4,
}

export const liveErrorStyle: React.CSSProperties = {
  fontFamily: 'SF Mono, Menlo, monospace',
  fontSize: 14,
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red',
}

interface CodeBlockProps {
  className?: string
  viewLines?: boolean
  ln?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  children,
  viewLines,
  ln,
}) => {
  const codeString: any = useMemo(() => children?.toString().trim(), [children])
  const language: any = className?.replace(/language-/, '')

  return (
    <div className="my-4">
      <div className="rounded-md">
        <Highlight
          codeString={codeString}
          language={language}
          metastring={ln}
          showLines={viewLines}
        />
      </div>
    </div>
  )
}
