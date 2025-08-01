import React, {useState,useEffect, useCallback} from "react";
import Button from '../Button/Button';
import './Blog.css';

const Blog = () =>{
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [pageCounts , setPageCounts] = useState(0);
    const [activePageNumber,setActivePageNumber] = useState(1);

    const loadPosts = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        } finally {
          setLoading(false);
        }
    };

    useEffect(()=>{
        loadPosts();
    },[]);

    const calculatePageCount = () => {
        if(posts.length % 3 > 0){
            return parseInt(posts.length / 3 + 1);
        }
        return parseInt(posts.length / 3)
    };

    useEffect(()=>{
        setPageCounts(calculatePageCount());
    },[posts]);
    
    const handleClicksOnPages = useCallback((pageNumber) => {
        setActivePageNumber(pageNumber);
    },[]);

    return(
        <div className="Blog">
            {loading && <div>Loading</div>}
            {posts.length === 0 && <div>No Posts</div>}
            {posts.length > 0 && (
                 <ul>
                    {posts.slice(3 * (activePageNumber - 1), 3 * activePageNumber).map((post) => (
                        <li key={`post-${post.id}`} className="blogItem">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <ul className="Pagination">
                    {Array.from({ length: pageCounts }).map((_, index) => (
                    <li key={index} className={activePageNumber === index + 1 ? 'active' : ''}>
                        <Button handleClick={() => handleClicksOnPages(index + 1)} className='paginationBTN'>
                        {index + 1}
                        </Button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Blog