package com.sprint2.service;

import java.util.List; 

import com.sprint2.entity.Comments;

public interface ICommentService {
	public Comments uploadComment(Comments comment);
	public List<Comments> viewAllComments();
	public Comments searchByCommentID(long id);
}
