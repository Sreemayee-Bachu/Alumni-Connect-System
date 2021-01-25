package com.sprint2.service;
import java.util.Optional;
import java.sql.SQLException;
import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;

import com.sprint2.entity.Alumni;
import com.sprint2.entity.Users;
import com.sprint2.exceptions.ResourceNotFoundException;
import com.sprint2.repository.AlumniRepo;
import com.sprint2.repository.UserRepo;

@Service
public class AlumniService implements IAlumniService{
	
	@Autowired
	private AlumniRepo alumniRepo;
	
	@Override
	public Alumni createAlumniProfile(Alumni alumni) {
		return alumniRepo.save(alumni);
	}

	@Override
	public List<Alumni> viewAlumni() {	
		return alumniRepo.findAll();
	}


	@Override
	public Optional<Alumni> findAlumniById(long id){
		return alumniRepo.findById(id);
	}

	@Override
	public Alumni findAlumniByname(@PathVariable(value="name") String aname){
		return alumniRepo.findByUserName(aname);

	}

	@Override
	public Alumni findAlumniByStream(String stream) {
		return alumniRepo.findByStream(stream);
			
	}
	
	@Override
	public Alumni updateProfile(Alumni alumni) {
		return alumniRepo.save(alumni);
	}

	public List<Alumni> findAlumniByYOP(int yop) {
		List<Alumni> aa=alumniRepo.findByYOP(yop);
		return aa;
	}

}
