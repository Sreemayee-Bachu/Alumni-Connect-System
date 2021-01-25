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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprint2.entity.Comments;
import com.sprint2.entity.Work;
import com.sprint2.exceptions.ResourceNotFoundException;
import com.sprint2.repository.WorkRepo;
import com.sprint2.service.WorkService;

import io.swagger.annotations.ApiOperation;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class WorkController {
	@Autowired
	private WorkService workService;
	
	@Autowired
	private WorkRepo workRepo;
	@PostMapping("/work")
	@ApiOperation("Add work Details")
	public Work addWork(@RequestBody Work work) {
		return workService.addWork(work);
	}
	
	@PutMapping("/work/{id}")
	@ApiOperation("Update Work Details")
	public ResponseEntity<Work> updateWork(@PathVariable long id,@RequestBody Work work) throws ResourceNotFoundException {
		Work work1=workRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Sorry! No work found with this id : "+id));
		work1.setCompany_name(work.getCompany_name());
		work1.setWork_location(work.getWork_location());
		work1.setStart_date(work.getStart_date());
		work1.setEnd_date(work.getEnd_date());
		work1.setCurrently_working(work.getCurrently_working());
		Work work2=workRepo.save(work1);
		return ResponseEntity.ok(work2);
	}
	
	
	@GetMapping("/work")
	@ApiOperation("View All Work")
	public List<Work> getAllWork(){
		return workService.getAllWork();
	}
	
	@GetMapping("/work/{id}")
	@ApiOperation("View Work By ID")
	public  ResponseEntity<Work> getWorkById(@PathVariable long id) throws ResourceNotFoundException{
		Work work=workRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Sorry! No Work found with this id : "+id));
		return ResponseEntity.ok().body(work);
	}
	@DeleteMapping("/work/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteWork(@PathVariable long id) throws ResourceNotFoundException{
        Work work = workRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Work not exist with id :" + id));
       
        workRepo.delete(work);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
