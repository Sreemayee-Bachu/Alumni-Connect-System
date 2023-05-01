package com.sprint2.controller;
import java.util.*;
//branch2 change
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sprint2.entity.Users;
import com.sprint2.exceptions.ResourceNotFoundException;
import com.sprint2.repository.AlumniRepo;
import com.sprint2.repository.LoginRepo;
import com.sprint2.service.LoginService;

import io.swagger.annotations.ApiOperation;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginControl {
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private AlumniRepo alumniRepo;
	
	@Autowired
	private LoginRepo loginRepo;
	
	@GetMapping("/login/{username}/{password}")
	@ApiOperation(value="Login by username and password")
	public String loginByNamePassword(@PathVariable(value = "username") String username,@PathVariable(value = "password") String password) throws ResourceNotFoundException{
		String result= loginService.login(username, password);
		if(result!=null)
			return "Logged in as "+username;
		else
			return "Failed!!";
	}
	
	@PutMapping("/auth/{username}/{oldPassword}/{newPassword}")
	@ApiOperation("Change Password")
	public String changePassword(@PathVariable(value = "username") String username,@PathVariable(value = "oldPassword") String oldPassword,@PathVariable(value = "newPassword") String newPassword) throws ResourceNotFoundException{
		Integer userId = loginRepo.loginByNamePassword(username, oldPassword).getUser_id();
		Users user = loginRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("Sorry! No User found with this credentials."));
		String result=loginService.changePassword(username, oldPassword, newPassword);
		if(result!=null && result!="")
			return "Password changed";
		else
			return "Failed!!";
	}
}
