export const LabeledInput = ({ label, children }: { label: string; children: React.ReactNode }) => {
	return (
		<div className="mb-4 flex flex-col">
			<label className="font-bold text-gray-600">
				<div className="mb-2">{label}</div>
				<div>{children}</div>
			</label>
		</div>
	);
};
