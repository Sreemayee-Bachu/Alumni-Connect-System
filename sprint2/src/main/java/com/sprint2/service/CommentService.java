package com.sprint2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.sprint2.entity.Comments;
import com.sprint2.entity.Posts;
import com.sprint2.repository.CommentRepo;
import com.sprint2.repository.PostRepo;

@Service
public class CommentService implements ICommentService{
	
	@Autowired
	private CommentRepo commentRepo;
	
	@Override
	public Comments uploadComment(Comments comment) {
		return commentRepo.save(comment);
	}

	@Override
	public List<Comments> viewAllComments() {
		return commentRepo.findAll();
	}

	@Override
	public Comments searchByCommentID(long id) {
		return commentRepo.findByCommentID(id);
	}

}
