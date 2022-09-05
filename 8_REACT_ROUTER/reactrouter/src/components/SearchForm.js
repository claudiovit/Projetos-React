import "./SearchForm.css"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // navigate(`/products/${query}`)
        navigate("/search?q=" + query);
        setQuery('')
    }


  return <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
  </form>
};

export default SearchForm;