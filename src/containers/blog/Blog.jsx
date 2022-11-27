import React from 'react'
import "./blog.css"
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import {Article} from '../../components'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening. We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} title="title" date="Sep 26, 2021"/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} title="title" date="Sep 26, 2021"/>
        <Article imgUrl={blog03} title="title" date="Sep 26, 2021"/>
        <Article imgUrl={blog04} title="title" date="Sep 26, 2021"/>
        <Article imgUrl={blog05} title="title" date="Sep 26, 2021"/>
        </div>
      </div>
    </div>
  )
}

export default Blog