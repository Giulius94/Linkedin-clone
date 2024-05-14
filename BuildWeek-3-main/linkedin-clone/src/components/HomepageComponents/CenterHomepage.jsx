import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getHomepagePost } from '../../redux/slice/HomepageSlice';
import PostHomepageCenter from './ComponentDinamici/PostHomepageCenter';




export default function CenterHomepage() {

    const homepagePost = useSelector(state => state.homepageUser.homepageArr)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHomepagePost());
        }, [dispatch]);

        console.log(homepagePost)

    

  return (
    <>
      <PostHomepageCenter post={homepagePost}/>
    </>
  )
}
