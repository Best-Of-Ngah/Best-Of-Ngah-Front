import { useState } from 'react';
import { send } from "@emailjs/browser";
import { Close } from '@mui/icons-material';

const Donate = () => {
    const [last_name, setLastName] = useState("");
    const [first_name, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            last_name,
            first_name,
            email,
            message,
        };

        send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.EMAILJS_ACCOUNT_ID 
        ).then(
            (response) => {
                console.log("Email envoyé avec succès!", response.status, response.text);
                alert("Email envoyé avec succès!");
                setLastName("");
                setFirstName("");
                setEmail("");
                setMessage("");
            },
            (err) => {
                console.error("Échec de l'envoi de l'email:", err);
                alert("Échec de l'envoi de l'email. Veuillez réessayer.");
            }
        );
    };

    return <div>
             <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative shadow-current rounded-lg shadow bg-main">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Hifandray aminay
                            </h3>
                            <button type="button" className=" rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-white dark:hover:text-black" data-modal-toggle="crud-modal" tabIndex={0}>
                                <Close color="white"/>
                            </button>
                        </div>
                  
                        <form className="p-4 md:p-5 " onSubmit={sendEmail}>
                            <div className="grid gap-4 mb-4 grid-cols-2 font-bold">
                                <div className="col-span-2">
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Anarana</label>
                                    <input type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-black font-bold text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ampidiro ny anaranao" required value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fanampin'anarana</label>
                                    <input type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ampidiro ny Fanampin'anaranao" required value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="col-span-2">
                                    <div className="flex items-center">
                                        <input id="email_info_permission" name="email_info_permission" type="checkbox" className="h-4 w-4  border-gray-300 bg-white text-black font-bold rounded focus:ring-blue-500 " required />
                                        <label htmlFor="email_info_permission" className="ml-3 block text-sm font-medium text-gray-900 dark:text-white">
                                            Mampiditra ny mombamomba ny mailaka
                                        </label>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ampidiro ny hafatrao" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-second hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-second dark:hover:bg-gray-300 dark:focus:ring-gray-300">
                                Alefa
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
}

export default Donate;