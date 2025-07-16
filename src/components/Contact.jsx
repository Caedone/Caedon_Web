import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://formspree.io/f/xqalkgdd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                // Reset form and close modal
                setFormData({ name: "", email: "", message: "" });
                setIsModalOpen(false);
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="border-t border-gray-600 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h2 className="my-10 text-center text-4xl text-white">Get in Touch!</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Have a project in mind or want to discuss opportunities? 
                    I'd love to hear from you and explore how we can create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-2xl">📍</span>
                        <span>Dallas, Texas, USA</span>
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white hover:bg-gray-200 text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Get In Touch ✨
                </motion.button>
            </motion.div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        className="bg-white p-6 sm:p-8 rounded-xl max-w-md w-full mx-4 shadow-2xl"
                    >
                        <div className="text-center mb-6">
                            <div className="text-4xl mb-2">💬</div>
                            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
                            <p className="text-gray-600 text-sm mt-2">Let's start a conversation</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="text-gray-700 text-sm font-semibold mb-2 flex items-center gap-2">
                                    <span>👤</span> Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d97af] focus:border-transparent text-gray-800 transition-all duration-200"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center gap-2">
                                    <span>📧</span> Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6d97af] focus:border-transparent text-gray-800 transition-all duration-200"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-semibold mb-2 flex items-center gap-2">
                                    <span>💭</span> Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    placeholder="Tell me about your project or idea..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-800 transition-all duration-200 resize-none"
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="bg-white hover:bg-gray-200 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex-1"
                                >
                                    Send Message
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex-1"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
};
export default Contact;