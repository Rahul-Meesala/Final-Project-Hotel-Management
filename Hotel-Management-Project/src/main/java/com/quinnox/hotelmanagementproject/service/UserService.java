package com.quinnox.hotelmanagementproject.service;

import java.util.List;

import com.quinnox.hotelmanagementproject.dto.UserDto;
import com.quinnox.hotelmanagementproject.entities.User;

public interface UserService {

	public boolean addUser(UserDto user);

	public List<User> getAllUsers();

	public boolean updateUser(UserDto user);

	public boolean deleteUser(int userId);

	public User getOneUser(int userId);

}
