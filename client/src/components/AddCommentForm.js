import React, { useState } from 'react'

const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');

    const handleComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`, {
            method: "POST",
            body: JSON.stringify({ username, text }),
            headers: {
                "Content-type": "application/json",
            },
        })
        const body = await result.JSON();
        setArticleInfo(body);
        setUsername('');
        setText('');
    }

    return (
        <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
            <h3
                className='text-xl font-bold mb-4 text-gray-900'>
                Add a comment
            </h3>
            <label
                className='block text-gray-700 text-sm font-bold mb-2'>
                Name:
            </label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='shadow apperancenone border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            <label
                className='block text-gray-700 text-sm font-bold mb-2'>
                Comment:
            </label>
            <textarea
                rows={4}
                cols={50}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='shadow apperancenone border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={handleComment}
            >
                Add Comment
            </button>
        </form>
    )
}

export default AddCommentForm