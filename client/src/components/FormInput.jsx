const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control ">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size} bg-zinc-100 focus:bg-zinc-50`}
      />
    </div>
  );
};
export default FormInput;