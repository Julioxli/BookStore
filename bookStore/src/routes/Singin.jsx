import { useState } from "react"
import InputForm from "../components/Input/InputForm"
import ButtonForm from "../components/Button/ButtonForm"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

import "./Css/Singin.css"


const Singin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate("/home");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/addlivros");
  };


  return (
    <div className="container">
      <label className="label">LOGIN</label>
      <div className="content">
      <InputForm className='input-form'
      type="email"
      placeholder="Digite seu E-mail"
      value={email}
      onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <InputForm className='input-form'
      type="password"
      placeholder="Digite sua senha"
      value={senha}
      onChange={(e) => [setSenha(e.target.value), setError("")]} />
      <label className="labelerror">{error}</label>
      <ButtonForm text="Entrar" onClick={handleLogin}/>
      <label className="labelsingin">
          <p>Não tem uma conta?</p>
          <p>&nbsp;<Link to="/singnup">Registre-se</Link></p>
        </label>
      </div>
    </div>
  )
}

export default Singin
