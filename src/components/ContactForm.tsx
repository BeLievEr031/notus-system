import clsx from "clsx"
import { motion, useInView } from "motion/react"
import React, { useRef, useState } from "react"

function ContactForm() {

    const [error, setError] = useState({
        isName: false,
        isEmail: false,
        isMsg: false
    })

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        msg: ""
    })

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const animateAllTogether = isInView;
    return (
        <div
            id="contact-section"
            className="flex min-h-screen w-full flex-col items-center justify-center p-8 pb-16 md:pb-8 bg-black"
        >
            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between gap-8">
                <div className="w-full md:w-7/12">
                    <ContactHeading />
                    <form className="space-y-6">

                        <motion.div
                            ref={ref}
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}

                        >


                            <AnimatedDiv error={error.isName}
                                label="name"
                                type="text"
                                as="input"
                                onBlurCb={() => {
                                    if (formData.name.length <= 0) {
                                        setError({
                                            ...error,
                                            isName: true
                                        })
                                    } else {
                                        setError({
                                            ...error,
                                            isName: false
                                        })
                                    }
                                }}

                                onChangeCb={(e) => {
                                    setFormData({
                                        ...formData,
                                        name: e.target.value
                                    })
                                }}

                                animateAllTogether={animateAllTogether}
                            />

                            <AnimatedDiv error={error.isEmail}
                                label="email"
                                type="email"
                                as="input"
                                onBlurCb={() => {
                                    if (formData.email.length <= 0) {
                                        setError({
                                            ...error,
                                            isEmail: true
                                        })
                                    } else {
                                        setError({
                                            ...error,
                                            isEmail: false
                                        })
                                    }
                                }}

                                onChangeCb={(e) => {
                                    setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })
                                }}

                                animateAllTogether={animateAllTogether}


                            />

                            <AnimatedDiv error={error.isMsg}
                                label="MESSAGE"
                                type="text"
                                as="textarea"
                                onBlurCb={() => {
                                    if (formData.msg.length <= 0) {
                                        setError({
                                            ...error,
                                            isMsg: true
                                        })
                                    } else {
                                        setError({
                                            ...error,
                                            isMsg: false
                                        })
                                    }
                                }}

                                onChangeCb={(e) => {
                                    setFormData({
                                        ...formData,
                                        msg: e.target.value
                                    })
                                }}

                                animateAllTogether={animateAllTogether}

                            />

                            <div className="pt-4">
                                <SubmitButton />
                            </div>
                        </motion.div>
                    </form>
                </div>
                <ContactInfo />
            </div>
        </div>

    )
}


function ContactHeading() {
    return <div
        className=""
        style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "opacity 0.6s, transform 0.6s"
        }}
    >
        <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-white pl-4">
            CONTACT US
        </h2>
    </div>
}

function Error() {
    return <p className="text-red-500 text-xs mt-1">
        Please fill out this field
    </p>
}

function CrossSvg() {
    return <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
}

function SubmitButton() {
    return <button
        type="submit"
        className="relative bg-transparent text-white font-bold py-3 px-8 border-2 border-white overflow-hidden group z-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            SUBMIT
        </span>
        <span className="absolute top-0 left-0 w-0 h-full bg-white group-hover:w-full transition-all duration-300 z-0" />
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center" />
    </button>
}

function ContactInfo() {
    return <div className="w-full md:w-4/12 flex flex-col justify-start mt-14 md:mt-20">
        <div
            className=""
            style={{
                opacity: 1,
                transform: "translateY(0px)",
                transition: "opacity 0.6s 200ms, transform 0.6s"
            }}
        >
            <div className="mb-8">
                <h3 className="text-white text-lg font-bold mb-2 border-l-4 border-white pl-4">
                    EMAIL
                </h3>
                <a
                    href="mailto:founders@notussystems.com"
                    className="text-white hover:text-gray-300 transition-colors"
                >
                    founders@notussystems.com
                </a>
            </div>
        </div>
        <div
            className=""
            style={{
                opacity: 1,
                transform: "translateY(0px)",
                transition: "opacity 0.6s 150ms, transform 0.6s"
            }}
        >
            <div className="pb-12 md:pb-0">
                <h3 className="text-white text-lg font-bold mb-2 border-l-4 border-white pl-4">
                    PHONE
                </h3>
                <a
                    href="tel:+14159187723"
                    className="text-white hover:text-gray-300 transition-colors"
                >
                    +1 415-918-7723
                </a>
            </div>
        </div>
    </div>
}


interface AnimatedDivProp {
    label: string;
    type: "text" | "email";
    as: "input" | "textarea";
    error: boolean;
    animateAllTogether: boolean;
    onChangeCb: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlurCb: () => void;
}

function AnimatedDiv({
    label,
    type,
    as = "input",
    error = false,
    onChangeCb,
    onBlurCb,
    animateAllTogether
}: AnimatedDivProp) {
    const ref = useRef(null)
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    const isInView = useInView(ref, { once: true });
    const shouldAnimate = animateAllTogether ? true : isInView;
    return (
        <motion.div
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
        >
            <div className="group">
                <label htmlFor={label} className="block text-white text-sm font-bold mb-2 uppercase">
                    {label}
                </label>

                {as === "input" ? (
                    <div className="relative">
                        <input
                            type={type}
                            id={label}
                            required
                            name={label}
                            className={clsx(
                                `w-full bg-black text-white border-2 p-3 outline-none transition-all duration-300 focus:border-white hover:border-gray-400 group-hover:border-gray-400 border-gray-700`,
                                { "border-red-500": error }
                            )}
                            onChange={onChangeCb}
                            onBlur={onBlurCb}
                            defaultValue=""
                        />
                        {error && <CrossSvg />}
                    </div>
                ) : (
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className={clsx(
                                `w-full bg-black text-white border-2 p-3 outline-none transition-all duration-300 focus:border-white hover:border-gray-400 group-hover:border-gray-400 border-gray-700`,
                                { "border-red-500": error }
                            )}
                            onChange={onChangeCb}
                            onBlur={onBlurCb}
                            defaultValue=""
                        />
                        {error && <CrossSvg />}
                    </div>
                )}
                {error && <Error />}
            </div>
        </motion.div>
    );
}


export default ContactForm