import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
import { motion } from 'framer-motion';
import '../contact.css'; // Import the CSS file

function ContactForm() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active",
        avatar: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function handleSave() {
        dispatch(addContact(form));
    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md contact-card"
            >
                <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="first-name">
                        First Name
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded-md"
                        id="first-name"
                        type="text"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="last-name">
                        Last Name
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded-md"
                        id="last-name"
                        type="text"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="mob">
                        Mobile Number
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded-md"
                        id="mob"
                        type="number"
                        name="mob"
                        value={form.mob}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="status">
                        Status
                    </label>
                    <select
                        className="w-full border border-gray-400 p-2 rounded-md"
                        id="status"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >
                        <option value={'active'}>Active</option>
                        <option value={"inactive"}>Inactive</option>
                    </select>
                </div>
            
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#4a90e2" }}
                    whileTap={{ scale: 0.9, backgroundColor: "#357ab8" }}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSave}
                >
                    Save Contact
                </motion.button>
            </motion.div>
        </div>
    );
}

export default ContactForm;
