import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor: '#000',
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)


  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function  handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    )
  }

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: { values.nome } </h1>

      <form onSubmit={ function handleSubmit(e){
        e.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])  

        setValues(valoresIniciais)
      }}>

        <FormField 
        label= "Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
        />

        <FormField 
        label= "Descrição da Categoria"
        type="textarea"
        name='descricao'
        value={values.descricao}
        onChange={handleChange}
        />

        <FormField 
        label= "Cor da Categoria"
        type="color"
        name='cor'
        value={values.cor}
        onChange={handleChange}
        />

        <button value="Cadastrar"> Cadastrar </button>

      </form>

      <Link to="/">
        ir para a Home
      </Link>
      
      <ul>
        {categorias.map((categoria) => {
          return(
            <li key={categoria} style={{backgroundColor: categoria.cor }} >
              {categoria.nome}
            </li>
          )
        })}
      </ul>

    </PageDefault>
  )
}

  export default CadastroCategoria;