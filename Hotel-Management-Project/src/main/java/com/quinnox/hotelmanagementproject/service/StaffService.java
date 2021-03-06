package com.quinnox.hotelmanagementproject.service;

import java.util.List;

import com.quinnox.hotelmanagementproject.dto.StaffDto;
import com.quinnox.hotelmanagementproject.entities.Staff;

public interface StaffService {

	public boolean addStaff(StaffDto staff);

	public List<Staff> getAllStaffs();

	public boolean updateStaff(int staffId,StaffDto staff);

	public boolean deleteStaff(int staffId);

	public Staff getOneStaff(int staffId);

}
