package com.sprint2.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sprint2.entity.Alumni;
import com.sprint2.entity.Posts;
import com.sprint2.repository.AlumniRepo;
import com.sprint2.repository.PostRepo;

@Service
public class PostService implements IPostService{
	
	@Autowired
	private PostRepo postRepo;
	
	@Autowired
	private AlumniRepo ar;
	
	@Override
	public Posts uploadPost(Posts posts) {
		return postRepo.save(posts);
	}

	public List<Posts> viewAllPosts() {
		return postRepo.findAll();
	}

	@Override
	public Posts searchByPostID(long pid) {
		return postRepo.findByPostID(pid);
	}

}
