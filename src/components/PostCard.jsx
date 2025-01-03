import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
                                                        // featuredImage is a id for image
function PostCard({$id, title, featuredImage}){         //$id is just a syntex for appwrite
    
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title} className='rounded-xl'/>
                </div>
                <h2 className="text-xl fond-bold">{title}</h2>  
            </div>
        </Link>
    )
}

export default PostCard
