package com.quinnox.hotelmanagementproject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "User")
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userId")
	private int userId;

	@Column(name = "userName")
	private String userName;

	@Column(name = "emailId", unique = true, nullable = false)
	private String emailId;

	@Column(name = "password")
	private String password;

	@Column(name = "phoneNumber")
	private long phoneNumber;

	@Column(name = "address")
	private String address;

	@Column(name = "gender")
	private String gender;
}
