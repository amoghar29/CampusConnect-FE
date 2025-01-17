export default function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  placeholder,
  icon: Icon,
  disabled = false,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        )}
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`block w-full rounded-lg border ${
            disabled
              ? "bg-gray-100 text-gray-700 border-gray-200 cursor-not-allowed"
              : "bg-white border-gray-300 hover:border-gray-400"
          } px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 ${
            Icon ? "pl-10" : ""
          }`}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
