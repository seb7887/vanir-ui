import React from 'react'
import BaseHighlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import { liveEditorStyle } from '.'

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  // @ts-ignore
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))

  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

interface HighlightProps {
  codeString: string
  language: Language
  metastring?: string
  showLines?: boolean
}

export const Highlight: React.FC<HighlightProps> = ({
  codeString,
  language,
  metastring,
  showLines,
  ...props
}) => {
  // @ts-ignore
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={liveEditorStyle} data-language={language}>
          <pre className={`${className} py-2`} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              return (
                <div
                  className={`px-5 ${
                    shouldHighlightLine(i) ? 'text-gray-200' : ''
                  }`}
                >
                  {showLines && (
                    <span className="opacity-30 mr-6 text-xs">{i + 1}</span>
                  )}
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  )
}
