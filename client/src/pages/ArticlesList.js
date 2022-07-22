import React from 'react'
import Articles from '../components/Articles';

// Components
import articleContent from './article-content';

const ArticlesList = () => {
  return (
    <div>
      <h1 className='sm: text-4xl text-2xl font-bold my-6 text-grey-900'>
        Articles
      </h1>
      <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <Articles articles={articleContent} />
        </div>
      </div>
    </div>
  )
}

export default ArticlesList