"use client";
import React from "react";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Link from "next/link";
import localFont from "next/font/local";
import Blogpagecards from "@/app/components/blogpagecards";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import SkeletonBlogPage from "./skeletonBlogPage";

// Fonts
const ProductSans4 = localFont({
  src: "../../../public/Fonts/Product Sans Regular.ttf",
});

type Props = {};

export default function Blog({}: Props) {
  const [loading, setLoading] = React.useState(true);
  const [blogdata, setBlogdata] = React.useState<any>([]);
  // const token = localStorage.getItem("token");
  const [token, setToken] = React.useState<string | null>("");

  React.useEffect(() => {
    setLoading(true);
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const ml = localStorage.getItem("token");
      setToken(ml);
    }
    dataBlogs();
  }, [!blogdata]);

  const handleLike = (blogId: number) => {
    const updatedBlogs = blogdata.map((blog: any) => {
      if (blog.id === blogId) {
        const likedByUser = blog.liked.find((like: any) => like.id === token);

        if (likedByUser) {
          if (likedByUser.liked) {
            return {
              ...blog,
              liked: blog.liked.filter((id: any) => id.id !== token),
            };
          } else {
            return {
              ...blog,
              liked: blog.liked.map((like: any) =>
                like.id === token ? { ...like, liked: true } : like
              ),
            };
          }
        } else {
          return {
            ...blog,
            liked: [...blog.liked, { id: token, liked: true }],
          };
        }
      }

      return blog;
    });

    const options: AxiosRequestConfig = {
      method: "PATCH",
      url: `https://2c57c2fe491dd2f3.mokky.dev/blogs`,
      headers: { "Content-Type": "application/json" },
      data: updatedBlogs,
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setBlogdata(response.data);
      })
      .catch(function (error: any) {
        setLoading(true);
      });
  };

  function dataBlogs() {
    setLoading(true);
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://2c57c2fe491dd2f3.mokky.dev/blogs`,
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setLoading(false);
        setBlogdata(response.data);
      })
      .catch(function (error: any) {
        dataBlogs();
        setLoading(true);
      });
  }

  return (
    <div className="blog-page-tsx pt-[86px] pb-12 md:pb-24 px-6 2xl:px-14">
      <div className="route-tab-blog pt-[10px] md:pt-3 lg:pt-5">
        {loading ? (
          <Typography
            placeholder={""}
            as="div"
            variant="h1"
            className="mb-4 h-4 max-w-40 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        ) : (
          <Breadcrumbs placeholder={""}>
            <Link href="/" className="opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <Link href="#">
              <span>Blog</span>
            </Link>
          </Breadcrumbs>
        )}
      </div>
      <div className="content">
        {loading ? (
          <>
            {[1, 2, 3, 4].map((c: any, lc: number) => (
              <SkeletonBlogPage key={lc} />
            ))}
          </>
        ) : (
          <>
            {blogdata.map((c: any, lc: number) => (
              <Blogpagecards data={c} key={lc} liek={handleLike} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
