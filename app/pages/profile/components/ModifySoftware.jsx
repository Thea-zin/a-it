"use client";

import { useEffect, useRef, useState } from "react";

export default function ModifySoftware({
  id = "",
  sn = "",
  lg = null,
  cc = [],
  setShowModifyPanel,
}) {
  const [softName, setSoftName] = useState(true);
  const [category, setCategory] = useState(true);
  const [logoMark, setLogoMark] = useState(true);
  const [logo, setLogo] = useState(null);
  const [prevLogo, setPrevLogo] = useState(lg);
  const [form, setForm] = useState(null);
  const [categoryContent, setCategoryContent] = useState("");
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [chosenCategories, setChosenCategories] = useState([]);
  const didMount = useRef(true);

  const updateLogo = (logo) => {
    if (logo != null && logo.size > 100) {
      if (logo.type == "image/png" || logo.type == "image/jpeg") setLogo(logo);
    }
  };

  const validateForm = (form) => {
    setSoftName(acceptable(form.get("serviceName")));
    // setDescription(acceptable(form.get("description")));
    setCategory(chosenCategories.length != 0);
    // setCompany(acceptable(form.get("company")));

    if (prevLogo == null) {
      if (
        logo == null ||
        logo.size < 100 ||
        (logo.type != "image/png" && logo.type != "image/jpeg")
      ) {
        console.log("Logo not fit");
        setLogoMark(false);
      } else {
        form.append("isWithNewLogo", true);
        setLogoMark(true);
      }
    } else {
      form.append("isWithNewLogo", false);
      setLogoMark(true);
    }

    form.append("categories", chosenCategories);
    form.append("id", id);
    console.log(form.get("logoUpload"), form.get("isWithNewLogo"));

    setForm(form);
  };

  useEffect(() => {
    // console.log(didMount.current);
    if (didMount.current) {
      didMount.current = false;
    } else {
      if (softName && category && logoMark) {
        onSaveChanges(form);
      }
    }
  }, [form]);

  useEffect(() => {
    if (categoryContent != "" && categoryContent != null) {
      setShowCategoryList(true);
    } else {
      setShowCategoryList(false);
    }
    console.log("category content got changed!");
  }, [categoryContent]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    document.getElementById("serviceName").value = sn;
    setChosenCategories(cc);
  }, []);

  const acceptable = (item) => {
    return item != null && item != "";
  };

  const onSaveChanges = async (form) => {
    const temp = await fetch("/api/publishSoftware/modifySoftware", {
      method: "POST",
      body: form,
    });
    if (temp.status == 200) {
      alert("Successfully Update The Software");
      setShowModifyPanel(false);
    } else if (temp.status == 405) {
      alert(
        "Software Already Exist in The Database! Consider Chaning The Name or Making The Name Unique."
      );
    } else {
      alert("Publication fails!");
    }
  };

  const getCategories = async () => {
    const temp = await fetch("/api/publishSoftware/categories", {
      method: "POST",
      body: JSON.stringify({}),
    });
    const data = await temp.json();
    setCategoryList([...data.categories.categories]);
  };

  const updateChosenCategories = (category, add = false) => {
    let temp = chosenCategories;
    if (add) {
      temp.push(category);
    } else {
      const index = temp.indexOf(category);
      if (index >= 0) {
        temp.splice(index, 1);
      }
    }
    setChosenCategories([...temp]);
  };

  return (
    <div className="p-8 bg-white rounded-2xl">
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
              onFocus={() => {
                setShowCategoryList(false);
              }}
            />
          </div>
          {/* <div className="mt-8">
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
          </div> */}
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
                    console.log("Category content change!");
                  }}
                />
                <div
                  className="bg-white group hover:bg-darkblue rounded-full p-1 cursor-pointer"
                  onClick={(e) => {
                    setShowCategoryList(!showCategoryList);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.2em"
                    height="2.2em"
                    viewBox="0 0 24 24"
                    className=" group-hover:fill-white stroke-0 fill-darkblue"
                  >
                    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m-5 6l5 5l5-5z"></path>
                  </svg>
                </div>
                {showCategoryList && (
                  <div className="absolute top-11 w-full bg-slate-100 p-3 rounded-lg max-h-[300px] overflow-scroll">
                    {categoryList.map((item, index) => {
                      if (
                        item
                          .toLowerCase()
                          .includes(categoryContent.toLowerCase()) &&
                        chosenCategories.indexOf(item) == -1
                      ) {
                        return (
                          <div
                            key={index}
                            className="cursor-pointer p-2 rounded-lg hover:bg-darkblue hover:text-white hover:font-bold"
                            onClick={() => {
                              updateChosenCategories(item, true);
                            }}
                          >
                            {item}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 flex flex-wrap">
              {chosenCategories.map((item, index) => {
                return (
                  <div
                    className="bg-darkblue py-2 px-3 h-fit rounded-full text-white font-bold m-1 cursor-pointer"
                    key={index}
                    onClick={() => {
                      updateChosenCategories(item, false);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
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
                    setPrevLogo(null);
                    updateLogo(e.target.files[0]);
                    setShowCategoryList(false);
                  }}
                />
                <br />
                <label
                  className="text-lg hover:cursor-pointer group hover:text-white hover:bg-cyan"
                  for="logoUpload"
                >
                  {prevLogo != null ? (
                    <div className="flex place-content-center">
                      <img src={prevLogo} alt="" />
                    </div>
                  ) : logo == null ? (
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
            onFocus={() => {
              setShowCategoryList(false);
            }}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
