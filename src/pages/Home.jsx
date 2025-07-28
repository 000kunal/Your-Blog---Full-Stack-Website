import React,{useState,useEffect} from 'react'
import service from '../Appwrite/config'
import { Container,PostCard } from '../Components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'
import authService from '../Appwrite/auth'

function Home() {
  const [posts,setPosts]= useState([])

const authstatus = useSelector((state) => state.auth.status)
  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        // Get current user using service
        const user = await authService.getCurrentUser();

        // Get posts filtered by userId
        const response = await service.getPosts([
          Query.equal("status", "active"),
          Query.equal("userId", user.$id),
        ]);

        if (response) {
          setPosts(response.documents);
        }
      } catch (error) {
        console.error("Error fetching user posts", error);
      }
    };

    if (authstatus) {
      fetchUserPosts();
    }
  }, [authstatus]);

    if (!authstatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold bg-violet-300 text-gray-800 p-4 shadow">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else if(authstatus && posts.length!=0)
  return (
    <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
    </div>
  )
  else{
            return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                               No Posts to display
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
  }
}

export default Home