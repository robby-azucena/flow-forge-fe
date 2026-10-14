import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Note from "../Note";

type Proptype<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  control?: Control<T>;
  labelHtmlFor?: string;
  value?: string | number | readonly string[];
  options: { value: string; label: string }[];
  disabled?: boolean;
};

const SelectField = <T extends FieldValues>({
  label,
  labelHtmlFor,
  control,
  name,
  options,
  disabled,
}: Proptype<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col items-start w-full">
          <label
            htmlFor={labelHtmlFor}
            className="block text-sm/6 font-medium text-gray-900"
          >
            {label}
          </label>
          <div className="w-full">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <select
                {...field}
                disabled={disabled}
                name={name}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={field.value ?? ""}
              >
                <option value="" disabled hidden>
                  Select an option
                </option>
                {options.map((option, index) => (
                  <option key={`${option.value}-${index}`} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <Note isError variant={"noteS"}>
              {error?.message}
            </Note>
          </div>
        </div>
      )}
    />
  );
};

export default SelectField;
