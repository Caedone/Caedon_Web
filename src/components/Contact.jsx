import { CONTACT } from "../constants";

const Contact = () => { 
    return (
        <div className="border-t border-stone-900 pb-20">
         <h2 className="my-10 text-center text-4xl">Contact Me</h2>
         <div className="text-center tracking-tighter">
            <p className="mb-4 text-xl">
                {CONTACT.address}
            </p>
            <p className="my-4">
                {CONTACT.phoneNo}
            </p>
       
         <a href = "#" className="border-b">
                {CONTACT.email}
         </a>
           </div>
        </div>
    );
};
export default Contact;