import type { ReactNode } from "react";
import { HiOutlineEye, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi';


interface PreviewProps {
	htmlOutput: ReactNode;
}

const Preview = ({ htmlOutput }: PreviewProps) => {
console.log(htmlOutput)

	return (
		<div className="w-[50%] flex-grow">
			<div className="w-full h-full p-4 bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 rounded-2xl shadow-2xl backdrop-blur-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500">
				<div className="mb-3 flex items-center justify-between">
					<h3 className="text-white text-lg font-semibold drop-shadow-lg animate-shimmer flex items-center gap-2">
						<HiOutlineEye className="text-orange-100 animate-pulse" size={24} />
						Preview
					</h3>
					<div className="flex items-center gap-2">
						{htmlOutput ? (
							<div className="flex items-center gap-1 text-green-200 text-sm">
								<HiOutlineCheckCircle size={16} />
								<span>Готово</span>
							</div>
						) : (
							<div className="flex items-center gap-1 text-yellow-200 text-sm">
								<HiOutlineExclamationCircle size={16} />
								<span>Ожидание</span>
							</div>
						)}
					</div>
				</div>
				<div className="w-full flex-1 min-h-[400px] p-4 bg-white/90 backdrop-blur-sm rounded-xl overflow-y-auto shadow-inner prose prose-gray max-w-none hover:bg-white/95 transition-all duration-300">
					{htmlOutput || (
						<div className="flex items-center justify-center h-full text-gray-400">
							<div className="text-center">
								<HiOutlineEye size={48} className="mx-auto mb-4 opacity-50" />
								<p>Предварительный просмотр появится здесь</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Preview;
