package com.sprint2.controller;

import java.util.List;

import org.slf4j.Logger; 
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprint2.entity.Users;
import com.sprint2.repository.UserRepo;
import com.sprint2.service.UserService;

import io.swagger.annotations.ApiOperation;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired 
	private UserService userService;
	
	@Autowired
	private UserRepo userRepo;
	//Create user profile
	@PostMapping("/user")
	@ApiOperation("Create an user profile")
	public Users createProfile(@RequestBody Users u) {
		return userService.createProfileService(u);
		
	}
	
	//View all user profiles
	@GetMapping("/users")
	@ApiOperation("View all users")
	public List<Users> viewUsers(){
		return userService.viewUsers();
	}
	
	@GetMapping("/users/{username}")
	@ApiOperation("View users by name")
	public Users getUserByName(@PathVariable(value="username") String username) {
		return userRepo.findByUserName(username);
	}
	
	
}
