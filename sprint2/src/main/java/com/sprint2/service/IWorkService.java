package com.sprint2.service;

import java.util.List;
import java.util.Optional;

import com.sprint2.entity.Work;

public interface IWorkService {
	public Work addWork(Work work);
	public Work editWork(Work work);
	public List<Work> getAllWork();
	public Optional<Work> getWorkById(long id);
}
