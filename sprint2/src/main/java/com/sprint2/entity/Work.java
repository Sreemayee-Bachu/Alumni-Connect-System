package com.sprint2.entity;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="work_details")
public class Work {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long work_id;
	private String company_name;
	private String work_location;
	private String position;
	private String start_date;
	private String end_date;
	private String currently_working;
	public Work() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Work(long work_id, String company_name, String work_location, String position, String start_date,
			String end_date, String currently_working) {
		super();
		this.work_id = work_id;
		this.company_name = company_name;
		this.work_location = work_location;
		this.position = position;
		this.start_date = start_date;
		this.end_date = end_date;
		this.currently_working = currently_working;
	}
	
	public long getWork_id() {
		return work_id;
	}
	public void setWork_id(long work_id) {
		this.work_id = work_id;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getWork_location() {
		return work_location;
	}
	public void setWork_location(String work_location) {
		this.work_location = work_location;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getStart_date() {
		return start_date;
	}
	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}
	public String getEnd_date() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
	public String getCurrently_working() {
		return currently_working;
	}
	public void setCurrently_working(String currently_working) {
		this.currently_working = currently_working;
	}
	@Override
	public String toString() {
		return "Work [work_id=" + work_id + ", company_name=" + company_name + ", work_location=" + work_location
				+ ", position=" + position + ", start_date=" + start_date + ", end_date=" + end_date
				+ ", currently_working=" + currently_working + "]";
	}
	
	
}
