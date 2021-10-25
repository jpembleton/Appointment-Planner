import React from "react";

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit
}) => {


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
        />

        <input 
        type="tel" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        required
        />

        <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
        />

        <input 
        type="submit" 
        />

      </form>
    </div>
  );
};
