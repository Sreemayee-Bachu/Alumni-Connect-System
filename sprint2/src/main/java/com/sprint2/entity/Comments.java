package com.sprint2.entity;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="comment_details")
public class Comments {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long comment_id;
	
	private String comment_content;
	private int comment_likes;
	
	
	private LocalDate commentedOn;
	
	
	public Comments() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Comments(long comment_id, String comment_content, int comment_likes,
			LocalDate commentedOn) {
		super();
		this.comment_id = comment_id;
		this.comment_content = comment_content;
		this.comment_likes =comment_likes;
		
		this.commentedOn = LocalDate.now();
		
	}
	public long getComment_id() {
		return comment_id;
	}
	public void setComment_id(long comment_id) {
		this.comment_id = comment_id;
	}
	public String getComment_content() {
		return comment_content;
	}
	public void setComment_content(String comment_content) {
		this.comment_content = comment_content;
	}
	public int getComment_likes() {
		return comment_likes;
	}
	public void setComment_likes(int comment_likes) {
		this.comment_likes =comment_likes;
	}
	
	public LocalDate getCommentedOn() {
		return commentedOn;
	}
	public void setCommentedOn(LocalDate commentedOn) {
		this.commentedOn = LocalDate.now();
	}
	@Override
	public String toString() {
		return "Comments [comment_id=" + comment_id + ", comment_content=" + comment_content + ", comment_likes="
				+ comment_likes + ", commentedOn=" + commentedOn + "]";
	}
	
	
	
	

	
}
