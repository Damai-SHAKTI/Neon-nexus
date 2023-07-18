export default function SelectInput({
  name,
  id,
  required,
  default_value,
  options,
  value,
  onChange,
}) {
  return (
    <select
      name={name}
      id={id}
      required={required}
      onChange={onChange}
      className="w-full max-w-sm outline-none text-white bg-black px-6 py-3 border-2 border-orange-500 -skew-x-12"
    >
      <option value="" disabled selected>
        {default_value}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option} selected={value == option}>
          {option}
        </option>
      ))}
    </select>
  );
}
