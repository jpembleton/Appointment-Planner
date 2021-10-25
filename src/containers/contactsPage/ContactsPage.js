import React, {useState, useEffect} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";



export const ContactsPage = ({contacts, updateContacts}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {  
    e.preventDefault();         
    if(duplicate === false) {
      updateContacts(name, number, email)
      setName("");
      setNumber("");
      setEmail("");
    }
  };

  //handle submit = if there is no duplicate name, updateContacts will add a new object with given form details, then resets the values

  useEffect(() => { // after Render, react will do this:
    for (const contact of contacts) { //iterates through contacts array
      if(name === contact.name) { //checks if given name exists in each iteration
        setDuplicate(true);
      }
      return;
    }
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        objArray={contacts}
        />
      </section>
    </div>
  );
};
