export default function FormInput({ 
  label, 
  icon: Icon, 
  type = "text", 
  name, 
  value, 
  onChange, 
  placeholder,
  required = false,
  className = ""
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {Icon && <Icon className="inline h-4 w-4 mr-2 text-gray-400" />}
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
      />
    </div>
  );
} 