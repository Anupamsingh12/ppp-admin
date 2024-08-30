import UilFile from '@iconscout/react-unicons/icons/uil-file-alt';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart-sign';
import { UilShareAlt } from '@iconscout/react-unicons';
import { UilWhatsapp } from '@iconscout/react-unicons';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const { getRelativeTime } = require('../../utility/services/headlines');

function BlogCard({ item, theme }) {
  const { content, title, url, author, link, name, publishedAt, category } = item;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={url} />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="group p-6 mb-0 bg-white dark:bg-white10 rounded-10 shadow-regular dark:shadow-none flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full max-w-[32px]" src={require('../../static/img/chat-author/t1.jpg')} alt="" />
            <span className="text-light dark:text-white60 text-15">{author || 'Unknown'}</span>
          </div>
          <span>{getRelativeTime(new Date(publishedAt))}</span>
        </div>

        <div className="relative after:absolute after:h-0 after:w-full ltr:after:left-0 rtl:after:right-0 after:top-0 after:bg-[#0a0a0a15] after:rounded-10 after:transition-all after:duration-300 group-hover:after:h-full">
          {url && <img className="w-full h-auto rounded-10" style={{ maxHeight: '400px' }} src={url} alt="image" />}
          {!url && (
            <img
              className="w-full h-auto rounded-10"
              style={{ maxHeight: '300px', maxWidth: '400px' }}
              src={require('../../static/img/chat-author/t1.jpg')}
              alt="image"
            />
          )}
        </div>
        <figcaption className="flex flex-col mt-4">
          <div className="flex justify-between items-center">
            {/* <ul className="flex items-between -m-2"> */}
            <div className="m-2">
              <span className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-13">
                <span className="text-light dark:text-white60 text-15 strong">
                  <strong>Category : </strong>
                  {category}
                </span>
              </span>
            </div>
            {/* <div className="m-2">
            <span className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-13">
            <UilHeart className="w-3 h-3 text-light dark:text-white60" />
            <span className="text-light dark:text-white60 text-15">70</span>
            </span>
            </div>
            <div className="m-2">
            <span className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-13">
            <UilFile className="w-3 h-3 text-light dark:text-white60" />
            <span className="text-light dark:text-white60 text-15">120</span>
            </span>
            </div> */}
            <div className="relative m-2">
              <button
                className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-15"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <UilShareAlt className="w-4 h-4 text-light dark:text-white60" />
                <span className="text-light dark:text-white60 text-15">Share</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-white10 rounded shadow-lg z-10">
                  <ul>
                    <li
                      className="flex items-center gap-x-2 px-4 py-2 text-sm text-light dark:text-white60 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.origin + link);
                        alert('Link copied to clipboard!');
                        setDropdownOpen(false);
                      }}
                    >
                      <UilShareAlt className="w-4 h-4 text-light dark:text-white60" />
                      Copy Link
                    </li>
                    <li
                      className="flex items-center gap-x-2 px-4 py-2 text-sm text-light dark:text-white60 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => {
                        const url = `https://wa.me/?text=${encodeURIComponent(window.location.origin + link)}`;
                        window.open(url, '_blank');
                        setDropdownOpen(false);
                      }}
                    >
                      <UilWhatsapp className="w-4 h-4 text-green-500" />
                      Share on WhatsApp
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* </ul> */}
          </div>
          <h4 className="mt-4 mb-3 text-xl font-semibold overflow-hidden text-ellipsis">
            <Link to={link} className="text-dark hover:text-primary dark:text-white87 dark:hover:text-primary">
              {title}
            </Link>
          </h4>
          <div className="mt-4 mb-3 text-sm font-semibold overflow-hidden text-ellipsis">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </figcaption>
      </div>
    </>
  );
}

BlogCard.propTypes = {
  item: propTypes.object,
  theme: propTypes.string,
};

BlogCard.defaultProps = {
  item: {
    id: 1,
    title: 'Technology Change the World',
    content: 'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
    category: 'Web Development',
    img: '1.png',
    author: 'Machel Bold',
    authorImg: '1.png',
    postDate: '15 March 2021',
    favouriteBy: '15k',
    viewedBy: '20k',
  },
  theme: 'style-1',
};

export default BlogCard;
