"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Upload, PlusCircle } from "lucide-react";
import { useCreateCourseMutation } from "@/redux/features/courseSlice/courseSlice";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const categories = ["Web Development", "Programming", "Design", "Data Science"];

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const [createCourse] = useCreateCourseMutation();

  //  Access current user from Redux
  const currentUser = useSelector((state) => state.user.user);

  console.log(currentUser);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category || !price) {
      alert("Please fill all required fields.");
      return;
    }

    if (!currentUser?._id) {
      alert("User not authenticated. Please log in.");
      return;
    }

    setLoading(true);

    let imageUrl = null;

    if (thumbnail) {
      const imageData = new FormData();
      imageData.append("image", thumbnail);

      try {
        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: imageData,
        });

        const data = await response.json();

        if (data.success) {
          imageUrl = data.data.url;
        } else {
          alert("Image upload failed. Please try again.");
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error("Image upload error:", error);
        alert("Image upload failed. Try again.");
        setLoading(false);
        return;
      }
    }

    // Include the userId (objectId) in the courseData
    const courseData = {
      title,
      description,
      category,
      price,
      thumbnail: imageUrl,
      teacher: currentUser._id,
    };

    try {
      await createCourse(courseData).unwrap();
      alert("Course added successfully!");
      setTitle("");
      setDescription("");
      setCategory("");
      setPrice('');
      setThumbnail(null);
      setPreview(null);
    } catch (err) {
      console.error("Course creation error:", err);
      alert("Failed to add course. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Add New Course
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Title */}
          <div>
            <label className="text-lg font-semibold text-gray-800">
              Course Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
              placeholder="Enter course title..."
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-lg font-semibold text-gray-800">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48BEF7] h-32"
              placeholder="Enter course description..."
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="text-lg font-semibold text-gray-800">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="text-lg font-semibold text-gray-800">
              Price ($)
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48BEF7]"
              placeholder="Enter course price..."
              required
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="text-lg font-semibold text-gray-800">
              Course Thumbnail
            </label>
            <div className="mt-2 flex items-center gap-4">
              {preview ? (
                <Image
                  src={preview}
                  alt="Thumbnail Preview"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg">
                  <Upload className="text-gray-500" />
                </div>
              )}
              <label className="cursor-pointer px-6 py-2 bg-[#48BEF7] text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white text-lg rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            <PlusCircle className="inline-block mr-2" />
            {loading ? "Uploading..." : "Add Course"}
          </button>
        </form>
      </div>
    </div>
  );
}
