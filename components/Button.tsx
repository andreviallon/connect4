export const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className="rounded-full capitalize font-semibold text-black px-6 py-3 transition bg-slate-300 hover:bg-slate-400">
      {text}
    </button>
  );
};
