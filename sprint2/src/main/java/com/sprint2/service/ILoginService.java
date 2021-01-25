package com.sprint2.service;

import com.sprint2.entity.Users;
import com.sprint2.exceptions.ResourceNotFoundException;

public interface ILoginService {
	public String login(String username,String password);
	public String changePassword(String username,String oldPassword,String newPassword);
}
