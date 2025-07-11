import { useState } from "react";
import "./App.css";
import Markdown from "react-markdown";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/**
 * Renders the main application interface for a markdown editor with live preview, syntax highlighting, and math rendering.
 *
 * Provides state management for markdown input, handles user input changes and example selection, and composes the editor, preview, and header components. The preview supports GitHub-flavored markdown, math expressions, and syntax-highlighted code blocks.
 *
 * @returns The React element representing the markdown editor application UI.
 */
function App() {
	const [markdownInput, setMarkdownInput] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setMarkdownInput(value);
	};

	const handleSelectExample = (content: string) => {
		setMarkdownInput(content);
	};

	return (
		<div className="App w-full h-full p-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
			<div className="main-Wrapper flex flex-col">
				<Header onSelectExample={handleSelectExample} />
				<div className="flex w-full gap-6 flex-1 mt-6">
					<Editor
						onChange={handleChange}
						inputValue={markdownInput}
					/>
					<Preview
						htmlOutput={
							markdownInput.length > 0 ? <Markdown
								remarkPlugins={[
									[remarkGfm, { singleTilde: false }],
									remarkMath,
								]}
								rehypePlugins={[rehypeKatex]}
								components={{
									code(props) {
										const { children, className } = props;
										const match = /language-(\w+)/.exec(
											className || ""
										);
										return match ? (
											<SyntaxHighlighter
												PreTag="div"
												children={String(
													children
												).replace(/\n$/, "")}
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
								{markdownInput}
							</Markdown>
							: null
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
