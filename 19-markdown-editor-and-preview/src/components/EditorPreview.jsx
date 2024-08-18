import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const EditorPreview = () => {
    const [markdown, setMarkdown] = useState(' ');
    const textareaRef = useRef(null);

    useEffect(() => {
        const adjustHeight = () => {
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
            }
        }

        adjustHeight();

        window.addEventListener('resize', adjustHeight);
        return () => window.removeEventListener('resize', adjustHeight)
    }, [markdown])

    return (
        <section className='markdown'>
            <div className='editor'>
                <div className='input'>
                    <span className='sub-title'>Editor</span>
                    <textarea className='input-text' placeholder='write something here!' rows={1} ref={textareaRef} value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
                </div>
            </div>
            <article className='output'>
                <span className='sub-title'>Preview</span>
                <ReactMarkdown className='output-text' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
            </article>
        </section>
    )
}

export default EditorPreview