import React from "react";
import type { SectionProps } from "../../types";
import { motion } from "motion/react"

export const Section: React.FC<SectionProps> = ({
    id, 
    title,
    children, 
    className 
}) => {
    const Title = () => {
        return (
            <motion.div
                initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
                whileInView={{ opacity: 1, transform: 'translateY(0)' }}
                viewport={{ 
                    once: true, 
                    amount: "all",
                    margin: "0px 0px -100px 0px"
                }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full flex justify-center items-center mb-2 relative">
                <h1 className="z-1">{title}</h1>
                <h1 className="absolute xl:-translate-y-2 tracking-widest text-nowrap opacity-15 blur-sm xl:text-9xl! text-5xl!">{title}</h1>
                </div>
            </motion.div>
        );
    }

    return (
        <section 
            id={id}
            className={`relative py-16 xl:px-20 px-7 min-h-screen h-auto flex items-center justify-center dark:text-stone-50 text-stone-950 transition-colors ${className}`}
        >
            {title && <Title />}
            {children}
        </section>
    );
};
