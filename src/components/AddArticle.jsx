import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Helmet } from "react-helmet";
import Select from "react-select";

const AddArticle = () => {
  const options = [
    { value: "Politics", label: "Politics" },
    { value: "Sports", label: "Sports" },
    { value: "Technology", label: "Technology" },
    { value: "Health", label: "Health" },
    { value: "Entertainment", label: "Entertainment" },
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  const { user } = useContext(AuthContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  };

  
  return (
    <div className="w-11/12 my-10 mx-auto">
      <Helmet>
        <title>Dailypress || Add Article</title>
      </Helmet>
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-10 md:mt-15 md:mb-15 font-black text-blue-600 text-center poppins">
        Add Article
      </h2>
      <div className="inter">
        <form
          onSubmit={handleFormSubmit}
          className="border p-6 border-gray-300 rounded-md"
          action=""
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="font-bold">Article Title</label>
              <input
                required
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter article title"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="font-bold">Article Image</label>
              <input
                required
                type="file"
                name="image"
                className="input w-full"
                placeholder="Enter article image"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="font-bold">Article Tags</label>

              <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                placeholder="Select categories..."
              />

              <p className="mt-2 text-sm text-gray-600">
                Tags : {selectedOptions.map((opt) => opt.label).join(", ")}
              </p>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="font-bold"> User Email</label>
              <input
                type="text"
                name="email"
                className="input w-full"
                value={user.email}
              />
            </fieldset>
          </div>

          <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="font-bold">Article Description</label>
            <textarea
              required
              type="text"
              name="description"
              className="input pt-2 py-25 w-full"
              placeholder="Enter article description"
            />
          </fieldset>

          <input
            className="btn btn-primary inter w-full"
            type="submit"
            value="Submit Article"
          />
        </form>
        {/* <Link className='flex justify-center my-8' to="/">
            <button className='btn btn-secondary '>Back to Home</button>
            </Link> */}
      </div>
    </div>
  );
};

export default AddArticle;
