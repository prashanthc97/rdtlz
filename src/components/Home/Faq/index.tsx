// components/Faq.js
'use client';
import Image from 'next/image';
import React, { useState } from 'react';// Optional: install lucide-react icons

const faqData = [
  {
    question: "What does your company do?",
    answer:
      "We are a services-based company offering complete IT solutions including cloud, infrastructure, application development, and digital transformation. In addition, we have expertise across industries such as healthcare, pharma, and lifestyle ventures like cafés and restaurants.",
  },
  {
    question: "Do you work with clients worldwide?",
    answer:
      "Yes, we serve clients across multiple countries, providing both remote and on-site support depending on project needs.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We have strong expertise in IT, healthcare, pharma, retail, finance, and hospitality. Our diverse portfolio allows us to adapt to almost any domain.",
  },
  {
    question: "How do you ensure security and compliance?",
    answer:
      "We follow industry best practices, use advanced encryption technologies, and comply with global standards to keep your business data secure.",
  },
  {
    question: "Are your solutions scalable?",
    answer:
      "Yes, all our IT services and applications are designed to grow with your business, whether you’re a startup or a global enterprise.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Absolutely. We offer 24/7 support, maintenance, and continuous improvement services to ensure your systems run smoothly.",
  },
];


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className=" py-16 text-white">
            <div className="container">
                <div className=" mx-auto px-4">
                    <div className="text-center mb-10">
                        <p className="text-green-400 uppercase text-sm">Popular questions</p>
                        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Learn more about RiddleTalez</h2>
                        <p className="text-gray-400 mt-2">We believe in creating a diverse business ecosystem from software and IT solutions to lifestyle ventures like cafés and restaurants.</p>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-lg p-4 cursor-pointer transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">{item.question}</h3>
                                    <Image
                                        src={"/images/icons/plus-icon.svg"}
                                        alt='plus-icon'
                                        width={20}
                                        height={20}
                                        className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                                    />
                                </div>

                                <div
                                    className={`mt-2 text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 visible' : 'max-h-0 hidden'
                                        }`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
