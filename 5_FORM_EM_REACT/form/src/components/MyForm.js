import React from 'react'
import "./MyForm.css"

const MyForm = () => {
    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()

    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name)
    // console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Form submitted")
        console.log(name, email)

        setName("")
        setEmail("")
    };


  return (
    <div>
        {/* 1 - Criaçao de form */}
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleName} placeholder='Digite Seu Nome' value={name} />
            </div>
            <label>
                <span>Email</span>
                <input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Digite Seu Email' />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm