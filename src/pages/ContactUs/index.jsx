import { Button, Input, Text, TextArea } from "components";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component is mounted
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l5n33ha', 'template_gflir0w', form.current, {
        publicKey: 'jqJUctJjwQxivDMsQ',
      })
      .then(
        () => {
          setIsSubmitted(true);
          // console.log(form.current)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins gap-10 items-center justify-end mx-auto w-full">
        <div className="flex flex-col font-opensans md:gap-10 gap-[79px] p-[50px] md:px-5 items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 items-center justify-start w-full mb-5 mx-auto gap-[5rem] lg:max-w-[1250px] md:px-5">
            <NavBar className="flex md:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full" />
            <div className="flex flex-col gap-2 justify-center items-center">
              <Text
                className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
                size="txtOpenSansRomanBold52"
              >
                Contact us
              </Text>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-801 w-full"
                size="txtPoppinsRegular25"
              >
                We value your feedback and would love to hear about your experience. Please feel free to share your thoughts with us.
              </Text>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center w-[49%] md:w-full">
                <Text className="text-center text-green-600 mb-4">
                  Thank you, we will get back to you.
                </Text>
              </div>
            ) : (
              <form  ref={form} onSubmit={sendEmail} className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[49%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start rounded-lg w-full">
                  <Input
                    name="user_firstName"
                    placeholder="First name"
                    className="p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                    wrapClassName="bg-white-A700 border border-gray-400 border-solid pl-6 pr-[35px] py-[17px] rounded-lg w-full"
                    type="text"
                  />
                  <Input
                    name="user_lastName"
                    placeholder="Last name"
                    className="p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                    wrapClassName="bg-white-A700 border border-gray-400 border-solid pl-6 pr-[35px] py-[17px] rounded-lg w-full"
                    type="text"
                  />
                  <Input
                    name="email"
                    required
                    placeholder="Email address"
                    className="p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                    wrapClassName="bg-white-A700 border border-gray-400 border-solid pl-6 pr-[35px] py-[17px] rounded-lg w-full"
                    type="email"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    className="p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                    wrapClassName="bg-white-A700 border border-gray-400 border-solid pl-6 pr-[35px] py-4 rounded-lg w-full"
                  />
                  <TextArea
                    className="bg-white-A700 border border-gray-400 border-solid leading-[normal] pb-[35px] pl-6 pr-[35px] pt-[30px] sm:px-5 rounded-lg text-base placeholder:text-gray-500 text-gray-500 text-left w-full"
                    name="message"
                    placeholder="Message"
                  />
                </div>

                <Button type="submit" className="bg-red-400 cursor-pointer min-w-[540px] sm:min-w-full py-[26px] rounded-[12px] sm:text-[21px] lg:text-[23px] text-center text-white-A700 hover:bg-red-500">
                  Send feedback
                </Button>
              </form>
            )}
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
}
