import {useState} from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {BiMailSend} from 'react-icons/bi';
import {TfiWrite} from 'react-icons/tfi';
import Form from './Form.css';
import useRequest from '../../hooks/useRequest';

const FormEmail = () => {
    const [inputs, setInput] = useState({});
    const [text, setText] = useState([]);
    const {postEmail} = useRequest();

    const resetDefault = () => {
        Object.values(text).forEach(input => input.value = '');
    }

    const handleBlurInputs = ({target}) => {
        setInput({...inputs, [target.name]: target.value});
        setText({...text, [target.name]: target})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            
            resetDefault();
        } catch (error) {

            throw new Error(error);
        }     
    }

  return (
    <Form action="https://formsubmit.co/cajuishop@gmail.com" method="POST">
      <div className='container-titles-email'>
        <h2>Enviar email</h2>
        <h3>Apenas para trabalho!</h3>
      </div>

        <div className="container-inputs">
            <label>
                <input 
                    type="email"
                    name="email"
                    onBlur={handleBlurInputs}
                    placeholder='example@gmail.com'
                    autoComplete='off'
                    required
                />
                <AiOutlineMail/>
            </label>

            <label>
                <input type="text"
                     name="name"
                     onBlur={handleBlurInputs}
                     placeholder='Nome'
                     required
                />
                <BsFillPersonFill/>
            </label>

            <label>
                <textarea name="message"
                    cols="30" rows="10"
                    placeholder='Escreva sua mensagem'
                    required
                    onBlur={handleBlurInputs}
                >
                </textarea>
                <TfiWrite/>
            </label>

        </div>

        <button type="submit">
            Enviar
            <BiMailSend/>
        </button>
    </Form>
  )
}

export default FormEmail
