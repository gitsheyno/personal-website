interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}

const InputField = ({ label, id, type, required = false }: InputFieldProps) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-medium text-blue-100 mb-1">
      {label} {required && <span className="text-cyan-400">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      className="border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm rounded-lg p-3 text-white placeholder-blue-200/50 shadow-sm focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 hover:border-blue-400/50 outline-none transition-all"
    />
  </div>
);

export default InputField;
