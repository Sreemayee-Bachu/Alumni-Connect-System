package com.sprint2.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.sprint2.entity.Posts;
import com.sprint2.exceptions.ResourceNotFoundException;
import com.sprint2.repository.PostRepo;
import com.sprint2.service.PostService;

import io.swagger.annotations.ApiOperation;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PostController {
	@Autowired
	private PostService postService;
	
	@Autowired 
	private PostRepo postRepo;
	
	@PostMapping("/posts")
	@ApiOperation("Upload Post")
	public Posts uploadPost(@RequestBody Posts p) {
		return postService.uploadPost(p);
	}
	
	@GetMapping("/posts")
	@ApiOperation("View all posts")
	public List<Posts> viewAllPosts(){
		return postService.viewAllPosts();
	}
	
	@GetMapping("/posts/{id}")
	@ApiOperation("View post by Id")
	public Posts searchPostById(@PathVariable long id) {
		return postService.searchByPostID(id);	
	}
	

	@DeleteMapping("/posts/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePost(@PathVariable long id) throws ResourceNotFoundException{
        Posts post = postRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post not exist with id :" + id));
       
        postRepo.delete(post);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
