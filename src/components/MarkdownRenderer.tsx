import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import MermaidDiagram from "./MermaidDiagram";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  if (!content) return null;
  
  return (
    <Markdown
      remarkPlugins={[
        [remarkGfm, { singleTilde: false }],
        remarkMath,
      ]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code(props) {
          const { children, className } = props;
          const match = /language-(\w+)/.exec(className || "");
          
          // Handle mermaid diagrams
          if (match && match[1] === 'mermaid') {
            return (
              <MermaidDiagram 
                chart={String(children).replace(/\n$/, "")}
              />
            );
          }
          
          // Handle other code blocks with syntax highlighting
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={dark}
            />
          ) : (
            <code className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownRenderer; 