interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}

const TextareaField = ({ label, id, required = false }: InputFieldProps) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      required={required}
      rows={5}
      className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg p-3 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
    ></textarea>
  </div>
);
export default TextareaField;
