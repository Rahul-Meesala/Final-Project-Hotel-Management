package com.quinnox.hotelmanagementproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.hotelmanagementproject.dao.UserDao;
import com.quinnox.hotelmanagementproject.dto.UserDto;
import com.quinnox.hotelmanagementproject.entities.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao dao;

	@Override
	public boolean addUser(UserDto user) {
		dao.addUser(user);
		return true;
	}

	@Override
	public List<User> getAllUsers() {
		return dao.getAllUsers();
	}

	@Override
	public boolean updateUser(UserDto user) {
		dao.updateUser(user);
		return true;
	}

	@Override
	public boolean deleteUser(int userId) {
		dao.deleteUser(userId);
		return true;
	}

	@Override
	public User getOneUser(int userId) {
		return dao.getOneUser(userId);
	}

}
