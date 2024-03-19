"use client";

import { useEffect, useRef, useState } from "react";

export default function PublishSoftware() {
  const [softName, setSoftName] = useState(true);
  const [description, setDescription] = useState(true);
  const [category, setCategory] = useState(true);
  // const [company, setCompany] = useState(true);
  const [logoMark, setLogoMark] = useState(true);
  const [logo, setLogo] = useState(null);
  const [form, setForm] = useState(null);
  const [categoryContent, setCategoryContent] = useState("");
  const [showCategoryList, setShowCategoryList] = useState(false);
  const didMount = useRef(true);

  const updateLogo = (logo) => {
    if (logo != null && logo.size > 100) {
      if (logo.type == "image/png" || logo.type == "image/jpeg") setLogo(logo);
    }
  };

  const validateForm = (form) => {
    setSoftName(acceptable(form.get("serviceName")));
    setDescription(acceptable(form.get("description")));
    setCategory(acceptable(form.get("category")));
    // setCompany(acceptable(form.get("company")));

    if (
      logo == null ||
      logo.size < 100 ||
      (logo.type != "image/png" && logo.type != "image/jpeg")
    ) {
      console.log("Logo not fit");
      setLogoMark(false);
    } else {
      setLogoMark(true);
    }
    setForm(form);
  };

  useEffect(() => {
    console.log(didMount.current);
    if (didMount.current) {
      didMount.current = false;
    } else {
      if (softName && description && category && logoMark) {
        onPublish(form);
      }
    }
  }, [form]);

  useEffect(() => {
    if (categoryContent != "" && categoryContent != null) {
      setShowCategoryList(true);
    } else {
      setShowCategoryList(false);
    }
  }, [categoryContent]);

  const acceptable = (item) => {
    return item != null && item != "";
  };

  const onPublish = async (form) => {
    // let formData = new FormData();
    // formData.append("icon", logo);
    console.warn("publish get called!");
    const temp = await fetch("/api/publishSoftware", {
      method: "POST",
      body: form,
    });
    if (temp.status == 200) console.log("Successfully published!");
    else console.error("Fail to publish");
  };

  return (
    <div className="p-8 bg-white rounded-2xl">
      <div className="flex">
        <div className="w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path
              fill="currentColor"
              d="M11 20v-8.15l-2.6 2.6L7 13l5-5l5 5l-1.4 1.45l-2.6-2.6V20zM4 9V6q0-.825.588-1.412T6 4h12q.825 0 1.413.588T20 6v3h-2V6H6v3z"
            />
          </svg>
        </div>
        <p className="font-bold text-2xl ml-2">Publish Software</p>
      </div>
      <form action={validateForm}>
        <div className="mt-8 ml-10">
          <div>
            <label htmlFor="seviceName" className="font-bold">
              {"Software/Service's Name "}
              <span className="text-red">*</span>
            </label>
            <br />
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              className={`w-full border-[1px] py-2 px-5 rounded-full focus:outline-none ${
                !softName && "border-red"
              }`}
            />
          </div>
          <div className="mt-8">
            <label htmlFor="seviceName" className="font-bold">
              Description <span className="text-red">*</span>
            </label>
            <br />
            <textarea
              type="text"
              id="description"
              name="description"
              rows={10}
              className={`w-full border-[1px] py-2 px-5 rounded-2xl focus:outline-none ${
                !description && "border-red"
              }`}
            />
          </div>
          <div className="flex place-content-between mt-8 gap-20">
            <div className="flex-1">
              <label htmlFor="seviceName" className="font-bold">
                Category <span className="text-red">*</span>
              </label>
              <br />
              <div className="flex relative">
                <input
                  type="text"
                  id="category"
                  name="category"
                  className={`w-full border-[1px] py-2 px-5 rounded-full focus:outline-none ${
                    !category && "border-red"
                  }`}
                  onChange={(e) => {
                    setCategoryContent(e.target.value);
                  }}
                />
                <button className="bg-white group hover:bg-darkblue rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.2em"
                    height="2.2em"
                    viewBox="0 0 24 24"
                    className=" group-hover:fill-white stroke-0 fill-darkblue"
                  >
                    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m-5 6l5 5l5-5z"></path>
                  </svg>
                </button>
                {showCategoryList && (
                  <div className="absolute -bottom-6 w-full bg-green-400">
                    category to choose
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 bg-blue-700">
              <button className="bg-red">category</button>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-bold">
              Logo <span className="text-red">*</span>
            </p>
            <div
              className={`border-dashed text-center px-10 pb-10 rounded-2xl ${
                logoMark
                  ? "border-slate-400 border-[1px]"
                  : "border-red border-2"
              }`}
            >
              <div className="font-bold text-cyan">
                <input
                  id="logoUpload"
                  name="logoUpload"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="invisible"
                  onChange={(e) => {
                    updateLogo(e.target.files[0]);
                  }}
                />
                <br />
                <label
                  className="text-lg hover:cursor-pointer group hover:text-white hover:bg-cyan"
                  for="logoUpload"
                >
                  {logo == null ? (
                    <div className="flex place-content-center">
                      <div className="group-hover:bg-cyan rounded-2xl p-5 text-center">
                        <div className="flex place-content-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5em"
                            height="5em"
                            viewBox="0 0 1024 1024"
                            className="fill-cyan group-hover:fill-white"
                          >
                            <path d="M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z" />
                          </svg>
                        </div>
                        <p className="text-center">Browse Image</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex place-content-center">
                      <img src={URL.createObjectURL(logo)} alt="" />
                    </div>
                  )}
                </label>
              </div>
              <p className=" text-sm text-slate-500">
                Supported formats: JPEG, JPG, PNG
              </p>
            </div>
          </div>
        </div>
        <div className="relative min-h-[40px] mt-16">
          <button
            type="submit"
            className="absolute right-0 mr-10 bg-slate-600 px-32 py-3 text-2xl font-semibold text-white rounded-full active:bg-cyan hover:bg-slate-500"
            // onClick={() => {
            //   onPublish();
            // }}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
