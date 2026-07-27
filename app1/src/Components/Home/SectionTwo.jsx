import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import { PostsData } from "../Data/Data";

export default function SectionTwo() {
  const [posts, setPosts] = useState(PostsData);

  const selectedPosts = posts.posts.filter((post) =>
    [4, 5, 6].includes(post.id),
  );

  return (
    <>
      <section className="bg-[#0a0a0a] relative overflow-hidden min-h-screen">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative containerr">
          <div className="flex flex-col md:flex-row justify-between item mb-12 gap-4">
            <div>
              <span className="label">
                <span className="relative ms-2 flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="mainColor mr-2">مميز</span>
              </span>
              <h2 className="sectionTitle">مقالات مختارة</h2>
              <p className="sectionSubtitle">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link
              to="/blog"
              className="bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 px-5 py-2.5 group font-medium"
            >
              عرض الكل{" "}
              <i className="fa-solid fa-angle-right group-hover:-translate-x-1 transition-transform rotate-180"></i>
            </Link>
          </div>
          <div className="space-y-8">
            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link to={`/blog/${posts.posts[0].slug}`} className="block">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-full md:h-100 overflow-hidden ">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src={posts.posts[0].image}
                      alt={posts.posts[0].title}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                        <i className="fa-solid fa-star"></i> مميز
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        {posts.posts[0].category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <i className="fa-regular fa-clock"></i>{" "}
                        {posts.posts[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-[24px] md:text-[30px] font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                      {posts.posts[0].title}
                    </h2>
                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                      {posts.posts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            src={posts.posts[0].author.avatar}
                            alt={posts.posts[0].author.name}
                          />
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {posts.posts[0].author.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {posts.posts[0].date}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال{" "}
                        <i className="fa-solid fa-arrow-right-long rotate-180"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link to={`/blog/${posts.posts[1].slug}`} className="block">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-full md:h-100 overflow-hidden ">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src={posts.posts[1].image}
                      alt={posts.posts[1].title}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                        <i className="fa-solid fa-star"></i> مميز
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        {posts.posts[1].category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <i className="fa-regular fa-clock"></i>{" "}
                        {posts.posts[1].readTime}
                      </span>
                    </div>
                    <h2 className="text-[24px] md:text-[30px] font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                      {posts.posts[1].title}
                    </h2>
                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                      {posts.posts[1].excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            src={posts.posts[1].author.avatar}
                            alt={posts.posts[1].author.name}
                          />
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {posts.posts[1].author.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {posts.posts[1].date}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال{" "}
                        <i className="fa-solid fa-arrow-right-long rotate-180"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
              <Link to={`/blog/${posts.posts[2].slug}`} className="block">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-full md:h-100 overflow-hidden ">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src={posts.posts[2].image}
                      alt={posts.posts[2].title}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                        <i className="fa-solid fa-star"></i> مميز
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        {posts.posts[2].category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <i className="fa-regular fa-clock"></i>{" "}
                        {posts.posts[2].readTime}
                      </span>
                    </div>
                    <h2 className="text-[24px] md:text-[30px] font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                      {posts.posts[2].title}
                    </h2>
                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                      {posts.posts[2].excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            src={posts.posts[2].author.avatar}
                            alt={posts.posts[2].author.name}
                          />
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {posts.posts[2].author.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {posts.posts[2].date}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال{" "}
                        <i className="fa-solid fa-arrow-right-long rotate-180"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <SectionThree categories={posts.categories} />
      <SectionFour posts={selectedPosts} />
    </>
  );
}
