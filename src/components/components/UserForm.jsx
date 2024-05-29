import React from 'react'

function UserForm({data,updateFieldHandler}) {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name"> Nome:</label>
        <input type="text" name="text" id='name' 
        value={data.name||''}
        onChange={(e)=>updateFieldHandler("name",e.target.value)}
        placeholder='Digite seu nome' required />
      </div>

      <div className="form-control">
        <label htmlFor="email"> E-mail:</label>
        <input type="email" name="email" id='email'
        value={data.email||''}
        onChange={(e)=>updateFieldHandler("email",e.target.value)}
        placeholder='Digite seu email' required />
      </div>
    </div>
  )
}

export default UserForm