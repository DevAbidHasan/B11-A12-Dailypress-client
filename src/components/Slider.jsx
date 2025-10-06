import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const Slider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        const res = await fetch(
          "https://b11-a12-dailypress-server.vercel.app/topArticles"
        );
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to load top articles:", error);
      }
    };
    fetchTopArticles();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-10">
      <h2 className="text-3xl lg:text-4xl font-black text-center text-blue-600 mb-12">
        Trending Articles
      </h2>

      <div className="max-w-6xl mx-auto px-2">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <Link to={`/article/${article._id}`}>
                <div className="relative w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={
                      article.image || "https://via.placeholder.com/1200x600"
                    }
                    alt={article.title}
                    className="w-full h-full object-cover brightness-90 transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {article.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-blue-600/70 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-snug drop-shadow-lg">
                      {article.title}
                    </h2>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-gray-200 text-sm">
                      <div className="flex items-center gap-2">
                        <FaEye className="text-blue-400" />
                        <span>{Number(article.view) || 0} views</span>
                      </div>
                      <span>•</span>
                      <span>{article.publisher}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
