export default function Input({ type, required, placeholder, value, onChange, ...props }) {
    return (
        <input
            type={type}
            required={required}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
            className="w-full max-w-sm outline-none text-white bg-black px-4 py-2 border-2 border-orange-500 -skew-x-12"
        />
    )
}