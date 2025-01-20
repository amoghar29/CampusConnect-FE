export default function FormTextArea({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  rows = 4,
  disabled = false
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
        disabled={disabled}
      />
    </div>
  );
}
