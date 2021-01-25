package com.sprint2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.sprint2.entity.Work;
import com.sprint2.repository.WorkRepo;

@Service
public class WorkService implements IWorkService{
	
	@Autowired
	private WorkRepo workRepo;
	
	@Override
	public Work addWork(Work work) {
		return workRepo.save(work);
	}

	@Override
	public Work editWork(Work work) {
		return workRepo.save(work);
	}

	@Override
	public List<Work> getAllWork() {
		List<Work> work=workRepo.findAll();
		return work;
	}

	@Override
	public Optional<Work> getWorkById(long id) {
		return workRepo.findById(id);
	}

}
