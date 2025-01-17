export default function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
        className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
}
