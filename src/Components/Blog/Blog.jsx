import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PostsData } from "../Data/Data";

export default function Blog() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "الكل",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = [
    "الكل",
    ...PostsData.categories.map((cat) => cat.name),
  ];

  const filteredPosts = PostsData.posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "الكل" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const [viewMode, setViewMode] = useState("grid");

  return (
    <>
      <section className="bg-[#0a0a0a]">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="relative containerr flex flex-col items-center justify-center text-center">
            <span className="label inline-flex items-center gap-2 mb-6">
              <i className="fa-solid fa-book mr-2 mainColor"></i>
              <span className="mainColor">مدونتنا</span>
            </span>
            <h1 className="sectionTitle">استكشف مقالاتنا</h1>
            <p className="sectionSubtitle">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>

        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-[100%] md:w-1/4">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#161616] focus:outline-none focus:border-2 focus:border-[#FF6900] rounded-2xl w-full px-5 py-3 pr-12"
                />
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white border-transparent"
                      : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/30"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض <span className="font-bold">{filteredPosts.length}</span>{" "}
              مقالات
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                >
                  <i className="fa-solid fa-table-cells-large"></i>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-neutral-500">
              <div className="text-5xl">😛</div>
              <p className="font-bold text-white text-3xl mt-2">
                لا توجد مقالات
              </p>
              <p className="mt-2">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("الكل");
                  setSearchQuery("");
                }}
                className="cursor-pointer btn py-4 px-7 mt-5"
              >
                <i className="fa-solid fa-arrows-rotate"></i>
                <span className="mr-2">اعاده تعيين الفلاتر</span>
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "flex flex-col gap-6"
              }
            >
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`group hover:-translate-y-1 transition duration-300 card overflow-hidden ${viewMode === "list" ? "flex flex-col md:flex-row" : ""
                    }`}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className={
                      viewMode === "list"
                        ? "flex flex-col md:flex-row w-full"
                        : "block"
                    }
                  >
                    <div
                      className={`relative overflow-hidden ${viewMode === "list" ? "md:w-2/5 h-52 md:h-auto" : "h-52"}`}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-6 flex flex-col ${viewMode === "list" ? "md:w-3/5 justify-center" : ""}`}
                    >
                      <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-clock"></i> {post.readTime}
                        </span>
                        <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                        <span>{post.date}</span>
                      </div>
                      <h3
                        className={`font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight ${viewMode === "list" ? "text-2xl" : "text-xl"
                          }`}
                      >
                        {post.title}
                      </h3>
                      <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#262626] mt-auto">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                          />
                          <div>
                            <p className="text-sm font-medium text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {post.author.role}
                            </p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                          <i className="fa-solid fa-angle-right w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
