type PriceInputProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  afterText?: string;
};

function PriceInput({ label, onChange, value, afterText }: PriceInputProps) {
  return (
    <div className="flex items-center gap-0.5">
      <label className="font-bold">{label}</label>
      <input
        className="bg-white p-2 w-13  border-b"
        value={value}
        onChange={onChange}
      />
      {afterText && <label className="font-bold">{afterText}</label>}
    </div>
  );
}

export default PriceInput;
