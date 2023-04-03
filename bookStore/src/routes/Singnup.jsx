import { useState } from "react"
import InputForm from "../components/Input/InputForm";
import ButtonForm from "../components/Button/ButtonForm";
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/post");
  };

  return (
    <div className="container">
      <label className="label">CADASTRO</label>
      <div className="content">
      <InputForm
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <InputForm
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <InputForm
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className="labelerror">{error}</label>
        <ButtonForm text="Inscrever-se" onClick={handleSignup} />
        <label className="labelsingin">
          <p>Já tem uma conta?</p>
          <p>&nbsp;<Link to="/singin">Entre</Link></p>
        </label>
        </div>
    </div>
  );
};

export default Signup;
