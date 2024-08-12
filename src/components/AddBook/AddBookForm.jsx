import { useState } from "react";
import Image from "./../common/Image";
import { postBook } from "../../api/api";
import { useNavigate } from "react-router-dom";

// let a = {
//   name: "Erased, Vol. 1 ",
//   description: "",
//   url: "https://m.media-amazon.com/images/I/31Xpmnj8gKL._SY445_SX342_.jpg",
//   author: "Kei Sanbe",
//   rating: 4,
//   price: 99,
// };

export default function AddBookForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
    author: "",
    rating: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleChange = ({ target: { value, name } }) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postBook(formData);
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[320px] h-[420px] mx-auto">
        <Image src={formData.url} />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 text-2xl my-8">
        <input
          className="text-3xl bg-white border-2 text-black py-2 px-3"
          placeholder="Enter Image URL"
          name="url"
          required
          value={formData.url}
          minLength={5}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 text-2xl my-8">
        <input
          className="text-3xl bg-white border-2 text-black py-2 px-3"
          placeholder="Enter Book Name"
          name="name"
          required
          value={formData.name}
          minLength={5}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 text-2xl my-8">
        <input
          className="text-3xl bg-white border-2 text-black py-2 px-3"
          placeholder="Author Name"
          name="author"
          value={formData.author}
          minLength={5}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 text-2xl my-8">
        <input
          className="text-3xl bg-white border-2 text-black py-2 px-3"
          placeholder="price"
          type="number"
          min={0}
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 text-2xl my-8">
        <input
          className="text-3xl bg-white border-2 text-black py-2 px-3 w-[320px]"
          placeholder="Rating 1-5"
          type="number"
          min={1}
          max={5}
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 text-2xl my-8">
        <textarea
          className="text-3xl bg-white border-2 text-black py-2 px-3 w-full min-h-72"
          placeholder="Write something...."
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="text-2xl bg-emerald-600 text-white py-2 px-3"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
