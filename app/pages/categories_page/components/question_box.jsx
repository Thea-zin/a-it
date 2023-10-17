"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import startsWith from "lodash.startswith";

export default function QuestionBox() {
  const [value, setValue] = useState("+85512345678");

  return (
    <div className="bg-white pb-6 rounded-2xl shadow">
      <div className="bg-[url('../public/write_review/question_hero.png')] bg-cover bg-center px-6 py-8 flex flex-col place-items-center text-white rounded-t-2xl">
        <p className="text-2xl font-medium">Have Questions?</p>
        <p className="text-2xl font-medium">Let's us help!</p>
        <p className="text-sm text-center mt-3">
          Get personalized recommendations from our experts on call!
        </p>
      </div>
      <div className="px-6">
        <div className="rounded-full border-[1px] border-bgray py-3 px-4 mt-6">
          <input type="text" placeholder="Name *" className="outline-none w-full"/>
        </div>
        <div className="rounded-full border-[1px] border-bgray py-3 px-4 mt-4">
          <input type="text" placeholder="Business Email *" className="outline-none w-full"/>
        </div>
        <div className="rounded-full border-[1px] border-bgray px-5 mt-4">
          <PhoneInput
            country={"kh"}
            value={value}
            onChange={(phone) => {
              console.log(phone);
              setValue(phone);
            }}
            isValid={(inputNumber, country, countries) => {
              return countries.some((country) => {
                return (
                  startsWith(inputNumber, country.dialCode) ||
                  startsWith(country.dialCode, inputNumber)
                );
              });
            }}
            containerStyle={{border: 'none', height: '50px', borderRadius: '9999px'}}
            inputStyle={{border: 'none', height: '50px', width: '100%', borderRadius: '9999px'}}
            buttonStyle={{border: 'none', borderRadius: '9999px 0px 0px 9999px', backgroundColor: 'transparent'}}
          />
        </div>
        <button className="bg-darkblue my-4 p-3 text-2xl font-medium text-white w-full rounded-full">Get Offer</button>
        <p className="text-sm font-semibold text-center">
          By submitting, you agree to our&nbsp;
          <span>
            <a href="" className="text-blue-700">
              Terms and Condition
            </a>
          </span>
          &nbsp;and&nbsp;
          <span>
            <a href="" className="text-blue-700">
              Privacy Policy
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
