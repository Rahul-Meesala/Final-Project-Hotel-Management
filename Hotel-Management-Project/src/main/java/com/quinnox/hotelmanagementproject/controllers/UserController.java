package com.quinnox.hotelmanagementproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.hotelmanagementproject.dto.UserDto;
import com.quinnox.hotelmanagementproject.entities.User;
import com.quinnox.hotelmanagementproject.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService service;

	@PostMapping("/add")
	public boolean addUser(@RequestBody UserDto user) {
		service.addUser(user);
		return true;
	}

	@GetMapping("/getuser")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}

	@PutMapping("/update")
	public String updateUser(@RequestBody UserDto user) {
		service.updateUser(user);
		return "User Updated succesfully";
	}

	@DeleteMapping("/delete")
	public boolean deleteUser(int userId) {
		service.deleteUser(userId);
		return true;
	}

	@GetMapping("/getone")
	public User getOneUser(int userId) {
		return service.getOneUser(userId);

	}

}
