package com.sprint2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.sprint2.entity.Users;
import com.sprint2.exceptions.ResourceNotFoundException;
import com.sprint2.repository.LoginRepo;
import com.sprint2.repository.UserRepo;

@Service
public class LoginService implements ILoginService{
	
	@Autowired
	private LoginRepo loginRepo;
	
	@Override
	public String login(String username,String password){
		String str=null;
		Users user=loginRepo.loginByNamePassword(username, password);
		if(user!=null)
			return "Done";
		else
			return str;
	}

	public String changePassword(String username,String oldPassword,String newPassword){
		String str=null;
		int i=loginRepo.changePassword( username, oldPassword, newPassword);
		if(i!=0)
			return "Done";
		else
			return str;
	}

	
}
