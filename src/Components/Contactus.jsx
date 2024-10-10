import React, { useState } from 'react'
import "../App.css"
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase";
// import { app } from "../firebase";



function Contactus() {
    const [formdata, setformdata] = useState({
        username: '',
        useremail: '',
        website: '',
        message: ''
      });
      const [donemessage, setdonemessage] = useState('');
      const [errormessage, seterrormessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
      };
    
      const handleSubmit = async  (e) => {
        e.preventDefault();
        if (!formdata.username || !formdata.useremail || !formdata.message) {
          seterrormessage('ERROR!!!');
          return;
        }
        const docRef = await addDoc(collection(db, "contactForms"), formdata);

        if (docRef) {
            setdonemessage('Your message has been sent successfully!');
            setformdata({ username: '', useremail: '', website: '', message: '' }); // Reset form
        } else {
            seterrormessage('There was an error sending your message. Please try again later.');
        };
    };







  return (
   <>
    <form action="" onSubmit={handleSubmit}  className="contactpage" >
          
    <input
          type="text"
          id=""
          name="username"
          value={formdata.username}
          placeholder="Enter your name"
          onChange={handleChange}
          
        />
          <br />
          <input
          type="email"
          id=""
          name="useremail"
          value={formdata.useremail}
          placeholder="Enter your email"
          onChange={handleChange}
          
        />
          <br />
          <input
          type="text"
          id=""
          name="website"
          value={formdata.website}
          placeholder="Enter your website"
          onChange={handleChange}
        />
          <br />
          <textarea
          name="message"
           id=""
          value={formdata.message}
          placeholder="Enter your message"
          onChange={handleChange}
        ></textarea>
        <br />


          <button type="submit">Send Message</button>
          </form>

          {<p className="error">{errormessage}</p>}
            {<p className="success">{donemessage}</p>} 
        
   </>
  )
}

export default Contactus