import React from 'react';

interface SelectProps {
  onSelect?: (event: React.FormEvent<HTMLSelectElement>) => void;
  className?: string;
  defaultText: string;
  optionArea: string;
  optionLine: string;
  optionBar: string;
}

const Select: React.FC<SelectProps> = ({
  onSelect,
  className,
  defaultText,
  optionArea,
  optionLine,
  optionBar,
}) => (
  <select
    className={`form-select ${className}`}
    aria-label="Default select example"
    onSelect={onSelect}
  >
    <option selected>{defaultText}</option>
    <option value="area">{optionArea}</option>
    <option value="line">{optionLine}</option>
    <option value="bar">{optionBar}</option>
  </select>
);

export default Select;
