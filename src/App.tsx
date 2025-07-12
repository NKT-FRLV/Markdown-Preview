import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";

/**
 * Renders the main application interface for a markdown editor with live preview, syntax highlighting, and math rendering.
 *
 * Provides state management for markdown input, handles user input changes and example selection, and composes the editor, preview, and header components. The preview supports GitHub-flavored markdown, math expressions, and syntax-highlighted code blocks.
 *
 * @returns The React element representing the markdown editor application UI.
 */
function App() {
	const [markdownInput, setMarkdownInput] = useState("");
	const [isGuideOpen, setIsGuideOpen] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setMarkdownInput(value);
	};

	const handleSelectExample = (content: string) => {
		setMarkdownInput(content);
	};

	const handleToggleGuide = () => {
		setIsGuideOpen(!isGuideOpen);
	};

	const handleCloseGuide = () => {
		setIsGuideOpen(false);
	};

	return (
		<div className="App w-full h-full p-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
			<div className="main-Wrapper h-full flex flex-col">
				<Header 
					onSelectExample={handleSelectExample} 
					onToggleGuide={handleToggleGuide}
				/>
				<div className="flex w-full gap-6 flex-1 mt-6">
					<Editor
						onChange={handleChange}
						inputValue={markdownInput}
					/>
					<Preview markdownContent={markdownInput} />
				</div>
			</div>
			
			<MarkdownGuide 
				isOpen={isGuideOpen}
				onClose={handleCloseGuide}
			/>
		</div>
	);
}

export default App;
