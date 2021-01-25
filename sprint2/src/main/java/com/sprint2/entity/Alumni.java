package com.sprint2.entity;


import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;


/**
 * @author Sree
 *
 */
@Entity
@Table(name="alumni_details")
public class Alumni {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String alumniname;
	
	private String stream;
	private int yearOfPassing;
	private String phone;
	private String email;
	
	

	public Alumni() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Alumni(long id, String alumniname, String stream,
			int yearOfPassing, String phone,String email) {
		super();
		
		this.id = id;
		this.alumniname = alumniname;
		this.stream = stream;
		this.yearOfPassing = yearOfPassing;
		this.phone = phone;
		this.email = email;
	}

	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAlumniname() {
		return alumniname;
	}

	public void setAlumniname(String alumniname) {
		this.alumniname = alumniname;
	}

	public String getStream() {
		return stream;
	}

	public void setStream(String stream) {
		this.stream = stream;
	}

	public int getYearOfPassing() {
		return yearOfPassing;
	}

	public void setYearOfPassing(int yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Alumni [id=" + id + ", alumniname=" + alumniname + ", stream=" + stream + ", yearOfPassing="
				+ yearOfPassing + ", phone=" + phone + ", email=" + email + "]";
	}

	

	

	
}
	