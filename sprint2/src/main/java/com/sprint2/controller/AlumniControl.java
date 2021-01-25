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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sprint2.entity.Alumni;
import com.sprint2.exceptions.ResourceNotFoundException;
import com.sprint2.repository.AlumniRepo;
import com.sprint2.service.AlumniService;

import io.swagger.annotations.ApiOperation;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AlumniControl {
	@Autowired
	private AlumniService alumniService;
	
	@Autowired
	private AlumniRepo alumniRepo;
	
	@PostMapping("/alumni")
	@ApiOperation("Add Alumni Details")
	public Alumni createAlumniProfile(@RequestBody Alumni alumni) {
		return  alumniService.createAlumniProfile(alumni);
	}

	@GetMapping("/alumni")
	@ApiOperation("View all alumni details")
	public List<Alumni> viewAlumni(){
		return alumniService.viewAlumni();
	}
	
	
	@GetMapping("/alumni/{id}")
	@ApiOperation("Find alumni details by ID")
	public  ResponseEntity<Alumni> getAlumniById(@PathVariable long id) throws ResourceNotFoundException{
		Alumni alumni=alumniService.findAlumniById(id).orElseThrow(()-> new ResourceNotFoundException("Sorry! No Alumni found with this id : "+id));
		return ResponseEntity.ok().body(alumni);
	}
	
	@RequestMapping(value = "/alumni/{name}", method = RequestMethod.GET, produces = "application/json")
	@ApiOperation("Find alumni details by name")
	public Alumni getAlumniByName(@PathVariable(value="name") String aname){
		Alumni aa = null;
		try {
			aa = alumniService.findAlumniByname(aname);
		}catch (NullPointerException e) {
			System.out.println(e.getMessage());
		}
		return aa;
	}
	
	@GetMapping("/alumni/{stream}")
	@ApiOperation("Find alumni details by stream")
	public Alumni getAlumniByStream(@PathVariable(value="stream") String stream) {
		Alumni aa = null;
		try {
			aa = alumniService.findAlumniByStream(stream);
		} catch (NullPointerException e) {
			System.out.println(e.getMessage());
		}
		return aa;
	}
	
	@PutMapping("/alumni/{id}")
	@ApiOperation("Update Alumni Details")
	public ResponseEntity<Alumni> updateProfile(@PathVariable long id, @RequestBody Alumni alumni) throws ResourceNotFoundException{
		Alumni alumni1 = alumniRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Sorry! No Alumni found"));
		alumni1.setAlumniname(alumni.getAlumniname());
		alumni1.setStream(alumni.getStream());
		alumni1.setEmail(alumni.getEmail());
		alumni1.setPhone(alumni.getPhone());
		alumni.setYearOfPassing(alumni.getYearOfPassing());
		Alumni updateAlumni = alumniRepo.save(alumni1);
		return ResponseEntity.ok(updateAlumni);
		
	}
	
	@GetMapping("/alumni/{yop}")
	@ApiOperation("Find alumni details by yearOfPassing")
	public List<Alumni> getAlumniByYOP(@PathVariable(value="yop") int yop) throws ResourceNotFoundException{
		List<Alumni> aa=alumniService.findAlumniByYOP(yop);
		return  aa;
	}
	
	@DeleteMapping("/alumni/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAlumni(@PathVariable Long id) throws ResourceNotFoundException{
		Alumni alumni = alumniRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Alumni not exist with id :" + id));
		
		alumniRepo.delete(alumni);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
