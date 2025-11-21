import { Phone, Mail } from "lucide-react";
import contactData from "../data/contactData";
import { MapPin } from "lucide-react";
const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a03039' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm30 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-[#a03039]/10 backdrop-blur-sm px-6 py-3 rounded-full text-[#a03039] font-bold mb-8 border border-[#a03039]/20">
                        <Phone size={20} />
                        <span>Get In Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        Contact <span className="text-[#a03039]">Our Team</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Ready to transform your business with cutting-edge technology? Let's discuss your project requirements
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-center group">
                                <div className="bg-gradient-to-r from-[#a03039] to-[#8a2831] w-16 h-16 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Phone className="text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h4>
                                    <p className="text-[#a03039] font-semibold text-lg">{contactData.phone}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center group">
                                <div className="bg-gradient-to-r from-[#a03039] to-[#8a2831] w-16 h-16 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Mail className="text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email Address</h4>
                                    <p className="text-[#a03039] font-semibold text-lg">{contactData.email}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center group">
                                <div className="bg-gradient-to-r from-[#a03039] to-[#8a2831] w-16 h-16 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <MapPin className="text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Office Location</h4>
                                    <p className="text-[#a03039] font-semibold text-lg">{contactData.address}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#a03039]/5 to-[#a03039]/10 p-6 rounded-2xl border border-[#a03039]/20">
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Business Hours</h4>
                            <div className="space-y-2 text-gray-700">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-semibold">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a03039] focus:border-transparent transition-all duration-300" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a03039] focus:border-transparent transition-all duration-300" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a03039] focus:border-transparent transition-all duration-300" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Service Interest</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a03039] focus:border-transparent transition-all duration-300">
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>AI Solutions</option>
                                    <option>Digital Transformation</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                                <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a03039] focus:border-transparent transition-all duration-300 resize-none" placeholder="Tell us about your project requirements..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-[#a03039] to-[#8a2831] text-white py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact