import s from "./Form.css"
import styled from "styled-components"
import validation from "./validation"
import {useState} from "react"

const FormS = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px auto; 
  border: 1px solid   #1DE700;
  width: 50%;
  border-radius: 10px;
  padding: 7vh 2vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  color:white;
  background-color: rgba(0, 0, 0, 0.8);
`
const DivS = styled.div`
  text-align: center;
  margin: 20px 0 12px 0;
`
const ImgS = styled.img`
width: 30%;
  border-radius: 50%;`

const DivS2 = styled.div`
  padding: 16px;
`
const InputS = styled.input`
width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`
const ButtonS = styled.button`
background-color:  #0A7140;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover{
    opacity: 0.8;
  }`

  const PError = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
  `

export default function Form({login}) {
    const[userData, setUserData] = useState({
            username:"",
            password:""
        })

    const[errors, setErrors] = useState({
            username:"",
            password:""
        })

    const handleChange = (e) => {
        setUserData({
          ...userData,
            [e.target.name]: e.target.value
        });
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value})
        )
    }
    const handleSubmit = () => {
        login(userData)
    }
    return <FormS>
    <DivS class="imgcontainer">
    <ImgS src="https://i.pinimg.com/originals/9d/05/eb/9d05eb8d62a6bfe4e96cac5ecbf823cb.jpg" alt="Avatar" class="avatar"/>
    </DivS>

  <DivS2 class="container">
    <label for="uname"><b>Username</b></label>
    <InputS onChange={handleChange} value={userData.username} type="text" placeholder="Enter Username" name="username" />
    <PError>{errors.username}</PError>

    <label for="psw"><b>Password</b></label>
    <InputS onChange={handleChange} value={userData.password} type="password" placeholder="Enter Password" name="password" />
    <PError>{errors.password}</PError>
    <button className="login" type="submit" onClick={handleSubmit}>LOGIN</button>
  </DivS2>
    </FormS>
    
    
}