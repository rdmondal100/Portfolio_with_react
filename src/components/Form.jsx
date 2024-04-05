import { User } from "lucide-react";
import { LuMail, LuMessageSquare } from "react-icons/lu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";
import { LuSendHorizonal } from "react-icons/lu";
import { SiSendinblue } from "react-icons/si";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const { toast } = useToast();

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const submit = (data) => {
        setLoading(true);

        const scriptUrl =
            "https://script.google.com/macros/s/AKfycbz139g2Cy6wLCCVmOgcoD2mAIfw05ZgB1xhXfkC5Mun9s8-i9kifvTQ6uInvOJKokGA8Q/exec";

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        axios
            .post(scriptUrl, formData)
            .then((res) => {
                setLoading(false);
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
                toast({
                    variant: "success",
                    title: "Success!",
                    description: "Your message has been sent seccessfully. ",
                    res,
                    action: (
                        <ToastAction altText='Dismiss'>Dismiss</ToastAction>
                    ),
                });
                reset();
            })
            .catch((error) => {
                setLoading(false);
                

                const errorMessage =
                    error.message ||
                    "There was a problem with your request. Please try again.";
                toast({
                    variant: "destructive",
                    title: "Error!",
                    description: errorMessage,
                    action: (
                        <ToastAction altText='Try again'>Try again</ToastAction>
                    ),
                });

                console.error("Error submitting form:", error);
                console.log(error.message);
            });
    };

    return (
        <>
            <form
                className='flex flex-col gap-y-4 max-w-[650px] mx-auto'
                onSubmit={handleSubmit(submit)}
                method='post'
            >
                <div className='relative flex items-center'>
                    <Input
                        type='name'
                        id='name'
                        className='bg-secondary/20'
                        placeholder='Name'
                        {...register("name", { required: "Name is required" })}
                    />
                    <User className='text-xl absolute right-6' />
                </div>
                {errors.name && (
                    <span className='text-red-600'>{errors.name.message}</span>
                )}

                <div className='relative flex items-center'>
                    <Input
                        type='email'
                        id='email'
                        className='bg-secondary/20'
                        placeholder='Email'
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    <LuMail className='text-xl absolute right-6' />
                </div>
                {errors.email && (
                    <span className='text-red-600'>{errors.email.message}</span>
                )}

                <div className='relative flex items-center'>
                    <Textarea
                        type='message'
                        id='message'
                        className='bg-secondary/20 pt-8'
                        placeholder='Your message'
                        {...register("message", {
                            required: "Message is required",
                        })}
                    />
                    <LuMessageSquare className='text-xl absolute top-3 right-6' />
                </div>
                {errors.message && (
                    <span className='text-red-600'>
                        {errors.message.message}
                    </span>
                )}

                <Button
                    className={`font-aclonica flex gap-x-2 text-lg ${
                        loading && " animate-pulse"
                    } overflow-hidden`}
                    type='submit'
                >
                    {loading && <SiSendinblue className='animate-spin' />}{" "}
                    Let's Talk{" "}
                    <LuSendHorizonal
                        className={`text-2xl transition-all  ${
                            submitted && "  translate-x-full duration-500 w-full"
                        }  ${loading && " ml-5 animate-shake"}`}
                    />
                </Button>
            </form>
           
        </>
    );
};

export default Form;
