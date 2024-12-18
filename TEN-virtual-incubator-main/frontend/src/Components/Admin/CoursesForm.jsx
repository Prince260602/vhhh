// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// function CourseForm() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: "",
//     imgSrc: null, 
//   });


//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === "file") {
      
//       setFormData({ ...formData, imgSrc: files[0] }); 
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { title, description, price, category, imgSrc } = formData;
//     const data = new FormData();
//     data.append("title", title);
//     data.append("description", description);
//     data.append("price", price);
//     data.append("category", category);
//     if (imgSrc) {
//       data.append("imgSrc", imgSrc); 
//     }

//     try {
//       const response = await axios.post("https://ten-virtual-incubator.onrender.com/api/users/course", data, {
//         headers: {
//           "Content-Type": "multipart/form-data", 
//         },
//       });
//       if (response.status === 201) {
//         toast.success("Course added successfully!");
//         window.location.reload();
//       } else {
//         toast.error("Failed to add course.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }

//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-md mx-auto border-2 shadow-xl px-4 py-4 rounded-md"
//       >
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-md font-medium text-gray-700">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-md font-medium text-gray-700">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price" className="block text-md font-medium text-gray-700">
//             Price:
//           </label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="imgSrc" className="block text-md font-medium text-gray-700">
//             Upload Image:
//           </label>
//           <input
//             type="file"
//             id="imgSrc"
//             name="imgSrc"
//             onChange={handleChange}
//             required
//             className="block w-full border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="category" className="block text-md font-medium text-gray-700">
//             Category:
//           </label>
//           <input
//             type="text"
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CourseForm;















import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function CourseForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imgSrc: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("https://ten-official-1.onrender.com/api/users/course", formData);
      const response = await axios.post("https://ten-virtual-incubator.onrender.com/api/users/course", formData);
      if (response.status === 201) {
        toast.success("Course added successfully!");
        window.location.reload();
      } else {
        toast.error("Failed to add course.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto border-2 shadow-xl px-4 py-4 rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-md font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-md font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-md font-medium text-gray-700"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imgSrc"
            className="block text-md font-medium text-gray-700"
          >
            Image URL:
          </label>
          <input
            type="text"
            id="imgSrc"
            name="imgSrc"
            value={formData.imgSrc}
            onChange={handleChange}
            required
            className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-md font-medium text-gray-700"
          >
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CourseForm;
