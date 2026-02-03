type TabProps = {
    text: string;
};

export default function Tab({ text }: TabProps) {
    return (
        <div className="px-4 py-1 bg-accent-800 rounded-full">
            <span className="font-semibold text-sm text-accent-400">
                {text}
            </span>
        </div>
    );
}