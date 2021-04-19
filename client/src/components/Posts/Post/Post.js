import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Post = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return(
        <h1>POST</h1>
    );
}

export default Post;