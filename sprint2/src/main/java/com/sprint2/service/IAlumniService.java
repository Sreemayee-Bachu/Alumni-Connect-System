package com.sprint2.service;

import java.util.List;
import java.util.Optional;

import com.sprint2.entity.Alumni;
import com.sprint2.exceptions.ResourceNotFoundException;

public interface IAlumniService {
	public Alumni createAlumniProfile(Alumni alumni);
	public List<Alumni> viewAlumni();
	public Alumni findAlumniByname(String aname);
	public Alumni findAlumniByStream(String stream);
	public List<Alumni> findAlumniByYOP(int yop) ;
	Optional<Alumni> findAlumniById(long id);
	Alumni updateProfile(Alumni alumni);
}
