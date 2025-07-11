import React from "react";
import type { ReactNode } from "react";

interface PreviewProps {
	htmlOutput: ReactNode;
}

const Preview = ({ htmlOutput }: PreviewProps) => {
	return (<>
		<div className="w-full py-4 px-2 bg-blue-100 border border-slate-500 rounded-xl">
			{htmlOutput}
		</div>
	</>);
};

export default Preview;
