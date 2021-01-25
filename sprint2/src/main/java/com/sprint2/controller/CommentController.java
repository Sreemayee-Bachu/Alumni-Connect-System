package com.sprint2.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprint2.entity.Comments;
import com.sprint2.entity.Posts;
import com.sprint2.exceptions.ResourceNotFoundException;
import com.sprint2.repository.CommentRepo;
import com.sprint2.service.CommentService;

import io.swagger.annotations.ApiOperation;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@Autowired
	private CommentRepo commentRepo;
	
	@PostMapping("/comment")
	@ApiOperation("Upload a comment")
	public Comments createComment(@RequestBody Comments comment) {
		return commentService.uploadComment(comment);
	}
	
	@GetMapping("/comment")
	@ApiOperation("View all comments")
	public List<Comments> viewAllComments(){
		return commentService.viewAllComments();
	}

	@GetMapping("/comment/{id}")
	@ApiOperation("View comment by id")
	public Comments searchByCommentID(@PathVariable(value="comment_id") long id) throws ResourceNotFoundException {
		Comments result = commentRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Sorry! No comment found with this id : "+id));
		Comments comment = commentService.searchByCommentID(id);
		return comment;
	}
	

	@DeleteMapping("/comment/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteComment(@PathVariable long id) throws ResourceNotFoundException{
        Comments comment = commentRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comment not exist with id :" + id));
       
        commentRepo.delete(comment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
