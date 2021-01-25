package com.sprint2.entity;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="post_details")
public class Posts {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long post_id;
	
	private String post_content;
	private int post_likes;
	
	private LocalDate postedOn;
	
	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Posts(long post_id, String post_content, int post_likes, LocalDate postedOn) {
		super();
		this.post_id = post_id;
		this.post_content = post_content;
		this.post_likes = post_likes;
		this.postedOn = LocalDate.now();
	}
	public long getPost_id() {
		return post_id;
	}
	public void setPost_id(long post_id) {
		this.post_id = post_id;
	}
	public String getPost_content() {
		return post_content;
	}
	public void setPost_content(String post_content) {
		this.post_content = post_content;
	}
	public int getPost_likes() {
		return post_likes;
	}
	public void setPost_likes(int post_likes) {
		this.post_likes = post_likes;
	}
	
	public LocalDate getPostedOn() {
		return postedOn;
	}
	public void setPostedOn(LocalDate postedOn) {
		this.postedOn = LocalDate.now();
	}
	
	@Override
	public String toString() {
		return "Posts [post_id=" + post_id + ", post_content=" + post_content + ", post_likes=" +   "]";
	}
	
	
}
