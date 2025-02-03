import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState("list");

    useEffect(() => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data);
                setTimeout(() => setLoading(false), 5000);
            })
            .catch((err) => console.error(err));
    }, []);

    const removeCard = (id) => {
        setPosts((prev) => {
            const updatedPosts = prev.filter(post => post.id !== id);
            return updatedPosts.length % 6 === 0 ? updatedPosts : [...updatedPosts, prev[updatedPosts.length]];
        });
    };

    return (
        <PostContext.Provider value={{ posts, loading, currentPage, setCurrentPage, removeCard, viewMode, setViewMode }}>
            {children}
        </PostContext.Provider>
    );
};
