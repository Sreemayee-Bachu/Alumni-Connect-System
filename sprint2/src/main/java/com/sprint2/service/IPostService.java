package com.sprint2.service;

import java.util.List;

import com.sprint2.entity.Posts;

public interface IPostService {
	public Posts uploadPost(Posts posts);
	public List<Posts> viewAllPosts();
	public Posts searchByPostID(long pid);
}
