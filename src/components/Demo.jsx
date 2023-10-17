import React, {useEffect, useState} from 'react'
import {FiLink2} from 'react-icons/fi'
import {BiSearchAlt} from 'react-icons/bi'
import { useLazyGetSummaryQuery } from '../services/article'


function Demo() {

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const [allArticles, setAllArticles] = useState([])

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();


  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    )
    if(articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage)
    }
  }, []);


  const submit = async (e) => {
    e.preventDefault();
    const {data} = await getSummary({ articleUrl: article.url})

    if(data?.summary){
      const newArticle = {...article, summary: data.summary};

      const updatedArticalArr =[newArticle, ...allArticles];

      setArticle(newArticle);

      setAllArticles(updatedArticalArr)

      localStorage.setItem('articles', JSON.stringify(updatedArticalArr))
    }
  }



  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form action="" className='relative flex justify-center items-center' onSubmit={submit}>
          <FiLink2 className='absolute left-0 my-2 ml-3 w-5'/>
          <input type="url" 
          placeholder="Enter a URL"
          value={article.url}
          onChange={(e) => setArticle({ ...article, url: e.target.value

          })}
          required
          className='url_input peer'
          />
          <button
          type='submit'
          className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
          >
            <BiSearchAlt/>
          </button>
        </form>

      </div>

    </section>
  )
}

export default Demo