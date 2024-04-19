import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import healthyLivingImg from '../../assets/healthy-living.jpg'; // Replace with your image filename
import exerciseImg from '../../assets/exercise.jpg'; // Replace with your image filename
import workoutImg from '../../assets/diabetis.jpg'; // Replace with your image filename


const dummyBlogs = [
    {
      title: "10 Tips for Healthy Living",
      author: "John Doe",
      date: "April 1, 2024",
      content: "Living a healthy lifestyle is crucial for overall well-being. In this blog post, we'll discuss ten essential tips for maintaining a healthy lifestyle, covering aspects such as nutrition, exercise, sleep, and stress management.",
      imageUrl: healthyLivingImg
    },
    {
      title: "The Importance of Regular Exercise",
      author: "Jane Smith",
      date: "April 2, 2024",
      content: "Regular exercise plays a vital role in maintaining physical and mental health. This blog post explores the numerous benefits of exercise, including improved cardiovascular health, enhanced mood, and better sleep quality.",
      imageUrl: exerciseImg
    },
    {
      title: "Diabetes Management",
      author: "Bob Johnson",
      date: "April 3, 2024",
      content: "Managing diabetes requires careful attention to diet, exercise, medication, and monitoring blood sugar levels. In this post, we'll discuss effective strategies for managing diabetes and minimizing its impact on daily life.",
      imageUrl: workoutImg
  
    },
    {
        
        title: "Nephrotic Syndrome",
        author: "Jane Smith",
        date: "April 2, 2024",
        content: "Nephrotic syndrome is a kidney disorder characterized by the presence of too much protein in the urine. This blog post provides an overview of nephrotic syndrome, including its causes, symptoms, diagnosis, and treatment options.",
        imageUrl: workoutImg
  
    },
    {
      title: "Medical Philosophies",
      author: "Jane Smith",
      date: "April 2, 2024",
      content: "Medical philosophies encompass a wide range of beliefs and principles that guide healthcare practices. From traditional approaches to modern evidence-based medicine, this blog post explores different medical philosophies and their implications for patient care.",
      imageUrl: workoutImg
    },
    {
  
      title: "Anatomy",
      author: "Jane Smith",
      date: "April 2, 2024",
      content: "Anatomy is the study of the structure and organization of living organisms. This blog post delves into the fascinating world of human anatomy, covering topics such as organ systems, tissues, and cellular structures.",
      imageUrl: workoutImg
    }
  ];
  
  // Add more dummy blog data as needed


const Blogs = () => {
    const [isVisible, setIsVisible] = useState([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target.id);
          setIsVisible((prevVisible) => [...prevVisible, ...visibleEntries]);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5 // Adjust this threshold as needed
        }
      );
  
      dummyBlogs.forEach((_, index) => {
        const el = document.getElementById(`blog-${index}`);
        if (el) {
          observer.observe(el);
        }
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return (
      <div className="bg-blue-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-mono text-center mb-8">MedPlus Community</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyBlogs.map((blog, index) => (
              <motion.div
                key={index}
                id={`blog-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.includes(`blog-${index}`) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    className="w-20 h-20 rounded-lg mr-4 object-cover"
                    src={blog.imageUrl}
                    alt={blog.title} // Add meaningful alt text
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                    <p className="text-slate-950 font-bold font-mono mb-2">Author: {blog.author}</p>
                    <p className="text-slate-950 mb-2">Date: {blog.date}</p>
                  </div>
                </div>
                <p className="text-slate-950 font-mono mb-4">{blog.content}</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              View More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogs;