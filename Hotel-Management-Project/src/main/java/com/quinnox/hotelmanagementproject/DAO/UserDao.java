package com.quinnox.hotelmanagementproject.dao;

import java.util.List;

import com.quinnox.hotelmanagementproject.dto.UserDto;
import com.quinnox.hotelmanagementproject.entities.User;

public interface UserDao {

	public boolean addUser(UserDto user);

	public List<User> getAllUsers();

	public boolean updateUser(UserDto user);

	public int deleteUser(int userId);

	public User getOneUser(int userId);

}
