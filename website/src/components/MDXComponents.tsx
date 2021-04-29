import React from 'react'
import { CodeBlock } from './codeblock'

export const MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-2xl text-gray-900 font-semibold mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-xl text-gray-900 font-semibold mb-2 mt-12" {...props} />
  ),
  p: (props: any) => <p className="text-gray-900" {...props} />,
  code: CodeBlock,
}
