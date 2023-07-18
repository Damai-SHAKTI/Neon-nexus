export default function TextArea({ type, required, placeholder, value, onChange }) {
  return (
    <textarea
      type={type}
      rows={4}
      required={required}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full max-w-sm outline-none text-white bg-black px-4 py-2 border-2 border-orange-500 -skew-x-12"
    />
  );
}
