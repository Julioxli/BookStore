import '../Input/InputForm.css'

const InputForm = ({type, placeholder, value, onChange}) => {
  return <input className='input-form'
  value={value}
  onChange={onChange}
  type={type}
  placeholder={placeholder} 
  />;
}

export default InputForm