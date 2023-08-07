"use client";

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Post from '@/components/Post'

const NewMeow = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    meow: '',
    tag: '',
  });

  const createMeow = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/meow/new', {
        method: 'POST',
        body: JSON.stringify({
          meow: post.meow,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error(res.status);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Post 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createMeow}
    />
  )
}

export default NewMeow