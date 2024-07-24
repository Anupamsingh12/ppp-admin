import UilFile from '@iconscout/react-unicons/icons/uil-file-alt';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart-sign';
import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ item, theme }) {
  const { content, title, url, author, link, name, publishedAt } = item;

  return (
    <div className="group p-6 mb-0 bg-white dark:bg-white10 rounded-10 shadow-regular dark:shadow-none flex flex-col">
      <div className="relative after:absolute after:h-0 after:w-full ltr:after:left-0 rtl:after:right-0 after:top-0 after:bg-[#0a0a0a15] after:rounded-10 after:transition-all after:duration-300 group-hover:after:h-full">
        {url && <img className="w-full h-auto rounded-10" style={{ maxHeight: '50%' }} src={url} alt="image" />}
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
        {theme === 'style-1' ? (
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-light dark:text-white60 text-15">{publishedAt}</span>
          </div>
        ) : theme === 'style-2' ? (
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-light dark:text-white60 text-15">{name}</span>
            <span className="text-light dark:text-white60 text-15">{publishedAt}</span>
          </div>
        ) : theme === 'style-3' ? (
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-light dark:text-white60 text-15">{publishedAt}</span>
            <span className="relative text-light dark:text-white60 text-15 before:absolute before:h-1 before:w-1 before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-light before:rounded-full">
              {name}
            </span>
            <span className="relative text-light dark:text-white60 text-15 before:absolute before:h-1 before:w-1 before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-light dark:before:bg-white10 before:rounded-full">
              6 mins read
            </span>
          </div>
        ) : null}
        <h2 className="mt-4 mb-3 text-xl font-semibold overflow-hidden text-ellipsis">
          <Link to={link} className="text-dark hover:text-primary dark:text-white87 dark:hover:text-primary">
            {title}
          </Link>
        </h2>
        <div className="mt-4 mb-3 text-sm font-semibold overflow-hidden text-ellipsis">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-4">
            <img className="rounded-full max-w-[32px]" src={require('../../static/img/chat-author/t1.jpg')} alt="" />
            <span className="text-light dark:text-white60 text-15">{author || 'Unknown'}</span>
          </div>
          <ul className="flex items-center -m-2">
            <li className="m-2">
              <span className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-13">
                <UilHeart className="w-3 h-3 text-light dark:text-white60" />
                <span className="text-light dark:text-white60 text-13">70</span>
              </span>
            </li>
            <li className="m-2">
              <span className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-13">
                <UilFile className="w-3 h-3 text-light dark:text-white60" />
                <span className="text-light dark:text-white60 text-13">120</span>
              </span>
            </li>
          </ul>
        </div>
      </figcaption>
    </div>
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
